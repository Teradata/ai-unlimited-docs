---
sidebar_position: 12
id: create-parquet-files-in-object-storage
author: Obed Vega
email: obed.vega@teradata.com
page_last_update: August 2nd, 2022
description: Teradata Vantage Native Object Storage - read and write from/to object storage, unified SQL interface for Vantage and object storage.
keywords: [data warehouses, compute storage separation, Teradata, vantage, cloud data platform, object storage, business intelligence, enterprise analytics, parquet, create parquet files]
---

import UseCase from '../_partials/use-csae.mdx';
import CommunityLink from '../_partials/community_link.mdx';

# Create Parquet files in object storage

## Overview
Native Object Storage (NOS) is a Vantage feature that allows you to query data stored in files such as CSV, JSON, and Parquet format datasets.
These datasets are located on external S3-compatible object storage such as AWS S3, Google GCS, Azure Blob or on-prem implementations.
It's useful in scenarios where you want to explore data without building a data pipeline to bring it into Vantage. This tutorial demonstrates how to export data from Vantage to object storage using the Parquet file format.

## Prerequisites

You need access to a Teradata Vantage instance. NOS is enabled in all Vantage editions from Vantage Express through Developer, DYI to Vantage as a Service starting from version 17.10.

:::info
This tutorial is based on s3 aws object storage. You will need your own s3 bucket with write permissions to complete the tutorial.
:::

<UseCase />

## Create a Parquet file with WRITE_NOS function

`WRITE_NOS` allows you to extract selected or all columns from a database table or from derived results and write to external object storage, such as Amazon S3, Azure Blob storage, Azure Data Lake Storage Gen2, and Google Cloud Storage. This functionality stores data in Parquet format.

You can find more documentation about `WRITE_NOS` functionality in the [NOS documentation](https://docs.teradata.com/r/Teradata-VantageTM-Native-Object-Store-Getting-Started-Guide/June-2022/Writing-Data-to-External-Object-Store).

You will need access to a database where you can execute `WRITE_NOS` function. If you don't have such a database, run the following commands:

``` sql
CREATE USER db AS PERM=10e7, PASSWORD=db;

-- Don't forget to give the proper access rights
GRANT EXECUTE FUNCTION on TD_SYSFNLIB.READ_NOS to db;
GRANT EXECUTE FUNCTION on TD_SYSFNLIB.WRITE_NOS to db;
```

:::note
If you would like to learn more about setting up users and their privileges, checkout the [NOS documentation](https://docs.teradata.com/r/Teradata-VantageTM-Native-Object-Store-Getting-Started-Guide/June-2022/Setting-Up-Access/Setting-Access-Privileges).
:::


1. Let's first create a table on your Teradata Vantage instance:

```sql
CREATE SET TABLE db.parquet_table ,FALLBACK ,
     NO BEFORE JOURNAL,
     NO AFTER JOURNAL,
     CHECKSUM = DEFAULT,
     DEFAULT MERGEBLOCKRATIO,
     MAP = TD_MAP1
     (
      column1 SMALLINT NOT NULL,
      column2 DATE FORMAT 'YY/MM/DD' NOT NULL,
      column3 DECIMAL(10,2))
PRIMARY INDEX ( column1 );
```

2. Populate your table with example data:
```sql
INSERT INTO db.parquet_table (1,'2022/01/01',1.1);
INSERT INTO db.parquet_table (2,'2022/01/02',2.2);
INSERT INTO db.parquet_table (3,'2022/01/03',3.3);
```

Your table should now look like this:

```sql
column1   column2       column3
-------  --------  ------------
      1  22/01/01          1.10
      2  22/01/02          2.20
      3  22/01/03          3.30
```

3. Create the parquet file with `WRITE_NOS`. Don't forget to replace `<BUCKET_NAME>` with the name of your s3 bucket. Also,replace `<YOUR-ACCESS-KEY-ID>` and `<YOUR-SECRET-ACCESS-KEY>` with your access key and secret.

:::note
Check your cloud provider docs how to create credentials to access object storage. For example, for AWS check out [How do I create an AWS access key?](https://aws.amazon.com/premiumsupport/knowledge-center/create-access-key/)
:::

```sql
SELECT * FROM WRITE_NOS (
ON ( SELECT * FROM db.parquet_table)
USING
LOCATION('/s3/<BUCKET_NAME>.s3.amazonaws.com/parquet_file_on_NOS.parquet')
AUTHORIZATION('{"ACCESS_ID":"<YOUR-ACCESS-KEY-ID>",
"ACCESS_KEY":"<YOUR-SECRET-ACCESS-KEY>"}')
STOREDAS('PARQUET')
MAXOBJECTSIZE('16MB')
COMPRESSION('SNAPPY')
INCLUDE_ORDERING('TRUE')
INCLUDE_HASHBY('TRUE')
) as d;
```

Now you have created a parquet file in your object storage bucket. Now to easily query your file you need to follow step number 4.

4. Create a NOS-backed foreign table. Don't forget to replace `<BUCKET_NAME>` with the name of your s3 bucket. Also,replace `<YOUR-ACCESS-KEY-ID>` and `<YOUR-SECRET-ACCESS-KEY>` with your access key and secret:
```sql
CREATE MULTISET FOREIGN TABLE db.parquet_table_to_read_file_on_NOS
, EXTERNAL SECURITY DEFINER TRUSTED CEPH_AUTH,
MAP = TD_MAP1
(
  Location VARCHAR(2048) CHARACTER SET UNICODE CASESPECIFIC
  , col1 SMALLINT
  , col2 DATE
  , col3 DECIMAL(10,2)

)
USING (
    LOCATION ('/s3/<BUCKET_NAME>.s3.amazonaws.com/parquet_file_on_NOS.parquet')
    AUTHORIZATION('{"ACCESS_ID":"<YOUR-ACCESS-KEY-ID>",
    "ACCESS_KEY":"<YOUR-SECRET-ACCESS-KEY>"}')
    STOREDAS ('PARQUET')
)NO PRIMARY INDEX;
```

5. Now you are ready to Query your parquet file on NOS, let's try the following query:
```sql
SELECT col1, col2, col3 FROM db.parquet_table_to_read_file_on_NOS;
```

The data returned from the query should look something like this:

```sql
  col1      col2          col3
------  --------  ------------
     1  22/01/01          1.10
     2  22/01/02          2.20
     3  22/01/03          3.30
```

## Summary

In this tutorial we have learned how to export data from Vantage to a parquet file on object storage using Native Object Storage (NOS). NOS supports reading and importing data stored in CSV, JSON and Parquet formats. NOS can also export data from Vantage to object storage.

## Further reading
* [Teradata Vantage™ - Writing Data to External Object Store](https://docs.teradata.com/r/Teradata-VantageTM-Native-Object-Store-Getting-Started-Guide/June-2022/Writing-Data-to-External-Object-Store)

<CommunityLink />