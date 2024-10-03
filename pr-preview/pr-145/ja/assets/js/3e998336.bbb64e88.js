"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[4645],{94686:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=t(74848),s=t(28453);const r={sidebar_position:5,author:"Janeth Graziani",email:"Janeth.graziani@teradata.com",page_last_update:"2024 \u5e74 1 \u6708 24 \u65e5",description:"Google Vertex AI Workbench \u3067 Jupyter \u30ce\u30fc\u30c8\u30d6\u30c3\u30af\u3092\u4f7f\u7528\u3057\u3066 VantageCloud Lake \u30c7\u30e2\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","business intelligence","enterprise analytics","jupyter","teradatasql","ipython-sql","teradatasqlalchemy","vantagecloud","vantagecloud lake","data analytics","data science","vertex ai","google cloud"]},l="Google Cloud Vertex AI \u3067 VantageCloud Lake \u306e Teradata Jupyter Notebook \u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b\u65b9\u6cd5",o={id:"vantagecloud-lake/vantagecloud-lake-demo-jupyter-google-cloud-vertex-ai",title:"Google Cloud Vertex AI \u3067 VantageCloud Lake \u306e Teradata Jupyter Notebook \u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b\u65b9\u6cd5",description:"Google Vertex AI Workbench \u3067 Jupyter \u30ce\u30fc\u30c8\u30d6\u30c3\u30af\u3092\u4f7f\u7528\u3057\u3066 VantageCloud Lake \u30c7\u30e2\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs-quickstarts/current/vantagecloud-lake/vantagecloud-lake-demo-jupyter-google-cloud-vertex-ai.md",sourceDirName:"vantagecloud-lake",slug:"/vantagecloud-lake/vantagecloud-lake-demo-jupyter-google-cloud-vertex-ai",permalink:"/pr-preview/pr-145/ja/quickstarts/vantagecloud-lake/vantagecloud-lake-demo-jupyter-google-cloud-vertex-ai",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,author:"Janeth Graziani",email:"Janeth.graziani@teradata.com",page_last_update:"2024 \u5e74 1 \u6708 24 \u65e5",description:"Google Vertex AI Workbench \u3067 Jupyter \u30ce\u30fc\u30c8\u30d6\u30c3\u30af\u3092\u4f7f\u7528\u3057\u3066 VantageCloud Lake \u30c7\u30e2\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","business intelligence","enterprise analytics","jupyter","teradatasql","ipython-sql","teradatasqlalchemy","vantagecloud","vantagecloud lake","data analytics","data science","vertex ai","google cloud"]},sidebar:"tutorialSidebar",previous:{title:"Amazon SageMaker \u3067 VantageCloud Lake \u306e Teradata Jupyter Notebook \u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b\u65b9\u6cd5",permalink:"/pr-preview/pr-145/ja/quickstarts/vantagecloud-lake/vantagecloud-lake-demo-jupyter-sagemaker"},next:{title:"Microsoft Azure\u3067VantageCloud Lake\u306eTeradata Jupyter Notebook\u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b\u65b9\u6cd5",permalink:"/pr-preview/pr-145/ja/quickstarts/vantagecloud-lake/vantagecloud-lake-demo-jupyter-azure"}},i={},d=[{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"Vertex AI Google Cloud\u74b0\u5883\u3092\u69cb\u7bc9\u3059\u308b",id:"vertex-ai-google-cloud\u74b0\u5883\u3092\u69cb\u7bc9\u3059\u308b",level:2},{value:"\u30e6\u30fc\u30b6\u30fc\u7ba1\u7406\u30ce\u30fc\u30c8\u30d6\u30c3\u30af \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u958b\u59cb\u3059\u308b",id:"\u30e6\u30fc\u30b6\u30fc\u7ba1\u7406\u30ce\u30fc\u30c8\u30d6\u30c3\u30af-\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u958b\u59cb\u3059\u308b",level:3},{value:"VantageCloud Lake\u3092\u69cb\u6210\u3059\u308b",id:"vantagecloud-lake\u3092\u69cb\u6210\u3059\u308b",level:2},{value:"vars.json\u3092\u7de8\u96c6\u3059\u308b",id:"varsjson\u3092\u7de8\u96c6\u3059\u308b",level:2},{value:"\u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b",id:"\u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b",level:2},{value:"\u307e\u3068\u3081",id:"\u307e\u3068\u3081",level:2}];function c(e){const a={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"google-cloud-vertex-ai-\u3067-vantagecloud-lake-\u306e-teradata-jupyter-notebook-\u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b\u65b9\u6cd5",children:"Google Cloud Vertex AI \u3067 VantageCloud Lake \u306e Teradata Jupyter Notebook \u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b\u65b9\u6cd5"}),"\n",(0,n.jsx)(a.h2,{id:"\u6982\u8981",children:"\u6982\u8981"}),"\n",(0,n.jsxs)(a.p,{children:["\u3053\u306e\u30af\u30a4\u30c3\u30af\u30b9\u30bf\u30fc\u30c8\u3067\u306f\u3001Google Cloud \u306e AI/ML \u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3067\u3042\u308b Vertex AI \u3067 ",(0,n.jsx)(a.a,{href:"https://github.com/Teradata/lake-demos",children:"VantageCloud Lake \u306e Jupyter Notebook \u30c7\u30e2"})," \u3092\u5b9f\u884c\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(a.h2,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["Teradata modules for Jupyter ",(0,n.jsx)(a.strong,{children:"Linux\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u7248"}),"(\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u306f ",(0,n.jsx)(a.a,{href:"https://downloads.teradata.com/download/tools/vantage-modules-for-jupyter",children:"\u3053\u3061\u3089"})," \u3001\u767b\u9332\u304c\u5fc5\u8981\u3067\u3059)"]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"https://console.cloud.google.com/flows/enableapi?apiid=notebooks.googleapis.com,aiplatform.googleapis.com&redirect=https://console.cloud.google.com&_ga=2.180323111.284679914.1706204112-1996764819.1705688373",children:"Vertex AI \u3068\u30ce\u30fc\u30c8\u30d6\u30c3\u30af API"}),"\u3092\u6709\u52b9\u306b\u3057\u305fGoogle Cloud\u30a2\u30ab\u30a6\u30f3\u30c8"]}),"\n",(0,n.jsx)(a.li,{children:"\u8d77\u52d5\u30b9\u30af\u30ea\u30d7\u30c8\u3068 Teradata Jupyter \u62e1\u5f35\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u4fdd\u5b58\u3059\u308b\u305f\u3081\u306e Google \u30af\u30e9\u30a6\u30c9 \u30b9\u30c8\u30ec\u30fc\u30b8"}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"/pr-preview/pr-145/ja/quickstarts/vantagecloud-lake/getting-started-with-vantagecloud-lake",children:"VantageCloud Lake\u74b0\u5883\u3078\u306e\u30a2\u30af\u30bb\u30b9"})}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"vertex-ai-google-cloud\u74b0\u5883\u3092\u69cb\u7bc9\u3059\u308b",children:"Vertex AI Google Cloud\u74b0\u5883\u3092\u69cb\u7bc9\u3059\u308b"}),"\n",(0,n.jsx)(a.p,{children:"\u65b0\u3057\u3044\u30ce\u30fc\u30c8\u30d6\u30c3\u30af \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u4f5c\u6210\u3059\u308b\u3068\u304d\u306b\u3001\u8d77\u52d5\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u4f5c\u6210\u5f8c\u306b 1 \u56de\u3060\u3051\u5b9f\u884c\u3055\u308c\u308b\u3053\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u306f\u3001Teradata Jupyter \u62e1\u5f35\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3001GitHub \u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u65b0\u3057\u3044\u30e6\u30fc\u30b6\u30fc\u7ba1\u7406\u30ce\u30fc\u30c8\u30d6\u30c3\u30af \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306b\u8907\u88fd\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"Teradata Jupyter\u62e1\u5f35\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"https://downloads.teradata.com/download/tools/vantage-modules-for-jupyter",children:"Vantage Modules for Jupyter\u30da\u30fc\u30b8 "})," \u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b"]}),"\n",(0,n.jsx)(a.li,{children:"\u30b5\u30a4\u30f3\u30a4\u30f3\u3057\u3066\u3001Teradata Linux \u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u307e\u3059\u3002"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"Google Cloud Storage Bucket\u3092\u4f5c\u6210\u3059\u308b"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u95a2\u9023\u3057\u305f\u540d\u524d\u3067\u30d0\u30b1\u30c3\u30c8\u3092\u4f5c\u6210\u3059\u308b(\u4f8b: teradata_jupyter)\u3067\u30d0\u30b1\u30c3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u3002"}),"\n",(0,n.jsxs)(a.li,{children:["\u30d0\u30b1\u30c3\u30c8\u540d\u304c\u30b0\u30ed\u30fc\u30d0\u30eb\u306b\u4e00\u610f\u3067\u3042\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002\u305f\u3068\u3048\u3070\u3001teradata_jupyter \u3068\u3044\u3046\u540d\u524d\u304c\u3059\u3067\u306b\u4f7f\u7528\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u5f8c\u7d9a\u306e\u30e6\u30fc\u30b6\u30fc\u306f\u305d\u306e\u540d\u524d\u3092\u4f7f\u7528\u3067\u304d\u307e\u305b\u3093\u3002\n",(0,n.jsx)(a.img,{alt:"\u65b0\u3057\u3044\u30d0\u30b1\u30c3\u30c8",src:t(67753).A+"",width:"2478",height:"568"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"\u89e3\u51cd\u3055\u308c\u305f Jupyter \u62e1\u5f35\u6a5f\u80fd\u30d1\u30c3\u30b1\u30fc\u30b8\u3092 Google Cloud Storage \u30d0\u30b1\u30c3\u30c8\u306b\u30d5\u30a1\u30a4\u30eb\u3068\u3057\u3066\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u3002"}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["\u6b21\u306e\u8d77\u52d5\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f5c\u6210\u3057\u3001",(0,n.jsx)(a.code,{children:"startup.sh"})," \u3068\u3057\u3066\u30ed\u30fc\u30ab\u30eb\u30de\u30b7\u30f3\u306b\u4fdd\u5b58\u3059\u308b\u3002"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"\u4ee5\u4e0b\u306f\u3001Google Cloud Storage \u30d0\u30b1\u30c3\u30c8\u304b\u3089 Teradata Jupyter \u62e1\u5f35\u6a5f\u80fd\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u53d6\u5f97\u3057\u3001Teradata SQL \u30ab\u30fc\u30cd\u30eb\u3001\u62e1\u5f35\u6a5f\u80fd\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3001lake-demos \u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u30af\u30ed\u30fc\u30f3\u3092\u4f5c\u6210\u3059\u308b\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u4f8b\u3067\u3059\u3002"}),"\n",(0,n.jsx)(a.admonition,{type:"info",children:(0,n.jsx)(a.p,{children:"gsutil cp \u30b3\u30de\u30f3\u30c9\u306e teradata_jupyter \u3092\u5fd8\u308c\u305a\u306b\u7f6e\u304d\u63db\u3048\u3066\u304f\u3060\u3055\u3044\u3002"})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",metastring:', id="vertex_ex_script", role="content-editable, emits-gtm-events"',children:"#! /bin/bash\n\ncd /home/jupyter\nmkdir teradata\ncd teradata\ngsutil cp gs://teradata_jupyter/* .\nunzip teradatasql*.zip\n\n# Install Teradata kernel\ncp teradatakernel /usr/local/bin\n\njupyter kernelspec install ./teradatasql --prefix=/opt/conda\n\n# Install Teradata extensions\npip install --find-links . teradata_preferences_prebuilt\npip install --find-links . teradata_connection_manager_prebuilt\npip install --find-links . teradata_sqlhighlighter_prebuilt\npip install --find-links . teradata_resultset_renderer_prebuilt\npip install --find-links . teradata_database_explorer_prebuilt\n\n# PIP install the Teradata Python library\npip install teradataml==17.20.00.04\n\n# Install Teradata R library (optional, uncomment this line only if you use an environment that supports R)\n#Rscript -e \"install.packages('tdplyr',repos=c('https://r-repo.teradata.com','https://cloud.r-project.org'))\"\n\n# Clone the Teradata lake-demos repository\nsu - jupyter -c \"git clone https://github.com/Teradata/lake-demos.git\"\n"})}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["\u3053\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u30d5\u30a1\u30a4\u30eb\u3068\u3057\u3066Google Cloud\u30b9\u30c8\u30ec\u30fc\u30b8\u30d0\u30b1\u30c3\u30c8\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u307e\u3059\n",(0,n.jsx)(a.img,{alt:"\u30d0\u30b1\u30c3\u30c8\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3055\u308c\u305f\u30d5\u30a1\u30a4\u30eb",src:t(28520).A+"",width:"2738",height:"1030"})]}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"\u30e6\u30fc\u30b6\u30fc\u7ba1\u7406\u30ce\u30fc\u30c8\u30d6\u30c3\u30af-\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u958b\u59cb\u3059\u308b",children:"\u30e6\u30fc\u30b6\u30fc\u7ba1\u7406\u30ce\u30fc\u30c8\u30d6\u30c3\u30af \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u958b\u59cb\u3059\u308b"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"Vertex AI \u30ef\u30fc\u30af\u30d9\u30f3\u30c1\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Google Cloud \u30b3\u30f3\u30bd\u30fc\u30eb\u306e Vertex AI Workbench \u306b\u623b\u308b\u3002"}),"\n",(0,n.jsxs)(a.li,{children:["\u8a73\u7d30\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3059\u308b\u304b\u3001",(0,n.jsx)(a.a,{href:"https://notebook.new/%E3%81%A7%E7%9B%B4%E6%8E%A5%E3%80%81%E6%96%B0%E3%81%97%E3%81%84%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E7%AE%A1%E7%90%86%E3%83%8E%E3%83%BC%E3%83%88%E3%83%96%E3%83%83%E3%82%AF%E3%82%92%E4%BD%9C%E6%88%90%E3%81%99%E3%82%8B%E3%80%82",children:"https://notebook.new/\u3067\u76f4\u63a5\u3001\u65b0\u3057\u3044\u30e6\u30fc\u30b6\u30fc\u7ba1\u7406\u30ce\u30fc\u30c8\u30d6\u30c3\u30af\u3092\u4f5c\u6210\u3059\u308b\u3002"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["Details(\u8a73\u7d30)\u3067\u3001\u30ce\u30fc\u30c8\u30d6\u30c3\u30af\u306b\u540d\u524d\u3092\u4ed8\u3051\u3001\u30ea\u30fc\u30b8\u30e7\u30f3\u3092\u9078\u629e\u3057\u3066\u7d9a\u884c\u3059\u308b\u3002\n",(0,n.jsx)(a.img,{alt:"\u30ce\u30fc\u30c8\u30d6\u30c3\u30af\u74b0\u5883\u306e\u8a73\u7d30",src:t(49e3).A+"",width:"2010",height:"1006"})]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["Environment(\u74b0\u5883)\u3067 ",(0,n.jsx)(a.strong,{children:"Browse(\u53c2\u7167)"})," \u3092\u9078\u629e\u3057\u3066\u3001Google Cloud Bucket\u304b\u3089startup.sh\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u9078\u629e\u3059\u308b\u3002\n",(0,n.jsx)(a.img,{alt:"\u8d77\u52d5\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u9078\u629e",src:t(21673).A+"",width:"2456",height:"1262"})]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["\u30ce\u30fc\u30c8\u30d6\u30c3\u30af\u3092\u958b\u59cb\u3059\u308b\u306b\u306f\u3001[\u4f5c\u6210] \u3092\u9078\u629e\u3057\u307e\u3059\u3002\u30ce\u30fc\u30c8\u30d6\u30c3\u30af\u306e\u4f5c\u6210\u30d7\u30ed\u30bb\u30b9\u304c\u5b8c\u4e86\u3059\u308b\u307e\u3067\u306b\u6570\u5206\u304b\u304b\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002\u5b8c\u4e86\u3057\u305f\u3089\u3001[JUPYTERLAB \u3092\u958b\u304f] \u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002\n",(0,n.jsx)(a.img,{alt:"\u30ce\u30fc\u30c8\u30d6\u30c3\u30af\u3092\u30a2\u30af\u30c6\u30a3\u30d6\u5316",src:t(20242).A+"",width:"2874",height:"934"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.admonition,{type:"info",children:(0,n.jsx)(a.p,{children:"\u63a5\u7d9a\u3092\u8a31\u53ef\u3059\u308b\u306b\u306f\u3001VantageCloud Lake \u74b0\u5883\u3067\u3053\u306e IP \u3092\u30db\u30ef\u30a4\u30c8\u30ea\u30b9\u30c8\u306b\u767b\u9332\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u306e\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u306f\u8a66\u7528\u74b0\u5883\u306b\u9069\u3057\u3066\u3044\u307e\u3059\u3002\u5b9f\u7a3c\u50cd\u74b0\u5883\u3067\u306f\u3001VPC\u3001\u30b5\u30d6\u30cd\u30c3\u30c8\u3001\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3 \u30b0\u30eb\u30fc\u30d7\u306e\u69cb\u6210\u3092\u69cb\u6210\u3057\u3066\u30db\u30ef\u30a4\u30c8\u30ea\u30b9\u30c8\u306b\u767b\u9332\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002"})}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["JupyterLab \u3067\u3001Python \u30ab\u30fc\u30cd\u30eb\u3092\u542b\u3080\u30ce\u30fc\u30c8\u30d6\u30c3\u30af\u3092\u958b\u304d\u3001\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3066\u30ce\u30fc\u30c8\u30d6\u30c3\u30af \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e IP \u30a2\u30c9\u30ec\u30b9\u3092\u898b\u3064\u3051\u307e\u3059\u3002\n",(0,n.jsx)(a.img,{alt:"python3 kernel",src:t(98442).A+"",width:"2796",height:"1334"})]}),"\n"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",metastring:', role="content-editable"',children:'import requests\ndef get_public_ip():\n    try:\n        response = requests.get(\'https://api.ipify.org\')\n        return response.text\n    except requests.RequestException as e:\n        return "Error: " + str(e)\nmy_public_ip = get_public_ip()\nprint("My Public IP is:", my_public_ip)\n'})}),"\n",(0,n.jsx)(a.h2,{id:"vantagecloud-lake\u3092\u69cb\u6210\u3059\u308b",children:"VantageCloud Lake\u3092\u69cb\u6210\u3059\u308b"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["VantageCloud Lake\u74b0\u5883\u3067\u3001[\u8a2d\u5b9a]\u306e\u4e0b\u306b\u30ce\u30fc\u30c8\u30d6\u30c3\u30af\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306eIP\u30a2\u30c9\u30ec\u30b9\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002\n",(0,n.jsx)(a.img,{alt:"JupyterLab\u3092\u958b\u59cb\u3059\u308b",src:t(41165).A+"",width:"1423",height:"662"})]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"varsjson\u3092\u7de8\u96c6\u3059\u308b",children:"vars.json\u3092\u7de8\u96c6\u3059\u308b"}),"\n",(0,n.jsxs)(a.p,{children:["\u30ce\u30fc\u30c8\u30d6\u30c3\u30af\u306e ",(0,n.jsx)(a.code,{children:"lake-demos"})," \u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u79fb\u52d5\u3057\u307e\u3059\u3002\n",(0,n.jsx)(a.img,{alt:"\u30ce\u30fc\u30c8\u30d6\u30c3\u30af\u30e9\u30f3\u30c1\u30e3\u30fc",src:t(29316).A+"",width:"2720",height:"1456"})]}),"\n",(0,n.jsxs)(a.p,{children:["vars.json\u3092\u53f3\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u30a8\u30c7\u30a3\u30bf\u3067\u30d5\u30a1\u30a4\u30eb\u3092\u958b\u304d\u307e\u3059\u3002\n",(0,n.jsx)(a.img,{alt:"vars.json",src:t(17985).A+"",width:"2810",height:"1834"})]}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.em,{children:(0,n.jsx)(a.a,{href:"https://github.com/Teradata/lake-demos/blob/main/vars.json",children:"vars.json \u30d5\u30a1\u30a4\u30eb"})})," \u30d5\u30a1\u30a4\u30eb\u3092\u7de8\u96c6\u3057\u3066\u3001\u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u8a8d\u8a3c\u60c5\u5831\u3092\u542b\u3081\u308b"]}),"\n",(0,n.jsxs)(a.table,{children:[(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{children:(0,n.jsx)(a.strong,{children:"\u5909\u6570"})}),(0,n.jsx)(a.th,{children:(0,n.jsx)(a.strong,{children:"\u5024"})})]})}),(0,n.jsxs)(a.tbody,{children:[(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:(0,n.jsx)(a.strong,{children:'"host"'})}),(0,n.jsx)(a.td,{children:"VantageCloud Lake \u74b0\u5883\u304b\u3089\u306e Public IP\u5024"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:(0,n.jsx)(a.strong,{children:'"UES_URI"'})}),(0,n.jsx)(a.td,{children:"VantageCloud Lake \u74b0\u5883\u304b\u3089\u306e Open Analytics"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:(0,n.jsx)(a.strong,{children:'"dbc"'})}),(0,n.jsx)(a.td,{children:"VantageCloud Lake \u74b0\u5883\u306e\u30de\u30b9\u30bf\u30fc \u30d1\u30b9\u30ef\u30fc\u30c9"})]})]})]}),"\n",(0,n.jsxs)(a.p,{children:["Public IP\u30a2\u30c9\u30ec\u30b9\u3068Open Analytics\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u53d6\u5f97\u3059\u308b\u306b\u306f\u3001\u6b21\u306e",(0,n.jsx)(a.a,{href:"/pr-preview/pr-145/ja/quickstarts/vantagecloud-lake/vantagecloud-lake-demo-jupyter-docker#create-vantagecloud-lake-environment",children:"\u624b\u9806"}),"\u306b\u5f93\u3044\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(a.admonition,{type:"info",children:(0,n.jsx)(a.p,{children:"vars.json \u30d5\u30a1\u30a4\u30eb\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u5909\u66f4\u3057\u307e\u3059\u3002\u30b5\u30f3\u30d7\u30eb vars.json \u3067\u306f\u3001\u3059\u3079\u3066\u306e\u30e6\u30fc\u30b6\u30fc\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u300cpassword\u300d\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u304c\u308f\u304b\u308a\u307e\u3059\u3002\u3053\u308c\u306f\u30b5\u30f3\u30d7\u30eb \u30d5\u30a1\u30a4\u30eb\u306e\u554f\u984c\u306b\u3059\u304e\u305a\u3001\u3053\u308c\u3089\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u3059\u3079\u3066\u5909\u66f4\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u5f37\u529b\u306a\u30d1\u30b9\u30ef\u30fc\u30c9\u306b\u8a2d\u5b9a\u3057\u3001\u5fc5\u8981\u306b\u5fdc\u3058\u3066\u4fdd\u8b77\u3057\u3001\u4ed6\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u7ba1\u7406\u306e\u30d9\u30b9\u30c8 \u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u306b\u5f93\u3063\u3066\u304f\u3060\u3055\u3044\u3002"})}),"\n",(0,n.jsx)(a.h2,{id:"\u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b",children:"\u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b"}),"\n",(0,n.jsxs)(a.p,{children:["\u74b0\u5883\u3092\u8a2d\u5b9a\u3059\u308b\u306b\u306f\u3001",(0,n.jsx)(a.em,{children:"0_Demo_Environment_Setup.ipynb"}),"\u5185\u306e\u3059\u3079\u3066\u306e\u30bb\u30eb\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002\u7d9a\u3044\u3066",(0,n.jsx)(a.strong,{children:"1_Demo_Setup_Base_Data.ipynb"}),"\u3092\u5b9f\u884c\u3057\u3066\u3001\u30c7\u30e2\u306b\u5fc5\u8981\u306a\u57fa\u672c\u30c7\u30fc\u30bf\u3092\u8aad\u307f\u8fbc\u307f\u307e\u3059\u3002"]}),"\n",(0,n.jsxs)(a.p,{children:["\u30c7\u30e2\u30ce\u30fc\u30c8\u30d6\u30c3\u30af\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001GitHub \u306e ",(0,n.jsx)(a.a,{href:"https://github.com/Teradata/lake-demos",children:"Teradata Lake \u30c7\u30e2"})," \u30da\u30fc\u30b8\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,n.jsx)(a.h2,{id:"\u307e\u3068\u3081",children:"\u307e\u3068\u3081"}),"\n",(0,n.jsxs)(a.p,{children:["\u3053\u306e\u30af\u30a4\u30c3\u30af\u30b9\u30bf\u30fc\u30c8 \u30ac\u30a4\u30c9\u3067\u306f\u3001 ",(0,n.jsx)(a.a,{href:"https://github.com/Teradata/lake-demos",children:"VantageCloud Lake \u306e Jupyter Notebook \u30c7\u30e2"}),"\u3092\u5b9f\u884c\u3059\u308b\u3088\u3046\u306b Google Cloud Vertex AI Workbench Notebooks \u3092\u69cb\u6210\u3057\u307e\u3057\u305f\u3002"]})]})}function u(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},20242:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/activenotebook-706c22364c3c878099ccc0ab2e7663ef.png"},67753:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/bucket-490e623dc52bb3ffcaf179d1937482c4.png"},49e3:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/detailsenv-a90448ce8de3e3e5efd8acc6001831c1.png"},29316:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/notebooklauncher-fde21ecd3b27388b0df3850958613967.png"},17985:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/openvars-3b64b202e1395cd6f67b7331d7e76679.png"},98442:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/python3-3c9cf920b70af3b257f429d0ea34fe67.png"},21673:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/startupscript-c808bee345430752612888eba52e48e1.png"},28520:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/upload-81801d8d1591e421a960d4b9032d7c88.png"},41165:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/sagemaker-lake-9e18bff602d568e81bbb721a3d4e2553.PNG"},28453:(e,a,t)=>{t.d(a,{R:()=>l,x:()=>o});var n=t(96540);const s={},r=n.createContext(s);function l(e){const a=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(r.Provider,{value:a},e.children)}}}]);