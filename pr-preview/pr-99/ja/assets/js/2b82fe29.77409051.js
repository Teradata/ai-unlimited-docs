"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[9273],{24155:(e,r,i)=>{i.d(r,{Ay:()=>l,RM:()=>d});var n=i(74848),s=i(28453);const d=[];function t(e){const r={a:"a",code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["Teradata \u304c\u63d0\u4f9b\u3059\u308b ",(0,n.jsx)(r.a,{href:"https://github.com/Teradata/ai-unlimited",children:"AI Unlimited GitHub\u30ea\u30dd\u30b8\u30c8\u30ea"})," \u5185\u306e ",(0,n.jsx)(r.code,{children:"deployments"})," \u30d5\u30a9\u30eb\u30c0\u306b\u306f\u3001AI Unlimited \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u305f\u3081\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3001\u30d1\u30e9\u30e1\u30fc\u30bf\u3001\u304a\u3088\u3073\u30dd\u30ea\u30b7\u30fc \u30d5\u30a1\u30a4\u30eb\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(r.p,{children:"\u30bf\u30fc\u30df\u30ca\u30eb \u30a6\u30a3\u30f3\u30c9\u30a6\u3092\u958b\u304d\u3001\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u30af\u30ed\u30fc\u30f3\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"git clone https://github.com/Teradata/ai-unlimited\n"})})]})}function l(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(t,{...e})}):t(e)}},69689:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>j,contentTitle:()=>l,default:()=>a,frontMatter:()=>t,metadata:()=>c,toc:()=>x});var n=i(74848),s=i(28453),d=i(24155);const t={id:"deploy-manager-azure-portal",title:"Azure\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",description:"Azure Resource Manager (ARM) \u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u4f7f\u7528\u3057\u3066\u30de\u30cd\u30fc\u30b8\u30e3\u3092\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u65b9\u6cd5\u3092\u5b66\u7fd2\u3057\u307e\u3059\u3002",sidebar_label:"Azure\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",sidebar_position:2,pagination_prev:null,pagination_next:null},l="Azure\u306b\u30de\u30cd\u30fc\u30b8\u30e3\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",c={id:"install-ai-unlimited/deploy-manager-azure-portal",title:"Azure\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",description:"Azure Resource Manager (ARM) \u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u4f7f\u7528\u3057\u3066\u30de\u30cd\u30fc\u30b8\u30e3\u3092\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u65b9\u6cd5\u3092\u5b66\u7fd2\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/install-ai-unlimited/prod-azure-portal-deploy-manager.md",sourceDirName:"install-ai-unlimited",slug:"/install-ai-unlimited/deploy-manager-azure-portal",permalink:"/pr-preview/pr-99/ja/ai-unlimited/install-ai-unlimited/deploy-manager-azure-portal",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"deploy-manager-azure-portal",title:"Azure\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",description:"Azure Resource Manager (ARM) \u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u4f7f\u7528\u3057\u3066\u30de\u30cd\u30fc\u30b8\u30e3\u3092\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u65b9\u6cd5\u3092\u5b66\u7fd2\u3057\u307e\u3059\u3002",sidebar_label:"Azure\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",sidebar_position:2,pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},j={},x=[{value:"\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u30af\u30ed\u30fc\u30f3\u3059\u308b",id:"\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u30af\u30ed\u30fc\u30f3\u3059\u308b",level:2},...d.RM,{value:"\u30de\u30cd\u30fc\u30b8\u30e3 \u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u898b\u3064\u3051\u308b",id:"\u30de\u30cd\u30fc\u30b8\u30e3-\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u898b\u3064\u3051\u308b",level:2},{value:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u8aad\u307f\u8fbc\u3080",id:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u8aad\u307f\u8fbc\u3080",level:2},{value:"\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u8a73\u7d30\u3092\u6307\u5b9a\u3059\u308b",id:"\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u8a73\u7d30\u3092\u6307\u5b9a\u3059\u308b",level:2},{value:"\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u4f5c\u6210\u3059\u308b",id:"\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u4f5c\u6210\u3059\u308b",level:2},{value:"\u6b21\u306e\u30b9\u30c6\u30c3\u30d7",id:"\u6b21\u306e\u30b9\u30c6\u30c3\u30d7",level:2}];function h(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{Details:i}=r;return i||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"azure\u306b\u30de\u30cd\u30fc\u30b8\u30e3\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",children:"Azure\u306b\u30de\u30cd\u30fc\u30b8\u30e3\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"}),"\n",(0,n.jsxs)(r.p,{children:["\u59cb\u3081\u308b\u524d\u306b\u3001 ",(0,n.jsx)(r.a,{href:"/pr-preview/pr-99/ja/ai-unlimited/install-ai-unlimited/#prerequisites",children:"\u524d\u63d0\u6761\u4ef6"})," \u304c\u6e80\u305f\u3055\u308c\u3066\u304a\u308a\u3001AWS \u30a2\u30ab\u30a6\u30f3\u30c8\u304c ",(0,n.jsx)(r.a,{href:"/pr-preview/pr-99/ja/ai-unlimited/resources/azure-account-requirements",children:"\u8981\u4ef6"}),"\u3092\u6e80\u305f\u3057\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,n.jsx)(r.p,{children:"AI Unlimited \u30de\u30cd\u30fc\u30b8\u30e3\u306f\u30a8\u30f3\u30b8\u30f3\u306e\u30c7\u30d7\u30ed\u30a4\u3092\u8abf\u6574\u3057\u3001\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u7528\u306e Web \u30d9\u30fc\u30b9\u306e\u30e6\u30fc\u30b6\u30fc \u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3092\u5099\u3048\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,n.jsxs)(r.p,{children:["Teradata \u304c\u63d0\u4f9b\u3059\u308b Azure Resource Manager (ARM) \u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u4f7f\u7528\u3057\u3066\u3001Azure Portal \u304b\u3089\u30de\u30cd\u30fc\u30b8\u30e3\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002\u30de\u30cd\u30fc\u30b8\u30e3\u304c ",(0,n.jsx)(r.a,{href:"/pr-preview/pr-99/ja/ai-unlimited/glossary#systemd",children:"systemd"}),"\u306b\u3088\u3063\u3066\u5236\u5fa1\u3055\u308c\u308b\u30b3\u30f3\u30c6\u30ca\u5185\u3067\u5b9f\u884c\u3055\u308c\u308b\u30b5\u30fc\u30d0\u30fc \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u30c7\u30d7\u30ed\u30a4\u3057\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(r.admonition,{type:"tip",children:(0,n.jsxs)(r.p,{children:["\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u306b\u95a2\u3059\u308b\u30d8\u30eb\u30d7\u306b\u3064\u3044\u3066\u306f\u3001 ",(0,n.jsx)("a",{href:"mailto:aiunlimited.support@Teradata.com",children:"\u30b5\u30dd\u30fc\u30c8 \u30c1\u30fc\u30e0"})," \u306b\u30e1\u30fc\u30eb\u3092\u9001\u4fe1\u3059\u308b\u304b\u3001 ",(0,n.jsx)(r.a,{href:"https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa",children:"\u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u306b\u8cea\u554f\u3057\u3066\u304f\u3060\u3055\u3044"}),"\u306b\u304a\u554f\u3044\u5408\u308f\u305b\u304f\u3060\u3055\u3044\u3002"]})}),"\n",(0,n.jsx)(r.h2,{id:"\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u30af\u30ed\u30fc\u30f3\u3059\u308b",children:"\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u30af\u30ed\u30fc\u30f3\u3059\u308b"}),"\n","\n",(0,n.jsx)(d.Ay,{}),"\n",(0,n.jsx)(r.h2,{id:"\u30de\u30cd\u30fc\u30b8\u30e3-\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u898b\u3064\u3051\u308b",children:"\u30de\u30cd\u30fc\u30b8\u30e3 \u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u898b\u3064\u3051\u308b"}),"\n",(0,n.jsx)(r.p,{children:"\u30de\u30cd\u30fc\u30b8\u30e3\u7528\u306e ARM \u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306f\u3001AI Unlimited GitHub \u30ea\u30dd\u30b8\u30c8\u30ea\u306b\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"deployments/azure/templates/arm/ai-unlimited"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/pr-preview/pr-99/ja/ai-unlimited/glossary#load-balancer",children:"\u30ed\u30fc\u30c9 \u30d0\u30e9\u30f3\u30b5"})," \u3092\u4f7f\u7528\u3059\u308b\u304b\u3069\u3046\u304b\u3001\u304a\u3088\u3073\u3069\u306e\u30bf\u30a4\u30d7\u3092\u4f7f\u7528\u3059\u308b\u304b\u306b\u57fa\u3065\u3044\u3066\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u9078\u629e\u3057\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(r.admonition,{type:"note",children:(0,n.jsx)(r.p,{children:"\u7d44\u7e54\u306e\u30af\u30e9\u30a6\u30c9\u7ba1\u7406\u8005\u306b\u30ac\u30a4\u30c0\u30f3\u30b9\u3092\u4f9d\u983c\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002"})}),"\n",(0,n.jsxs)(r.p,{children:["- \u2014 ",(0,n.jsx)(r.code,{children:"ai-unlimited-with-alb.json"}),"\u306e\u80cc\u5f8c\u306b\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u3092\u30db\u30b9\u30c8\u3059\u308b",(0,n.jsx)(r.a,{href:"/pr-preview/pr-99/ja/ai-unlimited/glossary#application-load-balancer",children:"application load balancer"}),"\n- \u2014",(0,n.jsx)(r.code,{children:"ai-unlimited-with-nlb.json"})," \u306e\u80cc\u5f8c\u306b\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u3092\u30db\u30b9\u30c8\u3059\u308b ",(0,n.jsx)(r.a,{href:"/pr-preview/pr-99/ja/ai-unlimited/glossary#network-load-balancer",children:"network load balancer"}),"\n- ",(0,n.jsx)(r.code,{children:"ai-unlimited-without-lb.json"}),"\u2014\u30ed\u30fc\u30c9 \u30d0\u30e9\u30f3\u30b5\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u3069\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u4f7f\u7528\u3059\u308b\u304b\u308f\u304b\u3089\u306a\u3044\u5834\u5408\u306f\u3001\u3053\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(r.h2,{id:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u8aad\u307f\u8fbc\u3080",children:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u8aad\u307f\u8fbc\u3080"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://portal.azure.com",children:"Azure Portal"}),"\u306b\u30b5\u30a4\u30f3\u30a4\u30f3\u3057\u307e\u3059\u3002","\n",(0,n.jsx)(r.admonition,{type:"note",children:(0,n.jsx)(r.p,{children:"Azure Portal \u3078\u306e\u53c2\u7167\u306f\u30012024 \u5e74 5 \u6708 29 \u65e5\u6642\u70b9\u3067\u6700\u65b0\u3067\u3059\u3002"})}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"\u30ab\u30b9\u30bf\u30e0\u30c7\u30d7\u30ed\u30a4\u30e1\u30f3\u30c8"}),"\u3092\u691c\u7d22\u3057\u3001 ",(0,n.jsx)(r.strong,{children:"\u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u30c7\u30d7\u30ed\u30a4\u3059\u308b"}),"\u3092\u9078\u629e\u3057\u307e\u3059\u3002"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"\u30a8\u30c7\u30a3\u30bf\u3067\u72ec\u81ea\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u4f5c\u6210\u3059\u308b"}),"\u3092\u9078\u629e\u3057\u3001\u6b21\u306b ",(0,n.jsx)(r.strong,{children:"\u30d5\u30a1\u30a4\u30eb\u3092\u8aad\u307f\u8fbc\u3080"}),"\u3092\u9078\u629e\u3057\u307e\u3059\u3002"]}),"\n",(0,n.jsxs)(r.li,{children:["\u4f7f\u7528\u3059\u308b\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8 \u30d5\u30a1\u30a4\u30eb\u3092\u9078\u629e\u3057\u3001 ",(0,n.jsx)(r.strong,{children:"\u4fdd\u5b58"}),"\u3092\u9078\u629e\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,n.jsx)("a",{id:"azure-parms"}),"\n",(0,n.jsx)(r.h2,{id:"\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u8a73\u7d30\u3092\u6307\u5b9a\u3059\u308b",children:"\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u8a73\u7d30\u3092\u6307\u5b9a\u3059\u308b"}),"\n",(0,n.jsx)(r.p,{children:"\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002\u5fc5\u9808\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u5024\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\u7d44\u7e54\u306b\u3088\u3063\u3066\u306f\u4ed6\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u304c\u5fc5\u8981\u306b\u306a\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,n.jsxs)(i,{children:[(0,n.jsx)("summary",{children:"Azure\u3068AI Unlimited\u306e\u30d1\u30e9\u30e1\u30fc\u30bf"}),(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"\u30d1\u30e9\u30e1\u30fc\u30bf"}),(0,n.jsx)(r.th,{children:"\u8aac\u660e"}),(0,n.jsx)(r.th,{children:"note"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Subscription"}),(0,n.jsx)(r.td,{children:"AI Unlimited \u306e\u30c7\u30d7\u30ed\u30a4\u306b\u4f7f\u7528\u3059\u308b Azure \u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u3002"}),(0,n.jsxs)(r.td,{children:["\u5fc5\u9808",(0,n.jsx)("br",{}),"\u30c7\u30d5\u30a9\u30eb\u30c8: NA ",(0,n.jsx)("br",{}),"\u3053\u308c\u306f\u5f93\u91cf\u8ab2\u91d1\u5236\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u3067\u3042\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Region"}),(0,n.jsx)(r.td,{children:"AI Unlimited \u3092\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u30ea\u30fc\u30b8\u30e7\u30f3\u3002"}),(0,n.jsxs)(r.td,{children:["\u5fc5\u9808",(0,n.jsx)("br",{}),"\u30c7\u30d5\u30a9\u30eb\u30c8: NA",(0,n.jsx)("br",{}),"\u4f5c\u696d\u5834\u6240\u306b\u6700\u3082\u8fd1\u3044 Azure \u30ea\u30fc\u30b8\u30e7\u30f3\u3068\u3001AI Unlimited \u3067\u4f7f\u7528\u3059\u308b\u30c7\u30fc\u30bf \u30ea\u30bd\u30fc\u30b9\u3092\u9078\u629e\u3057\u307e\u3059\u3002"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Resource Group Name"}),(0,n.jsx)(r.td,{children:"\u95a2\u9023\u3059\u308b AI Unlimited \u30ea\u30bd\u30fc\u30b9\u3092\u30b0\u30eb\u30fc\u30d7\u5316\u3059\u308b\u30b3\u30f3\u30c6\u30ca\u30fc\u306e\u540d\u524d\u3002"}),(0,n.jsxs)(r.td,{children:["\u5fc5\u9808",(0,n.jsx)("br",{}),"\u30c7\u30d5\u30a9\u30eb\u30c8: ai-unlimited-workspace"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"AI Unlimited Name"}),(0,n.jsx)(r.td,{children:"AI Unlimited \u306b\u4e0e\u3048\u3089\u308c\u305f\u56fa\u6709\u306e\u540d\u524d\u3002"}),(0,n.jsxs)(r.td,{children:["\u5fc5\u9808",(0,n.jsx)("br",{}),"\u30c7\u30d5\u30a9\u30eb\u30c8: NA"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Public Key"}),(0,n.jsx)(r.td,{children:"SSH \u7d4c\u7531\u3067 VM \u306b\u63a5\u7d9a\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3067\u304d\u308b\u516c\u958b SSH \u30ad\u30fc\u3002"}),(0,n.jsxs)(r.td,{children:["\u5fc5\u9808",(0,n.jsx)("br",{}),"\u30c7\u30d5\u30a9\u30eb\u30c8: NA",(0,n.jsx)("br",{}),"\u3053\u306e\u5024\u306f\u300cssh-rsa\u300d\u3067\u59cb\u307e\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"OS Version"}),(0,n.jsx)(r.td,{children:"\u73fe\u5728\u306e\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u3067\u5229\u7528\u53ef\u80fd\u306a\u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0 \u30b7\u30b9\u30c6\u30e0\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3002"}),(0,n.jsxs)(r.td,{children:["\u30c7\u30d5\u30a9\u30eb\u30c8\u3067  \u30aa\u30d7\u30b7\u30e7\u30f3",(0,n.jsx)("br",{}),"\u30c7\u30d5\u30a9\u30eb\u30c8: Ubuntu-2004"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Instance Type"}),(0,n.jsx)(r.td,{children:"AI Unlimited \u306b\u4f7f\u7528\u3059\u308b\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9 \u30bf\u30a4\u30d7\u3002"}),(0,n.jsxs)(r.td,{children:["\u30aa\u30d7\u30b7\u30e7\u30f3",(0,n.jsx)("br",{}),"\u30c7\u30d5\u30a9\u30eb\u30c8: STANDARD_D2_V3",(0,n.jsx)("br",{}),"\u30b3\u30b9\u30c8\u3092\u7bc0\u7d04\u3059\u308b\u306b\u306f\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9 \u30bf\u30a4\u30d7\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9 \u30bf\u30a4\u30d7\u306f\u30012 \u3064\u306e vCPU \u3068 8.0 GiB \u306e\u30e1\u30e2\u30ea\u3092\u5099\u3048\u305f\u6a19\u6e96\u306e Dv3 \u30b7\u30ea\u30fc\u30ba\u3067\u3059\u3002"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Network"}),(0,n.jsx)(r.td,{children:"AI Unlimited \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u540d\u524d\u3002"}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)("br",{}),"\u30aa\u30d7\u30b7\u30e7\u30f3",(0,n.jsx)("br",{}),"\u30c7\u30d5\u30a9\u30eb\u30c8: NA"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Subnet"}),(0,n.jsx)(r.td,{children:"AI Unlimited \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u30b5\u30d6\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3002"}),(0,n.jsxs)(r.td,{children:["\u5fc5\u9808",(0,n.jsx)("br",{}),"\u30c7\u30d5\u30a9\u30eb\u30c8: NA",(0,n.jsx)("br",{}),"\u30b5\u30d6\u30cd\u30c3\u30c8\u306f\u3001\u9078\u629e\u3057\u305f\u53ef\u7528\u6027\u30be\u30fc\u30f3\u306b\u5b58\u5728\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Security Group"}),(0,n.jsx)(r.td,{children:"\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3078\u306e\u53d7\u4fe1\u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u3068\u9001\u4fe1\u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u3092\u5236\u5fa1\u3059\u308b\u4eee\u60f3\u30d5\u30a1\u30a4\u30a2\u30a6\u30a9\u30fc\u30eb\u3002"}),(0,n.jsxs)(r.td,{children:["\u30aa\u30d7\u30b7\u30e7\u30f3",(0,n.jsx)("br",{}),"\u30c7\u30d5\u30a9\u30eb\u30c8: AiUnlimitedSecurityGroup",(0,n.jsx)("br",{}),"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3 \u30b0\u30eb\u30fc\u30d7\u306f\u3001\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3078\u306e\u30a2\u30af\u30bb\u30b9\u3092\u8a31\u53ef\u3059\u308b\u30d7\u30ed\u30c8\u30b3\u30eb\u3001\u30dd\u30fc\u30c8\u3001IP \u30a2\u30c9\u30ec\u30b9\u307e\u305f\u306f CIDR \u30d6\u30ed\u30c3\u30af\u3092\u6307\u5b9a\u3059\u308b\u4e00\u9023\u306e\u30eb\u30fc\u30eb\u3068\u3057\u3066\u5b9f\u88c5\u3055\u308c\u307e\u3059\u3002\u30ab\u30b9\u30bf\u30e0 \u30bb\u30ad\u30e5\u30ea\u30c6\u30a3 \u30b0\u30eb\u30fc\u30d7 \u30a4\u30f3\u30b0\u30ec\u30b9 \u30eb\u30fc\u30eb\u3092\u4f5c\u6210\u3057\u306a\u3044\u9650\u308a\u3001\u53d7\u4fe1\u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u3092\u8a31\u53ef\u3059\u308b\u306b\u306f\u3001\u30a2\u30af\u30bb\u30b9 CIDR \u307e\u305f\u306f\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3 \u30b0\u30eb\u30fc\u30d7\u306e\u5c11\u306a\u304f\u3068\u3082 1 \u3064\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Access CIDR"}),(0,n.jsx)(r.td,{children:"\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3078\u306e\u30a2\u30af\u30bb\u30b9\u304c\u8a31\u53ef\u3055\u308c\u308b CIDR IP \u30a2\u30c9\u30ec\u30b9\u306e\u7bc4\u56f2\u3002"}),(0,n.jsxs)(r.td,{children:["\u30aa\u30d7\u30b7\u30e7\u30f3",(0,n.jsx)("br",{}),"\u30c7\u30d5\u30a9\u30eb\u30c8: 0.0.0.0/0",(0,n.jsx)("br",{}),"\u3053\u306e\u5024\u306f\u4fe1\u983c\u3067\u304d\u308b IP \u7bc4\u56f2\u306b\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002\u30ab\u30b9\u30bf\u30e0 \u30bb\u30ad\u30e5\u30ea\u30c6\u30a3 \u30b0\u30eb\u30fc\u30d7 \u30a4\u30f3\u30b0\u30ec\u30b9 \u30eb\u30fc\u30eb\u3092\u4f5c\u6210\u3057\u306a\u3044\u9650\u308a\u3001\u53d7\u4fe1\u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u3092\u8a31\u53ef\u3059\u308b\u306b\u306f\u3001\u30a2\u30af\u30bb\u30b9 CIDR \u307e\u305f\u306f\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3 \u30b0\u30eb\u30fc\u30d7\u306e\u5c11\u306a\u304f\u3068\u3082 1 \u3064\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"AI Unlimited HTTP Port"}),(0,n.jsx)(r.td,{children:"AI Unlimited UI \u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u305f\u3081\u306e\u30dd\u30fc\u30c8\u3002"}),(0,n.jsxs)(r.td,{children:["\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u5fc5\u9808",(0,n.jsx)("br",{}),"\u30c7\u30d5\u30a9\u30eb\u30c8: 3000"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"AI Unlimited GRPC Port"}),(0,n.jsx)(r.td,{children:"AI Unlimited API \u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u305f\u3081\u306e\u30dd\u30fc\u30c8\u3002"}),(0,n.jsxs)(r.td,{children:["\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u5fc5\u9808",(0,n.jsx)("br",{}),"\u30c7\u30d5\u30a9\u30eb\u30c8: 3282"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Source App Sec Groups"}),(0,n.jsx)(r.td,{children:"AI Unlimited \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306b\u63a5\u7d9a\u3059\u308b\u6a29\u9650\u3092\u6301\u3064\u30bd\u30fc\u30b9 \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3 \u30bb\u30ad\u30e5\u30ea\u30c6\u30a3 \u30b0\u30eb\u30fc\u30d7 (ASG)\u3002ASG \u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u7279\u5b9a\u306e\u30cd\u30c3\u30c8\u30ef\u30fc\u30af \u30bb\u30ad\u30e5\u30ea\u30c6\u30a3 \u30dd\u30ea\u30b7\u30fc\u306b\u57fa\u3065\u3044\u3066\u4eee\u60f3\u30de\u30b7\u30f3 (VM) \u3092\u6574\u7406\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u3089\u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3 \u30dd\u30ea\u30b7\u30fc\u306b\u3088\u3063\u3066\u3001\u4eee\u60f3\u30de\u30b7\u30f3\u3067\u8a31\u53ef\u3055\u308c\u308b\u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u3068\u8a31\u53ef\u3055\u308c\u306a\u3044\u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u304c\u6c7a\u307e\u308a\u307e\u3059\u3002"}),(0,n.jsxs)(r.td,{children:["\u30aa\u30d7\u30b7\u30e7\u30f3",(0,n.jsx)("br",{}),"\u30c7\u30d5\u30a9\u30eb\u30c8: NA",(0,n.jsx)("br",{})," \u30cd\u30c3\u30c8\u30ef\u30fc\u30af \u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3068\u540c\u3058\u30ea\u30fc\u30b8\u30e7\u30f3\u5185\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3 \u30bb\u30ad\u30e5\u30ea\u30c6\u30a3 \u30b0\u30eb\u30fc\u30d7\u3092\u9078\u629e\u3057\u307e\u3059\u3002"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Destination App Sec Groups"}),(0,n.jsx)(r.td,{children:"AI Unlimited \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306b\u63a5\u7d9a\u3059\u308b\u6a29\u9650\u3092\u6301\u3064\u5b9b\u5148\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3 \u30bb\u30ad\u30e5\u30ea\u30c6\u30a3 \u30b0\u30eb\u30fc\u30d7\u3002"}),(0,n.jsxs)(r.td,{children:["\u30aa\u30d7\u30b7\u30e7\u30f3",(0,n.jsx)("br",{}),"\u30c7\u30d5\u30a9\u30eb\u30c8: NA",(0,n.jsx)("br",{}),"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af \u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3068\u540c\u3058\u30ea\u30fc\u30b8\u30e7\u30f3\u5185\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3 \u30bb\u30ad\u30e5\u30ea\u30c6\u30a3 \u30b0\u30eb\u30fc\u30d7\u3092\u9078\u629e\u3057\u307e\u3059\u3002"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Role Definition ID"}),(0,n.jsx)(r.td,{children:"AI Unlimited \u3067\u4f7f\u7528\u3059\u308b\u30ed\u30fc\u30eb\u306e ID\u3002"}),(0,n.jsxs)(r.td,{children:["\u5fc5\u9808",(0,n.jsx)("br",{}),"\u30c7\u30d5\u30a9\u30eb\u30c8: NA",(0,n.jsx)("br",{}),"Azure CLI \u30b3\u30de\u30f3\u30c9 Get-AzRoleDefinition \u3092\u4f7f\u7528\u3057\u3066\u3001\u30ed\u30fc\u30eb\u5b9a\u7fa9 ID \u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Allow Public SSH"}),(0,n.jsx)(r.td,{children:"Azure \u5185\u306e VM \u306b\u63a5\u7d9a\u3059\u308b\u305f\u3081\u306b\u30bb\u30ad\u30e5\u30a2 \u30b7\u30a7\u30eb (SSH) \u30ad\u30fc\u3092\u4f7f\u7528\u3067\u304d\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002"}),(0,n.jsxs)(r.td,{children:["\u30aa\u30d7\u30b7\u30e7\u30f3",(0,n.jsx)("br",{}),"\u30c7\u30d5\u30a9\u30eb\u30c8: true"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Use Key Vault"}),(0,n.jsx)(r.td,{children:"\u30c7\u30d7\u30ed\u30a4\u4e2d\u306b\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u3067\u4fdd\u8b77\u3055\u308c\u305f\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u53d6\u5f97\u3059\u308b\u305f\u3081\u306b Key Vault \u3092\u4f7f\u7528\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002"}),(0,n.jsxs)(r.td,{children:["\u30aa\u30d7\u30b7\u30e7\u30f3",(0,n.jsx)("br",{}),"\u30c7\u30d5\u30a9\u30eb\u30c8: New"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Use Persistent Volume"}),(0,n.jsxs)(r.td,{children:["\u30c7\u30fc\u30bf\u306e\u4fdd\u5b58\u306b\u65b0\u3057\u3044\u6c38\u7d9a\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u4f7f\u7528\u3059\u308b\u304b\u3001\u65e2\u5b58\u306e\u6c38\u7d9a\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u4f7f\u7528\u3059\u308b\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\u30d1\u30e9\u30e1\u30fc\u30bf \u30bb\u30af\u30b7\u30e7\u30f3\u306e\u4e0b\u306b\u3042\u308b\u300c",(0,n.jsx)(r.em,{children:"\u8a73\u7d30: \u6c38\u7d9a\u30dc\u30ea\u30e5\u30fc\u30e0\u306e\u4f7f\u7528"}),"\u300d\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),(0,n.jsxs)(r.td,{children:["\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u30aa\u30d7\u30b7\u30e7\u30f3",(0,n.jsx)("br",{}),"\u30c7\u30d5\u30a9\u30eb\u30c8: New ",(0,n.jsx)("br",{}),"\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u30aa\u30d7\u30b7\u30e7\u30f3: \u4f7f\u7528\u30b1\u30fc\u30b9\u306b\u5fdc\u3058\u3066\u3001New\u307e\u305f\u306fExisting\u3002"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Persistent Volume Size"}),(0,n.jsx)(r.td,{children:"\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306b\u63a5\u7d9a\u3067\u304d\u308b\u6c38\u7d9a\u30dc\u30ea\u30e5\u30fc\u30e0\u306e\u30b5\u30a4\u30ba\uff08GB \u5358\u4f4d\uff09\u3002"}),(0,n.jsxs)(r.td,{children:["\u30aa\u30d7\u30b7\u30e7\u30f3",(0,n.jsx)("br",{}),"\u30c7\u30d5\u30a9\u30eb\u30c8: 100"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Existing Persistent Volume"}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)("br",{}),"\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306b\u63a5\u7d9a\u3067\u304d\u308b\u65e2\u5b58\u306e\u6c38\u7d9a\u30dc\u30ea\u30e5\u30fc\u30e0\u306e ID\u3002"]}),(0,n.jsxs)(r.td,{children:["UsePersistentVolume \u304c Existing \u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306f\u5fc5\u9808\u3067\u3059\u3002",(0,n.jsx)("br",{}),"\u30c7\u30d5\u30a9\u30eb\u30c8: None",(0,n.jsx)("br",{}),"\u6c38\u7d9a\u30dc\u30ea\u30e5\u30fc\u30e0\u306f\u3001AI Unlimited \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3068\u540c\u3058\u30a2\u30d9\u30a4\u30e9\u30d3\u30ea\u30c6\u30a3\u30fc\u30be\u30fc\u30f3\u306b\u5b58\u5728\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"AI Unlimited Version"}),(0,n.jsx)(r.td,{children:"\u30c7\u30d7\u30ed\u30a4\u3059\u308b AI Unlimited \u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3002"}),(0,n.jsxs)(r.td,{children:["\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u5fc5\u9808",(0,n.jsx)("br",{}),"\u30c7\u30d5\u30a9\u30eb\u30c8: latest",(0,n.jsx)("br",{}),"\u5024\u306f\u30b3\u30f3\u30c6\u30ca\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u30bf\u30b0\u3067\u3059\u3002"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Use NLB"}),(0,n.jsx)(r.td,{children:"\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306b\u30cd\u30c3\u30c8\u30ef\u30fc\u30af \u30ed\u30fc\u30c9 \u30d0\u30e9\u30f3\u30b5\u30fc\u3092\u4f7f\u7528\u3057\u3066\u30a2\u30af\u30bb\u30b9\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002"}),(0,n.jsxs)(r.td,{children:["\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u5fc5\u9808",(0,n.jsx)("br",{}),"\u30c7\u30d5\u30a9\u30eb\u30c8: false"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Tags"}),(0,n.jsx)(r.td,{children:"\u7c21\u5358\u306b\u8b58\u5225\u3067\u304d\u308b\u3088\u3046\u306b\u30ea\u30bd\u30fc\u30b9\u306b\u5272\u308a\u5f53\u3066\u3089\u308c\u308b\u30ad\u30fc\u3068\u5024\u306e\u30da\u30a2\u3002"}),(0,n.jsxs)(r.td,{children:["\u30aa\u30d7\u30b7\u30e7\u30f3",(0,n.jsx)("br",{}),"\u30c7\u30d5\u30a9\u30eb\u30c8",":NA"]})]})]})]})]}),"\n",(0,n.jsxs)(i,{children:[(0,n.jsx)("summary",{children:"\u8a73\u7d30: \u6c38\u7d9a\u30dc\u30ea\u30e5\u30fc\u30e0\u306e\u4f7f\u7528"}),(0,n.jsx)(r.p,{children:"\u30de\u30cd\u30fc\u30b8\u30e3 \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306f\u30b3\u30f3\u30c6\u30ca\u5185\u3067\u5b9f\u884c\u3055\u308c\u3001\u305d\u306e\u69cb\u6210\u30c7\u30fc\u30bf\u3092\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u30eb\u30fc\u30c8 \u30dc\u30ea\u30e5\u30fc\u30e0\u306e\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306b\u4fdd\u5b58\u3057\u307e\u3059\u3002\u3053\u306e\u30c7\u30fc\u30bf\u306f\u3001\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u30b7\u30e3\u30c3\u30c8\u30c0\u30a6\u30f3\u3001\u518d\u8d77\u52d5\u3001\u307e\u305f\u306f\u30b9\u30ca\u30c3\u30d7\u30b7\u30e7\u30c3\u30c8\u3092\u4f5c\u6210\u3057\u3066\u518d\u8d77\u52d5\u3057\u3066\u3082\u4fdd\u6301\u3055\u308c\u307e\u3059\u3002"}),(0,n.jsx)(r.p,{children:"\u6c38\u7d9a\u30dc\u30ea\u30e5\u30fc\u30e0\u306b\u306f\u3001\u30b3\u30f3\u30c6\u30ca\u5316\u3055\u308c\u305f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30c7\u30fc\u30bf\u304c\u3001\u305d\u308c\u304c\u5b9f\u884c\u3055\u308c\u308b\u30b3\u30f3\u30c6\u30ca\u3001\u30dd\u30c3\u30c9\u3001\u307e\u305f\u306f\u30ce\u30fc\u30c9\u306e\u5b58\u7d9a\u671f\u9593\u3092\u8d85\u3048\u3066\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002"}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"\u6c38\u7d9a\u30dc\u30ea\u30e5\u30fc\u30e0\u304c\u306a\u3044\u5834\u5408"})}),(0,n.jsx)(r.p,{children:"\u30b3\u30f3\u30c6\u30ca\u3001\u30dd\u30c3\u30c9\u3001\u307e\u305f\u306f\u30ce\u30fc\u30c9\u304c\u30af\u30e9\u30c3\u30b7\u30e5\u307e\u305f\u306f\u7d42\u4e86\u3059\u308b\u3068\u3001\u30de\u30cd\u30fc\u30b8\u30e3\u306e\u69cb\u6210\u30c7\u30fc\u30bf\u304c\u5931\u308f\u308c\u307e\u3059\u3002\u65b0\u3057\u3044\u30de\u30cd\u30fc\u30b8\u30e3 \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304c\u3001\u5931\u308f\u308c\u305f\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3068\u540c\u3058\u72b6\u614b\u306b\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002"}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"\u6c38\u7d9a\u30dc\u30ea\u30e5\u30fc\u30e0\u304c\u3042\u308b\u5834\u5408"})}),(0,n.jsx)(r.p,{children:"\u30b3\u30f3\u30c6\u30ca\u3001\u30dd\u30c3\u30c9\u3001\u307e\u305f\u306f\u30ce\u30fc\u30c9\u304c\u30af\u30e9\u30c3\u30b7\u30e5\u307e\u305f\u306f\u7d42\u4e86\u3057\u3001\u30de\u30cd\u30fc\u30b8\u30e3\u306e\u69cb\u6210\u30c7\u30fc\u30bf\u304c\u6c38\u7d9a\u30dc\u30ea\u30e5\u30fc\u30e0\u306b\u4fdd\u5b58\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u5931\u308f\u308c\u305f\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3068\u540c\u3058\u69cb\u6210\u306e\u65b0\u3057\u3044\u30de\u30cd\u30fc\u30b8\u30e3 \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u30c7\u30d7\u30ed\u30a4\u3067\u304d\u307e\u3059\u3002"}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"\u4f8b"})}),(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["\u30de\u30cd\u30fc\u30b8\u30e3\u3092\u30c7\u30d7\u30ed\u30a4\u3057\u3001",(0,n.jsx)(r.code,{children:"Use Persistent Volume"})," \u30d1\u30e9\u30e1\u30fc\u30bf\u3092 ",(0,n.jsx)(r.strong,{children:"New"})," \u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002"]}),"\n",(0,n.jsxs)(r.li,{children:["\u30b9\u30bf\u30c3\u30af\u3092\u4f5c\u6210\u3057\u305f\u3089\u3001",(0,n.jsx)(r.strong,{children:"Outputs"})," \u30da\u30fc\u30b8\u3067 ",(0,n.jsx)(r.code,{children:"volume-id"})," \u3092\u66f8\u304d\u7559\u3081\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(r.li,{children:"AI Unlimited \u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsxs)(r.li,{children:["\u30de\u30cd\u30fc\u30b8\u30e3\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u304c\u5931\u308f\u308c\u305f\u5834\u5408\u306f\u3001\u30de\u30cd\u30fc\u30b8\u30e3\u3092\u518d\u5ea6\u30c7\u30d7\u30ed\u30a4\u3057\u3001\u6b21\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u542b\u3081\u307e\u3059:","\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"Use Persistent Volume"}),": ",(0,n.jsx)(r.strong,{children:"New"})]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"Existing Persistent Volume"}),": \u624b\u9806 2 \u3067\u66f8\u304d\u7559\u3081\u305f\u5024"]}),"\n"]}),"\n"]}),"\n"]}),(0,n.jsx)(r.p,{children:"\u65b0\u3057\u3044\u30de\u30cd\u30fc\u30b8\u30e3 \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306f\u3001\u5931\u308f\u308c\u305f\u3082\u306e\u3068\u540c\u3058\u69cb\u6210\u3092\u6301\u3061\u307e\u3059\u3002"})]}),"\n",(0,n.jsx)(r.h2,{id:"\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u4f5c\u6210\u3059\u308b",children:"\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u4f5c\u6210\u3059\u308b"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"\u30ec\u30d3\u30e5\u30fc + \u4f5c\u6210"}),"\u3092\u9078\u629e\u3057\u307e\u3059\u3002"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"\u4f5c\u6210"}),"\u3092\u9078\u629e\u3057\u307e\u3059\u3002",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(r.strong,{children:"\u901a\u77e5"})," \u30da\u30fc\u30b8\u3067\u9032\u884c\u72b6\u6cc1\u3092\u76e3\u8996\u3067\u304d\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["\u30c7\u30d7\u30ed\u30a4\u304c\u5b8c\u4e86\u3059\u308b\u3068\u3001 ",(0,n.jsx)(r.strong,{children:"\u51fa\u529b"})," \u30da\u30fc\u30b8\u306b\u4f5c\u6210\u3055\u308c\u305f\u30ea\u30bd\u30fc\u30b9\u306b\u5bfe\u3057\u3066\u751f\u6210\u3055\u308c\u305f\u5024\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(r.p,{children:"\u30de\u30cd\u30fc\u30b8\u30e3\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3066 AI Unlimited \u3092\u8a2d\u5b9a\u3059\u308b\u306b\u306f\u3001URL \u304c\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,n.jsx)(r.h2,{id:"\u6b21\u306e\u30b9\u30c6\u30c3\u30d7",children:"\u6b21\u306e\u30b9\u30c6\u30c3\u30d7"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/pr-preview/pr-99/ja/ai-unlimited/resources/create-oauth-app",children:"OAuth\u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3059\u308b"})," AI Unlimited \u3068 Git \u30d7\u30ed\u30d0\u30a4\u30c0 \u30a2\u30ab\u30a6\u30f3\u30c8\u9593\u306e\u8a8d\u8a3c\u3092\u8a31\u53ef\u3057\u307e\u3059\u3002"]})]})}function a(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,r,i)=>{i.d(r,{R:()=>t,x:()=>l});var n=i(96540);const s={},d=n.createContext(s);function t(e){const r=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),n.createElement(d.Provider,{value:r},e.children)}}}]);