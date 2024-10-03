"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[8268],{76494:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=t(74848),o=t(28453);const r={sidebar_position:17,author:"Wenjie Tehan",email:"wenjie.tehan@teradata.com",page_last_update:"14 de febrero de 2022",description:"Integrar Teradata Vantage con Google Cloud Data Catalog.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","google cloud","google cloud data catalog."]},s="Integrar Teradata Vantage con Google Cloud Data Catalog",l={id:"manage-data/integrate-teradata-vantage-with-google-cloud-data-catalog",title:"Integrar Teradata Vantage con Google Cloud Data Catalog",description:"Integrar Teradata Vantage con Google Cloud Data Catalog.",source:"@site/i18n/es/docusaurus-plugin-content-docs-quickstarts/current/manage-data/integrate-teradata-vantage-with-google-cloud-data-catalog.md",sourceDirName:"manage-data",slug:"/manage-data/integrate-teradata-vantage-with-google-cloud-data-catalog",permalink:"/pr-preview/pr-145/es/quickstarts/manage-data/integrate-teradata-vantage-with-google-cloud-data-catalog",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:17,frontMatter:{sidebar_position:17,author:"Wenjie Tehan",email:"wenjie.tehan@teradata.com",page_last_update:"14 de febrero de 2022",description:"Integrar Teradata Vantage con Google Cloud Data Catalog.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","google cloud","google cloud data catalog."]},sidebar:"tutorialSidebar",previous:{title:"Conectar Azure Data Share a Teradata Vantage",permalink:"/pr-preview/pr-145/es/quickstarts/manage-data/connect-azure-data-share-to-teradata-vantage"},next:{title:"Configurar una conexi\xf3n a Teradata Vantage en DataHub",permalink:"/pr-preview/pr-145/es/quickstarts/manage-data/configure-a-teradata-vantage-connection-in-datahub"}},i={},c=[{value:"Informaci\xf3n general",id:"informaci\xf3n-general",level:3},{value:"Acerca de Google Cloud Data Catalog",id:"acerca-de-google-cloud-data-catalog",level:3},{value:"Acerca de Teradata Vantage",id:"acerca-de-teradata-vantage",level:3},{value:"Prerrequisitos",id:"prerrequisitos",level:3},{value:"Procedimiento",id:"procedimiento",level:3},{value:"Habilitar la API de Data Catalog",id:"habilitar-la-api-de-data-catalog",level:3},{value:"Instalar el conector de Data Catalog de Teradata",id:"instalar-el-conector-de-data-catalog-de-teradata",level:3},{value:"Instalar virtualenv",id:"instalar-virtualenv",level:3},{value:"Instalar el conector de Data Catalog en Teradata",id:"instalar-el-conector-de-data-catalog-en-teradata",level:4},{value:"Establecer variables de entorno",id:"establecer-variables-de-entorno",level:3},{value:"Ejecutar",id:"ejecutar",level:3},{value:"Explorar los metadatos de Teradata Vantage con Data Catalog",id:"explorar-los-metadatos-de-teradata-vantage-con-data-catalog",level:3},{value:"Limpieza (opcional)",id:"limpieza-opcional",level:3}];function d(a){const e={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...a.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"integrar-teradata-vantage-con-google-cloud-data-catalog",children:"Integrar Teradata Vantage con Google Cloud Data Catalog"}),"\n",(0,n.jsx)(e.h3,{id:"informaci\xf3n-general",children:"Informaci\xf3n general"}),"\n",(0,n.jsxs)(e.p,{children:["En este art\xedculo, se describe el proceso para conectar Teradata Vantage con Google Cloud Data Catalog mediante el ",(0,n.jsx)(e.a,{href:"https://github.com/GoogleCloudPlatform/datacatalog-connectors-rdbms/tree/master/google-datacatalog-teradata-connector",children:"Conector de Teradata para Data Catalog en GitHub"})," y, luego, explorar los metadatos de las tablas de Vantage a trav\xe9s de Data Catalog."]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"Diagrama Descripci\xf3n generada autom\xe1ticamente",src:t(31510).A+"",width:"1883",height:"870"})}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"Extraer: con\xe9ctese a Teradata Vantage y recupere todos los metadatos disponibles"}),"\n",(0,n.jsx)(e.li,{children:"Preparar: transforme los metadatos en entidades de Data Catalog y cree etiquetas"}),"\n",(0,n.jsx)(e.li,{children:"Ingerir: env\xede las entidades de Data Catalog al proyecto de Google Cloud"}),"\n"]}),"\n",(0,n.jsx)(e.h3,{id:"acerca-de-google-cloud-data-catalog",children:"Acerca de Google Cloud Data Catalog"}),"\n",(0,n.jsx)(e.p,{children:"Google Cloud Data Catalog es un servicio de gesti\xf3n de metadatos y descubrimiento de datos totalmente gestionado. Data Catalog puede catalogar los metadatos nativos de los activos de datos. Data Catalog no tiene servidor y proporciona un cat\xe1logo central para capturar metadatos t\xe9cnicos y comerciales en un formato estructurado."}),"\n",(0,n.jsx)(e.h3,{id:"acerca-de-teradata-vantage",children:"Acerca de Teradata Vantage"}),"\n",(0,n.jsx)(e.p,{children:"Vantage es la plataforma en la nube moderna que unifica almacenes de datos, lagos de datos y an\xe1lisis en un \xfanico ecosistema conectado."}),"\n",(0,n.jsx)(e.p,{children:"Vantage combina an\xe1lisis descriptivos, predictivos y prescriptivos, toma de decisiones aut\xf3noma, funciones de aprendizaje autom\xe1tico y herramientas de visualizaci\xf3n en una plataforma unificada e integrada que descubre inteligencia empresarial en tiempo real a escala, sin importar d\xf3nde residan los datos."}),"\n",(0,n.jsx)(e.p,{children:"Vantage permite a las empresas iniciar computaci\xf3n o almacenamiento a peque\xf1a escala y de manera el\xe1stica, pagando solo por lo que usan, aprovechando almacenes de objetos de bajo coste e integrando sus cargas de trabajo anal\xedticas."}),"\n",(0,n.jsx)(e.p,{children:"Vantage es compatible con R, Python, Teradata Studio y cualquier otra herramienta basada en SQL. Puede implementar Vantage en nubes p\xfablicas, en las instalaciones, en una infraestructura optimizada o b\xe1sica, o como servicio."}),"\n",(0,n.jsxs)(e.p,{children:["Consulte la ",(0,n.jsx)(e.a,{href:"https://docs.teradata.com/home",children:"documentaci\xf3n"})," para obtener m\xe1s informaci\xf3n sobre Teradata Vantage."]}),"\n",(0,n.jsx)(e.h3,{id:"prerrequisitos",children:"Prerrequisitos"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:"Acceso a una instancia de Teradata Vantage."}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["Un ",(0,n.jsx)(e.a,{href:"https://support.google.com/accounts/answer/27441?hl=en",children:(0,n.jsx)(e.strong,{children:"cuenta de servicio de Google"})})," con rol de administrador del cat\xe1logo de datos"]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["Un ",(0,n.jsx)(e.a,{href:"https://cloud.google.com/resource-manager/docs/creating-managing-projects",children:(0,n.jsx)(e.strong,{children:"proyecto de consola en la nube creado"})})," para tu cuenta (es decir, partner-integration-lab)"]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:"Facturaci\xf3n habilitada"}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["SDK de Google Cloud ",(0,n.jsx)(e.a,{href:"https://cloud.google.com/sdk/docs/install",children:"Instalado"})," e ",(0,n.jsx)(e.a,{href:"https://cloud.google.com/sdk/docs/initializing",children:"inicializado"})]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.a,{href:"https://www.python.org/downloads/",children:"Python"})," Instalado"]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.a,{href:"https://pip.pypa.io/en/stable/installation/",children:"Pip"})," Instalado"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(e.h3,{id:"procedimiento",children:"Procedimiento"}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsx)(e.li,{children:"Habilite las API de Data Catalog"}),"\n",(0,n.jsx)(e.li,{children:"Instalar el conector de Data Catalog de Teradata"}),"\n",(0,n.jsx)(e.li,{children:"Ejecutar"}),"\n",(0,n.jsx)(e.li,{children:"Explorar los metadatos de Teradata Vantage con Data Catalog"}),"\n"]}),"\n",(0,n.jsx)(e.h3,{id:"habilitar-la-api-de-data-catalog",children:"Habilitar la API de Data Catalog"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["Inicie sesi\xf3n en la consola de ",(0,n.jsx)(e.a,{href:"http://console.cloud.google.com/",children:"Google"}),", elija ",(0,n.jsx)(e.strong,{children:"API y servicios"})," en el men\xfa de navegaci\xf3n y, posteriormente, haga clic en ",(0,n.jsx)(e.em,{children:"Biblioteca"}),". Aseg\xfarese de que su proyecto est\xe9 seleccionado en la barra de men\xfas superior."]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"Interfaz gr\xe1fica de usuario",src:t(44799).A+"",width:"1150",height:"1125"})}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["Ponga ",(0,n.jsx)(e.em,{children:"Data Catalog"})," en el cuadro de b\xfasqueda y haga clic en ",(0,n.jsx)(e.strong,{children:"API de Google Cloud Data Catalog"}),", haga clic en ",(0,n.jsx)(e.strong,{children:"ENABLE"})]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"Interfaz gr\xe1fica de usuario",src:t(93472).A+"",width:"4400",height:"1503"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(e.h3,{id:"instalar-el-conector-de-data-catalog-de-teradata",children:"Instalar el conector de Data Catalog de Teradata"}),"\n",(0,n.jsxs)(e.p,{children:["Hay un conector de Data Catalog de Teradata disponible en ",(0,n.jsx)(e.a,{href:"https://github.com/GoogleCloudPlatform/datacatalog-connectors-rdbms/tree/master/google-datacatalog-teradata-connector",children:"GitHub"}),". Este conector est\xe1 escrito en Python."]}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:"Ejecute el siguiente comando para autorizar a gcloud a acceder a Cloud Platform con las credenciales de usuario de Google."}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",children:"gcloud auth login\n"})}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["Elija su cuenta de Google cuando se abra la p\xe1gina de inicio de sesi\xf3n de Google y haga clic en ",(0,n.jsx)(e.em,{children:"Permitir"})," en la p\xe1gina siguiente."]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:"A continuaci\xf3n, configure el proyecto predeterminado si a\xfan no lo ha hecho"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",children:"gcloud config set project &lt;project id>\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(e.h3,{id:"instalar-virtualenv",children:"Instalar virtualenv"}),"\n",(0,n.jsxs)(e.p,{children:["Le recomendamos instalar el conector de Data Catalog de Teradata en un entorno Python aislado. Para ello, instale primero ",(0,n.jsx)(e.a,{href:"https://virtualenv.pypa.io/en/latest/",children:"virtualenv"}),":"]}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"Windows"})}),"\n",(0,n.jsx)(e.p,{children:"Ejecute en Powershell como administrador:"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",children:"pip install virtualenv\nvirtualenv --python python3.6 &lt;your-env>\n&lt;your-env>\\Scripts\\activate\n"})}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"MacOS"})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",metastring:', role="content-editable emits-gtm-events"',children:"pip install virtualenv\nvirtualenv --python python3.6 &lt;your-env>\nsource &lt;your-env>/bin/activate\n"})}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"Linux"})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",metastring:', role="content-editable emits-gtm-events"',children:"pip install virtualenv\nvirtualenv --python python3.6 &lt;your-env>\nsource &lt;your-env>/bin/activate\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(e.h4,{id:"instalar-el-conector-de-data-catalog-en-teradata",children:"Instalar el conector de Data Catalog en Teradata"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"Windows"})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",children:"pip.exe install google-datacatalog-teradata-connector\n"})}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"MacOS"})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",metastring:', role="content-editable emits-gtm-events"',children:"pip install google-datacatalog-teradata-connector\n"})}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"Linux"})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",metastring:', role="content-editable emits-gtm-events"',children:"pip install google-datacatalog-teradata-connector\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(e.h3,{id:"establecer-variables-de-entorno",children:"Establecer variables de entorno"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",metastring:', id="gcp_env_var", role="content-editable emits-gtm-events"',children:"export GOOGLE_APPLICATION_CREDENTIALS=&lt;google_credentials_file>\nexport TERADATA2DC_DATACATALOG_PROJECT_ID=&lt;google_cloud_project_id>\nexport TERADATA2DC_DATACATALOG_LOCATION_ID=&lt;google_cloud_location_id>\nexport TERADATA2DC_TERADATA_SERVER=&lt;teradata_server>\nexport TERADATA2DC_TERADATA_USERNAME=&lt;teradata_username>\nexport TERADATA2DC_TERADATA_PASSWORD=&lt;teradata_password>\n"})}),"\n",(0,n.jsxs)(e.p,{children:["Donde ",(0,n.jsx)(e.code,{children:"<google_credential_file>"})," es la clave de su cuenta de servicio (archivo json)."]}),"\n",(0,n.jsx)(e.h3,{id:"ejecutar",children:"Ejecutar"}),"\n",(0,n.jsxs)(e.p,{children:["Ejecute el comando ",(0,n.jsx)(e.code,{children:"google-datacatalog-teradata-connector"})," para establecer el punto de entrada a la base de datos Vantage."]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",metastring:', id="gcp_data_catalog_first_run" role="content-editable emits-gtm-events"',children:"google-datacatalog-teradata-connector \\\n  --datacatalog-project-id=$TERADATA2DC_DATACATALOG_PROJECT_ID \\\n  --datacatalog-location-id=$TERADATA2DC_DATACATALOG_LOCATION_ID \\\n  --teradata-host=$TERADATA2DC_TERADATA_SERVER \\\n  --teradata-user=$TERADATA2DC_TERADATA_USERNAME \\\n  --teradata-pass=$TERADATA2DC_TERADATA_PASSWORD\n"})}),"\n",(0,n.jsx)(e.p,{children:"Ejemplo de salida del comando google-datacatalog-teradata-connector:"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{children:'INFO:root:\n==============Starting CLI===============\nINFO:root:This SQL connector does not implement the user defined datacatalog-entry-resource-url-prefix\nINFO:root:This SQL connector uses the default entry resoure URL\n\n============Start teradata-to-datacatalog===========\n\n==============Scrape metadata===============\nINFO:root:Scrapping metadata from connection_args\n\n1 table containers ready to be ingested...\n\n==============Prepare metadata===============\n\n--\x3e database: Gcpuser\n37 tables ready to be ingested...\n\n==============Ingest metadata===============\n\nDEBUG:google.auth._default:Checking /Users/Teradata/Apps/Cloud/GCP/teradata2dc-credentials.json for explicit credentials as part of auth process...\nINFO:root:Starting to clean up the catalog...\nDEBUG:google.auth.transport.requests:Making request: POST https://oauth2.googleapis.com/token\nDEBUG:urllib3.connectionpool:Starting new HTTPS connection (1): oauth2.googleapis.com:443\nDEBUG:urllib3.connectionpool:https://oauth2.googleapis.com:443 "POST /token HTTP/1.1" 200 None\nINFO:root:0 entries that match the search query exist in Data Catalog!\nINFO:root:Looking for entries to be deleted...\nINFO:root:0 entries will be deleted.\n\nStarting to ingest custom metadata...\n\nDEBUG:google.auth._default:Checking /Users/Teradata/Apps/Cloud/GCP/teradata2dc-credentials.json for explicit credentials as part of auth process...\nINFO:root:Starting the ingestion flow...\nDEBUG:google.auth.transport.requests:Making request: POST https://oauth2.googleapis.com/token\nDEBUG:urllib3.connectionpool:Starting new HTTPS connection (1): oauth2.googleapis.com:443\nDEBUG:urllib3.connectionpool:https://oauth2.googleapis.com:443 "POST /token HTTP/1.1" 200 None\nINFO:root:Tag Template created: projects/partner-integration-lab/locations/us-west1/tagTemplates/teradata_database_metadata\nINFO:root:Tag Template created: projects/partner-integration-lab/locations/us-west1/tagTemplates/teradata_table_metadata\nINFO:root:Tag Template created: projects/partner-integration-lab/locations/us-west1/tagTemplates/teradata_column_metadata\nINFO:root:Entry Group created: projects/partner-integration-lab/locations/us-west1/entryGroups/teradata\nINFO:root:1/38\nINFO:root:Entry does not exist: projects/partner-integration-lab/locations/us-west1/entryGroups/teradata/entries/gcpuser\nINFO:root:Entry created: projects/partner-integration-lab/locations/us-west1/entryGroups/teradata/entries/gcpuser\nINFO:root: ^ [database] 34.105.107.155/gcpuser\nINFO:root:Starting the upsert tags step\nINFO:root:Processing Tag from Template: projects/partner-integration-lab/locations/us-west1/tagTemplates/teradata_database_metadata ...\nINFO:root:Tag created: projects/partner-integration-lab/locations/us-west1/entryGroups/teradata/entries/gcpuser/tags/CWHNiGQeQmPT\nINFO:root:2/38\nINFO:root:Entry does not exist: projects/partner-integration-lab/locations/us-west1/entryGroups/teradata/entries/gcpuser_Categories\nINFO:root:Entry created: projects/partner-integration-lab/locations/us-west1/entryGroups/teradata/entries/gcpuser_Categories\nINFO:root: ^ [table] 34.105.107.155/gcpuser/Categories\nINFO:root:Starting the upsert tags step\nINFO:root:Processing Tag from Template: projects/partner-integration-lab/locations/us-west1/tagTemplates/teradata_table_metadata ...\nINFO:root:Tag created: projects/partner-integration-lab/locations/us-west1/entryGroups/teradata/entries/gcpuser_Categories/tags/Ceij5G9t915o\nINFO:root:38/38\nINFO:root:Entry does not exist: projects/partner-integration-lab/locations/us-west1/entryGroups/teradata/entries/gcpuser_tablesv_instantiated_latest\nINFO:root:Entry created: projects/partner-integration-lab/locations/us-west1/entryGroups/teradata/entries/gcpuser_tablesv_instantiated_latest\nINFO:root: ^ [table] 34.105.107.155/gcpuser/tablesv_instantiated_latest\nINFO:root:Starting the upsert tags step\nINFO:root:Processing Tag from Template: projects/partner-integration-lab/locations/us-west1/tagTemplates/teradata_table_metadata ...\nINFO:root:Tag created: projects/partner-integration-lab/locations/us-west1/entryGroups/teradata/entries/gcpuser_tablesv_instantiated_latest/tags/Ceij5G9t915o\nINFO:root:\n============End teradata-to-datacatalog============\n'})}),"\n",(0,n.jsx)(e.h3,{id:"explorar-los-metadatos-de-teradata-vantage-con-data-catalog",children:"Explorar los metadatos de Teradata Vantage con Data Catalog"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["Vaya a la consola de ",(0,n.jsx)(e.a,{href:"https://console.cloud.google.com/datacatalog",children:"Data Catalog"}),", haga clic en el proyecto (es decir, partner-integration-lab) en ",(0,n.jsx)(e.strong,{children:"Proyectos"}),". Las tablas de Teradata se muestran en el panel derecho."]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"Interfaz gr\xe1fica de usuario",src:t(71593).A+"",width:"1852",height:"1127"})}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:"Haga clic en la tabla que le interese (es decir, CITY_LEVEL_TRANS) y ver\xe1 los metadatos sobre esta tabla:"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"Interfaz gr\xe1fica de usuario",src:t(40626).A+"",width:"1596",height:"848"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(e.h3,{id:"limpieza-opcional",children:"Limpieza (opcional)"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["Limpie los metadatos de Data Catalog. Para ello, copie ",(0,n.jsx)(e.a,{href:"https://github.com/GoogleCloudPlatform/datacatalog-connectors-rdbms/blob/master/google-datacatalog-teradata-connector/tools/cleanup_datacatalog.py",children:"https://github.com/GoogleCloudPlatform/datacatalog-connectors-rdbms/blob/master/google-datacatalog-teradata-connector/tools/cleanup_datacatalog.py"})," en el directorio local."]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:"Cambie el directorio al lugar donde est\xe1 el archivo y luego ejecute el siguiente comando:"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",metastring:', role="content-editable emits-gtm-events"',children:"python cleanup_datacatalog.py --datacatalog-project-ids=$TERADATA2DC_DATACATALOG_PROJECT_ID\n"})}),"\n"]}),"\n"]})]})}function g(a={}){const{wrapper:e}={...(0,o.R)(),...a.components};return e?(0,n.jsx)(e,{...a,children:(0,n.jsx)(d,{...a})}):d(a)}},31510:(a,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/image2-231e97bc307e071f21582e808900193d.png"},44799:(a,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/image3-722d67bf21642b5c8861b9bba23dd253.png"},93472:(a,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/image4-a0d9d7c34ff24a43d22bbef1fb7c3347.png"},71593:(a,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/image5-5fbc9d3ce64c444855f5246dcea902f2.png"},40626:(a,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/image6-fa917a94837adb3a162505612bf61511.png"},28453:(a,e,t)=>{t.d(e,{R:()=>s,x:()=>l});var n=t(96540);const o={},r=n.createContext(o);function s(a){const e=n.useContext(r);return n.useMemo((function(){return"function"==typeof a?a(e):{...e,...a}}),[e,a])}function l(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(o):a.components||o:s(a.components),n.createElement(r.Provider,{value:e},a.children)}}}]);