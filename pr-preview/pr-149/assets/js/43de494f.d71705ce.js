"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[2414],{41269:(e,a,t)=>{t.d(a,{Ay:()=>o,RM:()=>s});var n=t(74848),r=t(28453);const s=[];function i(e){const a={a:"a",admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,n.jsx)(a.admonition,{type:"note",children:(0,n.jsxs)(a.p,{children:["If you have any questions or need further assistance, please visit our ",(0,n.jsx)(a.a,{href:"https://support.teradata.com/community",children:"community forum"})," where you can get support and interact with other community members."]})})}function o(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}},62680:(e,a,t)=>{t.d(a,{Ay:()=>o,RM:()=>s});var n=t(74848),r=t(28453);const s=[];function i(e){const a={a:"a",admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,n.jsx)(a.admonition,{type:"note",children:(0,n.jsxs)(a.p,{children:["If you need a test instance of Vantage, you can provision one for free at ",(0,n.jsx)(a.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})]})})}function o(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}},65789:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=t(74848),r=t(28453),s=t(62680),i=t(41269);const o={sidebar_position:4,id:"sto",title:"Run scripts on Vantage",author:"Adam Tworkiewicz",email:"adam.tworkiewicz@teradata.com",page_last_update:"September 7th, 2021",description:"Run Applications on Teradata - use Script Table Operator to run applications on your data without data movement.",keywords:["data warehouses","compute storage separation","teradata","vantage","script table operator","cloud data platform","object storage","business intelligence","enterprise analytics"]},l="Run scripts on Vantage",c={id:"analyze-data/sto",title:"Run scripts on Vantage",description:"Run Applications on Teradata - use Script Table Operator to run applications on your data without data movement.",source:"@site/quickstarts/analyze-data/sto.md",sourceDirName:"analyze-data",slug:"/analyze-data/sto",permalink:"/pr-preview/pr-149/quickstarts/analyze-data/sto",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,id:"sto",title:"Run scripts on Vantage",author:"Adam Tworkiewicz",email:"adam.tworkiewicz@teradata.com",page_last_update:"September 7th, 2021",description:"Run Applications on Teradata - use Script Table Operator to run applications on your data without data movement.",keywords:["data warehouses","compute storage separation","teradata","vantage","script table operator","cloud data platform","object storage","business intelligence","enterprise analytics"]},sidebar:"tutorialSidebar",previous:{title:"Train ML models in Vantage using Database Analytic Functions",permalink:"/pr-preview/pr-149/quickstarts/analyze-data/ml"},next:{title:"Perform time series analysis using Teradata Vantage",permalink:"/pr-preview/pr-149/quickstarts/analyze-data/perform-time-series-analysis-using-teradata-vantage"}},d={},p=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},...s.RM,{value:"Hello World",id:"hello-world",level:2},{value:"Supported languages",id:"supported-languages",level:2},{value:"Uploading scripts",id:"uploading-scripts",level:2},{value:"Passing data stored in Vantage to SCRIPT",id:"passing-data-stored-in-vantage-to-script",level:2},{value:"Inserting SCRIPT output into a table",id:"inserting-script-output-into-a-table",level:2},{value:"Summary",id:"summary",level:2},{value:"Further reading",id:"further-reading",level:2},...i.RM];function h(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"run-scripts-on-vantage",children:"Run scripts on Vantage"}),"\n",(0,n.jsx)(a.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(a.p,{children:"Sometimes, you need to apply complex logic to your data that can't be easily expressed in SQL. One option is to wrap your logic in a User Defined Function (UDF). What if you already have this logic coded in a language that is not supported by UDF? Script Table Operator is a Vantage feature that allows you to bring your logic to the data and run it on Vantage. The advantage of this approach is that you don't have to retrieve data from Vantage to operate on it. Also, by running your data applications on Vantage, you leverage its parallel nature. You don't have to think how your applications will scale. You can let Vantage take care of it."}),"\n",(0,n.jsx)(a.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsx)(a.p,{children:"You need access to a Teradata Vantage instance."}),"\n",(0,n.jsx)(s.Ay,{}),"\n",(0,n.jsx)(a.h2,{id:"hello-world",children:"Hello World"}),"\n",(0,n.jsx)(a.p,{children:'Let\'s start with something simple. What if you wanted the database to print "Hello World"?'}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"SELECT *\nFROM\n  SCRIPT(\n    SCRIPT_COMMAND('echo Hello World!')\n    RETURNS ('Message varchar(512)'));\n"})}),"\n",(0,n.jsx)(a.p,{children:"Here is what I've got:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"Message\n------------\nHello World!\nHello World!\n"})}),"\n",(0,n.jsxs)(a.p,{children:["Let's analyze what just happened here. The SQL includes ",(0,n.jsx)(a.code,{children:"echo Hello World!"}),". This is a Bash command. OK, so now we know how to run Bash commands. But why did we get 2 rows and not one? That's because our simple script was run once on each AMP and I happen to have 2 AMPs:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"-- Teradata magic that returns the number of AMPs in a system\nSELECT hashamp()+1 AS number_of_amps;\n"})}),"\n",(0,n.jsx)(a.p,{children:"Returns:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"number_of_amps\n--------------\n             2\n"})}),"\n",(0,n.jsx)(a.p,{children:"This simple script demonstrates the idea behind the Script Table Operator (STO). You provide your script and the database runs it in parallel, once for each AMP. This is an attractive model in case you have transformation logic in a script and a lot of data to process. Normally, you would need to build concurrency into your application. By letting STO do it, you let Teradata select the right concurrency level for your data."}),"\n",(0,n.jsx)(a.h2,{id:"supported-languages",children:"Supported languages"}),"\n",(0,n.jsxs)(a.p,{children:["OK, so we did ",(0,n.jsx)(a.code,{children:"echo"})," in Bash but Bash is hardly a productive environment to express complex logic. What other languages are supported then? The good news is that any binary that can run on Vantage nodes can be used in STO. Remember, that the binary and all its dependencies need to be installed on all your Vantage nodes. In practice, it means that your options will be limited to what your administrator is willing and able to maintain on your servers. Python is a very popular choice."]}),"\n",(0,n.jsx)(a.h2,{id:"uploading-scripts",children:"Uploading scripts"}),"\n",(0,n.jsx)(a.p,{children:"Ok, Hello World is super exciting, but what if we have existing logic in a large file. Surely, you don't want to paste your entire script and escape quotes in an SQL query. We solve the script upload issue with the User Installed Files (UIF) feature."}),"\n",(0,n.jsxs)(a.p,{children:["Say you have ",(0,n.jsx)(a.code,{children:"helloworld.py"})," script with the following content:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:'print("Hello World!")\n'})}),"\n",(0,n.jsxs)(a.p,{children:["Let's assume the script is on your local machine at ",(0,n.jsx)(a.code,{children:"/tmp/helloworld.py"}),"."]}),"\n",(0,n.jsx)(a.p,{children:"First, we need to setup permissions in Vantage. We are going to do this using a new database to keep it clean."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"-- Create a new database called sto\nCREATE DATABASE STO\nAS PERMANENT = 60e6, -- 60MB\n    SPOOL = 120e6; -- 120MB\n\n-- Allow dbc user to create scripts in database STO\nGRANT CREATE EXTERNAL PROCEDURE ON STO to dbc;\n"})}),"\n",(0,n.jsx)(a.p,{children:"You can upload the script to Vantage using the following procedure call:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:"call SYSUIF.install_file('helloworld',\n                         'helloworld.py', 'cz!/tmp/helloworld.py');\n"})}),"\n",(0,n.jsx)(a.p,{children:"Now that the script has been uploaded, you can call it like this:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"-- We switch to STO database\nDATABASE STO\n\n-- We tell Vantage where to look for the script. This can be\n-- any string and it will create a symbolic link to the directory\n-- where our script got uploaded. By convention, we use the\n-- database name.\nSET SESSION SEARCHUIFDBPATH = sto;\n\n-- We now call the script. Note, how we use a relative path that\n-- starts with `./sto/`, which is where SEARCHUIFDBPATH\n-- is pointing.\nSELECT *\nFROM SCRIPT(\n  SCRIPT_COMMAND('python3 ./sto/helloworld.py')\n  RETURNS ('Message varchar(512)'));\n"})}),"\n",(0,n.jsx)(a.p,{children:"The last call should return:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"Message\n------------\nHello World!\nHello World!\n"})}),"\n",(0,n.jsxs)(a.p,{children:["That was a lot of work and we are still at Hello World. Let's try to pass some data into ",(0,n.jsx)(a.code,{children:"SCRIPT"}),"."]}),"\n",(0,n.jsx)(a.h2,{id:"passing-data-stored-in-vantage-to-script",children:"Passing data stored in Vantage to SCRIPT"}),"\n",(0,n.jsxs)(a.p,{children:["So far, we have been using ",(0,n.jsx)(a.code,{children:"SCRIPT"})," operator to run standalone scripts. But the main purpose to run scripts on Vantage is to process data that is in Vantage. Let's see how we can retrieve data from Vantage and pass it to ",(0,n.jsx)(a.code,{children:"SCRIPT"}),"."]}),"\n",(0,n.jsx)(a.p,{children:"We will start with creating a table with a few rows."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"-- Switch to STO database.\nDATABASE STO\n\n-- Create a table with a few urls\nCREATE TABLE urls(url varchar(10000));\nINS urls('https://www.google.com/finance?q=NYSE:TDC');\nINS urls('http://www.ebay.com/sch/i.html?_trksid=p2050601.m570.l1313.TR0.TRC0.H0.Xteradata+merchandise&_nkw=teradata+merchandise&_sacat=0&_from=R40');\nINS urls('https://www.youtube.com/results?search_query=teradata%20commercial&sm=3');\nINS urls('https://www.contrivedexample.com/example?mylist=1&mylist=2&mylist=...testing');\n"})}),"\n",(0,n.jsx)(a.p,{children:"We will use the following script to parse out query parameters:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:'from urllib.parse import urlparse\nfrom urllib.parse import parse_qsl\nimport sys\n\nfor line in sys.stdin:\n    # remove leading and trailing whitespace\n    url = line.strip()\n    parsed_url = urlparse(url)\n    query_params = parse_qsl(parsed_url.query)\n\n    for element in query_params:\n        print("\\t".join(element))\n'})}),"\n",(0,n.jsxs)(a.p,{children:["Note, how the scripts assumes that urls will be fed into ",(0,n.jsx)(a.code,{children:"stdin"})," one by one, line by line. Also, note how it prints results line by line, using the tab character as a delimiter between values."]}),"\n",(0,n.jsxs)(a.p,{children:["Let's install the script. Here, we assume that the script file is at ",(0,n.jsx)(a.code,{children:"/tmp/urlparser.py"})," on our local machine:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:"CALL SYSUIF.install_file('urlparser',\n\t'urlparser.py', 'cz!/tmp/urlparser.py');\n"})}),"\n",(0,n.jsxs)(a.p,{children:["With the script installed, we will now retrieve data from ",(0,n.jsx)(a.code,{children:"urls"})," table and feed it into the script to retrieve query parameters:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"-- We inform Vantage to create a symbolic link from the UIF directory to ./sto/\nSET SESSION SEARCHUIFDBPATH = sto ;\n\nSELECT *\n  FROM SCRIPT(\n    ON(SELECT url FROM urls)\n    SCRIPT_COMMAND('python3 ./sto/urlparser.py')\n    RETURNS ('param_key varchar(512)', 'param_value varchar(512)'));\n"})}),"\n",(0,n.jsx)(a.p,{children:"As a result, we get query params and their values. There are as many rows as key/value pairs. Also, since we inserted a tab between the key and the value output in the script, we get 2 columns from STO."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"param_key   |param_value\n-----------------------------------------------------------------\nq           |NYSE:TDC\n_trksid     |p2050601.m570.l1313.TR0.TRC0.H0.Xteradata merchandise\nsearch_query|teradata commercial\n_nkw        |teradata merchandise\nsm          |3\n_sacat      |0\nmylist      |1\n_from       |R40\nmylist      |2\nmylist      |...testing\n"})}),"\n",(0,n.jsx)(a.h2,{id:"inserting-script-output-into-a-table",children:"Inserting SCRIPT output into a table"}),"\n",(0,n.jsxs)(a.p,{children:["We have learned how to take data from Vantage, pass it to a script and get output. Is there an easy way to store this output in a table? Sure, there is. We can combine the select above with ",(0,n.jsx)(a.code,{children:"CREATE TABLE"})," statement:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"-- We inform Vantage to create a symbolic link from the UIF directory to ./sto/\nSET SESSION SEARCHUIFDBPATH = sto ;\n\nCREATE MULTISET TABLE\n    url_params(param_key, param_value)\nAS (\n    SELECT *\n    FROM SCRIPT(\n      ON(SELECT url FROM urls)\n      SCRIPT_COMMAND('python3 ./sto/urlparser.py')\n      RETURNS ('param_key varchar(512)', 'param_value varchar(512)'))\n) WITH DATA\nNO PRIMARY INDEX;\n"})}),"\n",(0,n.jsxs)(a.p,{children:["Now, let's inspect the contents of ",(0,n.jsx)(a.code,{children:"url_params"})," table:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"SELECT * FROM url_params;\n"})}),"\n",(0,n.jsx)(a.p,{children:"You should see the following output:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"param_key   |param_value\n------------+-----------------------------------------------------\nq           |NYSE:TDC\n_trksid     |p2050601.m570.l1313.TR0.TRC0.H0.Xteradata merchandise\nsearch_query|teradata commercial\n_nkw        |teradata merchandise\nsm          |3\n_sacat      |0\nmylist      |1\n_from       |R40\nmylist      |2\nmylist      |...testing\n"})}),"\n",(0,n.jsx)(a.h2,{id:"summary",children:"Summary"}),"\n",(0,n.jsx)(a.p,{children:"In this quick start we have learned how to run scripts against data in Vantage. We ran scripts using Script Table Operator (STO). The operator allows us to bring logic to the data. It offloads concurrency considerations to the database by running our scripts in parallel, one per AMP. All you need to do is provide a script and the database will execute it in parallel."}),"\n",(0,n.jsx)(a.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"https://docs.teradata.com/r/9VmItX3V2Ni9Ts70HbDzVg/CBAaRxUyOdF0t1SQIuXeug",children:"Teradata Vantage\u2122 - SQL Operators and User-Defined Functions - SCRIPT"})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"https://docs.teradata.com/v/u/Orange-Book/R-and-Python-Analytics-with-SCRIPT-Table-Operator-Orange-Book-4.3.1",children:"R and Python Analytics with SCRIPT Table Operator"})}),"\n"]}),"\n",(0,n.jsx)(i.Ay,{})]})}function u(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,a,t)=>{t.d(a,{R:()=>i,x:()=>o});var n=t(96540);const r={},s=n.createContext(r);function i(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);