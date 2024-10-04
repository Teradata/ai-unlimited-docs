"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[5849],{62680:(e,n,t)=>{t.d(n,{Ay:()=>r,RM:()=>i});var o=t(74848),a=t(28453);const i=[];function s(e){const n={a:"a",admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["If you need a test instance of Vantage, you can provision one for free at ",(0,o.jsx)(n.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})]})})}function r(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}},48939:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var o=t(74848),a=t(28453),i=t(62680);const s={sidebar_position:8,author:"Tayyaba Batool",email:"tayyaba.batool@teradata.com",page_last_update:"Mar 19th, 2024",description:"Tutorial for Model Factory Solution - Executing Airflow workflows with ClearScape Analytics ModelOps",keywords:["modelfactory","modelops","byom","python","clearscape analytics","teradata","data warehouses","teradata","vantage","cloud data platform","machine learning","artificial intelligence","business intelligence","enterprise analytics"]},r="Execute Airflow workflows with ModelOps - Model Factory Solution Accelerator",l={id:"analyze-data/execute-airflow-workflows-with-clearscape-analytics-modelops-model-factory-solution",title:"Execute Airflow workflows with ModelOps - Model Factory Solution Accelerator",description:"Tutorial for Model Factory Solution - Executing Airflow workflows with ClearScape Analytics ModelOps",source:"@site/quickstarts/analyze-data/execute-airflow-workflows-with-clearscape-analytics-modelops-model-factory-solution.md",sourceDirName:"analyze-data",slug:"/analyze-data/execute-airflow-workflows-with-clearscape-analytics-modelops-model-factory-solution",permalink:"/pr-preview/pr-147/ko/quickstarts/analyze-data/execute-airflow-workflows-with-clearscape-analytics-modelops-model-factory-solution",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,author:"Tayyaba Batool",email:"tayyaba.batool@teradata.com",page_last_update:"Mar 19th, 2024",description:"Tutorial for Model Factory Solution - Executing Airflow workflows with ClearScape Analytics ModelOps",keywords:["modelfactory","modelops","byom","python","clearscape analytics","teradata","data warehouses","teradata","vantage","cloud data platform","machine learning","artificial intelligence","business intelligence","enterprise analytics"]},sidebar:"tutorialSidebar",previous:{title:"ModelOps - Import and Deploy your first GIT Model",permalink:"/pr-preview/pr-147/ko/quickstarts/analyze-data/deploy-and-monitor-machine-learning-models-with-teradata-modelops-and-git"},next:{title:"Use AWS SageMaker with Teradata Vantage",permalink:"/pr-preview/pr-147/ko/quickstarts/analyze-data/sagemaker-with-teradata-vantage"}},d={},c=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},...i.RM,{value:"Configuring Visual Studio Code and Installing Airflow on docker-compose",id:"configuring-visual-studio-code-and-installing-airflow-on-docker-compose",level:2},{value:"Configuring Model Factory Solution Accelerator",id:"configuring-model-factory-solution-accelerator",level:2},{value:"Create a Airflow DAG containing full ModelOps Lifecycle",id:"create-a-airflow-dag-containing-full-modelops-lifecycle",level:2},{value:"Initialize Airflow in Docker Compose",id:"initialize-airflow-in-docker-compose",level:2},{value:"Clean up Airflow demo environment",id:"clean-up-airflow-demo-environment",level:2},{value:"Launch Airflow with Model Factory Solution Accelerator",id:"launch-airflow-with-model-factory-solution-accelerator",level:2},{value:"Run Airflow DAG of Model Factory Solution with ModelOps",id:"run-airflow-dag-of-model-factory-solution-with-modelops",level:2},{value:"Summary",id:"summary",level:2},{value:"Further reading",id:"further-reading",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"execute-airflow-workflows-with-modelops---model-factory-solution-accelerator",children:"Execute Airflow workflows with ModelOps - Model Factory Solution Accelerator"}),"\n",(0,o.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsxs)(n.p,{children:["The purpose of the ",(0,o.jsx)(n.strong,{children:"Model Factory Solution Accelerator"})," of ",(0,o.jsx)(n.strong,{children:"ClearScape Analytics"})," is to streamline and accelerate the end-to-end process of developing, deploying, and managing machine learning models within an organization at ",(0,o.jsx)(n.strong,{children:"Horizontal Scale"})," by operationalizing ",(0,o.jsx)(n.strong,{children:"hundreds of models for a business domain at one effort"}),". It leverages the scalability of in-database analytics and the openness of supporting partner model formats such as H2O or Dataiku. This unique combination enhances efficiency, scalability, and consistency across various stages of the machine learning lifecycle in Enterprise environments."]}),"\n",(0,o.jsxs)(n.p,{children:["By incorporating best practices, automation, and standardized workflows, the Model Factory Solution Accelerator enables teams to rapidly select the data to be used, configure the model required, ensure reproducibility, and deploy ",(0,o.jsx)(n.strong,{children:"unlimited"})," number of models seamlessly into production. Ultimately, it aims to reduce the time-to-value for machine learning initiatives and promote a more structured and efficient approach to building and deploying models at scale. Here is the diagram of an automated Workflow:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Workflow",src:t(94528).A+"",width:"1752",height:"736"})}),"\n",(0,o.jsx)(n.p,{children:"Here are the steps to implement Model Factory Solution Accelerator using Airflow and ClearScape Analytics ModelOps. Apache Airflow is used for the scheduling and orchestration of data pipelines or workflows. So in this tutorial we are creating an Airflow DAG (Directed Acyclic Graph) which will be executed to automate the lifecycle of ModelOps."}),"\n",(0,o.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["In this tutorial it is implemented on local machine using ",(0,o.jsx)(n.strong,{children:"Visual Studio code"})," IDE."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["In order to execute shell commands, you can install the VS code extension ",(0,o.jsx)(n.strong,{children:'"Remote Development"'})," using the followng link. This extension pack includes the WSL extension, in addition to the Remote - SSH, and Dev Containers extensions, enabling you to open any folder in a container, on a remote machine, or in WSL:\n",(0,o.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack",children:"VS code marketplace"}),"."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Access to a Teradata Vantage instance with ClearScape Analytics (includes ModelOps)"}),"\n"]}),"\n",(0,o.jsx)(i.Ay,{}),"\n",(0,o.jsx)(n.h2,{id:"configuring-visual-studio-code-and-installing-airflow-on-docker-compose",children:"Configuring Visual Studio Code and Installing Airflow on docker-compose"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Open Visual Studio code and select the option of open a remote window. Then select Connect to WSL-Ubuntu"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Select File > Open Folder. Then select the desired folder or create a new one using this command: mkdir [folder_name]"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Set the AIRFLOW_HOME environment variable. Airflow requires a home directory and uses ~/airflow by default, but you can set a different location if you prefer. The AIRFLOW_HOME environment variable is used to inform Airflow of the desired location."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"AIRFLOW_HOME=./[folder_name]\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Install apache-airflow stable version 2.8.2 from PyPI repository.:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'    AIRFLOW_VERSION=2.8.2\n\n    PYTHON_VERSION="$(python3 --version | cut -d " " -f 2 | cut -d "." -f 1-2)"\n\n    CONSTRAINT_URL="https://raw.githubusercontent.com/apache/airflow/constraints-${AIRFLOW_VERSION}/constraints-${PYTHON_VERSION}.txt"\n\n    pip install "apache-airflow==${AIRFLOW_VERSION}" --constraint "${CONSTRAINT_URL}" --default-timeout=100\n'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Install the Airflow Teradata provider stable version from PyPI repository."}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'pip install "apache-airflow-providers-teradata" --default-timeout=100\n'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Install Docker Desktop so that you can use docker container for running airflow. Ensure that the docker desktop is running."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Check docker version using this command:"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker --version\n"})}),"\n",(0,o.jsx)(n.p,{children:"Check the version of docker compose. Docker Compose is a tool for defining and running multi-container applications"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker-compose --version\n"})}),"\n",(0,o.jsx)(n.p,{children:"To deploy Airflow on Docker Compose, you need to fetch docker-compose.yaml using this curl command."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:', id="Fetch docker-compose yaml", role="content-editable emits-gtm-events"',children:"    curl -LfO 'https://airflow.apache.org/docs/apache-airflow/2.8.2/docker-compose.yaml'\n"})}),"\n",(0,o.jsx)(n.p,{children:"Create these folders to use later using following command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:', id="Create Airflow folders", role="content-editable emits-gtm-events"',children:"mkdir -p ./dags ./logs ./plugins ./config\n"})}),"\n",(0,o.jsx)(n.h2,{id:"configuring-model-factory-solution-accelerator",children:"Configuring Model Factory Solution Accelerator"}),"\n",(0,o.jsx)(n.p,{children:"Create a config file inside config folder and set the parameters to corresponding values depending on which model you want to train."}),"\n",(0,o.jsxs)(s,{children:[(0,o.jsx)("summary",{children:"Click to reveal the Python code"}),(0,o.jsx)("pre",{children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'from configparser import ConfigParser\nimport os\n\nconfig = ConfigParser()\n\nconfig[\'MAIN\'] = {\n    "projectId": "23e1df4b-b630-47a1-ab80-7ad5385fcd8d",\n    "bearerToken": os.environ[\'BEARER_TOKEN\'],\n    "trainDatasetId": "ba39e766-2fdf-426f-ba5c-4ca3e90955fc",\n    "evaluateDatasetId": "74489d62-2af5-4402-b264-715e151a420a",\n    "datasetConnectionId" : "151abf05-1914-4d38-a90d-272d850f212c",\n    "datasetTemplateId": "d8a35d98-21ce-47d0-b9f2-00d355777de1"\n}\n\nconfig[\'HYPERPARAMETERS\'] = {\n    "eta": 0.2,\n    "max_depth": 6\n}\n\nconfig[\'RESOURCES\'] = {\n    "memory": "500m",\n    "cpu": "0.5"\n}\n\nconfig[\'MODEL\'] = {\n    "modelId": "f937b5d8-02c6-5150-80c7-1e4ff07fea31",\n    "approvalComments": "Approving this model!",\n    "cron": "@once",\n    "engineType": "DOCKER_BATCH",\n    "engine": "python-batch",\n    "dockerImage": "artifacts.td.teradata.com/tdproduct-docker-snapshot/avmo/aoa-python-base:3.9.13-1"\n}\n\n\nwith open(\'./config/modelOpsConfig.ini\', \'w\') as f:\n    config.write(f)\n'})})})]}),"\n",(0,o.jsx)(n.p,{children:"Now copy the Bearer token from the ModelOps user interface (Left Menu -> Your Account -> Session Details) and set it here as an environment varibale using the following command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:', id="Bearer token", role="content-editable emits-gtm-events"',children:"export BEARER_TOKEN='your_token_here'\n"})}),"\n",(0,o.jsx)(n.p,{children:"Now you can execute the previously created config file, which will create a new ini file inside config folder containing all the required parameters which will be used in the DAG creation step."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",metastring:', id="Create config ini", role="content-editable emits-gtm-events"',children:"python3 createConfig.py\n"})}),"\n",(0,o.jsx)(n.h2,{id:"create-a-airflow-dag-containing-full-modelops-lifecycle",children:"Create a Airflow DAG containing full ModelOps Lifecycle"}),"\n",(0,o.jsx)(n.p,{children:"Now you can create a DAG using the following python code. Add this python code file inside dags folder. This DAG contains 5 tasks of ModelOps lifecycle (i.e., Train, Evaluate, Approve, Deploy and Retire)"}),"\n",(0,o.jsxs)(s,{children:[(0,o.jsx)("summary",{children:"Click to reveal the Python code"}),(0,o.jsx)("pre",{children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"import base64\nfrom datetime import datetime, timedelta, date\nimport json\nimport os\nimport time\n\nfrom airflow import DAG\nfrom airflow.operators.python import PythonOperator\n\nimport requests\n\nfrom configparser import ConfigParser\n\n# Read from Config file\nconfig = ConfigParser()\nconfig.read('config/modelOpsConfig.ini')\n\nconfig_main = config[\"MAIN\"]\nconfig_hyper_params = config[\"HYPERPARAMETERS\"]\nconfig_resources = config[\"RESOURCES\"]\nconfig_model = config[\"MODEL\"]\n\n# Default args for DAG\ndefault_args = {\n    'owner': 'Tayyaba',\n    'retries': 5,\n    'retry_delay': timedelta(minutes=2)\n}\n\ndef get_job_status(job_id):\n\n    # Use the fetched Job ID to check Job Status\n    headers_for_status = {\n    'AOA-PROJECT-ID': config_main['projectid'],\n    'Authorization': 'Bearer ' + config_main['bearertoken'],\n    }\n\n    status_response = requests.get('https://airflow-u9usja4twtauvt3s.env.clearscape.teradata.com:8443/modelops/core/api/jobs/' + job_id + '?projection=expandJob', headers=headers_for_status)\n    status_json = status_response.json()\n    job_status = status_json.get('status')\n    return job_status\n\n\ndef train_model(ti):\n\n    headers = {\n    'AOA-Project-ID': config_main['projectid'],\n    'Accept': 'application/json, text/plain, */*',\n    'Accept-Language': 'en-US,en;q=0.9',\n    'Authorization': 'Bearer ' + config_main['bearertoken'],\n    'Content-Type': 'application/json',\n    }\n\n    json_data = {\n        'datasetId': config_main['trainDatasetId'],\n        'datasetConnectionId': config_main['datasetConnectionId'],\n        'modelConfigurationOverrides': {\n            'hyperParameters': {\n                'eta': config_hyper_params['eta'],\n                'max_depth': config_hyper_params['max_depth'],\n            },\n        },\n        'automationOverrides': {\n            'resources': {\n                'memory': config_resources['memory'],\n                'cpu': config_resources['cpu'],\n            },\n            'dockerImage':  config_model['dockerImage'],\n        },\n    }\n\n    \n    response = requests.post('https://airflow-u9usja4twtauvt3s.env.clearscape.teradata.com:8443/modelops/core/api/models/' + config_model['modelid'] + '/train', headers=headers, json=json_data)\n    \n    json_data = response.json()\n\n    # Get the Training Job ID\n    job_id = json_data.get('id')\n    ti.xcom_push(key='train_job_id', value=job_id)\n\n    job_status = get_job_status(job_id)\n    print(\"Started - Training Job - Status: \", job_status)\n\n    while job_status != \"COMPLETED\":\n        if job_status==\"ERROR\":\n            print(\"The training job is terminated due to an Error\")\n            ti.xcom_push(key='trained_model_id', value='NONE') # Setting the Trained Model Id to None here and check in next step (Evaluate)\n            break\n        elif job_status==\"CANCELLED\":\n            ti.xcom_push(key='trained_model_id', value='NONE') \n            print(\"The training job is Cancelled !!\")\n            break\n        print(\"Job is not completed yet. Current status\", job_status)\n        time.sleep(5) #wait 5s\n        job_status = get_job_status(job_id)\n\n    # Checking Job status at the end to push the correct trained_model_id\n    if(job_status == \"COMPLETED\"):\n        train_model_id = json_data['metadata']['trainedModel']['id']\n        ti.xcom_push(key='trained_model_id', value=train_model_id)\n        print('Model Trained Successfully! Job ID is : ', job_id, 'Trained Model Id : ', train_model_id, ' Status : ', job_status)\n    else:\n        ti.xcom_push(key='trained_model_id', value='NONE')\n        print(\"Training Job is terminated !!\")\n\n\ndef evaluate_model(ti):\n\n    trained_model_id = ti.xcom_pull(task_ids = 'task_train_model', key = 'trained_model_id')\n\n    headers = {\n    'AOA-Project-ID': config_main['projectid'],\n    'Accept': 'application/json, text/plain, */*',\n    'Accept-Language': 'en-US,en;q=0.9',\n    'Authorization': 'Bearer ' + config_main['bearertoken'],\n    'Content-Type': 'application/json',\n    }\n\n    json_data = {\n        'datasetId': config_main['evaluatedatasetid'],\n        'datasetConnectionId': config_main['datasetConnectionId'],\n        'modelConfigurationOverrides': {\n            'hyperParameters': {\n                'eta': config_hyper_params['eta'],\n                'max_depth': config_hyper_params['max_depth'],\n            },\n        },\n        'automationOverrides': {\n            'resources': {\n                'memory': config_resources['memory'],\n                'cpu': config_resources['cpu'],\n            },\n            'dockerImage':  config_model['dockerImage'],\n        },\n    }\n\n    if trained_model_id == 'NONE':\n        ti.xcom_push(key='evaluated_model_status', value='FALIED')\n        print(\"Evaluation cannot be done as the Training Job was terminated !!\") \n    else:\n        response = requests.post('https://airflow-u9usja4twtauvt3s.env.clearscape.teradata.com:8443/modelops/core/api/trainedModels/' + trained_model_id + '/evaluate', headers=headers, json=json_data)\n        json_data = response.json()\n\n        # Get the Evaluation Job ID\n        eval_job_id = json_data.get('id')\n        ti.xcom_push(key='evaluate_job_id', value=eval_job_id)\n\n        job_status = get_job_status(eval_job_id)\n        print(\"Started - Job - Status: \", job_status)\n\n        while job_status != \"COMPLETED\":\n            if job_status==\"ERROR\":\n                print(\"The evaluation job is terminated due to an Error\")\n                # Set the Trained Model Id to None here and check in next step (Evaluate)\n                break\n            elif job_status==\"CANCELLED\":\n                print(\"The evaluation job is Cancelled !!\")\n                break\n            print(\"Job is not completed yet. Current status\", job_status)\n            time.sleep(5) # wait 5s\n            job_status = get_job_status(eval_job_id)\n\n        # Checking Job status at the end to push the correct evaluate_job_id\n        if(job_status == \"COMPLETED\"):\n            ti.xcom_push(key='evaluated_model_status', value='EVALUATED')\n            print('Model Evaluated Successfully! Job ID is : ', eval_job_id, ' Status : ', job_status)\n        else:\n            ti.xcom_push(key='evaluated_model_status', value='FAILED')\n            print(\"Evaluation Job is terminated !!\")\n\n\ndef approve_model(ti):\n\n    evaluated_model_status = ti.xcom_pull(task_ids = 'task_evaluate_model', key = 'evaluated_model_status')\n\n    if evaluated_model_status == 'FAILED':\n        ti.xcom_push(key='approve_model_status', value='FALIED')\n        print(\"Approval cannot be done as the Evaluation was failed !!\") \n    else:\n        trained_model_id = ti.xcom_pull(task_ids = 'task_train_model', key = 'trained_model_id') \n\n        headers = {\n        'AOA-Project-ID': config_main['projectid'],\n        'Accept': 'application/json, text/plain, */*',\n        'Accept-Language': 'en-US,en;q=0.9',\n        'Authorization': 'Bearer ' + config_main['bearertoken'],\n        'Content-Type': 'application/json',\n        }\n\n        json_data = {\n            \"comments\": (base64.b64encode(config_model['approvalComments'].encode()).decode())\n        }\n\n        response = requests.post('https://airflow-u9usja4twtauvt3s.env.clearscape.teradata.com:8443/modelops/core/api/trainedModels/' + trained_model_id + '/approve' , headers=headers, json=json_data)\n        response_json = response.json()\n        approval_status = response_json['status']\n        if(approval_status == 'APPROVED'):\n            ti.xcom_push(key='approve_model_status', value='EVALUATED')\n            print('Model Approved Successfully! Status: ', approval_status)\n        else:\n            ti.xcom_push(key='approve_model_status', value='FAILED')\n            print('Model not approved! Status: ', approval_status)\n\n\ndef deploy_model(ti):\n\n    approve_model_status = ti.xcom_pull(task_ids = 'task_approve_model', key = 'approve_model_status')\n \n    headers = {\n        'AOA-Project-ID': config_main['projectid'],\n        'Accept': 'application/json, text/plain, */*',\n        'Accept-Language': 'en-US,en;q=0.9',\n        'Authorization': 'Bearer ' + config_main['bearertoken'],\n        'Content-Type': 'application/json',\n    }\n\n\n    json_data = {\n        'engineType': config_model['engineType'],\n        'engineTypeConfig': {\n            'dockerImage':  config_model['dockerImage'],\n            'engine': \"python-batch\",\n            'resources': {\n                'memory': config_resources['memory'],\n                'cpu': config_resources['cpu'],\n            }\n        },\n        'language':\"python\",\n        'datasetConnectionId': config_main['datasetConnectionId'],\n        'datasetTemplateId': config_main['datasetTemplateId'],\n        'cron': config_model['cron'],\n        'publishOnly': \"false\",\n        'args':{}\n    }\n\n    if approve_model_status == 'FAILED':\n        ti.xcom_push(key='deploy_model_status', value='FALIED')\n        print(\"Deployment cannot be done as the model is not approved !!\") \n    else:\n        trained_model_id = ti.xcom_pull(task_ids = 'task_train_model', key = 'trained_model_id') \n\n        response = requests.post('https://airflow-u9usja4twtauvt3s.env.clearscape.teradata.com:8443/modelops/core/api/trainedModels/' + trained_model_id + '/deploy', headers=headers, json=json_data)\n        json_data = response.json()\n\n        # Get the Deployment Job ID\n        deploy_job_id = json_data.get('id')\n        ti.xcom_push(key='deploy_job_id', value=deploy_job_id)\n\n        # deployed_model_id = json_data['metadata']['deployedModel']['id']\n\n        job_status = get_job_status(deploy_job_id)\n        print(\"Started - Deployment Job - Status: \", job_status)\n\n        while job_status != \"COMPLETED\":\n            if job_status==\"ERROR\":\n                ti.xcom_push(key='deploy_model_status', value='FAILED')\n                print(\"The deployment job is terminated due to an Error\")\n                break\n            elif job_status==\"CANCELLED\":\n                ti.xcom_push(key='deploy_model_status', value='FAILED')\n                print(\"The deployment job is Cancelled !!\")\n                break\n            print(\"Job is not completed yet. Current status\", job_status)\n            time.sleep(5) # wait 5s\n    job_status = get_job_status(deploy_job_id)\n\n    # Checking Job status at the end to push the correct deploy_model_status\n    if(job_status == \"COMPLETED\"):\n        ti.xcom_push(key='deploy_model_status', value='DEPLOYED')\n        print('Model Deployed Successfully! Job ID is : ', deploy_job_id, ' Status : ', job_status)\n    else:\n        ti.xcom_push(key='deploy_model_status', value='FAILED')\n        print(\"Deployment Job is terminated !!\")\n\n\n\ndef retire_model(ti):\n\n    deployed_model_status = ti.xcom_pull(task_ids = 'task_deploy_model', key = 'deploy_model_status')\n\n    if deployed_model_status == 'FAILED':\n        ti.xcom_push(key='retire_model_status', value='FALIED')\n        print(\"Retirement cannot be done as the model is not deployed !!\") \n    else:\n        trained_model_id = ti.xcom_pull(task_ids = 'task_train_model', key = 'trained_model_id') \n\n        headers = {\n        'AOA-Project-ID': config_main['projectid'],\n        'Accept': 'application/json, text/plain, */*',\n        'Accept-Language': 'en-US,en;q=0.9',\n        'Authorization': 'Bearer ' + config_main['bearertoken'],\n        'Content-Type': 'application/json',\n        }\n\n        # Identifying the deployment ID\n        get_deployment_id_response = requests.get('https://airflow-u9usja4twtauvt3s.env.clearscape.teradata.com:8443/modelops/core/api/deployments/search/findByStatusAndTrainedModelId?projection=expandDeployment&status=DEPLOYED&trainedModelId=' + trained_model_id , headers=headers)\n  \n        get_deployment_id_json = get_deployment_id_response.json()\n        deployment_id = get_deployment_id_json['_embedded']['deployments'][0]['id']\n\n        json_data = {\n            \"deploymentId\": deployment_id\n        }\n\n        # Retire the specific deployment\n        retire_model_response = requests.post('https://airflow-u9usja4twtauvt3s.env.clearscape.teradata.com:8443/modelops/core/api/trainedModels/' + trained_model_id + '/retire', headers=headers, json=json_data)\n        retire_model_response_json = retire_model_response.json()\n\n                # Get the Evaluation Job ID\n        retire_job_id = retire_model_response_json.get('id')\n        ti.xcom_push(key='retire_job_id', value=retire_job_id)\n\n        job_status = get_job_status(retire_job_id)\n        print(\"Started - Job - Status: \", job_status)\n\n        while job_status != \"COMPLETED\":\n            if job_status==\"ERROR\":\n                print(\"The Retire job is terminated due to an Error\")\n                # Set the Trained Model Id to None here and check in next step (Evaluate)\n                break\n            elif job_status==\"CANCELLED\":\n                print(\"The Retire job is Cancelled !!\")\n                break\n            print(\"Job is not completed yet. Current status\", job_status)\n            time.sleep(5) # wait 5s\n            job_status = get_job_status(retire_job_id)\n\n        # Checking Job status at the end to push the correct evaluate_job_id\n        if(job_status == \"COMPLETED\"):\n            ti.xcom_push(key='retire_model_status', value='RETIRED')\n            print('Model Retired Successfully! Job ID is : ', retire_job_id, ' Status : ', job_status)\n        else:\n            ti.xcom_push(key='retire_model_status', value='FAILED')\n            print(\"Retire Job is terminated !!\")\n\n\n\nwith DAG(\n    dag_id = 'ModelOps_Accelerator_v1',\n    default_args=default_args,\n    description = 'ModelOps lifecycle accelerator for Python Diabetes Prediction model',\n    start_date=datetime.now(), # Set the start_date as per requirement\n    schedule_interval='@daily'\n) as dag:\n    task1 = PythonOperator(\n        task_id='task_train_model',\n        python_callable=train_model\n    )\n    task2 = PythonOperator(\n        task_id='task_evaluate_model',\n        python_callable=evaluate_model\n    )\n    task3 = PythonOperator(\n        task_id='task_approve_model',\n        python_callable=approve_model\n    )\n    task4 = PythonOperator(\n        task_id='task_deploy_model',\n        python_callable=deploy_model\n    )\n    task5 = PythonOperator(\n        task_id='task_retire_model',\n        python_callable=retire_model\n    )\n    \n\ntask1.set_downstream(task2)\ntask2.set_downstream(task3)\ntask3.set_downstream(task4)\ntask4.set_downstream(task5)\n"})})})]}),"\n",(0,o.jsx)(n.h2,{id:"initialize-airflow-in-docker-compose",children:"Initialize Airflow in Docker Compose"}),"\n",(0,o.jsx)(n.p,{children:"While initializing Airflow services like the internal Airflow database, for operating systems other than Linux, you may get a warning that AIRFLOW_UID is not set, but you can safely ignore it. by setting its environment variable using the following command."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:', id="UID Airflow variable", role="content-editable emits-gtm-events"',children:'echo -e "AIRFLOW_UID=5000" > .env\n'})}),"\n",(0,o.jsx)(n.p,{children:"To run internal database migrations and create the first user account, initialize the database using this command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:', id="", role="content-editable emits-gtm-events"',children:"docker compose up airflow-init\n"})}),"\n",(0,o.jsx)(n.p,{children:"After initialization is complete, you should see a message like this:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:', id="Check Airflow init", role="content-editable emits-gtm-events"',children:" airflow-init_1       | Upgrades done\n airflow-init_1       | Admin user airflow created\n airflow-init_1       | 2.8.2\n start_airflow-init_1 exited with code 0\n"})}),"\n",(0,o.jsx)(n.h2,{id:"clean-up-airflow-demo-environment",children:"Clean up Airflow demo environment"}),"\n",(0,o.jsx)(n.p,{children:"You can clean up the environment which will remove the preloaded example DAGs using this command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:', id="Docker compose down", role="content-editable emits-gtm-events"',children:"docker-compose down -v\n"})}),"\n",(0,o.jsx)(n.p,{children:"Then update this parameter in docker-compose.yaml file as given below:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:', id="Docker compose yaml", role="content-editable emits-gtm-events"',children:"AIRFLOW__CORE__LOAD_EXAMPLES: 'false'\n"})}),"\n",(0,o.jsx)(n.h2,{id:"launch-airflow-with-model-factory-solution-accelerator",children:"Launch Airflow with Model Factory Solution Accelerator"}),"\n",(0,o.jsx)(n.p,{children:"Launch Airflow using this command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:', id="Docker compose up", role="content-editable emits-gtm-events"',children:"docker-compose up -d\n"})}),"\n",(0,o.jsx)(n.h2,{id:"run-airflow-dag-of-model-factory-solution-with-modelops",children:"Run Airflow DAG of Model Factory Solution with ModelOps"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Now you can access Airflow UI uisng the following ",(0,o.jsx)(n.a,{href:"http://localhost:8080/",children:"http://localhost:8080/"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Airflow login",src:t(77597).A+"",width:"3719",height:"1305"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Login with Usename: airflow and Password: airflow. In the DAGs menu you will be able to see your created DAGs."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"DAGs",src:t(69788).A+"",width:"3714",height:"1233"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Select your latest created DAG and the graph will look like this:"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"DAGs",src:t(52442).A+"",width:"3673",height:"1773"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Now you can trigger the DAG using the play icon on the top right side."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"You can check the logs by selecting any task and then click on the logs menu:"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"On the ClearScape Analytics ModelOps - Jobs section you can see that the jobs have started running:"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"DAGs",src:t(60613).A+"",width:"3753",height:"814"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Now you can see that all the tasks are successfully executed."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"DAGs",src:t(98062).A+"",width:"3690",height:"1524"})}),"\n",(0,o.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,o.jsx)(n.p,{children:"This tutorial aimed at providing a hands on exercise on how to install an Airflow environment on a Linux server and how to use Airflow to interact with ClearScape Analytics ModelOps and Teradata Vantage database. An additional example is provided on how to integrate Airflow and the data modelling and maintenance tool dbt to create and load a Teradata Vantage database."}),"\n",(0,o.jsx)(n.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://docs.teradata.com/search/documents?query=ModelOps&sort=last_update&virtual-field=title_only&content-lang=",children:"ModelOps documentatioN"}),"."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},52442:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/DAG_graph-e3b7d1d67a022083c12c13f651d1f2e4.png"},69788:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/DAGs-8609113cb8220ce56d2be90926c1deb7.png"},77597:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/LoginPage-7f3ec330b28502b922f900514e05656e.png"},94528:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/Workflow-232b85aea20f2c1e830cc0454f4dffdd.png"},60613:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/modelOps1-1ec7e72182e2db60e439657b40548894.png"},98062:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/successTasks-eded69426eea01ba95119686320f84e9.png"},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var o=t(96540);const a={},i=o.createContext(a);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);