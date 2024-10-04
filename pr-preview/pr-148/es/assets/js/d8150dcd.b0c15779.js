"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[2732],{10121:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var s=n(74848),i=n(28453);const t={id:"teradata-vantage-engine-architecture-and-concepts",title:"Arquitectura y conceptos del motor de Teradata Vantage",sidebar_label:"Arquitectura y conceptos del motor de Teradata Vantage",sidebar_position:1,author:"Krutik Pathak",email:"krutik.pathak@teradata.com",page_last_update:"7 de agosto de 2023",description:"Arquitectura y conceptos de Teradata Vantage.",keywords:["data warehouses","teradata vantage engine architecture","teradata","vantage","Access Module Processors (AMP)","Parsing Engines (PE)","Massively Parallel Processing (MPP)","Virtual Disk (Vdisks)","BYNET"]},r="Arquitectura y conceptos del motor de Teradata Vantage",o={id:"introduction/teradata-vantage-engine-architecture-and-concepts",title:"Arquitectura y conceptos del motor de Teradata Vantage",description:"Arquitectura y conceptos de Teradata Vantage.",source:"@site/i18n/es/docusaurus-plugin-content-docs-quickstarts/current/introduction/teradata-vantage-engine-architecture-and-concepts.md",sourceDirName:"introduction",slug:"/introduction/teradata-vantage-engine-architecture-and-concepts",permalink:"/pr-preview/pr-148/es/quickstarts/introduction/teradata-vantage-engine-architecture-and-concepts",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"teradata-vantage-engine-architecture-and-concepts",title:"Arquitectura y conceptos del motor de Teradata Vantage",sidebar_label:"Arquitectura y conceptos del motor de Teradata Vantage",sidebar_position:1,author:"Krutik Pathak",email:"krutik.pathak@teradata.com",page_last_update:"7 de agosto de 2023",description:"Arquitectura y conceptos de Teradata Vantage.",keywords:["data warehouses","teradata vantage engine architecture","teradata","vantage","Access Module Processors (AMP)","Parsing Engines (PE)","Massively Parallel Processing (MPP)","Virtual Disk (Vdisks)","BYNET"]},sidebar:"tutorialSidebar",next:{title:"Ejecutar Vantage Express en VMware",permalink:"/pr-preview/pr-148/es/quickstarts/get-access-to-vantage/on-your-local/getting-started-vmware"}},d={},l=[{value:"Informaci\xf3n general",id:"informaci\xf3n-general",level:3},{value:"Componentes de la arquitectura del motor de Teradata Vantage",id:"componentes-de-la-arquitectura-del-motor-de-teradata-vantage",level:2},{value:"Parsing Engines (PE)",id:"parsing-engines-pe",level:3},{value:"BYNET",id:"bynet",level:3},{value:"Parallel Database Extension (PDE)",id:"parallel-database-extension-pde",level:3},{value:"Access Module Processor (AMP)",id:"access-module-processor-amp",level:3},{value:"Virtual Disks (Vdisks)",id:"virtual-disks-vdisks",level:3},{value:"Nodo",id:"nodo",level:3},{value:"Conceptos de la arquitectura de Teradata Vantage",id:"conceptos-de-la-arquitectura-de-teradata-vantage",level:2},{value:"Crecimiento lineal y capacidad de expansi\xf3n",id:"crecimiento-lineal-y-capacidad-de-expansi\xf3n",level:3},{value:"Paralelismo de Teradata",id:"paralelismo-de-teradata",level:3},{value:"Arquitectura de recuperaci\xf3n de Teradata",id:"arquitectura-de-recuperaci\xf3n-de-teradata",level:3},{value:"Distribuci\xf3n de datos de Teradata",id:"distribuci\xf3n-de-datos-de-teradata",level:3},{value:"Conclusi\xf3n",id:"conclusi\xf3n",level:2},{value:"Lectura adicional",id:"lectura-adicional",level:2}];function c(e){const a={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"arquitectura-y-conceptos-del-motor-de-teradata-vantage",children:"Arquitectura y conceptos del motor de Teradata Vantage"}),"\n",(0,s.jsx)(a.h3,{id:"informaci\xf3n-general",children:"Informaci\xf3n general"}),"\n",(0,s.jsx)(a.p,{children:"Este art\xedculo explica los conceptos subyacentes de la arquitectura del motor de Teradata Vantage. Todas las ediciones de Vantage, incluido el cl\xfaster primario en VantageCloud Lake, utilizan el mismo motor."}),"\n",(0,s.jsx)(a.p,{children:"La arquitectura de Teradata est\xe1 dise\xf1ada en torno a una arquitectura de procesamiento masivo paralelo (Massively Parallel Processing, MPP) sin compartir, que permite el procesamiento y an\xe1lisis de datos de alto rendimiento. La arquitectura MPP distribuye la carga de trabajo en m\xfaltiples vprocs o procesadores virtuales. El procesador virtual donde se realiza el procesamiento de consultas se denomina com\xfanmente procesador de m\xf3dulo de acceso (Access Module Processor, AMP). Cada AMP est\xe1 aislado de otros AMP y procesa las consultas en paralelo, lo que permite a Teradata procesar grandes vol\xfamenes de datos r\xe1pidamente."}),"\n",(0,s.jsx)(a.p,{children:"Los principales componentes arquitect\xf3nicos del motor de Teradata Vantage incluyen motores de an\xe1lisis (Parsing Engines, PE), BYNET, procesadores de m\xf3dulo de acceso (AMP) y discos virtuales (Vdisks). Los discos virtuales se asignan a AMP en plataformas empresariales y al cl\xfaster primario en el caso de entornos VantageCloud Lake."}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"Componentes principales de la arquitectura de Teradata Vantage",src:n(59281).A+"",width:"1832",height:"1427"})}),"\n",(0,s.jsx)(a.h2,{id:"componentes-de-la-arquitectura-del-motor-de-teradata-vantage",children:"Componentes de la arquitectura del motor de Teradata Vantage"}),"\n",(0,s.jsx)(a.p,{children:"El motor de Teradata Vantage consta de los siguientes componentes:"}),"\n",(0,s.jsx)(a.h3,{id:"parsing-engines-pe",children:"Parsing Engines (PE)"}),"\n",(0,s.jsx)(a.p,{children:"Cuando se ejecuta una consulta SQL en Teradata, primero llega al motor de an\xe1lisis. Las funciones del motor de an\xe1lisis son:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Administrar sesiones de usuarios individuales (hasta 120)."}),"\n",(0,s.jsx)(a.li,{children:"Comprobar si existen los objetos utilizados en la consulta SQL."}),"\n",(0,s.jsx)(a.li,{children:"Comprobar si el usuario tiene los privilegios necesarios sobre los objetos utilizados en la consulta SQL."}),"\n",(0,s.jsx)(a.li,{children:"Analizar y optimizar las consultas SQL."}),"\n",(0,s.jsx)(a.li,{children:"Preparar el plan de ejecuci\xf3n para ejecutar la consulta SQL y pasarla a los AMP correspondientes."}),"\n",(0,s.jsx)(a.li,{children:"Recibir la respuesta de los AMP y enviarla al cliente solicitante."}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"bynet",children:"BYNET"}),"\n",(0,s.jsx)(a.p,{children:"BYNET es un sistema que permite la comunicaci\xf3n de componentes. El sistema BYNET proporciona funciones de fusi\xf3n y transmisi\xf3n bidireccional de alta velocidad, multidifusi\xf3n y comunicaci\xf3n punto a punto. Realiza tres funciones clave: coordinar consultas de m\xfaltiples AMP, leer datos de m\xfaltiples AMP, regulando el flujo de mensajes para evitar la congesti\xf3n, y procesar el rendimiento de la plataforma. Estas funciones de BYNET hacen que Vantage sea altamente escalable y permiten capacidades de procesamiento masivo paralelo (MPP)."}),"\n",(0,s.jsx)(a.h3,{id:"parallel-database-extension-pde",children:"Parallel Database Extension (PDE)"}),"\n",(0,s.jsx)(a.p,{children:"Parallel Database Extension (PDE) es una capa de software intermediaria ubicada entre el sistema operativo y la base de datos Teradata Vantage. PDE permite que los sistemas MPP utilicen funciones como BYNET y discos compartidos. Facilita el paralelismo responsable de la velocidad y la escalabilidad lineal de la base de datos Teradata Vantage."}),"\n",(0,s.jsx)(a.h3,{id:"access-module-processor-amp",children:"Access Module Processor (AMP)"}),"\n",(0,s.jsx)(a.p,{children:"Los AMP son responsables del almacenamiento y la recuperaci\xf3n de los datos. Cada AMP est\xe1 asociado con su propio conjunto de discos virtuales (Vdisks) donde se almacenan los datos, y ning\xfan otro AMP puede acceder a ese contenido de acuerdo con la arquitectura de nada compartido. Las funciones de AMP son:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Acceder al almacenamiento utilizando el software Block File System de Vantage"}),"\n",(0,s.jsx)(a.li,{children:"Gestionar los bloqueos"}),"\n",(0,s.jsx)(a.li,{children:"Ordenar filas"}),"\n",(0,s.jsx)(a.li,{children:"Agregar columnas"}),"\n",(0,s.jsx)(a.li,{children:"Procesar uniones"}),"\n",(0,s.jsx)(a.li,{children:"Convertir salidas"}),"\n",(0,s.jsx)(a.li,{children:"Gestionar el espacio en disco"}),"\n",(0,s.jsx)(a.li,{children:"Contabilidad"}),"\n",(0,s.jsx)(a.li,{children:"Procesar la recuperaci\xf3n"}),"\n"]}),"\n",(0,s.jsx)(a.admonition,{type:"note",children:(0,s.jsx)(a.p,{children:"Los AMP en VantageCore IntelliFlex, VantageCore VMware, VantageCloud Enterprise y el cl\xfaster primario en el caso de VantageCloud Lake almacenan datos en un formato de sistema de archivos de bloque (BFS) en discos virtuales. Los AMP en Compute Clusters y Compute Worker Nodes en VantageCloud Lake no tienen BFS, solo pueden acceder a los datos en el almacenamiento de objetos utilizando el Object File System (OFS)."})}),"\n",(0,s.jsx)(a.h3,{id:"virtual-disks-vdisks",children:"Virtual Disks (Vdisks)"}),"\n",(0,s.jsx)(a.p,{children:"Estas son unidades de espacio de almacenamiento propiedad de un AMP. Los discos virtuales se utilizan para almacenar datos de usuario (filas dentro de tablas). Los discos virtuales se asignan al espacio f\xedsico de un disco."}),"\n",(0,s.jsx)(a.h3,{id:"nodo",children:"Nodo"}),"\n",(0,s.jsx)(a.p,{children:"Un nodo, en el contexto de los sistemas Teradata, representa un servidor individual que funciona como plataforma de hardware para el software de base de datos. Sirve como una unidad de procesamiento donde las operaciones de la base de datos se ejecutan bajo el control de un \xfanico sistema operativo. Cuando Teradata se implementa en una nube, sigue la misma arquitectura MPP, sin compartir, pero los nodos f\xedsicos se reemplazan con m\xe1quinas virtuales (Virtual Machine, VM)."}),"\n",(0,s.jsx)(a.h2,{id:"conceptos-de-la-arquitectura-de-teradata-vantage",children:"Conceptos de la arquitectura de Teradata Vantage"}),"\n",(0,s.jsx)(a.p,{children:"Los conceptos siguientes son aplicables a Teradata Vantage."}),"\n",(0,s.jsx)(a.h3,{id:"crecimiento-lineal-y-capacidad-de-expansi\xf3n",children:"Crecimiento lineal y capacidad de expansi\xf3n"}),"\n",(0,s.jsx)(a.p,{children:"Teradata es un RDBMS linealmente expandible. A medida que aumentan la carga de trabajo y el volumen de datos, agregar m\xe1s recursos de hardware, como servidores o nodos, da como resultado un aumento proporcional en el rendimiento y la capacidad. La escalabilidad lineal permite una mayor carga de trabajo sin disminuir el rendimiento."}),"\n",(0,s.jsx)(a.h3,{id:"paralelismo-de-teradata",children:"Paralelismo de Teradata"}),"\n",(0,s.jsx)(a.p,{children:"El paralelismo de Teradata se refiere a la capacidad inherente de Teradata Database para realizar procesamiento paralelo de datos y consultas en m\xfaltiples nodos o componentes simult\xe1neamente."}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Cada motor de an\xe1lisis (PE) en Teradata tiene la capacidad de manejar hasta 120 sesiones simult\xe1neamente."}),"\n",(0,s.jsx)(a.li,{children:"BYNET en Teradata permite el manejo paralelo de toda la actividad de mensajes, incluida la redistribuci\xf3n de datos para tareas posteriores."}),"\n",(0,s.jsx)(a.li,{children:"Todos los procesadores de m\xf3dulos de acceso (AMP) de Teradata pueden colaborar en paralelo para atender cualquier solicitud entrante."}),"\n",(0,s.jsx)(a.li,{children:"Cada AMP puede funcionar en m\xfaltiples solicitudes al mismo tiempo, lo que permite un procesamiento paralelo eficiente."}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"Paralelismo de Teradata",src:n(64093).A+"",width:"1613",height:"1243"})}),"\n",(0,s.jsx)(a.h3,{id:"arquitectura-de-recuperaci\xf3n-de-teradata",children:"Arquitectura de recuperaci\xf3n de Teradata"}),"\n",(0,s.jsx)(a.p,{children:"Los pasos clave involucrados en la Arquitectura de recuperaci\xf3n de Teradata son:"}),"\n",(0,s.jsxs)(a.ol,{children:["\n",(0,s.jsx)(a.li,{children:"El motor de an\xe1lisis env\xeda una solicitud para recuperar una o m\xe1s filas."}),"\n",(0,s.jsx)(a.li,{children:"BYNET activa los AMP relevantes para su procesamiento."}),"\n",(0,s.jsx)(a.li,{children:"Los AMP localizan y recuperan simult\xe1neamente las filas deseadas a trav\xe9s del acceso paralelo."}),"\n",(0,s.jsx)(a.li,{children:"BYNET devuelve las filas recuperadas al motor de an\xe1lisis."}),"\n",(0,s.jsx)(a.li,{children:"Luego, el motor de an\xe1lisis devuelve las filas a la aplicaci\xf3n cliente solicitante."}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"Arquitectura de recuperaci\xf3n de Teradata",src:n(14809).A+"",width:"1594",height:"1650"})}),"\n",(0,s.jsx)(a.h3,{id:"distribuci\xf3n-de-datos-de-teradata",children:"Distribuci\xf3n de datos de Teradata"}),"\n",(0,s.jsx)(a.p,{children:"La arquitectura MPP de Teradata requiere un medio eficiente para distribuir y recuperar datos y lo hace mediante particiones hash. La mayor\xeda de las tablas en Vantage usan hash para distribuir datos para las tablas seg\xfan el valor del \xedndice primario (PI) de la fila al almacenamiento en disco en el sistema de archivos en bloque (BFS) y pueden escanear toda la tabla o usar \xedndices para acceder a los datos. Este enfoque garantiza un rendimiento escalable y un acceso eficiente a los datos."}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Si el \xedndice primario es \xfanico, las filas de las tablas se distribuyen autom\xe1ticamente de manera uniforme mediante particiones hash."}),"\n",(0,s.jsx)(a.li,{children:"Las columnas del \xedndice primario designadas tienen un hash para generar c\xf3digos hash coherentes para los mismos valores."}),"\n",(0,s.jsx)(a.li,{children:"No se requiere reorganizaci\xf3n, repartici\xf3n ni gesti\xf3n del espacio."}),"\n",(0,s.jsx)(a.li,{children:"Cada AMP normalmente contiene filas de todas las tablas, lo que garantiza un acceso y procesamiento de datos eficiente."}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"Distribuci\xf3n de datos de Teradata",src:n(65466).A+"",width:"808",height:"278"})}),"\n",(0,s.jsx)(a.h2,{id:"conclusi\xf3n",children:"Conclusi\xf3n"}),"\n",(0,s.jsx)(a.p,{children:"En este art\xedculo, cubrimos los principales componentes arquitect\xf3nicos de Teradata Vantage, como los motores de an\xe1lisis (PE), BYNET, los procesadores del m\xf3dulo de acceso (AMP), el disco virtual (Vdisk) y otros componentes arquitect\xf3nicos como la extensi\xf3n de base de datos paralela (PDE), Node y los conceptos esenciales de Teradata Vantage, como crecimiento lineal y capacidad de expansi\xf3n, paralelismo, recuperaci\xf3n de datos y distribuci\xf3n de datos."}),"\n",(0,s.jsx)(a.h2,{id:"lectura-adicional",children:"Lectura adicional"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Database-Introduction/Vantage-Hardware-and-Software-Architecture/Virtual-Processors/Parsing-Engine",children:"Motor de anal\xedticas"})}),"\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"https://www.teradata.com/Blogs/What-Is-the-BYNET-and-Why-Is-It-Important-to-Vantage",children:"BYNET"})}),"\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Database-Introduction/Vantage-Hardware-and-Software-Architecture/Virtual-Processors/Access-Module-Processor",children:"Access Module Processor"})}),"\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Database-Introduction/Vantage-Hardware-and-Software-Architecture/Parallel-Database-Extensions",children:"Parallel Database Extensions"})}),"\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Database-Introduction/Data-Distribution-and-Data-Access-Methods",children:"M\xe9todos de acceso y distribuci\xf3n de datos de Teradata"})}),"\n"]})]})}function u(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},59281:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/teradata_architecture_major_components-7765b95b61d10d943b332ebf6febe6eb.png"},65466:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/teradata_data_distribution-327311847473ff2f4912cf933490a902.png"},64093:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/teradata_parallelism-8d274f7c12f5a56401aa851c794c28b4.png"},14809:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/teradata_retrieval_architecture-6cd252bde7f84fcb85c4eedb1542174c.png"},28453:(e,a,n)=>{n.d(a,{R:()=>r,x:()=>o});var s=n(96540);const i={},t=s.createContext(i);function r(e){const a=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(t.Provider,{value:a},e.children)}}}]);