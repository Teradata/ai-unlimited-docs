"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[3940],{77692:(e,a,n)=>{n.d(a,{Ay:()=>i,RM:()=>t});var s=n(74848),r=n(28453);const t=[];function o(e){const a={a:"a",admonition:"admonition",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(a.admonition,{type:"note",children:[(0,s.jsx)(a.mdxAdmonitionTitle,{}),(0,s.jsxs)(a.p,{children:["Si tiene alguna pregunta o necesita m\xe1s ayuda, visite nuestro ",(0,s.jsx)(a.a,{href:"https://support.teradata.com/community",children:"foro de la comunidad"})," donde podr\xe1 obtener ayuda e interactuar con otros miembros de la comunidad."]})]})}function i(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},23961:(e,a,n)=>{n.d(a,{Ay:()=>i,RM:()=>t});var s=n(74848),r=n(28453);const t=[];function o(e){const a={a:"a",admonition:"admonition",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(a.admonition,{type:"note",children:[(0,s.jsx)(a.mdxAdmonitionTitle,{}),(0,s.jsxs)(a.p,{children:["Si necesita una instancia de prueba de Vantage, puede obtener una de forma gratuita en ",(0,s.jsx)(a.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})]})]})}function i(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},68398:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var s=n(74848),r=n(28453),t=n(23961),o=n(77692);const i={sidebar_position:4,id:"sto",title:"Ejecutar scripts en Vantage",author:"Ad\xe1n Tworkiewicz",email:"adam.tworkiewicz@teradata.com",page_last_update:"7 de septiembre de 2021",description:"Ejecutar aplicaciones en Teradata: utilice Script Table Operator para ejecutar aplicaciones en sus datos sin moverlos.",keywords:["data warehouses","compute storage separation","teradata","vantage","script table operator","cloud data platform","object storage","business intelligence","enterprise analytics"]},l="Ejecutar scripts en Vantage",c={id:"analyze-data/sto",title:"Ejecutar scripts en Vantage",description:"Ejecutar aplicaciones en Teradata: utilice Script Table Operator para ejecutar aplicaciones en sus datos sin moverlos.",source:"@site/i18n/es/docusaurus-plugin-content-docs-quickstarts/current/analyze-data/sto.md",sourceDirName:"analyze-data",slug:"/analyze-data/sto",permalink:"/pr-preview/pr-147/es/quickstarts/analyze-data/sto",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,id:"sto",title:"Ejecutar scripts en Vantage",author:"Ad\xe1n Tworkiewicz",email:"adam.tworkiewicz@teradata.com",page_last_update:"7 de septiembre de 2021",description:"Ejecutar aplicaciones en Teradata: utilice Script Table Operator para ejecutar aplicaciones en sus datos sin moverlos.",keywords:["data warehouses","compute storage separation","teradata","vantage","script table operator","cloud data platform","object storage","business intelligence","enterprise analytics"]},sidebar:"tutorialSidebar",previous:{title:"Entrenar modelos de ML en Vantage usando funciones anal\xedticas de bases de datos",permalink:"/pr-preview/pr-147/es/quickstarts/analyze-data/ml"},next:{title:"Realizar an\xe1lisis de series temporales mediante Teradata Vantage",permalink:"/pr-preview/pr-147/es/quickstarts/analyze-data/perform-time-series-analysis-using-teradata-vantage"}},d={},u=[{value:"Informaci\xf3n general",id:"informaci\xf3n-general",level:2},{value:"Prerrequisitos",id:"prerrequisitos",level:2},...t.RM,{value:"Hello World",id:"hello-world",level:2},{value:"Idiomas admitidos",id:"idiomas-admitidos",level:2},{value:"Cargar guiones",id:"cargar-guiones",level:2},{value:"Pasar datos almacenados en Vantage a SCRIPT",id:"pasar-datos-almacenados-en-vantage-a-script",level:2},{value:"Insertar salida SCRIPT en una tabla",id:"insertar-salida-script-en-una-tabla",level:2},{value:"Resumen",id:"resumen",level:2},{value:"Lectura adicional",id:"lectura-adicional",level:2},...o.RM];function p(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"ejecutar-scripts-en-vantage",children:"Ejecutar scripts en Vantage"}),"\n",(0,s.jsx)(a.h2,{id:"informaci\xf3n-general",children:"Informaci\xf3n general"}),"\n",(0,s.jsx)(a.p,{children:"A veces, es necesario aplicar una l\xf3gica compleja a los datos que no se puede expresar f\xe1cilmente en SQL. Una opci\xf3n es envolver su l\xf3gica en una funci\xf3n definida por el usuario (User Defined Function, UDF). \xbfQu\xe9 pasa si ya tiene esta l\xf3gica codificada en un lenguaje que no es compatible con UDF? Script Table Operador es una caracter\xedstica de Vantage que le permite llevar su l\xf3gica a los datos y ejecutarlos en Vantage. La ventaja de este enfoque es que no es necesario recuperar datos de Vantage para operar con \xe9l. Adem\xe1s, al ejecutar sus aplicaciones de datos en Vantage, aprovecha su naturaleza paralela. No es necesario pensar en c\xf3mo se escalar\xe1n sus aplicaciones. Puedes dejar que Vantage se encargue de ello."}),"\n",(0,s.jsx)(a.h2,{id:"prerrequisitos",children:"Prerrequisitos"}),"\n",(0,s.jsx)(a.p,{children:"Necesita acceso a una instancia de Teradata Vantage."}),"\n",(0,s.jsx)(t.Ay,{}),"\n",(0,s.jsx)(a.h2,{id:"hello-world",children:"Hello World"}),"\n",(0,s.jsx)(a.p,{children:'Comencemos con algo simple. \xbfQu\xe9 pasar\xeda si quisiera que la base de datos imprimiera "Hello World"?'}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"SELECT *\nFROM\n  SCRIPT(\n    SCRIPT_COMMAND('echo Hello World!')\n    RETURNS ('Message varchar(512)'));\n"})}),"\n",(0,s.jsx)(a.p,{children:"Esto es lo que tengo:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"Message\n------------\nHello World!\nHello World!\n"})}),"\n",(0,s.jsxs)(a.p,{children:["Analicemos lo que acaba de pasar aqu\xed. El SQL incluye ",(0,s.jsx)(a.code,{children:"echo Hello World!"}),". Este es un comando Bash. Bien, ahora sabemos c\xf3mo ejecutar comandos Bash. \xbfPero por qu\xe9 obtuvimos 2 filas y no una? Esto se debe a que nuestro script simple se ejecut\xf3 una vez en cada AMP y resulta que tengo 2 AMP:"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"-- Teradata magic that returns the number of AMPs in a system\nSELECT hashamp()+1 AS number_of_amps;\n"})}),"\n",(0,s.jsx)(a.p,{children:"Devoluciones:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"number_of_amps\n--------------\n             2\n"})}),"\n",(0,s.jsx)(a.p,{children:"Este sencillo script demuestra la idea detr\xe1s del Script Table Operador (STO). Usted proporciona su script y la base de datos lo ejecuta en paralelo, una vez para cada AMP. Este es un modelo atractivo en caso de que tenga l\xf3gica de transformaci\xf3n en un script y muchos datos para procesar. Normalmente, necesitar\xeda incorporar simultaneidad en su aplicaci\xf3n. Al permitir que STO lo haga, permite que Teradata seleccione el nivel de concurrencia correcto para sus datos."}),"\n",(0,s.jsx)(a.h2,{id:"idiomas-admitidos",children:"Idiomas admitidos"}),"\n",(0,s.jsxs)(a.p,{children:["Bien, hicimos ",(0,s.jsx)(a.code,{children:"echo"})," en Bash, pero Bash no es un entorno productivo para expresar l\xf3gica compleja. \xbfQu\xe9 otros idiomas son compatibles entonces? La buena noticia es que cualquier binario que pueda ejecutarse en nodos Vantage se puede utilizar en STO. Recuerde que el binario y todas sus dependencias deben instalarse en todos sus nodos Vantage. En la pr\xe1ctica, significa que sus opciones estar\xe1n limitadas a lo que su administrador est\xe9 dispuesto y sea capaz de mantener en sus servidores. Python es una opci\xf3n muy popular."]}),"\n",(0,s.jsx)(a.h2,{id:"cargar-guiones",children:"Cargar guiones"}),"\n",(0,s.jsx)(a.p,{children:"De acuerdo, Hello World es muy emocionante, pero \xbfqu\xe9 pasa si tenemos l\xf3gica existente en un archivo grande? Seguramente no querr\xe1 pegar todo el script y las comillas de escape en una consulta SQL. Solucionamos el problema de carga de scripts con la funci\xf3n Archivos instalados por el usuario (User Installed Files, UIF)."}),"\n",(0,s.jsxs)(a.p,{children:["Supongamos que tiene el script ",(0,s.jsx)(a.code,{children:"helloworld.py"})," con el siguiente contenido:"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:'print("Hello World!")\n'})}),"\n",(0,s.jsxs)(a.p,{children:["Supongamos que el script est\xe1 en su m\xe1quina local en ",(0,s.jsx)(a.code,{children:"/tmp/helloworld.py"}),"."]}),"\n",(0,s.jsx)(a.p,{children:"Primero, necesitamos configurar permisos en Vantage. Haremos esto usando una nueva base de datos para mantenerla limpia."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"-- Create a new database called sto\nCREATE DATABASE STO\nAS PERMANENT = 60e6, -- 60MB\n    SPOOL = 120e6; -- 120MB\n\n-- Allow dbc user to create scripts in database STO\nGRANT CREATE EXTERNAL PROCEDURE ON STO to dbc;\n"})}),"\n",(0,s.jsx)(a.p,{children:"Puede cargar el script en Vantage mediante la siguiente llamada al procedimiento:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-python",children:"call SYSUIF.install_file('helloworld',\n                         'helloworld.py', 'cz!/tmp/helloworld.py');\n"})}),"\n",(0,s.jsx)(a.p,{children:"Ahora que se ha subido el script, puede llamarlo as\xed:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"-- We switch to STO database\nDATABASE STO\n\n-- We tell Vantage where to look for the script. This can be\n-- any string and it will create a symbolic link to the directory\n-- where our script got uploaded. By convention, we use the\n-- database name.\nSET SESSION SEARCHUIFDBPATH = sto;\n\n-- We now call the script. Note, how we use a relative path that\n-- starts with `./sto/`, which is where SEARCHUIFDBPATH\n-- is pointing.\nSELECT *\nFROM SCRIPT(\n  SCRIPT_COMMAND('python3 ./sto/helloworld.py')\n  RETURNS ('Message varchar(512)'));\n"})}),"\n",(0,s.jsx)(a.p,{children:"La \xfaltima llamada deber\xeda devolver:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"Message\n------------\nHello World!\nHello World!\n"})}),"\n",(0,s.jsxs)(a.p,{children:["Fue mucho trabajo y todav\xeda estamos en Hello World. Intentemos pasar algunos datos a ",(0,s.jsx)(a.code,{children:"SCRIPT"}),"."]}),"\n",(0,s.jsx)(a.h2,{id:"pasar-datos-almacenados-en-vantage-a-script",children:"Pasar datos almacenados en Vantage a SCRIPT"}),"\n",(0,s.jsxs)(a.p,{children:["Hasta ahora, hemos estado usando el operador ",(0,s.jsx)(a.code,{children:"SCRIPT"})," para ejecutar scripts independientes. Pero el objetivo principal de ejecutar scripts en Vantage es procesar los datos que se encuentran en Vantage. Veamos c\xf3mo podemos recuperar datos de Vantage y pasarlos a ",(0,s.jsx)(a.code,{children:"SCRIPT"}),"."]}),"\n",(0,s.jsx)(a.p,{children:"Comenzaremos creando una tabla con algunas filas."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"-- Switch to STO database.\nDATABASE STO\n\n-- Create a table with a few urls\nCREATE TABLE urls(url varchar(10000));\nINS urls('https://www.google.com/finance?q=NYSE:TDC');\nINS urls('http://www.ebay.com/sch/i.html?_trksid=p2050601.m570.l1313.TR0.TRC0.H0.Xteradata+merchandise&_nkw=teradata+merchandise&_sacat=0&_from=R40');\nINS urls('https://www.youtube.com/results?search_query=teradata%20commercial&sm=3');\nINS urls('https://www.contrivedexample.com/example?mylist=1&mylist=2&mylist=...testing');\n"})}),"\n",(0,s.jsx)(a.p,{children:"Usaremos el siguiente script para analizar los par\xe1metros de consulta:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-python",children:'from urllib.parse import urlparse\nfrom urllib.parse import parse_qsl\nimport sys\n\nfor line in sys.stdin:\n    # remove leading and trailing whitespace\n    url = line.strip()\n    parsed_url = urlparse(url)\n    query_params = parse_qsl(parsed_url.query)\n\n    for element in query_params:\n        print("\\t".join(element))\n'})}),"\n",(0,s.jsxs)(a.p,{children:["Tenga en cuenta que los scripts suponen que las URL se introducir\xe1n en ",(0,s.jsx)(a.code,{children:"stdin"})," una por una, l\xednea por l\xednea. Adem\xe1s, observe c\xf3mo imprime los resultados l\xednea por l\xednea, utilizando el car\xe1cter de tabulaci\xf3n como delimitador entre valores."]}),"\n",(0,s.jsxs)(a.p,{children:["Instalemos el script. Aqu\xed, asumimos que el archivo de script est\xe1 en ",(0,s.jsx)(a.code,{children:"/tmp/urlparser.py"})," en nuestra m\xe1quina local:"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-python",children:"CALL SYSUIF.install_file('urlparser',\n\t'urlparser.py', 'cz!/tmp/urlparser.py');\n"})}),"\n",(0,s.jsxs)(a.p,{children:["Con el script instalado, ahora recuperaremos datos de la tabla ",(0,s.jsx)(a.code,{children:"urls"})," y los introduciremos en el script para recuperar los par\xe1metros de consulta:"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"-- We inform Vantage to create a symbolic link from the UIF directory to ./sto/\nSET SESSION SEARCHUIFDBPATH = sto ;\n\nSELECT *\n  FROM SCRIPT(\n    ON(SELECT url FROM urls)\n    SCRIPT_COMMAND('python3 ./sto/urlparser.py')\n    RETURNS ('param_key varchar(512)', 'param_value varchar(512)'));\n"})}),"\n",(0,s.jsx)(a.p,{children:"Como resultado, obtenemos par\xe1metros de consulta y sus valores. Hay tantas filas como pares clave/valor. Adem\xe1s, dado que insertamos una pesta\xf1a entre la clave y el valor de salida en el script, obtenemos 2 columnas de STO."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"param_key   |param_value\n-----------------------------------------------------------------\nq           |NYSE:TDC\n_trksid     |p2050601.m570.l1313.TR0.TRC0.H0.Xteradata merchandise\nsearch_query|teradata commercial\n_nkw        |teradata merchandise\nsm          |3\n_sacat      |0\nmylist      |1\n_from       |R40\nmylist      |2\nmylist      |...testing\n"})}),"\n",(0,s.jsx)(a.h2,{id:"insertar-salida-script-en-una-tabla",children:"Insertar salida SCRIPT en una tabla"}),"\n",(0,s.jsxs)(a.p,{children:["Hemos aprendido c\xf3mo tomar datos de Vantage, pasarlos a un script y obtener resultados. \xbfExiste una manera sencilla de almacenar este resultado en una tabla? Claro que la hay. Podemos combinar la selecci\xf3n anterior con la declaraci\xf3n ",(0,s.jsx)(a.code,{children:"CREATE TABLE"}),":"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"-- We inform Vantage to create a symbolic link from the UIF directory to ./sto/\nSET SESSION SEARCHUIFDBPATH = sto ;\n\nCREATE MULTISET TABLE\n    url_params(param_key, param_value)\nAS (\n    SELECT *\n    FROM SCRIPT(\n      ON(SELECT url FROM urls)\n      SCRIPT_COMMAND('python3 ./sto/urlparser.py')\n      RETURNS ('param_key varchar(512)', 'param_value varchar(512)'))\n) WITH DATA\nNO PRIMARY INDEX;\n"})}),"\n",(0,s.jsxs)(a.p,{children:["Ahora, inspeccionemos el contenido de la tabla ",(0,s.jsx)(a.code,{children:"url_params"}),":"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"SELECT * FROM url_params;\n"})}),"\n",(0,s.jsx)(a.p,{children:"Deber\xeda ver el siguiente resultado:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"param_key   |param_value\n------------+-----------------------------------------------------\nq           |NYSE:TDC\n_trksid     |p2050601.m570.l1313.TR0.TRC0.H0.Xteradata merchandise\nsearch_query|teradata commercial\n_nkw        |teradata merchandise\nsm          |3\n_sacat      |0\nmylist      |1\n_from       |R40\nmylist      |2\nmylist      |...testing\n"})}),"\n",(0,s.jsx)(a.h2,{id:"resumen",children:"Resumen"}),"\n",(0,s.jsx)(a.p,{children:"En este inicio r\xe1pido, hemos aprendido c\xf3mo ejecutar scripts con datos en Vantage. Ejecutamos scripts utilizando Script Table Operador (STO). El operador nos permite aportar l\xf3gica a los datos. Descarga consideraciones de concurrencia a la base de datos al ejecutar nuestros scripts en paralelo, uno por AMP. Todo lo que necesita hacer es proporcionar un script y la base de datos lo ejecutar\xe1 en paralelo."}),"\n",(0,s.jsx)(a.h2,{id:"lectura-adicional",children:"Lectura adicional"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"https://docs.teradata.com/r/9VmItX3V2Ni9Ts70HbDzVg/CBAaRxUyOdF0t1SQIuXeug",children:"Teradata Vantage\u2122: Operadores SQL y funciones definidas por el usuario - SCRIPT"})}),"\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"https://docs.teradata.com/v/u/Orange-Book/R-and-Python-Analytics-with-SCRIPT-Table-Operator-Orange-Book-4.3.1",children:"An\xe1lisis de R y Python con operador de tabla SCRIPT"})}),"\n"]}),"\n",(0,s.jsx)(o.Ay,{})]})}function m(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,a,n)=>{n.d(a,{R:()=>o,x:()=>i});var s=n(96540);const r={},t=s.createContext(r);function o(e){const a=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(t.Provider,{value:a},e.children)}}}]);