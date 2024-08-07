---
sidebar_position: 11
author: Adam Tworkiewicz
email: adam.tworkiewicz@teradata.com
page_last_update: April 6th, 2022
title: Load data with TPT
description: Load data into Vantage efficiently using Teradata Parallel Transporter (TPT).
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, object storage, business intelligence, enterprise analytics, Fastload, Teradata Parallel Transporter, TPT]
id: run-bulkloads-efficiently-with-teradata-parallel-transporter
---

import ClearscapeDocsNote from '../_partials/vantage_clearscape_analytics.mdx';
import Tabs from '../_partials/tabsTPT.mdx';

# Run large bulkloads efficiently with Teradata Parallel Transporter (TPT)

## Overview

We often have a need to move large volumes of data into Vantage. Teradata offers `Teradata Parallel Transporter (TPT)` utility that can efficiently load large amounts of data into Teradata Vantage. This how-to demonstrates how to use `TPT`. In this scenario, we will load over 300k records, over 40MB of data, in a couple of seconds.

## Prerequisites

* Access to a Teradata Vantage instance.
    <ClearscapeDocsNote />

* Download Teradata Tools and Utilities (TTU) -  supported platforms: [Windows](https://downloads.teradata.com/download/tools/teradata-tools-and-utilities-windows-installation-package), [MacOS](https://downloads.teradata.com/download/tools/teradata-tools-and-utilities-mac-osx-installation-package), [Linux](https://downloads.teradata.com/download/tools/teradata-tools-and-utilities-linux-installation-package-0) (requires registration).

## Install TTU

<Tabs />


## Get Sample data

We will be working with the US tax fillings for nonprofit organizations. Nonprofit tax filings are public data. The US Internal Revenue Service publishes them in S3 bucket. Let's grab a summary of filings for 2020: `https://storage.googleapis.com/clearscape_analytics_demo_data/TPT/index_2020.csv`. You can use your browser, `wget` or `curl` to save the file locally.

## Create a database

Let's create a database in Vantage. Use your favorite SQL tool to run the following query:

``` sql
CREATE DATABASE irs
AS PERMANENT = 120e6, -- 120MB
    SPOOL = 120e6; -- 120MB
```

## Run TPT

We will now run `TPT`. `TPT` is a command-line tool that can be used to load, extract and update data in Teradata Vantage. These various functions are implemented in so called `operators`. For example, loading data into Vantage is handled by the `Load` operator. The `Load` operator is very efficient in uploading large amounts of data into Vantage. The `Load` operator, in order to be fast, has several restrictions in place. It can only populate empty tables. Inserts to already populated tables are not supported. It doesn't support tables with secondary indices. Also, it won't insert duplicate records, even if a table is a `MULTISET` table. For the full list of restrictions check out [Teradata® TPT Reference - Load Operator - Restrictions and Limitations](https://docs.teradata.com/r/Teradata-Parallel-Transporter-Reference/February-2022/Load-Operator/Usage-Notes/Normalized-Tables/Restrictions-and-Limitations).

TPT has its own scripting language. The language allows you to prepare the database with arbitrary SQL commands, declare the input source and define how the data should be inserted into Vantage.

To load the csv data to Vantage, we will define and run a job. The job will prepare the database. It will remove old log and error tables and create the target table. It will then read the file and insert the data into the database.

* Create a job variable file that will tell TPT how to connect to our Vantage database. Create file `jobvars.txt` and insert the following content. Replace `host` with the host name of your database. For example, if you are using a local Vantage Express instance, use `127.0.0.1`. `username` with the database user name, and `password` with the database password. Note that the preparation step (DDL) and the load step have their own configuration values and that the config values need to be entered twice to configure both the DDL and the load step.

    ``` bash , id="tpt_first_config", role="emits-gtm-events"
    TargetTdpId           = 'host'
    TargetUserName        = 'username'
    TargetUserPassword    = 'password'

    FileReaderDirectoryPath = ''
    FileReaderFileName      = 'index_2020.csv'
    FileReaderFormat        = 'Delimited'
    FileReaderOpenMode      = 'Read'
    FileReaderTextDelimiter = ','
    FileReaderSkipRows      = 1

    DDLErrorList = '3807'

    LoadLogTable    = 'irs.irs_returns_lg'
    LoadErrorTable1 = 'irs.irs_returns_et'
    LoadErrorTable2 = 'irs.irs_returns_uv'
    LoadTargetTable = 'irs.irs_returns'
    ```

* Create a file with the following content and save it as `load.txt`. See comments within the job file to understand its structure.

    ``` bash
    DEFINE JOB file_load
    DESCRIPTION 'Load a Teradata table from a file'
    (
      /*
        Define the schema of the data in the csv file
      */
      DEFINE SCHEMA SCHEMA_IRS
        (
          in_return_id     VARCHAR(19),
          in_filing_type   VARCHAR(5),
          in_ein           VARCHAR(19),
          in_tax_period    VARCHAR(19),
          in_sub_date      VARCHAR(22),
          in_taxpayer_name VARCHAR(100),
          in_return_type   VARCHAR(5),
          in_dln           VARCHAR(19),
          in_object_id     VARCHAR(19)
        );

      /*
        In the first step, we are sending statements to remove old tables
        and create a new one.
        This step replies on configuration stored in `od_IRS` operator
      */
      STEP st_Setup_Tables
      (
        APPLY
          ('DROP TABLE ' || @LoadLogTable || ';'),
          ('DROP TABLE ' || @LoadErrorTable1 || ';'),
          ('DROP TABLE ' || @LoadErrorTable2 || ';'),
          ('DROP TABLE ' || @LoadTargetTable || ';'),
          ('CREATE TABLE ' || @LoadTargetTable || ' (
              return_id INT,
              filing_type VARCHAR(5) CHARACTER SET LATIN NOT CASESPECIFIC,
              ein INT,
              tax_period INT,
              sub_date VARCHAR(100) CHARACTER SET LATIN NOT CASESPECIFIC,
              taxpayer_name VARCHAR(100) CHARACTER SET LATIN NOT CASESPECIFIC,
              return_type VARCHAR(5) CHARACTER SET LATIN NOT CASESPECIFIC,
              dln BIGINT,
              object_id BIGINT
            )
            PRIMARY INDEX ( return_id );')
        TO OPERATOR ($DDL);
      );

      /*
        Finally, in this step we read the data from the file operator
        and send it to the load operator.
      */
      STEP st_Load_File
      (
        APPLY
          ('INSERT INTO ' || @LoadTargetTable || ' (
              return_id,
              filing_type,
              ein,
              tax_period,
              sub_date,
              taxpayer_name,
              return_type,
              dln,
              object_id
          ) VALUES (
              :in_return_id,
              :in_filing_type,
              :in_ein,
              :in_tax_period,
              :in_sub_date,
              :in_taxpayer_name,
              :in_return_type,
              :in_dln,
              :in_object_id
          );')
        TO OPERATOR ($LOAD)
        SELECT * FROM OPERATOR($FILE_READER(SCHEMA_IRS));
      );
    );
    ```

* Run the job:

    ``` bash
    tbuild -f load.txt -v jobvars.txt -j file_load
    ```

    A successful run will return logs that look like this:

    ``` bash
    Teradata Parallel Transporter Version 17.10.00.10 64-Bit
    The global configuration file '/opt/teradata/client/17.10/tbuild/twbcfg.ini' is used.
      Log Directory: /opt/teradata/client/17.10/tbuild/logs
      Checkpoint Directory: /opt/teradata/client/17.10/tbuild/checkpoint

    Job log: /opt/teradata/client/17.10/tbuild/logs/file_load-4.out
    Job id is file_load-4, running on osboxes
    Teradata Parallel Transporter SQL DDL Operator Version 17.10.00.10
    od_IRS: private log not specified
    od_IRS: connecting sessions
    od_IRS: sending SQL requests
    od_IRS: TPT10508: RDBMS error 3807: Object 'irs_returns_lg' does not exist.
    od_IRS: TPT18046: Error is ignored as requested in ErrorList
    od_IRS: TPT10508: RDBMS error 3807: Object 'irs_returns_et' does not exist.
    od_IRS: TPT18046: Error is ignored as requested in ErrorList
    od_IRS: TPT10508: RDBMS error 3807: Object 'irs_returns_uv' does not exist.
    od_IRS: TPT18046: Error is ignored as requested in ErrorList
    od_IRS: disconnecting sessions
    od_IRS: Total processor time used = '0.013471 Second(s)'
    od_IRS: Start : Thu Apr  7 20:56:32 2022
    od_IRS: End   : Thu Apr  7 20:56:32 2022
    Job step st_Setup_Tables completed successfully
    Teradata Parallel Transporter Load Operator Version 17.10.00.10
    ol_IRS: private log not specified
    Teradata Parallel Transporter DataConnector Operator Version 17.10.00.10
    op_IRS[1]: Instance 1 directing private log report to 'dtacop-root-368731-1'.
    op_IRS[1]: DataConnector Producer operator Instances: 1
    op_IRS[1]: ECI operator ID: 'op_IRS-368731'
    op_IRS[1]: Operator instance 1 processing file 'index_2020.csv'.
    ol_IRS: connecting sessions
    ol_IRS: preparing target table
    ol_IRS: entering Acquisition Phase
    ol_IRS: entering Application Phase
    ol_IRS: Statistics for Target Table:  'irs.irs_returns'
    ol_IRS: Total Rows Sent To RDBMS:      333722
    ol_IRS: Total Rows Applied:            333722
    ol_IRS: Total Rows in Error Table 1:   0
    ol_IRS: Total Rows in Error Table 2:   0
    ol_IRS: Total Duplicate Rows:          0
    op_IRS[1]: Total files processed: 1.
    ol_IRS: disconnecting sessions
    Job step st_Load_File completed successfully
    Job file_load completed successfully
    ol_IRS: Performance metrics:
    ol_IRS:     MB/sec in Acquisition phase: 9.225
    ol_IRS:     Elapsed time from start to Acquisition phase:   2 second(s)
    ol_IRS:     Elapsed time in Acquisition phase:   5 second(s)
    ol_IRS:     Elapsed time in Application phase:   3 second(s)
    ol_IRS:     Elapsed time from Application phase to end: < 1 second
    ol_IRS: Total processor time used = '0.254337 Second(s)'
    ol_IRS: Start : Thu Apr  7 20:56:32 2022
    ol_IRS: End   : Thu Apr  7 20:56:42 2022
    Job start: Thu Apr  7 20:56:32 2022
    Job end:   Thu Apr  7 20:56:42 2022
    ```


## `TPT` vs. NOS

In our case, the file is in an S3 bucket. That means, that we can use Native Object Storage (NOS) to ingest the data:

``` sql
-- create an S3-backed foreign table
CREATE FOREIGN TABLE irs_returns_nos
    USING ( LOCATION('/s3/s3.amazonaws.com/irs-form-990/index_2020.csv') );

-- load the data into a native table
CREATE MULTISET TABLE irs_returns_nos_native
    (RETURN_ID, FILING_TYPE, EIN, TAX_PERIOD, SUB_DATE, TAXPAYER_NAME)
AS (
    SELECT RETURN_ID, FILING_TYPE, EIN, TAX_PERIOD, SUB_DATE, TAXPAYER_NAME FROM irs_returns_nos
) WITH DATA
NO PRIMARY INDEX;
```

The NOS solution is convenient as it doesn't depend on additional tools. It can be implemented using only SQL. It performs well, especially for Vantage deployments with a high number of AMPs as NOS tasks are delegated to AMPs and run in parallel. Also, splitting the data in object storage into multiple files may further improve performance.

## Summary

This how-to demonstrated how to ingest large amounts of data into Vantage. We loaded hundreds of thousands or records into Vantage in a couple of seconds using `TPT`.

## Further reading
* [Teradata® TPT User Guide](https://docs.teradata.com/r/Teradata-Parallel-Transporter-User-Guide/February-2022)
* [Teradata® TPT Reference](https://docs.teradata.com/r/Teradata-Parallel-Transporter-Reference/February-2022)
* [Query data stored in object storage](./nos.md)
 

import CommunityLinkPartial from '../_partials/community_link.mdx';

<CommunityLinkPartial />
