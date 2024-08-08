"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[5025],{41269:(e,n,a)=>{a.d(n,{Ay:()=>o,RM:()=>r});var s=a(74848),t=a(28453);const r=[];function i(e){const n={a:"a",admonition:"admonition",p:"p",...(0,t.R)(),...e.components};return(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["If you have any questions or need further assistance, please visit our ",(0,s.jsx)(n.a,{href:"https://support.teradata.com/community",children:"community forum"})," where you can get support and interact with other community members."]})})}function o(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},76532:(e,n,a)=>{a.d(n,{Ay:()=>o,RM:()=>r});var s=a(74848),t=a(28453);const r=[];function i(e){const n={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE DATABASE HR\nAS PERMANENT = 60e6, -- 60MB\n    SPOOL = 120e6; -- 120MB\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Let\u2019s create a sample table and insert some data and query it. We will first create a table to hold employee information:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE SET TABLE HR.Employees (\n   GlobalID INTEGER,\n   FirstName VARCHAR(30),\n   LastName VARCHAR(30),\n   DateOfBirth DATE FORMAT 'YYYY-MM-DD',\n   JoinedDate DATE FORMAT 'YYYY-MM-DD',\n   DepartmentCode BYTEINT\n)\nUNIQUE PRIMARY INDEX ( GlobalID );\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Now, let's insert a record:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"INSERT INTO HR.Employees (\n   GlobalID,\n   FirstName,\n   LastName,\n   DateOfBirth,\n   JoinedDate,\n   DepartmentCode\n)\nVALUES (\n   101,\n   'Adam',\n   'Tworkowski',\n   '1980-01-05',\n   '2004-08-01',\n   01\n);\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Finally, let's see if we can retrieve the data:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM HR.Employees;\n"})}),"\n",(0,s.jsx)(n.p,{children:"You should get the following results:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"GlobalID  FirstName  LastName   DateOfBirth  JoinedDate  DepartmentCode\n--------  ---------  ---------- -----------  ----------  --------------\n     101  Adam       Tworkowski  1980-01-05  2004-08-01               1\n"})})]})}function o(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},9512:(e,n,a)=>{a.d(n,{Ay:()=>l,RM:()=>i});var s=a(74848),t=a(28453),r=a(76532);const i=[{value:"Run sample queries",id:"run-sample-queries",level:2},...r.RM,{value:"Optional setup",id:"optional-setup",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Install VirtualBox and 7zip:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"apt update && apt-get install p7zip-full p7zip-rar virtualbox -y\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Retrieve the curl command to download Vantage Express."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Go to ",(0,s.jsx)(n.a,{href:"https://downloads.teradata.com/download/database/teradata-express-for-vmware-player",children:"Vantage Expess download page"})," (registration required)."]}),"\n",(0,s.jsxs)(n.li,{children:["Click on the latest download link, e.g. ",(0,s.jsx)(n.strong,{children:'"Vantage Express 17.20"'}),". You will see a license agreement popup. Don't accept the license yet."]}),"\n",(0,s.jsxs)(n.li,{children:["Open the network view in your browser. For example, in Chrome press ",(0,s.jsx)("kbd",{children:"F12"})," and navigate to ",(0,s.jsx)(n.code,{children:"Network"})," tab:"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Browser Network Tab",src:a(27908).A+"",width:"1172",height:"764"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Accept the license by clicking on ",(0,s.jsx)(n.code,{children:"I Agree"})," button and cancel the download."]}),"\n",(0,s.jsxs)(n.li,{children:["In the network view, find the last request that starts with ",(0,s.jsx)(n.code,{children:"VantageExpress"}),". Right click on it and select ",(0,s.jsx)(n.code,{children:"Copy -> Copy as cURL"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Browser Copy culr",src:a(69835).A+"",width:"1024",height:"928"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Head back to the ssh session and download Vantage Express by pasting the curl command. Add ",(0,s.jsx)(n.code,{children:"-o ve.7z"})," to the command to save the download to file named ",(0,s.jsx)(n.code,{children:"ve.7z"}),". You can remove all the HTTP headers, e.g.:"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -o ve.7z 'http://d289lrf5tw1zls.cloudfront.net/database/teradata-express/VantageExpress17.20_Sles12_202108300444.7z?Expires=1638719978&Signature=GKBkNvery_long_signature__&Key-Pair-Id=********************'\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Unzip the downloaded file. It will take several minutes:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"7z x ve.7z\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Start the VM in VirtualBox. The command will return immediately but the VM init process will take several minutes:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'export VM_IMAGE_DIR="/opt/downloads/VantageExpress17.20_Sles12"\nDEFAULT_VM_NAME="vantage-express"\nVM_NAME="${VM_NAME:-$DEFAULT_VM_NAME}"\nvboxmanage createvm --name "$VM_NAME" --register --ostype openSUSE_64\nvboxmanage modifyvm "$VM_NAME" --ioapic on --memory 6000 --vram 128 --nic1 nat --cpus 4\nvboxmanage storagectl "$VM_NAME" --name "SATA Controller" --add sata --controller IntelAhci\nvboxmanage storageattach "$VM_NAME" --storagectl "SATA Controller" --port 0 --device 0 --type hdd --medium  "$(find $VM_IMAGE_DIR -name \'*disk1*\')"\nvboxmanage storageattach "$VM_NAME" --storagectl "SATA Controller" --port 1 --device 0 --type hdd --medium  "$(find $VM_IMAGE_DIR -name \'*disk2*\')"\nvboxmanage storageattach "$VM_NAME" --storagectl "SATA Controller" --port 2 --device 0 --type hdd --medium  "$(find $VM_IMAGE_DIR -name \'*disk3*\')"\nvboxmanage modifyvm "$VM_NAME" --natpf1 "tdssh,tcp,,4422,,22"\nvboxmanage modifyvm "$VM_NAME" --natpf1 "tddb,tcp,,1025,,1025"\nvboxmanage startvm "$VM_NAME" --type headless\nvboxmanage controlvm "$VM_NAME" keyboardputscancode 1c 1c\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["ssh to Vantage Express VM. Use ",(0,s.jsx)(n.code,{children:"root"})," as password:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ssh -p 4422 root@localhost\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Validate that the DB is up:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pdestate -a\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If the command returns ",(0,s.jsx)(n.code,{children:"PDE state is RUN/STARTED. DBS state is 5: Logons are enabled - The system is quiescent"}),", it means that Vantage Express has started.\nIf the status is different, repeat ",(0,s.jsx)(n.code,{children:"pdestate -a"})," till you get the correct status."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Once Vantage Express is up and running, start ",(0,s.jsx)(n.code,{children:"bteq"})," client command line client. BTEQ (pronounced \u201cbee-teek\u201d) is a general-purpose, command-based client tool used to submit SQL queries to a Teradata Database."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"bteq\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Once in bteq, connect to your Vantage Express instance. When asked for the password, enter ",(0,s.jsx)(n.code,{children:"dbc"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:".logon localhost/dbc\n"})}),"\n",(0,s.jsx)(n.h2,{id:"run-sample-queries",children:"Run sample queries"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Using ",(0,s.jsx)(n.code,{children:"dbc"})," user, we will create a new database called ",(0,s.jsx)(n.code,{children:"HR"}),". Copy/paste this query and run press ",(0,s.jsx)("kbd",{children:"Enter"}),":"]}),"\n"]}),"\n",(0,s.jsx)(r.Ay,{}),"\n",(0,s.jsx)(n.h2,{id:"optional-setup",children:"Optional setup"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If you intend to stop and start the VM, you may want to add Vantage Express to autostart. ssh to your VM and run the following commands:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo -i\n\ncat <<EOF >> /etc/default/virtualbox\nVBOXAUTOSTART_DB=/etc/vbox\nVBOXAUTOSTART_CONFIG=/etc/vbox/autostart.cfg\nEOF\n\ncat <<EOF > /etc/systemd/system/vantage-express.service\n[Unit]\nDescription=vm1\nAfter=network.target virtualbox.service\nBefore=runlevel2.target shutdown.target\n[Service]\nUser=root\nGroup=root\nType=forking\nRestart=no\nTimeoutSec=5min\nIgnoreSIGPIPE=no\nKillMode=process\nGuessMainPID=no\nRemainAfterExit=yes\nExecStart=/usr/bin/VBoxManage startvm vantage-express --type headless\nExecStop=/usr/bin/VBoxManage controlvm vantage-express savestate\n[Install]\nWantedBy=multi-user.target\nEOF\n\nsystemctl daemon-reload\nsystemctl enable vantage-express\nsystemctl start vantage-express\n"})})]})}function l(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},43457:(e,n,a)=>{a.d(n,{Ay:()=>o,RM:()=>r});var s=a(74848),t=a(28453);const r=[];function i(e){const n={a:"a",admonition:"admonition",p:"p",...(0,t.R)(),...e.components};return(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["You can now get a hosted instance of Vantage for free at ",(0,s.jsx)(n.a,{href:"https://clearscape.teradata.com/",children:"https://clearscape.teradata.com"}),"."]})})}function o(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},10245:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>m,contentTitle:()=>p,default:()=>j,frontMatter:()=>h,metadata:()=>x,toc:()=>g});var s=a(74848),t=a(28453),r=a(43457),i=a(56240),o=a(19365);function l(e){const n={code:"code",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(i.A,{children:[(0,s.jsx)(o.A,{value:"Windows",label:"Windows",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"  az disk create -n teradata-vantage-express --size-gb 60\n  az vm create `\n    --name teradata-vantage-express `\n    --image UbuntuLTS `\n    --admin-username azureuser `\n    --ssh-key-name vantage-ssh-key `\n    --size Standard_F4s_v2 `\n    --public-ip-sku Standard\n\n  $diskId = (az disk show -n teradata-vantage-express --query 'id' -o tsv) | Out-String\n  az vm disk attach --vm-name teradata-vantage-express --name $diskId\n"})})}),(0,s.jsx)(o.A,{value:"MacOS",label:"MacOS",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"az disk create -n teradata-vantage-express --size-gb 60\naz vm create \\\n--name teradata-vantage-express \\\n--image UbuntuLTS \\\n--admin-username azureuser \\\n--ssh-key-name vantage-ssh-key \\\n--size Standard_F4s_v2 \\\n--public-ip-sku Standard\n\nDISK_ID=$(az disk show -n teradata-vantage-express --query 'id' -o tsv)\naz vm disk attach --vm-name teradata-vantage-express --name $DISK_ID\n"})})}),(0,s.jsx)(o.A,{value:"Linux",label:"Linux",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"az disk create -n teradata-vantage-express --size-gb 60\naz vm create \\\n--name teradata-vantage-express \\\n--image UbuntuLTS \\\n--admin-username azureuser \\\n--ssh-key-name vantage-ssh-key \\\n--size Standard_F4s_v2 \\\n--public-ip-sku Standard\n\nDISK_ID=$(az disk show -n teradata-vantage-express --query 'id' -o tsv)\naz vm disk attach --vm-name teradata-vantage-express --name $DISK_ID\n"})})})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}var d=a(9512),u=a(41269);const h={sidebar_position:3,author:"Adam Tworkiewicz",email:"adam.tworkiewicz@teradata.com",page_last_update:"August 23rd, 2022",description:"Run Vantage Express on Microsoft Azure.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics"]},p="Run Vantage Express on Azure",x={id:"get-access-to-vantage/on-your-cloud-infrastructure/run-vantage-express-on-microsoft-azure",title:"Run Vantage Express on Azure",description:"Run Vantage Express on Microsoft Azure.",source:"@site/quickstarts/get-access-to-vantage/on-your-cloud-infrastructure/run-vantage-express-on-microsoft-azure.md",sourceDirName:"get-access-to-vantage/on-your-cloud-infrastructure",slug:"/get-access-to-vantage/on-your-cloud-infrastructure/run-vantage-express-on-microsoft-azure",permalink:"/pr-preview/pr-109/de/quickstarts/get-access-to-vantage/on-your-cloud-infrastructure/run-vantage-express-on-microsoft-azure",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,author:"Adam Tworkiewicz",email:"adam.tworkiewicz@teradata.com",page_last_update:"August 23rd, 2022",description:"Run Vantage Express on Microsoft Azure.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics"]},sidebar:"tutorialSidebar",previous:{title:"Run Vantage Express on Google Cloud",permalink:"/pr-preview/pr-109/de/quickstarts/get-access-to-vantage/on-your-cloud-infrastructure/vantage-express-gcp"},next:{title:"Getting started with ClearScape Analytics Experience",permalink:"/pr-preview/pr-109/de/quickstarts/get-access-to-vantage/clearscape-analytics-experience/getting-started-with-csae"}},m={},g=[...r.RM,{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},...d.RM,{value:"Next steps",id:"next-steps",level:2},{value:"Further reading",id:"further-reading",level:2},...u.RM];function v(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"run-vantage-express-on-azure",children:"Run Vantage Express on Azure"}),"\n",(0,s.jsx)(r.Ay,{}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"This how-to demonstrates how to run Vantage Express in Microsoft Azure. Vantage Express contains a fully functional Teradata SQL Engine."}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["An Azure account. You can create one here: ",(0,s.jsx)(n.a,{href:"https://azure.microsoft.com/en-us/free/",children:"https://azure.microsoft.com/en-us/free/"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"az"})," command line utility installed on your machine. You can find installation instructions here: ",(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/cli/azure/install-azure-cli",children:"https://docs.microsoft.com/en-us/cli/azure/install-azure-cli"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Setup the default region to the closest region to you (to list locations run ",(0,s.jsx)(n.code,{children:"az account list-locations -o table"}),"):"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"az config set defaults.location=<location>\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Create a new resource group called ",(0,s.jsx)(n.code,{children:"tdve-resource-group"})," and add it to defaults:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"az group create -n tdve-resource-group\naz config set defaults.group=tdve-resource-group\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"To create a VM you will need an ssh key pair. If you don't have it already, create one:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"az sshkey create --name vantage-ssh-key\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Restrict access to the private key. Replace ",(0,s.jsx)(n.code,{children:"<path_to_private_key_file>"})," with the private key path returned by the previous command:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"chmod 600 <path_to_private_key_file>\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Create a Ubuntu VM with 4 CPU's and 8GB of RAM, a 30GB os disk and a 60GB data disk."}),"\n"]}),"\n",(0,s.jsx)(c,{}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["ssh to your VM. Replace ",(0,s.jsx)(n.code,{children:"<path_to_private_key_file>"})," and ",(0,s.jsx)(n.code,{children:"<vm_ip>"})," with values that match your environment:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ssh -i <path_to_private_key_file> azureuser@<vm_ip>\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Once in the VM, switch to ",(0,s.jsx)(n.code,{children:"root"})," user:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo -i\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Prepare the download directory for Vantage Express:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mkdir /opt/downloads\ncd /opt/downloads\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Mount the data disk:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'parted /dev/sdc --script mklabel gpt mkpart xfspart xfs 0% 100%\nmkfs.xfs /dev/sdc1\npartprobe /dev/sdc1\nexport DISK_UUID=$(blkid | grep sdc1 | cut -d"\\"" -f2)\necho "UUID=$DISK_UUID  /opt/downloads   xfs   defaults,nofail   1   2" >> /etc/fstab\n'})}),"\n",(0,s.jsx)(d.Ay,{}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If you would like to connect to Vantage Express from the Internet, you will need to open up firewall holes to your VM. You should also change the default password to ",(0,s.jsx)(n.code,{children:"dbc"})," user:"]}),"\n",(0,s.jsxs)(n.li,{children:["To change the password for ",(0,s.jsx)(n.code,{children:"dbc"})," user go to your VM and start bteq:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"bteq\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Login to your database using ",(0,s.jsx)(n.code,{children:"dbc"})," as username and password:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:".logon localhost/dbc\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Change the password for ",(0,s.jsx)(n.code,{children:"dbc"})," user:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"MODIFY USER dbc AS PASSWORD = new_password;\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"You can now open up port 1025 to the internet using gcloud command:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"az vm open-port --name teradata-vantage-express --port 1025\n"})}),"\n",(0,s.jsx)(n.p,{children:"To stop incurring charges, delete all the resources associated with the resource group:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"az group delete --no-wait -n tdve-resource-group\n"})}),"\n",(0,s.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/pr-preview/pr-109/de/quickstarts/manage-data/nos",children:"Query data stored in object storage"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.teradata.com/r/Teradata-StudioTM-and-StudioTM-Express-Installation-Guide-17.20",children:"Teradata\xae Studio\u2122 and Studio\u2122 Express Installation Guide"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.teradata.com/r/jmAxXLdiDu6NiyjT6hhk7g/root",children:"Introduction to BTEQ"})}),"\n"]}),"\n",(0,s.jsx)(u.Ay,{})]})}function j(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(v,{...e})}):v(e)}},19365:(e,n,a)=>{a.d(n,{A:()=>i});a(96540);var s=a(34164);const t={tabItem:"tabItem_Ymn6"};var r=a(74848);function i(e){var n=e.children,a=e.hidden,i=e.className;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(t.tabItem,i),hidden:a,children:n})}},56240:(e,n,a)=>{a.d(n,{A:()=>y});var s=a(96540),t=a(34164),r=a(23104),i=a(56347),o=a(205),l=a(57485);var c=a(89466);function d(e){var n,a;return null!=(n=null==(a=s.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,s.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?n:[]}function u(e){var n=e.values,a=e.children;return(0,s.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(a);return function(e){var n,a,s=(void 0===(a=function(e,n){return e.value===n.value})&&(a=function(e,n){return e===n}),(n=e).filter((function(e,s){return n.findIndex((function(n){return a(n,e)}))!==s})));if(s.length>0)throw new Error('Docusaurus error: Duplicate values "'+s.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,a])}function h(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function p(e){var n=e.queryString,a=void 0!==n&&n,t=e.groupId,r=(0,i.W6)(),o=function(e){var n=e.queryString,a=void 0!==n&&n,s=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=s?s:null}({queryString:a,groupId:t});return[(0,l.aZ)(o),(0,s.useCallback)((function(e){if(o){var n=new URLSearchParams(r.location.search);n.set(o,e),r.replace(Object.assign({},r.location,{search:n.toString()}))}}),[o,r])]}function x(e){var n,a,t,r,i=e.defaultValue,l=e.queryString,d=void 0!==l&&l,x=e.groupId,m=u(e),g=(0,s.useState)((function(){return function(e){var n,a=e.defaultValue,s=e.tabValues;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:s}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+s.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var t=null!=(n=s.find((function(e){return e.default})))?n:s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:i,tabValues:m})})),v=g[0],j=g[1],f=p({queryString:d,groupId:x}),b=f[0],y=f[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:x}.groupId),a=(0,c.Dv)(n),t=a[0],r=a[1],[t,(0,s.useCallback)((function(e){n&&r.set(e)}),[n,r])]),A=w[0],E=w[1],k=function(){var e=null!=b?b:A;return h({value:e,tabValues:m})?e:null}();return(0,o.A)((function(){k&&j(k)}),[k]),{selectedValue:v,selectValue:(0,s.useCallback)((function(e){if(!h({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);j(e),y(e),E(e)}),[y,E,m]),tabValues:m}}var m=a(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(74848);function j(e){var n=e.className,a=e.block,s=e.selectedValue,i=e.selectValue,o=e.tabValues,l=[],c=(0,r.a_)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,a=l.indexOf(n),t=o[a].value;t!==s&&(c(n),i(t))},u=function(e){var n,a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var s,t=l.indexOf(e.currentTarget)+1;a=null!=(s=l[t])?s:l[0];break;case"ArrowLeft":var r,i=l.indexOf(e.currentTarget)-1;a=null!=(r=l[i])?r:l[l.length-1]}null==(n=a)||n.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":a},n),children:o.map((function(e){var n=e.value,a=e.label,r=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:function(e){return l.push(e)},onKeyDown:u,onClick:d},r,{className:(0,t.A)("tabs__item",g.tabItem,null==r?void 0:r.className,{"tabs__item--active":s===n}),children:null!=a?a:n}),n)}))})}function f(e){var n=e.lazy,a=e.children,t=e.selectedValue,r=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){var i=r.find((function(e){return e.props.value===t}));return i?(0,s.cloneElement)(i,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map((function(e,n){return(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t})}))})}function b(e){var n=x(e);return(0,v.jsxs)("div",{className:(0,t.A)("tabs-container",g.tabList),children:[(0,v.jsx)(j,Object.assign({},e,n)),(0,v.jsx)(f,Object.assign({},e,n))]})}function y(e){var n=(0,m.A)();return(0,v.jsx)(b,Object.assign({},e,{children:d(e.children)}),String(n))}},69835:(e,n,a)=>{a.d(n,{A:()=>s});const s=a.p+"assets/images/browser.copy.curl-ef8d15fbb3caf4c7c5981d9e8888f5aa.png"},27908:(e,n,a)=>{a.d(n,{A:()=>s});const s=a.p+"assets/images/browser.network-10b20cd42fc007de4c04d0c25874a866.png"},28453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>o});var s=a(96540);const t={},r=s.createContext(t);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);