"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[2309],{77692:(e,n,a)=>{a.d(n,{Ay:()=>d,RM:()=>o});var t=a(74848),s=a(28453);const o=[];function i(e){const n={a:"a",admonition:"admonition",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",...(0,s.R)(),...e.components};return(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsxs)(n.p,{children:["Si tiene alguna pregunta o necesita m\xe1s ayuda, visite nuestro ",(0,t.jsx)(n.a,{href:"https://support.teradata.com/community",children:"foro de la comunidad"})," donde podr\xe1 obtener ayuda e interactuar con otros miembros de la comunidad."]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},23961:(e,n,a)=>{a.d(n,{Ay:()=>d,RM:()=>o});var t=a(74848),s=a(28453);const o=[];function i(e){const n={a:"a",admonition:"admonition",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",...(0,s.R)(),...e.components};return(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsxs)(n.p,{children:["Si necesita una instancia de prueba de Vantage, puede obtener una de forma gratuita en ",(0,t.jsx)(n.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},99781:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>_,frontMatter:()=>d,metadata:()=>c,toc:()=>u});var t=a(74848),s=a(28453),o=a(23961),i=a(77692);const d={sidebar_position:3,id:"ml",title:"Entrenar modelos de ML en Vantage usando funciones anal\xedticas de bases de datos",author:"Krutik Pathak",email:"krutik.pathak@teradata.com",page_last_update:"November 21st, 2023",description:"Entrenar un modelo de ML sin salir de Teradata Vantage: utilice las funciones anal\xedticas de base de datos de Vantage para crear modelos de ML.",keywords:["data warehouses","database analytic functions","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","AI/ML"]},r="Entrenar modelos de ML en Vantage usando funciones anal\xedticas de bases de datos",c={id:"analyze-data/ml",title:"Entrenar modelos de ML en Vantage usando funciones anal\xedticas de bases de datos",description:"Entrenar un modelo de ML sin salir de Teradata Vantage: utilice las funciones anal\xedticas de base de datos de Vantage para crear modelos de ML.",source:"@site/i18n/es/docusaurus-plugin-content-docs-quickstarts/current/analyze-data/ml.md",sourceDirName:"analyze-data",slug:"/analyze-data/ml",permalink:"/pr-preview/pr-145/es/quickstarts/analyze-data/ml",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"ml",title:"Entrenar modelos de ML en Vantage usando funciones anal\xedticas de bases de datos",author:"Krutik Pathak",email:"krutik.pathak@teradata.com",page_last_update:"November 21st, 2023",description:"Entrenar un modelo de ML sin salir de Teradata Vantage: utilice las funciones anal\xedticas de base de datos de Vantage para crear modelos de ML.",keywords:["data warehouses","database analytic functions","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","AI/ML"]},sidebar:"tutorialSidebar",previous:{title:"Implementar extensiones de Teradata Jupyter en JupyterHub",permalink:"/pr-preview/pr-145/es/quickstarts/analyze-data/local-jupyter-hub"},next:{title:"Ejecutar scripts en Vantage",permalink:"/pr-preview/pr-145/es/quickstarts/analyze-data/sto"}},l={},u=[{value:"Informaci\xf3n general",id:"informaci\xf3n-general",level:2},{value:"Prerrequisitos",id:"prerrequisitos",level:2},...o.RM,{value:"Cargar datos de muestra",id:"cargar-datos-de-muestra",level:2},{value:"Comprender los datos de muestra",id:"comprender-los-datos-de-muestra",level:2},{value:"Preparar el conjunto de datos",id:"preparar-el-conjunto-de-datos",level:2},{value:"Ingenier\xeda de caracter\xedsticas",id:"ingenier\xeda-de-caracter\xedsticas",level:2},{value:"TD_OneHotEncodingFit",id:"td_onehotencodingfit",level:3},{value:"TD_ScaleFit",id:"td_scalefit",level:3},{value:"TD_ColumnTransformer",id:"td_columntransformer",level:3},{value:"Divisi\xf3n en entrenamiento y pruebas",id:"divisi\xf3n-en-entrenamiento-y-pruebas",level:2},{value:"Entrenamiento con modelo lineal generalizado",id:"entrenamiento-con-modelo-lineal-generalizado",level:2},{value:"Puntuaci\xf3n en el conjunto de datos de prueba",id:"puntuaci\xf3n-en-el-conjunto-de-datos-de-prueba",level:2},{value:"Evaluaci\xf3n del modelo",id:"evaluaci\xf3n-del-modelo",level:2},{value:"Resumen",id:"resumen",level:2},{value:"Lectura adicional",id:"lectura-adicional",level:2},...i.RM];function m(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"entrenar-modelos-de-ml-en-vantage-usando-funciones-anal\xedticas-de-bases-de-datos",children:"Entrenar modelos de ML en Vantage usando funciones anal\xedticas de bases de datos"}),"\n",(0,t.jsx)(n.h2,{id:"informaci\xf3n-general",children:"Informaci\xf3n general"}),"\n",(0,t.jsx)(n.p,{children:"Hay situaciones en las que desea validar r\xe1pidamente una idea de modelo de aprendizaje autom\xe1tico. Tiene un tipo de modelo en mente. No desea poner en funcionamiento una canalizaci\xf3n de ML todav\xeda. Solo quiere probar si la relaci\xf3n que ten\xeda en mente existe. Adem\xe1s, a veces incluso su implementaci\xf3n de producci\xf3n no requiere un reaprendizaje constante con MLops. En tales casos, puede utilizar funciones anal\xedticas de bases de datos para ingenier\xeda de caracter\xedsticas, entrenar diferentes modelos de ML, calificar sus modelos y evaluar su modelo en diferentes funciones de evaluaci\xf3n de modelos."}),"\n",(0,t.jsx)(n.h2,{id:"prerrequisitos",children:"Prerrequisitos"}),"\n",(0,t.jsx)(n.p,{children:"Necesita acceso a una instancia de Teradata Vantage."}),"\n",(0,t.jsx)(o.Ay,{}),"\n",(0,t.jsx)(n.h2,{id:"cargar-datos-de-muestra",children:"Cargar datos de muestra"}),"\n",(0,t.jsxs)(n.p,{children:["Aqu\xed, en este ejemplo, utilizaremos los datos de muestra de la base de datos ",(0,t.jsx)(n.code,{children:"val"}),". Usaremos las tablas ",(0,t.jsx)(n.code,{children:"accounts"}),", ",(0,t.jsx)(n.code,{children:"customer"})," y ",(0,t.jsx)(n.code,{children:"transactions"}),". Crearemos algunas tablas en el proceso y es posible que surjan algunos problemas al crear tablas en la base de datos ",(0,t.jsx)(n.code,{children:"val"}),", as\xed que vamos a crear nuestra propia base de datos ",(0,t.jsx)(n.code,{children:"td_analytics_functions_demo"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"CREATE DATABASE td_analytics_functions_demo\nAS PERMANENT = 110e6;\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Debe tener permisos CREATE TABLE en la base de datos donde desea utilizar las funciones de an\xe1lisis de la base de datos."})}),"\n",(0,t.jsxs)(n.p,{children:["Ahora creemos tablas ",(0,t.jsx)(n.code,{children:"accounts"}),", ",(0,t.jsx)(n.code,{children:"customer"})," y ",(0,t.jsx)(n.code,{children:"transactions"})," en nuestra base de datos ",(0,t.jsx)(n.code,{children:"td_analytics_functions_demo"})," a partir de las tablas correspondientes en la base de datos ",(0,t.jsx)(n.code,{children:"val"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"DATABASE td_analytics_functions_demo;\n\nCREATE TABLE customer AS (\nSELECT * FROM val.customer\n) WITH DATA;\n\nCREATE TABLE accounts AS (\nSELECT * FROM val.accounts\n) WITH DATA;\n\nCREATE TABLE transactions AS (\nSELECT * FROM val.transactions\n) WITH DATA;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"comprender-los-datos-de-muestra",children:"Comprender los datos de muestra"}),"\n",(0,t.jsxs)(n.p,{children:["Ahora que tenemos nuestras tablas de muestra cargadas en ",(0,t.jsx)(n.code,{children:"td_analytics_functions_demo"}),", exploremos los datos. Es un conjunto de datos simplista y ficticio de clientes bancarios (700 filas), cuentas (1400 filas) y transacciones (77K filas). Est\xe1n relacionados entre s\xed de las siguientes maneras:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Modelo bancario",src:a(37130).A+"",width:"1946",height:"610"})}),"\n",(0,t.jsx)(n.p,{children:"En partes posteriores de este tutorial, exploraremos si podemos construir un modelo que prediga el saldo mensual promedio que un cliente bancario tiene en su tarjeta de cr\xe9dito en funci\xf3n de todas las variables no relacionadas con la tarjeta de cr\xe9dito en las tablas."}),"\n",(0,t.jsx)(n.h2,{id:"preparar-el-conjunto-de-datos",children:"Preparar el conjunto de datos"}),"\n",(0,t.jsx)(n.p,{children:"Tenemos datos en tres tablas diferentes que queremos unir y crear funciones. Comencemos creando una tabla unida."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"-- Create a consolidated joined_table from customer, accounts and transactions table\nCREATE TABLE td_analytics_functions_demo.joined_table AS (\n    SELECT\n        T1.cust_id  AS cust_id\n       ,MIN(T1.income) AS tot_income\n       ,MIN(T1.age) AS tot_age\n       ,MIN(T1.years_with_bank) AS tot_cust_years\n       ,MIN(T1.nbr_children) AS tot_children\n       ,MIN(T1.marital_status)AS marital_status\n       ,MIN(T1.gender) AS gender\n       ,MAX(T1.state_code) AS state_code\n       ,AVG(CASE WHEN T2.acct_type = 'CK' THEN T2.starting_balance+T2.ending_balance ELSE 0 END) AS ck_avg_bal\n       ,AVG(CASE WHEN T2.acct_type = 'SV' THEN T2.starting_balance+T2.ending_balance ELSE 0 END) AS sv_avg_bal\n       ,AVG(CASE WHEN T2.acct_type = 'CC' THEN T2.starting_balance+T2.ending_balance ELSE 0 END) AS cc_avg_bal\n       ,AVG(CASE WHEN T2.acct_type = 'CK' THEN T3.principal_amt+T3.interest_amt ELSE 0 END) AS ck_avg_tran_amt\n       ,AVG(CASE WHEN T2.acct_type = 'SV' THEN T3.principal_amt+T3.interest_amt ELSE 0 END) AS sv_avg_tran_amt\n       ,AVG(CASE WHEN T2.acct_type = 'CC' THEN T3.principal_amt+T3.interest_amt ELSE 0 END) AS cc_avg_tran_amt\n       ,COUNT(CASE WHEN ((EXTRACT(MONTH FROM T3.tran_date) + 2) / 3) = 1 THEN T3.tran_id ELSE NULL END) AS q1_trans_cnt\n       ,COUNT(CASE WHEN ((EXTRACT(MONTH FROM T3.tran_date) + 2) / 3) = 2 THEN T3.tran_id ELSE NULL END) AS q2_trans_cnt\n       ,COUNT(CASE WHEN ((EXTRACT(MONTH FROM T3.tran_date) + 2) / 3) = 3 THEN T3.tran_id ELSE NULL END) AS q3_trans_cnt\n       ,COUNT(CASE WHEN ((EXTRACT(MONTH FROM T3.tran_date) + 2) / 3) = 4 THEN T3.tran_id ELSE NULL END) AS q4_trans_cnt\n    FROM Customer AS T1\n        LEFT OUTER JOIN Accounts AS T2\n            ON T1.cust_id = T2.cust_id\n        LEFT OUTER JOIN Transactions AS T3\n            ON T2.acct_nbr = T3.acct_nbr\nGROUP BY T1.cust_id) WITH DATA UNIQUE PRIMARY INDEX (cust_id);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Veamos ahora c\xf3mo se ven nuestros datos. El conjunto de datos tiene caracter\xedsticas tanto categ\xf3ricas como continuas o variables independientes. En nuestro caso, la variable dependiente es ",(0,t.jsx)(n.code,{children:"cc_avg_bal"}),", que es el saldo promedio de la tarjeta de cr\xe9dito del cliente."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Tabla unida",src:a(76355).A+"",width:"1487",height:"342"})}),"\n",(0,t.jsx)(n.h2,{id:"ingenier\xeda-de-caracter\xedsticas",children:"Ingenier\xeda de caracter\xedsticas"}),"\n",(0,t.jsxs)(n.p,{children:["Al observar los datos, vemos que hay varias caracter\xedsticas que podemos tener en cuenta para predecir el ",(0,t.jsx)(n.code,{children:"cc_avg_bal"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"td_onehotencodingfit",children:"TD_OneHotEncodingFit"}),"\n",(0,t.jsxs)(n.p,{children:["Dado que tenemos algunas caracter\xedsticas categ\xf3ricas en nuestro conjunto de datos, como ",(0,t.jsx)(n.code,{children:"gender"}),", ",(0,t.jsx)(n.code,{children:"marital status"})," y ",(0,t.jsx)(n.code,{children:"state code"}),", aprovecharemos la funci\xf3n de anal\xedticas de base de datos ",(0,t.jsx)(n.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Database-Analytic-Functions/Feature-Engineering-Transform-Functions/TD_OneHotEncodingFit",children:"TD_OneHotEncodingFit"})," para codificar categor\xedas en vectores num\xe9ricos one-hot."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"CREATE VIEW td_analytics_functions_demo.one_hot_encoding_joined_table_input AS (\n  SELECT * FROM TD_OneHotEncodingFit(\n    ON td_analytics_functions_demo.joined_table AS InputTable\n    USING\n    IsInputDense ('true')\n    TargetColumn ('gender','marital_status','state_code')\n    CategoryCounts(2,4,33)\nApproach('Auto')\n) AS dt\n);\n"})}),"\n",(0,t.jsx)(n.h3,{id:"td_scalefit",children:"TD_ScaleFit"}),"\n",(0,t.jsxs)(n.p,{children:["Si miramos los datos, algunas columnas como ",(0,t.jsx)(n.code,{children:"tot_income"}),", ",(0,t.jsx)(n.code,{children:"tot_age"})," y ",(0,t.jsx)(n.code,{children:"ck_avg_bal"})," tienen valores en diferentes rangos. Para los algoritmos de optimizaci\xf3n como el descenso de gradiente, es importante normalizar los valores a la misma escala para una convergencia m\xe1s r\xe1pida, una coherencia de escala y un mejor rendimiento del modelo. Aprovecharemos la funci\xf3n ",(0,t.jsx)(n.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Database-Analytic-Functions/Feature-Engineering-Transform-Functions/TD_ScaleFit",children:"TD_ScaleFit"})," para normalizar valores en diferentes escalas."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:" CREATE VIEW td_analytics_functions_demo.scale_fit_joined_table_input AS (\n  SELECT * FROM TD_ScaleFit(\n    ON td_analytics_functions_demo.joined_table AS InputTable\n    USING\n    TargetColumns('tot_income','q1_trans_cnt','q2_trans_cnt','q3_trans_cnt','q4_trans_cnt','ck_avg_bal','sv_avg_bal','ck_avg_tran_amt', 'sv_avg_tran_amt', 'cc_avg_tran_amt')\n    ScaleMethod('RANGE')\n) AS dt\n);\n"})}),"\n",(0,t.jsx)(n.h3,{id:"td_columntransformer",children:"TD_ColumnTransformer"}),"\n",(0,t.jsxs)(n.p,{children:['Las funciones anal\xedticas de bases de datos de Teradata normalmente operan en pares para transformaciones de datos. El paso inicial est\xe1 dedicado a "ajustar" los datos. Posteriormente, la segunda funci\xf3n utiliza los par\xe1metros derivados del proceso de ajuste para ejecutar la transformaci\xf3n real de los datos. ',(0,t.jsx)(n.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Database-Analytic-Functions/Feature-Engineering-Transform-Functions/TD_ColumnTransformer",children:"TD_ColumnTransformer"})," lleva las tablas FIT a la funci\xf3n y transforma las columnas de la tabla de entrada en una sola operaci\xf3n."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"-- Using a consolidated transform function\nCREATE TABLE td_analytics_functions_demo.feature_enriched_accounts_consolidated AS (\nSELECT * FROM TD_ColumnTransformer(\nON joined_table AS InputTable\nON one_hot_encoding_joined_table_input AS OneHotEncodingFitTable DIMENSION\nON scale_fit_joined_table_input AS ScaleFitTable DIMENSION\n) as dt \n) WITH DATA;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Una vez que realizamos la transformaci\xf3n, podemos ver nuestras columnas categ\xf3ricas con codificaci\xf3n one-hot y valores num\xe9ricos escalados como se puede ver en la imagen a continuaci\xf3n. Por ejemplo: ",(0,t.jsx)(n.code,{children:"tot_income"})," est\xe1 en el rango [0,1], ",(0,t.jsx)(n.code,{children:"gender"})," tiene codificaci\xf3n one-hot en ",(0,t.jsx)(n.code,{children:"gender_0"}),", ",(0,t.jsx)(n.code,{children:"gender_1"}),", ",(0,t.jsx)(n.code,{children:"gender_other"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Ingresos totales escalados",src:a(26157).A+"",width:"621",height:"764"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"G\xe9nero con codificaci\xf3n one-hot",src:a(21627).A+"",width:"812",height:"732"})}),"\n",(0,t.jsx)(n.h2,{id:"divisi\xf3n-en-entrenamiento-y-pruebas",children:"Divisi\xf3n en entrenamiento y pruebas"}),"\n",(0,t.jsxs)(n.p,{children:["Como tenemos nuestro conjunto de datos listo con funciones escaladas y codificadas, ahora dividamos nuestro conjunto de datos en partes de entrenamiento (75\xa0%) y pruebas (25\xa0%). Las funciones anal\xedticas de bases de datos de Teradata proporcionan la funci\xf3n ",(0,t.jsx)(n.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Database-Analytic-Functions/Model-Evaluation-Functions/TD_TrainTestSplit",children:"TD_TrainTestSplit"}),", que aprovecharemos para dividir nuestro conjunto de datos."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"-- Train Test Split on Input table \nCREATE VIEW td_analytics_functions_demo.train_test_split AS (\nSELECT * FROM TD_TrainTestSplit(\nON td_analytics_functions_demo.feature_enriched_accounts_consolidated AS InputTable\nUSING\nIDColumn('cust_id')\ntrainSize(0.75)\ntestSize(0.25)\nSeed (42)\n) AS dt\n);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Como se puede ver en la imagen a continuaci\xf3n, la funci\xf3n agrega una nueva columna ",(0,t.jsx)(n.code,{children:"TD_IsTrainRow"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Columna de fila de entrenamiento",src:a(46290).A+"",width:"836",height:"394"})}),"\n",(0,t.jsxs)(n.p,{children:["Usaremos ",(0,t.jsx)(n.code,{children:"TD_IsTrainRow"})," para crear dos tablas, una para entrenamiento y otra para pruebas."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"-- Creating Training Table\nCREATE TABLE td_analytics_functions_demo.training_table AS (\n  SELECT * FROM td_analytics_functions_demo.train_test_split\n  WHERE TD_IsTrainRow = 1\n) WITH DATA;\n\n-- Creating Testing Table\nCREATE TABLE td_analytics_functions_demo.testing_table AS (\n  SELECT * FROM td_analytics_functions_demo.train_test_split\n  WHERE TD_IsTrainRow = 0\n) WITH DATA;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"entrenamiento-con-modelo-lineal-generalizado",children:"Entrenamiento con modelo lineal generalizado"}),"\n",(0,t.jsxs)(n.p,{children:["Ahora usaremos la funci\xf3n anal\xedtica de base de datos ",(0,t.jsx)(n.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Database-Analytic-Functions/Model-Training-Functions/TD_GLM",children:"TD_GLM"})," para entrenar en nuestro conjunto de datos de entrenamiento. La funci\xf3n ",(0,t.jsx)(n.code,{children:"TD_GLM"})," es un modelo lineal generalizado (generalized linear model, GLM) que realiza anal\xedticas de regresi\xf3n y clasificaci\xf3n en conjuntos de datos. Aqu\xed hemos utilizado un mont\xf3n de columnas de entrada como ",(0,t.jsx)(n.code,{children:"tot_income"}),", ",(0,t.jsx)(n.code,{children:"ck_avg_bal"}),",",(0,t.jsx)(n.code,{children:"cc_avg_tran_amt"}),", valores con codificaci\xf3n one-hot para estado civil, g\xe9nero y estados. ",(0,t.jsx)(n.code,{children:"cc_avg_bal"})," es nuestra columna dependiente o de respuesta que es continua y, por tanto, es un problema de regresi\xf3n. Usamos ",(0,t.jsx)(n.code,{children:"Family"})," como ",(0,t.jsx)(n.code,{children:"Gaussian"})," para regresi\xf3n y ",(0,t.jsx)(n.code,{children:"Binomial"})," para clasificaci\xf3n."]}),"\n",(0,t.jsxs)(n.p,{children:["El par\xe1metro ",(0,t.jsx)(n.code,{children:"Tolerance"})," significa la mejora m\xednima requerida en la precisi\xf3n de la predicci\xf3n para que el modelo detenga las iteraciones y ",(0,t.jsx)(n.code,{children:"MaxIterNum"})," significa el n\xfamero m\xe1ximo de iteraciones permitidas. El modelo concluye el entrenamiento seg\xfan la condici\xf3n que se cumpla primero. Por ejemplo, en el siguiente ejemplo, el modelo es ",(0,t.jsx)(n.code,{children:"CONVERGED"})," despu\xe9s de 58 iteraciones."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"-- Training the GLM_Model with Training Dataset\nCREATE TABLE td_analytics_functions_demo.GLM_model_training AS (\nSELECT * FROM TD_GLM (\n  ON td_analytics_functions_demo.training_table AS InputTable\n  USING\n  InputColumns('tot_income','ck_avg_bal','cc_avg_tran_amt','[19:26]')\n  ResponseColumn('cc_avg_bal')\n  Family ('Gaussian')\n  MaxIterNum (300)\n  Tolerance (0.001)\n  Intercept ('true')\n) AS dt\n) WITH DATA;\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"GLM entrenado",src:a(74696).A+"",width:"1412",height:"1425"})}),"\n",(0,t.jsx)(n.h2,{id:"puntuaci\xf3n-en-el-conjunto-de-datos-de-prueba",children:"Puntuaci\xf3n en el conjunto de datos de prueba"}),"\n",(0,t.jsxs)(n.p,{children:["Ahora usaremos nuestro modelo ",(0,t.jsx)(n.code,{children:"GLM_model_training"})," para puntuar nuestro conjunto de datos de prueba ",(0,t.jsx)(n.code,{children:"testing_table"})," usando la funci\xf3n anal\xedtica de base de datos (enlace: ",(0,t.jsx)(n.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Database-Analytic-Functions/Model-Scoring-Functions/TD_GLMPredict",children:"TD_GLMPredict"}),")."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"-- Scoring the GLM_Model with Testing Dataset\nCREATE TABLE td_analytics_functions_demo.GLM_model_test_prediction AS (\nSELECT * from TD_GLMPredict (\nON td_analytics_functions_demo.testing_table AS InputTable\nON td_analytics_functions_demo.GLM_model_training AS ModelTable DIMENSION\nUSING\nIDColumn ('cust_id')\nAccumulate('cc_avg_bal')\n) AS dt\n) WITH DATA;\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"GLM puntuado",src:a(81503).A+"",width:"846",height:"1068"})}),"\n",(0,t.jsx)(n.h2,{id:"evaluaci\xf3n-del-modelo",children:"Evaluaci\xf3n del modelo"}),"\n",(0,t.jsxs)(n.p,{children:["Finalmente, evaluamos nuestro modelo en funci\xf3n de los resultados puntuados. Aqu\xed estamos usando la funci\xf3n ",(0,t.jsx)(n.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Database-Analytic-Functions/Model-Evaluation-Functions/TD_RegressionEvaluator",children:"TD_RegressionEvaluator"}),". El modelo se puede evaluar en funci\xf3n de par\xe1metros como ",(0,t.jsx)(n.code,{children:"R2"}),", ",(0,t.jsx)(n.code,{children:"RMSE"}),", ",(0,t.jsx)(n.code,{children:"F_score"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"-- Evaluating the model\nSELECT * FROM TD_RegressionEvaluator(\nON td_analytics_functions_demo.GLM_model_test_prediction AS InputTable\nUSING\nObservationColumn('cc_avg_bal')\nPredictionColumn('prediction')\nMetrics('RMSE','MAE','R2')\n) AS dt;\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"GLM evaluado",src:a(75830).A+"",width:"845",height:"193"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"El prop\xf3sito de este tutorial no es describir la ingenier\xeda de funciones, sino demostrar c\xf3mo podemos aprovechar diferentes funciones anal\xedticas de bases de datos en Vantage. Es posible que los resultados del modelo no sean \xf3ptimos y el proceso para crear el mejor modelo est\xe1 fuera del alcance de este art\xedculo."})}),"\n",(0,t.jsx)(n.h2,{id:"resumen",children:"Resumen"}),"\n",(0,t.jsxs)(n.p,{children:["En este inicio r\xe1pido, hemos aprendido c\xf3mo crear modelos de ML utilizando funciones anal\xedticas de base de datos Teradata. Construimos nuestra propia base de datos ",(0,t.jsx)(n.code,{children:"td_analytics_functions_demo"})," con datos ",(0,t.jsx)(n.code,{children:"customer"}),",",(0,t.jsx)(n.code,{children:"accounts"}),", ",(0,t.jsx)(n.code,{children:"transactions"}),", ",(0,t.jsx)(n.code,{children:"val"})," de la base de datos. Realizamos ingenier\xeda de caracter\xedsticas transformando las columnas usando ",(0,t.jsx)(n.code,{children:"TD_OneHotEncodingFit"}),", ",(0,t.jsx)(n.code,{children:"TD_ScaleFit"})," y ",(0,t.jsx)(n.code,{children:"TD_ColumnTransformer"}),". Luego usamos ",(0,t.jsx)(n.code,{children:"TD_TrainTestSplit"})," para dividir entre entrenamiento y pruebas. Entrenamos nuestro conjunto de datos de entrenamiento con el modelo ",(0,t.jsx)(n.code,{children:"TD_GLM"})," y calificamos nuestro conjunto de datos de prueba. Finalmente evaluamos nuestros resultados puntuados usando la funci\xf3n ",(0,t.jsx)(n.code,{children:"TD_RegressionEvaluator"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"lectura-adicional",children:"Lectura adicional"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Database-Analytic-Functions/Introduction-to-Analytics-Database-Analytic-Functions",children:"Gu\xeda del usuario de funciones anal\xedticas de bases de datos Vantage"})}),"\n"]}),"\n",(0,t.jsx)(i.Ay,{})]})}function _(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},37130:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/banking.model-0ab1909b684d9d17ae4ce6cb938b518e.png"},76355:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/joined_table_ml-59f1ee87453ca799378fc6ce0619de40.png"},21627:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/ml_gender_hot_encoded-de559f0d2ae1d830b0d4d3be449903a4.png"},75830:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/ml_model_evaluated-2f24d6396439474c2baee2cff0491ad8.png"},81503:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/ml_model_scored-67189abf381ad7a8938a692e6fee36db.png"},74696:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/ml_model_trained-a83d2ccc49caf1fc12662b81750e9e7b.png"},26157:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/ml_tot_income_scaled-2aeb4d32e2171d694ea96ff1dadf413f.png"},46290:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/ml_train_col-ce82292f0f5ba4992d49dfc9a32522ca.png"},28453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>d});var t=a(96540);const s={},o=t.createContext(s);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);