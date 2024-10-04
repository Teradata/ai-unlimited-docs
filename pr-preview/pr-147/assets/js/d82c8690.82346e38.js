"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[5511],{41269:(e,t,a)=>{a.d(t,{Ay:()=>i,RM:()=>o});var n=a(74848),r=a(28453);const o=[];function s(e){const t={a:"a",admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["If you have any questions or need further assistance, please visit our ",(0,n.jsx)(t.a,{href:"https://support.teradata.com/community",children:"community forum"})," where you can get support and interact with other community members."]})})}function i(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}},43457:(e,t,a)=>{a.d(t,{Ay:()=>i,RM:()=>o});var n=a(74848),r=a(28453);const o=[];function s(e){const t={a:"a",admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["You can now get a hosted instance of Vantage for free at ",(0,n.jsx)(t.a,{href:"https://clearscape.teradata.com/",children:"https://clearscape.teradata.com"}),"."]})})}function i(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}},88837:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=a(74848),r=a(28453),o=a(43457),s=a(41269);const i={sidebar_position:12,id:"create-parquet-files-in-object-storage",author:"Obed Vega",email:"obed.vega@teradata.com",page_last_update:"August 2nd, 2022",description:"Teradata Vantage Native Object Storage - read and write from/to object storage, unified SQL interface for Vantage and object storage.",keywords:["data warehouses","compute storage separation","Teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","parquet","create parquet files"]},c="Create Parquet files in object storage",l={id:"manage-data/create-parquet-files-in-object-storage",title:"Create Parquet files in object storage",description:"Teradata Vantage Native Object Storage - read and write from/to object storage, unified SQL interface for Vantage and object storage.",source:"@site/quickstarts/manage-data/create-parquet-files-in-object-storage.md",sourceDirName:"manage-data",slug:"/manage-data/create-parquet-files-in-object-storage",permalink:"/pr-preview/pr-147/quickstarts/manage-data/create-parquet-files-in-object-storage",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12,id:"create-parquet-files-in-object-storage",author:"Obed Vega",email:"obed.vega@teradata.com",page_last_update:"August 2nd, 2022",description:"Teradata Vantage Native Object Storage - read and write from/to object storage, unified SQL interface for Vantage and object storage.",keywords:["data warehouses","compute storage separation","Teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","parquet","create parquet files"]},sidebar:"tutorialSidebar",previous:{title:"Load data with TPT",permalink:"/pr-preview/pr-147/quickstarts/manage-data/run-bulkloads-efficiently-with-teradata-parallel-transporter"},next:{title:"Execute Airflow workflows that use dbt with Teradata Vantage",permalink:"/pr-preview/pr-147/quickstarts/manage-data/execute-airflow-workflows-that-use-dbt-with-teradata-vantage"}},d={},u=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},...o.RM,{value:"Create a Parquet file with WRITE_NOS function",id:"create-a-parquet-file-with-write_nos-function",level:2},{value:"Summary",id:"summary",level:2},{value:"Further reading",id:"further-reading",level:2},...s.RM];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"create-parquet-files-in-object-storage",children:"Create Parquet files in object storage"}),"\n",(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(t.p,{children:"Native Object Storage (NOS) is a Vantage feature that allows you to query data stored in files such as CSV, JSON, and Parquet format datasets.\nThese datasets are located on external S3-compatible object storage such as AWS S3, Google GCS, Azure Blob or on-prem implementations.\nIt's useful in scenarios where you want to explore data without building a data pipeline to bring it into Vantage. This tutorial demonstrates how to export data from Vantage to object storage using the Parquet file format."}),"\n",(0,n.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsx)(t.p,{children:"You need access to a Teradata Vantage instance. NOS is enabled in all Vantage editions from Vantage Express through Developer, DYI to Vantage as a Service starting from version 17.10."}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"This tutorial is based on s3 aws object storage. You will need your own s3 bucket with write permissions to complete the tutorial."})}),"\n",(0,n.jsx)(o.Ay,{}),"\n",(0,n.jsx)(t.h2,{id:"create-a-parquet-file-with-write_nos-function",children:"Create a Parquet file with WRITE_NOS function"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"WRITE_NOS"})," allows you to extract selected or all columns from a database table or from derived results and write to external object storage, such as Amazon S3, Azure Blob storage, Azure Data Lake Storage Gen2, and Google Cloud Storage. This functionality stores data in Parquet format."]}),"\n",(0,n.jsxs)(t.p,{children:["You can find more documentation about ",(0,n.jsx)(t.code,{children:"WRITE_NOS"})," functionality in the ",(0,n.jsx)(t.a,{href:"https://docs.teradata.com/r/Teradata-VantageTM-Native-Object-Store-Getting-Started-Guide/June-2022/Writing-Data-to-External-Object-Store",children:"NOS documentation"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["You will need access to a database where you can execute ",(0,n.jsx)(t.code,{children:"WRITE_NOS"})," function. If you don't have such a database, run the following commands:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"CREATE USER db AS PERM=10e7, PASSWORD=db;\n\n-- Don't forget to give the proper access rights\nGRANT EXECUTE FUNCTION on TD_SYSFNLIB.READ_NOS to db;\nGRANT EXECUTE FUNCTION on TD_SYSFNLIB.WRITE_NOS to db;\n"})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["If you would like to learn more about setting up users and their privileges, checkout the ",(0,n.jsx)(t.a,{href:"https://docs.teradata.com/r/Teradata-VantageTM-Native-Object-Store-Getting-Started-Guide/June-2022/Setting-Up-Access/Setting-Access-Privileges",children:"NOS documentation"}),"."]})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Let's first create a table on your Teradata Vantage instance:"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"CREATE SET TABLE db.parquet_table ,FALLBACK ,\n     NO BEFORE JOURNAL,\n     NO AFTER JOURNAL,\n     CHECKSUM = DEFAULT,\n     DEFAULT MERGEBLOCKRATIO,\n     MAP = TD_MAP1\n     (\n      column1 SMALLINT NOT NULL,\n      column2 DATE FORMAT 'YY/MM/DD' NOT NULL,\n      column3 DECIMAL(10,2))\nPRIMARY INDEX ( column1 );\n"})}),"\n",(0,n.jsxs)(t.ol,{start:"2",children:["\n",(0,n.jsx)(t.li,{children:"Populate your table with example data:"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"INSERT INTO db.parquet_table (1,'2022/01/01',1.1);\nINSERT INTO db.parquet_table (2,'2022/01/02',2.2);\nINSERT INTO db.parquet_table (3,'2022/01/03',3.3);\n"})}),"\n",(0,n.jsx)(t.p,{children:"Your table should now look like this:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"column1   column2       column3\n-------  --------  ------------\n      1  22/01/01          1.10\n      2  22/01/02          2.20\n      3  22/01/03          3.30\n"})}),"\n",(0,n.jsxs)(t.ol,{start:"3",children:["\n",(0,n.jsxs)(t.li,{children:["Create the parquet file with ",(0,n.jsx)(t.code,{children:"WRITE_NOS"}),". Don't forget to replace ",(0,n.jsx)(t.code,{children:"<BUCKET_NAME>"})," with the name of your s3 bucket. Also,replace ",(0,n.jsx)(t.code,{children:"<YOUR-ACCESS-KEY-ID>"})," and ",(0,n.jsx)(t.code,{children:"<YOUR-SECRET-ACCESS-KEY>"})," with your access key and secret."]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["Check your cloud provider docs how to create credentials to access object storage. For example, for AWS check out ",(0,n.jsx)(t.a,{href:"https://aws.amazon.com/premiumsupport/knowledge-center/create-access-key/",children:"How do I create an AWS access key?"})]})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"SELECT * FROM WRITE_NOS (\nON ( SELECT * FROM db.parquet_table)\nUSING\nLOCATION('/s3/<BUCKET_NAME>.s3.amazonaws.com/parquet_file_on_NOS.parquet')\nAUTHORIZATION('{\"ACCESS_ID\":\"<YOUR-ACCESS-KEY-ID>\",\n\"ACCESS_KEY\":\"<YOUR-SECRET-ACCESS-KEY>\"}')\nSTOREDAS('PARQUET')\nMAXOBJECTSIZE('16MB')\nCOMPRESSION('SNAPPY')\nINCLUDE_ORDERING('TRUE')\nINCLUDE_HASHBY('TRUE')\n) as d;\n"})}),"\n",(0,n.jsx)(t.p,{children:"Now you have created a parquet file in your object storage bucket. Now to easily query your file you need to follow step number 4."}),"\n",(0,n.jsxs)(t.ol,{start:"4",children:["\n",(0,n.jsxs)(t.li,{children:["Create a NOS-backed foreign table. Don't forget to replace ",(0,n.jsx)(t.code,{children:"<BUCKET_NAME>"})," with the name of your s3 bucket. Also,replace ",(0,n.jsx)(t.code,{children:"<YOUR-ACCESS-KEY-ID>"})," and ",(0,n.jsx)(t.code,{children:"<YOUR-SECRET-ACCESS-KEY>"})," with your access key and secret:"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:'CREATE MULTISET FOREIGN TABLE db.parquet_table_to_read_file_on_NOS\n, EXTERNAL SECURITY DEFINER TRUSTED CEPH_AUTH,\nMAP = TD_MAP1\n(\n  Location VARCHAR(2048) CHARACTER SET UNICODE CASESPECIFIC\n  , col1 SMALLINT\n  , col2 DATE\n  , col3 DECIMAL(10,2)\n\n)\nUSING (\n    LOCATION (\'/s3/<BUCKET_NAME>.s3.amazonaws.com/parquet_file_on_NOS.parquet\')\n    AUTHORIZATION(\'{"ACCESS_ID":"<YOUR-ACCESS-KEY-ID>",\n    "ACCESS_KEY":"<YOUR-SECRET-ACCESS-KEY>"}\')\n    STOREDAS (\'PARQUET\')\n)NO PRIMARY INDEX;\n'})}),"\n",(0,n.jsxs)(t.ol,{start:"5",children:["\n",(0,n.jsx)(t.li,{children:"Now you are ready to Query your parquet file on NOS, let's try the following query:"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"SELECT col1, col2, col3 FROM db.parquet_table_to_read_file_on_NOS;\n"})}),"\n",(0,n.jsx)(t.p,{children:"The data returned from the query should look something like this:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"  col1      col2          col3\n------  --------  ------------\n     1  22/01/01          1.10\n     2  22/01/02          2.20\n     3  22/01/03          3.30\n"})}),"\n",(0,n.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,n.jsx)(t.p,{children:"In this tutorial we have learned how to export data from Vantage to a parquet file on object storage using Native Object Storage (NOS). NOS supports reading and importing data stored in CSV, JSON and Parquet formats. NOS can also export data from Vantage to object storage."}),"\n",(0,n.jsx)(t.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.teradata.com/r/Teradata-VantageTM-Native-Object-Store-Getting-Started-Guide/June-2022/Writing-Data-to-External-Object-Store",children:"Teradata Vantage\u2122 - Writing Data to External Object Store"})}),"\n"]}),"\n",(0,n.jsx)(s.Ay,{})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>i});var n=a(96540);const r={},o=n.createContext(r);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);