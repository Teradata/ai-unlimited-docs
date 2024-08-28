"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[9732],{41269:(e,n,t)=>{t.d(n,{Ay:()=>o,RM:()=>i});var s=t(74848),a=t(28453);const i=[];function r(e){const n={a:"a",admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["If you have any questions or need further assistance, please visit our ",(0,s.jsx)(n.a,{href:"https://support.teradata.com/community",children:"community forum"})," where you can get support and interact with other community members."]})})}function o(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},73110:(e,n,t)=>{t.d(n,{Ay:()=>l,RM:()=>r});var s=t(74848),a=t(28453),i=t(43457);const r=[...i.RM,{value:"Overview",id:"overview",level:2}];function o(e){const n={a:"a",admonition:"admonition",h2:"h2",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.Ay,{}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"This how-to shows how to gain access to a Teradata database by running it on your local machine. Once you finish the steps you will have a working Teradata Vantage Express database on your computer."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Starting with version 17.20, Vantage Express includes the following analytics packages: ",(0,s.jsx)(n.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_Lake_VMware/Vantage-Analytics-Library-User-Guide",children:"Vantage Analytics Library"}),", ",(0,s.jsx)(n.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_Lake_VMware/Teradata-VantageTM-Bring-Your-Own-Model-User-Guide",children:"Bring Your Own Model (BYOM)"}),", ",(0,s.jsx)(n.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Teradata-VantageTM-API-Integration-Guide-for-Cloud-Machine-Learning",children:"API Integration with AWS SageMaker"}),"."]})})]})}function l(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},76532:(e,n,t)=>{t.d(n,{Ay:()=>o,RM:()=>i});var s=t(74848),a=t(28453);const i=[];function r(e){const n={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE DATABASE HR\nAS PERMANENT = 60e6, -- 60MB\n    SPOOL = 120e6; -- 120MB\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Let\u2019s create a sample table and insert some data and query it. We will first create a table to hold employee information:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE SET TABLE HR.Employees (\n   GlobalID INTEGER,\n   FirstName VARCHAR(30),\n   LastName VARCHAR(30),\n   DateOfBirth DATE FORMAT 'YYYY-MM-DD',\n   JoinedDate DATE FORMAT 'YYYY-MM-DD',\n   DepartmentCode BYTEINT\n)\nUNIQUE PRIMARY INDEX ( GlobalID );\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Now, let's insert a record:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"INSERT INTO HR.Employees (\n   GlobalID,\n   FirstName,\n   LastName,\n   DateOfBirth,\n   JoinedDate,\n   DepartmentCode\n)\nVALUES (\n   101,\n   'Adam',\n   'Tworkowski',\n   '1980-01-05',\n   '2004-08-01',\n   01\n);\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Finally, let's see if we can retrieve the data:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM HR.Employees;\n"})}),"\n",(0,s.jsx)(n.p,{children:"You should get the following results:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"GlobalID  FirstName  LastName   DateOfBirth  JoinedDate  DepartmentCode\n--------  ---------  ---------- -----------  ----------  --------------\n     101  Adam       Tworkowski  1980-01-05  2004-08-01               1\n"})})]})}function o(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},51284:(e,n,t)=>{t.d(n,{Ay:()=>o,RM:()=>i});var s=t(74848),a=t(28453);const i=[{value:"Summary",id:"summary",level:2}];function r(e){const n={h2:"h2",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsx)(n.p,{children:"In this guide we have covered how to quickly create a working Teradata environment. We used Teradata Vantage Express in a VM running on VMware. In the same VM, we ran Teradata Studio Express to issue queries. We installed all software locally and didn't have to pay for cloud resources."})]})}function o(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},42649:(e,n,t)=>{t.d(n,{Ay:()=>o,RM:()=>i});var s=t(74848),a=t(28453);const i=[];function r(e){const n={admonition:"admonition",code:"code",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Press ",(0,s.jsx)("kbd",{children:"[ENTER]"})," to select the highlighted ",(0,s.jsx)(n.code,{children:"LINUX"})," boot partition."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Teradata Data Distribution",src:t(57489).A+"",width:"717",height:"489"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["On the next screen, press ",(0,s.jsx)("kbd",{children:"ENTER"})," again to select the default SUSE Linux kernel."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Teradata Data Distribution",src:t(83217).A+"",width:"719",height:"486"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"After completing the bootup sequence a terminal login prompt as shown in the screenshot below will appear. Don't enter anything in the terminal. Wait till the system starts the GUI."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Wait for GUI",src:t(5604).A+"",width:"796",height:"686"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["After a while the following prompt will appear - assuming that you did not enter anything after the command login prompt above. Press ",(0,s.jsx)(n.code,{children:"okay"})," button in the screen below."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"OK Security Popup",src:t(13295).A+"",width:"795",height:"685"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Once the VM is up, you will see its desktop environment. When prompted for username/password enter ",(0,s.jsx)(n.code,{children:"root"})," for both."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"VM Login",src:t(65745).A+"",width:"801",height:"343"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The database is configured to autostart with the VM. To confirm that the database has started go to the virtual desktop and start ",(0,s.jsx)(n.code,{children:"Gnome Terminal"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Start Gnome Terminal",src:t(67379).A+"",width:"738",height:"712"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["In the terminal execute ",(0,s.jsx)(n.code,{children:"pdestate"})," command that will inform you if Vantage has already started:"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["To paste into Gnome Terminal press ",(0,s.jsx)("kbd",{children:"SHIFT+CTRL+V"}),"."]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"watch pdestate -a\n"})}),"\n",(0,s.jsx)(n.p,{children:"You want to wait till you see the following message:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"PDE state is RUN/STARTED.\nDBS state is 5: Logons are enabled - The system is quiescent\n"})}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsxs)("summary",{children:["See examples of messages that ",(0,s.jsx)("code",{children:"pdestate"})," returns when the database is still initializing."]}),(0,s.jsxs)("pre",{children:[(0,s.jsx)(n.p,{children:"PDE state is DOWN/HARDSTOP."}),(0,s.jsx)(n.p,{children:"PDE state is START/NETCONFIG."}),(0,s.jsx)(n.p,{children:"PDE state is START/GDOSYNC."}),(0,s.jsx)(n.p,{children:"PDE state is START/TVSASTART."}),(0,s.jsx)(n.p,{children:"PDE state is START/READY.\nPDE state is RUN/STARTED."}),(0,s.jsx)(n.p,{children:"DBS state is 1/1: DBS Startup - Initializing DBS Vprocs\nPDE state is RUN/STARTED."}),(0,s.jsx)(n.p,{children:"DBS state is 1/5: DBS Startup - Voting for Transaction Recovery\nPDE state is RUN/STARTED."}),(0,s.jsx)(n.p,{children:"DBS state is 1/4: DBS Startup - Starting PE Partitions\nPDE state is RUN/STARTED."})]})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Now that the database is up, go back to the virtual desktop and launch ",(0,s.jsx)(n.code,{children:"Teradata Studio Express"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Start Teradata Studio Express",src:t(80162).A+"",width:"740",height:"712"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["When you first start it you will be offered a tour. Once you close the tour, you will see a wizard window to add a new connection. Select ",(0,s.jsx)(n.code,{children:"Teradata"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"New Connection Profile",src:t(73030).A+"",width:"1050",height:"1136"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["On the next screen, connect to the database on your localhost using ",(0,s.jsx)(n.code,{children:"dbc"})," for the username and password:"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"New Connection",src:t(25539).A+"",width:"1222",height:"1488"})})]})}function o(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},96060:(e,n,t)=>{t.d(n,{Ay:()=>l,RM:()=>r});var s=t(74848),a=t(28453),i=t(76532);const r=[{value:"Run sample queries",id:"run-sample-queries",level:3},...i.RM];function o(e){const n={code:"code",h3:"h3",img:"img",li:"li",ol:"ol",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"run-sample-queries",children:"Run sample queries"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"We will now run some queries in the VM. To avoid copy/paste issues between the host and the VM, we will open this quick start in the VM. Go to the virtual desktop, start Firefox and point it to this quick start."}),"\n",(0,s.jsxs)(n.li,{children:["Once in Teradata Studio Express, go to ",(0,s.jsx)(n.code,{children:"Query Development"})," perspective (go to the top menu and select ",(0,s.jsx)(n.code,{children:"Window"})," -> ",(0,s.jsx)(n.code,{children:"Query Development"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:["Connect using the previously created connection profile by double-clicking on ",(0,s.jsx)(n.code,{children:"Database Connections"})," -> ",(0,s.jsx)(n.code,{children:"New Teradata"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Using ",(0,s.jsx)(n.code,{children:"dbc"})," user, we will create a new database called ",(0,s.jsx)(n.code,{children:"HR"}),". Copy/paste this query and run it by hitting the run query button (",(0,s.jsx)(n.img,{alt:"Run Query Button",src:t(2343).A+"",width:"44",height:"44"}),") or pressing ",(0,s.jsx)("kbd",{children:"[F5]"})," key:"]}),"\n"]}),"\n",(0,s.jsx)(i.Ay,{})]})}function l(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},43457:(e,n,t)=>{t.d(n,{Ay:()=>o,RM:()=>i});var s=t(74848),a=t(28453);const i=[];function r(e){const n={a:"a",admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["You can now get a hosted instance of Vantage for free at ",(0,s.jsx)(n.a,{href:"https://clearscape.teradata.com/",children:"https://clearscape.teradata.com"}),"."]})})}function o(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},39055:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>h,default:()=>m,frontMatter:()=>c,metadata:()=>u,toc:()=>A});var s=t(74848),a=t(28453),i=t(73110),r=t(42649),o=t(96060),l=t(51284),d=t(41269);const c={sidebar_position:1,author:"Adam Tworkiewicz",email:"adam.tworkiewicz@teradata.com",page_last_update:"January 9th, 2023",description:"Run Vantage Express on your laptop using VMware.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics"]},h="Run Vantage Express on VMware",u={id:"get-access-to-vantage/on-your-local/getting-started-vmware",title:"Run Vantage Express on VMware",description:"Run Vantage Express on your laptop using VMware.",source:"@site/quickstarts/get-access-to-vantage/on-your-local/getting-started-vmware.md",sourceDirName:"get-access-to-vantage/on-your-local",slug:"/get-access-to-vantage/on-your-local/getting-started-vmware",permalink:"/pr-preview/pr-123/quickstarts/get-access-to-vantage/on-your-local/getting-started-vmware",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,author:"Adam Tworkiewicz",email:"adam.tworkiewicz@teradata.com",page_last_update:"January 9th, 2023",description:"Run Vantage Express on your laptop using VMware.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics"]},sidebar:"tutorialSidebar",previous:{title:"Teradata Vantage Engine Architecture and Concepts",permalink:"/pr-preview/pr-123/quickstarts/introduction/teradata-vantage-engine-architecture-and-concepts"},next:{title:"Run Vantage Express on VirtualBox",permalink:"/pr-preview/pr-123/quickstarts/get-access-to-vantage/on-your-local/getting-started-vbox"}},p={},A=[...i.RM,{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Download required software",id:"download-required-software",level:3},{value:"Run installers",id:"run-installers",level:3},{value:"Run Vantage Express",id:"run-vantage-express",level:3},...r.RM,...o.RM,...l.RM,{value:"Next steps",id:"next-steps",level:2},{value:"Further reading",id:"further-reading",level:2},...d.RM];function g(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"run-vantage-express-on-vmware",children:"Run Vantage Express on VMware"}),"\n",(0,s.jsx)(i.Ay,{}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["A computer using one of the following operating systems: Windows, Linux or Intel-based MacOS.","\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["For M1/M2 MacOS systems, see ",(0,s.jsx)(n.a,{href:"/pr-preview/pr-123/quickstarts/get-access-to-vantage/on-your-local/run-vantage-express-on-utm",children:"Run Vantage Express on UTM."})]})}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"30GB of disk space and enough CPU and RAM to be able to dedicate at least one core and 6GB RAM to the virtual machine."}),"\n",(0,s.jsx)(n.li,{children:"Admin rights to be able to install and run the software."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(n.h3,{id:"download-required-software",children:"Download required software"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The latest version of ",(0,s.jsx)(n.a,{href:"https://downloads.teradata.com/download/database/teradata-express-for-vmware-player",children:"Vantage Express"}),". If you have not used the Teradata downloads website before, you will need to register."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://www.vmware.com/products/workstation-player.html",children:"VMware Workstation Player"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"important",children:[(0,s.jsx)(n.mdxAdmonitionTitle,{}),(0,s.jsxs)(n.p,{children:["Commercial organizations require commercial licenses to use VMware Workstation Player. If you don't want to acquire VMware licenses you can run Vantage Express on ",(0,s.jsx)(n.a,{href:"/pr-preview/pr-123/quickstarts/get-access-to-vantage/on-your-local/getting-started-vbox",children:"VirtualBox"}),"."]})]}),"\n",(0,s.jsxs)(n.admonition,{type:"important",children:[(0,s.jsx)(n.mdxAdmonitionTitle,{}),(0,s.jsxs)(n.p,{children:["VMware doesn't offer VMware Workstation Player for MacOS. If you are on a Mac, you will need to install ",(0,s.jsx)(n.a,{href:"https://www.vmware.com/products/fusion/fusion-evaluation.html",children:"VMware Fusion"})," instead. It's a paid product but VMware offers a free 30-day trial. Alternatively, you can run Vantage Express on ",(0,s.jsx)(n.a,{href:"/pr-preview/pr-123/quickstarts/get-access-to-vantage/on-your-local/getting-started-vbox",children:"VirtualBox"})," or ",(0,s.jsx)(n.a,{href:"/pr-preview/pr-123/quickstarts/get-access-to-vantage/on-your-local/run-vantage-express-on-utm",children:"UTM"}),"."]})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["On Windows, you will also need ",(0,s.jsx)(n.a,{href:"https://www.7-zip.org/download.html",children:"7zip"})," to unzip Vantage Express."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"run-installers",children:"Run installers"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Install VMware Player or VMware Fusion by running the installer and accepting the default values."}),"\n",(0,s.jsxs)(n.li,{children:["If on Windows, install ",(0,s.jsx)(n.code,{children:"7zip"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"run-vantage-express",children:"Run Vantage Express"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Go to the directory where you downloaded Vantage Express and unzip the downloaded file."}),"\n",(0,s.jsxs)(n.li,{children:["Double-click on the ",(0,s.jsx)(n.code,{children:".vmx"})," file. This will start the VM image in VMware Player/Fusion."]}),"\n"]}),"\n",(0,s.jsx)(r.Ay,{}),"\n",(0,s.jsx)(o.Ay,{}),"\n",(0,s.jsx)(l.Ay,{}),"\n",(0,s.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/pr-preview/pr-123/quickstarts/manage-data/nos",children:"Query data stored in object storage"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.teradata.com/r/Teradata-StudioTM-and-StudioTM-Express-Installation-Guide-17.20",children:"Teradata\xae Studio\u2122 and Studio\u2122 Express Installation Guide"})}),"\n"]}),"\n",(0,s.jsx)(d.Ay,{})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},57489:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/boot-manager-menu-5cf7ff77a35dfcda853cb0b6c226fe9f.png"},83217:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/grub-menu-613987ca151e84ddcf802fadda093cca.png"},25539:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/new.connection-2305d8e8ba78b50f6aad8afdf469404b.png"},73030:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/new.connection.profile-e2f0858418648a2c961390f7b07a497b.png"},13295:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/okay-the-security-popup-b8bd60e340b8b100789f9618fb4ff7c8.png"},67379:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/start-gnome-terminal-13ca9473f6f506f1a8f9b184c2c28e35.png"},80162:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/start-teradata-studio-express-91e790d82f130128810abc2420724432.png"},65745:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/vm.login-1b2c96caba5911e7d6e77c04a7124b75.png"},5604:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/wait-for-gui-c0ce1366fd78475776e9ddfbfdfeaa3c.png"},2343:(e,n,t)=>{t.d(n,{A:()=>s});const s="data:image/png;base64,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"},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(96540);const a={},i=s.createContext(a);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);