"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[2274],{41269:(e,n,t)=>{t.d(n,{Ay:()=>o,RM:()=>a});var i=t(74848),r=t(28453);const a=[];function s(e){const n={a:"a",admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["If you have any questions or need further assistance, please visit our ",(0,i.jsx)(n.a,{href:"https://support.teradata.com/community",children:"community forum"})," where you can get support and interact with other community members."]})})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},87463:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>o});var i=t(74848),r=t(28453),a=t(56240),s=t(19365);const o=[];function l(e){const n={code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(a.A,{children:[(0,i.jsxs)(s.A,{value:"Windows",label:"Windows",default:!0,children:[(0,i.jsx)(n.p,{children:"Run in Powershell:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"c:\\Users\\<username>\\.dbt\\profiles.yml\n"})})]}),(0,i.jsx)(s.A,{value:"MacOS",label:"MacOS",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"~/.dbt/profiles.yml\n"})})}),(0,i.jsx)(s.A,{value:"Linux",label:"Linux",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"~/.dbt/profiles.yml\n"})})})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},62680:(e,n,t)=>{t.d(n,{Ay:()=>o,RM:()=>a});var i=t(74848),r=t(28453);const a=[];function s(e){const n={a:"a",admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["If you need a test instance of Vantage, you can provision one for free at ",(0,i.jsx)(n.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})]})})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},60908:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>A,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var i=t(74848),r=t(28453),a=t(62680),s=(t(41269),t(87463));const o={sidebar_position:5.5,title:"Automate Data Movement and Transformation with Airflow, Airbyte, and dbt in Teradata Vantage",author:"Vidhan Bhonsle",email:"vidhan.bhonsle@teradata.com",page_last_update:"October 4th, 2024",description:"Using Airflow to Orchestrate Airbyte and dbt for Teradata",keywords:["data warehouses","airflow","teradata","vantage","orchestration","object storage","airbyte","enterprise analytics","elt","dbt."]},l="Automate Data Movement and Transformation with Airflow, Airbyte, and dbt in Teradata Vantage",c={id:"manage-data/airflow-airbyte-dbt",title:"Automate Data Movement and Transformation with Airflow, Airbyte, and dbt in Teradata Vantage",description:"Using Airflow to Orchestrate Airbyte and dbt for Teradata",source:"@site/quickstarts/manage-data/airflow-airbyte-dbt.md",sourceDirName:"manage-data",slug:"/manage-data/airflow-airbyte-dbt",permalink:"/pr-preview/pr-149/quickstarts/manage-data/airflow-airbyte-dbt",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5.5,frontMatter:{sidebar_position:5.5,title:"Automate Data Movement and Transformation with Airflow, Airbyte, and dbt in Teradata Vantage",author:"Vidhan Bhonsle",email:"vidhan.bhonsle@teradata.com",page_last_update:"October 4th, 2024",description:"Using Airflow to Orchestrate Airbyte and dbt for Teradata",keywords:["data warehouses","airflow","teradata","vantage","orchestration","object storage","airbyte","enterprise analytics","elt","dbt."]},sidebar:"tutorialSidebar",previous:{title:"Advanced dbt use cases with Teradata Vantage",permalink:"/pr-preview/pr-149/quickstarts/manage-data/advanced-dbt"},next:{title:"Build a FEAST feature store in Teradata Vantage",permalink:"/pr-preview/pr-149/quickstarts/manage-data/using-feast-feature-store-with-teradata-vantage"}},d={},h=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},...a.RM,{value:"Demo project setup",id:"demo-project-setup",level:2},{value:"Setting up Teradata instance",id:"setting-up-teradata-instance",level:2},{value:"Edit <code>profiles.yml</code> file",id:"edit-profilesyml-file",level:2},...s.RM,{value:"Airbyte setup",id:"airbyte-setup",level:2},{value:"dbt setup",id:"dbt-setup",level:2},{value:"Airflow setup",id:"airflow-setup",level:2},{value:"Orchestration with Airflow",id:"orchestration-with-airflow",level:2},{value:"Conclusion",id:"conclusion",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"automate-data-movement-and-transformation-with-airflow-airbyte-and-dbt-in-teradata-vantage",children:"Automate Data Movement and Transformation with Airflow, Airbyte, and dbt in Teradata Vantage"}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"This tutorial demonstrates how to leverage Apache Airflow as orchestration tool to automate the movement of data from a source to Teradata using Airbyte. Once the data is in Teradata, trigger dbt to perform transformations, ensuring the data is clean, reliable and ready for analysis."}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Access to a Teradata Vantage instance."}),"\n",(0,i.jsx)(a.Ay,{}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Python ",(0,i.jsx)(n.strong,{children:"3.10"})," or later installed."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://docs.docker.com/get-started/get-docker/",children:"Docker and Docker Compose (Docker Desktop)"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://docs.airbyte.com/using-airbyte/getting-started/oss-quickstart",children:"Airbyte command line tool"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"demo-project-setup",children:"Demo project setup"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Clone the tutorial repository and cd into the project directory:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/teradata/quickstarts.git\ncd quickstarts\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Navigate to the directory:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd airbyte_dbt_airflow_teradata\n"})}),"\n",(0,i.jsx)(n.p,{children:"Open the code in your preferred IDE."}),"\n",(0,i.jsx)(n.h2,{id:"setting-up-teradata-instance",children:"Setting up Teradata instance"}),"\n",(0,i.jsxs)(n.p,{children:["Follow the instructions from ",(0,i.jsx)(n.a,{href:"https://developers.teradata.com/quickstarts/get-access-to-vantage/clearscape-analytics-experience/getting-started-with-csae/",children:"Getting started with ClearScape Analytics Experience"})," and acquire following:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Host"}),"\n",(0,i.jsx)(n.li,{children:"username"}),"\n",(0,i.jsx)(n.li,{children:"password"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Jot it down, it will be needed in next step."}),"\n",(0,i.jsxs)(n.h2,{id:"edit-profilesyml-file",children:["Edit ",(0,i.jsx)(n.code,{children:"profiles.yml"})," file"]}),"\n",(0,i.jsxs)(n.p,{children:["Navigate to ",(0,i.jsx)(n.code,{children:"dbt_project"})," folder, open ",(0,i.jsx)(n.code,{children:"profiles.yml"})," file, it contains configuration for dbt to connect with your data platform. Update this file with your Teradata connection details:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Host (from previous step)"}),"\n",(0,i.jsx)(n.li,{children:"username (from previous step)"}),"\n",(0,i.jsx)(n.li,{children:"password (from previous step)"}),"\n",(0,i.jsxs)(n.li,{children:["schema: ",(0,i.jsx)(n.code,{children:"airbyte_td"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"And move the file in location shown below:"}),"\n",(0,i.jsx)(s.Ay,{}),"\n",(0,i.jsx)(n.h2,{id:"airbyte-setup",children:"Airbyte setup"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["After you install Airbyte OSS locally using ",(0,i.jsx)(n.code,{children:"abctl"}),":"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"abctl local install\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Generate and copy the credentials:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"abctl local credentials\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can learn more about it from ",(0,i.jsx)(n.a,{href:"https://docs.airbyte.com/using-airbyte/getting-started/oss-quickstart",children:"here"})]}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create a source"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Go to the Sources tab and click on ",(0,i.jsx)(n.code,{children:"+ New source"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Search for \u201cfaker\u201d using the search bar and select ",(0,i.jsx)(n.code,{children:"Sample Data (Faker)"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Adjust the Count and optional fields as needed for your use case. You can also leave as is."}),"\n",(0,i.jsxs)(n.li,{children:["Click on ",(0,i.jsx)(n.code,{children:"Set up source"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create a destination"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Go to the Destinations tab and click on ",(0,i.jsx)(n.code,{children:"+ New destination"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Search for \u201cteradata\u201d using the search bar and select ",(0,i.jsx)(n.code,{children:"Teradata Vantage"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Enter the connection details as needed."}),"\n",(0,i.jsxs)(n.li,{children:["Click on ",(0,i.jsx)(n.code,{children:"Set up destination"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create a connection"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Go to the Connections tab and click on ",(0,i.jsx)(n.code,{children:"+ New connection"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Select the source and destination you just created."}),"\n",(0,i.jsx)(n.li,{children:"Enter the connection details as needed."}),"\n",(0,i.jsxs)(n.li,{children:["Click on ",(0,i.jsx)(n.code,{children:"Set up connection"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Airbyte Connection",src:t(18423).A+"",width:"3813",height:"1310"})}),"\n",(0,i.jsxs)(n.p,{children:["6.Airbyte ",(0,i.jsx)(n.code,{children:"connection id"})]}),"\n",(0,i.jsxs)(n.p,{children:["On the connection page,  from the URL, copy the value between ",(0,i.jsx)(n.code,{children:"connections"})," and ",(0,i.jsx)(n.code,{children:"status"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Airbyte Connection id",src:t(76527).A+"",width:"2072",height:"69"})}),"\n",(0,i.jsx)(n.p,{children:"This will be needed later in the Airflow setup."}),"\n",(0,i.jsx)(n.h2,{id:"dbt-setup",children:"dbt setup"}),"\n",(0,i.jsxs)(n.p,{children:["The dbt project is already present in the ",(0,i.jsx)(n.code,{children:"dbt_project"})," folder."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Navigate to the folder."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd dbt_project\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Create a Python virtual environment"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"python -m venv env\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Activate the environment"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"source env/bin/activate\n"})}),"\n",(0,i.jsx)(n.p,{children:"for Mac, Linux, or"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"env\\Scripts\\activate\n"})}),"\n",(0,i.jsx)(n.p,{children:"for Windows"}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:["Install ",(0,i.jsx)(n.code,{children:"dbt-teradata"})," and ",(0,i.jsx)(n.code,{children:"dbt-core"})," modules"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip install dbt-teradata\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip install dbt-core>=1.8.0\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsx)(n.li,{children:"Test the connection"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"dbt debug\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If the output of above command is ",(0,i.jsx)(n.code,{children:"All checks passed!"})," then we are good to move forward, else, check the values entered in ",(0,i.jsx)(n.code,{children:"profiles.yml"})," and also make sure all the modules are installed correctly."]}),"\n",(0,i.jsx)(n.h2,{id:"airflow-setup",children:"Airflow setup"}),"\n",(0,i.jsx)(n.p,{children:"Airflow is at the center of the whole tutorial. It is responsible for making Airbyte move data to Teradata and triggering dbt to transform the data."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Navigate to ",(0,i.jsx)(n.code,{children:"orchestration"})," directory"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd ..\ncd orchestration\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The directory contains environment file, if it is named as ",(0,i.jsx)(n.code,{children:".env.example"}),", then change it to ",(0,i.jsx)(n.code,{children:".env"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Make sure that your docker is running, it is imperative for next steps."}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Build custom Airflow image"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker compose build\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Launch Airflow container"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker compose up\n"})}),"\n",(0,i.jsx)(n.p,{children:"This might take a few minutes initially as it sets up necessary databases and metadata."}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Airflow UI"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Open Airflow UI by pasting ",(0,i.jsx)(n.code,{children:"http://localhost:8080"})," to browser of your choice."]}),"\n",(0,i.jsxs)(n.li,{children:["Default username and password is ",(0,i.jsx)(n.code,{children:"airflow"})," (unless you changed it in ",(0,i.jsx)(n.code,{children:".env"})," file)"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Airflow connection with Airbyte"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Setting up connection in Airflow is necessary for using Airbyte and dbt both."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'Go to the "Admin" > "Connections" tab'}),"\n",(0,i.jsx)(n.li,{children:"Click on the + button to create a new connection"}),"\n",(0,i.jsxs)(n.li,{children:["Edit the page with following values","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Connection id"}),":airbyte_connection"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Connection Type"}),":Airbyte"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Host"}),":host",".docker.internal"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Port"}),":8000"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Login"}),":Your"," Airbyte username"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Password"}),":Your"," airbyte password (you can get it by running ",(0,i.jsx)(n.code,{children:"abctl local credentials"})," command in terminal)"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Click on the ",(0,i.jsx)(n.code,{children:"Test"})," button, and make sure you get a ",(0,i.jsx)(n.code,{children:"Connection successfully tested"})," message at the top. Then, you can ",(0,i.jsx)(n.code,{children:"Save"})," the connection."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Airflow Connection",src:t(92235).A+"",width:"3756",height:"2052"})}),"\n",(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsx)(n.li,{children:"Link Airbyte connection to the Airflow DAG"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["To execute the DAG in Airflow to trigger Airbyte, ",(0,i.jsx)(n.code,{children:"connection_id"})," needs to be edited in ",(0,i.jsx)(n.code,{children:"elt_dag.py"})," file"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["On the connection page,  from the URL, copy the value between ",(0,i.jsx)(n.code,{children:"connections"})," and ",(0,i.jsx)(n.code,{children:"status"}),". This will be ",(0,i.jsx)(n.code,{children:"connection_id"}),"'s value"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Airbyte Connection id",src:t(76527).A+"",width:"2072",height:"69"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Open ",(0,i.jsx)(n.code,{children:"elt_dag.py"})," file inside the ",(0,i.jsx)(n.code,{children:"airflow/dags"})," directory and add your Airbyte connection id on ",(0,i.jsx)(n.code,{children:"line 28"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"orchestration-with-airflow",children:"Orchestration with Airflow"}),"\n",(0,i.jsx)(n.p,{children:"After making sure all the steps till now is working fine, it is time to run your data pipeline."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["In Airflow UI, go to ",(0,i.jsx)(n.code,{children:"DAGs"})," section, locate ",(0,i.jsx)(n.code,{children:"elt_dag"}),' and click on "Trigger DAG" under the "Action" column.']}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"DAGs",src:t(68373).A+"",width:"3792",height:"1086"})}),"\n",(0,i.jsxs)(n.p,{children:["This will initiate the complete data pipeline, starting with the Airbyte sync from Faker to Teradata, followed by dbt transforming the raw data into ",(0,i.jsx)(n.code,{children:"staging"})," and ",(0,i.jsx)(n.code,{children:"marts"})," models."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"DAGs two",src:t(16552).A+"",width:"513",height:"154"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Confirm the sync status in the Airbyte UI."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["After dbt jobs completion, check the Teradata to see the newly created views in the ",(0,i.jsx)(n.code,{children:"transformed_data"})," dataset. This can be done by using Teradata Studio or other database client UI tools."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(n.p,{children:"After completing all the above steps, you should have a working stack of Airbyte, dbt and Airflow with Teradata. It can be used as starting point for your projects and can be adapted as per your scenario."})]})}function A(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var i=t(34164);const r={tabItem:"tabItem_Ymn6"};var a=t(74848);function s(e){var n=e.children,t=e.hidden,s=e.className;return(0,a.jsx)("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,s),hidden:t,children:n})}},56240:(e,n,t)=>{t.d(n,{A:()=>E});var i=t(96540),r=t(34164),a=t(23104),s=t(56347),o=t(205),l=t(57485);var c=t(89466);function d(e){var n,t;return null!=(n=null==(t=i.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,i.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){var n=e.values,t=e.children;return(0,i.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n,t,i=(void 0===(t=function(e,n){return e.value===n.value})&&(t=function(e,n){return e===n}),(n=e).filter((function(e,i){return n.findIndex((function(n){return t(n,e)}))!==i})));if(i.length>0)throw new Error('Docusaurus error: Duplicate values "'+i.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function u(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function A(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,a=(0,s.W6)(),o=function(e){var n=e.queryString,t=void 0!==n&&n,i=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=i?i:null}({queryString:t,groupId:r});return[(0,l.aZ)(o),(0,i.useCallback)((function(e){if(o){var n=new URLSearchParams(a.location.search);n.set(o,e),a.replace(Object.assign({},a.location,{search:n.toString()}))}}),[o,a])]}function p(e){var n,t,r,a,s=e.defaultValue,l=e.queryString,d=void 0!==l&&l,p=e.groupId,j=h(e),g=(0,i.useState)((function(){return function(e){var n,t=e.defaultValue,i=e.tabValues;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:i}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+i.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(n=i.find((function(e){return e.default})))?n:i[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:s,tabValues:j})})),x=g[0],f=g[1],b=A({queryString:d,groupId:p}),m=b[0],E=b[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:p}.groupId),t=(0,c.Dv)(n),r=t[0],a=t[1],[r,(0,i.useCallback)((function(e){n&&a.set(e)}),[n,a])]),v=w[0],I=w[1],y=function(){var e=null!=m?m:v;return u({value:e,tabValues:j})?e:null}();return(0,o.A)((function(){y&&f(y)}),[y]),{selectedValue:x,selectValue:(0,i.useCallback)((function(e){if(!u({value:e,tabValues:j}))throw new Error("Can't select invalid tab value="+e);f(e),E(e),I(e)}),[E,I,j]),tabValues:j}}var j=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function f(e){var n=e.className,t=e.block,i=e.selectedValue,s=e.selectValue,o=e.tabValues,l=[],c=(0,a.a_)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=l.indexOf(n),r=o[t].value;r!==i&&(c(n),s(r))},h=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var i,r=l.indexOf(e.currentTarget)+1;t=null!=(i=l[r])?i:l[0];break;case"ArrowLeft":var a,s=l.indexOf(e.currentTarget)-1;t=null!=(a=l[s])?a:l[l.length-1]}null==(n=t)||n.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:o.map((function(e){var n=e.value,t=e.label,a=e.attributes;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:function(e){return l.push(e)},onKeyDown:h,onClick:d},a,{className:(0,r.A)("tabs__item",g.tabItem,null==a?void 0:a.className,{"tabs__item--active":i===n}),children:null!=t?t:n}),n)}))})}function b(e){var n=e.lazy,t=e.children,r=e.selectedValue,a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var s=a.find((function(e){return e.props.value===r}));return s?(0,i.cloneElement)(s,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map((function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==r})}))})}function m(e){var n=p(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,x.jsx)(f,Object.assign({},e,n)),(0,x.jsx)(b,Object.assign({},e,n))]})}function E(e){var n=(0,j.A)();return(0,x.jsx)(m,Object.assign({},e,{children:d(e.children)}),String(n))}},92235:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/airbyte_airflow-bf1456f57f7e7c106707d42470e41142.png"},18423:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/airbyte_connection-debde4f128fc58dbaf0d9d84be442467.png"},76527:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/airbyte_connection_id-40dbb28bd09c1e738c6e23d1a47523f4.png"},68373:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/dags-a63d5a4d899b694619315ffe5cc47fc8.png"},16552:(e,n,t)=>{t.d(n,{A:()=>i});const i="data:image/png;base64,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"},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var i=t(96540);const r={},a=i.createContext(r);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);