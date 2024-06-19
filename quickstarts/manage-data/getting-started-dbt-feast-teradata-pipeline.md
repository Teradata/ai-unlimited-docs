---
sidebar_position: 7
author: Ravi Chillanki
email: ravi.chillanki@teradata.com
page_last_update: August 4th, 2023
description: dbt Feast integration with Teradata
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, object storage, business intelligence, enterprise analytics, AI/ML, AI, ML, feature engineering, feature store, FEAST]
---
import ClearscapeDocsNote from '../_partials/vantage_clearscape_analytics.mdx'

# Use dbt and FEAST to build a feature store in Teradata Vantage

## Overview

This tutorial shows an approach to creating a dbt pipeline that takes raw data and turns it into FEAST features. The pipeline leverages  '[ClearScape Analytics functions](https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Teradata-VantageTM-Analytics-Database-Analytic-Functions-17.20)' for data transformations. The output of the transformations is loaded into FEAST to materialize features that can be used in ML models.

## Introduction
### dbt
[dbt](https://www.getdbt.com/product/what-is-dbt) (Data Build Tool) is a data transformation tool that is the cornerstone of the Modern Data Stack. It takes care of the T in ELT (Extract Load Transform). The assumption is that some other process brings raw data into your data warehouse or lake. This data then needs to be transformed.

### Feast
[Feast](https://docs.feast.dev) (Feature Store) is a flexible data system that utilizes existing technology to manage and provide machine learning features to real-time models. It allows for customization to meet specific needs. It also allows us to make features consistently available for training and serving, avoid data leakage and decouple ML from data infrastructure.


## Prerequisites

* Access to a Teradata Vantage database instance.

<ClearscapeDocsNote />

* Feast-Teradata  installed locally. See [Feast-Teradata installation instructions](https://quickstarts.teradata.com/modelops/using-feast-feature-store-with-teradata-vantage.html#_overview)

* dbt installed locally. See [dbt installation instructions](https://quickstarts.teradata.com/dbt.html)

## Objective
The goal is to create a data pipeline with Teradata Vantage as a source, and perform data transformation on some variables in dbt. The principle transformation of data we do in dbt is the one-hot encoding of several columns like gender, marital status, state code, etc. On top of that, the account type column data will be transformed by performing aggregation operations on a couple of columns. All of this together generates the desired dataset with transformed data. The transformed dataset is used as an input into FEAST to store features. Features are then used to generate a training dataset for models.


## Getting started
1. Create a new python environment to manage dbt, feast, and their dependencies. Activate the environment:

``` bash
python3 -m venv env
source env/bin/activate
```

2. Clone the tutorial repository and change the directory to the project directory:

``` bash
git clone https://github.com/Teradata/tdata-pipeline.git
```
The directory structure of the project cloned looks like this:

```
tdata-pipeline/
    feature_repo/
        feature_views.py
        feature_store.yml
    dbt_transformation/
        ...
        macros
        models
        ...
    generate_training_data.py
    CreateDB.sql
    dbt_project.yml
```


## About the Banking warehouse
teddy_bank is a fictitious dataset of banking customers, consisting of mainly 3 tables customers, accounts, and
transactions, with the following entity-relationship diagram:


![dbt feast](../images/dbt3.svg)

dbt takes this raw data and builds the following model, which is more suitable for ML modeling and analytics tools:

![dbt feast](../other-integrations/images/getting-started-dbt-feast-teradata-pipeline/dbt-feast.png)

## Configure dbt
Create file `$HOME/.dbt/profiles.yml` with the following content. Adjust `<host>`, `<user>`, `<password>` to match your Teradata instance.

:::note [Database setup]
The following dbt profile points to a database called `teddy_bank`. You can change `schema` value to point to an existing database in your Teradata Vantage instance:
:::

``` yaml , id="dbt_first_config", role="emits-gtm-events"
dbt_transformation:
  target: dev
  outputs:
    dev:
      type: teradata
      host: <host>
      user: <user>
      password: <password>
      schema: teddy_bank
      tmode: ANSI
```
Validate the setup:

``` bash
dbt debug
```

If the debug command returned errors, you likely have an issue with the content of `profiles.yml`.

## Configure FEAST
Feast configuration addresses connection to your Vantage database. The yaml file created while initializing the feast
project, `$HOME/.feast/feature_repo/feature_store.yml` can hold the details of offline storage, online storage, provider
and registry. Adjust `<host>`, `<user>`, `<password>` to match your Teradata instance.

:::note [Database setup]
The following dbt profile points to a database called `teddy_bank`. You can change `schema` value to point to an
existing database in your Teradata Vantage instance
:::

### Offline Store Config

``` yaml , id="feast_first_config", role="emits-gtm-events"
project: td_pipeline
registry:
    registry_type: sql
    path: teradatasql://<user>:<password>@<hostIP>/?database=teddy_bank&LOGMECH=TDNEGO
provider: local
offline_store:
    type: feast_teradata.offline.teradata.TeradataOfflineStore
    host: <host>
    database: teddy_bank
    user: <user>
    password: <password>
    log_mech: TDNEGO
entity_key_serialization_version: 2
```
### Syntax for Teradata SQL Registry
``` python
path = 'teradatasql://'+ teradata_user +':' + teradata_password + '@'+host + '/?database=' +
        teradata_database + '&LOGMECH=' + teradata_log_mech
```
## Run dbt
In this step, we will populate the following data tables: `customers`, `accounts`, and `transactions`.

``` bash
dbt seed
```

### Create the dimensional model
Now that we have the raw data tables, we can instruct dbt to create the dimensional model:

``` bash
dbt run --select Analytic_Dataset
```

## Run FEAST
### Feature Repository definition
* `TeradataSource:` Data Source for features stored in Teradata (Enterprise or Lake) or accessible via a Foreign Table from Teradata (NOS, QueryGrid)

* `Entity:` A collection of semantically related features

* `Feature View:` A feature view is a group of feature data from a specific data source. Feature views allow you to consistently define features and their data sources, enabling the reuse of feature groups across a project


``` python
DBT_source = TeradataSource( database=dbload, table=f"Analytic_Dataset", timestamp_field="event_timestamp")

customer = Entity(name = "customer", join_keys = ['cust_id'])

ads_fv = FeatureView(name="ads_fv",entities=[customer],source=DBT_source, schema=[
        Field(name="age", dtype=Float32),
        Field(name="income", dtype=Float32),
        Field(name="q1_trans_cnt", dtype=Int64),
        Field(name="q2_trans_cnt", dtype=Int64),
        Field(name="q3_trans_cnt", dtype=Int64),
        Field(name="q4_trans_cnt", dtype=Int64),
    ],)
```
### Generate training data
The approach to generating training data can vary. Depending upon the requirements, 'entitydf' may be joined with the source data tables using the feature views mapping. Here is a sample function that generates a training dataset.
``` python
def get_Training_Data():
    # Initialize a FeatureStore with our current repository's configurations
    store = FeatureStore(repo_path="feature_repo")
    con = create_context(host = os.environ["latest_vm"], username = os.environ["dbc_pwd"],
            password = os.environ["dbc_pwd"], database = "EFS")
    entitydf = DataFrame('Analytic_Dataset').to_pandas()
    entitydf.reset_index(inplace=True)
    print(entitydf)
    entitydf = entitydf[['cust_id','event_timestamp']]
    training_data = store.get_historical_features(
        entity_df=entitydf,
        features=[
        "ads_fv:age"
        ,"ads_fv:income"
        ,"ads_fv:q1_trans_cnt"
        ,"ads_fv:q2_trans_cnt"
        ,"ads_fv:q3_trans_cnt"
        ,"ads_fv:q4_trans_cnt"
        ],
        full_feature_names=True
    ).to_df()

    return training_data


```

## Summary
This tutorial demonstrated how to use dbt and FEAST with Teradata Vantage. The sample project takes raw data from Teradata Vantage and produces features with dbt. Metadata of features that form the base to generate a training dataset for a model was then created with FEAST; all its corresponding tables that create the feature store, are also generated at runtime within the same database.

## Further Reading
* [dbt documentation](https://docs.getdbt.com/docs)
* [dbt-teradata plugin documentation](https://github.com/Teradata/dbt-teradata)
* [Feast Scalable Registry](https://docs.feast.dev/tutorials/using-scalable-registry)
* [Enabling highly scalable feature store with Teradata Vantage and FEAST](https://medium.com/teradata/enabling-highly-scalable-feature-store-with-teradata-vantage-and-feast-e01008fa8fdb)
* [Git repository](https://github.com/Teradata/tdata-pipeline) for this project.
