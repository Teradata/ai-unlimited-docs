"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[4501],{41269:(e,n,a)=>{a.d(n,{Ay:()=>r,RM:()=>o});var t=a(74848),i=a(28453);const o=[];function s(e){const n={a:"a",admonition:"admonition",p:"p",...(0,i.R)(),...e.components};return(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["If you have any questions or need further assistance, please visit our ",(0,t.jsx)(n.a,{href:"https://support.teradata.com/community",children:"community forum"})," where you can get support and interact with other community members."]})})}function r(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},62680:(e,n,a)=>{a.d(n,{Ay:()=>r,RM:()=>o});var t=a(74848),i=a(28453);const o=[];function s(e){const n={a:"a",admonition:"admonition",p:"p",...(0,i.R)(),...e.components};return(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["If you need a test instance of Vantage, you can provision one for free at ",(0,t.jsx)(n.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})]})})}function r(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},38008:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>g,frontMatter:()=>r,metadata:()=>d,toc:()=>A});var t=a(74848),i=a(28453),o=a(62680),s=a(41269);const r={sidebar_position:2,author:"Adam Tworkiewicz",email:"adam.tworkiewicz@teradata.com",page_last_update:"March 6th, 2022",description:"Configure a Teradata Vantage connection in DBeaver.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","dbeaver","dbeaver prod","sql ide"]},c="Configure a Teradata Vantage connection in DBeaver",d={id:"connect-to-vantage/configure-a-teradata-vantage-connection-in-dbeaver",title:"Configure a Teradata Vantage connection in DBeaver",description:"Configure a Teradata Vantage connection in DBeaver.",source:"@site/quickstarts/connect-to-vantage/configure-a-teradata-vantage-connection-in-dbeaver.md",sourceDirName:"connect-to-vantage",slug:"/connect-to-vantage/configure-a-teradata-vantage-connection-in-dbeaver",permalink:"/pr-preview/pr-147/fr/quickstarts/connect-to-vantage/configure-a-teradata-vantage-connection-in-dbeaver",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,author:"Adam Tworkiewicz",email:"adam.tworkiewicz@teradata.com",page_last_update:"March 6th, 2022",description:"Configure a Teradata Vantage connection in DBeaver.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","dbeaver","dbeaver prod","sql ide"]},sidebar:"tutorialSidebar",previous:{title:"Use Teradata Studio/Express on Apple Mac M1/M2",permalink:"/pr-preview/pr-147/fr/quickstarts/connect-to-vantage/install-teradata-studio-on-mac-m1-m2"},next:{title:"Ubuntu",permalink:"/pr-preview/pr-147/fr/quickstarts/connect-to-vantage/configure-odbc/ubuntu"}},l={},A=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},...o.RM,{value:"Add a Teradata connection to DBeaver",id:"add-a-teradata-connection-to-dbeaver",level:2},{value:"Optional: Logon Mechanisms",id:"optional-logon-mechanisms",level:2},{value:"Optional: SSH tunneling",id:"optional-ssh-tunneling",level:2},{value:"Summary",id:"summary",level:2},...s.RM];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"configure-a-teradata-vantage-connection-in-dbeaver",children:"Configure a Teradata Vantage connection in DBeaver"}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"This how-to demonstrates how to create a connection to Teradata Vantage with DBeaver."}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Access to a Teradata Vantage instance.","\n",(0,t.jsx)(o.Ay,{}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["DBeaver installed. See ",(0,t.jsx)(n.a,{href:"https://dbeaver.io/download",children:"DBeaver Community"})," or ",(0,t.jsx)(n.a,{href:"https://dbeaver.com/download",children:"DBeaver PRO"})," for installation options."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"add-a-teradata-connection-to-dbeaver",children:"Add a Teradata connection to DBeaver"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Start the new connection wizard by clicking on the plug icon (",(0,t.jsx)(n.img,{alt:"Add Connection Plug Icon",src:a(59540).A+"",width:"46",height:"46"}),") in the upper left corner of the application window or go to ",(0,t.jsx)(n.code,{children:"Database -> New Database Connection"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["On ",(0,t.jsx)(n.code,{children:"Select your database"})," screen, start typing ",(0,t.jsx)(n.code,{children:"teradata"})," and select the Teradata icon.\n",(0,t.jsx)(n.img,{alt:"Select your database",src:a(83450).A+"",width:"554",height:"536"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["On the main tab, you need to set all primary connection settings. The required ones include ",(0,t.jsx)(n.code,{children:"Host"}),", ",(0,t.jsx)(n.code,{children:"Port"}),", ",(0,t.jsx)(n.code,{children:"Database"}),", ",(0,t.jsx)(n.code,{children:"Username"}),", and ",(0,t.jsx)(n.code,{children:"Password"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["In Teradata Vantage, when a user is created a corresponding database with the same is created as well. DBeaver requires that you enter the database. If you don't know what database you want to connect to, use your username in the ",(0,t.jsx)(n.code,{children:"database"})," field."]})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["With DBeaver PRO, you can not only use the standard ordering of tables but also hierarchically link tables to a specific database or user. Expanding and collapsing the databases or users will help you navigate from one area to another without swamping the Database Navigator window. Check the ",(0,t.jsx)(n.code,{children:"Show databases and users hierarchically"})," box to enable this setting."]})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["In many environments Teradata Vantage can only be accessed using the TLS protocol. When in DBeaver PRO, check ",(0,t.jsx)(n.code,{children:"Use TLS protocol"})," option to enable TLS."]})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Teradata connection settings",src:a(9899).A+"",width:"586",height:"650"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click on ",(0,t.jsx)(n.code,{children:"Finish"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"optional-logon-mechanisms",children:"Optional: Logon Mechanisms"}),"\n",(0,t.jsx)(n.p,{children:"The default logon mechanism when creating a DBeaver connection is TD2. To add other logon mechanisms, follow the steps below:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Navigate to the database menu and click on Driver Manager."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:['From the list of driver names, select Teradata and click "Copy".\n',(0,t.jsx)(n.img,{alt:"Copy the Teradata driver",src:a(39224).A+"",width:"617",height:"525"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:['In the "URL Template" field, define your selected logon mechanism.\n',(0,t.jsx)(n.code,{children:"jdbc:teradata://\\{host}/LOGMECH=LDAP,DATABASE=\\{database},DBS_PORT=\\{port}"}),"\n",(0,t.jsx)(n.img,{alt:"Configure connection string",src:a(68265).A+"",width:"499",height:"409"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'Click "OK".'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The new driver is now available to create connections with the selected logon mechanism.\n",(0,t.jsx)(n.img,{alt:"Create a connection",src:a(98491).A+"",width:"552",height:"541"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The process for setting up a new connection with the alternative mechanism is the same as described above for adding a new connection.\n",(0,t.jsx)(n.img,{alt:"Configure connection",src:a(91617).A+"",width:"586",height:"650"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"optional-ssh-tunneling",children:"Optional: SSH tunneling"}),"\n",(0,t.jsxs)(n.p,{children:["If your database cannot be accessed directly, you can use an SSH tunnel. All settings are available on the ",(0,t.jsx)(n.code,{children:"SSH"})," tab. DBeaver supports the following authentication methods: user/password, public key, SSH agent authentication."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Teradata connection settings SSH",src:a(6638).A+"",width:"590",height:"653"})}),"\n",(0,t.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,t.jsx)(n.p,{children:"This how-to demonstrated how to create a connection to Teradata Vantage with DBeaver."}),"\n","\n",(0,t.jsx)(s.Ay,{})]})}function g(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},68265:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/configure-driver-string-4fd710a7a6cf086e503fdcd95f3c6c41.png"},39224:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/copy-driver-01ce720b6a0884c22847bccd2e5e27be.png"},98491:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/create-connection-2125fa3766e189668587d6f9f2bae051.png"},59540:(e,n,a)=>{a.d(n,{A:()=>t});const t="data:image/png;base64,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"},83450:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/select-your-database-windows-3230bb65b5635488a622a46210ba7742.png"},6638:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/teradata-connection-settings-ssh-windows-88e08daad0831577a3872a4496148ed5.png"},91617:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/teradata-connection-settings-windows-ldap-253ebd730ae219a4728ac651d923ffaf.png"},9899:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/teradata-connection-settings-windows-947bdd3e3ffbf08f565f2b0b654fcd39.png"},28453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>r});var t=a(96540);const i={},o=t.createContext(i);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);