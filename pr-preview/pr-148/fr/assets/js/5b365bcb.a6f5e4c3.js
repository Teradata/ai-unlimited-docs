"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[2251],{95347:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>t,metadata:()=>l,toc:()=>u});var n=i(74848),s=i(28453);const t={id:"azure-account-requirements",title:"Exigences relatives au compte Azure",description:"Comment pr\xe9parer votre compte Azure pour l'installation d'AI Unlimited",sidebar_label:"Exigences relatives au compte Azure",sidebar_position:2,pagination_prev:null,pagination_next:null},a="Exigences relatives au compte Azure",l={id:"resources/azure-account-requirements",title:"Exigences relatives au compte Azure",description:"Comment pr\xe9parer votre compte Azure pour l'installation d'AI Unlimited",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/resources/azure-requirements.md",sourceDirName:"resources",slug:"/resources/azure-account-requirements",permalink:"/pr-preview/pr-148/fr/ai-unlimited/resources/azure-account-requirements",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"azure-account-requirements",title:"Exigences relatives au compte Azure",description:"Comment pr\xe9parer votre compte Azure pour l'installation d'AI Unlimited",sidebar_label:"Exigences relatives au compte Azure",sidebar_position:2,pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},o={},u=[{value:"Pr\xe9parez votre compte Azure",id:"pr\xe9parez-votre-compte-azure",level:2},{value:"Cr\xe9er le r\xf4le du gestionnaire",id:"cr\xe9er-le-r\xf4le-du-gestionnaire",level:2}];function c(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"exigences-relatives-au-compte-azure",children:"Exigences relatives au compte Azure"}),"\n",(0,n.jsxs)(r.p,{children:["Tout d'abord, assurez-vous que vous disposez des ",(0,n.jsx)(r.a,{href:"/pr-preview/pr-148/fr/ai-unlimited/install-ai-unlimited/#prerequisites",children:"pr\xe9requis"}),"."]}),"\n",(0,n.jsx)(r.p,{children:"Ensuite, avant d'installer AI Unlimited, traitez ces \xe9l\xe9ments Azure."}),"\n",(0,n.jsx)(r.h2,{id:"pr\xe9parez-votre-compte-azure",children:"Pr\xe9parez votre compte Azure"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["Travaillez avec votre administrateur cloud pour vous assurer que votre compte Azure dispose des autorisations pour cr\xe9er les ressources cloud d\xe9finies dans le ",(0,n.jsx)(r.a,{href:"https://github.com/Teradata/ai-unlimited/tree/develop/deployments/azure/templates/arm/ai-unlimited",children:"mod\xe8le AI Unlimited"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["Exigences relatives \xe0 la mise en r\xe9seau\xa0: votre ",(0,n.jsx)(r.a,{href:"https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal",children:"groupe de ressources"})," Azure doit disposer d'un ",(0,n.jsx)(r.a,{href:"https://learn.microsoft.com/en-us/azure/virtual-network/quick-create-portal",children:"Azure Virtual Network (VNet)"})," configur\xe9 avec un ",(0,n.jsx)(r.a,{href:"https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-manage-subnet?tabs=azure-portal",children:"sous-r\xe9seau"}),". Utilisez un r\xe9seau virtuel ou un sous-r\xe9seau existant, ou cr\xe9ez le v\xf4tre, en fonction des autorisations de votre compte."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["Si vous devez acc\xe9der \xe0 l'instance du gestionnaire pour ex\xe9cuter des commandes ou d\xe9boguer, vous pouvez utiliser une ",(0,n.jsx)(r.a,{href:"https://learn.microsoft.com/en-us/azure/virtual-machines/ssh-keys-portal",children:"paire de cl\xe9s"})," pour vous connecter en toute s\xe9curit\xe9 \xe0 l'aide de Secure Shell (SSH). Vous aurez besoin de la paire de cl\xe9s lorsque vous ",(0,n.jsx)(r.a,{href:"/pr-preview/pr-148/fr/ai-unlimited/install-ai-unlimited/deploy-manager-azure-portal#specify-instance-details",children:"sp\xe9cifiez les d\xe9tails de l'instance"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"cr\xe9er-le-r\xf4le-du-gestionnaire",children:"Cr\xe9er le r\xf4le du gestionnaire"}),"\n",(0,n.jsx)(r.p,{children:"Le gestionnaire a besoin d'un r\xf4le qui lui permette d'effectuer les t\xe2ches suivantes\xa0:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"D\xe9ployez le moteur."}),"\n",(0,n.jsx)(r.li,{children:"Cr\xe9ez un r\xf4le pour le moteur (\xe0 chaque fois qu'il d\xe9ploie le moteur) qui permet aux n\u0153uds du moteur de communiquer."}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["Le dossier ",(0,n.jsx)(r.code,{children:"deployments"})," dans le ",(0,n.jsx)(r.a,{href:"https://github.com/Teradata/ai-unlimited",children:"r\xe9f\xe9rentiel GitHub d'AI Unlimited"})," fourni par Teradata inclut un mod\xe8le ARM de r\xf4le de gestionnaire et un exemple de strat\xe9gie."]}),"\n",(0,n.jsx)(r.p,{children:"Ouvrez une fen\xeatre de terminal et clonez le r\xe9f\xe9rentiel."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"git clone https://github.com/Teradata/ai-unlimited\n"})}),"\n",(0,n.jsx)(r.p,{children:"Ou utilisez les liens qui suivent pour t\xe9l\xe9charger ce dont vous avez besoin."}),"\n",(0,n.jsx)(r.p,{children:"Cr\xe9er le r\xf4le\xa0:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["Si vous disposez des autorisations n\xe9cessaires pour cr\xe9er des r\xf4les, cr\xe9ez le r\xf4le du responsable \xe0 l'aide du mod\xe8le ARM ",(0,n.jsx)(r.a,{href:"https://github.com/Teradata/ai-unlimited/tree/develop/deployments/azure/templates/arm/init/role-policy.json",children:"role-policy"}),". Consultez ",(0,n.jsx)(r.a,{href:"https://learn.microsoft.com/en-us/azure/role-based-access-control/custom-roles-template",children:"Cr\xe9er ou mettre \xe0 jour des r\xf4les personnalis\xe9s Azure \xe0 l'aide d'un mod\xe8le ARM"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["Ou partagez la strat\xe9gie ",(0,n.jsx)(r.a,{href:"https://github.com/Teradata/ai-unlimited/blob/develop/deployments/azure/policies/ai-unlimited.json",children:"ai-unlimited.json"}),", qui contient les autorisations dont le gestionnaire a besoin, avec votre administrateur cloud afin qu'il puisse cr\xe9er le r\xf4le pour vous."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["Vous aurez besoin de ",(0,n.jsx)(r.code,{children:"RoleDefinitionId"})," lorsque vous ",(0,n.jsx)(r.a,{href:"/pr-preview/pr-148/fr/ai-unlimited/install-ai-unlimited/deploy-manager-azure-portal#specify-instance-details",children:"sp\xe9cifiez les d\xe9tails de l'instance"}),"."]})]})}function d(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,r,i)=>{i.d(r,{R:()=>a,x:()=>l});var n=i(96540);const s={},t=n.createContext(s);function a(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);