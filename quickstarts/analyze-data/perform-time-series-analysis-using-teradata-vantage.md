---
sidebar_position: 5
id: perform-time-series-analysis-using-teradata-vantage
author: Remi Turpaud
email: remi.turpaud@teradata.com
page_last_update: April 15th, 2022
description: Perform time series analysis using Teradata Vantage
keywords: [data warehouses, analytics, teradata, vantage, time series, business intelligence, enterprise analytics, time series, time series analysis]
---

import ClearscapeDocsNote from '../_partials/vantage_clearscape_analytics.mdx'
import CommunityLink from '../_partials/community_link.mdx'

# Perform time series analysis using Teradata Vantage

## Overview

Time series is series of data points indexed in time order. It is data continuously produced and collected by a wide range of applications and devices including but not limited to Internet of Things. Teradata Vantage offers various functionalities to simplify time series data analysis.

## Prerequisites

You need access to a Teradata Vantage instance. Times series functionalities and NOS are enabled in all Vantage editions from Vantage Express through Developer, DYI to Vantage as a Service starting from version 17.10.

<ClearscapeDocsNote />

## Import data sets from AWS S3 using Vantage NOS

Our sample data sets are available on S3 bucket and can be accessed from Vantage directly using Vantage NOS. Data is in CSV format and let's ingest them into Vantage for our time series analysis.

Let's have a look at the data first. Below query will fetch 10 rows from S3 bucket.

```sql
SELECT TOP 10 * FROM (
	LOCATION='/s3/nos-demo-apj.s3.amazonaws.com/taxi/2014/11/data_2014-11-25.csv'
) AS d;
```

Here is what we've got:

```sql

Location					        		vendor_id	pickup_datetime		dropoff_datetime	passenger_count		trip_distance		pickup_longitude	        pickup_latitude		rate_code	store_and_fwd_flag	dropoff_longitude	dropoff_latitude	payment_type	fare_amount	surcharge	mta_tax		tip_amount	tolls_amount	total_amount
------------------------------------------------------------------	---------	-----------------	-----------------	----------------	--------------		-----------------		----------------	----------	-------------------	------------------	-----------------	-------------	------------	----------	--------	----------	------------	------------
/S3/s3.amazonaws.com/nyc-tlc/csv_backup/yellow_tripdata_2013-11.csv	CMT   		25/11/2013 15:18	25/11/2013 15:33	1			1			-73.992423			40.749517		1		N 			-73.98816		40.746557		CRD   		10		0		0.5		2.22		0		12.72
/S3/s3.amazonaws.com/nyc-tlc/csv_backup/yellow_tripdata_2013-11.csv	CMT   		25/11/2013 5:34		25/11/2013 5:48		1			3.6			-73.971555			40.794548		1		N 			-73.975399		40.755404		CRD   		14.5		0.5		0.5		1		0		16.5
/S3/s3.amazonaws.com/nyc-tlc/csv_backup/yellow_tripdata_2013-11.csv	CMT   		25/11/2013 8:31		25/11/2013 8:55		1			5.9			-73.94764			40.830465		1		N 			-73.972323		40.76332		CRD   		21		0		0.5		3		0		24.5
/S3/s3.amazonaws.com/nyc-tlc/csv_backup/yellow_tripdata_2013-11.csv	CMT   		25/11/2013 7:00		25/11/2013 7:04		1			1.2			-73.983357			40.767193		1		N 			-73.978394		40.75558		CRD   		5.5		0		0.5		1		0		7
/S3/s3.amazonaws.com/nyc-tlc/csv_backup/yellow_tripdata_2013-11.csv	CMT   		25/11/2013 15:24	25/11/2013 15:30	1			0.5			-73.982313			40.764827		1		N 			-73.982129		40.758889		CRD   		5.5		0		0.5		3		0		9
/S3/s3.amazonaws.com/nyc-tlc/csv_backup/yellow_tripdata_2013-11.csv	CMT   		25/11/2013 15:53	25/11/2013 16:00	1			0.6			-73.978104			40.752966		1		N 			-73.985756		40.762685		CRD   		6		1		0.5		1		0		8.5
/S3/s3.amazonaws.com/nyc-tlc/csv_backup/yellow_tripdata_2013-11.csv	CMT   		25/11/2013 6:49		25/11/2013 7:04		1			3.8			-73.976005			40.744481		1		N 			-74.016063		40.717298		CRD   		14		0		0.5		2.9		0		17.4
/S3/s3.amazonaws.com/nyc-tlc/csv_backup/yellow_tripdata_2013-11.csv	CMT   		25/11/2013 21:20	25/11/2013 21:26	1			1.1			-73.946371			40.775369		1		N 			-73.95309		40.785103		CRD   		6.5		0.5		0.5		1.5		0		9
/S3/s3.amazonaws.com/nyc-tlc/csv_backup/yellow_tripdata_2013-11.csv	CMT   		25/11/2013 10:02	25/11/2013 10:17	1			2.2			-73.952625			40.780962		1		N 			-73.98163		40.777978		CRD   		12		0		0.5		2		0		14.5
/S3/s3.amazonaws.com/nyc-tlc/csv_backup/yellow_tripdata_2013-11.csv	CMT   		25/11/2013 9:43		25/11/2013 10:02	1			3.3			-73.982013			40.762507		1		N 			-74.006854		40.719582		CRD   		15		0		0.5		2		0		17.5

```

