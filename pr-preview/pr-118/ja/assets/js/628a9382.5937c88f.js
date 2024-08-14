"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[6284],{41269:(e,a,n)=>{n.d(a,{Ay:()=>o,RM:()=>r});var t=n(74848),i=n(28453);const r=[];function s(e){const a={a:"a",admonition:"admonition",p:"p",...(0,i.R)(),...e.components};return(0,t.jsx)(a.admonition,{type:"note",children:(0,t.jsxs)(a.p,{children:["If you have any questions or need further assistance, please visit our ",(0,t.jsx)(a.a,{href:"https://support.teradata.com/community",children:"community forum"})," where you can get support and interact with other community members."]})})}function o(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},62680:(e,a,n)=>{n.d(a,{Ay:()=>o,RM:()=>r});var t=n(74848),i=n(28453);const r=[];function s(e){const a={a:"a",admonition:"admonition",p:"p",...(0,i.R)(),...e.components};return(0,t.jsx)(a.admonition,{type:"note",children:(0,t.jsxs)(a.p,{children:["If you need a test instance of Vantage, you can provision one for free at ",(0,t.jsx)(a.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})]})})}function o(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},83050:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var t=n(74848),i=n(28453),r=n(41269),s=n(62680);const o={sidebar_position:9,author:"Wenjie Tehan",email:"wenjie.tehan@teradata.com",page_last_update:"February 8th, 2022",description:"Use AWS SageMaker with Teradata Vantage.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","ai","artificial intelligence","aws sagemaker."]},d="Use AWS SageMaker with Teradata Vantage",c={id:"analyze-data/sagemaker-with-teradata-vantage",title:"Use AWS SageMaker with Teradata Vantage",description:"Use AWS SageMaker with Teradata Vantage.",source:"@site/quickstarts/analyze-data/sagemaker-with-teradata-vantage.md",sourceDirName:"analyze-data",slug:"/analyze-data/sagemaker-with-teradata-vantage",permalink:"/pr-preview/pr-118/ja/quickstarts/analyze-data/sagemaker-with-teradata-vantage",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,author:"Wenjie Tehan",email:"wenjie.tehan@teradata.com",page_last_update:"February 8th, 2022",description:"Use AWS SageMaker with Teradata Vantage.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","ai","artificial intelligence","aws sagemaker."]},sidebar:"tutorialSidebar",previous:{title:"Execute Airflow workflows with ModelOps - Model Factory Solution Accelerator",permalink:"/pr-preview/pr-118/ja/quickstarts/analyze-data/execute-airflow-workflows-with-clearscape-analytics-modelops-model-factory-solution"},next:{title:"Use Teradata Vantage with Azure Machine Learning Studio",permalink:"/pr-preview/pr-118/ja/quickstarts/analyze-data/use-teradata-vantage-with-azure-machine-learning-studio"}},l={},h=[{value:"Overview",id:"overview",level:3},{value:"Prerequisites",id:"prerequisites",level:3},...s.RM,{value:"Load data",id:"load-data",level:3},{value:"Train the model",id:"train-the-model",level:3},{value:"Deploy the model",id:"deploy-the-model",level:3},{value:"Create a model",id:"create-a-model",level:3},{value:"Create an endpoint configuration",id:"create-an-endpoint-configuration",level:3},{value:"Create endpoint",id:"create-endpoint",level:3},{value:"Summary",id:"summary",level:3},{value:"Further reading",id:"further-reading",level:3},...r.RM];function m(e){const a={a:"a",code:"code",h1:"h1",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"use-aws-sagemaker-with-teradata-vantage",children:"Use AWS SageMaker with Teradata Vantage"}),"\n",(0,t.jsx)(a.h3,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(a.p,{children:"This how-to will help you to integrate Amazon SageMaker with Teradata Vantage. The approach this guide explains is one of many potential approaches to integrate with the service."}),"\n",(0,t.jsx)(a.p,{children:"Amazon SageMaker provides a fully managed Machine Learning Platform. There are two use cases for Amazon SageMaker and Teradata:"}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Data resides on Teradata Vantage and Amazon SageMaker will be used for both the Model definition and subsequent scoring. Under this use case Teradata will provide data into the Amazon S3 environment so that Amazon SageMaker can consume training and test data sets for the purpose of model development. Teradata would further make data available via Amazon S3 for subsequent scoring by Amazon SageMaker. Under this model Teradata is a data repository only."}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Data resides on Teradata Vantage and Amazon SageMaker will be used for the Model definition, and Teradata for the subsequent scoring. Under this use case Teradata will provide data into the Amazon S3 environment so that Amazon SageMaker can consume training and test data sets for the purpose of model development. Teradata will need to import the Amazon SageMaker model into a Teradata table for subsequent scoring by Teradata Vantage. Under this model Teradata is a data repository and a scoring engine."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"The first use case is discussed in this document."}),"\n",(0,t.jsx)(a.p,{children:"Amazon SageMaker consumes training and test data from an Amazon S3 bucket. This article describes how you can load Teradata analytics data sets into an Amazon S3 bucket. The data can then available to Amazon SageMaker to build and train machine learning models and deploy them into a production environment."}),"\n",(0,t.jsx)(a.h3,{id:"prerequisites",children:"Prerequisites"}),"\n","\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["Access to a Teradata Vantage instance.","\n",(0,t.jsx)(s.Ay,{}),"\n"]}),"\n",(0,t.jsx)(a.li,{children:"IAM permission to access Amazon S3 bucket, and to use Amazon SageMaker service."}),"\n",(0,t.jsx)(a.li,{children:"An Amazon S3 bucket to store training data."}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"load-data",children:"Load data"}),"\n",(0,t.jsx)(a.p,{children:"Amazon SageMaker trains data from an Amazon S3 bucket. Following are the steps to load training data from Vantage to an Amazon S3 bucket:"}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["Go to Amazon SageMaker console and create a notebook instance. See ",(0,t.jsx)(a.a,{href:"https://docs.aws.amazon.com/sagemaker/latest/dg/gs-setup-working-env.html",children:"Amazon SageMaker Developer Guide"})," for instructions on how to create a notebook instance:",(0,t.jsx)(a.img,{alt:"Create notebook instance",src:n(16635).A+"",width:"1956",height:"510"})]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["Open your notebook instance:\n",(0,t.jsx)(a.img,{alt:"Open notebook instance",src:n(35592).A+"",width:"2342",height:"472"})]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["Start a new file by clicking on ",(0,t.jsx)(a.code,{children:"New -> conda_python3"}),":\n",(0,t.jsx)(a.img,{alt:"Start new file",src:n(18764).A+"",width:"1874",height:"986"})]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Install Teradata Python library:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:"!pip install teradataml\n"})}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"In a new cell and import additional libraries:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:"import teradataml as tdml\nfrom teradataml import create_context, get_context, remove_context\nfrom teradataml.dataframe.dataframe import DataFrame\nimport pandas as pd\nimport boto3, os\n"})}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["In a new cell, connect to Teradata Vantage. Replace ",(0,t.jsx)(a.code,{children:"<hostname>"}),", ",(0,t.jsx)(a.code,{children:"<database user name>"}),", ",(0,t.jsx)(a.code,{children:"<database password>"})," to match your Vantage environment:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:"create_context(host = '<hostname>', username = '<database user name>', password = '<database password>')\n"})}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Retrieve data rom the table where the training dataset resides using TeradataML DataFrame API:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:"train_data = tdml.DataFrame('table_with_training_data')\ntrainDF = train_data.to_pandas()\n"})}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Write data to a local file:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:"trainFileName = 'train.csv'\ntrainDF.to_csv(trainFileName, header=None, index=False)\n"})}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Upload the file to Amazon S3:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",metastring:', id="sagemaker_first_usage", role="content-editable emits-gtm-events',children:"bucket = 'sagedemo'\nprefix = 'sagemaker/train'\n\ntrainFile = open(trainFileName, 'rb')\nboto3.Session().resource('s3').Bucket(bucket).Object(os.path.join(prefix, localFile)).upload_fileobj(trainFile)\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"train-the-model",children:"Train the model"}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["Select ",(0,t.jsx)(a.code,{children:"Training jobs"})," on the left menu under ",(0,t.jsx)(a.code,{children:"Training"}),", then click on ",(0,t.jsx)(a.code,{children:"Create training job"}),":\n",(0,t.jsx)(a.img,{alt:"Create training job",src:n(4021).A+"",width:"2102",height:"488"})]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["At the ",(0,t.jsx)(a.code,{children:"Create training job"})," window, fill in the ",(0,t.jsx)(a.code,{children:"Job name"})," (e.g. ",(0,t.jsx)(a.code,{children:"xgboost-bank"}),") and ",(0,t.jsx)(a.code,{children:"Create a new role"})," for the IAM role. Choose ",(0,t.jsx)(a.code,{children:"Any S3 bucket"})," for the Amazon S3 buckets and ",(0,t.jsx)(a.code,{children:"Create role"}),":\n",(0,t.jsx)(a.img,{alt:"Create IAM role",src:n(62699).A+"",width:"1684",height:"1156"})]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["Back in the ",(0,t.jsx)(a.code,{children:"Create training job"})," window, use ",(0,t.jsx)(a.code,{children:"XGBoost"})," as the algorithm:\n",(0,t.jsx)(a.img,{alt:"Choose an algorithm",src:n(16525).A+"",width:"1462",height:"1042"})]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["Use the default ",(0,t.jsx)(a.code,{children:"ml.m4.xlarge"})," instance type, and 30GB of additional storage volume per instance. This is a short training job, shouldn't take more than 10 minutes.\n![",(0,t.jsx)(a.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(38976).A+"",children:"Resource configuration"})]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Fill in following hyperparameters and leave everything else as default:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"num_round=100\nsilent=0\neta=0.2\ngamma=4\nmax_depth=5\nmin_child_weight=6\nsubsample=0.8\nobjective='binary:logistic'\n"})}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["For ",(0,t.jsx)(a.code,{children:"Input data configuration"}),", enter the Amazon S3 bucket where you stored your training data. Input mode is ",(0,t.jsx)(a.code,{children:"File"}),". Content type is ",(0,t.jsx)(a.code,{children:"csv"}),". ",(0,t.jsx)(a.code,{children:"S3 location"})," is where the file uploaded to:\n",(0,t.jsx)(a.img,{alt:"Input data configuration",src:n(10398).A+"",width:"1536",height:"1476"})]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["For ",(0,t.jsx)(a.code,{children:"Output data configuration"}),", enter path where the output data will be stored:\n",(0,t.jsx)(a.img,{alt:"Output data configuration",src:n(90193).A+"",width:"1882",height:"608"})]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["Leave everything else as default, and click on \u201cCreate training job\u201d. Detail instructions on how to configure the training job can be found in [Amazon SageMaker Developer Guide](",(0,t.jsx)(a.a,{href:"https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-mkt-algo-train.html#sagemaker-mkt-algo-train-console",children:"https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-mkt-algo-train.html#sagemaker-mkt-algo-train-console"}),"]."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["Once the training job's created, Amazon SageMaker launches the ML instances to train the model, and stores the resulting model artifacts and other output in the ",(0,t.jsx)(a.code,{children:"Output data configuration"})," (",(0,t.jsx)(a.code,{children:"path/<training job name>/output"})," by default)."]}),"\n",(0,t.jsx)(a.h3,{id:"deploy-the-model",children:"Deploy the model"}),"\n",(0,t.jsx)(a.p,{children:"After you train your model, deploy it using a persistent endpoint"}),"\n",(0,t.jsx)(a.h3,{id:"create-a-model",children:"Create a model"}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsxs)(a.li,{children:["Select ",(0,t.jsx)(a.code,{children:"Models"})," under ",(0,t.jsx)(a.code,{children:"Inference"})," from the left panel, then ",(0,t.jsx)(a.code,{children:"Create model"}),". Fill in the model name (e.g. ",(0,t.jsx)(a.code,{children:"xgboost-bank"}),"), and choose the IAM role you created from the previous step."]}),"\n",(0,t.jsxs)(a.li,{children:["For ",(0,t.jsx)(a.code,{children:"Container definition 1"}),", use ",(0,t.jsx)(a.code,{children:"433757028032.dkr.ecr.us-west-2.amazonaws.com/xgboost:latest"})," as ",(0,t.jsx)(a.code,{children:"Location of inference code image"}),". ",(0,t.jsx)(a.code,{children:"Location of model artifacts"})," is the output path of your training job\n",(0,t.jsx)(a.img,{alt:"Container definition 1",src:n(15249).A+"",width:"1342",height:"1544"})]}),"\n",(0,t.jsxs)(a.li,{children:["Leave everything else as default, then ",(0,t.jsx)(a.code,{children:"Create model"}),"."]}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"create-an-endpoint-configuration",children:"Create an endpoint configuration"}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["Select the model you just created, then click on ",(0,t.jsx)(a.code,{children:"Create endpoint configuration"}),":\n",(0,t.jsx)(a.img,{alt:"Create endpoint configuration",src:n(71631).A+"",width:"1970",height:"442"})]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["Fill in the name (e.g. ",(0,t.jsx)(a.code,{children:"xgboost-bank"}),") and use default for everything else. The model name and training job should be automatically populated for you. Click on ",(0,t.jsx)(a.code,{children:"Create endpoint configuration"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"create-endpoint",children:"Create endpoint"}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["Select ",(0,t.jsx)(a.code,{children:"Inference"})," -> ",(0,t.jsx)(a.code,{children:"Models"})," from the left panel, select the model again, and click on ",(0,t.jsx)(a.code,{children:"Create endpoint"})," this time:\n",(0,t.jsx)(a.img,{alt:"Create endpoint",src:n(12887).A+"",width:"1984",height:"470"})]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["Fill in the name (e.g. ",(0,t.jsx)(a.code,{children:"xgboost-bank"}),"), and select ",(0,t.jsx)(a.code,{children:"Use an existing endpoint configuration"}),":\n",(0,t.jsx)(a.img,{alt:"Attach endpoint configuration",src:n(30882).A+"",width:"2058",height:"1060"})]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["Select the endpoint configuration created from last step, and click on ",(0,t.jsx)(a.code,{children:"Select endpoint configuration"}),":\n",(0,t.jsx)(a.img,{alt:"Select endpoint configuration",src:n(16975).A+"",width:"2026",height:"962"})]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["Leave everything else as default and click on ",(0,t.jsx)(a.code,{children:"Create endpoint"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"Now the model is deployed to the endpoint and can be used by client applications."}),"\n",(0,t.jsx)(a.h3,{id:"summary",children:"Summary"}),"\n",(0,t.jsx)(a.p,{children:"This how-to demonstrated how to extract training data from Vantage and use it to train a model in Amazon SageMaker. The solution used a Jupyter notebook to extract data from Vantage and write it to an S3 bucket. A SageMaker training job read data from the S3 bucket and produced a model. The model was deployed to AWS as a service endpoint."}),"\n",(0,t.jsx)(a.h3,{id:"further-reading",children:"Further reading"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Teradata-VantageTM-API-Integration-Guide-for-Cloud-Machine-Learning/Amazon-Web-Services",children:"API integration guide for AWS SageMaker"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"/pr-preview/pr-118/ja/quickstarts/analyze-data/integrate-teradata-jupyter-extensions-with-sagemaker",children:"Integrate Teradata Jupyter extensions with SageMaker notebook instance"})}),"\n"]}),"\n",(0,t.jsx)(r.Ay,{})]})}function p(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},38976:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/files/resource.configuration-a4884cde55c9a4fffb8521d024484e4e.png"},30882:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/attach.endpoint.configuration-85749d87984ddd947ea23c25d2858505.png"},16525:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/choose.an.algorithm-5e44669080496be890d0f4c5de33b0fd.png"},15249:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/container.definition.1-3bcff240b1e11421ab6130548284515f.png"},71631:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/create.endpoint.configuration-3e7c81f3e29158dda74348edee16e457.png"},12887:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/create.endpoint-0859be489bf219e61f7e03adf3b54b41.png"},62699:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/create.iam.role-484134d71a932447565243a33b8d39e0.png"},16635:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/create.notebook-d006f2524d80c87b3d82605f2375833c.png"},4021:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/create.training.job-7c7af10798c231313765fc5207d86071.png"},10398:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/input.data.configuration-827e9f11a589a315fc0087f1e0a9dbd2.png"},35592:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/open.notebook.instance-323c3a2257d798a2090c8adf19153dd0.png"},90193:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/output.data.configuration-30dbbfc175fef332ca9d8dd2d05fe8c0.png"},16975:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/select.endpoint.configuration-8c8c64bd14c180988b71f0ce6b403916.png"},18764:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/start.new.file-b01f16aa1140c4670e4c2b77d38ce066.png"},28453:(e,a,n)=>{n.d(a,{R:()=>s,x:()=>o});var t=n(96540);const i={},r=t.createContext(i);function s(e){const a=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:a},e.children)}}}]);