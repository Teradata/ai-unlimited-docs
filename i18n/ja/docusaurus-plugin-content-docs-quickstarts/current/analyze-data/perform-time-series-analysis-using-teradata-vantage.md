---
sidebar_position: 5
id: perform-time-series-analysis-using-teradata-vantage
author: Remi Turpaud
email: remi.turpaud@teradata.com
page_last_update: 2022 年 4 月 15 日
description: Teradata Vantageを使用した時系列解析の実行
keywords: [data warehouses, analytics, teradata, vantage, time series, business intelligence, enterprise analytics, time series, time series analysis]
---

import ClearscapeDocsNote from '../_partials/vantage_clearscape_analytics.mdx'
import CommunityLink from '../_partials/community_link.mdx'

# Teradata Vantageを使用した時系列解析の実行

## 概要

時系列とは、時間順にインデックス付けされたデータ ポイントの系列です。これは、モノのインターネット (IoT) を含むさまざまなアプリケーションやデバイスによって継続的に生成および収集されるデータです。Teradata Vantage は、時系列データ分析を簡素化するさまざまな機能を提供します。

## 前提条件

Teradata Vantage インスタンスにアクセスする必要があります。時系列機能と NOS は、バージョン 17.10 以降、Vantage Express から Developer、DYI、Vantage as a Service までのすべての Vantage エディションで有効になります。

<ClearscapeDocsNote />

## Vantage NOSを使用してAWS S3からのデータセットをインポートする

サンプル データ セットは S3 バケットで利用でき、Vantage NOS を使用して Vantage から直接アクセスできます。データは CSV 形式なので、時系列分析のために Vantage に取り込んでみましょう。

まずはデータを見てみましょう。以下のクエリーは S3 バケットから 10 行を取得します。

```sql
SELECT TOP 10 * FROM (
	LOCATION='/s3/nos-demo-apj.s3.amazonaws.com/taxi/2014/11/data_2014-11-25.csv'
) AS d;
```

得られたものは以下のとおりです。

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

完全なデータを抽出し、Vantage に取り込んでさらに分析してみましょう。

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

結果:

```sql
200000 rows affected.
```

Vantageは、S3からデータを取得し、作成したばかりのトリップテーブルに挿入します。

## 基本的な時系列演算

データ セットについて理解できたので、Vantage の機能を使用してデータ セットをすばやく分析できます。まず、11 月に 1 時間ごとに乗車する乗客数を確認しましょう。

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

 [GROUP BY TIME](https://www.docs.teradata.com/r/Teradata-VantageTM-Time-Series-Tables-and-Operations/July-2021/Time-Series-Aggregates-and-SELECT-Extensions/GROUP-BY-TIME-Clause)の詳細については、こちらをご覧ください。

結果:

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

はい、これは、時間から時間を抽出して集計することによっても実現できる。これは追加のコード/作業であるが、時系列固有の機能がなくても実行できます。

しかし、ここでさらに一歩進んで、11 月に何人の乗客が乗車しているか、またベンダー別の 15 分ごとの平均移動所要期間はどれくらいかを識別してみましょう。

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

結果:

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

これが Vantage の時系列機能の威力です。複雑で面倒なロジックを必要とせず、時間句によるグループ化を変更するだけで、ベンダー別の平均移動時間を 15 分ごとに見つけることができます。これに基づいて移動平均を構築するのがいかに簡単かを見てみましょう。まず、以下のようにビューを作成します。

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

15分の時系列で2時間の移動平均を計算してみよう。 2時間は8*15分の期間です。

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


結果:

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
上記の時系列操作に加えて、Vantage はプライマリ タイム インデックス (PTI) を備えた特別な時系列テーブルも提供します。これらは、プライマリ インデックス (PI) ではなく PTI が定義された通常の Vantage テーブルです。PTI を備えたテーブルは時系列機能/操作に必須ではありませんが、PTI は時系列データの物理的な保存方法を最適化するため、通常のテーブルに比べてパフォーマンスが大幅に向上します。
:::

## まとめ

このクイック スタートでは、Vantage の時系列機能を使用して時系列データセットを分析することがいかに簡単であるかを学びました。

## さらに詳しく
* [Teradata Vantage™ - 時系列テーブルと操作](https://docs.teradata.com/r/Teradata-VantageTM-Time-Series-Tables-and-Operations/July-2021/Introduction-to-Teradata-Time-Series-Tables-and-Operations)
* [オブジェクトストレージに保存されたクエリーデータ](../manage-data/nos.md)
* [Teradata Vantage™- Native Object Store 入門ガイド](https://docs.teradata.com/r/2mw8ooFr~xX0EaaGFaDW8A/root)

<CommunityLink />
