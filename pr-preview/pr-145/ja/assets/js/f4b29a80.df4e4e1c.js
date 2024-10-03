"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[1523],{85271:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var t=n(74848),s=n(28453);const r={sidebar_position:4,author:"Daniel Herrera",email:"daniel.herrera2@teradata.com",page_last_update:"2024 \u5e74 1 \u6708 16 \u65e5",description:"SageMaker \u3067 VantageCloud Lake \u306e Teradata Jupyter Notebook \u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","business intelligence","enterprise analytics","jupyter","teradatasql","ipython-sql","cloud computing","machine learning","sagemaker","vantagecloud","vantagecloud lake","lake"]},i="Amazon SageMaker \u3067 VantageCloud Lake \u306e Teradata Jupyter Notebook \u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b\u65b9\u6cd5",d={id:"vantagecloud-lake/vantagecloud-lake-demo-jupyter-sagemaker",title:"Amazon SageMaker \u3067 VantageCloud Lake \u306e Teradata Jupyter Notebook \u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b\u65b9\u6cd5",description:"SageMaker \u3067 VantageCloud Lake \u306e Teradata Jupyter Notebook \u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b",source:"@site/i18n/ja/docusaurus-plugin-content-docs-quickstarts/current/vantagecloud-lake/vantagecloud-lake-demo-jupyter-sagemaker.md",sourceDirName:"vantagecloud-lake",slug:"/vantagecloud-lake/vantagecloud-lake-demo-jupyter-sagemaker",permalink:"/pr-preview/pr-145/ja/quickstarts/vantagecloud-lake/vantagecloud-lake-demo-jupyter-sagemaker",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,author:"Daniel Herrera",email:"daniel.herrera2@teradata.com",page_last_update:"2024 \u5e74 1 \u6708 16 \u65e5",description:"SageMaker \u3067 VantageCloud Lake \u306e Teradata Jupyter Notebook \u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","business intelligence","enterprise analytics","jupyter","teradatasql","ipython-sql","cloud computing","machine learning","sagemaker","vantagecloud","vantagecloud lake","lake"]},sidebar:"tutorialSidebar",previous:{title:"Visual Studio Code \u3067 VantageCloud Lake \u306e Teradata Jupyter Notebook \u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b\u65b9\u6cd5",permalink:"/pr-preview/pr-145/ja/quickstarts/vantagecloud-lake/vantagecloud-lake-demos-visual-studio-code"},next:{title:"Google Cloud Vertex AI \u3067 VantageCloud Lake \u306e Teradata Jupyter Notebook \u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b\u65b9\u6cd5",permalink:"/pr-preview/pr-145/ja/quickstarts/vantagecloud-lake/vantagecloud-lake-demo-jupyter-google-cloud-vertex-ai"}},l={},o=[{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"AWS\u74b0\u5883\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",id:"aws\u74b0\u5883\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",level:2},{value:"Teradata modules for Jupyter \u3092 S3 \u30d0\u30b1\u30c3\u30c8\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b",id:"teradata-modules-for-jupyter-\u3092-s3-\u30d0\u30b1\u30c3\u30c8\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b",level:3},{value:"Jupyter \u30ce\u30fc\u30c8\u30d6\u30c3\u30af \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e IAM \u30ed\u30fc\u30eb\u3092\u4f5c\u6210\u3059\u308b",id:"jupyter-\u30ce\u30fc\u30c8\u30d6\u30c3\u30af-\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e-iam-\u30ed\u30fc\u30eb\u3092\u4f5c\u6210\u3059\u308b",level:3},{value:"Jupyter Notebooks \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u69cb\u6210\u3092\u4f5c\u6210\u3059\u308b",id:"jupyter-notebooks-\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u69cb\u6210\u3092\u4f5c\u6210\u3059\u308b",level:3},{value:"Jupyter \u30ce\u30fc\u30c8\u30d6\u30c3\u30af \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u4f5c\u6210\u3059\u308b",id:"jupyter-\u30ce\u30fc\u30c8\u30d6\u30c3\u30af-\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u4f5c\u6210\u3059\u308b",level:3},{value:"Jupyter \u30ce\u30fc\u30c8\u30d6\u30c3\u30af \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e IP CIDR \u3092\u691c\u7d22\u3059\u308b",id:"jupyter-\u30ce\u30fc\u30c8\u30d6\u30c3\u30af-\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e-ip-cidr-\u3092\u691c\u7d22\u3059\u308b",level:2},{value:"VantageCloud Lake\u3092\u69cb\u6210\u3059\u308b",id:"vantagecloud-lake\u3092\u69cb\u6210\u3059\u308b",level:2},{value:"VantageCloud Lake \u306e Jupyter Notebook \u30c7\u30e2",id:"vantagecloud-lake-\u306e-jupyter-notebook-\u30c7\u30e2",level:2},{value:"\u69cb\u6210",id:"\u69cb\u6210",level:3},{value:"\u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b",id:"\u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b",level:2},{value:"\u307e\u3068\u3081",id:"\u307e\u3068\u3081",level:2},{value:"\u3055\u3089\u306b\u8a73\u3057\u304f",id:"\u3055\u3089\u306b\u8a73\u3057\u304f",level:2}];function c(e){const a={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"amazon-sagemaker-\u3067-vantagecloud-lake-\u306e-teradata-jupyter-notebook-\u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b\u65b9\u6cd5",children:"Amazon SageMaker \u3067 VantageCloud Lake \u306e Teradata Jupyter Notebook \u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b\u65b9\u6cd5"}),"\n",(0,t.jsx)(a.h2,{id:"\u6982\u8981",children:"\u6982\u8981"}),"\n",(0,t.jsxs)(a.p,{children:["\u3053\u306e\u30af\u30a4\u30c3\u30af\u30b9\u30bf\u30fc\u30c8\u3067\u306f\u3001AWS \u306e AI/ML \u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3067\u3042\u308b Amazon SageMaker \u3067 ",(0,t.jsx)(a.a,{href:"https://github.com/Teradata/lake-demos",children:"VantageCloud Lake \u306e Jupyter Notebook \u30c7\u30e2"}),"\u3092\u5b9f\u884c\u3059\u308b\u30d7\u30ed\u30bb\u30b9\u306b\u3064\u3044\u3066\u8a73\u3057\u304f\u8aac\u660e\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(a.h2,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["Teradata modules for Jupyter (\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u306f",(0,t.jsx)(a.a,{href:"https://downloads.teradata.com/download/tools/vantage-modules-for-jupyter",children:"\u3053\u3061\u3089"}),"  \u3001\u767b\u9332\u304c\u5fc5\u8981\u3067\u3059)"]}),"\n",(0,t.jsx)(a.li,{children:"S3 \u304a\u3088\u3073 SageMaker \u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b AWS \u30a2\u30ab\u30a6\u30f3\u30c8"}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"/pr-preview/pr-145/ja/quickstarts/vantagecloud-lake/getting-started-with-vantagecloud-lake",children:"VantageCloud Lake\u74b0\u5883\u3078\u306e\u30a2\u30af\u30bb\u30b9"})}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"aws\u74b0\u5883\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",children:"AWS\u74b0\u5883\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"}),"\n",(0,t.jsx)(a.p,{children:"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001\u4ee5\u4e0b\u306e\u5404\u624b\u9806\u306b\u3064\u3044\u3066\u8a73\u3057\u304f\u8aac\u660e\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Teradata modules for Jupyter\u3092S3\u30d0\u30b1\u30c3\u30c8\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b"}),"\n",(0,t.jsx)(a.li,{children:"Jupyter \u30ce\u30fc\u30c8\u30d6\u30c3\u30af \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e IAM \u30ed\u30fc\u30eb\u3092\u4f5c\u6210\u3059\u308b"}),"\n",(0,t.jsx)(a.li,{children:"Jupyter \u30ce\u30fc\u30c8\u30d6\u30c3\u30af \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u69cb\u6210\u3092\u4f5c\u6210\u3059\u308b"}),"\n",(0,t.jsx)(a.li,{children:"Jupyter \u30ce\u30fc\u30c8\u30d6\u30c3\u30af \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u4f5c\u6210\u3059\u308b"}),"\n",(0,t.jsx)(a.li,{children:"Jupyter \u30ce\u30fc\u30c8\u30d6\u30c3\u30af \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e IP CIDR \u3092\u691c\u7d22\u3059\u308b"}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"teradata-modules-for-jupyter-\u3092-s3-\u30d0\u30b1\u30c3\u30c8\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b",children:"Teradata modules for Jupyter \u3092 S3 \u30d0\u30b1\u30c3\u30c8\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"AWS S3 \u3067\u30d0\u30b1\u30c3\u30c8\u3092\u4f5c\u6210\u3057\u3001\u5272\u308a\u5f53\u3066\u3089\u308c\u305f\u540d\u524d\u3092\u8a18\u9332\u3059\u308b"}),"\n",(0,t.jsx)(a.li,{children:"\u3053\u306e\u30d0\u30b1\u30c3\u30c8\u306b\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u9069\u5207\u3067\u3059"}),"\n",(0,t.jsxs)(a.li,{children:["\u4f5c\u6210\u3057\u305f\u30d0\u30b1\u30c3\u30c8\u306b Jupyter \u7528\u306e Teradata \u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\n",(0,t.jsx)(a.img,{alt:"S3\u30d0\u30b1\u30c3\u30c8\u306b\u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u30ed\u30fc\u30c9\u3059\u308b",src:n(49646).A+"",width:"1497",height:"477"})]}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"jupyter-\u30ce\u30fc\u30c8\u30d6\u30c3\u30af-\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e-iam-\u30ed\u30fc\u30eb\u3092\u4f5c\u6210\u3059\u308b",children:"Jupyter \u30ce\u30fc\u30c8\u30d6\u30c3\u30af \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e IAM \u30ed\u30fc\u30eb\u3092\u4f5c\u6210\u3059\u308b"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["SageMaker \u3067\u30ed\u30fc\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u306b\u79fb\u52d5\u3059\u308b\n",(0,t.jsx)(a.img,{alt:"\u65b0\u3057\u3044\u30ed\u30fc\u30eb\u3092\u4f5c\u6210\u3059\u308b",src:n(77351).A+"",width:"1077",height:"665"})]}),"\n",(0,t.jsx)(a.li,{children:"\u65b0\u3057\u3044\u30ed\u30fc\u30eb\u306e\u4f5c\u6210\u3059\u308b(\u307e\u3060\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408)"}),"\n",(0,t.jsxs)(a.li,{children:["\u3053\u306e\u30ac\u30a4\u30c9\u306e\u76ee\u7684\u4e0a\u3001\u4f5c\u6210\u3055\u308c\u305f\u30ed\u30fc\u30eb\u306b\u306f\u30c7\u30fc\u30bf \u30b5\u30a4\u30a8\u30f3\u30c6\u30a3\u30b9\u30c8\u306e\u30da\u30eb\u30bd\u30ca\u306b\u5272\u308a\u5f53\u3066\u308b\n",(0,t.jsx)(a.img,{alt:"\u30ed\u30fc\u30eb\u540d\u3068\u30da\u30eb\u30bd\u30ca",src:n(37118).A+"",width:"1159",height:"621"})]}),"\n",(0,t.jsx)(a.li,{children:"\u8a2d\u5b9a\u306b\u95a2\u3057\u3066\u306f\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u307e\u307e\u306b\u3059\u308b\u306e\u304c\u9069\u5207\u3067\u3059"}),"\n",(0,t.jsxs)(a.li,{children:["\u5bfe\u5fdc\u3059\u308b\u753b\u9762\u3067\u3001Teradata Jupyter \u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u305f\u30d0\u30b1\u30c3\u30c8\u3092\u5b9a\u7fa9\u3059\u308b\n",(0,t.jsx)(a.img,{alt:"S3 \u30d0\u30b1\u30c3\u30c8",src:n(4789).A+"",width:"880",height:"368"})]}),"\n",(0,t.jsxs)(a.li,{children:["\u6b21\u306e\u8a2d\u5b9a\u3067\u306f\u3001S3 \u30d0\u30b1\u30c3\u30c8\u3078\u306e\u30a2\u30af\u30bb\u30b9\u306b\u5bfe\u5fdc\u3059\u308b\u30dd\u30ea\u30b7\u30fc\u3092\u8ffd\u52a0\u3059\u308b",(0,t.jsx)(a.br,{}),"\n",(0,t.jsx)(a.img,{alt:"S3 \u30d0\u30b1\u30c3\u30c8\u306e\u6a29\u9650",src:n(90828).A+"",width:"1001",height:"603"})]}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"jupyter-notebooks-\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u69cb\u6210\u3092\u4f5c\u6210\u3059\u308b",children:"Jupyter Notebooks \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u69cb\u6210\u3092\u4f5c\u6210\u3059\u308b"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["SageMaker \u3067\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u69cb\u6210\u306b\u79fb\u52d5\u3057\u3001\u4f5c\u6210\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\n",(0,t.jsx)(a.img,{alt:"\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u69cb\u6210\u3092\u4f5c\u6210\u3059\u308b",src:n(20096).A+"",width:"1834",height:"501"})]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["\u6b21\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f7f\u7528\u3057\u3066\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u69cb\u6210\u3092\u5b9a\u7fa9\u3059\u308b\n* Windows \u74b0\u5883\u3067\u4f5c\u696d\u3059\u308b\u5834\u5408\u306f\u3001\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u69cb\u6210\u30a8\u30c7\u30a3\u30bf\u30fc\u306b 1 \u884c\u305a\u3064\u30b3\u30d4\u30fc\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002\u30b3\u30d4\u30fc\u306e\u554f\u984c\u3092\u56de\u907f\u3059\u308b\u306b\u306f\u3001\u30a8\u30c7\u30a3\u30bf\u30fc\u3067\u5404\u884c\u306e\u5f8c\u306b\u300cEnter\u300d\u30ad\u30fc\u3092\u76f4\u63a5\u62bc\u3057\u307e\u3059\u3002\u3053\u306e\u65b9\u6cd5\u306f\u3001Windows \u3068 Linux \u306e\u30a8\u30f3\u30b3\u30fc\u30c9\u306e\u9055\u3044\u306b\u3088\u3063\u3066\u767a\u751f\u3059\u308b\u53ef\u80fd\u6027\u306e\u3042\u308b\u30ad\u30e3\u30ea\u30c3\u30b8 \u30ea\u30bf\u30fc\u30f3 \u30a8\u30e9\u30fc\u3092\u9632\u3050\u306e\u306b\u5f79\u7acb\u3061\u307e\u3059\u3002\u3053\u306e\u3088\u3046\u306a\u30a8\u30e9\u30fc\u306f\u3001\u591a\u304f\u306e\u5834\u5408\u3001\u300c/bin/bash^M: bad interpretation\u300d\u3068\u3057\u3066\u8868\u793a\u3055\u308c\u3001\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u5b9f\u884c\u3092\u59a8\u3052\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\n",(0,t.jsx)(a.img,{alt:"\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u69cb\u6210\u3092\u4f5c\u6210\u3059\u308b",src:n(30587).A+"",width:"829",height:"878"})]}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"\u30b9\u30af\u30ea\u30d7\u30c8\u4f5c\u6210\u6642:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",metastring:', id="sagemaker_first_config", role="content-editable emits-gtm-events"',children:'#!/bin/bash\n\nset -e\n\n# This script installs a custom, persistent installation of conda on the Notebook Instance\'s EBS volume, and ensures\n# that these custom environments are available as kernels in Jupyter.\n\n\nsudo -u ec2-user -i <<\'EOF\'\nunset SUDO_UID\n# Install a separate conda installation via Miniconda\nWORKING_DIR=/home/ec2-user/SageMaker/custom-miniconda\nmkdir -p "$WORKING_DIR"\nwget https://repo.anaconda.com/miniconda/Miniconda3-4.6.14-Linux-x86_64.sh -O "$WORKING_DIR/miniconda.sh"\nbash "$WORKING_DIR/miniconda.sh" -b -u -p "$WORKING_DIR/miniconda"\nrm -rf "$WORKING_DIR/miniconda.sh"\n# Create a custom conda environment\nsource "$WORKING_DIR/miniconda/bin/activate"\nKERNEL_NAME="teradatasql"\n\nPYTHON="3.8"\nconda create --yes --name "$KERNEL_NAME" python="$PYTHON"\nconda activate "$KERNEL_NAME"\npip install --quiet ipykernel\n\nEOF\n'})}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u958b\u59cb\u6642 (\u3053\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u3067\u306f\u30d0\u30b1\u30c3\u30c8\u306e\u540d\u524d\u3092\u7f6e\u304d\u63db\u3048\u3001Jupyter \u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u78ba\u8a8d\u3057\u307e\u3059)"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",metastring:', role="content-editable emits-gtm-events"',children:'#!/bin/bash\n\nset -e\n\n# This script installs Teradata Jupyter kernel and extensions.\n\n\nsudo -u ec2-user -i <<\'EOF\'\nunset SUDO_UID\n\nWORKING_DIR=/home/ec2-user/SageMaker/custom-miniconda\n\nsource "$WORKING_DIR/miniconda/bin/activate" teradatasql\n\n# Install teradatasql, teradataml, and pandas in the teradatasql environment\npip install teradataml\npip install pandas\n\n# fetch Teradata Jupyter extensions package from S3 and unzip it\nmkdir -p "$WORKING_DIR/teradata"\naws s3 cp s3://resources-jp-extensions/teradatasqllinux_3.4.1-d05242023.zip "$WORKING_DIR/teradata"\ncd "$WORKING_DIR/teradata"\nunzip -o teradatasqllinux_3.4.1-d05242023\ncp teradatakernel /home/ec2-user/anaconda3/condabin\njupyter kernelspec install --user ./teradatasql\nsource /home/ec2-user/anaconda3/bin/activate JupyterSystemEnv\n\n# Install other Teradata-related packages\npip install teradata_connection_manager_prebuilt-3.4.1.tar.gz\npip install teradata_database_explorer_prebuilt-3.4.1.tar.gz\npip install teradata_preferences_prebuilt-3.4.1.tar.gz\npip install teradata_resultset_renderer_prebuilt-3.4.1.tar.gz\npip install teradata_sqlhighlighter_prebuilt-3.4.1.tar.gz\n\nconda deactivate\nEOF\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"jupyter-\u30ce\u30fc\u30c8\u30d6\u30c3\u30af-\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u4f5c\u6210\u3059\u308b",children:"Jupyter \u30ce\u30fc\u30c8\u30d6\u30c3\u30af \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u4f5c\u6210\u3059\u308b"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"SageMaker \u3067\u3001\u30ce\u30fc\u30c8\u30d6\u30c3\u30af\u3001\u30ce\u30fc\u30c8\u30d6\u30c3\u30af \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306b\u79fb\u52d5\u3057\u3001\u30ce\u30fc\u30c8\u30d6\u30c3\u30af \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u4f5c\u6210\u3059\u308b"}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"\u30ce\u30fc\u30c8\u30d6\u30c3\u30af\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u540d\u524d\u3092\u9078\u629e\u3057\u3001\u30b5\u30a4\u30ba\u3092\u5b9a\u7fa9\u3059\u308b(\u30c7\u30e2\u306e\u5834\u5408\u306f\u3001\u5229\u7528\u53ef\u80fd\u306a\u5c0f\u3055\u3044\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3067\u5341\u5206\u3067\u3059)"}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["\u8ffd\u52a0\u306e\u69cb\u6210\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\u6700\u8fd1\u4f5c\u6210\u3057\u305f\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u69cb\u6210\u3092\u5272\u308a\u5f53\u3066\u307e\u3059\n",(0,t.jsx)(a.img,{alt:"Notebook\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u4f5c\u6210\u3059\u308b",src:n(32634).A+"",width:"814",height:"668"})]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"\u8ffd\u52a0\u306e\u69cb\u6210\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\u6700\u8fd1\u4f5c\u6210\u3057\u305f\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u69cb\u6210\u3092\u5272\u308a\u5f53\u3066\u307e\u3059"}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["\u5148\u307b\u3069\u4f5c\u6210\u3057\u305fIAM\u30ed\u30fc\u30eb\u3092\u30ce\u30fc\u30c8\u30d6\u30c3\u30af\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306b\u5272\u308a\u5f53\u3066\u308b\n",(0,t.jsx)(a.img,{alt:"IAM \u30ed\u30fc\u30eb\u3092\u30ce\u30fc\u30c8\u30d6\u30c3\u30af \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306b\u5272\u308a\u5f53\u3066\u308b",src:n(25137).A+"",width:"823",height:"415"})]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["\u30ce\u30fc\u30c8\u30d6\u30c3\u30af\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u306egithub\u30ea\u30dd\u30b8\u30c8\u30ea\u3068\u3057\u3066\u3001\u6b21\u306e\u30ea\u30f3\u30af ",(0,t.jsx)(a.a,{href:"https://github.com/Teradata/lake-demos",children:"https://github.com/Teradata/lake-demos"})," \u3092\u8cbc\u308a\u4ed8\u3051\u307e\u3059\u3002\n",(0,t.jsx)(a.img,{alt:"\u30ce\u30fc\u30c8\u30d6\u30c3\u30af \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306b\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u5272\u308a\u5f53\u3066\u308b",src:n(66632).A+"",width:"812",height:"496"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"jupyter-\u30ce\u30fc\u30c8\u30d6\u30c3\u30af-\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e-ip-cidr-\u3092\u691c\u7d22\u3059\u308b",children:"Jupyter \u30ce\u30fc\u30c8\u30d6\u30c3\u30af \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e IP CIDR \u3092\u691c\u7d22\u3059\u308b"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u304c\u5b9f\u884c\u3055\u308c\u305f\u3089\u3001\u300cJupyterLab \u3092\u958b\u304f\u300d\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002\n",(0,t.jsx)(a.img,{alt:"JupyterLab\u3092\u958b\u59cb\u3059\u308b",src:n(46247).A+"",width:"1529",height:"308"})]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"Loaded JupyterLab",src:n(21642).A+"",width:"1630",height:"665"})}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"JupyterLab \u3067\u3001Teradata Python \u30ab\u30fc\u30cd\u30eb\u3092\u542b\u3080\u30ce\u30fc\u30c8\u30d6\u30c3\u30af\u3092\u958b\u304d\u3001\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3066\u30ce\u30fc\u30c8\u30d6\u30c3\u30af \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e IP \u30a2\u30c9\u30ec\u30b9\u3092\u898b\u3064\u3051\u307e\u3059\u3002\n** \u63a5\u7d9a\u3092\u8a31\u53ef\u3059\u308b\u305f\u3081\u306b\u3001VantageCloud Lake \u74b0\u5883\u3067\u3053\u306e IP \u3092\u30db\u30ef\u30a4\u30c8\u30ea\u30b9\u30c8\u306b\u767b\u9332\u3057\u307e\u3059\u3002\n** \u3053\u308c\u306f\u3001\u3053\u306e\u30ac\u30a4\u30c9\u3068\u30ce\u30fc\u30c8\u30d6\u30c3\u30af\u306e\u30c7\u30e2\u306e\u76ee\u7684\u306e\u305f\u3081\u3067\u3059\u3002\u5b9f\u7a3c\u50cd\u74b0\u5883\u3067\u306f\u3001VPC\u3001\u30b5\u30d6\u30cd\u30c3\u30c8\u3001\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3 \u30b0\u30eb\u30fc\u30d7\u306e\u69cb\u6210\u3092\u69cb\u6210\u3057\u3001\u30db\u30ef\u30a4\u30c8\u30ea\u30b9\u30c8\u306b\u767b\u9332\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",metastring:', role="content-editable"',children:'import requests\ndef get_public_ip():\n    try:\n        response # requests.get(\'https://api.ipify.org\')\n        return response.text\n    except requests.RequestException as e:\n        return "Error: " + str(e)\nmy_public_ip = get_public_ip()\nprint("My Public IP is:", my_public_ip)\n'})}),"\n",(0,t.jsx)(a.h2,{id:"vantagecloud-lake\u3092\u69cb\u6210\u3059\u308b",children:"VantageCloud Lake\u3092\u69cb\u6210\u3059\u308b"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["VantageCloud Lake\u74b0\u5883\u3067\u3001[\u8a2d\u5b9a]\u306e\u4e0b\u306b\u30ce\u30fc\u30c8\u30d6\u30c3\u30af\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306eIP\u30a2\u30c9\u30ec\u30b9\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002\n",(0,t.jsx)(a.img,{alt:"JupyterLab\u3092\u958b\u59cb\u3059\u308b",src:n(41165).A+"",width:"1423",height:"662"})]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"vantagecloud-lake-\u306e-jupyter-notebook-\u30c7\u30e2",children:"VantageCloud Lake \u306e Jupyter Notebook \u30c7\u30e2"}),"\n",(0,t.jsx)(a.h3,{id:"\u69cb\u6210",children:"\u69cb\u6210"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"https://github.com/Teradata/lake-demos/blob/main/vars.json",children:"vars.json \u30d5\u30a1\u30a4\u30eb"}),"\u306f\u3001VantageCloud Lake \u74b0\u5883\u306e\u69cb\u6210\u306b\u4e00\u81f4\u3059\u308b\u3088\u3046\u306b\u7de8\u96c6\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\n",(0,t.jsx)(a.img,{alt:"JupyterLab\u3092\u958b\u59cb\u3059\u308b",src:n(16946).A+"",width:"922",height:"904"})]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"\u7279\u306b\u6b21\u306e\u5024\u3092\u8ffd\u52a0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059"}),"\n",(0,t.jsxs)(a.table,{children:[(0,t.jsx)(a.thead,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.th,{children:(0,t.jsx)(a.strong,{children:"\u5909\u6570"})}),(0,t.jsx)(a.th,{children:(0,t.jsx)(a.strong,{children:"\u5024"})})]})}),(0,t.jsxs)(a.tbody,{children:[(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:(0,t.jsx)(a.strong,{children:'"host"'})}),(0,t.jsx)(a.td,{children:"VantageCloud Lake \u74b0\u5883\u304b\u3089\u306e Public IP\u5024"})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:(0,t.jsx)(a.strong,{children:'"UES_URI"'})}),(0,t.jsx)(a.td,{children:"VantageCloud Lake \u74b0\u5883\u304b\u3089\u306e Open Analytics"})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:(0,t.jsx)(a.strong,{children:'"dbc"'})}),(0,t.jsx)(a.td,{children:"VantageCloud Lake \u74b0\u5883\u306e\u30de\u30b9\u30bf\u30fc \u30d1\u30b9\u30ef\u30fc\u30c9"})]})]})]}),"\n",(0,t.jsx)(a.admonition,{type:"info",children:(0,t.jsx)(a.p,{children:"vars.json \u30d5\u30a1\u30a4\u30eb\u5185\u306e\u3059\u3079\u3066\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u5fc5\u305a\u5909\u66f4\u3057\u3066\u304f\u3060\u3055\u3044\u3002"})}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"\u30b5\u30f3\u30d7\u30eb vars.json \u3067\u306f\u3001\u3059\u3079\u3066\u306e\u30e6\u30fc\u30b6\u30fc\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u300cpassword\u300d\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u304c\u308f\u304b\u308a\u307e\u3059\u3002\u3053\u308c\u306f\u8aac\u660e\u3092\u76ee\u7684\u3068\u3057\u305f\u3082\u306e\u3067\u3042\u308a\u3001\u3053\u308c\u3089\u306e\u30d1\u30b9\u30ef\u30fc\u30c9 \u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u3059\u3079\u3066\u5f37\u529b\u306a\u30d1\u30b9\u30ef\u30fc\u30c9\u306b\u5909\u66f4\u3057\u3001\u5fc5\u8981\u306b\u5fdc\u3058\u3066\u4fdd\u8b77\u3057\u3001\u6b21\u306e\u624b\u9806\u3092\u5b9f\u884c\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u305d\u306e\u4ed6\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u7ba1\u7406\u306e\u30d9\u30b9\u30c8 \u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"\u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b",children:"\u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b"}),"\n",(0,t.jsxs)(a.p,{children:["\u74b0\u5883\u3092\u8a2d\u5b9a\u3059\u308b\u306b\u306f\u3001",(0,t.jsx)(a.strong,{children:"0_Demo_Environment_Setup.ipynb"}),"\u5185\u306e\u3059\u3079\u3066\u306e\u30bb\u30eb\u3092\u958b\u3044\u3066\u5b9f\u884c\u3057\u307e\u3059\u3002\u7d9a\u3044\u3066",(0,t.jsx)(a.strong,{children:"1_Demo_Setup_Base_Data.ipynb"}),"\u3092\u5b9f\u884c\u3057\u3066\u3001\u30c7\u30e2\u306b\u5fc5\u8981\u306a\u57fa\u672c\u30c7\u30fc\u30bf\u3092\u8aad\u307f\u8fbc\u307f\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(a.p,{children:["\u30c7\u30e2\u30ce\u30fc\u30c8\u30d6\u30c3\u30af\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001GitHub \u306e ",(0,t.jsx)(a.a,{href:"https://github.com/Teradata/lake-demos",children:"Teradata Lake \u30c7\u30e2"})," \u30da\u30fc\u30b8\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsx)(a.h2,{id:"\u307e\u3068\u3081",children:"\u307e\u3068\u3081"}),"\n",(0,t.jsx)(a.p,{children:"\u3053\u306e\u30af\u30a4\u30c3\u30af\u30b9\u30bf\u30fc\u30c8\u3067\u306f\u3001Amazon SageMaker \u3067 VantageCloud Lake \u306e Jupyter \u30ce\u30fc\u30c8\u30d6\u30c3\u30af \u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b\u65b9\u6cd5\u3092\u5b66\u3073\u307e\u3057\u305f\u3002"}),"\n",(0,t.jsx)(a.h2,{id:"\u3055\u3089\u306b\u8a73\u3057\u304f",children:"\u3055\u3089\u306b\u8a73\u3057\u304f"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://docs.teradata.com/r/Teradata-VantageCloud-Lake/Getting-Started-First-Sign-On-by-Organization-Admin",children:"Teradata VantageCloud Lake\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"/pr-preview/pr-145/ja/quickstarts/analyze-data/jupyter",children:"Jupyter Notebook\u304b\u3089Vantage\u3092\u5229\u7528\u3059\u308b\u65b9\u6cd5"})}),"\n"]})]})}function u(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},49646:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/sagemaker-bucket-upload-0359d336e891b293b9e95b9a19716e2a.png"},20096:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/sagemaker-config-1-37bd311b7e0a198aad41540fde744660.PNG"},30587:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/sagemaker-config-2-471ede0955dd9880a74bfaab418ce85a.PNG"},21642:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/sagemaker-create-loaded-env-b4cb2bcd756253ce4ef59ad59ebebffc.PNG"},32634:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/sagemaker-create-notebook-1-90dbf20eaed6514ea59a6cc3711f1d99.PNG"},25137:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/sagemaker-create-notebook-2-8b6338dddc60bddba24a250c0b4727bb.PNG"},66632:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/sagemaker-create-notebook-3-a93f157e2cee35635753ea3c75e0cfb4.PNG"},46247:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/sagemaker-create-notebook-4-4e4787d5e37fe633f5fe277a7fdd9fe1.PNG"},77351:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/sagemaker-iam-role-0-ef40601b931005caef15743caea099f8.PNG"},37118:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/sagemaker-iam-role-1-379375347ef2d38438acbc3c6b74eb9d.PNG"},4789:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/sagemaker-iam-role-2-ed4e47f61a33c1eed8a2e5c7e9dcace8.PNG"},90828:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/sagemaker-iam-role-3-bb9bebcabc889c2b5f3e7b9cd002d484.PNG"},41165:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/sagemaker-lake-9e18bff602d568e81bbb721a3d4e2553.PNG"},16946:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/sagemaker-vars-d771ffabe211a1bd3ebd6ba6ce32468d.PNG"},28453:(e,a,n)=>{n.d(a,{R:()=>i,x:()=>d});var t=n(96540);const s={},r=t.createContext(s);function i(e){const a=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:a},e.children)}}}]);