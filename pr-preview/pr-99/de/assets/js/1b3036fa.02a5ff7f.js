"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[5515],{41269:(e,t,a)=>{a.d(t,{Ay:()=>d,RM:()=>i});var n=a(74848),s=a(28453);const i=[];function r(e){const t={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["If you have any questions or need further assistance, please visit our ",(0,n.jsx)(t.a,{href:"https://support.teradata.com/community",children:"community forum"})," where you can get support and interact with other community members."]})})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}},62680:(e,t,a)=>{a.d(t,{Ay:()=>d,RM:()=>i});var n=a(74848),s=a(28453);const i=[];function r(e){const t={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["If you need a test instance of Vantage, you can provision one for free at ",(0,n.jsx)(t.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})]})})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}},14423:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var n=a(74848),s=a(28453),i=a(62680),r=a(41269);const d={sidebar_position:5,id:"advanced-dbt",title:"Advanced dbt use cases with Teradata Vantage",author:"Daniel Herrera",email:"daniel.herrera2@teradata.com",page_last_update:"May 22th, 2023",description:"Advanced dbt (data build tool) use cases with Teradata Vantage.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","elt","dbt."]},o="Advanced dbt use cases with Teradata Vantage",c={id:"manage-data/advanced-dbt",title:"Advanced dbt use cases with Teradata Vantage",description:"Advanced dbt (data build tool) use cases with Teradata Vantage.",source:"@site/quickstarts/manage-data/advanced-dbt.md",sourceDirName:"manage-data",slug:"/manage-data/advanced-dbt",permalink:"/pr-preview/pr-99/de/quickstarts/manage-data/advanced-dbt",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,id:"advanced-dbt",title:"Advanced dbt use cases with Teradata Vantage",author:"Daniel Herrera",email:"daniel.herrera2@teradata.com",page_last_update:"May 22th, 2023",description:"Advanced dbt (data build tool) use cases with Teradata Vantage.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","elt","dbt."]},sidebar:"tutorialSidebar",previous:{title:"dbt with Teradata Vantage",permalink:"/pr-preview/pr-99/de/quickstarts/manage-data/dbt"},next:{title:"Build a FEAST feature store in Teradata Vantage",permalink:"/pr-preview/pr-99/de/quickstarts/manage-data/using-feast-feature-store-with-teradata-vantage"}},l={},h=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},...i.RM,{value:"Demo project setup",id:"demo-project-setup",level:2},{value:"Data warehouse setup",id:"data-warehouse-setup",level:2},{value:"Configure dbt",id:"configure-dbt",level:2},{value:"About the Teddy Retailers warehouse",id:"about-the-teddy-retailers-warehouse",level:2},{value:"The data models",id:"the-data-models",level:3},{value:"The sources",id:"the-sources",level:3},{value:"The dbt models",id:"the-dbt-models",level:2},{value:"Staging area",id:"staging-area",level:3},{value:"Core area",id:"core-area",level:3},{value:"Incremental materializations",id:"incremental-materializations",level:4},{value:"Macro assisted assertions",id:"macro-assisted-assertions",level:4},{value:"Teradata modifiers",id:"teradata-modifiers",level:4},{value:"Running transformations",id:"running-transformations",level:2},{value:"Create dimensional model with baseline data",id:"create-dimensional-model-with-baseline-data",level:3},{value:"Test the data",id:"test-the-data",level:3},{value:"Running sample queries",id:"running-sample-queries",level:3},{value:"Mocking the ELT process",id:"mocking-the-elt-process",level:3},{value:"Summary",id:"summary",level:2},...r.RM];function u(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"advanced-dbt-use-cases-with-teradata-vantage",children:"Advanced dbt use cases with Teradata Vantage"}),"\n",(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(t.p,{children:["This project showcases the integration of dbt with Teradata Vantage from an advanced user perspective.\nIf you are new to data engineering with dbt we recommend that you start with our ",(0,n.jsx)(t.a,{href:"/pr-preview/pr-99/de/quickstarts/manage-data/dbt",children:"introductory project."})]}),"\n",(0,n.jsx)(t.p,{children:"The advanced use cases showcased in the demo are the following:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Incremental materializations"}),"\n",(0,n.jsx)(t.li,{children:"Utility macros"}),"\n",(0,n.jsx)(t.li,{children:"Optimizing table/view creations with Teradata-specific modifiers"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["The application of these concepts is illustrated through the ELT process of ",(0,n.jsx)(t.code,{children:"teddy_retailers"}),", a fictional store."]}),"\n",(0,n.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Access to a Teradata Vantage instance."}),"\n",(0,n.jsx)(i.Ay,{}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Python ",(0,n.jsx)(t.strong,{children:"3.7"}),", ",(0,n.jsx)(t.strong,{children:"3.8"}),", ",(0,n.jsx)(t.strong,{children:"3.9"})," or ",(0,n.jsx)(t.strong,{children:"3.10"})," installed."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["A database client for running database commands, an example of the configuration of one such client is presented in ",(0,n.jsx)(t.a,{href:"/pr-preview/pr-99/de/quickstarts/connect-to-vantage/configure-a-teradata-vantage-connection-in-dbeaver",children:"this tutorial."}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"demo-project-setup",children:"Demo project setup"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Clone the tutorial repository and cd into the project directory:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"git clone https://github.com/Teradata/teddy_retailers_dbt-dev teddy_retailers\ncd teddy_retailers\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Create a new python environment to manage dbt and its dependencies. Confirm that the Python Version you are using to create the environment is within the supported versions listed above."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"python -m venv env\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Activate the python environment according to your operating system."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"source env/bin/activate\n"})}),"\n",(0,n.jsx)(t.p,{children:"for Mac, Linux, or"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"env\\Scripts\\activate\n"})}),"\n",(0,n.jsx)(t.p,{children:"for Windows"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Install the ",(0,n.jsx)(t.code,{children:"dbt-teradata"})," module. The core dbt module is included as a dependency so you don't have to install it separately:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"pip install dbt-teradata\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Install the project's dependencies ",(0,n.jsx)(t.code,{children:"dbt-utils"})," and ",(0,n.jsx)(t.code,{children:"teradata-utils"}),". This can be done through the following command:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"dbt deps\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"data-warehouse-setup",children:"Data warehouse setup"}),"\n",(0,n.jsx)(t.p,{children:"The demo project assumes that the source data is already loaded into your data warehouse, this mimics the way that dbt is used in a production environment.\nTo achieve this objective we provide public datasets available in Google Cload Platform (GCP), and scripts to load those datasets into your mock data warehouse."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Create or select a working database. The dbt profile in the project points to a database called ",(0,n.jsx)(t.code,{children:"teddy_retailers"}),". You can change the ",(0,n.jsx)(t.code,{children:"schema"})," value to point to an existing database in your Teradata Vantage instance or you can create the ",(0,n.jsx)(t.code,{children:"teddy_retailers"})," database running the following script in your database client:","\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"CREATE DATABASE teddy_retailers\nAS PERMANENT = 110e6,\n    SPOOL = 220e6;\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Load Initial data set.\nTo load the initial data set into the data warehouse, the required scripts are available in the ",(0,n.jsx)(t.code,{children:"references/inserts/create_data.sql"})," path of the project.\nYou can execute these scripts by copying and pasting them into your database client. For guidance on running these scripts in your specific case please consult your database client's documentation."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"configure-dbt",children:"Configure dbt"}),"\n",(0,n.jsxs)(t.p,{children:["We will now configure dbt to connect to your Vantage database.\nCreate the file ",(0,n.jsx)(t.code,{children:"$HOME/.dbt/profiles.yml"})," with the following content. Adjust ",(0,n.jsx)(t.code,{children:"<host>"}),", ",(0,n.jsx)(t.code,{children:"<user>"}),", ",(0,n.jsx)(t.code,{children:"<password>"})," to match your Teradata Vantage instance.\nIf you have already used dbt before in your environment you only need to add a profile for the project in your home's directory ",(0,n.jsx)(t.code,{children:".dbt/profiles.yml"})," file.\nIf the directory .dbt doesn't exist in your system yet you will need to create it and add the profiles.yml to manage your dbt profiles."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"teddy_retailers:\n  outputs:\n    dev:\n      type: teradata\n      host: <host>\n      user: <user>\n      password: <password>\n      logmech: TD2\n      schema: teddy_retailers\n      tmode: ANSI\n      threads: 1\n      timeout_seconds: 300\n      priority: interactive\n      retries: 1\n  target: dev\n"})}),"\n",(0,n.jsx)(t.p,{children:"Now, that we have the profile file in place, we can validate the setup:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"dbt debug\n"})}),"\n",(0,n.jsxs)(t.p,{children:["If the debug command returned errors, you likely have an issue with the content of ",(0,n.jsx)(t.code,{children:"profiles.yml"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"about-the-teddy-retailers-warehouse",children:"About the Teddy Retailers warehouse"}),"\n",(0,n.jsxs)(t.p,{children:["As mentioned, ",(0,n.jsx)(t.code,{children:"teddy_retailers"})," is a fictional store.\nThrough dbt driven transformations we transform source data ingested from the",(0,n.jsx)(t.code,{children:"teddy_retailers"})," transactional database into a star schema ready for analytics."]}),"\n",(0,n.jsx)(t.h3,{id:"the-data-models",children:"The data models"}),"\n",(0,n.jsx)(t.p,{children:"The source data consists of the following tables customers, orders, products, and order_products, according to the following Entity Relations Diagram:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"advanceddbt1",src:a(62032).A+"",width:"877",height:"427"})}),"\n",(0,n.jsx)(t.p,{children:"Using dbt, we leverage the source data tables to construct the following dimensional model, which is optimized for analytics tools."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"advanceddbt2",src:a(19075).A+"",width:"641",height:"609"})}),"\n",(0,n.jsx)(t.h3,{id:"the-sources",children:"The sources"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["For Teddy Retailers, the ",(0,n.jsx)(t.code,{children:"orders"})," and ",(0,n.jsx)(t.code,{children:"order_products"})," sources are periodically updated by the organization's ELT (Extract, Load, Transform) process."]}),"\n",(0,n.jsx)(t.li,{children:"The updated data only includes the latest changes rather than the entire dataset due to its large volume."}),"\n",(0,n.jsx)(t.li,{children:"To address this challenge, it is necessary to capture these incremental updates while preserving the previously available data."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"the-dbt-models",children:"The dbt models"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"schema.yml"})," file in the project's models directory specifies the sources for our models. These sources align with the data we loaded from GCP using our SQL scripts."]}),"\n",(0,n.jsx)(t.h3,{id:"staging-area",children:"Staging area"}),"\n",(0,n.jsx)(t.p,{children:"The staging area models are merely ingesting the data from each of the sources and renaming each field, if appropiate.\nIn the schema.yml of this directory we define basic integrity checks for the primary keys."}),"\n",(0,n.jsx)(t.h3,{id:"core-area",children:"Core area"}),"\n",(0,n.jsx)(t.p,{children:"The following advanced dbt concepts are applied in the models at this stage:"}),"\n",(0,n.jsx)(t.h4,{id:"incremental-materializations",children:"Incremental materializations"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"schema.yml"})," file in this directory specifies that the materializations of the two models we are building are incremental.\nWe employ different strategies for these models:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["For the ",(0,n.jsx)(t.code,{children:"all_orders model"}),", we utilize the delete+insert strategy. This strategy is implemented because there may be changes in the status of an order that are included in the data updates."]}),"\n",(0,n.jsxs)(t.li,{children:["For the ",(0,n.jsx)(t.code,{children:"all_order_products"})," model, we employ the default append strategy. This approach is chosen because the same combination of ",(0,n.jsx)(t.code,{children:"order_id"})," and ",(0,n.jsx)(t.code,{children:"product_id"})," may appear multiple times in the sources.\nThis indicates that a new quantity of the same product has been added or removed from a specific order."]}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"macro-assisted-assertions",children:"Macro assisted assertions"}),"\n",(0,n.jsxs)(t.p,{children:["Within the ",(0,n.jsx)(t.code,{children:"all_order_products"})," model, we have included an assertion with the help of a macro to test and guarantee that the resulting model encompasses a unique combination of ",(0,n.jsx)(t.code,{children:"order_id"})," and ",(0,n.jsx)(t.code,{children:"product_id"}),". This combination denotes the latest quantity of products of a specific type per order."]}),"\n",(0,n.jsx)(t.h4,{id:"teradata-modifiers",children:"Teradata modifiers"}),"\n",(0,n.jsxs)(t.p,{children:["For both the ",(0,n.jsx)(t.code,{children:"all_order"})," and ",(0,n.jsx)(t.code,{children:"all_order_products"})," models, we have incorporated Teradata Modifiers to enhance tracking of these two core models.\nTo facilitate collecting statistics, we have added a ",(0,n.jsx)(t.code,{children:"post_hook"})," that instructs the database connector accordingly. Additionally, we have created an index on the ",(0,n.jsx)(t.code,{children:"order_id"})," column within the ",(0,n.jsx)(t.code,{children:"all_orders"})," table."]}),"\n",(0,n.jsx)(t.h2,{id:"running-transformations",children:"Running transformations"}),"\n",(0,n.jsx)(t.h3,{id:"create-dimensional-model-with-baseline-data",children:"Create dimensional model with baseline data"}),"\n",(0,n.jsx)(t.p,{children:"By executing dbt, we generate the dimensional model using the baseline data."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"dbt run\n"})}),"\n",(0,n.jsx)(t.p,{children:"This will create both our core and dimensional models using the baseline data."}),"\n",(0,n.jsx)(t.h3,{id:"test-the-data",children:"Test the data"}),"\n",(0,n.jsx)(t.p,{children:"We can run our defined test by executing:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"dbt test\n"})}),"\n",(0,n.jsx)(t.h3,{id:"running-sample-queries",children:"Running sample queries"}),"\n",(0,n.jsxs)(t.p,{children:["You can find sample business intelligence queries in the ",(0,n.jsx)(t.code,{children:"references/query"})," path of the project. These queries allow you to analyze the factual data based on dimensions such as customers, orders, and products."]}),"\n",(0,n.jsx)(t.h3,{id:"mocking-the-elt-process",children:"Mocking the ELT process"}),"\n",(0,n.jsxs)(t.p,{children:["The scripts for loading updates into the source data set can be found in the ",(0,n.jsx)(t.code,{children:"references/inserts/update_data.sql"})," path of the project."]}),"\n",(0,n.jsx)(t.p,{children:"After updating the data sources, you can proceed with the aforementioned steps: running dbt, testing the data, and executing sample queries. This will allow you to visualize the variations and incremental updates in the data."}),"\n",(0,n.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,n.jsx)(t.p,{children:"In this tutorial, we explored the utilization of advanced dbt concepts with Teradata Vantage.\nThe sample project showcased the transformation of source data into a dimensional data mart.\nThroughout the project, we implemented several advanced dbt concepts, including incremental materializations, utility macros, and Teradata modifiers."}),"\n",(0,n.jsx)(r.Ay,{})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},62032:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/advanceddbt1-30ae699175cec6251a7550a6004efbd6.svg"},19075:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/advanceddbt2-48777f66badf0b3e059ffb385f15ae7c.svg"},28453:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>d});var n=a(96540);const s={},i=n.createContext(s);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);