Let's extract the complete data and bring it into Vantage for further analysis.

```sql

CREATE TABLE trip
(
  vendor_id varchar(10) character set latin NOT casespecific,
  rate_code          integer,
  pickup_datetime timestamp(6),
  dropoff_datetime timestamp(6),
  passenger_count   smallint,
  trip_distance float,
  pickup_longitude float,
  pickup_latitude float,
  dropoff_longitude float,
  dropoff_latitude float
)
NO PRIMARY INDEX ;



INSERT INTO trip
SELECT TOP 200000 vendor_id ,
  rate_code,
  pickup_datetime,
  dropoff_datetime ,
  passenger_count,
   trip_distance ,
  pickup_longitude,
  pickup_latitude ,
  dropoff_longitude ,
  dropoff_latitude FROM (
	LOCATION='/s3/nos-demo-apj.s3.amazonaws.com/taxi/2014/11/data_2014-11-25.csv'
) AS d;

```

Result:

```sql
200000 rows affected.
```

Vantage will now fetch the data from S3 and insert into trip table we just created.

## Basic time series operations

Now that we are familiar with the data set, we can use Vantage capabilities to quickly analyse the data set. First, let's identify how many passengers are being picked up by hour in the month of November.

```sql

SELECT TOP 10
	$TD_TIMECODE_RANGE
	,begin($TD_TIMECODE_RANGE) time_bucket_start
	,sum(passenger_count) passenger_count
FROM trip
WHERE extract(month from pickup_datetime)=11
GROUP BY TIME(HOURS(1))
USING TIMECODE(pickup_datetime)
ORDER BY 1;

```

