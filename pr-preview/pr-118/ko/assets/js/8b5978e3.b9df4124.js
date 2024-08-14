"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[3294],{24206:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>h,contentTitle:()=>u,default:()=>g,frontMatter:()=>d,metadata:()=>c,toc:()=>p});var t=a(74848),r=a(28453),s=a(56240),i=a(19365);function o(e){const n={code:"code",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(s.A,{children:[(0,t.jsx)(i.A,{value:"Windows",label:"Windows",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'docker run -e "accept_license=Y" -p 127.0.0.1:8888:8888 -v ${PWD}:/home/jovyan/JupyterLabRoot teradata/jupyterlab-extensions\n'})})}),(0,t.jsx)(i.A,{value:"MacOS",label:"MacOS",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'docker run -e "accept_license=Y" -p 127.0.0.1:8888:8888 -v $PWD:/home/jovyan/JupyterLabRoot teradata/jupyterlab-extensions\n'})})}),(0,t.jsx)(i.A,{value:"Linux",label:"Linux",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'docker run -e "accept_license=Y" -p 127.0.0.1:8888:8888 -v $PWD:/home/jovyan/JupyterLabRoot teradata/jupyterlab-extensions\n'})})})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}const d={sidebar_position:3,author:"Janeth Graziani",email:"Janeth.graziani@teradata.com",page_last_update:"January 11, 2024",description:"Learn how to run VantageCloud Lake Demos using Jupyter notebooks in Visual Studio Code.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","business intelligence","enterprise analytics","jupyter","teradatasql","ipython-sql","teradatasqlalchemy","vantagecloud","vantagecloud lake","public internet","visual studio code","IDE","data analytics","data science"]},u="Run Teradata Jupyter Notebook Demos for VantageCloud Lake in Visual Studio Code",c={id:"vantagecloud-lake/vantagecloud-lake-demos-visual-studio-code",title:"Run Teradata Jupyter Notebook Demos for VantageCloud Lake in Visual Studio Code",description:"Learn how to run VantageCloud Lake Demos using Jupyter notebooks in Visual Studio Code.",source:"@site/quickstarts/vantagecloud-lake/vantagecloud-lake-demos-visual-studio-code.md",sourceDirName:"vantagecloud-lake",slug:"/vantagecloud-lake/vantagecloud-lake-demos-visual-studio-code",permalink:"/pr-preview/pr-118/ko/quickstarts/vantagecloud-lake/vantagecloud-lake-demos-visual-studio-code",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,author:"Janeth Graziani",email:"Janeth.graziani@teradata.com",page_last_update:"January 11, 2024",description:"Learn how to run VantageCloud Lake Demos using Jupyter notebooks in Visual Studio Code.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","business intelligence","enterprise analytics","jupyter","teradatasql","ipython-sql","teradatasqlalchemy","vantagecloud","vantagecloud lake","public internet","visual studio code","IDE","data analytics","data science"]},sidebar:"tutorialSidebar",previous:{title:"Run Teradata Jupyter Notebook Demos for VantageCloud Lake in Docker",permalink:"/pr-preview/pr-118/ko/quickstarts/vantagecloud-lake/vantagecloud-lake-demo-jupyter-docker"},next:{title:"Run Teradata Jupyter Notebook Demos for VantageCloud Lake in Amazon SageMaker",permalink:"/pr-preview/pr-118/ko/quickstarts/vantagecloud-lake/vantagecloud-lake-demo-jupyter-sagemaker"}},h={},p=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Clone VantageCloud Lake Demo repository",id:"clone-vantagecloud-lake-demo-repository",level:2},{value:"Start a Jupyterlab docker container with Teradata Jupyter Exensions",id:"start-a-jupyterlab-docker-container-with-teradata-jupyter-exensions",level:2},{value:"Visual Studio Code Configuration",id:"visual-studio-code-configuration",level:2},{value:"Edit vars.json file",id:"edit-varsjson-file",level:3},{value:"Modify path to vars.json in UseCases directory",id:"modify-path-to-varsjson-in-usecases-directory",level:3},{value:"Configuring Jupyter Kernels",id:"configuring-jupyter-kernels",level:3},{value:"Run demos",id:"run-demos",level:3},{value:"Summary",id:"summary",level:2}];function m(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"run-teradata-jupyter-notebook-demos-for-vantagecloud-lake-in-visual-studio-code",children:"Run Teradata Jupyter Notebook Demos for VantageCloud Lake in Visual Studio Code"}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"Visual Studio Code is a popular open-source code editor compatible with Windows, MacOs, and Linux. Developers use this Integrated Development Environment (IDE) for coding, debugging, building, and deploying applications. In this quickstart guide, we launch VantageCloud Lake Jupyter notebook demos within Visual Studio Code."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"vscode.png",src:a(86749).A+"",width:"3444",height:"2136"})}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"Before you begin, ensure you have the following prerequisites in place:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://www.docker.com/products/docker-desktop",children:"Docker Desktop"})," installed"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git",children:"Git"})," installed","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Required to download git repo from ",(0,t.jsx)(n.a,{href:"https://github.com/Teradata/lake-demos.git",children:"https://github.com/Teradata/lake-demos.git"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://code.visualstudio.com/download",children:"Visual Studio Code"})," installed"]}),"\n",(0,t.jsxs)(n.li,{children:["A Teradata VantageCloud Lake account with organization URL and login details from the Teradata welcome letter","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Once logged in follow these ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-118/ko/quickstarts/vantagecloud-lake/getting-started-with-vantagecloud-lake#create-an-environment",children:"instructions"})," to create a VantageCloud Lake Enviorment"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"clone-vantagecloud-lake-demo-repository",children:"Clone VantageCloud Lake Demo repository"}),"\n",(0,t.jsx)(n.p,{children:"Begin by cloning the GitHub repository and navigating to the project directory:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/Teradata/lake-demos.git\ncd lake-demos\n"})}),"\n",(0,t.jsx)(n.h2,{id:"start-a-jupyterlab-docker-container-with-teradata-jupyter-exensions",children:"Start a Jupyterlab docker container with Teradata Jupyter Exensions"}),"\n",(0,t.jsxs)(n.p,{children:["To launch Teradata VantageCloud Lake demos, we need the ",(0,t.jsx)(n.a,{href:"https://hub.docker.com/r/teradata/jupyterlab-extensions",children:"Teradata Jupyter Extensions for Docker"}),". These extensions provide the SQL ipython kernel, utilities to manage connections to Teradata, and the database object explorer to make you productive while interacting with the Teradata database."]}),"\n",(0,t.jsx)(n.p,{children:"Next, start a container and bind it to the existing lake-demos directory. Choose the appropriate command based on your operating system:"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"For Windows, run the docker command in PowerShell."})}),"\n",(0,t.jsx)(l,{}),"\n",(0,t.jsxs)(n.p,{children:["Take note of the resulting URL and token; you\u2019ll need them to establish the connection from Visual Studio Code.\n",(0,t.jsx)(n.img,{alt:"terminal.png",src:a(25163).A+"",width:"1620",height:"258"})]}),"\n",(0,t.jsx)(n.h2,{id:"visual-studio-code-configuration",children:"Visual Studio Code Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["Open ",(0,t.jsx)(n.code,{children:"lake-demos"})," project directory in Visual Studio Code. The repository contains the following project tree:"]}),"\n",(0,t.jsx)(n.p,{children:"LAKE_DEMOS"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/Teradata/lake-demos/tree/main/UseCases",children:"UseCases"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/Teradata/lake-demos/blob/main/0_Demo_Environment_Setup.ipynb",children:"0_Demo_Environment_Setup.ipynb"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/Teradata/lake-demos/blob/main/1_Load_Base_Demo_Data.ipynb",children:"1_Load_Base_Demo_Data.ipynb"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/Teradata/lake-demos/blob/main/Data_Engineering_Exploration.ipynb",children:"Data_Engineering_Exploration.ipynb"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/Teradata/lake-demos/blob/main/Data_Science_OAF.ipynb",children:"Data_Science_OAF.ipynb"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/Teradata/lake-demos/blob/main/Demo_Admin.ipynb",children:"Demo_Admin.ipynb"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/Teradata/lake-demos/blob/main/vars.json",children:"vars.json file"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"edit-varsjson-file",children:"Edit vars.json file"}),"\n",(0,t.jsxs)(n.p,{children:["Edit the ",(0,t.jsx)(n.a,{href:"https://github.com/Teradata/lake-demos/blob/main/vars.json",children:(0,t.jsx)(n.strong,{children:"vars.json"})})," file to include the required credentials to run the demos"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Variable"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Value"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:'"host"'})}),(0,t.jsx)(n.td,{children:"Public IP value from your VantageCloud Lake environment"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:'"UES_URI"'})}),(0,t.jsx)(n.td,{children:"Open Analytics from your VantageCloud Lake environment"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:'"dbc"'})}),(0,t.jsx)(n.td,{children:"The master password of your VantageCloud Lake environment."})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["To retrieve a Public IP address and Open Analytics Endpoint follow these ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-118/ko/quickstarts/vantagecloud-lake/getting-started-with-vantagecloud-lake#create-an-environment",children:"instructions"})]}),"\n",(0,t.jsx)(n.admonition,{type:"important",children:(0,t.jsx)(n.p,{children:'Change passwords in the vars.json file. You\'ll see that in the sample vars.json, the passwords of all users are defaulted to "password", this is just for matters of the sample file, you should change all of these password fields to strong passwords, secure them as necessary and follow other password management best practices.'})}),"\n",(0,t.jsx)(n.h3,{id:"modify-path-to-varsjson-in-usecases-directory",children:"Modify path to vars.json in UseCases directory"}),"\n",(0,t.jsx)(n.p,{children:"In the UseCases directory, all .ipynb files use the path ../../vars.json to load the variables from the JSON file when working from Jupyterlab. To work directly from Visual Studio Code, update the code in each .ipynb to point to vars.json."}),"\n",(0,t.jsx)(n.p,{children:"The quickest way to make these changes is via search feature on the left vertical  menu. Search for"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"'../../vars.json'\n"})}),"\n",(0,t.jsx)(n.p,{children:"and replace with:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"'vars.json'\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"search",src:a(93343).A+"",width:"1158",height:"402"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"replace",src:a(70451).A+"",width:"560",height:"434"})}),"\n",(0,t.jsx)(n.h3,{id:"configuring-jupyter-kernels",children:"Configuring Jupyter Kernels"}),"\n",(0,t.jsxs)(n.p,{children:["Open ",(0,t.jsx)(n.strong,{children:"0_Demo_Environment_Setup.ipynb"})," and click on Select Kernel at the top right corner of Visual Studio Code."]}),"\n",(0,t.jsx)(n.p,{children:"If you have not installed Jupyter and Python extensions, Visual Studio Code will prompt you to install them. These extensions are necessary for Visual Studio Code to detect Kernels. To install them, select 'Install/Enable suggested extensions for Python and Jupyter.'"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"select.kernel.png",src:a(93370).A+"",width:"3140",height:"516"})}),"\n",(0,t.jsxs)(n.p,{children:["Once you've installed the necessary extensions, you'll find options in the drop-down menu. Choose ",(0,t.jsx)(n.strong,{children:"Existing Jupyter Kernel"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"existing.kernel.png",src:a(43231).A+"",width:"885",height:"204"})}),"\n",(0,t.jsx)(n.p,{children:"Enter the URL of the running Jupyter Server and press enter."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"http://localhost:8888\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"server.url.png",src:a(69299).A+"",width:"864",height:"133"})}),"\n",(0,t.jsx)(n.p,{children:"Enter the token found in your terminal when mounting files to the Docker container and press Enter."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"server.password.png",src:a(26537).A+"",width:"858",height:"139"})}),"\n",(0,t.jsx)(n.p,{children:"Change Server Display Name (Leave Blank To Use URL)"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"server.display.name.png",src:a(94723).A+"",width:"860",height:"130"})}),"\n",(0,t.jsx)(n.p,{children:"You now have access to all the Teradata Vantage extension kernels. Select Python 3 (ipykernel) from the running Jupyter server."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"python.kernel.png",src:a(33472).A+"",width:"868",height:"234"})}),"\n",(0,t.jsx)(n.h3,{id:"run-demos",children:"Run demos"}),"\n",(0,t.jsxs)(n.p,{children:["Execute all the cells in ",(0,t.jsx)(n.em,{children:"0_Demo_Environment_Setup.ipynb"})," to setup your environment. Followed by ",(0,t.jsx)(n.em,{children:"1_Demo_Setup_Base_Data.ipynb"})," to load the base data required for demo.\nTo learn more about the demo notebooks, go to ",(0,t.jsx)(n.a,{href:"https://github.com/Teradata/lake-demos",children:"Teradata Lake demos"})," page on GitHub."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"demoenvsetup.png",src:a(57702).A+"",width:"1822",height:"991"})}),"\n",(0,t.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,t.jsx)(n.p,{children:"In this quickstart guide, we configured Visual Studio Code to access VantageCloud Lake demos using Jupyter notebooks."})]})}function g(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},19365:(e,n,a)=>{a.d(n,{A:()=>i});a(96540);var t=a(34164);const r={tabItem:"tabItem_Ymn6"};var s=a(74848);function i(e){var n=e.children,a=e.hidden,i=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,i),hidden:a,children:n})}},56240:(e,n,a)=>{a.d(n,{A:()=>y});var t=a(96540),r=a(34164),s=a(23104),i=a(56347),o=a(205),l=a(57485);var d=a(89466);function u(e){var n,a;return null!=(n=null==(a=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?n:[]}function c(e){var n=e.values,a=e.children;return(0,t.useMemo)((function(){var e=null!=n?n:function(e){return u(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(a);return function(e){var n,a,t=(void 0===(a=function(e,n){return e.value===n.value})&&(a=function(e,n){return e===n}),(n=e).filter((function(e,t){return n.findIndex((function(n){return a(n,e)}))!==t})));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,a])}function h(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function p(e){var n=e.queryString,a=void 0!==n&&n,r=e.groupId,s=(0,i.W6)(),o=function(e){var n=e.queryString,a=void 0!==n&&n,t=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:a,groupId:r});return[(0,l.aZ)(o),(0,t.useCallback)((function(e){if(o){var n=new URLSearchParams(s.location.search);n.set(o,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[o,s])]}function m(e){var n,a,r,s,i=e.defaultValue,l=e.queryString,u=void 0!==l&&l,m=e.groupId,g=c(e),v=(0,t.useState)((function(){return function(e){var n,a=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(n=t.find((function(e){return e.default})))?n:t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:g})})),b=v[0],f=v[1],j=p({queryString:u,groupId:m}),x=j[0],y=j[1],k=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:m}.groupId),a=(0,d.Dv)(n),r=a[0],s=a[1],[r,(0,t.useCallback)((function(e){n&&s.set(e)}),[n,s])]),w=k[0],C=k[1],V=function(){var e=null!=x?x:w;return h({value:e,tabValues:g})?e:null}();return(0,o.A)((function(){V&&f(V)}),[V]),{selectedValue:b,selectValue:(0,t.useCallback)((function(e){if(!h({value:e,tabValues:g}))throw new Error("Can't select invalid tab value="+e);f(e),y(e),C(e)}),[y,C,g]),tabValues:g}}var g=a(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=a(74848);function f(e){var n=e.className,a=e.block,t=e.selectedValue,i=e.selectValue,o=e.tabValues,l=[],d=(0,s.a_)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,a=l.indexOf(n),r=o[a].value;r!==t&&(d(n),i(r))},c=function(e){var n,a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var t,r=l.indexOf(e.currentTarget)+1;a=null!=(t=l[r])?t:l[0];break;case"ArrowLeft":var s,i=l.indexOf(e.currentTarget)-1;a=null!=(s=l[i])?s:l[l.length-1]}null==(n=a)||n.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},n),children:o.map((function(e){var n=e.value,a=e.label,s=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:function(e){return l.push(e)},onKeyDown:c,onClick:u},s,{className:(0,r.A)("tabs__item",v.tabItem,null==s?void 0:s.className,{"tabs__item--active":t===n}),children:null!=a?a:n}),n)}))})}function j(e){var n=e.lazy,a=e.children,r=e.selectedValue,s=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){var i=s.find((function(e){return e.props.value===r}));return i?(0,t.cloneElement)(i,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map((function(e,n){return(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})}))})}function x(e){var n=m(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,b.jsx)(f,Object.assign({},e,n)),(0,b.jsx)(j,Object.assign({},e,n))]})}function y(e){var n=(0,g.A)();return(0,b.jsx)(x,Object.assign({},e,{children:u(e.children)}),String(n))}},57702:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/demoenvsetup-27ed84b9008334333a03eb6476262428.png"},43231:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/existing.kernel-b893c017d4e8ed9e4beb3e85b4a3454e.png"},33472:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/python.kernel-4d46ac77b426cfb1346233a028c73958.png"},70451:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/replace-bcf54ece5b7c9aa548b7243e00fd2c67.png"},93343:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/search-72b082202967672eff33b6c090e9dbba.png"},93370:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/select.kernel-703a383b5df2d41d96bf3c474453b2f8.png"},94723:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/server.display.name-f5ef83c15528f67dc8324485c1645a31.png"},26537:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/server.password-6ecbb5c9c4e91a334a4080099ef11d3f.png"},69299:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/server.url-ab39bd15cfe7f894a5eb3324d85d59ec.png"},25163:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/terminal-440ff9569fa09e4f3c3e3db5374cae99.png"},86749:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/vscode-3504eabc3e8242497f26e161243ffd18.png"},28453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>o});var t=a(96540);const r={},s=t.createContext(r);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);