"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[3673],{51097:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(74848),t=n(28453);const s={sidebar_position:5,author:"Janeth Graziani",email:"Janeth.graziani@teradata.com",page_last_update:"24 de enero de 2024",description:"Ejecutar demostraciones de VantageCloud Lake mediante Jupyter Notebooks en Google Vertex AI Workbench.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","business intelligence","enterprise analytics","jupyter","teradatasql","ipython-sql","teradatasqlalquimia","vantagecloud","vantagecloud lake","data analytics","data science","vertex ai","google cloud"]},o="Ejecutar demostraciones de Teradata Jupyter Notebook para VantageCloud Lake en Google Cloud Vertex AI",i={id:"vantagecloud-lake/vantagecloud-lake-demo-jupyter-google-cloud-vertex-ai",title:"Ejecutar demostraciones de Teradata Jupyter Notebook para VantageCloud Lake en Google Cloud Vertex AI",description:"Ejecutar demostraciones de VantageCloud Lake mediante Jupyter Notebooks en Google Vertex AI Workbench.",source:"@site/i18n/es/docusaurus-plugin-content-docs-quickstarts/current/vantagecloud-lake/vantagecloud-lake-demo-jupyter-google-cloud-vertex-ai.md",sourceDirName:"vantagecloud-lake",slug:"/vantagecloud-lake/vantagecloud-lake-demo-jupyter-google-cloud-vertex-ai",permalink:"/pr-preview/pr-147/es/quickstarts/vantagecloud-lake/vantagecloud-lake-demo-jupyter-google-cloud-vertex-ai",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,author:"Janeth Graziani",email:"Janeth.graziani@teradata.com",page_last_update:"24 de enero de 2024",description:"Ejecutar demostraciones de VantageCloud Lake mediante Jupyter Notebooks en Google Vertex AI Workbench.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","business intelligence","enterprise analytics","jupyter","teradatasql","ipython-sql","teradatasqlalquimia","vantagecloud","vantagecloud lake","data analytics","data science","vertex ai","google cloud"]},sidebar:"tutorialSidebar",previous:{title:"Ejecutar demostraciones de Teradata Jupyter Notebook para VantageCloud Lake en Amazon SageMaker",permalink:"/pr-preview/pr-147/es/quickstarts/vantagecloud-lake/vantagecloud-lake-demo-jupyter-sagemaker"},next:{title:"Ejecutar demostraciones de Teradata Jupyter Notebook para VantageCloud Lake en Microsoft Azure",permalink:"/pr-preview/pr-147/es/quickstarts/vantagecloud-lake/vantagecloud-lake-demo-jupyter-azure"}},d={},l=[{value:"Informaci\xf3n general",id:"informaci\xf3n-general",level:2},{value:"Prerrequisitos",id:"prerrequisitos",level:2},{value:"Configuraci\xf3n del entorno Vertex AI Google Cloud",id:"configuraci\xf3n-del-entorno-vertex-ai-google-cloud",level:2},{value:"Iniciar una instancia de cuaderno administrada por el usuario",id:"iniciar-una-instancia-de-cuaderno-administrada-por-el-usuario",level:3},{value:"Configuraci\xf3n de VantageCloud Lake",id:"configuraci\xf3n-de-vantagecloud-lake",level:2},{value:"Editar vars.json",id:"editar-varsjson",level:2},{value:"Ejecutar demostraciones",id:"ejecutar-demostraciones",level:2},{value:"Resumen",id:"resumen",level:2}];function c(e){const a={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h1,{id:"ejecutar-demostraciones-de-teradata-jupyter-notebook-para-vantagecloud-lake-en-google-cloud-vertex-ai",children:"Ejecutar demostraciones de Teradata Jupyter Notebook para VantageCloud Lake en Google Cloud Vertex AI"}),"\n",(0,r.jsx)(a.h2,{id:"informaci\xf3n-general",children:"Informaci\xf3n general"}),"\n",(0,r.jsxs)(a.p,{children:["En este inicio r\xe1pido se explica c\xf3mo ejecutar ",(0,r.jsx)(a.a,{href:"https://github.com/Teradata/lake-demos",children:"Demostraciones de Jupyter Notebook de Teradata para VantageCloud Lake"})," en Vertex AI, la plataforma IA/ML para Google Cloud."]}),"\n",(0,r.jsx)(a.h2,{id:"prerrequisitos",children:"Prerrequisitos"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["M\xf3dulos de Teradata para Jupyter ",(0,r.jsx)(a.strong,{children:"versi\xf3n de escritorio para Linux"})," (descarga de la ",(0,r.jsx)(a.a,{href:"https://downloads.teradata.com/download/tools/vantage-modules-for-jupyter",children:"aqu\xed"}),", es necesario registrarse)"]}),"\n",(0,r.jsxs)(a.li,{children:["Cuenta de Google Cloud con ",(0,r.jsx)(a.a,{href:"https://console.cloud.google.com/flows/enableapi?apiid=notebooks.googleapis.com,aiplatform.googleapis.com&redirect=https://console.cloud.google.com&_ga=2.180323111.284679914.1706204112-1996764819.1705688373",children:"API de Notebooks y Vertex AI"})," habilitada"]}),"\n",(0,r.jsx)(a.li,{children:"Almacenamiento en Google Cloud para almacenar scripts de inicio y el paquete de extensiones de Teradata Jupyter"}),"\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.a,{href:"/pr-preview/pr-147/es/quickstarts/vantagecloud-lake/getting-started-with-vantagecloud-lake",children:"Acceso a un entorno VantageCloud Lake"})}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"configuraci\xf3n-del-entorno-vertex-ai-google-cloud",children:"Configuraci\xf3n del entorno Vertex AI Google Cloud"}),"\n",(0,r.jsx)(a.p,{children:"Cuando crea una nueva instancia de cuaderno, puede especificar un script de inicio. Este script, que se ejecuta solo una vez despu\xe9s de la creaci\xf3n de la instancia, instalar\xe1 el paquete de extensiones de Teradata Jupyter y clonar\xe1 un repositorio de GitHub en la nueva instancia de notebooks administrada por el usuario."}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:"Descargar el paquete de extensiones Jupyter de Teradata"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["Visite ",(0,r.jsx)(a.a,{href:"https://downloads.teradata.com/download/tools/vantage-modules-for-jupyter",children:"p\xe1gina de m\xf3dulos Vantage para Jupyter"})]}),"\n",(0,r.jsx)(a.li,{children:"Inicie sesi\xf3n y descargue la versi\xf3n Teradata Linux del paquete."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:"Crear dep\xf3sito de almacenamiento en Google Cloud"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Cree un dep\xf3sito con un nombre relevante para el proyecto (por ejemplo, teradata_jupyter)."}),"\n",(0,r.jsxs)(a.li,{children:["Aseg\xfarese de que el nombre del dep\xf3sito sea globalmente \xfanico. Por ejemplo, si el nombre teradata_jupyter ya se ha utilizado, no estar\xe1 disponible para usuarios posteriores.\n",(0,r.jsx)(a.img,{alt:"Nuevo dep\xf3sito",src:n(91262).A+"",width:"2478",height:"568"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:"Cargue el paquete de extensiones de Jupyter descomprimido en su dep\xf3sito de Google Cloud Storage como un archivo."}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:["Escriba el siguiente script de inicio y gu\xe1rdelo como ",(0,r.jsx)(a.code,{children:"startup.sh"})," en su m\xe1quina local."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"A continuaci\xf3n se muestra un script de ejemplo que recupera el paquete de extensiones de Teradata Jupyter del dep\xf3sito de Google Cloud Storage e instala el kernel de Teradata SQL, las extensiones y clona el repositorio lake-demos."}),"\n",(0,r.jsx)(a.admonition,{type:"info",children:(0,r.jsx)(a.p,{children:"Recuerde reemplazar teradata_jupyter en el comando gsutil cp."})}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",metastring:', id="vertex_ex_script", role="content-editable, emits-gtm-events"',children:"#! /bin/bash\n\ncd /home/jupyter\nmkdir teradata\ncd teradata\ngsutil cp gs://teradata_jupyter/* .\nunzip teradatasql*.zip\n\n# Install Teradata kernel\ncp teradatakernel /usr/local/bin\n\njupyter kernelspec install ./teradatasql --prefix=/opt/conda\n\n# Install Teradata extensions\npip install --find-links . teradata_preferences_prebuilt\npip install --find-links . teradata_connection_manager_prebuilt\npip install --find-links . teradata_sqlhighlighter_prebuilt\npip install --find-links . teradata_resultset_renderer_prebuilt\npip install --find-links . teradata_database_explorer_prebuilt\n\n# PIP install the Teradata Python library\npip install teradataml==17.20.00.04\n\n# Install Teradata R library (optional, uncomment this line only if you use an environment that supports R)\n#Rscript -e \"install.packages('tdplyr',repos=c('https://r-repo.teradata.com','https://cloud.r-project.org'))\"\n\n# Clone the Teradata lake-demos repository\nsu - jupyter -c \"git clone https://github.com/Teradata/lake-demos.git\"\n"})}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["Suba este script a su dep\xf3sito de almacenamiento de Google Cloud como un archivo\n",(0,r.jsx)(a.img,{alt:"archivos subidos al dep\xf3sito",src:n(99607).A+"",width:"2738",height:"1030"})]}),"\n"]}),"\n",(0,r.jsx)(a.h3,{id:"iniciar-una-instancia-de-cuaderno-administrada-por-el-usuario",children:"Iniciar una instancia de cuaderno administrada por el usuario"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:"Acceda a Vertex AI Workbench"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Regrese a Vertex AI Workbench en la consola de Google Cloud."}),"\n",(0,r.jsxs)(a.li,{children:["Cree una nueva libreta administrada por el usuario a trav\xe9s de Opciones avanzadas o directamente en ",(0,r.jsx)(a.a,{href:"https://notebook.new/",children:"https://notebook.new/"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:["En Detalles, asigne un nombre a su cuaderno, seleccione su regi\xf3n y seleccione continuar.\n",(0,r.jsx)(a.img,{alt:"detalles del entorno de cuaderno",src:n(42039).A+"",width:"2010",height:"1006"})]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:["En Entorno, seleccione ",(0,r.jsx)(a.strong,{children:"Examinar"})," para seleccionar su script startup.sh de su dep\xf3sito de Google Cloud.\n",(0,r.jsx)(a.img,{alt:"seleccionar un script de inicio",src:n(71136).A+"",width:"2456",height:"1262"})]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:["Seleccione Crear para iniciar el cuaderno. Es posible que el proceso de creaci\xf3n del cuaderno tarde unos minutos en completarse. Cuando termine, haga clic en OPEN JUPYTERLAB.\n",(0,r.jsx)(a.img,{alt:"notebook activo",src:n(52965).A+"",width:"2874",height:"934"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.admonition,{type:"important",children:(0,r.jsx)(a.p,{children:"Tendr\xe1 que incluir esta IP en la lista blanca en su entorno VantageCloud Lake para permitir la conexi\xf3n. Esta soluci\xf3n es apropiada en un entorno de prueba. Para entornos de producci\xf3n, es posible que sea necesario configurar e incluir en la lista blanca una configuraci\xf3n de VPC, subredes y grupos de seguridad."})}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["En JupyterLab, abra un cuaderno con un kernel de Python y ejecute el siguiente comando para encontrar la direcci\xf3n IP de la instancia del cuaderno.\n",(0,r.jsx)(a.img,{alt:"kernel python3",src:n(45719).A+"",width:"2796",height:"1334"})]}),"\n"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",metastring:', role="content-editable"',children:'import requests\ndef get_public_ip():\n    try:\n        response = requests.get(\'https://api.ipify.org\')\n        return response.text\n    except requests.RequestException as e:\n        return "Error: " + str(e)\nmy_public_ip = get_public_ip()\nprint("My Public IP is:", my_public_ip)\n'})}),"\n",(0,r.jsx)(a.h2,{id:"configuraci\xf3n-de-vantagecloud-lake",children:"Configuraci\xf3n de VantageCloud Lake"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["En el entorno VantageCloud Lake, en configuraci\xf3n, agregue la IP de su instancia de notebook\n",(0,r.jsx)(a.img,{alt:"Iniciar JupyterLab",src:n(39294).A+"",width:"1423",height:"662"})]}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"editar-varsjson",children:"Editar vars.json"}),"\n",(0,r.jsxs)(a.p,{children:["Navegue hasta el directorio ",(0,r.jsx)(a.code,{children:"lake-demos"})," en su cuaderno.\n",(0,r.jsx)(a.img,{alt:"iniciador de notebooks",src:n(59291).A+"",width:"2720",height:"1456"})]}),"\n",(0,r.jsxs)(a.p,{children:["Haga clic derecho en vars.json para abrir el archivo con el editor.\n",(0,r.jsx)(a.img,{alt:"vars.json",src:n(39442).A+"",width:"2810",height:"1834"})]}),"\n",(0,r.jsxs)(a.p,{children:["Edite el archivo ",(0,r.jsx)(a.em,{children:(0,r.jsx)(a.a,{href:"https://github.com/Teradata/lake-demos/blob/main/vars.json",children:"archivo vars.json"})})," para incluir las credenciales necesarias para ejecutar las demostraciones"]}),"\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{children:(0,r.jsx)(a.strong,{children:"Variable"})}),(0,r.jsx)(a.th,{children:(0,r.jsx)(a.strong,{children:"Valor"})})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.strong,{children:'"host"'})}),(0,r.jsx)(a.td,{children:"Valor de IP p\xfablica de su entorno VantageCloud Lake"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.strong,{children:'"UES_URI"'})}),(0,r.jsx)(a.td,{children:"An\xe1lisis abierto desde su entorno VantageCloud Lake"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.strong,{children:'"dbc"'})}),(0,r.jsx)(a.td,{children:"La contrase\xf1a maestra de su entorno VantageCloud Lake."})]})]})]}),"\n",(0,r.jsxs)(a.p,{children:["Para recuperar una direcci\xf3n IP p\xfablica y un punto de conexi\xf3n de Open Analytics, siga estos ",(0,r.jsx)(a.a,{href:"/pr-preview/pr-147/es/quickstarts/vantagecloud-lake/vantagecloud-lake-demo-jupyter-docker#create-vantagecloud-lake-environment",children:"instrucciones"}),"."]}),"\n",(0,r.jsx)(a.admonition,{type:"important",children:(0,r.jsx)(a.p,{children:'Cambie las contrase\xf1as en el archivo vars.json. Ver\xe1 que en el archivo vars.json de muestra, las contrase\xf1as de todos los usuarios est\xe1n predeterminadas en "password", esto es solo para cuestiones del archivo de muestra, debe cambiar todas estas contrase\xf1as. campos a contrase\xf1as seguras, prot\xe9jalas seg\xfan sea necesario y siga otras mejores pr\xe1cticas de administraci\xf3n de contrase\xf1as'})}),"\n",(0,r.jsx)(a.h2,{id:"ejecutar-demostraciones",children:"Ejecutar demostraciones"}),"\n",(0,r.jsxs)(a.p,{children:["Ejecute todas las celdas de ",(0,r.jsx)(a.em,{children:"0_Demo_Environment_Setup.ipynb"})," para configurar su entorno. Seguido de ",(0,r.jsx)(a.strong,{children:"1_Demo_Setup_Base_Data.ipynb"})," para cargar los datos base necesarios para la demostraci\xf3n."]}),"\n",(0,r.jsxs)(a.p,{children:["Para obtener m\xe1s informaci\xf3n sobre los cuadernos de demostraci\xf3n, vaya a la p\xe1gina ",(0,r.jsx)(a.a,{href:"https://github.com/Teradata/lake-demos",children:"Demostraciones de Teradata Lake"})," en GitHub."]}),"\n",(0,r.jsx)(a.h2,{id:"resumen",children:"Resumen"}),"\n",(0,r.jsxs)(a.p,{children:["En este inicio r\xe1pido hemos configurado Google Cloud Vertex AI Workbench Notebooks para ejecutar ",(0,r.jsx)(a.a,{href:"https://github.com/Teradata/lake-demos",children:"Demostraciones de Jupyter Notebook de Teradata para VantageCloud Lake"}),"."]})]})}function u(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},52965:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/activenotebook-706c22364c3c878099ccc0ab2e7663ef.png"},91262:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/bucket-490e623dc52bb3ffcaf179d1937482c4.png"},42039:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/detailsenv-a90448ce8de3e3e5efd8acc6001831c1.png"},59291:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/notebooklauncher-fde21ecd3b27388b0df3850958613967.png"},39442:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/openvars-3b64b202e1395cd6f67b7331d7e76679.png"},45719:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/python3-3c9cf920b70af3b257f429d0ea34fe67.png"},71136:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/startupscript-c808bee345430752612888eba52e48e1.png"},99607:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/upload-81801d8d1591e421a960d4b9032d7c88.png"},39294:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/sagemaker-lake-9e18bff602d568e81bbb721a3d4e2553.PNG"},28453:(e,a,n)=>{n.d(a,{R:()=>o,x:()=>i});var r=n(96540);const t={},s=r.createContext(t);function o(e){const a=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(s.Provider,{value:a},e.children)}}}]);