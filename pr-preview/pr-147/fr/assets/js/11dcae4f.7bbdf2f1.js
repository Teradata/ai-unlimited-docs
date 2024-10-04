"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[322],{41269:(e,n,t)=>{t.d(n,{Ay:()=>r,RM:()=>s});var a=t(74848),i=t(28453);const s=[];function o(e){const n={a:"a",admonition:"admonition",p:"p",...(0,i.R)(),...e.components};return(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["If you have any questions or need further assistance, please visit our ",(0,a.jsx)(n.a,{href:"https://support.teradata.com/community",children:"community forum"})," where you can get support and interact with other community members."]})})}function r(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},62680:(e,n,t)=>{t.d(n,{Ay:()=>r,RM:()=>s});var a=t(74848),i=t(28453);const s=[];function o(e){const n={a:"a",admonition:"admonition",p:"p",...(0,i.R)(),...e.components};return(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["If you need a test instance of Vantage, you can provision one for free at ",(0,a.jsx)(n.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})]})})}function r(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},84744:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>_,frontMatter:()=>r,metadata:()=>d,toc:()=>u});var a=t(74848),i=t(28453),s=t(62680),o=t(41269);const r={sidebar_position:3,id:"ml",title:"Train ML models in Vantage using Database Analytic Functions",author:"Krutik Pathak",email:"krutik.pathak@teradata.com",page_last_update:"November 21st, 2023",description:"Train an ML model without leaving Teradata Vantage - use Vantage Database Analytic Functions to create ML models.",keywords:["data warehouses","database analytic functions","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","AI/ML"]},c="Train ML models in Vantage using Database Analytic Functions",d={id:"analyze-data/ml",title:"Train ML models in Vantage using Database Analytic Functions",description:"Train an ML model without leaving Teradata Vantage - use Vantage Database Analytic Functions to create ML models.",source:"@site/quickstarts/analyze-data/ml.md",sourceDirName:"analyze-data",slug:"/analyze-data/ml",permalink:"/pr-preview/pr-147/fr/quickstarts/analyze-data/ml",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"ml",title:"Train ML models in Vantage using Database Analytic Functions",author:"Krutik Pathak",email:"krutik.pathak@teradata.com",page_last_update:"November 21st, 2023",description:"Train an ML model without leaving Teradata Vantage - use Vantage Database Analytic Functions to create ML models.",keywords:["data warehouses","database analytic functions","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","AI/ML"]},sidebar:"tutorialSidebar",previous:{title:"Deploy Teradata Jupyter extensions to JupyterHub",permalink:"/pr-preview/pr-147/fr/quickstarts/analyze-data/local-jupyter-hub"},next:{title:"Run scripts on Vantage",permalink:"/pr-preview/pr-147/fr/quickstarts/analyze-data/sto"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},...s.RM,{value:"Load the sample data",id:"load-the-sample-data",level:2},{value:"Understand the sample data",id:"understand-the-sample-data",level:2},{value:"Preparing the Dataset",id:"preparing-the-dataset",level:2},{value:"Feature Engineering",id:"feature-engineering",level:2},{value:"TD_OneHotEncodingFit",id:"td_onehotencodingfit",level:3},{value:"TD_ScaleFit",id:"td_scalefit",level:3},{value:"TD_ColumnTransformer",id:"td_columntransformer",level:3},{value:"Train Test Split",id:"train-test-split",level:2},{value:"Training with Generalized Linear Model",id:"training-with-generalized-linear-model",level:2},{value:"Scoring on Testing Dataset",id:"scoring-on-testing-dataset",level:2},{value:"Model Evaluation",id:"model-evaluation",level:2},{value:"Summary",id:"summary",level:2},{value:"Further reading",id:"further-reading",level:2},...o.RM];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"train-ml-models-in-vantage-using-database-analytic-functions",children:"Train ML models in Vantage using Database Analytic Functions"}),"\n",(0,a.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)(n.p,{children:"There are situations when you want to quickly validate a machine learning model idea. You have a model type in mind. You don't want to operationalize with an ML pipeline just yet. You just want to test out if the relationship you had in mind exists. Also, sometimes even your production deployment doesn't require constant relearning with MLops. In such cases, you can use Database Analytic Functions for feature engineering, train different ML models, score your models, and evaluate your model on different model evaluation functions."}),"\n",(0,a.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsx)(n.p,{children:"You need access to a Teradata Vantage instance."}),"\n",(0,a.jsx)(s.Ay,{}),"\n",(0,a.jsx)(n.h2,{id:"load-the-sample-data",children:"Load the sample data"}),"\n",(0,a.jsxs)(n.p,{children:["Here in this example we will be using the sample data from ",(0,a.jsx)(n.code,{children:"val"})," database. We will use the ",(0,a.jsx)(n.code,{children:"accounts"}),", ",(0,a.jsx)(n.code,{children:"customer"}),", and ",(0,a.jsx)(n.code,{children:"transactions"})," tables. We will be creating some tables in the process and you might face some issues while creating tables in ",(0,a.jsx)(n.code,{children:"val"})," database, so let's create our own database ",(0,a.jsx)(n.code,{children:"td_analytics_functions_demo"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"CREATE DATABASE td_analytics_functions_demo\nAS PERMANENT = 110e6;\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"You must have CREATE TABLE permissions on the Database where you want to use Database Analytics Functions."})}),"\n",(0,a.jsxs)(n.p,{children:["Let's now create ",(0,a.jsx)(n.code,{children:"accounts"}),", ",(0,a.jsx)(n.code,{children:"customer"})," and ",(0,a.jsx)(n.code,{children:"transactions"})," tables in our database ",(0,a.jsx)(n.code,{children:"td_analytics_functions_demo"})," from the corresponding tables in ",(0,a.jsx)(n.code,{children:"val"})," database."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"DATABASE td_analytics_functions_demo;\n\nCREATE TABLE customer AS (\nSELECT * FROM val.customer\n) WITH DATA;\n\nCREATE TABLE accounts AS (\nSELECT * FROM val.accounts\n) WITH DATA;\n\nCREATE TABLE transactions AS (\nSELECT * FROM val.transactions\n) WITH DATA;\n"})}),"\n",(0,a.jsx)(n.h2,{id:"understand-the-sample-data",children:"Understand the sample data"}),"\n",(0,a.jsxs)(n.p,{children:["Now, that we have our sample tables loaded into ",(0,a.jsx)(n.code,{children:"td_analytics_functions_demo"}),", let's explore the data. It's a simplistic, fictitious dataset of banking customers (700-ish rows), Accounts (1400-ish rows) and Transactions (77K-ish rows). They are related to each other in the following ways:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Banking Model",src:t(54575).A+"",width:"1946",height:"610"})}),"\n",(0,a.jsx)(n.p,{children:"In later parts of this how-to we are going to explore if we can build a model that predicts average monthly balance that a banking customer has on their credit card based on all non-credit card related variables in the tables."}),"\n",(0,a.jsx)(n.h2,{id:"preparing-the-dataset",children:"Preparing the Dataset"}),"\n",(0,a.jsx)(n.p,{children:"We have data in three different tables that we want to join and create features. Let's start by creating a joined table."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"-- Create a consolidated joined_table from customer, accounts and transactions table\nCREATE TABLE td_analytics_functions_demo.joined_table AS (\n    SELECT\n        T1.cust_id  AS cust_id\n       ,MIN(T1.income) AS tot_income\n       ,MIN(T1.age) AS tot_age\n       ,MIN(T1.years_with_bank) AS tot_cust_years\n       ,MIN(T1.nbr_children) AS tot_children\n       ,MIN(T1.marital_status)AS marital_status\n       ,MIN(T1.gender) AS gender\n       ,MAX(T1.state_code) AS state_code\n       ,AVG(CASE WHEN T2.acct_type = 'CK' THEN T2.starting_balance+T2.ending_balance ELSE 0 END) AS ck_avg_bal\n       ,AVG(CASE WHEN T2.acct_type = 'SV' THEN T2.starting_balance+T2.ending_balance ELSE 0 END) AS sv_avg_bal\n       ,AVG(CASE WHEN T2.acct_type = 'CC' THEN T2.starting_balance+T2.ending_balance ELSE 0 END) AS cc_avg_bal\n       ,AVG(CASE WHEN T2.acct_type = 'CK' THEN T3.principal_amt+T3.interest_amt ELSE 0 END) AS ck_avg_tran_amt\n       ,AVG(CASE WHEN T2.acct_type = 'SV' THEN T3.principal_amt+T3.interest_amt ELSE 0 END) AS sv_avg_tran_amt\n       ,AVG(CASE WHEN T2.acct_type = 'CC' THEN T3.principal_amt+T3.interest_amt ELSE 0 END) AS cc_avg_tran_amt\n       ,COUNT(CASE WHEN ((EXTRACT(MONTH FROM T3.tran_date) + 2) / 3) = 1 THEN T3.tran_id ELSE NULL END) AS q1_trans_cnt\n       ,COUNT(CASE WHEN ((EXTRACT(MONTH FROM T3.tran_date) + 2) / 3) = 2 THEN T3.tran_id ELSE NULL END) AS q2_trans_cnt\n       ,COUNT(CASE WHEN ((EXTRACT(MONTH FROM T3.tran_date) + 2) / 3) = 3 THEN T3.tran_id ELSE NULL END) AS q3_trans_cnt\n       ,COUNT(CASE WHEN ((EXTRACT(MONTH FROM T3.tran_date) + 2) / 3) = 4 THEN T3.tran_id ELSE NULL END) AS q4_trans_cnt\n    FROM Customer AS T1\n        LEFT OUTER JOIN Accounts AS T2\n            ON T1.cust_id = T2.cust_id\n        LEFT OUTER JOIN Transactions AS T3\n            ON T2.acct_nbr = T3.acct_nbr\nGROUP BY T1.cust_id) WITH DATA UNIQUE PRIMARY INDEX (cust_id);\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Let's now see how our data looks. The dataset has both categorical and continuous features or independent variables. In our case, the dependent variable is ",(0,a.jsx)(n.code,{children:"cc_avg_bal"})," which is customer's average credit card balance."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Joined Table",src:t(62526).A+"",width:"1487",height:"342"})}),"\n",(0,a.jsx)(n.h2,{id:"feature-engineering",children:"Feature Engineering"}),"\n",(0,a.jsxs)(n.p,{children:["On looking at the data we see that there are several features that we can take into consideration for predicting the ",(0,a.jsx)(n.code,{children:"cc_avg_bal"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"td_onehotencodingfit",children:"TD_OneHotEncodingFit"}),"\n",(0,a.jsxs)(n.p,{children:["As we have some categorical features in our dataset such as ",(0,a.jsx)(n.code,{children:"gender"}),", ",(0,a.jsx)(n.code,{children:"marital status"})," and ",(0,a.jsx)(n.code,{children:"state code"}),". We will leverage the Database Analytics function ",(0,a.jsx)(n.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Database-Analytic-Functions/Feature-Engineering-Transform-Functions/TD_OneHotEncodingFit",children:"TD_OneHotEncodingFit"})," to encode categories to one-hot numeric vectors."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"CREATE VIEW td_analytics_functions_demo.one_hot_encoding_joined_table_input AS (\n  SELECT * FROM TD_OneHotEncodingFit(\n    ON td_analytics_functions_demo.joined_table AS InputTable\n    USING\n    IsInputDense ('true')\n    TargetColumn ('gender','marital_status','state_code')\n    CategoryCounts(2,4,33)\nApproach('Auto')\n) AS dt\n);\n"})}),"\n",(0,a.jsx)(n.h3,{id:"td_scalefit",children:"TD_ScaleFit"}),"\n",(0,a.jsxs)(n.p,{children:["If we look at the data, some columns like ",(0,a.jsx)(n.code,{children:"tot_income"}),", ",(0,a.jsx)(n.code,{children:"tot_age"}),", ",(0,a.jsx)(n.code,{children:"ck_avg_bal"})," have values in different ranges. For the optimization algorithms like gradient descent it is important to normalize the values to the same scale for faster convergence, scale consistency and enhanced model performance. We will leverage ",(0,a.jsx)(n.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Database-Analytic-Functions/Feature-Engineering-Transform-Functions/TD_ScaleFit",children:"TD_ScaleFit"})," function to normalize values in different scales."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:" CREATE VIEW td_analytics_functions_demo.scale_fit_joined_table_input AS (\n  SELECT * FROM TD_ScaleFit(\n    ON td_analytics_functions_demo.joined_table AS InputTable\n    USING\n    TargetColumns('tot_income','q1_trans_cnt','q2_trans_cnt','q3_trans_cnt','q4_trans_cnt','ck_avg_bal','sv_avg_bal','ck_avg_tran_amt', 'sv_avg_tran_amt', 'cc_avg_tran_amt')\n    ScaleMethod('RANGE')\n) AS dt\n);\n"})}),"\n",(0,a.jsx)(n.h3,{id:"td_columntransformer",children:"TD_ColumnTransformer"}),"\n",(0,a.jsxs)(n.p,{children:['Teradata\'s Database Analytic Functions typically operate in pairs for data transformations. The first step is dedicated to "fitting" the data. Subsequently, the second function utilizes the parameters derived from the fitting process to execute the actual transformation on the data. The ',(0,a.jsx)(n.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Database-Analytic-Functions/Feature-Engineering-Transform-Functions/TD_ColumnTransformer",children:"TD_ColumnTransformer"}),"takes the FIT tables to the function and transforms the input table columns in single operation."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"-- Using a consolidated transform function\nCREATE TABLE td_analytics_functions_demo.feature_enriched_accounts_consolidated AS (\nSELECT * FROM TD_ColumnTransformer(\nON joined_table AS InputTable\nON one_hot_encoding_joined_table_input AS OneHotEncodingFitTable DIMENSION\nON scale_fit_joined_table_input AS ScaleFitTable DIMENSION\n) as dt \n) WITH DATA;\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Once we perform the transformation we can see our categorical columns one-hot encoded and numeric values scaled as can be seen in the image below. For ex: ",(0,a.jsx)(n.code,{children:"tot_income"})," is in the range [0,1], ",(0,a.jsx)(n.code,{children:"gender"})," is one-hot encoded to ",(0,a.jsx)(n.code,{children:"gender_0"}),", ",(0,a.jsx)(n.code,{children:"gender_1"}),", ",(0,a.jsx)(n.code,{children:"gender_other"}),"."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Total Income Scaled",src:t(102).A+"",width:"621",height:"764"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Gender One Hot Encoded",src:t(11382).A+"",width:"812",height:"732"})}),"\n",(0,a.jsx)(n.h2,{id:"train-test-split",children:"Train Test Split"}),"\n",(0,a.jsxs)(n.p,{children:["As we have our datatset ready with features scaled and encoded, now let's split our dataset into training (75%) and testing (25%) parts. Teradata's Database Analytic Functions provide ",(0,a.jsx)(n.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Database-Analytic-Functions/Model-Evaluation-Functions/TD_TrainTestSplit",children:"TD_TrainTestSplit"})," function that we'll leverage to split our dataset."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"-- Train Test Split on Input table \nCREATE VIEW td_analytics_functions_demo.train_test_split AS (\nSELECT * FROM TD_TrainTestSplit(\nON td_analytics_functions_demo.feature_enriched_accounts_consolidated AS InputTable\nUSING\nIDColumn('cust_id')\ntrainSize(0.75)\ntestSize(0.25)\nSeed (42)\n) AS dt\n);\n"})}),"\n",(0,a.jsxs)(n.p,{children:["As can be seen in the image below, the function adds a new column ",(0,a.jsx)(n.code,{children:"TD_IsTrainRow"}),"."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Train Row Column",src:t(89257).A+"",width:"836",height:"394"})}),"\n",(0,a.jsxs)(n.p,{children:["We'll use ",(0,a.jsx)(n.code,{children:"TD_IsTrainRow"})," to create two tables, one for training and other for testing."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"-- Creating Training Table\nCREATE TABLE td_analytics_functions_demo.training_table AS (\n  SELECT * FROM td_analytics_functions_demo.train_test_split\n  WHERE TD_IsTrainRow = 1\n) WITH DATA;\n\n-- Creating Testing Table\nCREATE TABLE td_analytics_functions_demo.testing_table AS (\n  SELECT * FROM td_analytics_functions_demo.train_test_split\n  WHERE TD_IsTrainRow = 0\n) WITH DATA;\n"})}),"\n",(0,a.jsx)(n.h2,{id:"training-with-generalized-linear-model",children:"Training with Generalized Linear Model"}),"\n",(0,a.jsxs)(n.p,{children:["We will now use ",(0,a.jsx)(n.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Database-Analytic-Functions/Model-Training-Functions/TD_GLM",children:"TD_GLM"})," Database Analytic Function to train on our training dataset. The ",(0,a.jsx)(n.code,{children:"TD_GLM"})," function is a generalized linear model (GLM) that performs regression and classification analysis on data sets. Here we have used a bunch of input columns such as ",(0,a.jsx)(n.code,{children:"tot_income"}),", ",(0,a.jsx)(n.code,{children:"ck_avg_bal"}),",",(0,a.jsx)(n.code,{children:"cc_avg_tran_amt"}),", one-hot encoded values for marital status, gender and states. ",(0,a.jsx)(n.code,{children:"cc_avg_bal"})," is our dependent or response column which is continous and hence is a regression problem. We use ",(0,a.jsx)(n.code,{children:"Family"})," as ",(0,a.jsx)(n.code,{children:"Gaussian"})," for regression and ",(0,a.jsx)(n.code,{children:"Binomial"})," for classification."]}),"\n",(0,a.jsxs)(n.p,{children:["The parameter ",(0,a.jsx)(n.code,{children:"Tolerance"})," signifies minimum improvement required in prediction accuracy for model to stop the iterations and ",(0,a.jsx)(n.code,{children:"MaxIterNum"})," signifies the maximum number of iterations allowed. The model concludes training upon whichever condition is met first. For example in the example below the model is ",(0,a.jsx)(n.code,{children:"CONVERGED"})," after 58 iterations."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"-- Training the GLM_Model with Training Dataset\nCREATE TABLE td_analytics_functions_demo.GLM_model_training AS (\nSELECT * FROM TD_GLM (\n  ON td_analytics_functions_demo.training_table AS InputTable\n  USING\n  InputColumns('tot_income','ck_avg_bal','cc_avg_tran_amt','[19:26]')\n  ResponseColumn('cc_avg_bal')\n  Family ('Gaussian')\n  MaxIterNum (300)\n  Tolerance (0.001)\n  Intercept ('true')\n) AS dt\n) WITH DATA;\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"TTrained GLM",src:t(21067).A+"",width:"1412",height:"1425"})}),"\n",(0,a.jsx)(n.h2,{id:"scoring-on-testing-dataset",children:"Scoring on Testing Dataset"}),"\n",(0,a.jsxs)(n.p,{children:["We will now use our model ",(0,a.jsx)(n.code,{children:"GLM_model_training"})," to score our testing dataset ",(0,a.jsx)(n.code,{children:"testing_table"})," using link:",(0,a.jsx)(n.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Database-Analytic-Functions/Model-Scoring-Functions/TD_GLMPredict",children:"TD_GLMPredict"}),"Database Analytic Function."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"-- Scoring the GLM_Model with Testing Dataset\nCREATE TABLE td_analytics_functions_demo.GLM_model_test_prediction AS (\nSELECT * from TD_GLMPredict (\nON td_analytics_functions_demo.testing_table AS InputTable\nON td_analytics_functions_demo.GLM_model_training AS ModelTable DIMENSION\nUSING\nIDColumn ('cust_id')\nAccumulate('cc_avg_bal')\n) AS dt\n) WITH DATA;\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Scored GLM",src:t(7714).A+"",width:"846",height:"1068"})}),"\n",(0,a.jsx)(n.h2,{id:"model-evaluation",children:"Model Evaluation"}),"\n",(0,a.jsxs)(n.p,{children:["Finally, we evaluate our model on the scored results. Here we are using ",(0,a.jsx)(n.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Database-Analytic-Functions/Model-Evaluation-Functions/TD_RegressionEvaluator",children:"TD_RegressionEvaluator"})," function. The model can be evaluated based on parameters such as ",(0,a.jsx)(n.code,{children:"R2"}),", ",(0,a.jsx)(n.code,{children:"RMSE"}),", ",(0,a.jsx)(n.code,{children:"F_score"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"-- Evaluating the model\nSELECT * FROM TD_RegressionEvaluator(\nON td_analytics_functions_demo.GLM_model_test_prediction AS InputTable\nUSING\nObservationColumn('cc_avg_bal')\nPredictionColumn('prediction')\nMetrics('RMSE','MAE','R2')\n) AS dt;\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Evaluated GLM",src:t(12373).A+"",width:"845",height:"193"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"The purpose of this how-to is not to describe feature engineering but to demonstrate how we can leverage different Database Analytic Functions in Vantage. The model results might not be optimal and the process to make the best model is beyond the scope of this article."})}),"\n",(0,a.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,a.jsxs)(n.p,{children:["In this quick start we have learned how to create ML models using Teradata Database Analytic Functions. We built our own database ",(0,a.jsx)(n.code,{children:"td_analytics_functions_demo"})," with ",(0,a.jsx)(n.code,{children:"customer"}),",",(0,a.jsx)(n.code,{children:"accounts"}),", ",(0,a.jsx)(n.code,{children:"transactions"})," data from ",(0,a.jsx)(n.code,{children:"val"})," database. We performed feature engineering by transforming the columns using ",(0,a.jsx)(n.code,{children:"TD_OneHotEncodingFit"}),", ",(0,a.jsx)(n.code,{children:"TD_ScaleFit"})," and ",(0,a.jsx)(n.code,{children:"TD_ColumnTransformer"}),". We then used ",(0,a.jsx)(n.code,{children:"TD_TrainTestSplit"})," for train test split. We trained our training dataset with ",(0,a.jsx)(n.code,{children:"TD_GLM"})," model and scored our testing dataset. Finally we evaluated our scored results using ",(0,a.jsx)(n.code,{children:"TD_RegressionEvaluator"})," function."]}),"\n",(0,a.jsx)(n.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Database-Analytic-Functions/Introduction-to-Analytics-Database-Analytic-Functions",children:"Vantage Database Analytic Functions User Guide"})}),"\n"]}),"\n",(0,a.jsx)(o.Ay,{})]})}function _(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},54575:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/banking.model-0ab1909b684d9d17ae4ce6cb938b518e.png"},62526:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/joined_table_ml-59f1ee87453ca799378fc6ce0619de40.png"},11382:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/ml_gender_hot_encoded-de559f0d2ae1d830b0d4d3be449903a4.png"},12373:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/ml_model_evaluated-2f24d6396439474c2baee2cff0491ad8.png"},7714:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/ml_model_scored-67189abf381ad7a8938a692e6fee36db.png"},21067:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/ml_model_trained-a83d2ccc49caf1fc12662b81750e9e7b.png"},102:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/ml_tot_income_scaled-2aeb4d32e2171d694ea96ff1dadf413f.png"},89257:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/ml_train_col-ce82292f0f5ba4992d49dfc9a32522ca.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var a=t(96540);const i={},s=a.createContext(i);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);