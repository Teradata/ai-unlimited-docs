"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[5035],{11319:(e,n,s)=>{s.d(n,{Ay:()=>i,RM:()=>r});var a=s(74848),t=s(28453);const r=[];function c(e){const n={a:"a",admonition:"admonition",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",...(0,t.R)(),...e.components};return(0,a.jsxs)(n.admonition,{type:"note",children:[(0,a.jsx)(n.mdxAdmonitionTitle,{}),(0,a.jsxs)(n.p,{children:["\u3054\u8cea\u554f\u304c\u3042\u308b\u5834\u5408\u3084\u3055\u3089\u306b\u30b5\u30dd\u30fc\u30c8\u304c\u5fc5\u8981\u306a\u5834\u5408\u306f\u3001 ",(0,a.jsx)(n.a,{href:"https://support.teradata.com/community",children:"\u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u30d5\u30a9\u30fc\u30e9\u30e0"})," \u306b\u30a2\u30af\u30bb\u30b9\u3057\u3066\u30b5\u30dd\u30fc\u30c8\u3092\u53d7\u3051\u305f\u308a\u3001\u4ed6\u306e\u30b3\u30df\u30e5\u30cb\u30c6\u30a3 \u30e1\u30f3\u30d0\u30fc\u3068\u4ea4\u6d41\u3057\u305f\u308a\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})]})}function i(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},65734:(e,n,s)=>{s.d(n,{Ay:()=>i,RM:()=>r});var a=s(74848),t=s(28453);const r=[];function c(e){const n={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"CREATE DATABASE HR\nAS PERMANENT = 60e6, -- 60MB\n    SPOOL = 120e6; -- 120MB\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u30b5\u30f3\u30d7\u30eb \u30c6\u30fc\u30d6\u30eb\u3092\u4f5c\u6210\u3057\u3001\u30c7\u30fc\u30bf\u3092\u633f\u5165\u3057\u3066\u30af\u30a8\u30ea\u30fc\u3092\u5b9f\u884c\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002\u307e\u305a\u3001\u5f93\u696d\u54e1\u60c5\u5831\u3092\u4fdd\u6301\u3059\u308b\u30c6\u30fc\u30d6\u30eb\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"CREATE SET TABLE HR.Employees (\n   GlobalID INTEGER,\n   FirstName VARCHAR(30),\n   LastName VARCHAR(30),\n   DateOfBirth DATE FORMAT 'YYYY-MM-DD',\n   JoinedDate DATE FORMAT 'YYYY-MM-DD',\n   DepartmentCode BYTEINT\n)\nUNIQUE PRIMARY INDEX ( GlobalID );\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u6b21\u306b\u3001\u30ec\u30b3\u30fc\u30c9\u3092\u633f\u5165\u3057\u307e\u3059\u3002"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"INSERT INTO HR.Employees (\n   GlobalID,\n   FirstName,\n   LastName,\n   DateOfBirth,\n   JoinedDate,\n   DepartmentCode\n)\nVALUES (\n   101,\n   'Adam',\n   'Tworkowski',\n   '1980-01-05',\n   '2004-08-01',\n   01\n);\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u6700\u5f8c\u306b\u3001\u30c7\u30fc\u30bf\u3092\u53d6\u5f97\u3067\u304d\u308b\u304b\u3069\u3046\u304b\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM HR.Employees;\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u4ee5\u4e0b\u306e\u7d50\u679c\u304c\u5f97\u3089\u308c\u308b\u306f\u305a\u3067\u3059\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"GlobalID  FirstName  LastName   DateOfBirth  JoinedDate  DepartmentCode\n--------  ---------  ---------- -----------  ----------  --------------\n     101  Adam       Tworkowski  1980-01-05  2004-08-01               1\n"})})]})}function i(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},12090:(e,n,s)=>{s.d(n,{Ay:()=>l,RM:()=>c});var a=s(74848),t=s(28453),r=s(65734);const c=[{value:"\u30b5\u30f3\u30d7\u30eb \u30af\u30a8\u30ea\u30fc\u3092\u5b9f\u884c\u3059\u308b",id:"\u30b5\u30f3\u30d7\u30eb-\u30af\u30a8\u30ea\u30fc\u3092\u5b9f\u884c\u3059\u308b",level:2},...r.RM,{value:"\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u8a2d\u5b9a\u3059\u308b",id:"\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u8a2d\u5b9a\u3059\u308b",level:2}];function i(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"VirtualBox\u30687 zip\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"apt update && apt-get install p7zip-full p7zip-rar virtualbox -y\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Vantage Express \u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b\u305f\u3081\u306e curl \u30b3\u30de\u30f3\u30c9\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://downloads.teradata.com/download/database/teradata-express-for-vmware-player",children:"Vantage Express \u30c0\u30a6\u30f3\u30ed\u30fc\u30c9 \u30da\u30fc\u30b8"})," \u3078\u30a2\u30af\u30bb\u30b9\u3057\u3066\u304f\u3060\u3055\u3044\uff08\u767b\u9332\u304c\u5fc5\u8981\u3067\u3059\uff09\u3002"]}),"\n",(0,a.jsx)(n.li,{children:"\u6700\u65b0\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9 \u30ea\u30f3\u30af (\u4f8b: **\u300cVantage Express 17.20\u300d)**\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002\u4f7f\u7528\u8a31\u8afe\u5951\u7d04\u306e\u30dd\u30c3\u30d7\u30a2\u30c3\u30d7\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002\u307e\u3060\u30e9\u30a4\u30bb\u30f3\u30b9\u3092\u53d7\u3051\u5165\u308c\u307e\u305b\u3093\u3002"}),"\n",(0,a.jsxs)(n.li,{children:["\u30d6\u30e9\u30a6\u30b6\u3067\u30cd\u30c3\u30c8\u30ef\u30fc\u30af \u30d3\u30e5\u30fc\u3092\u958b\u304d\u307e\u3059\u3002\u305f\u3068\u3048\u3070\u3001Chrome \u3067\u306f ",(0,a.jsx)("kbd",{children:"F12 \u30ad\u30fc"})," \u3092\u62bc\u3057\u3066 ",(0,a.jsx)(n.code,{children:"Network"})," \u30bf\u30d6\u306b\u79fb\u52d5\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"\u30d6\u30e9\u30a6\u30b6\u306e\u300cNetwork\u300d\u30bf\u30d6",src:s(94582).A+"",width:"1172",height:"764"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"I Agree (\u540c\u610f\u3059\u308b)"})," \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u30e9\u30a4\u30bb\u30f3\u30b9\u3092\u53d7\u3051\u5165\u308c\u3001\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3092\u30ad\u30e3\u30f3\u30bb\u30eb\u3057\u307e\u3059\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:["\u30cd\u30c3\u30c8\u30ef\u30fc\u30af \u30d3\u30e5\u30fc\u3067\u3001 ",(0,a.jsx)(n.code,{children:"VantageExpress"})," \u3067\u59cb\u307e\u308b\u6700\u5f8c\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u898b\u3064\u3051\u307e\u3059\u3002\u305d\u308c\u3092\u53f3\u30af\u30ea\u30c3\u30af\u3057\u3066 ",(0,a.jsx)(n.code,{children:"Copy -> Copy as cURL"})," \u3092\u9078\u629e\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Browser Copy culr",src:s(2053).A+"",width:"1024",height:"928"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["ssh \u30bb\u30c3\u30b7\u30e7\u30f3\u306b\u623b\u308a\u3001curl \u30b3\u30de\u30f3\u30c9\u3092\u8cbc\u308a\u4ed8\u3051\u3066 Vantage Express \u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u307e\u3059\u3002\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3092 ",(0,a.jsx)(n.code,{children:"ve.7z"})," \u3068\u3044\u3046\u540d\u524d\u306e\u30d5\u30a1\u30a4\u30eb\u306b\u4fdd\u5b58\u3059\u308b\u306b\u306f\u3001\u30b3\u30de\u30f3\u30c9\u306b ",(0,a.jsx)(n.code,{children:"-o ve.7z"})," \u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002\u3059\u3079\u3066\u306e HTTP \u30d8\u30c3\u30c0\u30fc\u3092\u524a\u9664\u3067\u304d\u307e\u3059\u3002\u4f8b:"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -o ve.7z 'http://d289lrf5tw1zls.cloudfront.net/database/teradata-express/VantageExpress17.20_Sles12_202108300444.7z?Expires=1638719978&Signature=GKBkNvery_long_signature__&Key-Pair-Id=********************'\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u305f\u30d5\u30a1\u30a4\u30eb\u3092\u89e3\u51cd\u3057\u307e\u3059\u3002\u6570\u5206\u304b\u304b\u308a\u307e\u3059\u3002"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"7z x ve.7z\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"VirtualBox \u3067 VM \u3092\u8d77\u52d5\u3057\u307e\u3059\u30b3\u30de\u30f3\u30c9\u306f\u3059\u3050\u306b\u8fd4\u3055\u308c\u307e\u3059\u304c\u3001VM \u306e\u521d\u671f\u5316\u30d7\u30ed\u30bb\u30b9\u306b\u306f\u6570\u5206\u304b\u304b\u308a\u307e\u3059\u3002"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'export VM_IMAGE_DIR="/opt/downloads/VantageExpress17.20_Sles12"\nDEFAULT_VM_NAME="vantage-express"\nVM_NAME="${VM_NAME:-$DEFAULT_VM_NAME}"\nvboxmanage createvm --name "$VM_NAME" --register --ostype openSUSE_64\nvboxmanage modifyvm "$VM_NAME" --ioapic on --memory 6000 --vram 128 --nic1 nat --cpus 4\nvboxmanage storagectl "$VM_NAME" --name "SATA Controller" --add sata --controller IntelAhci\nvboxmanage storageattach "$VM_NAME" --storagectl "SATA Controller" --port 0 --device 0 --type hdd --medium  "$(find $VM_IMAGE_DIR -name \'*disk1*\')"\nvboxmanage storageattach "$VM_NAME" --storagectl "SATA Controller" --port 1 --device 0 --type hdd --medium  "$(find $VM_IMAGE_DIR -name \'*disk2*\')"\nvboxmanage storageattach "$VM_NAME" --storagectl "SATA Controller" --port 2 --device 0 --type hdd --medium  "$(find $VM_IMAGE_DIR -name \'*disk3*\')"\nvboxmanage modifyvm "$VM_NAME" --natpf1 "tdssh,tcp,,4422,,22"\nvboxmanage modifyvm "$VM_NAME" --natpf1 "tddb,tcp,,1025,,1025"\nvboxmanage startvm "$VM_NAME" --type headless\nvboxmanage controlvm "$VM_NAME" keyboardputscancode 1c 1c\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Vantage Express VM \u306b ssh \u3067\u63a5\u7d9a\u3057\u307e\u3059\u3002 ",(0,a.jsx)(n.code,{children:"root"})," \u3092\u30d1\u30b9\u30ef\u30fc\u30c9\u3068\u3057\u3066\u4f7f\u7528\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"ssh -p 4422 root@localhost\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"DB \u304c\u8d77\u52d5\u3057\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pdestate -a\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u30b3\u30de\u30f3\u30c9\u304c",(0,a.jsx)(n.code,{children:"PDE state is RUN/STARTED. DBS state is 5: Logons are enabled - The system is quiescent"}),"\u3092\u8fd4\u3059\u5834\u5408\u306f\u3001Vantage Express\u304c\u8d77\u52d5\u3057\u305f\u3053\u3068\u3092\u610f\u5473\u3057\u307e\u3059\u3002\u72b6\u614b\u304c\u7570\u306a\u308b\u5834\u5408\u306f\u3001\u6b63\u3057\u3044\u30b9\u30c6\u30fc\u30bf\u30b9\u304c\u5f97\u3089\u308c\u308b\u307e\u3067 ",(0,a.jsx)(n.code,{children:"pdestate -a"})," \u3092\u7e70\u308a\u8fd4\u3057\u307e\u3059\u3002"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Vantage Express\u304c\u8d77\u52d5\u3057\u3066\u5b9f\u884c\u3055\u308c\u305f\u3089\u3001",(0,a.jsx)(n.code,{children:"bteq"})," \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u8d77\u52d5\u3057\u307e\u3059\u3002BTEQ (\u300c\u30d3\u30fc\u30c6\u30c3\u30af\u300d\u3068\u767a\u97f3) \u306f\u3001Teradata Database \u306b SQL \u30af\u30a8\u30ea\u30fc\u3092\u9001\u4fe1\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u308b\u3001\u6c4e\u7528\u306e\u30b3\u30de\u30f3\u30c9 \u30d9\u30fc\u30b9\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8 \u30c4\u30fc\u30eb\u3067\u3059\u3002"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"bteq\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["bteq \u306b\u5165\u3063\u305f\u3089\u3001Vantage Express \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306b\u63a5\u7d9a\u3057\u307e\u3059\u3002\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u6c42\u3081\u3089\u308c\u305f\u3089\u3001 ",(0,a.jsx)(n.code,{children:"dbc"})," \u3092\u5165\u529b\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:".logon localhost/dbc\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u30b5\u30f3\u30d7\u30eb-\u30af\u30a8\u30ea\u30fc\u3092\u5b9f\u884c\u3059\u308b",children:"\u30b5\u30f3\u30d7\u30eb \u30af\u30a8\u30ea\u30fc\u3092\u5b9f\u884c\u3059\u308b"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"dbc"})," \u30e6\u30fc\u30b6\u30fc\u3092\u4f7f\u7528\u3057\u3066\u3001",(0,a.jsx)(n.code,{children:"HR"})," \u3068\u3044\u3046\u65b0\u3057\u3044\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\u3053\u306e\u30af\u30a8\u30ea\u30fc\u3092\u30b3\u30d4\u30fc/\u8cbc\u308a\u4ed8\u3051\u3057\u3066\u5b9f\u884c\u3057\u3001 ",(0,a.jsx)("kbd",{children:"Enter"}),"\u30ad\u30fc\u3092\u62bc\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,a.jsx)(r.Ay,{}),"\n",(0,a.jsx)(n.h2,{id:"\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u8a2d\u5b9a\u3059\u308b",children:"\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u8a2d\u5b9a\u3059\u308b"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"VM \u3092\u505c\u6b62\u3057\u3066\u8d77\u52d5\u3059\u308b\u5834\u5408\u306f\u3001Vantage Express \u3092\u81ea\u52d5\u8d77\u52d5\u306b\u8ffd\u52a0\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002 VM \u306b ssh \u3067\u63a5\u7d9a\u3057\u3001\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo -i\n\ncat <<EOF >> /etc/default/virtualbox\nVBOXAUTOSTART_DB=/etc/vbox\nVBOXAUTOSTART_CONFIG=/etc/vbox/autostart.cfg\nEOF\n\ncat <<EOF > /etc/systemd/system/vantage-express.service\n[Unit]\nDescription=vm1\nAfter=network.target virtualbox.service\nBefore=runlevel2.target shutdown.target\n[Service]\nUser=root\nGroup=root\nType=forking\nRestart=no\nTimeoutSec=5min\nIgnoreSIGPIPE=no\nKillMode=process\nGuessMainPID=no\nRemainAfterExit=yes\nExecStart=/usr/bin/VBoxManage startvm vantage-express --type headless\nExecStop=/usr/bin/VBoxManage controlvm vantage-express savestate\n[Install]\nWantedBy=multi-user.target\nEOF\n\nsystemctl daemon-reload\nsystemctl enable vantage-express\nsystemctl start vantage-express\n"})})]})}function l(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}},64375:(e,n,s)=>{s.d(n,{Ay:()=>i,RM:()=>r});var a=s(74848),t=s(28453);const r=[];function c(e){const n={a:"a",admonition:"admonition",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",...(0,t.R)(),...e.components};return(0,a.jsxs)(n.admonition,{type:"note",children:[(0,a.jsx)(n.mdxAdmonitionTitle,{}),(0,a.jsxs)(n.p,{children:["\u73fe\u5728\u3001 ",(0,a.jsx)(n.a,{href:"https://clearscape.teradata.com/",children:"https://clearscape.teradata.com"}),"\u3067 Vantage \u306e\u30db\u30b9\u30c8\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u7121\u6599\u3067\u5165\u624b\u3067\u304d\u307e\u3059\u3002"]})]})}function i(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},62007:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>x,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var a=s(74848),t=s(28453),r=s(64375),c=s(11319),i=s(12090);const l={sidebar_position:1,author:"Adam Tworkiewicz",email:"adam.tworkiewicz@teradata.com",page_last_update:"2022 \u5e74 12 \u6708 12 \u65e5",description:"AWS \u3067 Vantage Express \u3092\u5b9f\u884c\u3059\u308b\u65b9\u6cd5",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","AWS"]},o="AWS \u3067 Vantage Express \u3092\u5b9f\u884c\u3059\u308b\u65b9\u6cd5",d={id:"get-access-to-vantage/on-your-cloud-infrastructure/run-vantage-express-on-aws",title:"AWS \u3067 Vantage Express \u3092\u5b9f\u884c\u3059\u308b\u65b9\u6cd5",description:"AWS \u3067 Vantage Express \u3092\u5b9f\u884c\u3059\u308b\u65b9\u6cd5",source:"@site/i18n/ja/docusaurus-plugin-content-docs-quickstarts/current/get-access-to-vantage/on-your-cloud-infrastructure/run-vantage-express-on-aws.md",sourceDirName:"get-access-to-vantage/on-your-cloud-infrastructure",slug:"/get-access-to-vantage/on-your-cloud-infrastructure/run-vantage-express-on-aws",permalink:"/pr-preview/pr-148/ja/quickstarts/get-access-to-vantage/on-your-cloud-infrastructure/run-vantage-express-on-aws",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,author:"Adam Tworkiewicz",email:"adam.tworkiewicz@teradata.com",page_last_update:"2022 \u5e74 12 \u6708 12 \u65e5",description:"AWS \u3067 Vantage Express \u3092\u5b9f\u884c\u3059\u308b\u65b9\u6cd5",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","AWS"]},sidebar:"tutorialSidebar",previous:{title:"UTM \u3067 Vantage Express \u3092\u5b9f\u884c\u3059\u308b\u65b9\u6cd5",permalink:"/pr-preview/pr-148/ja/quickstarts/get-access-to-vantage/on-your-local/run-vantage-express-on-utm"},next:{title:"Google Cloud \u3067 Vantage Express \u3092\u5b9f\u884c\u3059\u308b\u65b9\u6cd5",permalink:"/pr-preview/pr-148/ja/quickstarts/get-access-to-vantage/on-your-cloud-infrastructure/vantage-express-gcp"}},u={},p=[...r.RM,{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:2},...i.RM,{value:"\u30af\u30ea\u30fc\u30f3\u30a2\u30c3\u30d7\u3059\u308b",id:"\u30af\u30ea\u30fc\u30f3\u30a2\u30c3\u30d7\u3059\u308b",level:2},{value:"\u6b21\u306e\u30b9\u30c6\u30c3\u30d7",id:"\u6b21\u306e\u30b9\u30c6\u30c3\u30d7",level:2},{value:"\u3055\u3089\u306b\u8a73\u3057\u304f",id:"\u3055\u3089\u306b\u8a73\u3057\u304f",level:2},...c.RM];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"aws-\u3067-vantage-express-\u3092\u5b9f\u884c\u3059\u308b\u65b9\u6cd5",children:"AWS \u3067 Vantage Express \u3092\u5b9f\u884c\u3059\u308b\u65b9\u6cd5"}),"\n",(0,a.jsx)(r.Ay,{}),"\n",(0,a.jsx)(n.h2,{id:"\u6982\u8981",children:"\u6982\u8981"}),"\n",(0,a.jsx)(n.p,{children:"\u3053\u306e\u30cf\u30a6\u30c4\u30fc\u3067\u306f\u3001AWS \u3067 Vantage Express \u3092\u5b9f\u884c\u3059\u308b\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059\u3002Vantage Express \u306f\u3001\u5b8c\u5168\u306b\u6a5f\u80fd\u3059\u308b Teradata SQL \u30a8\u30f3\u30b8\u30f3\u3092\u542b\u3080\u3001\u30d5\u30c3\u30c8\u30d7\u30ea\u30f3\u30c8\u306e\u5c0f\u3055\u3044\u69cb\u6210\u3067\u3059\u3002"}),"\n",(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsx)("b",{children:"\u30af\u30e9\u30a6\u30c9\u6599\u91d1"}),(0,a.jsxs)(n.p,{children:["Vantage Express \u306f\u4eee\u60f3\u30de\u30b7\u30f3 \u30a4\u30e1\u30fc\u30b8\u3068\u3057\u3066\u914d\u5e03\u3055\u308c\u307e\u3059\u3002\u3053\u306e\u30cf\u30a6\u30c4\u30fc\u3067\u306f\u3001EC2 ",(0,a.jsx)(n.code,{children:"c5n.metal"})," \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9 \u30bf\u30a4\u30d7\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\u3053\u308c\u306f\u30011 \u6642\u9593\u3042\u305f\u308a 3 \u30c9\u30eb\u3092\u8d85\u3048\u308b\u30d9\u30a2\u30e1\u30bf\u30eb \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3067\u3059\u3002"]}),(0,a.jsxs)(n.p,{children:["\u3088\u308a\u5b89\u4fa1\u306a\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u5fc5\u8981\u306a\u5834\u5408\u306f\u3001\u30cd\u30b9\u30c8\u3055\u308c\u305f\u4eee\u60f3\u5316\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3001\u5b89\u4fa1\u306aVM\u3067Vantage Express\u3092\u5b9f\u884c\u3067\u304d\u308b ",(0,a.jsx)(n.a,{href:"/pr-preview/pr-148/ja/quickstarts/get-access-to-vantage/on-your-cloud-infrastructure/vantage-express-gcp",children:"Google Cloud"}),"\u3068 ",(0,a.jsx)(n.a,{href:"/pr-preview/pr-148/ja/quickstarts/get-access-to-vantage/on-your-cloud-infrastructure/run-vantage-express-on-microsoft-azure",children:"Azure"}),"\u3092\u8a66\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),(0,a.jsxs)(n.p,{children:["\u30af\u30e9\u30a6\u30c9\u306e\u4f7f\u7528\u6599\u3092\u652f\u6255\u3044\u305f\u304f\u306a\u3044\u5834\u5408\u306f\u3001 ",(0,a.jsx)(n.a,{href:"https://clearscape.teradata.com/",children:"https://clearscape.teradata.com/"}),"\u3067 Vantage \u306e\u7121\u6599\u30db\u30b9\u30c8\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u5165\u624b\u3067\u304d\u307e\u3059\u3002\u307e\u305f\u306f\u3001 ",(0,a.jsx)(n.a,{href:"/pr-preview/pr-148/ja/quickstarts/get-access-to-vantage/on-your-local/getting-started-vmware",children:"VMware"}),"\u3001 ",(0,a.jsx)(n.a,{href:"/pr-preview/pr-148/ja/quickstarts/get-access-to-vantage/on-your-local/getting-started-vbox",children:"VirtualBox"}),"\u3001\u307e\u305f\u306f ",(0,a.jsx)(n.a,{href:"/pr-preview/pr-148/ja/quickstarts/get-access-to-vantage/on-your-local/run-vantage-express-on-utm",children:"UTM"}),"\u3092\u4f7f\u7528\u3057\u3066 Vantage Express \u3092\u30ed\u30fc\u30ab\u30eb\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"]})]}),"\n",(0,a.jsx)(n.h2,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["AWS \u30a2\u30ab\u30a6\u30f3\u30c8\u3002\u65b0\u3057\u3044\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u306f\u3001 ",(0,a.jsx)(n.a,{href:"https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/",children:"AWS\u306e\u516c\u5f0f\u30a4\u30f3\u30b9\u30c8\u30e9\u30af\u30b7\u30e7\u30f3"}),"\u306b\u5f93\u3063\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"awscli"})," \u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3 \u30e6\u30fc\u30c6\u30a3\u30ea\u30c6\u30a3\u304c\u30de\u30b7\u30f3\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3001\u69cb\u6210\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u624b\u9806\u306b\u3064\u3044\u3066\u306f\u3001 ",(0,a.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html",children:"https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",children:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u306b\u9762\u3057\u305f\u30b5\u30d6\u30cd\u30c3\u30c8\u3092\u6301\u3064 VPC \u304c\u5fc5\u8981\u3067\u3059\u3002\u5229\u7528\u53ef\u80fd\u306a VPC \u304c\u306a\u3044\u5834\u5408\u306f\u3001\u6b21\u306e\u65b9\u6cd5\u3067\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'# Copied from https://cloudaffaire.com/how-to-create-a-custom-vpc-using-aws-cli/\n\n# Create VPC\nAWS_VPC_ID=$(aws ec2 create-vpc \\\n  --cidr-block 10.0.0.0/16 \\\n  --query \'Vpc.{VpcId:VpcId}\' \\\n  --output text)\n\n# Enable DNS hostname for your VPC\naws ec2 modify-vpc-attribute \\\n  --vpc-id $AWS_VPC_ID \\\n  --enable-dns-hostnames "{"Value":true}"\n\n# Create a public subnet\nAWS_SUBNET_PUBLIC_ID=$(aws ec2 create-subnet \\\n  --vpc-id $AWS_VPC_ID --cidr-block 10.0.1.0/24 \\\n  --query \'Subnet.{SubnetId:SubnetId}\' \\\n  --output text)\n\n# Enable Auto-assign Public IP on Public Subnet\naws ec2 modify-subnet-attribute \\\n  --subnet-id $AWS_SUBNET_PUBLIC_ID \\\n  --map-public-ip-on-launch\n\n# Create an Internet Gateway\nAWS_INTERNET_GATEWAY_ID=$(aws ec2 create-internet-gateway \\\n  --query \'InternetGateway.{InternetGatewayId:InternetGatewayId}\' \\\n  --output text)\n\n# Attach Internet gateway to your VPC\naws ec2 attach-internet-gateway \\\n  --vpc-id $AWS_VPC_ID \\\n  --internet-gateway-id $AWS_INTERNET_GATEWAY_ID\n\n# Create a route table\nAWS_CUSTOM_ROUTE_TABLE_ID=$(aws ec2 create-route-table \\\n  --vpc-id $AWS_VPC_ID \\\n  --query \'RouteTable.{RouteTableId:RouteTableId}\' \\\n  --output text )\n\n# Create route to Internet Gateway\naws ec2 create-route \\\n  --route-table-id $AWS_CUSTOM_ROUTE_TABLE_ID \\\n  --destination-cidr-block 0.0.0.0/0 \\\n  --gateway-id $AWS_INTERNET_GATEWAY_ID \\\n  --output text\n\n# Associate the public subnet with route table\nAWS_ROUTE_TABLE_ASSOID=$(aws ec2 associate-route-table  \\\n  --subnet-id $AWS_SUBNET_PUBLIC_ID \\\n  --route-table-id $AWS_CUSTOM_ROUTE_TABLE_ID \\\n  --output text | head -1)\n\n# Create a security group\naws ec2 create-security-group \\\n  --vpc-id $AWS_VPC_ID \\\n  --group-name myvpc-security-group \\\n  --description \'My VPC non default security group\' \\\n  --output text\n\n# Get security group ID\'s\nAWS_DEFAULT_SECURITY_GROUP_ID=$(aws ec2 describe-security-groups \\\n  --filters "Name=vpc-id,Values=$AWS_VPC_ID" \\\n  --query \'SecurityGroups[?GroupName == `default`].GroupId\' \\\n  --output text) &&\n  AWS_CUSTOM_SECURITY_GROUP_ID=$(aws ec2 describe-security-groups \\\n  --filters "Name=vpc-id,Values=$AWS_VPC_ID" \\\n  --query \'SecurityGroups[?GroupName == `myvpc-security-group`].GroupId\' \\\n  --output text)\n\n# Create security group ingress rules\naws ec2 authorize-security-group-ingress \\\n  --group-id $AWS_CUSTOM_SECURITY_GROUP_ID \\\n  --ip-permissions \'[{"IpProtocol": "tcp", "FromPort": 22, "ToPort": 22, "IpRanges": [{"CidrIp": "0.0.0.0/0", "Description": "Allow SSH"}]}]\' \\\n  --output text\n\n# Add a tag to the VPC\naws ec2 create-tags \\\n  --resources $AWS_VPC_ID \\\n  --tags "Key=Name,Value=vantage-express-vpc"\n\n# Add a tag to public subnet\naws ec2 create-tags \\\n  --resources $AWS_SUBNET_PUBLIC_ID \\\n  --tags "Key=Name,Value=vantage-express-vpc-public-subnet"\n\n# Add a tag to the Internet-Gateway\naws ec2 create-tags \\\n  --resources $AWS_INTERNET_GATEWAY_ID \\\n  --tags "Key=Name,Value=vantage-express-vpc-internet-gateway"\n\n# Add a tag to the default route table\nAWS_DEFAULT_ROUTE_TABLE_ID=$(aws ec2 describe-route-tables \\\n  --filters "Name=vpc-id,Values=$AWS_VPC_ID" \\\n  --query \'RouteTables[?Associations[0].Main != `false`].RouteTableId\' \\\n  --output text) &&\n  aws ec2 create-tags \\\n  --resources $AWS_DEFAULT_ROUTE_TABLE_ID \\\n  --tags "Key=Name,Value=vantage-express-vpc-default-route-table"\n\n# Add a tag to the public route table\naws ec2 create-tags \\\n  --resources $AWS_CUSTOM_ROUTE_TABLE_ID \\\n  --tags "Key=Name,Value=vantage-express-vpc-public-route-table"\n\n# Add a tags to security groups\naws ec2 create-tags \\\n  --resources $AWS_CUSTOM_SECURITY_GROUP_ID \\\n  --tags "Key=Name,Value=vantage-express-vpc-security-group" &&\n  aws ec2 create-tags \\\n  --resources $AWS_DEFAULT_SECURITY_GROUP_ID \\\n  --tags "Key=Name,Value=vantage-express-vpc-default-security-group"\n\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"VM \u3092\u4f5c\u6210\u3059\u308b\u306b\u306f\u3001SSH \u30ad\u30fc \u30da\u30a2\u304c\u5fc5\u8981\u3067\u3059\u3002\u307e\u3060\u306a\u3044\u5834\u5408\u306f\u4f5c\u6210\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"aws ec2 create-key-pair --key-name vantage-key --query 'KeyMaterial' --output text > vantage-key.pem\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\u79d8\u5bc6\u9375\u3078\u306e\u30a2\u30af\u30bb\u30b9\u3092\u5236\u9650\u3057\u307e\u3059\u3002 ",(0,a.jsx)(n.code,{children:"<path_to_private_key_file>"})," \u3092\u524d\u306e\u30b3\u30de\u30f3\u30c9\u3067\u8fd4\u3055\u308c\u305f\u79d8\u5bc6\u9375\u306e\u30d1\u30b9\u306b\u7f6e\u304d\u63db\u3048\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"chmod 600 vantage-key.pem\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u30ea\u30fc\u30b8\u30e7\u30f3\u306e\u6700\u65b0\u306eUbuntu\u30a4\u30e1\u30fc\u30b8\u306eAMI ID\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"AWS_AMI_ID=$(aws ec2 describe-images \\\n  --filters 'Name=name,Values=ubuntu/images/hvm-ssd/ubuntu-*amd64*' \\\n  --query 'Images[*].[Name,ImageId,CreationDate]' --output text \\\n  | sort -k3 -r | head -n1 | cut -f 2)\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"4 \u3064\u306e CPU\u30018 GB \u306e RAM\u3001\u304a\u3088\u3073 70 GB \u306e\u30c7\u30a3\u30b9\u30af\u3092\u5099\u3048\u305f Ubuntu VM \u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"AWS_INSTANCE_ID=$(aws ec2 run-instances \\\n  --image-id $AWS_AMI_ID \\\n  --count 1 \\\n  --instance-type c5n.metal \\\n  --block-device-mapping DeviceName=/dev/sda1,Ebs={VolumeSize=70} \\\n  --key-name vantage-key \\\n  --security-group-ids $AWS_CUSTOM_SECURITY_GROUP_ID \\\n  --subnet-id $AWS_SUBNET_PUBLIC_ID \\\n  --query 'Instances[0].InstanceId' \\\n  --output text)\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"VM\u306bssh\u3067\u63a5\u7d9a\u3057\u307e\u3059\u3002"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'AWS_INSTANCE_PUBLIC_IP=$(aws ec2 describe-instances \\\n  --query "Reservations[*].Instances[*].PublicIpAddress" \\\n  --output=text --instance-ids $AWS_INSTANCE_ID)\nssh -i vantage-key.pem ubuntu@$AWS_INSTANCE_PUBLIC_IP\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["VM \u306b\u63a5\u7d9a\u3057\u305f\u3089\u3001",(0,a.jsx)(n.code,{children:"root"}),"  \u30e6\u30fc\u30b6\u30fc\u306b\u5207\u308a\u66ff\u3048\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo -i\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Vantage Express\u7528\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u6e96\u5099\u3059\u308b\u3002"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"mkdir /opt/downloads\ncd /opt/downloads\n"})}),"\n",(0,a.jsx)(i.Ay,{}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u304b\u3089 Vantage Express \u306b\u63a5\u7d9a\u3059\u308b\u5834\u5408\u306f\u3001VM \u3078\u306e\u30d5\u30a1\u30a4\u30a2\u30a6\u30a9\u30fc\u30eb\u306e\u7a74\u3092\u958b\u3051\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u307e\u305f\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u3092 ",(0,a.jsx)(n.code,{children:"dbc"})," \u30e6\u30fc\u30b6\u30fc\u306b\u5909\u66f4\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"dbc"})," \u30e6\u30fc\u30b6\u30fc\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u5909\u66f4\u3059\u308b\u306b\u306f\u3001VM \u306b\u79fb\u52d5\u3057\u3066 bteq \u3092\u958b\u59cb\u3059\u308b\u3002"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"bteq\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\u30e6\u30fc\u30b6\u30fc\u540d\u3068\u30d1\u30b9\u30ef\u30fc\u30c9\u3068\u3057\u3066 ",(0,a.jsx)(n.code,{children:"dbc"})," \u3092\u4f7f\u7528\u3057\u3066\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306b\u30ed\u30b0\u30a4\u30f3\u3059\u308b\u3002"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:".logon localhost/dbc\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"dbc"})," \u30e6\u30fc\u30b6\u30fc\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u5909\u66f4\u3059\u308b\u3002"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"MODIFY USER dbc AS PASSWORD = new_password;\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u3053\u308c\u3067\u3001\u30dd\u30fc\u30c8 1025 \u3092\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u306b\u958b\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'aws ec2 authorize-security-group-ingress \\\n  --group-id $AWS_CUSTOM_SECURITY_GROUP_ID \\\n  --ip-permissions \'[{"IpProtocol": "tcp", "FromPort": 1025, "ToPort": 1025, "IpRanges": [{"CidrIp": "0.0.0.0/0", "Description": "Allow Teradata port"}]}]\'\n'})}),"\n",(0,a.jsx)(n.h2,{id:"\u30af\u30ea\u30fc\u30f3\u30a2\u30c3\u30d7\u3059\u308b",children:"\u30af\u30ea\u30fc\u30f3\u30a2\u30c3\u30d7\u3059\u308b"}),"\n",(0,a.jsx)(n.p,{children:"\u6599\u91d1\u306e\u767a\u751f\u3092\u505c\u6b62\u3059\u308b\u306b\u306f\u3001\u3059\u3079\u3066\u306e\u30ea\u30bd\u30fc\u30b9\u3092\u524a\u9664\u3057\u307e\u3059\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Delete the VM\naws ec2 terminate-instances --instance-ids $AWS_INSTANCE_ID --output text\n\n# Wait for the VM to terminate\n\n# Delete custom security group\naws ec2 delete-security-group \\\n  --group-id $AWS_CUSTOM_SECURITY_GROUP_ID\n\n# Delete internet gateway\naws ec2 detach-internet-gateway \\\n  --internet-gateway-id $AWS_INTERNET_GATEWAY_ID \\\n  --vpc-id $AWS_VPC_ID &&\n  aws ec2 delete-internet-gateway \\\n  --internet-gateway-id $AWS_INTERNET_GATEWAY_ID\n\n# Delete the custom route table\naws ec2 disassociate-route-table \\\n  --association-id $AWS_ROUTE_TABLE_ASSOID &&\n  aws ec2 delete-route-table \\\n  --route-table-id $AWS_CUSTOM_ROUTE_TABLE_ID\n\n# Delete the public subnet\naws ec2 delete-subnet \\\n  --subnet-id $AWS_SUBNET_PUBLIC_ID\n\n# Delete the vpc\naws ec2 delete-vpc \\\n  --vpc-id $AWS_VPC_ID\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u6b21\u306e\u30b9\u30c6\u30c3\u30d7",children:"\u6b21\u306e\u30b9\u30c6\u30c3\u30d7"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/pr-preview/pr-148/ja/quickstarts/manage-data/nos",children:"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u30b9\u30c8\u30ec\u30fc\u30b8\u306b\u4fdd\u5b58\u3055\u308c\u305f\u30af\u30a8\u30ea\u30fc\u30c7\u30fc\u30bf"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"\u3055\u3089\u306b\u8a73\u3057\u304f",children:"\u3055\u3089\u306b\u8a73\u3057\u304f"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://docs.teradata.com/r/Teradata-StudioTM-and-StudioTM-Express-Installation-Guide-17.20",children:"Teradata\xaeStudio\u2122\u304a\u3088\u3073Studio\u2122Express\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb \u30ac\u30a4\u30c9"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://docs.teradata.com/r/jmAxXLdiDu6NiyjT6hhk7g/root",children:"BTEQ \u306e\u7d39\u4ecb"})}),"\n"]}),"\n",(0,a.jsx)(c.Ay,{})]})}function x(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},2053:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/browser.copy.curl-ef8d15fbb3caf4c7c5981d9e8888f5aa.png"},94582:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/browser.network-10b20cd42fc007de4c04d0c25874a866.png"},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>i});var a=s(96540);const t={},r=a.createContext(t);function c(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);