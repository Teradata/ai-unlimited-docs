---
sidebar_position: 4
author: Sudha Vedula
email: sudha.vedula@teradata.com
page_last_update: May 29th, 2023
description: Send queries using REST API. Teradata® Query Service is a middleware that provides REST APIs for Vantage.
keywords: [query service, teradata, vantage, query, REST API]
---

import ClearscapeDocsNote from '../_partials/vantage_clearscape_analytics.mdx'

# Send queries using REST API

## Overview

Teradata Query Service is a REST API for Vantage that you can use to run standard SQL statements without managing client-side drivers. Use Query Service if you are looking to query and access the Analytics Database through a REST API.

This how-to provides examples of common use cases to help you get started with Query Service API.

## Prerequisites

Before starting, make sure you have:
*	Access to a VantageCloud system where Query Service is provisioned, or a VantageCore with Query Service enabled connectivity. If you are an admin and need to install Query Service, see [Query Service Installation, Configuration, and Usage Guide](https://docs.teradata.com/r/Teradata-Query-Service-Installation-Configuration-and-Usage-Guide-for-Customers/April-2022).

  <ClearscapeDocsNote />

*	Query Service hostname and system name
* Authorization credentials to connect to the database

Having trouble with the prerequisites? Contact Teradata for setup information.

## Query Service API examples

When using the examples, please keep in mind that:

* The examples in this document use Python, and you can use these to create examples in your language of choice.
* The examples provided here are complete and ready for you to use, although most require a little customization.
  * The examples in this document use the URL `https://<QS_HOSTNAME>:1443/`.
  * Replace the following variables with your own value:
    * `<QS_HOSTNAME>`: Server where Query Service is installed
    * `<SYSTEM_NAME>`: Preconfigured alias of the system

:::note
If your Vantage instance is provided through ClearScape Analytics Experience,`<QS_HOSTNAME>`, is the host URL of your ClearScape Analytics Experience environment, `<SYSTEM_NAME>` is 'local'.
:::


## Connect to your Query Service instance

Provide valid credentials to access the target Analytics Database using HTTP Basic or JWT authentication.

### HTTP Basic authentication

The database username and password are combined into a string (`"username : password"`) which is then encoded using Base64. The API response contains the authorization method and encoded credentials.

**Request**

``` python , id="queryservice_first_query", role="emits-gtm-events"
import requests
import json
import base64
requests.packages.urllib3.disable_warnings()

# run it from local.

db_user, db_password = 'dbc','dbc'
auth_encoded = db_user + ':' + db_password
auth_encoded = base64.b64encode(bytes(auth_encoded, 'utf-8'))
auth_str = 'Basic ' + auth_encoded.decode('utf-8')

print(auth_str)

headers = {
  'Content-Type': 'application/json',
  'Authorization': auth_str # base 64 encoded username:password
}

print(headers)
```

**Response**
```python
Basic ZGJjOmRiYw==
{
  'Content-Type': 'application/json',
  'Authorization': 'Basic ZGJjOmRiYw=='
}
```

### JWT authentication

Prerequisites:

* The user must already exist in the database.
* The database must be JWT enabled.

**Request**

``` python
import requests
import json
requests.packages.urllib3.disable_warnings()

# run it from local. 

auth_encoded_jwt = "<YOUR_JWT_HERE>"
auth_str = "Bearer " + auth_encoded_jwt

headers = {
  'Content-Type': 'application/json',
  'Authorization': auth_str
}

print(headers)
```

**Response**

```python
{'Content-Type': 'application/json', 'Authorization': 'Bearer <YOUR_JWT_HERE>'}
```

## Make a simple API request with basic options

In the following example, the request includes:

* `SELECT * FROM DBC.DBCInfo`: The query to the system with the alias `<SYSTEM_NAME>`.
* `'format': 'OBJECT'`: The format for response. The formats supported are: JSON object, JSON array, and CSV.

    :::note
    The JSON object format creates one JSON object per row where the column name is the field name, and the column value is the field value.
    :::

* `'includeColumns': true`: The request to include column metadata, such as column names and types, in the response.
* `'rowLimit': 4`: The number of rows to be returned from a query.

**Request**

``` python
url = 'https://<QS_HOSTNAME>:1443/systems/<SYSTEM_NAME>/queries'

payload = {
  'query': example_query, # 'SELECT * FROM DBC.DBCInfo;',
  'format': 'OBJECT',
  'includeColumns': True,
  'rowLimit': 4
}

payload_json = json.dumps(payload)

response = requests.request('POST', url, headers=headers, data=payload_json, verify=False)

num_rows = response.json().get('results'](0].get('rowCount')
print('NUMBER of ROWS', num_rows)
print('==========================================================')

print(response.json())
```

**Response**

``` json
NUMBER of ROWS 4
==========================================================
{
  "queueDuration":7,
  "queryDuration":227,
  "results":[
    {
      "resultSet":True,
      "columns":[
        {
          "name":"DatabaseName",
          "type":"CHAR"
        },
        {
          "name":"USEDSPACE_IN_GB",
          "type":"FLOAT"
        },
        {
          "name":"MAXSPACE_IN_GB",
          "type":"FLOAT"
        },
        {
          "name":"Percentage_Used",
          "type":"FLOAT"
        },
        {
          "name":"REMAININGSPACE_IN_GB",
          "type":"FLOAT"
        }
      ],
      "data":[
        {
          "DatabaseName":"DBC",
          "USEDSPACE_IN_GB":317.76382541656494,
          "MAXSPACE_IN_GB":1510.521079641879,
          "Percentage_Used":21.03670247964377,
          "REMAININGSPACE_IN_GB":1192.757254225314
        },
        {
          "DatabaseName":"EM",
          "USEDSPACE_IN_GB":0.0007491111755371094,
          "MAXSPACE_IN_GB":11.546071618795395,
          "Percentage_Used":0.006488017745513208,
          "REMAININGSPACE_IN_GB":11.545322507619858
        },
        {
          "DatabaseName":"user10",
          "USEDSPACE_IN_GB":0.019153594970703125,
          "MAXSPACE_IN_GB":9.313225746154785,
          "Percentage_Used":0.20566016,
          "REMAININGSPACE_IN_GB":9.294072151184082
        },
        {
          "DatabaseName":"EMEM",
          "USEDSPACE_IN_GB":0.006140708923339844,
          "MAXSPACE_IN_GB":4.656612873077393,
          "Percentage_Used":0.13187072,
          "REMAININGSPACE_IN_GB":4.650472164154053
        },
        {
          "DatabaseName":"EMWork",
          "USEDSPACE_IN_GB":0.0,
          "MAXSPACE_IN_GB":4.656612873077393,
          "Percentage_Used":0.0,
          "REMAININGSPACE_IN_GB":4.656612873077393
        }
      ],
      "rowCount":4,
      "rowLimitExceeded":True
    }
  ]
}
```

For response parameters, see [Query Service Installation, Configuration, and Usage Guide](https://docs.teradata.com/r/Teradata-Query-Service-Installation-Configuration-and-Usage-Guide-for-Customers/April-2022/Using-the-Query-Service-APIs/Submitting-SQL-Statement/Request-Body).


### Request a response in CSV format

To return an API response in CSV format, set the `*format*` field in the request with the value `*CSV*`.

The CSV format contains only the query results and not response metadata. The response contains a line for each row, where each line contains the row columns separated by a comma. The following example returns the data as comma-separated values.

**Request**

``` python
# CSV with all rows included

url = 'https://<QS_HOSTNAME>:1443/systems/<SYSTEM_NAME>/queries'

payload = {
  'query': example_query, # 'SELECT * FROM DBC.DBCInfo;',
  'format': 'CSV',
  'includeColumns': True
}

payload_json = json.dumps(payload)

response = requests.request('POST', url, headers=headers, data=payload_json, verify=False)

print(response.text)
```

**Response**

```python
DatabaseName,USEDSPACE_IN_GB,MAXSPACE_IN_GB,Percentage_Used,REMAININGSPACE_IN_GB
DBC                           ,317.7634754180908,1510.521079641879,21.036679308932754,1192.7576042237881
EM                            ,7.491111755371094E-4,11.546071618795395,0.006488017745513208,11.545322507619858
user10                        ,0.019153594970703125,9.313225746154785,0.20566016,9.294072151184082
EMEM                          ,0.006140708923339844,4.656612873077393,0.13187072,4.650472164154053
EMWork                        ,0.0,4.656612873077393,0.0,4.656612873077393
EMJI                          ,0.0,2.3283064365386963,0.0,2.3283064365386963
USER_NAME                     ,0.0,2.0,0.0,2.0
readonly                      ,0.0,0.9313225746154785,0.0,0.9313225746154785
aug12_db                      ,7.200241088867188E-5,0.9313225746154785,0.0077312,0.9312505722045898
SystemFe                      ,1.8024444580078125E-4,0.7450580596923828,0.024192,0.744877815246582
dbcmngr                       ,3.814697265625E-6,0.09313225746154785,0.004096,0.09312844276428223
EMViews                       ,0.027594566345214844,0.09313225746154785,29.62944,0.06553769111633301
tdwm                          ,6.732940673828125E-4,0.09313225746154785,0.722944,0.09245896339416504
Crashdumps                    ,0.0,0.06984921544790268,0.0,0.06984921544790268
SYSLIB                        ,0.006252288818359375,0.03725290298461914,16.78336,0.031000614166259766
SYSBAR                        ,4.76837158203125E-6,0.03725290298461914,0.0128,0.03724813461303711
SYSUDTLIB                     ,3.5381317138671875E-4,0.029802322387695312,1.1872,0.029448509216308594
External_AP                   ,0.0,0.01862645149230957,0.0,0.01862645149230957
SysAdmin                      ,0.002307891845703125,0.01862645149230957,12.3904,0.016318559646606445
KZXaDtQp                      ,0.0,0.009313225746154785,0.0,0.009313225746154785
s476QJ6O                      ,0.0,0.009313225746154785,0.0,0.009313225746154785
hTzz03i7                      ,0.0,0.009313225746154785,0.0,0.009313225746154785
Y5WYUUXj                      ,0.0,0.009313225746154785,0.0,0.009313225746154785
```

## Use explicit session to submit a query

Use explicit sessions when a transaction needs to span multiple requests or when using volatile tables. These sessions are only reused if you reference the sessions in a query request. The request is queued if a request references an explicit session already in use.

1. Create a session
    Send a POST request to the `/system/<SYSTEM_NAME>/sessions` endpoint. The request creates a new database session and returns the session details as the response.

    In the following example, the request includes `'auto_commit': True` - the request to commit the query upon completion.

    **Request**
    ``` python
    # first create a session
    url = 'https://<QS_HOSTNAME>:1443/systems/<SYSTEM_NAME>/sessions'

    payload = {
      'auto_commit': True
    }

    payload_json = json.dumps(payload)

    response = requests.request('POST', url, headers=headers, data=payload_json, verify=False)

    print(response.text)
    ```

    **Response**
    ```python
    {
      'sessionId': 1366010,
      'system': 'testsystem',
      'user': 'dbc',
      'tdSessionNo': 1626922,
      'createMode': 'EXPLICIT',
      'state': 'LOGGINGON',
      'autoCommit': true
    }
    ```

2. Use the session created in Step 1 to submit queries
    
    Send a POST request to the `/system/<SYSTEM_NAME>/queries` endpoint.

    The request submits queries to the target system and returns the release and version number of the target system.

    In the following example, the request includes:
      * `SELECT * FROM DBC.DBCInfo`: The query to the system with the alias `<SYSTEM_NAME>`.
      * `'format': 'OBJECT'`: The format for response.
      * `'Session' : <Session ID>`: The session ID returned in Step 1 to create an explicit session.

    **Request**

    ``` python
    # use this session to submit queries afterwards

    url = 'https://<QS_HOSTNAME>:1443/systems/<SYSTEM_NAME>/queries'

    payload = {
      'query': 'SELECT * FROM DBC.DBCInfo;',
      'format': 'OBJECT',
      'session': 1366010 # <-- sessionId
    }
    payload_json = json.dumps(payload)

    response = requests.request('POST', url, headers=headers, data=payload_json, verify=False)

    print(response.text)
    ```

    **Response**
    ``` json
    {
      "queueDuration":6,
      "queryDuration":41,
      "results":[
        {
          "resultSet":true,
          "data":[
            {
              "InfoKey":"LANGUAGE SUPPORT MODE",
              "InfoData":"Standard"
            },
            {
              "InfoKey":"RELEASE",
              "InfoData":"15.10.07.02"
            },
            {
              "InfoKey":"VERSION",
              "InfoData":"15.10.07.02"
            }
          ],
          "rowCount":3,
          "rowLimitExceeded":false
        }
      ]
    }
    ```


## Use asynchronous queries

Use asynchronous queries when a system or network performance is affected by querying a large group of data or long running queries.

1. Submit asynchronous queries to the target system and retrieve a Query ID
  Send a POST request to the `/system/<SYSTEM_NAME>/queries` endpoint.
  In the following example, the request includes:
    * `SELECT * FROM DBC.DBCInfo`: The query to the system with the alias `<SYSTEM_NAME>`.
    * `'format': 'OBJECT'`: The format for response.
    * `'spooled_result_set': True`: The indication that the request is asynchronous.
  
    **Request**
    ``` python
    ## Run async query .

    url = 'https://<QS_HOSTNAME>:1443/systems/<SYSTEM_NAME>/queries'

    payload = {
      'query': 'SELECT * FROM DBC.DBCInfo;',
      'format': 'OBJECT',
      'spooled_result_set': True
    }

    payload_json = json.dumps(payload)
    response = requests.request('POST', url, headers=headers, data=payload_json, verify=False)

    print(response.text)
    ```

    **Response**
    ```
    {"id":1366025}
    ```

2. Get query details using the ID retrieved from Step 1

    Send a GET request to the `/system/<SYSTEM_NAME>/queries/<queryID>` endpoint, replacing `<queryID>` with the ID retrieved from Step 1.

    The request returns the details of the specific query, including **`queryState`**, **`queueOrder`**, **`queueDuration`**, and so on. For a complete list of the response fields and their descriptions, see [Query Service Installation, Configuration, and Usage Guide](https://docs.teradata.com/r/Teradata-Query-Service-Installation-Configuration-and-Usage-Guide-for-Customers/April-2022/Using-the-Query-Service-APIs/Submitting-SQL-Statement/Request-Body).

    **Request**
    ``` python
    ## response for async query .

    url = 'https://<QS_HOSTNAME>:1443/systems/<SYSTEM_NAME>/queries/1366025'

    payload_json = json.dumps(payload)
    response = requests.request('GET', url, headers=headers, verify=False)

    print(response.text)
    ```

    **Response**
    ```python
    {
      "queryId":1366025,
      "query":"SELECT * FROM DBC.DBCInfo;",
      "batch":false,
      "system":"testsystem",
      "user":"dbc",
      "session":1366015,
      "queryState":"RESULT_SET_READY",
      "queueOrder":0,
      "queueDuration":6,
      "queryDuration":9,
      "statusCode":200,
      "resultSets":{

      },
      "counts":{

      },
      "exceptions":{

      },
      "outParams":{

      }
    }
    ```

3. View resultset for asynchronous query

    Send a GET request to the `/system/<SYSTEM_NAME>/queries/<queryID>/results` endpoint, replacing `<queryID>` with the ID retrieved from Step 1.

    The request returns an array of the result sets and update counts produced by the submitted query.

    **Request**

    ``` python
    url = 'https://<QS_HOSTNAME>:1443/systems/<SYSTEM_NAME>/queries/1366025/results'

    payload_json = json.dumps(payload)
    response = requests.request('GET', url, headers=headers, verify=False)

    print(response.text)
    ```

    **Response**

    ``` json
    {
      "queueDuration":6,
      "queryDuration":9,
      "results":[
        {
          "resultSet":true,
          "data":[
            {
              "InfoKey":"LANGUAGE SUPPORT MODE",
              "InfoData":"Standard"
            },
            {
              "InfoKey":"RELEASE",
              "InfoData":"15.10.07.02"
            },
            {
              "InfoKey":"VERSION",
              "InfoData":"15.10.07.02"
            }
          ],
          "rowCount":3,
          "rowLimitExceeded":false
        }
      ]
    }
    ```

## Get a list of active or queued queries

Send a GET request to the `/system/<SYSTEM_NAME>/queries` endpoint. The request returns the IDs of active queries.

**Request**

``` python
url = 'https://<QS_HOSTNAME>:1443/systems/<SYSTEM_NAME>/queries'

payload={}

response = requests.request('GET', url, headers=headers, data=payload, verify=False)

print(response.json())
```

**Response**

``` json
[
  {
    "queryId": 12516087,
    "query": "SELECt * from dbcmgr.AlertRequest;",
    "batch": false,
    "system": "BasicTestSys",
    "user": "dbc",
    "session": 12516011,
    "queryState": "REST_SET_READY",
    "queueOrder": 0,
    "queueDurayion": 3,
    "queryDuration": 3,
    "statusCode": 200,
    "resultSets": {},
    "counts": {},
    "exceptions": {},
    "outparams": {}
  },
  {
    "queryId": 12516088,
    "query": "SELECt * from dbc.DBQLAmpDataTbl;",
    "batch": false,
    "system": "BasicTestSys",
    "user": "dbc",
    "session": 12516011,
    "queryState": "REST_SET_READY",
    "queueOrder": 0,
    "queueDurayion": 3,
    "queryDuration": 3,
    "statusCode": 200,
    "resultSets": {},
    "counts": {},
    "exceptions": {},
    "outparams": {}
  }
]
```


## Resources

* Features, examples, and references: [Query Service Installation, Configuration, and Usage Guide](https://docs.teradata.com/r/Teradata-Query-Service-Installation-Configuration-and-Usage-Guide-for-Customers/April-2022)
* [Query Service API OpenAPI Specification](https://downloads.teradata.com/api/teradata_query_service)

import CommunityLinkPartial from '../_partials/community_link.mdx';

<CommunityLinkPartial />