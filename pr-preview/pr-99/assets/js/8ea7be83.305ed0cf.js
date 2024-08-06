"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[3882],{41269:(e,a,t)=>{t.d(a,{Ay:()=>o,RM:()=>s});var n=t(74848),i=t(28453);const s=[];function r(e){const a={a:"a",admonition:"admonition",p:"p",...(0,i.R)(),...e.components};return(0,n.jsx)(a.admonition,{type:"note",children:(0,n.jsxs)(a.p,{children:["If you have any questions or need further assistance, please visit our ",(0,n.jsx)(a.a,{href:"https://support.teradata.com/community",children:"community forum"})," where you can get support and interact with other community members."]})})}function o(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}},62680:(e,a,t)=>{t.d(a,{Ay:()=>o,RM:()=>s});var n=t(74848),i=t(28453);const s=[];function r(e){const a={a:"a",admonition:"admonition",p:"p",...(0,i.R)(),...e.components};return(0,n.jsx)(a.admonition,{type:"note",children:(0,n.jsxs)(a.p,{children:["If you need a test instance of Vantage, you can provision one for free at ",(0,n.jsx)(a.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})]})})}function o(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}},85525:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>d,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=t(74848),i=t(28453),s=t(62680),r=t(41269);const o={sidebar_position:18,author:"Paul Ibberson",email:"paul.ibberson2@teradata.com",page_last_update:"Deccember 19th, 2023",description:"Configure a Teradata Vantage connection in DataHub.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","datahub","data catalog","data lineage"]},d="Configure a Teradata Vantage connection in DataHub",c={id:"manage-data/configure-a-teradata-vantage-connection-in-datahub",title:"Configure a Teradata Vantage connection in DataHub",description:"Configure a Teradata Vantage connection in DataHub.",source:"@site/quickstarts/manage-data/configure-a-teradata-vantage-connection-in-datahub.md",sourceDirName:"manage-data",slug:"/manage-data/configure-a-teradata-vantage-connection-in-datahub",permalink:"/pr-preview/pr-99/quickstarts/manage-data/configure-a-teradata-vantage-connection-in-datahub",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:18,frontMatter:{sidebar_position:18,author:"Paul Ibberson",email:"paul.ibberson2@teradata.com",page_last_update:"Deccember 19th, 2023",description:"Configure a Teradata Vantage connection in DataHub.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","datahub","data catalog","data lineage"]},sidebar:"tutorialSidebar",previous:{title:"Integrate Teradata Vantage with Google Cloud Data Catalog",permalink:"/pr-preview/pr-99/quickstarts/manage-data/integrate-teradata-vantage-with-google-cloud-data-catalog"},next:{title:"Ingest and Catalog Data from Teradata Vantage to Amazon S3 with AWS Glue Scripts",permalink:"/pr-preview/pr-99/quickstarts/manage-data/ingest-catalog-data-teradata-s3-with-glue"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},...s.RM,{value:"Setup DataHub",id:"setup-datahub",level:2},{value:"Add a Teradata connection to DataHub",id:"add-a-teradata-connection-to-datahub",level:2},{value:"Summary",id:"summary",level:2},{value:"Further reading",id:"further-reading",level:2},...r.RM];function h(e){const a={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"configure-a-teradata-vantage-connection-in-datahub",children:"Configure a Teradata Vantage connection in DataHub"}),"\n",(0,n.jsx)(a.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(a.p,{children:"This how-to demonstrates how to create a connection to Teradata Vantage with DataHub, and ingest metadata about tables and views, along with usage and lineage information."}),"\n",(0,n.jsx)(a.h2,{id:"prerequisites",children:"Prerequisites"}),"\n","\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["Access to a Teradata Vantage instance.","\n",(0,n.jsx)(s.Ay,{}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["DataHub installed. See ",(0,n.jsx)(a.a,{href:"https://datahubproject.io/docs/quickstart",children:"DataHub Quickstart Guide"})]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"setup-datahub",children:"Setup DataHub"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Install the Teradata plugin for DataHub in the environment where you have DataHub installed"}),"\n"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"pip install 'acryl-datahub[teradata]'\n"})}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Setup a Teradata user and set privileges to allow that user to read the dictionary tables"}),"\n"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"CREATE USER datahub FROM <database> AS PASSWORD = <password> PERM = 20000000;\n\nGRANT SELECT ON dbc.columns TO datahub;\nGRANT SELECT ON dbc.databases TO datahub;\nGRANT SELECT ON dbc.tables TO datahub;\nGRANT SELECT ON DBC.All_RI_ChildrenV TO datahub;\nGRANT SELECT ON DBC.ColumnsV TO datahub;\nGRANT SELECT ON DBC.IndicesV TO datahub;\nGRANT SELECT ON dbc.TableTextV TO datahub;\nGRANT SELECT ON dbc.TablesV TO datahub;\nGRANT SELECT ON dbc.dbqlogtbl TO datahub; -- if lineage or usage extraction is enabled\n"})}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"If you want to run profiling, you need to grant select permission on all the tables you want to profile."}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"If you want to extract lineage or usage metadata, query logging must be enabled and it is set to size which will fit for your queries (the default query text size Teradata captures is max 200 chars) An example how you can set it for all users:"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"-- set up query logging on all\n\nREPLACE QUERY LOGGING LIMIT SQLTEXT=2000 ON ALL;\n"})}),"\n",(0,n.jsx)(a.h2,{id:"add-a-teradata-connection-to-datahub",children:"Add a Teradata connection to DataHub"}),"\n",(0,n.jsx)(a.p,{children:"With DataHub running, open the DataHub GUI and login.  In this example this is running at localhost:9002"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["Start the new connection wizard by clicking on the ingestion plug icon\n",(0,n.jsx)(a.img,{alt:"Ingestion Label",src:t(43834).A+"",width:"482",height:"80"})]}),"\n",(0,n.jsx)(a.p,{children:'and then selecting "Create new source"'}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Create New Source",src:t(25829).A+"",width:"3705",height:"1377"})}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["Scroll the list of available sources and select Other\n",(0,n.jsx)(a.img,{alt:"Select Source",src:t(88865).A+"",width:"985",height:"659"})]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"A recipe is needed to configure the connection to Teradata and define the options required such as whether to capture table and column lineage, profile the data or retrieve usage statistics.  Below is a simple recipe to get you started. The host, username and password should be changed to match your environment."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-yaml",children:'pipeline_name: my-teradata-ingestion-pipeline\nsource:\n  type: teradata\n  config:\n    host_port: "myteradatainstance.teradata.com:1025"\n    username: myuser\n    password: mypassword\n    #database_pattern:\n    #  allow:\n    #    - "my_database"\n    #  ignoreCase: true\n    include_table_lineage: true\n    include_usage_statistics: true\n    stateful_ingestion:\n      enabled: true\n'})}),"\n",(0,n.jsxs)(a.p,{children:["Pasting the recipe into the window should look like this:\n",(0,n.jsx)(a.img,{alt:"New Ingestion Source",src:t(4518).A+"",width:"800",height:"942"})]}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["Click Next and then setup the required schedule.\n",(0,n.jsx)(a.img,{alt:"Set Schedule",src:t(15412).A+"",width:"797",height:"580"})]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["Click Next to Finish Up and give the connection a name. Click Advanced so that the correct CLI version can be set. DataHub support for Teradata became available in CLI 0.12.x.  Suggest selecting the most current version to ensure the best compatibility.\n",(0,n.jsx)(a.img,{alt:"Finish up",src:t(64909).A+"",width:"800",height:"1080"})]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["Once the new source has been saved, it can be executed manually by clicking Run.\n",(0,n.jsx)(a.img,{alt:"Execute",src:t(60525).A+"",width:"1447",height:"522"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:['Clicking on "Succeeded" after a sucessful execution will bring up a dialogue similar to this one where you can see the Databases, Tables and Views that have been ingested into DataHub.',(0,n.jsx)(a.br,{}),"\n",(0,n.jsx)(a.img,{alt:"Ingestion Result",src:t(22182).A+"",width:"792",height:"847"})]}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["The metadata can now be explored in the GUI by browsing:","\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["DataSets provides a list of the datasets (tables and views) loaded\n",(0,n.jsx)(a.img,{alt:"datasets",src:t(20917).A+"",width:"985",height:"850"})]}),"\n",(0,n.jsxs)(a.li,{children:["Entities captured from the database\n",(0,n.jsx)(a.img,{alt:"Entities",src:t(93162).A+"",width:"1075",height:"1067"})]}),"\n",(0,n.jsxs)(a.li,{children:["Schema of an entity showing column/field names, data types and usage if it has been captured\n",(0,n.jsx)(a.img,{alt:"Schema display",src:t(51603).A+"",width:"1085",height:"655"})]}),"\n",(0,n.jsxs)(a.li,{children:["Lineage providing a visual representation of how data is linked between tables and views\n",(0,n.jsx)(a.img,{alt:"Lineage picture",src:t(47828).A+"",width:"1450",height:"875"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"summary",children:"Summary"}),"\n",(0,n.jsx)(a.p,{children:"This how-to demonstrated how to create a connection to Teradata Vantage with DataHub in order to capture metadata of tables, views along with lineage and usage statistics."}),"\n",(0,n.jsx)(a.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"https://datahubproject.io/docs/generated/ingestion/sources/teradata",children:"Integrate DataHub with Teradata Vantage"})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"https://datahubproject.io/docs/metadata-ingestion/#recipes",children:"DataHub Integration Options for Recipes"})}),"\n"]}),"\n","\n",(0,n.jsx)(r.Ay,{})]})}function g(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},25829:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/create-new-source-e94a44a4dc03a509441ecf76835036a9.png"},20917:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/datasets-aa183fc1a7028e53fe7a8af12b6d4ede.png"},93162:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/entities-list-4c2fa38b611e0cadd01baf11b4315e63.png"},60525:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/execute-7689d31b7ffed0ecdf649f3c8ec59d34.png"},64909:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/finish-up-58e9f4411f35354fe99e5060fd92a1e2.png"},43834:(e,a,t)=>{t.d(a,{A:()=>n});const n="data:image/png;base64,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"},22182:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/ingestion-result-8e784332483b729e908c986632db3586.png"},47828:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/lineage-weather-3a4efc3dac9ec6866c2650475c134667.png"},4518:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/new-ingestion-source-6f09310a80a225ece0d8d1cd204b90be.png"},51603:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/schema-ac9ff95cd8e1ce00afbe74abe458b867.png"},88865:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/select-other-source-e646944ad6c3d72c4936a0dd16f30140.png"},15412:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/set-schedule-71a04d3a4e2146254bd9646e39d11047.png"},28453:(e,a,t)=>{t.d(a,{R:()=>r,x:()=>o});var n=t(96540);const i={},s=n.createContext(i);function r(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);