---
sidebar_position: 19
author: Daniel Herrera
email: daniel.herrera2@teradata.com
page_last_update: March 18, 2024
description: Ingest and catalog data from Teradata Vantage to Amazon S3
keywords: [data warehouses, object storage, teradata, vantage, cloud data platform, data engineering, enterprise analytics, aws glue, aws lake formation, aws glue catalog]
---

# Ingest and Catalog Data from Teradata Vantage to Amazon S3 with AWS Glue Scripts

### Overview
This quickstart details the process of ingesting and cataloging data from Teradata Vantage to Amazon S3 with AWS Glue. 

:::tip
For ingesting data to Amazon S3 when cataloging is not a requirement consider [Teradata Write NOS capabilities](https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/SQL-Data-Manipulation-Language/Working-with-External-Data/WRITE_NOS).
:::


### Prerequisites

import ClearscapeDocsNote from '../_partials/vantage_clearscape_analytics.mdx'

* Access to an [Amazon AWS account](https://aws.amazon.com)
* Access to a Teradata Vantage instance
  <ClearscapeDocsNote />
* A database [client](https://quickstarts.teradata.com/other-integrations/configure-a-teradata-vantage-connection-in-dbeaver.html) to send queries for loading the test data

### Loading of test data
* In your favorite database client run the following queries
+
``` sql
CREATE DATABASE teddy_retailers_inventory
AS PERMANENT = 110e6;

CREATE TABLE teddy_retailers_inventory.source_catalog AS
(
  SELECT product_id, product_name, product_category, price_cents
    FROM (
		LOCATION='/s3/dev-rel-demos.s3.amazonaws.com/demo-datamesh/source_products.csv') as products
) WITH DATA;

CREATE TABLE teddy_retailers_inventory.source_stock AS
(
  SELECT entry_id, product_id, product_quantity, purchase_price_cents, entry_date
    FROM (
		LOCATION='/s3/dev-rel-demos.s3.amazonaws.com/demo-datamesh/source_stock.csv') as stock
) WITH DATA;
```

### Amazon AWS setup
In this section, we will cover in detail each of the steps below:

* Create an Amazon S3 bucket to ingest data
* Create an AWS Glue Catalog Database for storing metadata
* Store Teradata Vantage credentials in AWS Secrets Manager
* Create an AWS Glue Service Role to assign to ETL jobs
* Create a connection to a Teradata Vantage Instance in AWS Glue
* Create an AWS Glue Job
* Draft a script for automated ingestion and cataloging of Teradata Vantage data into Amazon S3

### Create an Amazon S3 Bucket to Ingest Data
* In Amazon S3, select `Create bucket`.
![create bucket](../cloud-guides/images/ingest-catalog-data-teradata-s3-with-glue/Buckets-1.PNG)
* Assign a name to your bucket and take note of it.
![name bucket](../cloud-guides/images/ingest-catalog-data-teradata-s3-with-glue/Buckets-2.PNG)
* Leave all settings at their default values.
* Click on `Create bucket`.
![save bucket](../cloud-guides/images/ingest-catalog-data-teradata-s3-with-glue/Buckets-3.PNG)

### Create an AWS Glue Catalog Database for Storing Metadata

* In AWS Glue, select Data catalog, Databases.
* Click on `Add database`.
![add database](../cloud-guides/images/ingest-catalog-data-teradata-s3-with-glue/Cat-1.PNG)
* Define a database name and click on `Create database`.
![add database name](../cloud-guides/images/ingest-catalog-data-teradata-s3-with-glue/Cat-2.PNG)

### Store Teradata Vantage credentials in AWS Secrets Manager

* In AWS Secrets Manager, select `Create new secret`.
![create secret](../cloud-guides/images/ingest-catalog-data-teradata-s3-with-glue/secret-1.PNG)
* The secret should be an `Other type of secret` with the following keys and values according to your Teradata Vantage Instance:
    * USER
    * PASSWORD
:::tip
In the case of ClearScape Analytics Experience, the user is always "demo_user," and the password is the one you defined when creating your ClearScape Analytics Experience environment.
:::
![secret values](../cloud-guides/images/ingest-catalog-data-teradata-s3-with-glue/secret-2.PNG)
* Assign a name to the secret.
* The rest of the steps can be left with the default values.
* Create the secret.

### Create an AWS Glue Service Role to Assign to ETL Jobs
The role you create should have access to the typical permissions of a Glue Service Role, but also access to read the secret and S3 bucket you've created.

* In AWS, go to the IAM service.
* Under Access Management, select `Roles`.
* In roles, click on `Create role`.
![create role](../cloud-guides/images/ingest-catalog-data-teradata-s3-with-glue/Role-1.PNG)
* In select trusted entity, select `AWS service` and pick `Glue` from the dropdown.
![role type](../cloud-guides/images/ingest-catalog-data-teradata-s3-with-glue/Role-2.PNG)
* In add permissions:
    * Search for `AWSGlueServiceRole`.
    * Click the related checkbox.
    * Search for `SecretsManagerReadWrite`.
    * Click the related checkbox.
* In Name, review, and create:
    * Define a name for your role.
![name role](../cloud-guides/images/ingest-catalog-data-teradata-s3-with-glue/Role-3.PNG)
* Click on `Create role`.
* Return to Access Management, Roles, and search for the role you've just created.
* Select your role.
* Click on `Add permissions`, then `Create inline policy`.
* Click on `JSON`.
* In the Policy editor, paste the JSON object below, substituting the name of the bucket you've created.
``` json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "FullAccessToSpecificBucket",
            "Effect": "Allow",
            "Action": "s3:*",
            "Resource": [1
                "arn:aws:s3:::<bucket-name>",
                "arn:aws:s3:::<bucket-name>/*"
            ]
        }
    ]
}
```
* Click `Next`.
![inline policy](../cloud-guides/images/ingest-catalog-data-teradata-s3-with-glue/Role-4.PNG)
* Assign a name to your policy.
* Click on `Create policy`.

### Create a connection to a Teradata Vantage Instance in AWS Glue

* In AWS Glue, select `Data connections`.
![connection](../cloud-guides/images/ingest-catalog-data-teradata-s3-with-glue/Glue-1.PNG)
* Under Connectors, select `Create connection`.
* Search for and select the Teradata Vantage data source.
![teradata type](../cloud-guides/images/ingest-catalog-data-teradata-s3-with-glue/Glue-2.PNG)
* In the dialog box, enter the URL of your Teradata Vantage instance in JDBC format.
:::tip
In the case of ClearScape Analytics Experience, the URL follows the following structure: 
`jdbc:teradata://<URL Host>/DATABASE=demo_user,DBS_PORT=1025`
:::
* Select the AWS Secret created in the previous step.
* Name your connection and finish the creation process.
![connection configuration](../cloud-guides/images/ingest-catalog-data-teradata-s3-with-glue/Glue-3.PNG)

### Create an AWS Glue Job
* In AWS Glue, select `ETL Jobs` and click on `Script editor`.
![script editor creation](../cloud-guides/images/ingest-catalog-data-teradata-s3-with-glue/Glue-script-1.PNG)
* Select `Spark` as the engine and choose to start fresh.
![script editor type](../cloud-guides/images/ingest-catalog-data-teradata-s3-with-glue/Glue-script-2.PNG)

### Draft a script for automated ingestion and cataloging of Teradata Vantage data into Amazon S3

* Copy the following script into the editor.
    * The script requires the following modifications:
        * Substitute the name of your S3 bucket.
        * Substitute the name of your Glue catalog database.
        * If you are not following the example in the guide, modify the database name and the tables to be ingested and cataloged.
        * For cataloging purposes, only the first row of each table is ingested in the example. This query can be modified to ingest the whole table or to filter selected rows.

``` python , id="glue-script-first-run" role="emits-gtm-events"
# Import section
import sys
from awsglue.transforms import *
from awsglue.utils import getResolvedOptions
from pyspark.context import SparkContext
from awsglue.context import GlueContext
from awsglue.job import Job
from pyspark.sql import SQLContext

# PySpark Config Section
args = getResolvedOptions(sys.argv, ["JOB_NAME"])
sc = SparkContext()
glueContext = GlueContext(sc)
spark = glueContext.spark_session
job = Job(glueContext)
job.init(args["JOB_NAME"], args)

#ETL Job Parameters Section
# Source database
database_name = "teddy_retailers_inventory"

# Source tables
table_names = ["source_catalog","source_stock"]

# Target S3 Bucket
target_s3_bucket = "s3://<your-bucket-name>"

#Target catalog database 
catalog_database_name = "<your-catalog-database-name>" 


# Job function abstraction
def process_table(table_name, transformation_ctx_prefix, catalog_database, catalog_table_name):
    dynamic_frame = glueContext.create_dynamic_frame.from_options(
        connection_type="teradata",
        connection_options={
            "dbtable": table_name,
            "connectionName": "Teradata connection default",
            "query": f"SELECT TOP 1 * FROM {table_name}", # This line can be modified to ingest the full table or rows that fulfill an specific condition
        },
        transformation_ctx=transformation_ctx_prefix + "_read",
    )

    s3_sink = glueContext.getSink(
        path=target_s3_bucket,
        connection_type="s3",
        updateBehavior="UPDATE_IN_DATABASE",
        partitionKeys=[],
        compression="snappy",
        enableUpdateCatalog=True,
        transformation_ctx=transformation_ctx_prefix + "_s3",
    )
    # Dynamically set catalog table name based on function parameter
    s3_sink.setCatalogInfo(
        catalogDatabase=catalog_database, catalogTableName=catalog_table_name
    )
    s3_sink.setFormat("csv")
    s3_sink.writeFrame(dynamic_frame)


# Job execution section
for table_name in table_names:
    full_table_name = f"{database_name}.{table_name}"  
    transformation_ctx_prefix = f"{database_name}_{table_name}"  
    catalog_table_name = f"{table_name}_catalog"  
    # Call your process_table function for each table
    process_table(full_table_name, transformation_ctx_prefix, catalog_database_name, catalog_table_name)

job.commit()
```

* Assign a name to your script
![script in editor](../cloud-guides/images/ingest-catalog-data-teradata-s3-with-glue/Glue-script-3.PNG)

* In Job details, Basic properties:
    * Select the IAM role you created for the ETL job.
    * For testing, select "2" as the Requested number of workers, this is the minimum allowed.
![script configurations](../cloud-guides/images/ingest-catalog-data-teradata-s3-with-glue/Glue-script-4.PNG)
    * In `Advanced properties`, `Connections` select your connection to Teradata Vantage. 
:::tip
The connection created must be referenced twice, once in the job configuration, once in the script itself.
:::
![script configuration connection](../cloud-guides/images/ingest-catalog-data-teradata-s3-with-glue/Glue-script-5.PNG)
* Click on `Save`.
* Click on `Run`.
    * The ETL job takes a couple of minutes to complete, most of this time is related to starting the Spark cluster.

### Checking the Results

* After the job is finished:
    * Go to Data Catalog, Databases.
    * Click on the catalog database you created.
    * In this location, you will see the tables extracted and cataloged through your Glue ETL job.
![result tables](../cloud-guides/images/ingest-catalog-data-teradata-s3-with-glue/Results.PNG)

* All tables ingested are also present as compressed files in S3. Rarely, these files would be queried directly. Services such as AWS Athena can be used to query the files relying on the catalog metadata.

### Summary

In this quick start, we learned how to ingest and catalog data in Teradata Vantage to Amazon S3 with AWS Glue Scripts.

### Further reading
* [Integrate Teradata Vantage with Google Cloud Data Catalog](https://quickstarts.teradata.com/cloud-guides/integrate-teradata-vantage-with-google-cloud-data-catalog.html)

import CommunityLinkPartial from '../_partials/community_link.mdx';

<CommunityLinkPartial />