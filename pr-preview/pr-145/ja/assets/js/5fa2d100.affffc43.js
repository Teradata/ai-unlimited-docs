"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[2510],{32442:(e,a,t)=>{t.d(a,{Ay:()=>i,RM:()=>d});var n=t(74848),s=t(28453);const d=[];function r(e){const a={a:"a",admonition:"admonition",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(a.admonition,{type:"note",children:[(0,n.jsx)(a.mdxAdmonitionTitle,{}),(0,n.jsxs)(a.p,{children:["Vantage \u306e\u30c6\u30b9\u30c8\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u304c\u5fc5\u8981\u306a\u5834\u5408\u306f\u3001 ",(0,n.jsx)(a.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})," \u3067\u7121\u6599\u3067\u30d7\u30ed\u30d3\u30b8\u30e7\u30cb\u30f3\u30b0\u3067\u304d\u307e\u3059"]})]})}function i(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}},22645:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var n=t(74848),s=t(28453),d=t(32442);const r={sidebar_position:7,author:"Ravi Chillanki",email:"ravi.chillanki@teradata.com",page_last_update:"2023 \u5e74 8 \u6708 4 \u65e5",description:"dbt Feast \u3068 Teradata \u306e\u7d71\u5408",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","AI/ML","AI","ML","feature engineering","feature store","FEAST"]},i="dbt \u3068 FEAST \u3092\u4f7f\u7528\u3057\u3066 Teradata Vantage \u3067\u30d5\u30a3\u30fc\u30c1\u30e3\u30b9\u30c8\u30a2\u3092\u69cb\u7bc9\u3059\u308b\u65b9\u6cd5",l={id:"manage-data/getting-started-dbt-feast-teradata-pipeline",title:"dbt \u3068 FEAST \u3092\u4f7f\u7528\u3057\u3066 Teradata Vantage \u3067\u30d5\u30a3\u30fc\u30c1\u30e3\u30b9\u30c8\u30a2\u3092\u69cb\u7bc9\u3059\u308b\u65b9\u6cd5",description:"dbt Feast \u3068 Teradata \u306e\u7d71\u5408",source:"@site/i18n/ja/docusaurus-plugin-content-docs-quickstarts/current/manage-data/getting-started-dbt-feast-teradata-pipeline.md",sourceDirName:"manage-data",slug:"/manage-data/getting-started-dbt-feast-teradata-pipeline",permalink:"/pr-preview/pr-145/ja/quickstarts/manage-data/getting-started-dbt-feast-teradata-pipeline",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,author:"Ravi Chillanki",email:"ravi.chillanki@teradata.com",page_last_update:"2023 \u5e74 8 \u6708 4 \u65e5",description:"dbt Feast \u3068 Teradata \u306e\u7d71\u5408",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","AI/ML","AI","ML","feature engineering","feature store","FEAST"]},sidebar:"tutorialSidebar",previous:{title:"Teradata Vantage\u3068FEAST\u3067\u62e1\u5f35\u6027\u306e\u9ad8\u3044\u30d5\u30a3\u30fc\u30c1\u30e3\u30fc\u30b9\u30c8\u30a2\u3092\u5b9f\u73fe",permalink:"/pr-preview/pr-145/ja/quickstarts/manage-data/using-feast-feature-store-with-teradata-vantage"},next:{title:"Airbyte \u3092\u4f7f\u7528\u3057\u3066\u5916\u90e8\u30bd\u30fc\u30b9\u304b\u3089 Teradata Vantage \u306b\u30c7\u30fc\u30bf\u3092\u30ed\u30fc\u30c9\u3059\u308b\u65b9\u6cd5",permalink:"/pr-preview/pr-145/ja/quickstarts/manage-data/use-airbyte-to-load-data-from-external-sources-to-teradata-vantage"}},c={},o=[{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u306f\u3058\u3081\u306b",id:"\u306f\u3058\u3081\u306b",level:2},{value:"dbt",id:"dbt",level:3},{value:"Feast",id:"feast",level:3},{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},...d.RM,{value:"\u76ee\u7684",id:"\u76ee\u7684",level:2},{value:"\u59cb\u3081\u307e\u3057\u3087\u3046",id:"\u59cb\u3081\u307e\u3057\u3087\u3046",level:2},{value:"\u9280\u884c\u30a6\u30a7\u30a2\u30cf\u30a6\u30b9\u306b\u3064\u3044\u3066",id:"\u9280\u884c\u30a6\u30a7\u30a2\u30cf\u30a6\u30b9\u306b\u3064\u3044\u3066",level:2},{value:"dbt\u3092\u69cb\u6210\u3059\u308b",id:"dbt\u3092\u69cb\u6210\u3059\u308b",level:2},{value:"FEAST\u3092\u69cb\u6210\u3059\u308b",id:"feast\u3092\u69cb\u6210\u3059\u308b",level:2},{value:"\u30aa\u30d5\u30e9\u30a4\u30f3\u30b9\u30c8\u30a2\u306e\u8a2d\u5b9a",id:"\u30aa\u30d5\u30e9\u30a4\u30f3\u30b9\u30c8\u30a2\u306e\u8a2d\u5b9a",level:3},{value:"Teradata SQL \u30ec\u30b8\u30b9\u30c8\u30ea\u306e\u69cb\u6587",id:"teradata-sql-\u30ec\u30b8\u30b9\u30c8\u30ea\u306e\u69cb\u6587",level:3},{value:"dbt\u3092\u5b9f\u884c\u3059\u308b",id:"dbt\u3092\u5b9f\u884c\u3059\u308b",level:2},{value:"\u30c7\u30a3\u30e1\u30f3\u30b7\u30e7\u30f3\u30e2\u30c7\u30eb\u3092\u4f5c\u6210\u3057\u3059\u308b",id:"\u30c7\u30a3\u30e1\u30f3\u30b7\u30e7\u30f3\u30e2\u30c7\u30eb\u3092\u4f5c\u6210\u3057\u3059\u308b",level:3},{value:"FEAST\u306e\u5b9f\u884c",id:"feast\u306e\u5b9f\u884c",level:2},{value:"Feature Repository\u306e\u5b9a\u7fa9",id:"feature-repository\u306e\u5b9a\u7fa9",level:3},{value:"\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0\u30c7\u30fc\u30bf\u3092\u751f\u6210\u3057\u307e\u3059",id:"\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0\u30c7\u30fc\u30bf\u3092\u751f\u6210\u3057\u307e\u3059",level:3},{value:"\u307e\u3068\u3081",id:"\u307e\u3068\u3081",level:2},{value:"\u3055\u3089\u306b\u8a73\u3057\u304f",id:"\u3055\u3089\u306b\u8a73\u3057\u304f",level:2}];function h(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"dbt-\u3068-feast-\u3092\u4f7f\u7528\u3057\u3066-teradata-vantage-\u3067\u30d5\u30a3\u30fc\u30c1\u30e3\u30b9\u30c8\u30a2\u3092\u69cb\u7bc9\u3059\u308b\u65b9\u6cd5",children:"dbt \u3068 FEAST \u3092\u4f7f\u7528\u3057\u3066 Teradata Vantage \u3067\u30d5\u30a3\u30fc\u30c1\u30e3\u30b9\u30c8\u30a2\u3092\u69cb\u7bc9\u3059\u308b\u65b9\u6cd5"}),"\n",(0,n.jsx)(a.h2,{id:"\u6982\u8981",children:"\u6982\u8981"}),"\n",(0,n.jsxs)(a.p,{children:["\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u751f\u30c7\u30fc\u30bf\u3092\u53d6\u5f97\u3057\u3066 FEAST \u6a5f\u80fd\u306b\u5909\u63db\u3059\u308b dbt \u30d1\u30a4\u30d7\u30e9\u30a4\u30f3\u3092\u4f5c\u6210\u3059\u308b\u65b9\u6cd5\u3092\u793a\u3057\u307e\u3059\u3002\u30d1\u30a4\u30d7\u30e9\u30a4\u30f3\u306f\u3001\u30c7\u30fc\u30bf\u5909\u63db\u306b '",(0,n.jsx)(a.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Teradata-VantageTM-Analytics-Database-Analytic-Functions-17.20",children:"ClearScape Analytics\u306e\u6a5f\u80fd"}),"' \u3092\u6d3b\u7528\u3057\u307e\u3059\u3002\u5909\u63db\u306e\u51fa\u529b\u306f FEAST \u306b\u8aad\u307f\u8fbc\u307e\u308c\u3001ML \u30e2\u30c7\u30eb\u3067\u4f7f\u7528\u3067\u304d\u308b\u6a5f\u80fd\u3092\u5b9f\u73fe\u3057\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(a.h2,{id:"\u306f\u3058\u3081\u306b",children:"\u306f\u3058\u3081\u306b"}),"\n",(0,n.jsx)(a.h3,{id:"dbt",children:"dbt"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"https://www.getdbt.com/product/what-is-dbt",children:"dbt"})," (\u30c7\u30fc\u30bf \u30d3\u30eb\u30c9 \u30c4\u30fc\u30eb) \u306f\u3001\u30e2\u30c0\u30f3 \u30c7\u30fc\u30bf \u30b9\u30bf\u30c3\u30af\u306e\u57fa\u790e\u3068\u306a\u308b\u30c7\u30fc\u30bf\u5909\u63db\u30c4\u30fc\u30eb\u3067\u3059\u3002ELT (\u62bd\u51fa\u3001\u30ed\u30fc\u30c9\u3001\u5909\u63db) \u306e T \u3092\u62c5\u5f53\u3057\u307e\u3059\u3002\u4ed6\u306e\u30d7\u30ed\u30bb\u30b9\u306b\u3088\u3063\u3066\u751f\u30c7\u30fc\u30bf\u304c\u30c7\u30fc\u30bf \u30a6\u30a7\u30a2\u30cf\u30a6\u30b9\u307e\u305f\u306f\u30c7\u30fc\u30bf \u30ec\u30a4\u30af\u306b\u53d6\u308a\u8fbc\u307e\u308c\u308b\u3053\u3068\u304c\u524d\u63d0\u3068\u306a\u308a\u307e\u3059\u3002\u305d\u306e\u5f8c\u3001\u3053\u306e\u30c7\u30fc\u30bf\u3092\u5909\u63db\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(a.h3,{id:"feast",children:"Feast"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"https://docs.feast.dev",children:"Feast"})," (Feature Store) \u306f\u3001\u65e2\u5b58\u306e\u30c6\u30af\u30ce\u30ed\u30b8\u30fc\u3092\u6d3b\u7528\u3057\u3066\u6a5f\u68b0\u5b66\u7fd2\u6a5f\u80fd\u3092\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0 \u30e2\u30c7\u30eb\u306b\u7ba1\u7406\u304a\u3088\u3073\u63d0\u4f9b\u3059\u308b\u67d4\u8edf\u306a\u30c7\u30fc\u30bf \u30b7\u30b9\u30c6\u30e0\u3067\u3059\u3002\u7279\u5b9a\u306e\u30cb\u30fc\u30ba\u306b\u5408\u308f\u305b\u3066\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3067\u304d\u307e\u3059\u3002\u307e\u305f\u3001\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0\u3068\u30b5\u30fc\u30d3\u30b9\u306b\u6a5f\u80fd\u3092\u4e00\u8cab\u3057\u3066\u5229\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u3001\u30c7\u30fc\u30bf\u6f0f\u6d29\u3092\u56de\u907f\u3057\u3001ML \u3092\u30c7\u30fc\u30bf \u30a4\u30f3\u30d5\u30e9\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u304b\u3089\u5207\u308a\u96e2\u3059\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(a.h2,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"Teradata Vantage\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3078\u306e\u30a2\u30af\u30bb\u30b9\u3002"}),"\n",(0,n.jsx)(d.Ay,{}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["Feast-Teradata  \u304c\u30ed\u30fc\u30ab\u30eb\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u3002",(0,n.jsx)(a.a,{href:"/pr-preview/pr-145/ja/quickstarts/manage-data/using-feast-feature-store-with-teradata-vantage",children:" Feast-Teradata \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u624b\u9806"})," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["dbt\u304c\u30ed\u30fc\u30ab\u30eb\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u3002 ",(0,n.jsx)(a.a,{href:"/pr-preview/pr-145/ja/quickstarts/manage-data/dbt",children:" dbt\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u624b\u9806"})," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"\u76ee\u7684",children:"\u76ee\u7684"}),"\n",(0,n.jsx)(a.p,{children:"\u76ee\u6a19\u306f\u3001Teradata Vantage \u3092\u30bd\u30fc\u30b9\u3068\u3057\u3066\u30c7\u30fc\u30bf \u30d1\u30a4\u30d7\u30e9\u30a4\u30f3\u3092\u4f5c\u6210\u3057\u3001dbt \u306e\u3044\u304f\u3064\u304b\u306e\u5909\u6570\u306b\u5bfe\u3057\u3066\u30c7\u30fc\u30bf\u5909\u63db\u3092\u5b9f\u884c\u3059\u308b\u3053\u3068\u3067\u3059\u3002dbt \u3067\u884c\u3046\u30c7\u30fc\u30bf\u5909\u63db\u306e\u57fa\u672c\u306f\u3001\u6027\u5225\u3001\u5a5a\u59fb\u72b6\u6cc1\u3001\u5dde\u30b3\u30fc\u30c9\u306a\u3069\u306e\u8907\u6570\u306e\u5217\u306e\u30ef\u30f3\u30db\u30c3\u30c8 \u30a8\u30f3\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u3067\u3059\u3002\u3055\u3089\u306b\u3001\u30a2\u30ab\u30a6\u30f3\u30c8 \u30bf\u30a4\u30d7\u5217\u306e\u30c7\u30fc\u30bf\u306f\u3001\u3044\u304f\u3064\u304b\u306e\u5217\u306b\u5bfe\u3057\u3066\u96c6\u8a08\u64cd\u4f5c\u3092\u5b9f\u884c\u3059\u308b\u3053\u3068\u306b\u3088\u3063\u3066\u5909\u63db\u3055\u308c\u307e\u3059\u3002\u3053\u308c\u3089\u3059\u3079\u3066\u3092\u7d44\u307f\u5408\u308f\u305b\u308b\u3053\u3068\u3067\u3001\u5909\u63db\u3055\u308c\u305f\u30c7\u30fc\u30bf\u3092\u542b\u3080\u76ee\u7684\u306e\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u304c\u751f\u6210\u3055\u308c\u307e\u3059\u3002\u5909\u63db\u3055\u308c\u305f\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u306f\u3001FEAST \u3078\u306e\u5165\u529b\u3068\u3057\u3066\u4f7f\u7528\u3055\u308c\u3001\u7279\u5fb4\u3092\u4fdd\u5b58\u3057\u307e\u3059\u3002\u305d\u306e\u5f8c\u3001\u7279\u5fb4\u3092\u4f7f\u7528\u3057\u3066\u30e2\u30c7\u30eb\u306e\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0 \u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u304c\u751f\u6210\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,n.jsx)(a.h2,{id:"\u59cb\u3081\u307e\u3057\u3087\u3046",children:"\u59cb\u3081\u307e\u3057\u3087\u3046"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"dbt\u3001feast\u3001\u304a\u3088\u3073\u305d\u308c\u3089\u306e\u4f9d\u5b58\u95a2\u4fc2\u3092\u7ba1\u7406\u3059\u308b\u305f\u3081\u306e\u65b0\u3057\u3044 Python \u74b0\u5883\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\u74b0\u5883\u3092\u30a2\u30af\u30c6\u30a3\u30d6\u5316\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"python3 -m venv env\nsource env/bin/activate\n"})}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb \u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u30af\u30ed\u30fc\u30f3\u3092\u4f5c\u6210\u3057\u3001\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u30d7\u30ed\u30b8\u30a7\u30af\u30c8 \u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u5909\u66f4\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"git clone https://github.com/Teradata/tdata-pipeline.git\n"})}),"\n",(0,n.jsx)(a.p,{children:"\u30af\u30ed\u30fc\u30f3\u3055\u308c\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u69cb\u9020\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"tdata-pipeline/\n    feature_repo/\n        feature_views.py\n        feature_store.yml\n    dbt_transformation/\n        ...\n        macros\n        models\n        ...\n    generate_training_data.py\n    CreateDB.sql\n    dbt_project.yml\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"\u9280\u884c\u30a6\u30a7\u30a2\u30cf\u30a6\u30b9\u306b\u3064\u3044\u3066",children:"\u9280\u884c\u30a6\u30a7\u30a2\u30cf\u30a6\u30b9\u306b\u3064\u3044\u3066"}),"\n",(0,n.jsx)(a.p,{children:"teddy_bank\u306f\u9280\u884c\u9867\u5ba2\u306e\u67b6\u7a7a\u306e\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u3067\u3042\u308a\u3001\u4e3b\u306b\u9867\u5ba2\u3001\u53e3\u5ea7\u3001\u304a\u3088\u3073\n\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306f\u6b21\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u95a2\u4fc2\u56f3\u3067\u8868\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"dbt feast",src:t(71030).A+"",width:"1223",height:"605"})}),"\n",(0,n.jsx)(a.p,{children:"dbt \u306f\u3053\u306e\u751f\u30c7\u30fc\u30bf\u3092\u53d6\u5f97\u3057\u3001ML \u30e2\u30c7\u30ea\u30f3\u30b0\u304a\u3088\u3073\u5206\u6790\u30c4\u30fc\u30eb\u306b\u3088\u308a\u9069\u3057\u305f\u4ee5\u4e0b\u306e\u30e2\u30c7\u30eb\u3092\u69cb\u7bc9\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"dbt feast",src:t(31247).A+"",width:"769",height:"689"})}),"\n",(0,n.jsx)(a.h2,{id:"dbt\u3092\u69cb\u6210\u3059\u308b",children:"dbt\u3092\u69cb\u6210\u3059\u308b"}),"\n",(0,n.jsxs)(a.p,{children:["\u6b21\u306e\u5185\u5bb9\u3067\u30d5\u30a1\u30a4\u30eb ",(0,n.jsx)(a.code,{children:"$HOME/.dbt/profiles.yml"})," \u3092\u4f5c\u6210\u3057\u307e\u3059\u3002Teradata \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306b\u5408\u308f\u305b\u3066 ",(0,n.jsx)(a.code,{children:"<host>"}),"\u3001",(0,n.jsx)(a.code,{children:"<user>"}),"\u3001",(0,n.jsx)(a.code,{children:"<password>"})," \u3092\u8abf\u6574\u3057\u307e\u3059\u3002"]}),"\n",(0,n.jsxs)(a.admonition,{type:"note",children:[(0,n.jsx)(a.mdxAdmonitionTitle,{children:(0,n.jsx)(a.strong,{children:"\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3092\u8a2d\u5b9a\u3059\u308b"})}),(0,n.jsxs)(a.p,{children:["\u6b21\u306e dbt \u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u306f ",(0,n.jsx)(a.code,{children:"teddy_bank"}),"\u3068\u3044\u3046\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3092\u6307\u3057\u3066\u3044\u307e\u3059\u3002 ",(0,n.jsx)(a.code,{children:"schema"})," \u306e\u5024\u3092\u3001Teradata Vantage \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5185\u306e\u65e2\u5b58\u306e\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3092\u6307\u3059\u3088\u3046\u306b\u5909\u66f4\u3067\u304d\u307e\u3059\u3002"]})]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-yaml",metastring:', id="dbt_first_config", role="emits-gtm-events"',children:"dbt_transformation:\n  target: dev\n  outputs:\n    dev:\n      type: teradata\n      host: <host>\n      user: <user>\n      password: <password>\n      schema: teddy_bank\n      tmode: ANSI\n"})}),"\n",(0,n.jsx)(a.p,{children:"\u8a2d\u5b9a\u3092\u691c\u8a3c\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"dbt debug\n"})}),"\n",(0,n.jsxs)(a.p,{children:["\u30c7\u30d0\u30c3\u30b0 \u30b3\u30de\u30f3\u30c9\u304c\u30a8\u30e9\u30fc\u3092\u8fd4\u3057\u305f\u5834\u5408\u306f\u3001 ",(0,n.jsx)(a.code,{children:"profiles.yml"})," \u306e\u5185\u5bb9\u306b\u554f\u984c\u304c\u3042\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(a.h2,{id:"feast\u3092\u69cb\u6210\u3059\u308b",children:"FEAST\u3092\u69cb\u6210\u3059\u308b"}),"\n",(0,n.jsxs)(a.p,{children:["Feast\u69cb\u6210\u306fVantage\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3078\u306e\u63a5\u7d9a\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002Feast\u306e\u521d\u671f\u5316\u4e2d\u306b\u4f5c\u6210\u3055\u308c\u305fyaml\u30d5\u30a1\u30a4\u30eb\n\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3001 ",(0,n.jsx)(a.code,{children:"$HOME/.feast/feature_repo/feature_store.yml"})," \u306f\u30aa\u30d5\u30e9\u30a4\u30f3\u30b9\u30c8\u30ec\u30fc\u30b8\u3001\u30aa\u30f3\u30e9\u30a4\u30f3\u30b9\u30c8\u30ec\u30fc\u30b8\u3001\u30d7\u30ed\u30d0\u30a4\u30c0\u306e\u8a73\u7d30\u3092\u4fdd\u6301\u3067\u304d\u307e\u3059\n\u304a\u3088\u3073\u30ec\u30b8\u30b9\u30c8\u30ea\u3002Teradata \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306b\u5408\u308f\u305b\u3066 ",(0,n.jsx)(a.code,{children:"<host>"}),"\u3001 ",(0,n.jsx)(a.code,{children:"<user>"}),"\u3001 ",(0,n.jsx)(a.code,{children:"<password>"})," \u3092\u8abf\u6574\u3057\u307e\u3059\u3002"]}),"\n",(0,n.jsxs)(a.admonition,{type:"note",children:[(0,n.jsx)(a.mdxAdmonitionTitle,{children:(0,n.jsx)(a.strong,{children:"\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3092\u8a2d\u5b9a\u3059\u308b"})}),(0,n.jsxs)(a.p,{children:["\u6b21\u306edbt\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u306f ",(0,n.jsx)(a.code,{children:"teddy_bank"}),"\u3068\u3044\u3046\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3092\u6307\u3057\u3066\u3044\u307e\u3059\u3002 ",(0,n.jsx)(a.code,{children:"schema"})," \u306e\u5024\u3092\u5909\u66f4\u3057\u3066\u3001\nTeradata Vantage\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5185\u306e\u65e2\u5b58\u306e\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9"]})]}),"\n",(0,n.jsx)(a.h3,{id:"\u30aa\u30d5\u30e9\u30a4\u30f3\u30b9\u30c8\u30a2\u306e\u8a2d\u5b9a",children:"\u30aa\u30d5\u30e9\u30a4\u30f3\u30b9\u30c8\u30a2\u306e\u8a2d\u5b9a"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-yaml",metastring:', id="feast_first_config", role="emits-gtm-events"',children:"project: td_pipeline\nregistry:\n    registry_type: sql\n    path: teradatasql://<user>:<password>@<hostIP>/?database=teddy_bank&LOGMECH=TDNEGO\nprovider: local\noffline_store:\n    type: feast_teradata.offline.teradata.TeradataOfflineStore\n    host: <host>\n    database: teddy_bank\n    user: <user>\n    password: <password>\n    log_mech: TDNEGO\nentity_key_serialization_version: 2\n"})}),"\n",(0,n.jsx)(a.h3,{id:"teradata-sql-\u30ec\u30b8\u30b9\u30c8\u30ea\u306e\u69cb\u6587",children:"Teradata SQL \u30ec\u30b8\u30b9\u30c8\u30ea\u306e\u69cb\u6587"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:"path = 'teradatasql://'+ teradata_user +':' + teradata_password + '@'+host + '/?database=' +\n        teradata_database + '&LOGMECH=' + teradata_log_mech\n"})}),"\n",(0,n.jsx)(a.h2,{id:"dbt\u3092\u5b9f\u884c\u3059\u308b",children:"dbt\u3092\u5b9f\u884c\u3059\u308b"}),"\n",(0,n.jsxs)(a.p,{children:["\u3053\u306e\u30b9\u30c6\u30c3\u30d7\u3067\u306f\u3001",(0,n.jsx)(a.code,{children:"customers"}),"\u3001",(0,n.jsx)(a.code,{children:"accounts"}),"\u3001",(0,n.jsx)(a.code,{children:"transactions"})," \u306e\u30c7\u30fc\u30bf\u30c6\u30fc\u30d6\u30eb\u3092\u5165\u529b\u3057\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"dbt seed\n"})}),"\n",(0,n.jsx)(a.h3,{id:"\u30c7\u30a3\u30e1\u30f3\u30b7\u30e7\u30f3\u30e2\u30c7\u30eb\u3092\u4f5c\u6210\u3057\u3059\u308b",children:"\u30c7\u30a3\u30e1\u30f3\u30b7\u30e7\u30f3\u30e2\u30c7\u30eb\u3092\u4f5c\u6210\u3057\u3059\u308b"}),"\n",(0,n.jsx)(a.p,{children:"\u751f\u30c7\u30fc\u30bf \u30c6\u30fc\u30d6\u30eb\u304c\u3067\u304d\u305f\u306e\u3067\u3001\u30c7\u30a3\u30e1\u30f3\u30b7\u30e7\u30f3\u30e2\u30c7\u30eb\u3092\u4f5c\u6210\u3059\u308b\u3088\u3046\u306b dbt \u306b\u6307\u793a\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"dbt run --select Analytic_Dataset\n"})}),"\n",(0,n.jsx)(a.h2,{id:"feast\u306e\u5b9f\u884c",children:"FEAST\u306e\u5b9f\u884c"}),"\n",(0,n.jsx)(a.h3,{id:"feature-repository\u306e\u5b9a\u7fa9",children:"Feature Repository\u306e\u5b9a\u7fa9"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"TeradataSource:"})," Teradata (Enterprise \u307e\u305f\u306f Lake) \u306b\u683c\u7d0d\u3055\u308c\u305f\u6a5f\u80fd\u3001\u307e\u305f\u306f Teradata (NOS, QueryGrid) \u304b\u3089\u306e\u5916\u90e8\u30c6\u30fc\u30d6\u30eb\u3092\u4ecb\u3057\u3066\u30a2\u30af\u30bb\u30b9\u53ef\u80fd\u306a\u6a5f\u80fd\u306e\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9"]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"Entity:"})," \u610f\u5473\u7684\u306b\u95a2\u9023\u3059\u308b\u30d5\u30a3\u30fc\u30c1\u30e3\u30fc\u306e\u96c6\u5408\u4f53"]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"Feature View:"})," \u30d5\u30a3\u30fc\u30c1\u30e3\u30d3\u30e5\u30fc\u306f\u3001\u7279\u5b9a\u306e\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u304b\u3089\u306e\u30d5\u30a3\u30fc\u30c1\u30e3\u30c7\u30fc\u30bf\u306e\u30b0\u30eb\u30fc\u30d7\u3067\u3059\u3002\u30d5\u30a3\u30fc\u30c1\u30e3\u30d3\u30e5\u30fc\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u30d5\u30a3\u30fc\u30c1\u30e3\u3068\u305d\u306e\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u3092\u4e00\u8cab\u3057\u3066\u5b9a\u7fa9\u3067\u304d\u308b\u305f\u3081\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5168\u4f53\u3067\u30d5\u30a3\u30fc\u30c1\u30e3\u30b0\u30eb\u30fc\u30d7\u3092\u518d\u5229\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:'DBT_source = TeradataSource( database=dbload, table=f"Analytic_Dataset", timestamp_field="event_timestamp")\n\ncustomer = Entity(name = "customer", join_keys = [\'cust_id\'])\n\nads_fv = FeatureView(name="ads_fv",entities=[customer],source=DBT_source, schema=[\n        Field(name="age", dtype=Float32),\n        Field(name="income", dtype=Float32),\n        Field(name="q1_trans_cnt", dtype=Int64),\n        Field(name="q2_trans_cnt", dtype=Int64),\n        Field(name="q3_trans_cnt", dtype=Int64),\n        Field(name="q4_trans_cnt", dtype=Int64),\n    ],)\n'})}),"\n",(0,n.jsx)(a.h3,{id:"\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0\u30c7\u30fc\u30bf\u3092\u751f\u6210\u3057\u307e\u3059",children:"\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0\u30c7\u30fc\u30bf\u3092\u751f\u6210\u3057\u307e\u3059"}),"\n",(0,n.jsx)(a.p,{children:"\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0 \u30c7\u30fc\u30bf\u3092\u751f\u6210\u3059\u308b\u65b9\u6cd5\u306f\u3055\u307e\u3056\u307e\u3067\u3059\u3002\u8981\u4ef6\u306b\u5fdc\u3058\u3066\u3001\u6a5f\u80fd\u30d3\u30e5\u30fc \u30de\u30c3\u30d4\u30f3\u30b0\u3092\u4f7f\u7528\u3057\u3066 'entitydf' \u3092\u30bd\u30fc\u30b9 \u30c7\u30fc\u30bf \u30c6\u30fc\u30d6\u30eb\u3068\u7d50\u5408\u3067\u304d\u307e\u3059\u3002\u4ee5\u4e0b\u306f\u3001\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0 \u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u3092\u751f\u6210\u3059\u308b\u30b5\u30f3\u30d7\u30eb\u95a2\u6570\u3067\u3059\u3002"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:'def get_Training_Data():\n    # Initialize a FeatureStore with our current repository\'s configurations\n    store = FeatureStore(repo_path="feature_repo")\n    con = create_context(host = os.environ["latest_vm"], username = os.environ["dbc_pwd"],\n            password = os.environ["dbc_pwd"], database = "EFS")\n    entitydf = DataFrame(\'Analytic_Dataset\').to_pandas()\n    entitydf.reset_index(inplace=True)\n    print(entitydf)\n    entitydf = entitydf[[\'cust_id\',\'event_timestamp\']]\n    training_data = store.get_historical_features(\n        entity_df=entitydf,\n        features=[\n        "ads_fv:age"\n        ,"ads_fv:income"\n        ,"ads_fv:q1_trans_cnt"\n        ,"ads_fv:q2_trans_cnt"\n        ,"ads_fv:q3_trans_cnt"\n        ,"ads_fv:q4_trans_cnt"\n        ],\n        full_feature_names=True\n    ).to_df()\n\n    return training_data\n\n\n'})}),"\n",(0,n.jsx)(a.h2,{id:"\u307e\u3068\u3081",children:"\u307e\u3068\u3081"}),"\n",(0,n.jsx)(a.p,{children:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001Teradata Vantage \u3067 dbt \u3068 FEAST \u3092\u4f7f\u7528\u3059\u308b\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3057\u305f\u3002\u30b5\u30f3\u30d7\u30eb \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306f\u3001Teradata Vantage \u304b\u3089\u751f\u30c7\u30fc\u30bf\u3092\u53d6\u5f97\u3057\u3001dbt \u3092\u4f7f\u7528\u3057\u3066\u6a5f\u80fd\u3092\u751f\u6210\u3057\u307e\u3059\u3002\u6b21\u306b\u3001\u30e2\u30c7\u30eb\u306e\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0 \u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u3092\u751f\u6210\u3059\u308b\u305f\u3081\u306e\u30d9\u30fc\u30b9\u3068\u306a\u308b\u6a5f\u80fd\u306e\u30e1\u30bf\u30c7\u30fc\u30bf\u304c FEAST \u3092\u4f7f\u7528\u3057\u3066\u4f5c\u6210\u3055\u308c\u3001\u6a5f\u80fd\u30b9\u30c8\u30a2\u3092\u4f5c\u6210\u3059\u308b\u3059\u3079\u3066\u306e\u5bfe\u5fdc\u3059\u308b\u30c6\u30fc\u30d6\u30eb\u3082\u3001\u5b9f\u884c\u6642\u306b\u540c\u3058\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u5185\u3067\u751f\u6210\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,n.jsx)(a.h2,{id:"\u3055\u3089\u306b\u8a73\u3057\u304f",children:"\u3055\u3089\u306b\u8a73\u3057\u304f"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"https://docs.getdbt.com/docs",children:"dbt \u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"https://github.com/Teradata/dbt-teradata",children:"dbt-teradata \u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"https://docs.feast.dev/tutorials/using-scalable-registry",children:"Feast \u306e\u306e\u30b9\u30b1\u30fc\u30e9\u30d6\u30eb\u306a\u30ec\u30b8\u30b9\u30c8\u30eaScalable Registry"})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"https://medium.com/teradata/enabling-highly-scalable-feature-store-with-teradata-vantage-and-feast-e01008fa8fdb",children:"Teradata Vantage \u3068 FEAST \u3067\u62e1\u5f35\u6027\u306e\u9ad8\u3044\u6a5f\u80fd\u30b9\u30c8\u30a2\u3092\u5b9f\u73fe\u3059\u308b \uff08\u82f1\u8a9e\uff09"})}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"https://github.com/Teradata/tdata-pipeline",children:"Git\u30ea\u30dd\u30b8\u30c8\u30ea"})," \u3053\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u305f\u3081\u306b\u3002"]}),"\n"]})]})}function p(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},71030:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/dbt3-571e225d561ce80e5d8939e0710ac6f6.svg"},31247:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/dbt-feast-a4bbee0571452a7dd3a8ce22b101ef8f.png"},28453:(e,a,t)=>{t.d(a,{R:()=>r,x:()=>i});var n=t(96540);const s={},d=n.createContext(s);function r(e){const a=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(d.Provider,{value:a},e.children)}}}]);