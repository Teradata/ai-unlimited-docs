"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[9022],{83982:(e,a,n)=>{n.d(a,{Ay:()=>i,RM:()=>o});var t=n(74848),r=n(28453);const o=[];function s(e){const a={a:"a",admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,t.jsx)(a.admonition,{type:"tip",children:(0,t.jsxs)(a.p,{children:["To request a VantageCloud Lake environment, refer to the form provided in this ",(0,t.jsx)(a.a,{href:"https://www.teradata.com/about-us/contact",children:"link"}),". If you already have a VantageCloud Lake environment and seek guidance on configuration, please consult this ",(0,t.jsx)(a.a,{href:"/pr-preview/pr-145/quickstarts/vantagecloud-lake/getting-started-with-vantagecloud-lake",children:"guide"}),"."]})})}function i(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},1520:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>u,contentTitle:()=>d,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var t=n(74848),r=n(28453),o=n(83982),s=n(56240),i=n(19365);const l={sidebar_position:7,author:"Satish Chinthanippu",email:"satish.chinthanippu@teradata.com",page_last_update:"July 11th, 2024",description:"Manage VantageCloud Lake compute clusters with Apache Airflow",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","business intelligence","enterprise analytics","airflow","workflow","teradatasql","ipython-sql","cloud computing","machine learning","vantagecloud","vantagecloud lake","lake"]},d="Manage VantageCloud Lake Compute Clusters with Apache Airflow",c={id:"vantagecloud-lake/vantagecloud-lake-compute-cluster-airflow",title:"Manage VantageCloud Lake Compute Clusters with Apache Airflow",description:"Manage VantageCloud Lake compute clusters with Apache Airflow",source:"@site/quickstarts/vantagecloud-lake/vantagecloud-lake-compute-cluster-airflow.md",sourceDirName:"vantagecloud-lake",slug:"/vantagecloud-lake/vantagecloud-lake-compute-cluster-airflow",permalink:"/pr-preview/pr-145/quickstarts/vantagecloud-lake/vantagecloud-lake-compute-cluster-airflow",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,author:"Satish Chinthanippu",email:"satish.chinthanippu@teradata.com",page_last_update:"July 11th, 2024",description:"Manage VantageCloud Lake compute clusters with Apache Airflow",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","business intelligence","enterprise analytics","airflow","workflow","teradatasql","ipython-sql","cloud computing","machine learning","vantagecloud","vantagecloud lake","lake"]},sidebar:"tutorialSidebar",previous:{title:"Run Teradata Jupyter Notebook Demos for VantageCloud Lake in Microsoft Azure",permalink:"/pr-preview/pr-145/quickstarts/vantagecloud-lake/vantagecloud-lake-demo-jupyter-azure"}},u={},h=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},...o.RM,{value:"Install Apache Airflow and Astronomer Cosmos",id:"install-apache-airflow-and-astronomer-cosmos",level:2},{value:"Install dbt",id:"install-dbt",level:2},{value:"Create a database",id:"create-a-database",level:2},{value:"Create a database user",id:"create-a-database-user",level:2},{value:"Grant access to user",id:"grant-access-to-user",level:2},{value:"Setup dbt project",id:"setup-dbt-project",level:2},{value:"Configure Apache Airflow",id:"configure-apache-airflow",level:2},{value:"Start Apache Airflow web server",id:"start-apache-airflow-web-server",level:2},{value:"Define a connection to VantageCloud Lake in Apache Airflow",id:"define-a-connection-to-vantagecloud-lake-in-apache-airflow",level:2},{value:"Define DAG in Apache Airflow",id:"define-dag-in-apache-airflow",level:2},{value:"Load DAG",id:"load-dag",level:2},{value:"Run DAG",id:"run-dag",level:2},{value:"Summary",id:"summary",level:2},{value:"Further reading",id:"further-reading",level:2}];function p(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"manage-vantagecloud-lake-compute-clusters-with-apache-airflow",children:"Manage VantageCloud Lake Compute Clusters with Apache Airflow"}),"\n",(0,t.jsx)(a.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(a.p,{children:["This tutorial demonstrates the process of utilizing the ",(0,t.jsx)(a.a,{href:"https://airflow.apache.org/docs/apache-airflow-providers-teradata/stable/operators/index.html",children:"Teradata Airflow Compute Cluster Operators"})," to manage VantageCloud Lake compute clusters. The objective is to execute dbt transformations defined on ",(0,t.jsx)(a.a,{href:"https://github.com/Teradata/jaffle_shop-dev.git",children:"jaffle_shop"})," dbt project through VantageCloud Lake compute clusters."]}),"\n",(0,t.jsx)(a.admonition,{type:"note",children:(0,t.jsxs)(a.p,{children:["Use ",(0,t.jsx)(a.a,{href:"https://learn.microsoft.com/en-us/windows/wsl/install",children:"The Windows Subsystem for Linux (WSL)"})," on ",(0,t.jsx)(a.code,{children:"Windows"})," to try this quickstart example."]})}),"\n",(0,t.jsx)(a.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["Ensure you have the necessary credentials and access rights to use Teradata VantageCloud Lake.","\n",(0,t.jsx)(o.Ay,{}),"\n"]}),"\n",(0,t.jsx)(a.li,{children:"Python 3.8, 3.9, 3.10 or 3.11 and python3-env, python3-pip installed."}),"\n"]}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsxs)(i.A,{value:"Linux",label:"Linux",default:!0,children:[(0,t.jsx)(a.p,{children:"Run in Powershell:"}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"sudo apt install -y python3-venv python3-pip\n"})})]}),(0,t.jsx)(i.A,{value:"WSL",label:"WSL",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"sudo apt install -y python3-venv python3-pip\n"})})}),(0,t.jsxs)(i.A,{value:"macOS",label:"macOS",children:[(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"brew install python\n"})}),(0,t.jsxs)(a.p,{children:["Refer ",(0,t.jsx)(a.a,{href:"https://docs.python-guide.org/starting/install3/osx/",children:"Installation Guide"})," if you face any issues."]})]})]}),"\n",(0,t.jsx)(a.h2,{id:"install-apache-airflow-and-astronomer-cosmos",children:"Install Apache Airflow and Astronomer Cosmos"}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Create a new python environment to manage airflow and its dependencies. Activate the environment:"}),"\n",(0,t.jsx)(a.admonition,{type:"note",children:(0,t.jsx)(a.p,{children:"This will install Apache Airflow as well."})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:'python3 -m venv airflow_env\nsource airflow_env/bin/activate\npip install "astronomer-cosmos"\n'})}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Install the Apache Airflow Teradata provider"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:'pip install "apache-airflow-providers-teradata"\n'})}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Set the AIRFLOW_HOME environment variable."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"export AIRFLOW_HOME=~/airflow\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"install-dbt",children:"Install dbt"}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Create a new python environment to manage dbt and its dependencies. Activate the environment:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"python3 -m venv dbt_env\nsource dbt_env/bin/activate\n"})}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["Install ",(0,t.jsx)(a.code,{children:"dbt-teradata"})," and ",(0,t.jsx)(a.code,{children:"dbt-core"})," modules:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"pip install dbt-teradata dbt-core\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"create-a-database",children:"Create a database"}),"\n",(0,t.jsx)(a.admonition,{type:"note",children:(0,t.jsxs)(a.p,{children:["A database client connected to VantageCloud Lake is needed to execute SQL statements. ",(0,t.jsx)(a.a,{href:"https://downloads.teradata.com/download/tools/vantage-editor-desktop",children:"Vantage Editor Desktop"}),", or ",(0,t.jsx)(a.a,{href:"https://quickstarts.teradata.com/other-integrations/configure-a-teradata-vantage-connection-in-dbeaver.html",children:"dbeaver"})," can be used for this purpose."]})}),"\n",(0,t.jsxs)(a.p,{children:["Let's create the ",(0,t.jsx)(a.code,{children:"jaffle_shop"})," database in the VantageCloud Lake instance with TD_OFSSTORAGE as default."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"CREATE DATABASE jaffle_shop\nAS DEFAULT STORAGE = TD_OFSSTORAGE OVERRIDE ON ERROR,\nPERMANENT = 120e6, -- 120MB\n    SPOOL = 120e6; -- 120MB\n"})}),"\n",(0,t.jsx)(a.h2,{id:"create-a-database-user",children:"Create a database user"}),"\n",(0,t.jsx)(a.admonition,{type:"note",children:(0,t.jsxs)(a.p,{children:["A database client connected to VantageCloud Lake is needed to execute SQL statements. ",(0,t.jsx)(a.a,{href:"https://downloads.teradata.com/download/tools/vantage-editor-desktop",children:"Vantage Editor Desktop"}),", or ",(0,t.jsx)(a.a,{href:"https://quickstarts.teradata.com/other-integrations/configure-a-teradata-vantage-connection-in-dbeaver.html",children:"dbeaver"})," can be used to execute ",(0,t.jsx)(a.code,{children:"CREATE USER"})," query."]})}),"\n",(0,t.jsxs)(a.p,{children:["Let's create a ",(0,t.jsx)(a.code,{children:"lake_user"})," user in the VantageCloud Lake instance."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"CREATE USER lake_user\nAS PERMANENT = 1000000,\nPASSWORD = lake_user,\nSPOOL = 1200000,\nDEFAULT DATABASE = jaffle_shop;\n"})}),"\n",(0,t.jsx)(a.h2,{id:"grant-access-to-user",children:"Grant access to user"}),"\n",(0,t.jsx)(a.admonition,{type:"note",children:(0,t.jsxs)(a.p,{children:["A database client connected to VantageCloud Lake is needed to execute SQL statements. ",(0,t.jsx)(a.a,{href:"https://downloads.teradata.com/download/tools/vantage-editor-desktop",children:"Vantage Editor Desktop"}),", or ",(0,t.jsx)(a.a,{href:"https://quickstarts.teradata.com/other-integrations/configure-a-teradata-vantage-connection-in-dbeaver.html",children:"dbeaver"})," can be used to execute ",(0,t.jsx)(a.code,{children:"GRANT ACCESS"})," queries."]})}),"\n",(0,t.jsxs)(a.p,{children:["Let's provide the required privileges to the user ",(0,t.jsx)(a.code,{children:"lake_user"})," to manage compute clusters."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"GRANT CREATE COMPUTE GROUP To lake_user;\nGRANT DROP COMPUTE GROUP TO lake_user;\nGRANT CREATE COMPUTE PROFILE To lake_user;\nGRANT DROP COMPUTE PROFILE TO lake_user;\nGRANT SELECT ON DBC TO lake_user;\nGRANT ALL ON jaffle_shop TO lake_user;\n"})}),"\n",(0,t.jsx)(a.h2,{id:"setup-dbt-project",children:"Setup dbt project"}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsxs)(a.li,{children:["Clone the jaffle_shop repository and cd into the project directory:","\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"git clone https://github.com/Teradata/jaffle_shop-dev.git jaffle_shop\n"})}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["Make a new folder, dbt, inside $AIRFLOW_HOME/dags folder. Then, copy/paste jaffle_shop dbt project into $AIRFLOW_HOME/dags/dbt directory","\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"mkdir -p $AIRFLOW_HOME/dags/dbt/\ncp -r jaffle_shop $AIRFLOW_HOME/dags/dbt/\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"configure-apache-airflow",children:"Configure Apache Airflow"}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["Switch to virtual environment where Apache Airflow was installed at ",(0,t.jsx)(a.a,{href:"#install-apache-airflow-and-astronomer-cosmos",children:"Install Apache Airflow and Astronomer Cosmos"})]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"source airflow_env/bin/activate\n"})}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Configure the listed environment variables to activate the test connection button, preventing the loading of sample DAGs and default connections in Airflow UI."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"export AIRFLOW__CORE__TEST_CONNECTION=Enabled\nexport AIRFLOW__CORE__LOAD_EXAMPLES=false\nexport AIRFLOW__CORE__LOAD_DEFAULT_CONNECTIONS=false\n"})}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["Define the path of jaffle_shop project as an environment variable ",(0,t.jsx)(a.code,{children:"dbt_project_home_dir"}),"."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"export dbt_project_home_dir=$AIRFLOW_HOME/dags/dbt/jaffle_shop\n"})}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["Define the path to the virtual environment where dbt-teradata was installed as an environment variable ",(0,t.jsx)(a.code,{children:"dbt_venv_dir"}),"."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"export dbt_venv_dir=/../../dbt_env/bin/dbt\n"})}),"\n",(0,t.jsx)(a.admonition,{type:"note",children:(0,t.jsxs)(a.p,{children:["You might need to change ",(0,t.jsx)(a.code,{children:"/../../"})," to the specific path where the ",(0,t.jsx)(a.code,{children:"dbt_env"})," virtual environment is located."]})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"start-apache-airflow-web-server",children:"Start Apache Airflow web server"}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsxs)(a.li,{children:["Run airflow web server","\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:"airflow standalone\n"})}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["Access the airflow UI. Visit ",(0,t.jsx)(a.a,{href:"https://localhost:8080",children:"https://localhost:8080"})," in the browser and log in with the admin account details shown in the terminal.\n",(0,t.jsx)(a.img,{alt:"Airflow Password",src:n(54304).A+"",width:"1991",height:"374"})]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"define-a-connection-to-vantagecloud-lake-in-apache-airflow",children:"Define a connection to VantageCloud Lake in Apache Airflow"}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsx)(a.li,{children:"Click on Admin - Connections"}),"\n",(0,t.jsx)(a.li,{children:"Click on + to define new connection to Teradata VantageCloud Lake instance."}),"\n",(0,t.jsxs)(a.li,{children:["Define new connection with id ",(0,t.jsx)(a.code,{children:"teradata_lake"})," with Teradata VantageCloud Lake instance details.","\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Connection Id: teradata_lake"}),"\n",(0,t.jsx)(a.li,{children:"Connection Type: Teradata"}),"\n",(0,t.jsx)(a.li,{children:"Database Server URL (required): Teradata VantageCloud Lake instance hostname  or IP to connect to."}),"\n",(0,t.jsx)(a.li,{children:"Database: jaffle_shop"}),"\n",(0,t.jsx)(a.li,{children:"Login (required): lake_user"}),"\n",(0,t.jsx)(a.li,{children:"Password (required): lake_user"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"define-dag-in-apache-airflow",children:"Define DAG in Apache Airflow"}),"\n",(0,t.jsxs)(a.p,{children:["Dags in airflow are defined as python files. The dag below runs the dbt transformations defined in the ",(0,t.jsx)(a.code,{children:"jaffle_shop"})," dbt project using VantageCloud Lake compute clusters. Copy the python code below and save it as ",(0,t.jsx)(a.code,{children:"airflow-vcl-compute-clusters-manage.py"})," under the directory $AIRFLOW_HOME/files/dags."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'from datetime import datetime\nfrom airflow import DAG\nfrom airflow.providers.teradata.operators.teradata_compute_cluster import (\n        TeradataComputeClusterDecommissionOperator,\n        TeradataComputeClusterProvisionOperator,\n        TeradataComputeClusterResumeOperator,\n        TeradataComputeClusterSuspendOperator,\n    )\nfrom airflow.providers.teradata.operators.teradata import TeradataOperator\nfrom cosmos import DbtTaskGroup, ProjectConfig, ProfileConfig, ExecutionConfig\nfrom cosmos.profiles import TeradataUserPasswordProfileMapping\n\nimport os\n\nPATH_TO_DBT_VENV = f"{os.environ[\'dbt_venv_dir\']}"\nPATH_TO_DBT_PROJECT = f"{os.environ[\'dbt_project_home_dir\']}"\n\nexecution_config = ExecutionConfig(\n    dbt_executable_path=PATH_TO_DBT_VENV,\n)\nprofile_config = ProfileConfig(\n    profile_name="generated_profile",\n    target_name="dev",\n    profile_mapping=TeradataUserPasswordProfileMapping(\n        conn_id="teradata_lake",\n    ),\n)\nwith DAG(\n    dag_id="explore_airflow_compute_cluster_operator",\n    max_active_runs=1,\n    max_active_tasks=10,\n    catchup=False,\n    start_date=datetime(2024, 1, 1),\n    default_args={"teradata_conn_id": "teradata_lake"},\n\n) as dag:\n    # provision compute cluster with given configuration\n    compute_cluster_provision_operation = TeradataComputeClusterProvisionOperator(\n        task_id="compute_cluster_provision_operation",\n        compute_profile_name="dbt_transformation_profile",\n        compute_group_name="dbt_transformation_group",\n        timeout=20,\n        query_strategy="STANDARD",\n        compute_map="TD_COMPUTE_XSMALL",\n        compute_attribute="MIN_COMPUTE_COUNT(1) MAX_COMPUTE_COUNT(5) INITIALLY_SUSPENDED(\'FALSE\')",\n    )\n    # assign dbt_transformation_group as default group to lake_user\n    assign_compute_group_user = TeradataOperator(\n        task_id="assign_compute_group_user",\n        sql=r"""\n        MODIFY USER lake_user\n        AS COMPUTE GROUP = dbt_transformation_group;\n        """,\n    )\n\n    # run dbt transformation defined in dbt jaffle_shop project\n    transform_data = DbtTaskGroup(\n          group_id="transform_data",\n          project_config=ProjectConfig(PATH_TO_DBT_PROJECT),\n          profile_config=profile_config,\n          execution_config=execution_config,\n          default_args={"retries": 2},\n      )\n    # decommission compute cluster\n    compute_cluster_decommission_operation = TeradataComputeClusterDecommissionOperator(\n        task_id="compute_cluster_decommission_operation",\n        compute_profile_name="dbt_transformation_profile",\n        compute_group_name="dbt_transformation_group",\n        delete_compute_group=True,\n    )\n    # remove compute group for user\n    remove_compute_group_from_user = TeradataOperator(\n        task_id="remove_compute_group_from_user",\n        sql=r"""\n        MODIFY USER lake_user\n        AS COMPUTE GROUP = NULL\n        """,\n    )\n\n    (\n        compute_cluster_provision_operation\n        >> assign_compute_group_user\n        >> transform_data\n        >> compute_cluster_decommission_operation\n        >> remove_compute_group_from_user\n    )\n'})}),"\n",(0,t.jsx)(a.h2,{id:"load-dag",children:"Load DAG"}),"\n",(0,t.jsx)(a.p,{children:"When the dag file is copied to $AIRFLOW_HOME/dags, Apache Airflow displays the dag in UI under DAGs section. It will take 2 to 3 minutes to load DAG in Apache Airflow UI."}),"\n",(0,t.jsx)(a.h2,{id:"run-dag",children:"Run DAG"}),"\n",(0,t.jsxs)(a.p,{children:["Run the dag as shown in the image below.\n",(0,t.jsx)(a.img,{alt:"Run dag",src:n(74071).A+"",width:"3735",height:"240"})]}),"\n",(0,t.jsx)(a.h2,{id:"summary",children:"Summary"}),"\n",(0,t.jsx)(a.p,{children:"In this quick start guide, we explored how to utilize Teradata VantageCloud Lake compute clusters to execute dbt transformations using Teradata compute cluster operators for Airflow."}),"\n",(0,t.jsx)(a.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://airflow.apache.org/docs/apache-airflow/stable/core-concepts/dags.html",children:"Apache Airflow DAGs reference"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://docs.teradata.com/r/Teradata-VantageCloud-Lake/Managing-Compute-Resources/Compute-Clusters",children:"Teradata VantageCloud Lake Compute Clusters"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://airflow.apache.org/docs/apache-airflow-providers-teradata/stable/operators/index.html",children:"Airflow Teradata Compute Cluster Operators"})}),"\n"]})]})}function f(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},19365:(e,a,n)=>{n.d(a,{A:()=>s});n(96540);var t=n(34164);const r={tabItem:"tabItem_Ymn6"};var o=n(74848);function s(e){var a=e.children,n=e.hidden,s=e.className;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,s),hidden:n,children:a})}},56240:(e,a,n)=>{n.d(a,{A:()=>b});var t=n(96540),r=n(34164),o=n(23104),s=n(56347),i=n(205),l=n(57485);var d=n(89466);function c(e){var a,n;return null!=(a=null==(n=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((a=e.props)&&"object"==typeof a&&"value"in a))return e;var a;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?a:[]}function u(e){var a=e.values,n=e.children;return(0,t.useMemo)((function(){var e=null!=a?a:function(e){return c(e).map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes,default:a.default}}))}(n);return function(e){var a,n,t=(void 0===(n=function(e,a){return e.value===a.value})&&(n=function(e,a){return e===a}),(a=e).filter((function(e,t){return a.findIndex((function(a){return n(a,e)}))!==t})));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[a,n])}function h(e){var a=e.value;return e.tabValues.some((function(e){return e.value===a}))}function p(e){var a=e.queryString,n=void 0!==a&&a,r=e.groupId,o=(0,s.W6)(),i=function(e){var a=e.queryString,n=void 0!==a&&a,t=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:r});return[(0,l.aZ)(i),(0,t.useCallback)((function(e){if(i){var a=new URLSearchParams(o.location.search);a.set(i,e),o.replace(Object.assign({},o.location,{search:a.toString()}))}}),[i,o])]}function f(e){var a,n,r,o,s=e.defaultValue,l=e.queryString,c=void 0!==l&&l,f=e.groupId,m=u(e),g=(0,t.useState)((function(){return function(e){var a,n=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(a=t.find((function(e){return e.default})))?a:t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:s,tabValues:m})})),v=g[0],_=g[1],j=p({queryString:c,groupId:f}),x=j[0],b=j[1],w=(a=function(e){return e?"docusaurus.tab."+e:null}({groupId:f}.groupId),n=(0,d.Dv)(a),r=n[0],o=n[1],[r,(0,t.useCallback)((function(e){a&&o.set(e)}),[a,o])]),A=w[0],C=w[1],k=function(){var e=null!=x?x:A;return h({value:e,tabValues:m})?e:null}();return(0,i.A)((function(){k&&_(k)}),[k]),{selectedValue:v,selectValue:(0,t.useCallback)((function(e){if(!h({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);_(e),b(e),C(e)}),[b,C,m]),tabValues:m}}var m=n(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function _(e){var a=e.className,n=e.block,t=e.selectedValue,s=e.selectValue,i=e.tabValues,l=[],d=(0,o.a_)().blockElementScrollPositionUntilNextRender,c=function(e){var a=e.currentTarget,n=l.indexOf(a),r=i[n].value;r!==t&&(d(a),s(r))},u=function(e){var a,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var t,r=l.indexOf(e.currentTarget)+1;n=null!=(t=l[r])?t:l[0];break;case"ArrowLeft":var o,s=l.indexOf(e.currentTarget)-1;n=null!=(o=l[s])?o:l[l.length-1]}null==(a=n)||a.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},a),children:i.map((function(e){var a=e.value,n=e.label,o=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:t===a?0:-1,"aria-selected":t===a,ref:function(e){return l.push(e)},onKeyDown:u,onClick:c},o,{className:(0,r.A)("tabs__item",g.tabItem,null==o?void 0:o.className,{"tabs__item--active":t===a}),children:null!=n?n:a}),a)}))})}function j(e){var a=e.lazy,n=e.children,r=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){var s=o.find((function(e){return e.props.value===r}));return s?(0,t.cloneElement)(s,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map((function(e,a){return(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==r})}))})}function x(e){var a=f(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,v.jsx)(_,Object.assign({},e,a)),(0,v.jsx)(j,Object.assign({},e,a))]})}function b(e){var a=(0,m.A)();return(0,v.jsx)(x,Object.assign({},e,{children:c(e.children)}),String(a))}},54304:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/airflow-console-password-70247c69162a1bb111b16a1fc4f6e0e4.png"},74071:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/airflow-dag-run-6753daf1642738a41c09e35c1fb4d8ee.png"},28453:(e,a,n)=>{n.d(a,{R:()=>s,x:()=>i});var t=n(96540);const r={},o=t.createContext(r);function s(e){const a=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:a},e.children)}}}]);