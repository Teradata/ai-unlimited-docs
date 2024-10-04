"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[3197],{30971:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var i=r(74848),t=r(28453),a=r(56240),l=r(19365);const s={id:"create-first-project",title:"Erstellen Sie Ihr erstes Projekt",description:"F\xfchren Sie einen einfachen Workflow von einem Jupyter-Notebook aus aus.",sidebar_label:"Erstellen Sie Ihr erstes Projekt",sidebar_position:2,pagination_prev:null,pagination_next:null},d="Erstellen Sie Ihr erstes Projekt",o={id:"explore-and-analyze-data/create-first-project",title:"Erstellen Sie Ihr erstes Projekt",description:"F\xfchren Sie einen einfachen Workflow von einem Jupyter-Notebook aus aus.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/explore-and-analyze-data/create-first-project.md",sourceDirName:"explore-and-analyze-data",slug:"/explore-and-analyze-data/create-first-project",permalink:"/pr-preview/pr-149/de/ai-unlimited/explore-and-analyze-data/create-first-project",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"create-first-project",title:"Erstellen Sie Ihr erstes Projekt",description:"F\xfchren Sie einen einfachen Workflow von einem Jupyter-Notebook aus aus.",sidebar_label:"Erstellen Sie Ihr erstes Projekt",sidebar_position:2,pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},c={},u=[{value:"Bevor Sie beginnen",id:"bevor-sie-beginnen",level:2},{value:"Verbinden und Ausf\xfchren Ihrer ersten Workload",id:"verbinden-und-ausf\xfchren-ihrer-ersten-workload",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"erstellen-sie-ihr-erstes-projekt",children:"Erstellen Sie Ihr erstes Projekt"}),"\n",(0,i.jsx)(n.p,{children:"Ein Projekt ist ein Mittel zum Erkunden und Analysieren von Daten aus einem Jupyter-Notebook."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Jedes Projekt hat ein Git-Repository. ",(0,i.jsx)(n.a,{href:"/pr-preview/pr-149/de/ai-unlimited/glossary#project-repository",children:"Erfahren Sie warum"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:"F\xfcr Ihr erstes Projekt f\xfchren Sie mithilfe der von uns bereitgestellten Daten diesen einfachen Arbeitsablauf durch:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Erstellen des Projekts"}),"\n",(0,i.jsx)(n.li,{children:"Bereitstellen der Engine"}),"\n",(0,i.jsx)(n.li,{children:"Herstellen einer Verbindung zu den Daten und Ausf\xfchren einer Workload"}),"\n",(0,i.jsx)(n.li,{children:"Anhalten der Engine"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"bevor-sie-beginnen",children:"Bevor Sie beginnen"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Ihr AI Unlimited-Administrator ist die Person in Ihrer Organisation, die AI Unlimited eingerichtet hat. Erhalten Sie von Ihrem Administrator diese Elemente:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Die IP-Adresse oder der Hostname des ",(0,i.jsx)(n.a,{href:"/pr-preview/pr-149/de/ai-unlimited/glossary#ai-unlimited-manager",children:"AI Unlimited-Manager"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Diese Umgebungsvariablen:"}),"\n",(0,i.jsxs)(a.A,{children:[(0,i.jsx)(l.A,{value:"aws",label:"AWS",default:!0,children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"AWS_ACCESS_KEY_ID"}),", ",(0,i.jsx)(n.code,{children:"AWS_SECRET_ACCESS_KEY"})," und ",(0,i.jsx)(n.code,{children:"AWS_SESSION_TOKEN"})]})}),(0,i.jsx)(l.A,{value:"azure",label:"Azure",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ARM_SUBSCRIPTION_ID"}),", ",(0,i.jsx)(n.code,{children:"ARM_CLIENT_ID"})," und ",(0,i.jsx)(n.code,{children:"ARM_CLIENT_SECRET"})]})})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Aus Ihrem Profil, ",(0,i.jsx)(n.a,{href:"/pr-preview/pr-149/de/ai-unlimited/explore-and-analyze-data/get-api-key",children:"holen Sie sich Ihren API-Schl\xfcssel"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Zum Ausf\xfchren der Beispiel-Workload ben\xf6tigen Sie die Datei ",(0,i.jsx)(n.code,{children:"salescenter.csv"}),". Laden Sie die Datei von ",(0,i.jsx)(n.a,{href:"https://github.com/Teradata/ai-unlimited/tree/develop/examples/GetStarted/data",children:"AI Unlimited GitHub-Repository"})," herunter und laden Sie sie in Ihren Amazon Simple Storage Service (S3)- oder Azure Blob Storage-Speicherort hoch. Oder \xe4ndern Sie das Beispiel entsprechend, wenn Sie eine eigene Datei verwenden."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"verbinden-und-ausf\xfchren-ihrer-ersten-workload",children:"Verbinden und Ausf\xfchren Ihrer ersten Workload"}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:["F\xfchren Sie ",(0,i.jsx)(n.code,{children:"%help"})," aus, um Einzelheiten zu allen in Ihrem Notebook verf\xfcgbaren magischen Befehlen zu erhalten. F\xfchren Sie ",(0,i.jsx)(n.code,{children:"%help <command>"})," aus, um Einzelheiten zu einem davon zu erhalten."]}),(0,i.jsxs)(n.p,{children:["Oder erfahren Sie mehr \xfcber die ",(0,i.jsx)(n.a,{href:"/pr-preview/pr-149/de/ai-unlimited/explore-and-analyze-data/magic-commands",children:"magische Befehle"})," speziell f\xfcr AI Unlimited."]})]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Stellen Sie eine Verbindung zu JupyterLab her, \xf6ffnen Sie ein Notebook und w\xe4hlen Sie den AI Unlimited-Kernel aus."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Stellen Sie eine Verbindung zum Manager her."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"%workspaces_config host=<ip_or_hostname>, apikey=<API_Key>, withtls=T \t\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Erstellen Sie das Projekt."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"%project_create project=<Project_Name>, env=<Cloud_Service_Provider>\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Erstellen Sie eine Objektspeicherautorisierung zum Speichern der Anmeldeinformationen des Cloud-Dienstanbieters."}),"\n",(0,i.jsxs)(n.p,{children:["Ersetzen Sie ",(0,i.jsx)(n.code,{children:"ACCESS_KEY_ID"}),", ",(0,i.jsx)(n.code,{children:"SECRET_ACCESS_KEY"})," und ",(0,i.jsx)(n.code,{children:"REGION"})," durch Ihre Werte."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"%project_auth_create name=<Authorization_Name>, project=<Project_Name>, key=<ACCESS_KEY_ID>, secret=<SECRET_ACCESS_KEY>, region=<REGION>\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Stellen Sie die Engine bereit."}),"\n",(0,i.jsxs)(n.p,{children:["Die Gr\xf6\xdfe kann klein, mittel, gro\xdf oder extragro\xdf sein. Die Standardeinstellung ist klein. Siehe Preisinformationen von ",(0,i.jsx)(n.a,{href:"http://aws.amazon.com/marketplace/pp/prodview-2srvuo3mwqlig",children:"AWS"})," oder ",(0,i.jsx)(n.a,{href:"https://azuremarketplace.microsoft.com/en-us/marketplace/apps/teradata.ai-unlimited?tab=Overview",children:"Azure"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"%project_engine_deploy name=<Project_Name>, size=<Size_of_Engine>\n"})}),"\n",(0,i.jsx)(n.p,{children:"Der Bereitstellungsvorgang dauert einige Minuten. Dabei wird ein Passwort generiert."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Stellen Sie eine Verbindung zum Projekt her."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"%connect <Project_Name>\n"})}),"\n",(0,i.jsx)(n.p,{children:"Geben Sie das generierte Passwort ein, wenn die Verbindung hergestellt ist."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"F\xfchren Sie die Beispielarbeitslast aus."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Stellen Sie sicher, dass in der ausgew\xe4hlten Datenbank keine Tabellen mit dem Namen SalesCenter oder SalesDemo vorhanden sind. Ersetzen Sie ",(0,i.jsx)(n.code,{children:"Authorization_Name"})," und die ",(0,i.jsx)(n.code,{children:"salescenter.csv_file_location"}),"-Werte im folgenden Beispiel durch Ihre eigenen Werte."]})}),"\n",(0,i.jsx)(n.p,{children:"a. Erstellen Sie eine Tabelle zum Speichern der Verkaufszentrumdaten."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"DROP FOREIGN TABLE SalesCenter;\n\nCREATE MULTISET FOREIGN TABLE SalesCenter ,\nEXTERNAL SECURITY DEFINER TRUSTED <Authorization_Name>\n(\n    Sales_Center_id INTEGER NOT NULL,\n    Sales_Center_Name VARCHAR(255) CHARACTER SET LATIN NOT CASESPECIFIC\n)\nUSING\n(\n    LOCATION ('<salescenter.csv_file_location>')\n    MANIFEST ('FALSE')\n    ROWFORMAT  ('{\"field_delimiter\":\",\",\"record_delimiter\":\"\\n\",\"character_set\":\"LATIN\"}')\n    STOREDAS ('TEXTFILE')\n    HEADER ('TRUE')\n    STRIP_EXTERIOR_SPACES ('FALSE')\n    STRIP_ENCLOSING_CHAR ('NONE')\n)\nNO PRIMARY INDEX;\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"b. \xdcberpr\xfcfen Sie, ob die Daten eingef\xfcgt wurden."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SalesCenter ORDER BY 1\n"})}),"\n",(0,i.jsx)(n.p,{children:"c. Erstellen Sie eine Tabelle mit den Verkaufsdemodaten."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'DROP FOREIGN TABLE SalesDemo;\nCREATE MULTISET FOREIGN TABLE SalesDemo ,\nEXTERNAL SECURITY DEFINER TRUSTED <Authorization_Name>\n(\n    Sales_Center_ID INTEGER NOT NULL,\n    UNITS DECIMAL(15,4),\n    SALES DECIMAL(15,2),\n    "COST" DECIMAL(15,2)\n)\nUSING\n(\n   LOCATION (\'<salescenter.csv_file_location>\')\n   MANIFEST (\'FALSE\')\n   ROWFORMAT  (\'{"field_delimiter":",","record_delimiter":"\\n","character_set":"LATIN"}\')\n   STOREDAS (\'TEXTFILE\')\n   HEADER (\'FALSE\')\n   STRIP_EXTERIOR_SPACES (\'FALSE\')\n   STRIP_ENCLOSING_CHAR (\'"\')\n)\nNO PRIMARY INDEX;\n'})}),"\n",(0,i.jsx)(n.p,{children:"d. \xdcberpr\xfcfen Sie, ob die Verkaufsdemodaten erfolgreich eingef\xfcgt wurden."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SalesDemo ORDER BY sales\n"})}),"\n",(0,i.jsx)(n.p,{children:"\xd6ffnen Sie den Navigator f\xfcr Ihre Verbindung und \xfcberpr\xfcfen Sie, ob die Tabellen erstellt wurden. F\xfchren Sie eine Zeilenz\xe4hlung f\xfcr die Tabellen durch, um zu \xfcberpr\xfcfen, ob die Daten geladen wurden."}),"\n",(0,i.jsx)(n.p,{children:"e. Stellen Sie die Daten in einem Diagramm dar, um das Ergebnis zu visualisieren."}),"\n",(0,i.jsx)(n.p,{children:"Geben Sie die X- und Y-Achsen f\xfcr Ihr Diagramm an."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"%chart sales_center_name, sales, title=Sales Data\n"})}),"\n",(0,i.jsx)(n.p,{children:"f.\tL\xf6schen Sie die Tabellen."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"DROP TABLE SalesCenter;\nDROP TABLE SalesDemo;\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Sichern Sie Ihre Projektmetadaten und Objektdefinitionen (das Schema) in Ihrem Git-Repository."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"%project_backup project=<Project_Name>\n"})}),"\n",(0,i.jsx)(n.p,{children:"Dadurch wird Ihr Projekt gesichert, die Engine wird jedoch nicht angehalten."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Unterbrechen Sie die Nutzung der Engine, um die Zahlung f\xfcr nicht ben\xf6tigte Engine-Ressourcen zu vermeiden."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"%project_engine_suspend project=<Project_Name>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Dadurch wird Ihr Projekt gesichert und die Engine angehalten. Normalerweise verwenden Sie ",(0,i.jsx)(n.code,{children:"%project_backup"})," nicht unmittelbar gefolgt von ",(0,i.jsx)(n.code,{children:"%project_engine_suspend"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Herzlichen Gl\xfcckwunsch! Sie haben Ihre erste Arbeitslast ausgef\xfchrt."})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>l});r(96540);var i=r(34164);const t={tabItem:"tabItem_Ymn6"};var a=r(74848);function l(e){var n=e.children,r=e.hidden,l=e.className;return(0,a.jsx)("div",{role:"tabpanel",className:(0,i.A)(t.tabItem,l),hidden:r,children:n})}},56240:(e,n,r)=>{r.d(n,{A:()=>E});var i=r(96540),t=r(34164),a=r(23104),l=r(56347),s=r(205),d=r(57485);var o=r(89466);function c(e){var n,r;return null!=(n=null==(r=i.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,i.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}function u(e){var n=e.values,r=e.children;return(0,i.useMemo)((function(){var e=null!=n?n:function(e){return c(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(r);return function(e){var n,r,i=(void 0===(r=function(e,n){return e.value===n.value})&&(r=function(e,n){return e===n}),(n=e).filter((function(e,i){return n.findIndex((function(n){return r(n,e)}))!==i})));if(i.length>0)throw new Error('Docusaurus error: Duplicate values "'+i.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function h(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function p(e){var n=e.queryString,r=void 0!==n&&n,t=e.groupId,a=(0,l.W6)(),s=function(e){var n=e.queryString,r=void 0!==n&&n,i=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=i?i:null}({queryString:r,groupId:t});return[(0,d.aZ)(s),(0,i.useCallback)((function(e){if(s){var n=new URLSearchParams(a.location.search);n.set(s,e),a.replace(Object.assign({},a.location,{search:n.toString()}))}}),[s,a])]}function m(e){var n,r,t,a,l=e.defaultValue,d=e.queryString,c=void 0!==d&&d,m=e.groupId,j=u(e),f=(0,i.useState)((function(){return function(e){var n,r=e.defaultValue,i=e.tabValues;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:i}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+i.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var t=null!=(n=i.find((function(e){return e.default})))?n:i[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:l,tabValues:j})})),S=f[0],b=f[1],x=p({queryString:c,groupId:m}),g=x[0],E=x[1],v=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:m}.groupId),r=(0,o.Dv)(n),t=r[0],a=r[1],[t,(0,i.useCallback)((function(e){n&&a.set(e)}),[n,a])]),I=v[0],A=v[1],_=function(){var e=null!=g?g:I;return h({value:e,tabValues:j})?e:null}();return(0,s.A)((function(){_&&b(_)}),[_]),{selectedValue:S,selectValue:(0,i.useCallback)((function(e){if(!h({value:e,tabValues:j}))throw new Error("Can't select invalid tab value="+e);b(e),E(e),A(e)}),[E,A,j]),tabValues:j}}var j=r(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var S=r(74848);function b(e){var n=e.className,r=e.block,i=e.selectedValue,l=e.selectValue,s=e.tabValues,d=[],o=(0,a.a_)().blockElementScrollPositionUntilNextRender,c=function(e){var n=e.currentTarget,r=d.indexOf(n),t=s[r].value;t!==i&&(o(n),l(t))},u=function(e){var n,r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var i,t=d.indexOf(e.currentTarget)+1;r=null!=(i=d[t])?i:d[0];break;case"ArrowLeft":var a,l=d.indexOf(e.currentTarget)-1;r=null!=(a=d[l])?a:d[d.length-1]}null==(n=r)||n.focus()};return(0,S.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},n),children:s.map((function(e){var n=e.value,r=e.label,a=e.attributes;return(0,S.jsx)("li",Object.assign({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:function(e){return d.push(e)},onKeyDown:u,onClick:c},a,{className:(0,t.A)("tabs__item",f.tabItem,null==a?void 0:a.className,{"tabs__item--active":i===n}),children:null!=r?r:n}),n)}))})}function x(e){var n=e.lazy,r=e.children,t=e.selectedValue,a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){var l=a.find((function(e){return e.props.value===t}));return l?(0,i.cloneElement)(l,{className:"margin-top--md"}):null}return(0,S.jsx)("div",{className:"margin-top--md",children:a.map((function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==t})}))})}function g(e){var n=m(e);return(0,S.jsxs)("div",{className:(0,t.A)("tabs-container",f.tabList),children:[(0,S.jsx)(b,Object.assign({},e,n)),(0,S.jsx)(x,Object.assign({},e,n))]})}function E(e){var n=(0,j.A)();return(0,S.jsx)(g,Object.assign({},e,{children:c(e.children)}),String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>s});var i=r(96540);const t={},a=i.createContext(t);function l(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);