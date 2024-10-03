"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[7745],{11586:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>t,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(74848),s=n(28453);const i={sidebar_position:4,author:"Daniel Herrera",email:"daniel.herrera2@teradata.com",page_last_update:"16 de enero de 2024",description:"Ejecutar demostraciones de Teradata Jupyter Notebook para VantageCloud Lake en SageMaker",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","business intelligence","enterprise analytics","jupyter","teradatasql","ipython-sql","cloud computing","machine learning","sagemaker","vantagecloud","vantagecloud lake","lake"]},t="Ejecutar demostraciones de Teradata Jupyter Notebook para VantageCloud Lake en Amazon SageMaker",o={id:"vantagecloud-lake/vantagecloud-lake-demo-jupyter-sagemaker",title:"Ejecutar demostraciones de Teradata Jupyter Notebook para VantageCloud Lake en Amazon SageMaker",description:"Ejecutar demostraciones de Teradata Jupyter Notebook para VantageCloud Lake en SageMaker",source:"@site/i18n/es/docusaurus-plugin-content-docs-quickstarts/current/vantagecloud-lake/vantagecloud-lake-demo-jupyter-sagemaker.md",sourceDirName:"vantagecloud-lake",slug:"/vantagecloud-lake/vantagecloud-lake-demo-jupyter-sagemaker",permalink:"/pr-preview/pr-145/es/quickstarts/vantagecloud-lake/vantagecloud-lake-demo-jupyter-sagemaker",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,author:"Daniel Herrera",email:"daniel.herrera2@teradata.com",page_last_update:"16 de enero de 2024",description:"Ejecutar demostraciones de Teradata Jupyter Notebook para VantageCloud Lake en SageMaker",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","business intelligence","enterprise analytics","jupyter","teradatasql","ipython-sql","cloud computing","machine learning","sagemaker","vantagecloud","vantagecloud lake","lake"]},sidebar:"tutorialSidebar",previous:{title:"Ejecutar demostraciones de Teradata Jupyter Notebook para VantageCloud Lake en Visual Studio Code",permalink:"/pr-preview/pr-145/es/quickstarts/vantagecloud-lake/vantagecloud-lake-demos-visual-studio-code"},next:{title:"Ejecutar demostraciones de Teradata Jupyter Notebook para VantageCloud Lake en Google Cloud Vertex AI",permalink:"/pr-preview/pr-145/es/quickstarts/vantagecloud-lake/vantagecloud-lake-demo-jupyter-google-cloud-vertex-ai"}},d={},c=[{value:"Informaci\xf3n general",id:"informaci\xf3n-general",level:2},{value:"Prerrequisitos",id:"prerrequisitos",level:2},{value:"Configuraci\xf3n del entorno AWS",id:"configuraci\xf3n-del-entorno-aws",level:2},{value:"Cargar los m\xf3dulos Teradata para Jupyter en un dep\xf3sito S3",id:"cargar-los-m\xf3dulos-teradata-para-jupyter-en-un-dep\xf3sito-s3",level:3},{value:"Crear un rol de IAM para su instancia de Jupyter Notebooks",id:"crear-un-rol-de-iam-para-su-instancia-de-jupyter-notebooks",level:3},{value:"Crear una configuraci\xf3n de ciclo de vida para su instancia de Jupyter Notebooks",id:"crear-una-configuraci\xf3n-de-ciclo-de-vida-para-su-instancia-de-jupyter-notebooks",level:3},{value:"Crear una instancia de Jupyter Notebooks",id:"crear-una-instancia-de-jupyter-notebooks",level:3},{value:"Encontrar el CIDR IP de su instancia de Jupyter Notebooks",id:"encontrar-el-cidr-ip-de-su-instancia-de-jupyter-notebooks",level:2},{value:"Configuraci\xf3n de VantageCloud Lake",id:"configuraci\xf3n-de-vantagecloud-lake",level:2},{value:"Demostraciones de Jupyter Notebook para VantageCloud Lake",id:"demostraciones-de-jupyter-notebook-para-vantagecloud-lake",level:2},{value:"Configuraciones",id:"configuraciones",level:3},{value:"Ejecutar demostraciones",id:"ejecutar-demostraciones",level:2},{value:"Resumen",id:"resumen",level:2},{value:"Lectura adicional",id:"lectura-adicional",level:2}];function l(e){const a={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h1,{id:"ejecutar-demostraciones-de-teradata-jupyter-notebook-para-vantagecloud-lake-en-amazon-sagemaker",children:"Ejecutar demostraciones de Teradata Jupyter Notebook para VantageCloud Lake en Amazon SageMaker"}),"\n",(0,r.jsx)(a.h2,{id:"informaci\xf3n-general",children:"Informaci\xf3n general"}),"\n",(0,r.jsxs)(a.p,{children:["En este inicio r\xe1pido se detalla el proceso para ejecutar las ",(0,r.jsx)(a.a,{href:"https://github.com/Teradata/lake-demos",children:"Demostraciones de Jupyter Notebook de Teradata para VantageCloud Lake"})," en Amazon SageMaker, la plataforma IA/ML de AWS."]}),"\n",(0,r.jsx)(a.h2,{id:"prerrequisitos",children:"Prerrequisitos"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["M\xf3dulos de Teradata para Jupyter (descarga ",(0,r.jsx)(a.a,{href:"https://downloads.teradata.com/download/tools/vantage-modules-for-jupyter",children:"aqu\xed"}),", es necesario registrarse)"]}),"\n",(0,r.jsx)(a.li,{children:"Cuenta de AWS con acceso a S3 y SageMaker"}),"\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.a,{href:"/pr-preview/pr-145/es/quickstarts/vantagecloud-lake/getting-started-with-vantagecloud-lake",children:"Acceso a un entorno VantageCloud Lake"})}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"configuraci\xf3n-del-entorno-aws",children:"Configuraci\xf3n del entorno AWS"}),"\n",(0,r.jsx)(a.p,{children:"En esta secci\xf3n cubriremos en detalle cada uno de los pasos a continuaci\xf3n:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Cargar los m\xf3dulos Teradata para Jupyter en un dep\xf3sito S3"}),"\n",(0,r.jsx)(a.li,{children:"Crear un rol de IAM para su instancia de Jupyter notebook"}),"\n",(0,r.jsx)(a.li,{children:"Crear una configuraci\xf3n de ciclo de vida para su instancia de Jupyter notebook"}),"\n",(0,r.jsx)(a.li,{children:"Crear una instancia de Jupyter notebook"}),"\n",(0,r.jsx)(a.li,{children:"Encontrar el CIDR IP de su instancia de Jupyter notebook"}),"\n"]}),"\n",(0,r.jsx)(a.h3,{id:"cargar-los-m\xf3dulos-teradata-para-jupyter-en-un-dep\xf3sito-s3",children:"Cargar los m\xf3dulos Teradata para Jupyter en un dep\xf3sito S3"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"En AWS S3, cree un dep\xf3sito y tome nota del nombre asignado"}),"\n",(0,r.jsx)(a.li,{children:"Las opciones predeterminadas son apropiadas para este dep\xf3sito."}),"\n",(0,r.jsxs)(a.li,{children:["En el dep\xf3sito creado, cargue los m\xf3dulos de Teradata para Jupyter\n",(0,r.jsx)(a.img,{alt:"Cargar m\xf3dulos en el dep\xf3sito S3",src:n(19103).A+"",width:"1497",height:"477"})]}),"\n"]}),"\n",(0,r.jsx)(a.h3,{id:"crear-un-rol-de-iam-para-su-instancia-de-jupyter-notebooks",children:"Crear un rol de IAM para su instancia de Jupyter Notebooks"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["En SageMaker, navegue hasta el administrador de roles\n",(0,r.jsx)(a.img,{alt:"Creaci\xf3n de un nuevo rol",src:n(33596).A+"",width:"1077",height:"665"})]}),"\n",(0,r.jsx)(a.li,{children:"Crear un nuevo rol (si a\xfan no est\xe1 definido)"}),"\n",(0,r.jsxs)(a.li,{children:["Para los fines de esta gu\xeda, al rol creado se le asigna la persona de cient\xedfico de datos\n",(0,r.jsx)(a.img,{alt:"Nombre del rol y personalidad",src:n(83269).A+"",width:"1159",height:"621"})]}),"\n",(0,r.jsx)(a.li,{children:"En la configuraci\xf3n, es apropiado mantener los valores predeterminados"}),"\n",(0,r.jsxs)(a.li,{children:["En la pantalla correspondiente, defina el dep\xf3sito donde carg\xf3 los m\xf3dulos de Teradata Jupyter\n",(0,r.jsx)(a.img,{alt:"Dep\xf3sito S3",src:n(57710).A+"",width:"880",height:"368"})]}),"\n",(0,r.jsxs)(a.li,{children:["En la siguiente configuraci\xf3n agregamos las pol\xedticas correspondientes para el acceso al dep\xf3sito S3",(0,r.jsx)(a.br,{}),"\n",(0,r.jsx)(a.img,{alt:"Permisos de dep\xf3sito S3",src:n(5111).A+"",width:"1001",height:"603"})]}),"\n"]}),"\n",(0,r.jsx)(a.h3,{id:"crear-una-configuraci\xf3n-de-ciclo-de-vida-para-su-instancia-de-jupyter-notebooks",children:"Crear una configuraci\xf3n de ciclo de vida para su instancia de Jupyter Notebooks"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:["En SageMaker, navegue hasta configuraciones del ciclo de vida y haga clic en crear\n",(0,r.jsx)(a.img,{alt:"Configuraci\xf3n de Crear ciclo de vida",src:n(83319).A+"",width:"1834",height:"501"})]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:["Defina una configuraci\xf3n de ciclo de vida con los siguientes scripts\n* Cuando trabaje desde un entorno Windows, recomendamos copiar los scripts en el editor de configuraci\xf3n del ciclo de vida l\xednea por l\xednea. Presione 'Entrar' despu\xe9s de cada l\xednea directamente en el editor para evitar problemas de copia. Este enfoque ayuda a evitar errores de retorno de carro que pueden ocurrir debido a diferencias de codificaci\xf3n entre Windows y Linux. Estos errores a menudo se manifiestan como \"/bin/bash^M: bad interpreter\" y pueden interrumpir la ejecuci\xf3n del script.\n",(0,r.jsx)(a.img,{alt:"Configuraci\xf3n de Crear ciclo de vida",src:n(65468).A+"",width:"829",height:"878"})]}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:"Al crear un script:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",metastring:', id="sagemaker_first_config", role="content-editable emits-gtm-events"',children:'#!/bin/bash\n\nset -e\n\n# This script installs a custom, persistent installation of conda on the Notebook Instance\'s EBS volume, and ensures\n# that these custom environments are available as kernels in Jupyter.\n\n\nsudo -u ec2-user -i <<\'EOF\'\nunset SUDO_UID\n# Install a separate conda installation via Miniconda\nWORKING_DIR=/home/ec2-user/SageMaker/custom-miniconda\nmkdir -p "$WORKING_DIR"\nwget https://repo.anaconda.com/miniconda/Miniconda3-4.6.14-Linux-x86_64.sh -O "$WORKING_DIR/miniconda.sh"\nbash "$WORKING_DIR/miniconda.sh" -b -u -p "$WORKING_DIR/miniconda"\nrm -rf "$WORKING_DIR/miniconda.sh"\n# Create a custom conda environment\nsource "$WORKING_DIR/miniconda/bin/activate"\nKERNEL_NAME="teradatasql"\n\nPYTHON="3.8"\nconda create --yes --name "$KERNEL_NAME" python="$PYTHON"\nconda activate "$KERNEL_NAME"\npip install --quiet ipykernel\n\nEOF\n'})}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:"Al iniciar el script (en este script, sustituya el nombre de su dep\xf3sito y confirme la versi\xf3n de los m\xf3dulos de Jupyter)"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",metastring:', role="content-editable emits-gtm-events"',children:'#!/bin/bash\n\nset -e\n\n# This script installs Teradata Jupyter kernel and extensions.\n\n\nsudo -u ec2-user -i <<\'EOF\'\nunset SUDO_UID\n\nWORKING_DIR=/home/ec2-user/SageMaker/custom-miniconda\n\nsource "$WORKING_DIR/miniconda/bin/activate" teradatasql\n\n# Install teradatasql, teradataml, and pandas in the teradatasql environment\npip install teradataml\npip install pandas\n\n# fetch Teradata Jupyter extensions package from S3 and unzip it\nmkdir -p "$WORKING_DIR/teradata"\naws s3 cp s3://resources-jp-extensions/teradatasqllinux_3.4.1-d05242023.zip "$WORKING_DIR/teradata"\ncd "$WORKING_DIR/teradata"\nunzip -o teradatasqllinux_3.4.1-d05242023\ncp teradatakernel /home/ec2-user/anaconda3/condabin\njupyter kernelspec install --user ./teradatasql\nsource /home/ec2-user/anaconda3/bin/activate JupyterSystemEnv\n\n# Install other Teradata-related packages\npip install teradata_connection_manager_prebuilt-3.4.1.tar.gz\npip install teradata_database_explorer_prebuilt-3.4.1.tar.gz\npip install teradata_preferences_prebuilt-3.4.1.tar.gz\npip install teradata_resultset_renderer_prebuilt-3.4.1.tar.gz\npip install teradata_sqlhighlighter_prebuilt-3.4.1.tar.gz\n\nconda deactivate\nEOF\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.h3,{id:"crear-una-instancia-de-jupyter-notebooks",children:"Crear una instancia de Jupyter Notebooks"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:"En SageMaker, navegue por Notebooks, Instancias de Notebook, cree una instancia de Notebook"}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:"Elija un nombre para su instancia de notebook, defina el tama\xf1o (para demostraciones, la instancia m\xe1s peque\xf1a disponible es suficiente)"}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:["Haga clic en configuraciones adicionales y asigne la configuraci\xf3n del ciclo de vida creada recientemente\n",(0,r.jsx)(a.img,{alt:"Crear una instancia de Notebook",src:n(71455).A+"",width:"814",height:"668"})]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:"Haga clic en configuraciones adicionales y asigne la configuraci\xf3n del ciclo de vida creada recientemente"}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:["Asigne el rol de IAM creado recientemente a la instancia del cuaderno\n",(0,r.jsx)(a.img,{alt:"Asignar rol de IAM a la instancia del cuaderno",src:n(5476).A+"",width:"823",height:"415"})]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:["Pegue el enlace ",(0,r.jsx)(a.a,{href:"https://github.com/Teradata/lake-demos",children:"https://github.com/Teradata/lake-demos"})," como repositorio de GitHub predeterminado para la instancia del cuaderno\n",(0,r.jsx)(a.img,{alt:"Asignar un repositorio predeterminado para la instancia del cuaderno",src:n(75501).A+"",width:"812",height:"496"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"encontrar-el-cidr-ip-de-su-instancia-de-jupyter-notebooks",children:"Encontrar el CIDR IP de su instancia de Jupyter Notebooks"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:["Una vez que la instancia se est\xe9 ejecutando, haga clic en abrir JupyterLab\n",(0,r.jsx)(a.img,{alt:"Iniciar JupyterLab",src:n(32658).A+"",width:"1529",height:"308"})]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"Loaded JupyterLab",src:n(97667).A+"",width:"1630",height:"665"})}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:"En JupyterLab, abra un cuaderno con un kernel de Python y ejecute el siguiente comando para encontrar la direcci\xf3n IP de la instancia del cuaderno.\n** Incluiremos esta IP en la lista blanca de su entorno VantageCloud Lake para permitir la conexi\xf3n.\n** Esto es para los fines de esta gu\xeda y las demostraciones de cuadernos. Para entornos de producci\xf3n, es posible que sea necesario configurar e incluir en la lista blanca una configuraci\xf3n de VPC, subredes y grupos de seguridad."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",metastring:', role="content-editable"',children:'import requests\ndef get_public_ip():\n    try:\n        response # requests.get(\'https://api.ipify.org\')\n        return response.text\n    except requests.RequestException as e:\n        return "Error: " + str(e)\nmy_public_ip = get_public_ip()\nprint("My Public IP is:", my_public_ip)\n'})}),"\n",(0,r.jsx)(a.h2,{id:"configuraci\xf3n-de-vantagecloud-lake",children:"Configuraci\xf3n de VantageCloud Lake"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["En el entorno VantageCloud Lake, en configuraci\xf3n, agregue la IP de su instancia de notebook\n",(0,r.jsx)(a.img,{alt:"Iniciar JupyterLab",src:n(39294).A+"",width:"1423",height:"662"})]}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"demostraciones-de-jupyter-notebook-para-vantagecloud-lake",children:"Demostraciones de Jupyter Notebook para VantageCloud Lake"}),"\n",(0,r.jsx)(a.h3,{id:"configuraciones",children:"Configuraciones"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:["El ",(0,r.jsx)(a.a,{href:"https://github.com/Teradata/lake-demos/blob/main/vars.json",children:"archivo vars.json"})," del archivo debe editarse para que coincida con la configuraci\xf3n de su entorno VantageCloud Lake\n",(0,r.jsx)(a.img,{alt:"Iniciar JupyterLab",src:n(66429).A+"",width:"922",height:"904"})]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:"Espec\xedficamente se deben agregar los siguientes valores"}),"\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{children:(0,r.jsx)(a.strong,{children:"Variable"})}),(0,r.jsx)(a.th,{children:(0,r.jsx)(a.strong,{children:"Valor"})})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.strong,{children:'"host"'})}),(0,r.jsx)(a.td,{children:"Valor de IP p\xfablica de su entorno VantageCloud Lake"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.strong,{children:'"UES_URI"'})}),(0,r.jsx)(a.td,{children:"An\xe1lisis abierto desde su entorno VantageCloud Lake"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.strong,{children:'"dbc"'})}),(0,r.jsx)(a.td,{children:"La contrase\xf1a maestra de su entorno VantageCloud Lake"})]})]})]}),"\n",(0,r.jsx)(a.admonition,{type:"info",children:(0,r.jsx)(a.p,{children:"Recuerde cambiar todas las contrase\xf1as en el archivo vars.json."})}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:'Ver\xe1 que en el archivo vars.json de muestra, las contrase\xf1as de todos los usuarios est\xe1n predeterminadas en "password", esto es solo para fines ilustrativos, debe cambiar todos estos campos de contrase\xf1a a contrase\xf1as seguras, protegerlas seg\xfan sea necesario y seguir otras pr\xe1cticas recomendadas de gesti\xf3n de contrase\xf1as.'}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"ejecutar-demostraciones",children:"Ejecutar demostraciones"}),"\n",(0,r.jsxs)(a.p,{children:["Abra y ejecute todas las celdas de ",(0,r.jsx)(a.strong,{children:"0_Demo_Environment_Setup.ipynb"})," para configurar su entorno. Seguido de ",(0,r.jsx)(a.strong,{children:"1_Demo_Setup_Base_Data.ipynb"})," para cargar los datos base necesarios para las demostracion."]}),"\n",(0,r.jsxs)(a.p,{children:["Para obtener m\xe1s informaci\xf3n sobre los cuadernos de demostraci\xf3n, vaya a la p\xe1gina ",(0,r.jsx)(a.a,{href:"https://github.com/Teradata/lake-demos",children:"Demostraciones de Teradata Lake"})," en GitHub."]}),"\n",(0,r.jsx)(a.h2,{id:"resumen",children:"Resumen"}),"\n",(0,r.jsx)(a.p,{children:"En este inicio r\xe1pido, aprendimos c\xf3mo ejecutar demostraciones de Jupyter notebooks para VantageCloud Lake en Amazon SageMaker."}),"\n",(0,r.jsx)(a.h2,{id:"lectura-adicional",children:"Lectura adicional"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.a,{href:"https://docs.teradata.com/r/Teradata-VantageCloud-Lake/Getting-Started-First-Sign-On-by-Organization-Admin",children:"Documentaci\xf3n de Teradata VantageCloud Lake"})}),"\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.a,{href:"/pr-preview/pr-145/es/quickstarts/analyze-data/jupyter",children:"Utilizar Vantage desde un Jupyter Notebook"})}),"\n"]})]})}function u(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},19103:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/sagemaker-bucket-upload-0359d336e891b293b9e95b9a19716e2a.png"},83319:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/sagemaker-config-1-37bd311b7e0a198aad41540fde744660.PNG"},65468:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/sagemaker-config-2-471ede0955dd9880a74bfaab418ce85a.PNG"},97667:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/sagemaker-create-loaded-env-b4cb2bcd756253ce4ef59ad59ebebffc.PNG"},71455:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/sagemaker-create-notebook-1-90dbf20eaed6514ea59a6cc3711f1d99.PNG"},5476:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/sagemaker-create-notebook-2-8b6338dddc60bddba24a250c0b4727bb.PNG"},75501:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/sagemaker-create-notebook-3-a93f157e2cee35635753ea3c75e0cfb4.PNG"},32658:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/sagemaker-create-notebook-4-4e4787d5e37fe633f5fe277a7fdd9fe1.PNG"},33596:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/sagemaker-iam-role-0-ef40601b931005caef15743caea099f8.PNG"},83269:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/sagemaker-iam-role-1-379375347ef2d38438acbc3c6b74eb9d.PNG"},57710:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/sagemaker-iam-role-2-ed4e47f61a33c1eed8a2e5c7e9dcace8.PNG"},5111:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/sagemaker-iam-role-3-bb9bebcabc889c2b5f3e7b9cd002d484.PNG"},39294:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/sagemaker-lake-9e18bff602d568e81bbb721a3d4e2553.PNG"},66429:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/sagemaker-vars-d771ffabe211a1bd3ebd6ba6ce32468d.PNG"},28453:(e,a,n)=>{n.d(a,{R:()=>t,x:()=>o});var r=n(96540);const s={},i=r.createContext(s);function t(e){const a=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(i.Provider,{value:a},e.children)}}}]);