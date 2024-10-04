"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[6088],{64959:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var t=r(74848),a=r(28453),i=r(56240),u=r(19365);const s={id:"docker-when-you're-done",title:"Schnellstart | Wenn Sie fertig sind",description:"Erfahren Sie, was zu tun ist, wenn Sie mit der Verwendung des Schnellstarts fertig sind.",sidebar_label:"Wenn Sie fertig sind",sidebar_position:7,pagination_prev:null,pagination_next:null},l="Wenn Sie fertig sind",o={id:"resources/quickstart/docker-when-you're-done",title:"Schnellstart | Wenn Sie fertig sind",description:"Erfahren Sie, was zu tun ist, wenn Sie mit der Verwendung des Schnellstarts fertig sind.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/resources/quickstart/docker-when-you-are-done.md",sourceDirName:"resources/quickstart",slug:"/resources/quickstart/docker-when-you're-done",permalink:"/pr-preview/pr-148/de/ai-unlimited/resources/quickstart/docker-when-you're-done",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"docker-when-you're-done",title:"Schnellstart | Wenn Sie fertig sind",description:"Erfahren Sie, was zu tun ist, wenn Sie mit der Verwendung des Schnellstarts fertig sind.",sidebar_label:"Wenn Sie fertig sind",sidebar_position:7,pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},c={},d=[];function f(e){const n={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"wenn-sie-fertig-sind",children:"Wenn Sie fertig sind"}),"\n",(0,t.jsxs)(n.p,{children:["Um Kosten f\xfcr nicht ben\xf6tigte Engine-Ressourcen zu vermeiden, ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-148/de/ai-unlimited/manage-ai-unlimited/suspend-and-restore-project",children:"halten Sie Projekte an"}),", wenn Sie diese gerade nicht bearbeiten. Sie k\xf6nnen sie jederzeit wiederherstellen."]}),"\n",(0,t.jsx)(n.p,{children:"Wenn Sie mit dem Schnellstart fertig sind und Ressourcen auf Ihrem Computer freigeben m\xf6chten, f\xfchren Sie diesen Befehl aus, um alle erstellten Container und Netzwerke zu stoppen und zu entfernen."}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(u.A,{value:"aws",label:"AWS",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker-compose -f ai-unlimited.yaml -f aws-credentials-env-vars.yaml -f jupyter.yaml down\n"})})}),(0,t.jsx)(u.A,{value:"azure",label:"Azure",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker-compose -f ai-unlimited.yaml -f azure-credentials-env-vars.yaml -f jupyter.yaml down\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"Sie k\xf6nnen auch alle lokalen Verzeichnisse oder Dateien entfernen, die Engine-Daten enthalten, die Sie in den Docker-Containern gemountet haben."})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>u});r(96540);var t=r(34164);const a={tabItem:"tabItem_Ymn6"};var i=r(74848);function u(e){var n=e.children,r=e.hidden,u=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,u),hidden:r,children:n})}},56240:(e,n,r)=>{r.d(n,{A:()=>y});var t=r(96540),a=r(34164),i=r(23104),u=r(56347),s=r(205),l=r(57485);var o=r(89466);function c(e){var n,r;return null!=(n=null==(r=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}function d(e){var n=e.values,r=e.children;return(0,t.useMemo)((function(){var e=null!=n?n:function(e){return c(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(r);return function(e){var n,r,t=(void 0===(r=function(e,n){return e.value===n.value})&&(r=function(e,n){return e===n}),(n=e).filter((function(e,t){return n.findIndex((function(n){return r(n,e)}))!==t})));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function f(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function h(e){var n=e.queryString,r=void 0!==n&&n,a=e.groupId,i=(0,u.W6)(),s=function(e){var n=e.queryString,r=void 0!==n&&n,t=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:r,groupId:a});return[(0,l.aZ)(s),(0,t.useCallback)((function(e){if(s){var n=new URLSearchParams(i.location.search);n.set(s,e),i.replace(Object.assign({},i.location,{search:n.toString()}))}}),[s,i])]}function p(e){var n,r,a,i,u=e.defaultValue,l=e.queryString,c=void 0!==l&&l,p=e.groupId,m=d(e),v=(0,t.useState)((function(){return function(e){var n,r=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!f({value:r,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(n=t.find((function(e){return e.default})))?n:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:u,tabValues:m})})),b=v[0],g=v[1],w=h({queryString:c,groupId:p}),S=w[0],y=w[1],x=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:p}.groupId),r=(0,o.Dv)(n),a=r[0],i=r[1],[a,(0,t.useCallback)((function(e){n&&i.set(e)}),[n,i])]),j=x[0],k=x[1],V=function(){var e=null!=S?S:j;return f({value:e,tabValues:m})?e:null}();return(0,s.A)((function(){V&&g(V)}),[V]),{selectedValue:b,selectValue:(0,t.useCallback)((function(e){if(!f({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);g(e),y(e),k(e)}),[y,k,m]),tabValues:m}}var m=r(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(74848);function g(e){var n=e.className,r=e.block,t=e.selectedValue,u=e.selectValue,s=e.tabValues,l=[],o=(0,i.a_)().blockElementScrollPositionUntilNextRender,c=function(e){var n=e.currentTarget,r=l.indexOf(n),a=s[r].value;a!==t&&(o(n),u(a))},d=function(e){var n,r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var t,a=l.indexOf(e.currentTarget)+1;r=null!=(t=l[a])?t:l[0];break;case"ArrowLeft":var i,u=l.indexOf(e.currentTarget)-1;r=null!=(i=l[u])?i:l[l.length-1]}null==(n=r)||n.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:s.map((function(e){var n=e.value,r=e.label,i=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:function(e){return l.push(e)},onKeyDown:d,onClick:c},i,{className:(0,a.A)("tabs__item",v.tabItem,null==i?void 0:i.className,{"tabs__item--active":t===n}),children:null!=r?r:n}),n)}))})}function w(e){var n=e.lazy,r=e.children,a=e.selectedValue,i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){var u=i.find((function(e){return e.props.value===a}));return u?(0,t.cloneElement)(u,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map((function(e,n){return(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function S(e){var n=p(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,b.jsx)(g,Object.assign({},e,n)),(0,b.jsx)(w,Object.assign({},e,n))]})}function y(e){var n=(0,m.A)();return(0,b.jsx)(S,Object.assign({},e,{children:c(e.children)}),String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>u,x:()=>s});var t=r(96540);const a={},i=t.createContext(a);function u(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:u(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);