"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[9493],{77692:(e,a,n)=>{n.d(a,{Ay:()=>i,RM:()=>o});var t=n(74848),s=n(28453);const o=[];function r(e){const a={a:"a",admonition:"admonition",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",...(0,s.R)(),...e.components};return(0,t.jsxs)(a.admonition,{type:"note",children:[(0,t.jsx)(a.mdxAdmonitionTitle,{}),(0,t.jsxs)(a.p,{children:["Si tiene alguna pregunta o necesita m\xe1s ayuda, visite nuestro ",(0,t.jsx)(a.a,{href:"https://support.teradata.com/community",children:"foro de la comunidad"})," donde podr\xe1 obtener ayuda e interactuar con otros miembros de la comunidad."]})]})}function i(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},23961:(e,a,n)=>{n.d(a,{Ay:()=>i,RM:()=>o});var t=n(74848),s=n(28453);const o=[];function r(e){const a={a:"a",admonition:"admonition",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",...(0,s.R)(),...e.components};return(0,t.jsxs)(a.admonition,{type:"note",children:[(0,t.jsx)(a.mdxAdmonitionTitle,{}),(0,t.jsxs)(a.p,{children:["Si necesita una instancia de prueba de Vantage, puede obtener una de forma gratuita en ",(0,t.jsx)(a.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})]})]})}function i(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},78439:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var t=n(74848),s=n(28453),o=n(23961),r=n(77692);const i={sidebar_position:3,id:"mule-dbc-example",author:"Ad\xe1n Tworkiewicz",email:"adam.tworkiewicz@teradata.com",page_last_update:"30 de agosto de 2023",description:"Consulta Teradata Vantage desde un servicio Mule",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","Mule","JDBC","microservicios"]},c="Consulta Teradata Vantage desde un servicio Mule",d={id:"create-applications/mule-dbc-example",title:"Consulta Teradata Vantage desde un servicio Mule",description:"Consulta Teradata Vantage desde un servicio Mule",source:"@site/i18n/es/docusaurus-plugin-content-docs-quickstarts/current/create-applications/mule-dbc-example.md",sourceDirName:"create-applications",slug:"/create-applications/mule-dbc-example",permalink:"/pr-preview/pr-148/es/quickstarts/create-applications/mule-dbc-example",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"mule-dbc-example",author:"Ad\xe1n Tworkiewicz",email:"adam.tworkiewicz@teradata.com",page_last_update:"30 de agosto de 2023",description:"Consulta Teradata Vantage desde un servicio Mule",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","Mule","JDBC","microservicios"]},sidebar:"tutorialSidebar",previous:{title:"Conectarse a Vantage mediante Python",permalink:"/pr-preview/pr-148/es/quickstarts/create-applications/teradatasql"},next:{title:"Enviar consultas mediante REST API",permalink:"/pr-preview/pr-148/es/quickstarts/create-applications/send-queries-using-rest-api"}},l={},u=[{value:"Informaci\xf3n general",id:"informaci\xf3n-general",level:2},{value:"Prerrequisitos",id:"prerrequisitos",level:2},...o.RM,{value:"Servicio de ejemplo",id:"servicio-de-ejemplo",level:2},{value:"Configuraci\xf3n",id:"configuraci\xf3n",level:2},{value:"Ejecutar",id:"ejecutar",level:2},{value:"Lectura adicional",id:"lectura-adicional",level:2},...r.RM];function p(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"consulta-teradata-vantage-desde-un-servicio-mule",children:"Consulta Teradata Vantage desde un servicio Mule"}),"\n",(0,t.jsx)(a.h2,{id:"informaci\xf3n-general",children:"Informaci\xf3n general"}),"\n",(0,t.jsx)(a.p,{children:"Este ejemplo es un clon del proyecto de muestra Mulesoft MySQL.\nDemuestra c\xf3mo consultar una base de datos de Teradata y exponer los resultados a trav\xe9s de la REST API."}),"\n",(0,t.jsx)(a.h2,{id:"prerrequisitos",children:"Prerrequisitos"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["Mulesoft Anypoint Studio. Puede descargar una prueba de 30 d\xedas desde ",(0,t.jsx)(a.a,{href:"https://www.mulesoft.com/platform/studio",children:"https://www.mulesoft.com/platform/studio"}),"."]}),"\n",(0,t.jsx)(a.li,{children:"Acceso a una instancia de Teradata Vantage."}),"\n"]}),"\n",(0,t.jsx)(o.Ay,{}),"\n",(0,t.jsx)(a.h2,{id:"servicio-de-ejemplo",children:"Servicio de ejemplo"}),"\n",(0,t.jsx)(a.p,{children:"Este ejemplo de servicio Mule toma una solicitud HTTP, consulta la base de datos de Teradata Vantage y devuelve resultados en formato JSON."}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"flujo de servicio",src:n(2225).A+"",width:"764",height:"530"})}),"\n",(0,t.jsxs)(a.p,{children:["El conector HTTP de Mule escucha solicitudes HTTP GET con el formato: ",(0,t.jsx)(a.code,{children:"http://<host>:8081/?lastname=<parameter>"}),".\nEl conector HTTP pasa el valor de ",(0,t.jsx)(a.code,{children:"<parameter>"})," como una de las propiedades del mensaje a un conector de base de datos.\nEl conector de la base de datos est\xe1 configurado para extraer este valor y usarlo en esta consulta SQL:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"SELECT * FROM hr.employees WHERE LastName = :lastName\n"})}),"\n",(0,t.jsxs)(a.p,{children:["Como puede ver, estamos utilizando una consulta parametrizada con referencia al valor del par\xe1metro pasado al conector HTTP.\nEntonces, si el conector HTTP recibe ",(0,t.jsx)(a.a,{href:"http://localhost:8081/?lastname=Smith",children:"http://localhost:8081/?lastname=Smith"}),", la consulta SQL ser\xe1:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"SELECT * FROM employees WHERE last_name = Smith\n"})}),"\n",(0,t.jsx)(a.p,{children:"El conector de la base de datos indica al servidor de la base de datos que ejecute la consulta SQL, recupera el resultado de la consulta y lo pasa al procesador de mensajes Transform, que convierte el resultado a JSON.\nDado que el conector HTTP est\xe1 configurado como solicitud-respuesta, el resultado se devuelve al cliente HTTP de origen."}),"\n",(0,t.jsx)(a.h2,{id:"configuraci\xf3n",children:"Configuraci\xf3n"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["Clonar el repositorio ",(0,t.jsx)(a.code,{children:"Teradata/mule-jdbc-example"}),":"]}),"\n"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"  git clone https://github.com/Teradata/mule-jdbc-example\n"})}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["Edite ",(0,t.jsx)(a.code,{children:"src/main/mule/querying-a-teradata-database.xml"}),", busque la cadena de conexi\xf3n de Teradata ",(0,t.jsx)(a.code,{children:"jdbc:teradata://<HOST>/user=<username>,password=<password>"})," y reemplace los par\xe1metros de conexi\xf3n de Teradata para que coincidan con su entorno."]}),"\n"]}),"\n",(0,t.jsx)(a.admonition,{type:"note",children:(0,t.jsxs)(a.p,{children:["Si se puede acceder a su instancia Vantage a trav\xe9s de ClearScape Analytics Experience, debe reemplazar ",(0,t.jsx)(a.code,{children:"<HOST>"})," con la URL del host de su entorno de ClearScape Analytics Experience. Adem\xe1s, el 'usuario' y la 'contrase\xf1a' deben actualizarse para reflejar el nombre de usuario y la contrase\xf1a de su entorno de an\xe1lisis ClearScape."]})}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Cree una base de datos de muestra en su instancia de Vantage.\nRell\xe9nela con datos de muestra."}),"\n"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:" -- create database\n CREATE DATABASE HR\n   AS PERMANENT = 60e6, SPOOL = 120e6;\n\n -- create table\n CREATE SET TABLE HR.Employees (\n   GlobalID INTEGER,\n   FirstName VARCHAR(30),\n   LastName VARCHAR(30),\n   DateOfBirth DATE FORMAT 'YYYY-MM-DD',\n   JoinedDate DATE FORMAT 'YYYY-MM-DD',\n   DepartmentCode BYTEINT\n )\n UNIQUE PRIMARY INDEX ( GlobalID );\n\n -- insert a record\n INSERT INTO HR.Employees (\n   GlobalID,\n   FirstName,\n   LastName,\n   DateOfBirth,\n   JoinedDate,\n   DepartmentCode\n ) VALUES (\n   101,\n   'Test',\n   'Testowsky',\n   '1980-01-05',\n   '2004-08-01',\n   01\n );\n"})}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Abra el proyecto en Anypoint Studio."}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["Una vez en Anypoint Studio, haga clic en ",(0,t.jsx)(a.code,{children:"Import projects.."}),":"]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"Men\xfa de importaci\xf3n de proyectos de Anypoint",src:n(11982).A+"",width:"692",height:"654"})}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["Seleccione ",(0,t.jsx)(a.code,{children:"Anypoint Studio project from File System"}),":"]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"Opci\xf3n de importaci\xf3n de Anypoint",src:n(98143).A+"",width:"1182",height:"1104"})}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["Utilice el directorio donde clon\xf3 el repositorio git como ",(0,t.jsx)(a.code,{children:"Project Root"}),". Deje los valores predeterminados en todas las dem\xe1s configuraciones."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"ejecutar",children:"Ejecutar"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["Ejecute la aplicaci\xf3n de ejemplo en Anypoint Studio usando el men\xfa ",(0,t.jsx)(a.code,{children:"Run"}),".\nEl proyecto ahora se construir\xe1 y ejecutar\xe1. Tardar\xe1 un minuto."]}),"\n",(0,t.jsxs)(a.li,{children:["Vaya a su navegador web y env\xede la siguiente solicitud: ",(0,t.jsx)(a.a,{href:"http://localhost:8081/?lastname=Testowsky",children:"http://localhost:8081/?lastname=Testowsky"}),"."]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"Deber\xeda obtener la siguiente respuesta JSON:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-json",children:'[\n  {\n    "JoinedDate": "2004-08-01T00:00:00",\n    "DateOfBirth": "1980-01-05T00:00:00",\n    "FirstName": "Test",\n    "GlobalID": 101,\n    "DepartmentCode": 1,\n    "LastName": "Testowsky"\n  }\n]\n'})}),"\n",(0,t.jsx)(a.h2,{id:"lectura-adicional",children:"Lectura adicional"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["Consulte este ",(0,t.jsx)(a.a,{href:"http://www.mulesoft.org/documentation/display/current/Database+Connector",children:"documento"})," para obtener m\xe1s informaci\xf3n sobre c\xf3mo configurar un conector de base de datos en su m\xe1quina."]}),"\n",(0,t.jsxs)(a.li,{children:["Acceda al ",(0,t.jsx)(a.a,{href:"http://www.mulesoft.org/documentation/display/current/Database+Connector+Reference",children:"Material de referencia"})," simple para Database Connector."]}),"\n",(0,t.jsxs)(a.li,{children:["Obtenga m\xe1s informaci\xf3n sobre ",(0,t.jsx)(a.a,{href:"http://www.mulesoft.org/documentation/display/current/DataSense",children:"DataSense"}),"."]}),"\n"]}),"\n",(0,t.jsx)(r.Ay,{})]})}function m(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},11982:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/anypoint.import.projects-d8636ae9c4ac4e243e51f3871a1fea5d.png"},2225:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/flow-edb780dd627d759fb3225b74aa9efeca.png"},98143:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/select.import.option-72005c33854675c998cd404295554541.png"},28453:(e,a,n)=>{n.d(a,{R:()=>r,x:()=>i});var t=n(96540);const s={},o=t.createContext(s);function r(e){const a=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:a},e.children)}}}]);