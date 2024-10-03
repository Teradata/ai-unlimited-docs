"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[1643],{41269:(t,e,a)=>{a.d(e,{Ay:()=>o,RM:()=>s});var n=a(74848),i=a(28453);const s=[];function r(t){const e={a:"a",admonition:"admonition",p:"p",...(0,i.R)(),...t.components};return(0,n.jsx)(e.admonition,{type:"note",children:(0,n.jsxs)(e.p,{children:["If you have any questions or need further assistance, please visit our ",(0,n.jsx)(e.a,{href:"https://support.teradata.com/community",children:"community forum"})," where you can get support and interact with other community members."]})})}function o(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}},62680:(t,e,a)=>{a.d(e,{Ay:()=>o,RM:()=>s});var n=a(74848),i=a(28453);const s=[];function r(t){const e={a:"a",admonition:"admonition",p:"p",...(0,i.R)(),...t.components};return(0,n.jsx)(e.admonition,{type:"note",children:(0,n.jsxs)(e.p,{children:["If you need a test instance of Vantage, you can provision one for free at ",(0,n.jsx)(e.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})]})})}function o(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}},3846:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=a(74848),i=a(28453),s=a(62680),r=a(41269);const o={sidebar_position:5,id:"perform-time-series-analysis-using-teradata-vantage",author:"Remi Turpaud",email:"remi.turpaud@teradata.com",page_last_update:"April 15th, 2022",description:"Perform time series analysis using Teradata Vantage",keywords:["data warehouses","analytics","teradata","vantage","time series","business intelligence","enterprise analytics","time series","time series analysis"]},d="Perform time series analysis using Teradata Vantage",c={id:"analyze-data/perform-time-series-analysis-using-teradata-vantage",title:"Perform time series analysis using Teradata Vantage",description:"Perform time series analysis using Teradata Vantage",source:"@site/quickstarts/analyze-data/perform-time-series-analysis-using-teradata-vantage.md",sourceDirName:"analyze-data",slug:"/analyze-data/perform-time-series-analysis-using-teradata-vantage",permalink:"/pr-preview/pr-145/fr/quickstarts/analyze-data/perform-time-series-analysis-using-teradata-vantage",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,id:"perform-time-series-analysis-using-teradata-vantage",author:"Remi Turpaud",email:"remi.turpaud@teradata.com",page_last_update:"April 15th, 2022",description:"Perform time series analysis using Teradata Vantage",keywords:["data warehouses","analytics","teradata","vantage","time series","business intelligence","enterprise analytics","time series","time series analysis"]},sidebar:"tutorialSidebar",previous:{title:"Run scripts on Vantage",permalink:"/pr-preview/pr-145/fr/quickstarts/analyze-data/sto"},next:{title:"ModelOps - Import and Deploy your first BYOM Model",permalink:"/pr-preview/pr-145/fr/quickstarts/analyze-data/deploy-and-monitor-machine-learning-models-with-teradata-modelops-and-byom"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},...s.RM,{value:"Import data sets from AWS S3 using Vantage NOS",id:"import-data-sets-from-aws-s3-using-vantage-nos",level:2},{value:"Basic time series operations",id:"basic-time-series-operations",level:2},{value:"Summary",id:"summary",level:2},{value:"Further reading",id:"further-reading",level:2},...r.RM];function m(t){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"perform-time-series-analysis-using-teradata-vantage",children:"Perform time series analysis using Teradata Vantage"}),"\n",(0,n.jsx)(e.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(e.p,{children:"Time series is series of data points indexed in time order. It is data continuously produced and collected by a wide range of applications and devices including but not limited to Internet of Things. Teradata Vantage offers various functionalities to simplify time series data analysis."}),"\n",(0,n.jsx)(e.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsx)(e.p,{children:"You need access to a Teradata Vantage instance. Times series functionalities and NOS are enabled in all Vantage editions from Vantage Express through Developer, DYI to Vantage as a Service starting from version 17.10."}),"\n",(0,n.jsx)(s.Ay,{}),"\n",(0,n.jsx)(e.h2,{id:"import-data-sets-from-aws-s3-using-vantage-nos",children:"Import data sets from AWS S3 using Vantage NOS"}),"\n",(0,n.jsx)(e.p,{children:"Our sample data sets are available on S3 bucket and can be accessed from Vantage directly using Vantage NOS. Data is in CSV format and let's ingest them into Vantage for our time series analysis."}),"\n",(0,n.jsx)(e.p,{children:"Let's have a look at the data first. Below query will fetch 10 rows from S3 bucket."}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-sql",children:"SELECT TOP 10 * FROM (\n\tLOCATION='/s3/nos-demo-apj.s3.amazonaws.com/taxi/2014/11/data_2014-11-25.csv'\n) AS d;\n"})}),"\n",(0,n.jsx)(e.p,{children:"Here is what we've got:"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-sql",children:"\nLocation\t\t\t\t\t        \t\tvendor_id\tpickup_datetime\t\tdropoff_datetime\tpassenger_count\t\ttrip_distance\t\tpickup_longitude\t        pickup_latitude\t\trate_code\tstore_and_fwd_flag\tdropoff_longitude\tdropoff_latitude\tpayment_type\tfare_amount\tsurcharge\tmta_tax\t\ttip_amount\ttolls_amount\ttotal_amount\n------------------------------------------------------------------\t---------\t-----------------\t-----------------\t----------------\t--------------\t\t-----------------\t\t----------------\t----------\t-------------------\t------------------\t-----------------\t-------------\t------------\t----------\t--------\t----------\t------------\t------------\n/S3/s3.amazonaws.com/nyc-tlc/csv_backup/yellow_tripdata_2013-11.csv\tCMT   \t\t25/11/2013 15:18\t25/11/2013 15:33\t1\t\t\t1\t\t\t-73.992423\t\t\t40.749517\t\t1\t\tN \t\t\t-73.98816\t\t40.746557\t\tCRD   \t\t10\t\t0\t\t0.5\t\t2.22\t\t0\t\t12.72\n/S3/s3.amazonaws.com/nyc-tlc/csv_backup/yellow_tripdata_2013-11.csv\tCMT   \t\t25/11/2013 5:34\t\t25/11/2013 5:48\t\t1\t\t\t3.6\t\t\t-73.971555\t\t\t40.794548\t\t1\t\tN \t\t\t-73.975399\t\t40.755404\t\tCRD   \t\t14.5\t\t0.5\t\t0.5\t\t1\t\t0\t\t16.5\n/S3/s3.amazonaws.com/nyc-tlc/csv_backup/yellow_tripdata_2013-11.csv\tCMT   \t\t25/11/2013 8:31\t\t25/11/2013 8:55\t\t1\t\t\t5.9\t\t\t-73.94764\t\t\t40.830465\t\t1\t\tN \t\t\t-73.972323\t\t40.76332\t\tCRD   \t\t21\t\t0\t\t0.5\t\t3\t\t0\t\t24.5\n/S3/s3.amazonaws.com/nyc-tlc/csv_backup/yellow_tripdata_2013-11.csv\tCMT   \t\t25/11/2013 7:00\t\t25/11/2013 7:04\t\t1\t\t\t1.2\t\t\t-73.983357\t\t\t40.767193\t\t1\t\tN \t\t\t-73.978394\t\t40.75558\t\tCRD   \t\t5.5\t\t0\t\t0.5\t\t1\t\t0\t\t7\n/S3/s3.amazonaws.com/nyc-tlc/csv_backup/yellow_tripdata_2013-11.csv\tCMT   \t\t25/11/2013 15:24\t25/11/2013 15:30\t1\t\t\t0.5\t\t\t-73.982313\t\t\t40.764827\t\t1\t\tN \t\t\t-73.982129\t\t40.758889\t\tCRD   \t\t5.5\t\t0\t\t0.5\t\t3\t\t0\t\t9\n/S3/s3.amazonaws.com/nyc-tlc/csv_backup/yellow_tripdata_2013-11.csv\tCMT   \t\t25/11/2013 15:53\t25/11/2013 16:00\t1\t\t\t0.6\t\t\t-73.978104\t\t\t40.752966\t\t1\t\tN \t\t\t-73.985756\t\t40.762685\t\tCRD   \t\t6\t\t1\t\t0.5\t\t1\t\t0\t\t8.5\n/S3/s3.amazonaws.com/nyc-tlc/csv_backup/yellow_tripdata_2013-11.csv\tCMT   \t\t25/11/2013 6:49\t\t25/11/2013 7:04\t\t1\t\t\t3.8\t\t\t-73.976005\t\t\t40.744481\t\t1\t\tN \t\t\t-74.016063\t\t40.717298\t\tCRD   \t\t14\t\t0\t\t0.5\t\t2.9\t\t0\t\t17.4\n/S3/s3.amazonaws.com/nyc-tlc/csv_backup/yellow_tripdata_2013-11.csv\tCMT   \t\t25/11/2013 21:20\t25/11/2013 21:26\t1\t\t\t1.1\t\t\t-73.946371\t\t\t40.775369\t\t1\t\tN \t\t\t-73.95309\t\t40.785103\t\tCRD   \t\t6.5\t\t0.5\t\t0.5\t\t1.5\t\t0\t\t9\n/S3/s3.amazonaws.com/nyc-tlc/csv_backup/yellow_tripdata_2013-11.csv\tCMT   \t\t25/11/2013 10:02\t25/11/2013 10:17\t1\t\t\t2.2\t\t\t-73.952625\t\t\t40.780962\t\t1\t\tN \t\t\t-73.98163\t\t40.777978\t\tCRD   \t\t12\t\t0\t\t0.5\t\t2\t\t0\t\t14.5\n/S3/s3.amazonaws.com/nyc-tlc/csv_backup/yellow_tripdata_2013-11.csv\tCMT   \t\t25/11/2013 9:43\t\t25/11/2013 10:02\t1\t\t\t3.3\t\t\t-73.982013\t\t\t40.762507\t\t1\t\tN \t\t\t-74.006854\t\t40.719582\t\tCRD   \t\t15\t\t0\t\t0.5\t\t2\t\t0\t\t17.5\n\n"})}),"\n",(0,n.jsx)(e.p,{children:"Let's extract the complete data and bring it into Vantage for further analysis."}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-sql",children:"\nCREATE TABLE trip\n(\n  vendor_id varchar(10) character set latin NOT casespecific,\n  rate_code          integer,\n  pickup_datetime timestamp(6),\n  dropoff_datetime timestamp(6),\n  passenger_count   smallint,\n  trip_distance float,\n  pickup_longitude float,\n  pickup_latitude float,\n  dropoff_longitude float,\n  dropoff_latitude float\n)\nNO PRIMARY INDEX ;\n\n\n\nINSERT INTO trip\nSELECT TOP 200000 vendor_id ,\n  rate_code,\n  pickup_datetime,\n  dropoff_datetime ,\n  passenger_count,\n   trip_distance ,\n  pickup_longitude,\n  pickup_latitude ,\n  dropoff_longitude ,\n  dropoff_latitude FROM (\n\tLOCATION='/s3/nos-demo-apj.s3.amazonaws.com/taxi/2014/11/data_2014-11-25.csv'\n) AS d;\n\n"})}),"\n",(0,n.jsx)(e.p,{children:"Result:"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-sql",children:"200000 rows affected.\n"})}),"\n",(0,n.jsx)(e.p,{children:"Vantage will now fetch the data from S3 and insert into trip table we just created."}),"\n",(0,n.jsx)(e.h2,{id:"basic-time-series-operations",children:"Basic time series operations"}),"\n",(0,n.jsx)(e.p,{children:"Now that we are familiar with the data set, we can use Vantage capabilities to quickly analyse the data set. First, let's identify how many passengers are being picked up by hour in the month of November."}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-sql",children:"\nSELECT TOP 10\n\t$TD_TIMECODE_RANGE\n\t,begin($TD_TIMECODE_RANGE) time_bucket_start\n\t,sum(passenger_count) passenger_count\nFROM trip\nWHERE extract(month from pickup_datetime)=11\nGROUP BY TIME(HOURS(1))\nUSING TIMECODE(pickup_datetime)\nORDER BY 1;\n\n"})}),"\n",(0,n.jsxs)(e.p,{children:["For further reading on ",(0,n.jsx)(e.a,{href:"https://www.docs.teradata.com/r/Teradata-VantageTM-Time-Series-Tables-and-Operations/July-2021/Time-Series-Aggregates-and-SELECT-Extensions/GROUP-BY-TIME-Clause",children:"GROUP BY TIME"}),"."]}),"\n",(0,n.jsx)(e.p,{children:"Result:"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-sql",children:"TIMECODE_RANGE\t\t\t\t\t\t\ttime_bucket_start\t\t\tpassenger_count\n---------------------------------------------------------\t---------------------------------\t----------------\n(2013-11-04 11:00:00.000000, 2013-11-04 12:00:00.000000)\t2013-11-04 11:00:00.000000-05:00\t4\n(2013-11-04 12:00:00.000000, 2013-11-04 13:00:00.000000)\t2013-11-04 12:00:00.000000-05:00\t2\n(2013-11-04 14:00:00.000000, 2013-11-04 15:00:00.000000)\t2013-11-04 14:00:00.000000-05:00\t5\n(2013-11-04 15:00:00.000000, 2013-11-04 16:00:00.000000)\t2013-11-04 15:00:00.000000-05:00\t2\n(2013-11-04 16:00:00.000000, 2013-11-04 17:00:00.000000)\t2013-11-04 16:00:00.000000-05:00\t9\n(2013-11-04 17:00:00.000000, 2013-11-04 18:00:00.000000)\t2013-11-04 17:00:00.000000-05:00\t11\n(2013-11-04 18:00:00.000000, 2013-11-04 19:00:00.000000)\t2013-11-04 18:00:00.000000-05:00\t41\n(2013-11-04 19:00:00.000000, 2013-11-04 20:00:00.000000)\t2013-11-04 19:00:00.000000-05:00\t2791\n(2013-11-04 20:00:00.000000, 2013-11-04 21:00:00.000000)\t2013-11-04 20:00:00.000000-05:00\t15185\n(2013-11-04 21:00:00.000000, 2013-11-04 22:00:00.000000)\t2013-11-04 21:00:00.000000-05:00\t27500\n\n\n"})}),"\n",(0,n.jsx)(e.p,{children:"Yes, this can also be achieved by extracting the hour from time and then aggregating - it's additional code/work, but can be done without timeseries specific functionality."}),"\n",(0,n.jsx)(e.p,{children:"But, now let's go a step further to identify how many passengers are being picked up and what is the average trip duration by vendor every 15 minutes in November."}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-sql",children:"SELECT TOP 10\n    $TD_TIMECODE_RANGE,\n    vendor_id,\n    SUM(passenger_count),\n    AVG((dropoff_datetime - pickup_datetime ) MINUTE (4)) AS avg_trip_time_in_mins\nFROM trip\nGROUP BY TIME (MINUTES(15) AND vendor_id)\nUSING TIMECODE(pickup_datetime)\nWHERE EXTRACT(MONTH FROM pickup_datetime)=11\nORDER BY 1,2;\n"})}),"\n",(0,n.jsx)(e.p,{children:"Result:"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-sql",children:"\nTIMECODE_RANGE\t\t\t\t\t\t\tvendor_id\tpassenger_count\t\tavg_trip_time_in_mins\n--------------------------------------------------------\t----------\t----------------\t----------------------\n(2013-11-04 11:00:00.000000, 2013-11-04 11:15:00.000000)\tVTS\t\t1\t\t\t16\n(2013-11-04 11:15:00.000000, 2013-11-04 11:30:00.000000)\tVTS\t\t1\t\t\t10\n(2013-11-04 11:45:00.000000, 2013-11-04 12:00:00.000000)\tVTS\t\t2\t\t\t6\n(2013-11-04 12:00:00.000000, 2013-11-04 12:15:00.000000)\tVTS\t\t1\t\t\t11\n(2013-11-04 12:15:00.000000, 2013-11-04 12:30:00.000000)\tVTS\t\t1\t\t\t57\n(2013-11-04 14:15:00.000000, 2013-11-04 14:30:00.000000)\tVTS\t\t1\t\t\t3\n(2013-11-04 14:30:00.000000, 2013-11-04 14:45:00.000000)\tVTS\t\t2\t\t\t19\n(2013-11-04 14:45:00.000000, 2013-11-04 15:00:00.000000)\tVTS\t\t2\t\t\t9\n(2013-11-04 15:15:00.000000, 2013-11-04 15:30:00.000000)\tVTS\t\t1\t\t\t11\n(2013-11-04 15:30:00.000000, 2013-11-04 15:45:00.000000)\tVTS\t\t1\t\t\t31\n\n\n"})}),"\n",(0,n.jsx)(e.p,{children:"This is the power of Vantage time series functionality. Without needing complicated, cumbersome logic we are able to find average trip duration by vendor every 15 minutes just by modifying the group by time clause. Let's now look at how simple it is to build moving averages based on this. First, let's start by creating a view as below."}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-sql",children:"REPLACE VIEW NYC_taxi_trip_ts as\nSELECT\n\t$TD_TIMECODE_RANGE time_bucket_per\n\t,vendor_id\n\t,sum(passenger_count) passenger_cnt\n\t,avg(CAST((dropoff_datetime - pickup_datetime MINUTE(4) ) AS INTEGER))  avg_trip_time_in_mins\nFROM trip\nGROUP BY TIME (MINUTES(15) and vendor_id)\nUSING TIMECODE(pickup_datetime)\nWHERE extract(month from pickup_datetime)=11\n\n"})}),"\n",(0,n.jsx)(e.p,{children:"Let's calculate a 2 hours moving average on our 15-minutes time series. 2 hour is 8 * 15 minutes periods."}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-sql",children:"SELECT * FROM MovingAverage (\n  ON NYC_taxi_trip_ts PARTITION BY vendor_id ORDER BY time_bucket_per\n  USING\n  MAvgType ('S')\n  WindowSize (8)\n  TargetColumns ('passenger_cnt')\n) AS dt\nWHERE begin(time_bucket_per)(date) = '2014-11-25'\nORDER BY vendor_id, time_bucket_per;\n"})}),"\n",(0,n.jsx)(e.p,{children:"Result:"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-sql",children:"\ntime_bucket_per\t\t\t\t\t\t\tvendor_id\tpassenger_cnt\t\tavg_trip_time_in_mins\tpassenger_cnt_smavg\n---------------------------------------------------------\t--------------\t----------------------\t--------------------\t--------------------\n(2013-11-04 14:45:00.000000, 2013-11-04 15:00:00.000000)\tVTS\t\t2\t\t\t9\t\t\t1.375\n(2013-11-04 15:15:00.000000, 2013-11-04 15:30:00.000000)\tVTS\t\t1\t\t\t11\t\t\t1.375\n(2013-11-04 15:30:00.000000, 2013-11-04 15:45:00.000000)\tVTS\t\t1\t\t\t31\t\t\t1.375\n(2013-11-04 16:15:00.000000, 2013-11-04 16:30:00.000000)\tVTS\t\t2\t\t\t16\t\t\t1.375\n(2013-11-04 16:30:00.000000, 2013-11-04 16:45:00.000000)\tVTS\t\t1\t\t\t3\t\t\t1.375\n(2013-11-04 16:45:00.000000, 2013-11-04 17:00:00.000000)\tVTS\t\t6\t\t\t38\t\t\t2\n(2013-11-04 17:15:00.000000, 2013-11-04 17:30:00.000000)\tVTS\t\t2\t\t\t29.5\t\t\t2.125\n(2013-11-04 17:45:00.000000, 2013-11-04 18:00:00.000000)\tVTS\t\t9\t\t\t20.33333333\t\t3\n(2013-11-04 18:00:00.000000, 2013-11-04 18:15:00.000000)\tVTS\t\t6\t\t\t23.4\t\t\t3.5\n(2013-11-04 18:15:00.000000, 2013-11-04 18:30:00.000000)\tVTS\t\t4\t\t\t15.66666667\t\t3.875\n(2013-11-04 18:30:00.000000, 2013-11-04 18:45:00.000000)\tVTS\t\t8\t\t\t24.5\t\t\t4.75\n(2013-11-04 18:45:00.000000, 2013-11-04 19:00:00.000000)\tVTS\t\t23\t\t\t38.33333333\t\t7.375\n(2013-11-04 19:00:00.000000, 2013-11-04 19:15:00.000000)\tVTS\t\t195\t\t\t26.61538462\t\t31.625\n(2013-11-04 19:15:00.000000, 2013-11-04 19:30:00.000000)\tVTS\t\t774\t\t\t13.70083102\t\t127.625\n(2013-11-04 19:30:00.000000, 2013-11-04 19:45:00.000000)\tVTS\t\t586\t\t\t12.38095238\t\t200.625\n(2013-11-04 19:45:00.000000, 2013-11-04 20:00:00.000000)\tVTS\t\t1236\t\t\t15.54742097\t\t354\n(2013-11-04 20:00:00.000000, 2013-11-04 20:15:00.000000)\tVTS\t\t3339\t\t\t11.78947368\t\t770.625\n(2013-11-04 20:15:00.000000, 2013-11-04 20:30:00.000000)\tVTS\t\t3474\t\t\t10.5603396\t\t1204.375\n(2013-11-04 20:30:00.000000, 2013-11-04 20:45:00.000000)\tVTS\t\t3260\t\t\t12.26484323\t\t1610.875\n(2013-11-04 20:45:00.000000, 2013-11-04 21:00:00.000000)\tVTS\t\t5112\t\t\t12.05590062\t\t2247\n\n\n\n"})}),"\n",(0,n.jsx)(e.admonition,{type:"note",children:(0,n.jsx)(e.p,{children:"In addition to above time series operations, Vantage also provides a special time series tables with Primary Time Index (PTI). These are regular Vantage tables with PTI defined rather than a Primary Index (PI). Though tables with PTI are not mandatory for time series functionality/operations, PTI optimizes how the time series data is stored physically and hence improves performance considerably compared to regular tables."})}),"\n",(0,n.jsx)(e.h2,{id:"summary",children:"Summary"}),"\n",(0,n.jsx)(e.p,{children:"In this quick start we have learnt how easy it is to analyse time series datasets using Vantage's time series capabilities."}),"\n",(0,n.jsx)(e.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"https://docs.teradata.com/r/Teradata-VantageTM-Time-Series-Tables-and-Operations/July-2021/Introduction-to-Teradata-Time-Series-Tables-and-Operations",children:"Teradata Vantage\u2122 - Time Series Tables and Operations"})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"/pr-preview/pr-145/fr/quickstarts/manage-data/nos",children:"Query data stored in object storage"})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"https://docs.teradata.com/r/2mw8ooFr~xX0EaaGFaDW8A/root",children:"Teradata Vantage\u2122 - Native Object Store Getting Started Guide"})}),"\n"]}),"\n",(0,n.jsx)(r.Ay,{})]})}function u(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(m,{...t})}):m(t)}},28453:(t,e,a)=>{a.d(e,{R:()=>r,x:()=>o});var n=a(96540);const i={},s=n.createContext(i);function r(t){const e=n.useContext(s);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:r(t.components),n.createElement(s.Provider,{value:e},t.children)}}}]);