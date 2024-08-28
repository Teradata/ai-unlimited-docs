"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[6092],{41269:(e,n,a)=>{a.d(n,{Ay:()=>o,RM:()=>r});var t=a(74848),i=a(28453);const r=[];function s(e){const n={a:"a",admonition:"admonition",p:"p",...(0,i.R)(),...e.components};return(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["If you have any questions or need further assistance, please visit our ",(0,t.jsx)(n.a,{href:"https://support.teradata.com/community",children:"community forum"})," where you can get support and interact with other community members."]})})}function o(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},62680:(e,n,a)=>{a.d(n,{Ay:()=>o,RM:()=>r});var t=a(74848),i=a(28453);const r=[];function s(e){const n={a:"a",admonition:"admonition",p:"p",...(0,i.R)(),...e.components};return(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["If you need a test instance of Vantage, you can provision one for free at ",(0,t.jsx)(n.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})]})})}function o(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},25599:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var t=a(74848),i=a(28453),r=a(62680),s=a(41269);const o={sidebar_position:10,author:"Rupal Shah",email:"rupal.shah@teradata.com",page_last_update:"February 14th, 2022",description:"Use Teradata Vantage with Azure Machine Learning Studio.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","data cloud","machine learning","azure","azure machine learning studio"]},d="Use Teradata Vantage with Azure Machine Learning Studio",l={id:"analyze-data/use-teradata-vantage-with-azure-machine-learning-studio",title:"Use Teradata Vantage with Azure Machine Learning Studio",description:"Use Teradata Vantage with Azure Machine Learning Studio.",source:"@site/quickstarts/analyze-data/use-teradata-vantage-with-azure-machine-learning-studio.md",sourceDirName:"analyze-data",slug:"/analyze-data/use-teradata-vantage-with-azure-machine-learning-studio",permalink:"/pr-preview/pr-123/de/quickstarts/analyze-data/use-teradata-vantage-with-azure-machine-learning-studio",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,author:"Rupal Shah",email:"rupal.shah@teradata.com",page_last_update:"February 14th, 2022",description:"Use Teradata Vantage with Azure Machine Learning Studio.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","data cloud","machine learning","azure","azure machine learning studio"]},sidebar:"tutorialSidebar",previous:{title:"Use AWS SageMaker with Teradata Vantage",permalink:"/pr-preview/pr-123/de/quickstarts/analyze-data/sagemaker-with-teradata-vantage"},next:{title:"Integrate Teradata Jupyter extensions with Google Vertex AI",permalink:"/pr-preview/pr-123/de/quickstarts/analyze-data/integrate-teradata-jupyter-extensions-with-google-vertex-ai"}},c={},h=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},...r.RM,{value:"Procedure",id:"procedure",level:2},{value:"Initial setup",id:"initial-setup",level:3},{value:"Load data",id:"load-data",level:3},{value:"Train the model",id:"train-the-model",level:3},{value:"Import data",id:"import-data",level:3},{value:"Clean the data",id:"clean-the-data",level:3},{value:"Build the model",id:"build-the-model",level:3},{value:"Score the model",id:"score-the-model",level:3},{value:"Further reading",id:"further-reading",level:2},...s.RM];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"use-teradata-vantage-with-azure-machine-learning-studio",children:"Use Teradata Vantage with Azure Machine Learning Studio"}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/azure/machine-learning/studio/what-is-ml-studio",children:"Azure Machine Learning (ML) Studio"})," is a collaborative, drag-and-drop tool you can use to build, test, and deploy predictive analytics solutions on your data. ML Studio can consume data from Azure Blob Storage. This getting started guide will show how you can copy Teradata Vantage data sets to a Blob Storage using ML Studio 'built-in' Jupter Notebook feature. The data can then be used by ML Studio to build and train machine learning models and deploy them into a production environment."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:a(4782).A+"",width:"535",height:"118"})}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Access to a Teradata Vantage instance.","\n",(0,t.jsx)(r.Ay,{}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Azure subscription or create ",(0,t.jsx)(n.a,{href:"https://azure.microsoft.com/free",children:"free account"})]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/azure/machine-learning/studio/create-workspace",children:"Azure ML Studio workspace"})}),"\n",(0,t.jsxs)(n.li,{children:["(Optional) Download ",(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/sql/samples/adventureworks-install-configure?view=sql-server-2017",children:"AdventureWorks DW 2016 database"})," (i.e. ",(0,t.jsx)(n.em,{children:"'Training the Model'"})," section)","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Restore and copy ",(0,t.jsx)(n.em,{children:"'vTargetMail'"})," table from SQL Server to Teradata Vantage"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"procedure",children:"Procedure"}),"\n",(0,t.jsx)(n.h3,{id:"initial-setup",children:"Initial setup"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["During ML Studio workspace creation, you may need to create 'new' storage account unless you have one in current availability locations and choose ",(0,t.jsx)(n.strong,{children:"DEVTEST Standard"})," for ",(0,t.jsx)(n.strong,{children:"Web service plan"})," for this getting started guide. Logon to ",(0,t.jsx)(n.a,{href:"https://portal.azure.com",children:"Azure portal"}),", open your storage account and create a ",(0,t.jsx)(n.strong,{children:"container"})," if one does not exist already.\n",(0,t.jsx)(n.img,{src:a(50359).A+"",width:"770",height:"186"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Copy your ",(0,t.jsx)(n.strong,{children:"storage account name"})," and ",(0,t.jsx)(n.strong,{children:"key"})," to notepad which we will use for Python3 Notebook to access your Azure Blob Storage account.\n",(0,t.jsx)(n.img,{src:a(1368).A+"",width:"767",height:"311"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Finally, open ",(0,t.jsx)(n.strong,{children:"Configuration"})," property and set ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"'Secure transfer required'"})})," to ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"Disabled"})})," to allow ML Studio Import Data module to access blob storage account.\n",(0,t.jsx)(n.img,{src:a(22497).A+"",width:"398",height:"69"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"load-data",children:"Load data"}),"\n",(0,t.jsx)(n.p,{children:"To get the data to ML Studio, we first need to load data from Teradata Vantage to a Azure Blob Storage. We will create a ML Jupyter Notebook, install Python packages to connect to Teradata and save data to Azure Blob Storage,"}),"\n",(0,t.jsxs)(n.p,{children:["Logon to ",(0,t.jsx)(n.a,{href:"https://portal.azure.com",children:"Azure portal"}),", go to to your ",(0,t.jsx)(n.strong,{children:"ML Studio workspace"})," and ",(0,t.jsx)(n.a,{href:"https://studio.azureml.net",children:"Launch Machine Learning Studio"})," and ",(0,t.jsx)(n.strong,{children:"Sign In."})]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["You should see the following screen and click on ",(0,t.jsx)(n.strong,{children:"Notebooks,"})," ensure you are in the right region/ workspace and click on Notebook ",(0,t.jsx)(n.strong,{children:"New"}),"\n",(0,t.jsx)(n.img,{src:a(8266).A+"",width:"990",height:"477"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Choose ",(0,t.jsx)(n.em,{children:"Python3"})," and ",(0,t.jsx)(n.strong,{children:"name"})," your notebook instance\n",(0,t.jsx)(n.img,{src:a(47123).A+"",width:"987",height:"353"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In your jupyter notebook instance, install ",(0,t.jsx)(n.a,{href:"https://pypi.org/project/teradataml",children:"Teradata Vantage Python package for Advanced Analytics"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"pip install teradataml\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"There is no validation between Microsoft Azure ML Studio and Teradata Vantage Python package."})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Install ",(0,t.jsx)(n.a,{href:"https://pypi.org/project/azure-storage-blob",children:"Microsoft Azure Storage Blob Client Library for Python"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"!pip install azure-storage-blob\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Import the following libraries:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import teradataml as tdml\nfrom teradataml import create_context, get_context, remove_context\nfrom teradataml.dataframe.dataframe import DataFrame\nimport pandas as pd\nfrom azure.storage.blob import (BlockBlobService)\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Connect to Teradata using command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"create_context(host = '<hostname>', username = '<database user name>', password = '<password>')\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Retrieve Data using Teradata Python DataFrame module:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'train_data = DataFrame.from_table("<table_name>")\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Convert Teradata DataFrame to Panda DataFrame:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"trainDF = train_data.to_pandas()\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Convert data to CSV:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"trainDF = trainDF.to_csv(head=True,index=False)\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Assign variables for Azue Blob Storage account name, key and container name:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'accountName="<account_name>"\naccountKey="<account_key>"\ncontainerName="mldata"\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Upload file to Azure Blob Storage:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",metastring:', id="azure_ml_studio_first_config", role="content-editable emits-gtm-events',children:"blobService = BlockBlobService(account_name=accountName, account_key=accountKey)\nblobService.create_blob_from_text(containerNAme, 'vTargetMail.csv', trainDF)\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Logon to Azure portal, open blob storage account to view uploaded file:\n",(0,t.jsx)(n.img,{src:a(55502).A+"",width:"1239",height:"237"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"train-the-model",children:"Train the model"}),"\n",(0,t.jsxs)(n.p,{children:["We will use the existing ",(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/azure/sql-data-warehouse/sql-data-warehouse-get-started-analyze-with-azure-machine-learning",children:"Analyze data with Azure Machine Learning"})," article to build a predictive machine learning model based on data from Azure Blob Storage. We will build a targeted marketing campaign for Adventure Works, the bike shop, by predicting if a customer is likely to buy a bike or not."]}),"\n",(0,t.jsx)(n.h3,{id:"import-data",children:"Import data"}),"\n",(0,t.jsxs)(n.p,{children:["The data is on Azure Blob Storage file called ",(0,t.jsx)(n.code,{children:"vTargetMail.csv"})," which we copied in the section above."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Sign into ",(0,t.jsx)(n.a,{href:"https://studio.azureml.net",children:"Azure Machine Learning studio"})," and click on ",(0,t.jsx)(n.strong,{children:"Experiments"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"+NEW"})," on the bottom left of the screen and select ",(0,t.jsx)(n.strong,{children:"Blank Experiment"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Enter a name for your experiment: Targeted Marketing."}),"\n",(0,t.jsxs)(n.li,{children:["Drag ",(0,t.jsx)(n.strong,{children:"Import data"})," module under ",(0,t.jsx)(n.strong,{children:"Data Input and output"})," from the modules pane into the canvas."]}),"\n",(0,t.jsx)(n.li,{children:"Specify the details of your Azure Blob Storage (account name, key and container name) in the Properties pane."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Run the experiment by clicking ",(0,t.jsx)(n.em,{children:"Run"})," under the experiment canvas."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:a(71065).A+"",width:"1019",height:"715"})}),"\n",(0,t.jsxs)(n.p,{children:["After the experiment finishes running successfully, click the output port at the bottom of the Import Data module and select ",(0,t.jsx)(n.em,{children:"Visualize"})," to see the imported data."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:a(64816).A+"",width:"1003",height:"751"})}),"\n",(0,t.jsx)(n.h3,{id:"clean-the-data",children:"Clean the data"}),"\n",(0,t.jsx)(n.p,{children:"To clean the data, drop some columns that are not relevant for the model. To do this:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Drag ",(0,t.jsx)(n.em,{children:"Select Columns in Dataset"})," module under ",(0,t.jsx)(n.em,{children:"Data Transformation < Manipulation"})," into the canvas. Connect this module to the ",(0,t.jsx)(n.em,{children:"Import Data"})," module."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.em,{children:"Launch column selector"})," in Properties pane to specify which columns you wish to drop.\n",(0,t.jsx)(n.img,{src:a(29644).A+"",width:"1069",height:"707"})]}),"\n",(0,t.jsxs)(n.li,{children:["Exclude two columns: ",(0,t.jsx)(n.em,{children:"CustomerAlternateKey"})," and ",(0,t.jsx)(n.em,{children:"GeographyKey"}),".\n",(0,t.jsx)(n.img,{src:a(12533).A+"",width:"990",height:"833"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"build-the-model",children:"Build the model"}),"\n",(0,t.jsx)(n.p,{children:'We will split the data 80-20: 80% to train a machine learning model and 20% to test the model. We will make use of the "Two-Class" algorithms for this binary classification problem.'}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Drag ",(0,t.jsx)(n.strong,{children:"SplitData"})," module into the canvas and connect with 'Select Columns in DataSet'."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the properties pane, enter 0.8 for Fraction of rows in the first output dataset.\n",(0,t.jsx)(n.img,{src:a(10430).A+"",width:"989",height:"835"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Search and drag ",(0,t.jsx)(n.strong,{children:"Two-Class Boosted Decision Tree"})," module into the canvas."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Search and drag ",(0,t.jsx)(n.strong,{children:"Train Model"})," module into the canvas and specify inputs by connecting it to the ",(0,t.jsx)(n.strong,{children:"Two-Class Boosted Decision Tree"})," (ML algorithm) and ",(0,t.jsx)(n.strong,{children:"Split"})," ",(0,t.jsx)(n.strong,{children:"Data"})," (data to train the algorithm on) modules.\n",(0,t.jsx)(n.img,{src:a(98119).A+"",width:"995",height:"836"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Then, click ",(0,t.jsx)(n.em,{children:"Launch column selector"})," in the Properties pane. Select the ",(0,t.jsx)(n.em,{children:"BikeBuyer"})," column as the column to predict.\n",(0,t.jsx)(n.img,{src:a(22952).A+"",width:"992",height:"827"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"score-the-model",children:"Score the model"}),"\n",(0,t.jsx)(n.p,{children:"Now, we will test how the model performs on test data. We will compare the algorithm of our choice with a different algorithm to see which performs better."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Drag ",(0,t.jsx)(n.strong,{children:"Score Model"})," module into the canvas and connect it to ",(0,t.jsx)(n.strong,{children:"Train Model"})," and ",(0,t.jsx)(n.strong,{children:"Split Data"})," modules."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:a(62897).A+"",width:"992",height:"831"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["Search and drag ",(0,t.jsx)(n.strong,{children:"Two-Class Bayes Point Machine"})," into the experiment canvas. We will compare how this algorithm performs in comparison to the Two-Class Boosted Decision Tree."]}),"\n",(0,t.jsx)(n.li,{children:"Copy and Paste the modules Train Model and Score Model in the canvas."}),"\n",(0,t.jsxs)(n.li,{children:["Search and drag ",(0,t.jsx)(n.strong,{children:"Evaluate Model"})," module into the canvas to compare the two algorithms."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Run"})," the experiment.\n",(0,t.jsx)(n.img,{src:a(38234).A+"",width:"1269",height:"830"})]}),"\n",(0,t.jsxs)(n.li,{children:["Click the output port at the bottom of the Evaluate Model module and click Visualize.\n",(0,t.jsx)(n.img,{src:a(59811).A+"",width:"1909",height:"852"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The metrics provided are the ROC curve, precision-recall diagram and lift curve. Looking at these metrics, we can see that the first model performed better than the second one. To look at the what the first model predicted, click on output port of the Score Model and click Visualize."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:a(99588).A+"",width:"1912",height:"844"})}),"\n",(0,t.jsx)(n.p,{children:"You will see two more columns added to your test dataset."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Scored Probabilities: the likelihood that a customer is a bike buyer."}),"\n",(0,t.jsx)(n.li,{children:"Scored Labels: the classification done by the model - bike buyer (1) or not (0). This probability threshold for labeling is set to 50% and can be adjusted."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Comparing the column BikeBuyer (actual) with the Scored Labels (prediction), you can see how well the model has performed. As next steps, you can use this model to make predictions for new customers and publish this model as a web service or write results back to SQL Data Warehouse."}),"\n",(0,t.jsx)(n.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["To learn more about building predictive machine learning models, refer to ",(0,t.jsx)(n.a,{href:"https://azure.microsoft.com/documentation/articles/machine-learning-what-is-machine-learning",children:"Introduction to Machine Learning on Azure"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["For large data set copies, consider using the ",(0,t.jsx)(n.a,{href:"https://docs.teradata.com/reader/p~0sSD4zl4K8YPbEGnM3Rg/TTu_WJMMIpo2TEaxFMFopQ",children:"Teradata Access Module for Azure"})," that interfaces between the Teradata Parallel Transporter load/unload operators and Azure Blob Storage."]}),"\n"]}),"\n","\n",(0,t.jsx)(s.Ay,{})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},55502:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/image17-adb142a5fa91bd1c3e2aa66f186ac3a1.png"},71065:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/image18-a986f38b23377bcf962fec0a4260d976.png"},64816:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/image19-32461094e690957a9be8fd04c17037bf.png"},4782:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/image2-3f52411788566209b944dab8d539a6b4.png"},29644:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/image20-1b2adcb4a4e6ffaa41cf772a1dfaaefe.png"},12533:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/image21-2b7ef95012e1917b998afef3b8253418.png"},10430:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/image22-31fa363cf32ebecbb1ac56a97f16d975.png"},98119:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/image23-62d912ac2dc4ec79c3c2bdaf039d8861.png"},22952:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/image24-962d3ae20feb58844b375c6a9190cb58.png"},62897:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/image25-0ffc066a739aacb8e1f19f4fe309e952.png"},38234:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/image26-db72879d9e4f1a896ee6c5794cfb68a1.png"},59811:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/image27-4931b60bde9a3fbce7b88d21ce6cc21d.png"},99588:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/image28-72dd38c2a702f00f8a7dae980b1a28be.png"},50359:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/image3-b3e810173080d1628e76a01a74554333.png"},1368:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/image4-b99a83142d7461c7a15ee73df9b9b967.png"},22497:(e,n,a)=>{a.d(n,{A:()=>t});const t="data:image/png;base64,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"},8266:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/image6-52fe425e1eaee1fa7ecdd5992f56430e.png"},47123:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/image7-cb2e50439d93eb9a9feb42eecd0c1e7a.png"},28453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>o});var t=a(96540);const i={},r=t.createContext(i);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);