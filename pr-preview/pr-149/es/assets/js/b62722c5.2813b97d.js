"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[3242],{77692:(e,a,n)=>{n.d(a,{Ay:()=>i,RM:()=>o});var s=n(74848),d=n(28453);const o=[];function r(e){const a={a:"a",admonition:"admonition",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",...(0,d.R)(),...e.components};return(0,s.jsxs)(a.admonition,{type:"note",children:[(0,s.jsx)(a.mdxAdmonitionTitle,{}),(0,s.jsxs)(a.p,{children:["Si tiene alguna pregunta o necesita m\xe1s ayuda, visite nuestro ",(0,s.jsx)(a.a,{href:"https://support.teradata.com/community",children:"foro de la comunidad"})," donde podr\xe1 obtener ayuda e interactuar con otros miembros de la comunidad."]})]})}function i(e={}){const{wrapper:a}={...(0,d.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},23961:(e,a,n)=>{n.d(a,{Ay:()=>i,RM:()=>o});var s=n(74848),d=n(28453);const o=[];function r(e){const a={a:"a",admonition:"admonition",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",...(0,d.R)(),...e.components};return(0,s.jsxs)(a.admonition,{type:"note",children:[(0,s.jsx)(a.mdxAdmonitionTitle,{}),(0,s.jsxs)(a.p,{children:["Si necesita una instancia de prueba de Vantage, puede obtener una de forma gratuita en ",(0,s.jsx)(a.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})]})]})}function i(e={}){const{wrapper:a}={...(0,d.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},80524:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>t,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var s=n(74848),d=n(28453),o=n(23961),r=n(77692);const i={sidebar_position:5,id:"advanced-dbt",title:"Casos de uso avanzados de dbt con Teradata Vantage",author:"Daniel Herrera",email:"daniel.herrera2@teradata.com",page_last_update:"22 de mayo de 2023",description:"Casos de uso avanzados de dbt (Data Build Tool) con Teradata Vantage.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","elt","dbt."]},t="Casos de uso avanzados de dbt con Teradata Vantage",c={id:"manage-data/advanced-dbt",title:"Casos de uso avanzados de dbt con Teradata Vantage",description:"Casos de uso avanzados de dbt (Data Build Tool) con Teradata Vantage.",source:"@site/i18n/es/docusaurus-plugin-content-docs-quickstarts/current/manage-data/advanced-dbt.md",sourceDirName:"manage-data",slug:"/manage-data/advanced-dbt",permalink:"/pr-preview/pr-149/es/quickstarts/manage-data/advanced-dbt",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,id:"advanced-dbt",title:"Casos de uso avanzados de dbt con Teradata Vantage",author:"Daniel Herrera",email:"daniel.herrera2@teradata.com",page_last_update:"22 de mayo de 2023",description:"Casos de uso avanzados de dbt (Data Build Tool) con Teradata Vantage.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","elt","dbt."]},sidebar:"tutorialSidebar",previous:{title:"dbt con Teradata Vantage",permalink:"/pr-preview/pr-149/es/quickstarts/manage-data/dbt"},next:{title:"Automate Data Movement and Transformation with Airflow, Airbyte, and dbt in Teradata Vantage",permalink:"/pr-preview/pr-149/es/quickstarts/manage-data/airflow-airbyte-dbt"}},l={},u=[{value:"Informaci\xf3n general",id:"informaci\xf3n-general",level:2},{value:"Prerrequisitos",id:"prerrequisitos",level:2},...o.RM,{value:"Configuraci\xf3n del proyecto de demostraci\xf3n",id:"configuraci\xf3n-del-proyecto-de-demostraci\xf3n",level:2},{value:"Configuraci\xf3n del almac\xe9n de datos",id:"configuraci\xf3n-del-almac\xe9n-de-datos",level:2},{value:"Configurar dbt",id:"configurar-dbt",level:2},{value:"Acerca del almac\xe9n de Teddy Retailers",id:"acerca-del-almac\xe9n-de-teddy-retailers",level:2},{value:"Los modelos de datos",id:"los-modelos-de-datos",level:3},{value:"Las fuentes",id:"las-fuentes",level:3},{value:"Los modelos dbt",id:"los-modelos-dbt",level:2},{value:"\xc1rea provisional",id:"\xe1rea-provisional",level:3},{value:"\xc1rea central",id:"\xe1rea-central",level:3},{value:"Materializaciones incrementales",id:"materializaciones-incrementales",level:4},{value:"Afirmaciones asistidas por macros",id:"afirmaciones-asistidas-por-macros",level:4},{value:"Modificadores de Teradata",id:"modificadores-de-teradata",level:4},{value:"Ejecutar transformaciones",id:"ejecutar-transformaciones",level:2},{value:"Crear un modelo dimensional con datos de referencia.",id:"crear-un-modelo-dimensional-con-datos-de-referencia",level:3},{value:"Probar los datos",id:"probar-los-datos",level:3},{value:"Ejecutar consultas de muestra",id:"ejecutar-consultas-de-muestra",level:3},{value:"Simular el proceso ELT",id:"simular-el-proceso-elt",level:3},{value:"Resumen",id:"resumen",level:2},...r.RM];function m(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"casos-de-uso-avanzados-de-dbt-con-teradata-vantage",children:"Casos de uso avanzados de dbt con Teradata Vantage"}),"\n",(0,s.jsx)(a.h2,{id:"informaci\xf3n-general",children:"Informaci\xf3n general"}),"\n",(0,s.jsxs)(a.p,{children:["Este proyecto muestra la integraci\xf3n de dbt con Teradata Vantage desde una perspectiva de usuario avanzada.\nSi no est\xe1 familiarizado con la ingenier\xeda de datos con dbt, le recomendamos que comience con nuestro ",(0,s.jsx)(a.a,{href:"/pr-preview/pr-149/es/quickstarts/manage-data/dbt",children:"proyecto introductorio."})]}),"\n",(0,s.jsx)(a.p,{children:"Los casos de uso avanzados que se muestran en la demostraci\xf3n son los siguientes:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Materializaciones incrementales"}),"\n",(0,s.jsx)(a.li,{children:"Macros de utilidad"}),"\n",(0,s.jsx)(a.li,{children:"Optimizaci\xf3n de creaciones de tablas/vistas con modificadores espec\xedficos de Teradata"}),"\n"]}),"\n",(0,s.jsxs)(a.p,{children:["La aplicaci\xf3n de estos conceptos se ilustra a trav\xe9s del proceso ELT de ",(0,s.jsx)(a.code,{children:"teddy_retailers"}),", una tienda ficticia."]}),"\n",(0,s.jsx)(a.h2,{id:"prerrequisitos",children:"Prerrequisitos"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsx)(a.p,{children:"Acceso a una instancia de Teradata Vantage."}),"\n",(0,s.jsx)(o.Ay,{}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsxs)(a.p,{children:["Python ",(0,s.jsx)(a.strong,{children:"3.7"}),", ",(0,s.jsx)(a.strong,{children:"3.8"}),", ",(0,s.jsx)(a.strong,{children:"3.9"})," o ",(0,s.jsx)(a.strong,{children:"3.10"})," instalado."]}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsxs)(a.p,{children:["Un cliente de base de datos para ejecutar comandos de base de datos; un ejemplo de la configuraci\xf3n de uno de dichos clientes se presenta en ",(0,s.jsx)(a.a,{href:"/pr-preview/pr-149/es/quickstarts/connect-to-vantage/configure-a-teradata-vantage-connection-in-dbeaver",children:"este tutorial."}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"configuraci\xf3n-del-proyecto-de-demostraci\xf3n",children:"Configuraci\xf3n del proyecto de demostraci\xf3n"}),"\n",(0,s.jsxs)(a.ol,{children:["\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsx)(a.p,{children:"Clone el repositorio del tutorial y use cd para ir al directorio del proyecto:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"git clone https://github.com/Teradata/teddy_retailers_dbt-dev teddy_retailers\ncd teddy_retailers\n"})}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsx)(a.p,{children:"Cree un nuevo entorno Python para administrar dbt y sus dependencias. Confirme que la versi\xf3n de Python que est\xe1 utilizando para crear el entorno est\xe9 dentro de las versiones admitidas enumeradas anteriormente."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"python -m venv env\n"})}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsx)(a.p,{children:"Active el entorno Python seg\xfan su sistema operativo."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"source env/bin/activate\n"})}),"\n",(0,s.jsx)(a.p,{children:"para Mac, Linux o"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"env\\Scripts\\activate\n"})}),"\n",(0,s.jsx)(a.p,{children:"para Windows"}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsxs)(a.p,{children:["Instale el m\xf3dulo ",(0,s.jsx)(a.code,{children:"dbt-teradata"}),". El m\xf3dulo dbt principal se incluye como una dependencia, por lo que no es necesario instalarlo por separado:"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"pip install dbt-teradata\n"})}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsxs)(a.p,{children:["Instale las dependencias del proyecto ",(0,s.jsx)(a.code,{children:"dbt-utils"})," y ",(0,s.jsx)(a.code,{children:"teradata-utils"}),". Esto se puede hacer a trav\xe9s del siguiente comando:"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"dbt deps\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"configuraci\xf3n-del-almac\xe9n-de-datos",children:"Configuraci\xf3n del almac\xe9n de datos"}),"\n",(0,s.jsx)(a.p,{children:"El proyecto de demostraci\xf3n supone que los datos de origen ya est\xe1n cargados en su almac\xe9n de datos, esto imita la forma en que se utiliza dbt en un entorno de producci\xf3n.\nPara lograr este objetivo, proporcionamos conjuntos de datos p\xfablicos disponibles en Google Cload Platform (GCP) y scripts para cargar esos conjuntos de datos en su almac\xe9n de datos simulado."}),"\n",(0,s.jsxs)(a.ol,{children:["\n",(0,s.jsxs)(a.li,{children:["Cree o seleccione una base de datos funcional. El perfil dbt en el proyecto apunta a una base de datos llamada ",(0,s.jsx)(a.code,{children:"teddy_retailers"}),". Puede cambiar el valor de ",(0,s.jsx)(a.code,{children:"schema"})," para que apunte a una base de datos existente en su instancia de Teradata Vantage o puede crear la base de datos ",(0,s.jsx)(a.code,{children:"teddy_retailers"})," ejecutando el siguiente script en su cliente de base de datos:","\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"CREATE DATABASE teddy_retailers\nAS PERMANENT = 110e6,\n    SPOOL = 220e6;\n"})}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["Cargar el conjunto de datos inicial.\nPara cargar el conjunto de datos inicial en el almac\xe9n de datos, los scripts necesarios est\xe1n disponibles en la ruta ",(0,s.jsx)(a.code,{children:"references/inserts/create_data.sql"})," del proyecto.\nPuede ejecutar estos scripts copi\xe1ndolos y peg\xe1ndolos en su cliente de base de datos. Para obtener orientaci\xf3n sobre c\xf3mo ejecutar estos scripts en su caso espec\xedfico, consulte la documentaci\xf3n de su cliente de base de datos."]}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"configurar-dbt",children:"Configurar dbt"}),"\n",(0,s.jsxs)(a.p,{children:["Ahora configuraremos dbt para conectarse a su base de datos Vantage.\nCree el archivo ",(0,s.jsx)(a.code,{children:"$HOME/.dbt/profiles.yml"})," con el siguiente contenido. Ajuste ",(0,s.jsx)(a.code,{children:"<host>"}),", ",(0,s.jsx)(a.code,{children:"<user>"}),", ",(0,s.jsx)(a.code,{children:"<password>"})," para que coincida con su instancia de Teradata Vantage.\nSi ya ha utilizado dbt antes en su entorno, solo necesita agregar un perfil para el proyecto en el archivo ",(0,s.jsx)(a.code,{children:".dbt/profiles.yml"})," del directorio de su hogar.\nSi el directorio .dbt a\xfan no existe en su sistema, deber\xe1 crearlo y agregar perfiles.yml para administrar sus perfiles dbt."]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"teddy_retailers:\n  outputs:\n    dev:\n      type: teradata\n      host: <host>\n      user: <user>\n      password: <password>\n      logmech: TD2\n      schema: teddy_retailers\n      tmode: ANSI\n      threads: 1\n      timeout_seconds: 300\n      priority: interactive\n      retries: 1\n  target: dev\n"})}),"\n",(0,s.jsx)(a.p,{children:"Ahora que tenemos el archivo de perfil en su lugar, podemos validar la configuraci\xf3n:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"dbt debug\n"})}),"\n",(0,s.jsxs)(a.p,{children:["Si el comando de depuraci\xf3n devolvi\xf3 errores, es probable que tenga un problema con el contenido de ",(0,s.jsx)(a.code,{children:"profiles.yml"}),"."]}),"\n",(0,s.jsx)(a.h2,{id:"acerca-del-almac\xe9n-de-teddy-retailers",children:"Acerca del almac\xe9n de Teddy Retailers"}),"\n",(0,s.jsxs)(a.p,{children:["Como se mencion\xf3, ",(0,s.jsx)(a.code,{children:"teddy_retailers"})," es una tienda ficticia.\nA trav\xe9s de transformaciones impulsadas por dbt, transformamos los datos de origen ingeridos de la base de datos transaccional ",(0,s.jsx)(a.code,{children:"teddy_retailers"})," en un esquema en estrella listo para an\xe1lisis."]}),"\n",(0,s.jsx)(a.h3,{id:"los-modelos-de-datos",children:"Los modelos de datos"}),"\n",(0,s.jsx)(a.p,{children:"Los datos de origen constan de las siguientes tablas: orders, products y order_products, seg\xfan el siguiente diagrama de relaciones entre entidades:"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"advanceddbt1",src:n(40455).A+"",width:"877",height:"427"})}),"\n",(0,s.jsx)(a.p,{children:"Al usar dbt, aprovechamos las tablas de datos de origen para construir el siguiente modelo dimensional, que est\xe1 optimizado para herramientas de an\xe1lisis."}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"advanceddbt2",src:n(52596).A+"",width:"641",height:"609"})}),"\n",(0,s.jsx)(a.h3,{id:"las-fuentes",children:"Las fuentes"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["Para Teddy Retailers, las fuentes ",(0,s.jsx)(a.code,{children:"orders"})," y ",(0,s.jsx)(a.code,{children:"order_products"})," se actualizan peri\xf3dicamente mediante el proceso ELT (Extract, Load, Transform) de la organizaci\xf3n."]}),"\n",(0,s.jsx)(a.li,{children:"Los datos actualizados solo incluyen los \xfaltimos cambios en lugar del conjunto de datos completo debido a su gran volumen."}),"\n",(0,s.jsx)(a.li,{children:"Para abordar este desaf\xedo, es necesario capturar estas actualizaciones incrementales y al mismo tiempo preservar los datos previamente disponibles."}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"los-modelos-dbt",children:"Los modelos dbt"}),"\n",(0,s.jsxs)(a.p,{children:["El archivo ",(0,s.jsx)(a.code,{children:"schema.yml"})," en el directorio de modelos del proyecto especifica las fuentes de nuestros modelos. Estas fuentes se alinean con los datos que cargamos desde GCP usando nuestros scripts SQL."]}),"\n",(0,s.jsx)(a.h3,{id:"\xe1rea-provisional",children:"\xc1rea provisional"}),"\n",(0,s.jsx)(a.p,{children:"Los modelos del \xe1rea provisional simplemente ingieren los datos de cada una de las fuentes y cambian el nombre de cada campo, si corresponde.\nEn el esquema.yml de este directorio definimos comprobaciones de integridad b\xe1sicas para las claves primarias."}),"\n",(0,s.jsx)(a.h3,{id:"\xe1rea-central",children:"\xc1rea central"}),"\n",(0,s.jsx)(a.p,{children:"En los modelos de esta etapa se aplican los siguientes conceptos avanzados de dbt:"}),"\n",(0,s.jsx)(a.h4,{id:"materializaciones-incrementales",children:"Materializaciones incrementales"}),"\n",(0,s.jsxs)(a.p,{children:["El archivo ",(0,s.jsx)(a.code,{children:"schema.yml"})," en este directorio especifica que las materializaciones de los dos modelos que estamos construyendo son incrementales.\nEmpleamos diferentes estrategias para estos modelos:"]}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["Para ",(0,s.jsx)(a.code,{children:"all_orders model"}),", utilizamos la estrategia eliminarinsertar. Esta estrategia se implementa porque puede haber cambios en el estado de un pedido que se incluyen en las actualizaciones de datos."]}),"\n",(0,s.jsxs)(a.li,{children:["Para el modelo ",(0,s.jsx)(a.code,{children:"all_order_products"}),", empleamos la estrategia de adici\xf3n predeterminada. Se elige este enfoque porque la misma combinaci\xf3n de ",(0,s.jsx)(a.code,{children:"order_id"})," y ",(0,s.jsx)(a.code,{children:"product_id"})," puede aparecer varias veces en las fuentes.\nEsto indica que se ha agregado o eliminado una nueva cantidad del mismo producto de un pedido espec\xedfico."]}),"\n"]}),"\n",(0,s.jsx)(a.h4,{id:"afirmaciones-asistidas-por-macros",children:"Afirmaciones asistidas por macros"}),"\n",(0,s.jsxs)(a.p,{children:["Dentro del modelo ",(0,s.jsx)(a.code,{children:"all_order_products"}),", hemos incluido una afirmaci\xf3n con la ayuda de una macro para probar y garantizar que el modelo resultante abarque una combinaci\xf3n \xfanica de ",(0,s.jsx)(a.code,{children:"order_id"})," y ",(0,s.jsx)(a.code,{children:"product_id"}),". Esta combinaci\xf3n indica la \xfaltima cantidad de productos de un tipo espec\xedfico por pedido."]}),"\n",(0,s.jsx)(a.h4,{id:"modificadores-de-teradata",children:"Modificadores de Teradata"}),"\n",(0,s.jsxs)(a.p,{children:["Para los modelos ",(0,s.jsx)(a.code,{children:"all_order"})," y ",(0,s.jsx)(a.code,{children:"all_order_products"}),", hemos incorporado modificadores de Teradata para mejorar el seguimiento de estos dos modelos principales.\nPara facilitar la recopilaci\xf3n de estad\xedsticas, hemos agregado un ",(0,s.jsx)(a.code,{children:"post_hook"})," que indica al conector de la base de datos en consecuencia. Adem\xe1s, hemos creado un \xedndice en la columna ",(0,s.jsx)(a.code,{children:"order_id"})," dentro de la tabla ",(0,s.jsx)(a.code,{children:"all_orders"}),"."]}),"\n",(0,s.jsx)(a.h2,{id:"ejecutar-transformaciones",children:"Ejecutar transformaciones"}),"\n",(0,s.jsx)(a.h3,{id:"crear-un-modelo-dimensional-con-datos-de-referencia",children:"Crear un modelo dimensional con datos de referencia."}),"\n",(0,s.jsx)(a.p,{children:"Al ejecutar dbt, generamos el modelo dimensional utilizando los datos de referencia."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"dbt run\n"})}),"\n",(0,s.jsx)(a.p,{children:"Esto crear\xe1 nuestros modelos centrales y dimensionales utilizando los datos de referencia."}),"\n",(0,s.jsx)(a.h3,{id:"probar-los-datos",children:"Probar los datos"}),"\n",(0,s.jsx)(a.p,{children:"Podemos ejecutar nuestra prueba definida ejecutando:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"dbt test\n"})}),"\n",(0,s.jsx)(a.h3,{id:"ejecutar-consultas-de-muestra",children:"Ejecutar consultas de muestra"}),"\n",(0,s.jsxs)(a.p,{children:["Puede encontrar ejemplos de consultas de inteligencia empresarial en la ruta ",(0,s.jsx)(a.code,{children:"references/query"})," del proyecto. Estas consultas le permiten analizar los datos f\xe1cticos en funci\xf3n de dimensiones como clientes, pedidos y productos."]}),"\n",(0,s.jsx)(a.h3,{id:"simular-el-proceso-elt",children:"Simular el proceso ELT"}),"\n",(0,s.jsxs)(a.p,{children:["Los scripts para cargar actualizaciones en el conjunto de datos de origen se pueden encontrar en la ruta ",(0,s.jsx)(a.code,{children:"references/inserts/update_data.sql"})," del proyecto."]}),"\n",(0,s.jsx)(a.p,{children:"Despu\xe9s de actualizar las fuentes de datos, puede continuar con los pasos antes mencionados: ejecutar dbt, probar los datos y ejecutar consultas de muestra. Esto le permitir\xe1 visualizar las variaciones y actualizaciones incrementales en los datos."}),"\n",(0,s.jsx)(a.h2,{id:"resumen",children:"Resumen"}),"\n",(0,s.jsx)(a.p,{children:"En este tutorial, exploramos la utilizaci\xf3n de conceptos avanzados de dbt con Teradata Vantage.\nEl proyecto de muestra mostr\xf3 la transformaci\xf3n de datos de origen en un data mart dimensional.\nA lo largo del proyecto, implementamos varios conceptos avanzados de dbt, incluidas materializaciones incrementales, macros de utilidades y modificadores de Teradata."}),"\n",(0,s.jsx)(r.Ay,{})]})}function p(e={}){const{wrapper:a}={...(0,d.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},40455:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/advanceddbt1-30ae699175cec6251a7550a6004efbd6.svg"},52596:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/advanceddbt2-48777f66badf0b3e059ffb385f15ae7c.svg"},28453:(e,a,n)=>{n.d(a,{R:()=>r,x:()=>i});var s=n(96540);const d={},o=s.createContext(d);function r(e){const a=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),s.createElement(o.Provider,{value:a},e.children)}}}]);