For further reading on [GROUP BY TIME](https://www.docs.teradata.com/r/Teradata-VantageTM-Time-Series-Tables-and-Operations/July-2021/Time-Series-Aggregates-and-SELECT-Extensions/GROUP-BY-TIME-Clause).

Result:

```sql
TIMECODE_RANGE							time_bucket_start			passenger_count
---------------------------------------------------------	---------------------------------	----------------
(2013-11-04 11:00:00.000000, 2013-11-04 12:00:00.000000)	2013-11-04 11:00:00.000000-05:00	4
(2013-11-04 12:00:00.000000, 2013-11-04 13:00:00.000000)	2013-11-04 12:00:00.000000-05:00	2
(2013-11-04 14:00:00.000000, 2013-11-04 15:00:00.000000)	2013-11-04 14:00:00.000000-05:00	5
(2013-11-04 15:00:00.000000, 2013-11-04 16:00:00.000000)	2013-11-04 15:00:00.000000-05:00	2
(2013-11-04 16:00:00.000000, 2013-11-04 17:00:00.000000)	2013-11-04 16:00:00.000000-05:00	9
(2013-11-04 17:00:00.000000, 2013-11-04 18:00:00.000000)	2013-11-04 17:00:00.000000-05:00	11
(2013-11-04 18:00:00.000000, 2013-11-04 19:00:00.000000)	2013-11-04 18:00:00.000000-05:00	41
(2013-11-04 19:00:00.000000, 2013-11-04 20:00:00.000000)	2013-11-04 19:00:00.000000-05:00	2791
(2013-11-04 20:00:00.000000, 2013-11-04 21:00:00.000000)	2013-11-04 20:00:00.000000-05:00	15185
(2013-11-04 21:00:00.000000, 2013-11-04 22:00:00.000000)	2013-11-04 21:00:00.000000-05:00	27500


```

Yes, this can also be achieved by extracting the hour from time and then aggregating - it's additional code/work, but can be done without timeseries specific functionality.

But, now let's go a step further to identify how many passengers are being picked up and what is the average trip duration by vendor every 15 minutes in November.

```sql
SELECT TOP 10
    $TD_TIMECODE_RANGE,
    vendor_id,
    SUM(passenger_count),
    AVG((dropoff_datetime - pickup_datetime ) MINUTE (4)) AS avg_trip_time_in_mins
FROM trip
GROUP BY TIME (MINUTES(15) AND vendor_id)
USING TIMECODE(pickup_datetime)
WHERE EXTRACT(MONTH FROM pickup_datetime)=11
ORDER BY 1,2;
```

Result:

```sql

TIMECODE_RANGE							vendor_id	passenger_count		avg_trip_time_in_mins
--------------------------------------------------------	----------	----------------	----------------------
(2013-11-04 11:00:00.000000, 2013-11-04 11:15:00.000000)	VTS		1			16
(2013-11-04 11:15:00.000000, 2013-11-04 11:30:00.000000)	VTS		1			10
(2013-11-04 11:45:00.000000, 2013-11-04 12:00:00.000000)	VTS		2			6
(2013-11-04 12:00:00.000000, 2013-11-04 12:15:00.000000)	VTS		1			11
(2013-11-04 12:15:00.000000, 2013-11-04 12:30:00.000000)	VTS		1			57
(2013-11-04 14:15:00.000000, 2013-11-04 14:30:00.000000)	VTS		1			3
(2013-11-04 14:30:00.000000, 2013-11-04 14:45:00.000000)	VTS		2			19
(2013-11-04 14:45:00.000000, 2013-11-04 15:00:00.000000)	VTS		2			9
(2013-11-04 15:15:00.000000, 2013-11-04 15:30:00.000000)	VTS		1			11
(2013-11-04 15:30:00.000000, 2013-11-04 15:45:00.000000)	VTS		1			31


```

This is the power of Vantage time series functionality. Without needing complicated, cumbersome logic we are able to find average trip duration by vendor every 15 minutes just by modifying the group by time clause. Let's now look at how simple it is to build moving averages based on this. First, let's start by creating a view as below.

```sql
REPLACE VIEW NYC_taxi_trip_ts as
SELECT
	$TD_TIMECODE_RANGE time_bucket_per
	,vendor_id
	,sum(passenger_count) passenger_cnt
	,avg(CAST((dropoff_datetime - pickup_datetime MINUTE(4) ) AS INTEGER))  avg_trip_time_in_mins
FROM trip
GROUP BY TIME (MINUTES(15) and vendor_id)
USING TIMECODE(pickup_datetime)
WHERE extract(month from pickup_datetime)=11

```

Let's calculate a 2 hours moving average on our 15-minutes time series. 2 hour is 8 * 15 minutes periods.

```sql
SELECT * FROM MovingAverage (
  ON NYC_taxi_trip_ts PARTITION BY vendor_id ORDER BY time_bucket_per
  USING
  MAvgType ('S')
  WindowSize (8)
  TargetColumns ('passenger_cnt')
) AS dt
WHERE begin(time_bucket_per)(date) = '2014-11-25'
ORDER BY vendor_id, time_bucket_per;
```


Result:

```sql

time_bucket_per							vendor_id	passenger_cnt		avg_trip_time_in_mins	passenger_cnt_smavg
---------------------------------------------------------	--------------	----------------------	--------------------	--------------------
(2013-11-04 14:45:00.000000, 2013-11-04 15:00:00.000000)	VTS		2			9			1.375
(2013-11-04 15:15:00.000000, 2013-11-04 15:30:00.000000)	VTS		1			11			1.375
(2013-11-04 15:30:00.000000, 2013-11-04 15:45:00.000000)	VTS		1			31			1.375
(2013-11-04 16:15:00.000000, 2013-11-04 16:30:00.000000)	VTS		2			16			1.375
(2013-11-04 16:30:00.000000, 2013-11-04 16:45:00.000000)	VTS		1			3			1.375
(2013-11-04 16:45:00.000000, 2013-11-04 17:00:00.000000)	VTS		6			38			2
(2013-11-04 17:15:00.000000, 2013-11-04 17:30:00.000000)	VTS		2			29.5			2.125
(2013-11-04 17:45:00.000000, 2013-11-04 18:00:00.000000)	VTS		9			20.33333333		3
(2013-11-04 18:00:00.000000, 2013-11-04 18:15:00.000000)	VTS		6			23.4			3.5
(2013-11-04 18:15:00.000000, 2013-11-04 18:30:00.000000)	VTS		4			15.66666667		3.875
(2013-11-04 18:30:00.000000, 2013-11-04 18:45:00.000000)	VTS		8			24.5			4.75
(2013-11-04 18:45:00.000000, 2013-11-04 19:00:00.000000)	VTS		23			38.33333333		7.375
(2013-11-04 19:00:00.000000, 2013-11-04 19:15:00.000000)	VTS		195			26.61538462		31.625
(2013-11-04 19:15:00.000000, 2013-11-04 19:30:00.000000)	VTS		774			13.70083102		127.625
(2013-11-04 19:30:00.000000, 2013-11-04 19:45:00.000000)	VTS		586			12.38095238		200.625
(2013-11-04 19:45:00.000000, 2013-11-04 20:00:00.000000)	VTS		1236			15.54742097		354
(2013-11-04 20:00:00.000000, 2013-11-04 20:15:00.000000)	VTS		3339			11.78947368		770.625
(2013-11-04 20:15:00.000000, 2013-11-04 20:30:00.000000)	VTS		3474			10.5603396		1204.375
(2013-11-04 20:30:00.000000, 2013-11-04 20:45:00.000000)	VTS		3260			12.26484323		1610.875
(2013-11-04 20:45:00.000000, 2013-11-04 21:00:00.000000)	VTS		5112			12.05590062		2247



```

:::note
In addition to above time series operations, Vantage also provides a special time series tables with Primary Time Index (PTI). These are regular Vantage tables with PTI defined rather than a Primary Index (PI). Though tables with PTI are not mandatory for time series functionality/operations, PTI optimizes how the time series data is stored physically and hence improves performance considerably compared to regular tables.
:::

## Summary

In this quick start we have learnt how easy it is to analyse time series datasets using Vantage's time series capabilities.

## Further reading
* [Teradata Vantage™ - Time Series Tables and Operations](https://docs.teradata.com/r/Teradata-VantageTM-Time-Series-Tables-and-Operations/July-2021/Introduction-to-Teradata-Time-Series-Tables-and-Operations)
* [Query data stored in object storage](../manage-data/nos.md)
* [Teradata Vantage™ - Native Object Store Getting Started Guide](https://docs.teradata.com/r/2mw8ooFr~xX0EaaGFaDW8A/root)

<CommunityLink />
