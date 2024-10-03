"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[9269],{70885:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>t,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=i(74848),r=i(28453);const s={id:"aws-account-requirements",title:"Requisitos de la cuenta de AWS",description:"C\xf3mo preparar su cuenta de AWS para la instalaci\xf3n de AI Unlimited",sidebar_label:"Requisitos de la cuenta de AWS",sidebar_position:1,pagination_prev:null,pagination_next:null},l="Requisitos de la cuenta de AWS",o={id:"resources/aws-account-requirements",title:"Requisitos de la cuenta de AWS",description:"C\xf3mo preparar su cuenta de AWS para la instalaci\xf3n de AI Unlimited",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/resources/aws-requirements.md",sourceDirName:"resources",slug:"/resources/aws-account-requirements",permalink:"/pr-preview/pr-145/es/ai-unlimited/resources/aws-account-requirements",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"aws-account-requirements",title:"Requisitos de la cuenta de AWS",description:"C\xf3mo preparar su cuenta de AWS para la instalaci\xf3n de AI Unlimited",sidebar_label:"Requisitos de la cuenta de AWS",sidebar_position:1,pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},t={},d=[{value:"Prepare su cuenta de AWS",id:"prepare-su-cuenta-de-aws",level:2},{value:"Permitir que AI Unlimited cree roles",id:"permitir-que-ai-unlimited-cree-roles",level:2},{value:"Rol para el administrador",id:"rol-para-el-administrador",level:3},{value:"Rol para el motor",id:"rol-para-el-motor",level:3},{value:"Proporcionar roles creados por su organizaci\xf3n",id:"proporcionar-roles-creados-por-su-organizaci\xf3n",level:2},{value:"Rol para el administrador",id:"rol-para-el-administrador-1",level:3},{value:"Muestras de JSON",id:"muestras-de-json",level:4},{value:"Rol para el motor",id:"rol-para-el-motor-1",level:3}];function c(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"requisitos-de-la-cuenta-de-aws",children:"Requisitos de la cuenta de AWS"}),"\n",(0,n.jsxs)(a.p,{children:["Primero, aseg\xfarese de cumplir los ",(0,n.jsx)(a.a,{href:"/pr-preview/pr-145/es/ai-unlimited/install-ai-unlimited/#prerequisites",children:"requisitos previos"}),"."]}),"\n",(0,n.jsx)(a.p,{children:"Luego, antes de instalar AI Unlimited, aborde estos elementos de AWS."}),"\n",(0,n.jsx)(a.h2,{id:"prepare-su-cuenta-de-aws",children:"Prepare su cuenta de AWS"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["Trabaje con su administrador de la nube para asegurarse de tener los permisos de ",(0,n.jsx)(a.a,{href:"https://aws.amazon.com/iam/",children:"IAM"})," para crear los recursos de la nube definidos en la ",(0,n.jsx)(a.a,{href:"https://github.com/Teradata/ai-unlimited/tree/develop/deployments/aws/templates/ai-unlimited",children:"plantilla de AI Unlimited"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["Si necesita acceder a la instancia del administrador para ejecutar comandos o depurar, puede conectarse a ella de una de estas maneras:\n- Utilice un ",(0,n.jsx)(a.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html",children:"par de claves"})," para conectarse de forma segura mediante Secure Shell (SSH). Necesitar\xe1 el par de claves cuando ",(0,n.jsx)(a.a,{href:"/pr-preview/pr-145/es/ai-unlimited/install-ai-unlimited/deploy-manager-aws-console#specify-stack-details-and-options",children:"especifique los detalles de la pila"}),".\n- Utilice AWS Session Manager para conectarse. Para habilitarlo, adjunte la pol\xedtica ",(0,n.jsx)(a.a,{href:"https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/session-manager.json",children:"session-manager.json"})," a un ",(0,n.jsx)(a.a,{href:"#provide-roles-created-by-your-organization",children:"rol que usted proporcione"})," al administrador."]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["Si planea utilizar un ",(0,n.jsx)(a.a,{href:"https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancer-getting-started.html",children:"Application Load Balancer (ALB)"})," o un ",(0,n.jsx)(a.a,{href:"https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancer-getting-started.html",children:"Network Load Balancer (NLB)"}),", aseg\xfarese de tener permiso para administrar estos servicios de AWS:\n- ",(0,n.jsx)(a.a,{href:"https://docs.aws.amazon.com/acm/",children:"AWS Certificate Manager"}),"\u2014para emitir un nuevo certificado para la ID de zona alojada en Route 53.\n- ",(0,n.jsx)(a.a,{href:"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html",children:"AWS Route 53"}),"\u2014para configurar un nombre de dominio personalizado y enrutar consultas DNS a su equilibrador de carga."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"permitir-que-ai-unlimited-cree-roles",children:"Permitir que AI Unlimited cree roles"}),"\n",(0,n.jsx)(a.p,{children:"El administrador necesita un rol que le permita implementar el motor. El motor necesita un rol que permita que los nodos del motor se comuniquen. Puede permitir que AI Unlimited cree ambos roles."}),"\n",(0,n.jsx)(a.admonition,{type:"note",children:(0,n.jsxs)(a.p,{children:["Si su seguridad no permite que AI Unlimited cree roles, ",(0,n.jsx)(a.a,{href:"#provide-roles-created-by-your-organization",children:"cree los roles"})," usted mismo o con la ayuda de su administrador de la nube."]})}),"\n",(0,n.jsx)(a.h3,{id:"rol-para-el-administrador",children:"Rol para el administrador"}),"\n",(0,n.jsxs)(a.p,{children:["Para permitir que AI Unlimited cree este rol para usted, cuando ",(0,n.jsx)(a.a,{href:"/pr-preview/pr-145/es/ai-unlimited/install-ai-unlimited/deploy-manager-aws-console#specify-stack-details-and-options",children:"especifique los detalles de la pila"}),", proporcione estos valores para estos par\xe1metros:\n- ",(0,n.jsx)(a.code,{children:"IamRole"}),": ",(0,n.jsx)(a.strong,{children:"Nuevo"}),"\n- ",(0,n.jsx)(a.code,{children:"IamRoleName"}),": dejar en blanco"]}),"\n",(0,n.jsx)(a.h3,{id:"rol-para-el-motor",children:"Rol para el motor"}),"\n",(0,n.jsx)(a.p,{children:"AI Unlimited puede crear un nuevo rol para el motor cada vez que se implementa el motor."}),"\n",(0,n.jsx)(a.p,{children:"Las pol\xedticas espec\xedficas del motor que crea AI Unlimited est\xe1n restringidas de esta manera:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:'"Resource": ["arn:aws:secretsmanager:`REGION`:`ACCOUNT_ID`:secret:compute-engine/`CLUSTER_NAME`/`SECRET_NAME`"]\n'})}),"\n",(0,n.jsxs)(a.p,{children:["Para permitir que AI Unlimited cree un nuevo rol cada vez que se implemente el motor, cuando configure la ",(0,n.jsx)(a.a,{href:"/pr-preview/pr-145/es/ai-unlimited/install-ai-unlimited/setup-ai-unlimited",children:"integraci\xf3n en la nube"})," en la configuraci\xf3n de AI Unlimited, deje el campo ",(0,n.jsx)(a.strong,{children:"Rol de IAM predeterminado"})," en blanco."]}),"\n",(0,n.jsx)(a.h2,{id:"proporcionar-roles-creados-por-su-organizaci\xf3n",children:"Proporcionar roles creados por su organizaci\xf3n"}),"\n",(0,n.jsx)(a.p,{children:"Si su seguridad no permite que AI Unlimited cree roles, proporcione roles creados por su organizaci\xf3n."}),"\n",(0,n.jsxs)(a.p,{children:["La carpeta ",(0,n.jsx)(a.code,{children:"deployments"})," en el ",(0,n.jsx)(a.a,{href:"https://github.com/Teradata/ai-unlimited",children:"repositorio de GitHub de AI Unlimited"})," proporcionada por Teradata incluye ejemplos de pol\xedticas para los roles de administrador y motor."]}),"\n",(0,n.jsx)(a.p,{children:"Abra una ventana de terminal y clone el repositorio."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"git clone https://github.com/Teradata/ai-unlimited\n"})}),"\n",(0,n.jsx)(a.p,{children:"O utilice los enlaces proporcionados en las secciones que siguen para descargar lo que necesite."}),"\n",(0,n.jsx)(a.h3,{id:"rol-para-el-administrador-1",children:"Rol para el administrador"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["Si tiene permisos para crear recursos de IAM, cree el rol:","\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Adjunte una pol\xedtica que incluya el JSON que se ajuste a sus necesidades. Vea los ejemplos de JSON que aparecen a continuaci\xf3n."}),"\n",(0,n.jsxs)(a.li,{children:["Cuando ",(0,n.jsx)(a.a,{href:"/pr-preview/pr-145/es/ai-unlimited/install-ai-unlimited/deploy-manager-aws-console#specify-stack-details-and-options",children:"especifique los detalles de la pila"}),", utilice estos valores de par\xe1metros:","\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"IamRole"}),": ",(0,n.jsx)(a.strong,{children:"Nuevo"}),"\n- ",(0,n.jsx)(a.code,{children:"IamRoleName"}),": el nombre del nuevo rol"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["Si no tiene permisos para crear recursos de IAM, trabaje con su administrador de la nube para usar un rol existente:","\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Adjunte una pol\xedtica que incluya el JSON que se ajuste a sus necesidades. Vea los ejemplos de JSON que aparecen a continuaci\xf3n."}),"\n",(0,n.jsxs)(a.li,{children:["Cuando ",(0,n.jsx)(a.a,{href:"/pr-preview/pr-145/es/ai-unlimited/install-ai-unlimited/deploy-manager-aws-console#specify-stack-details-and-options",children:"especifique los detalles de la pila"}),", utilice estos valores de par\xe1metros:"]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"IamRole"}),": ",(0,n.jsx)(a.strong,{children:"Existente"})]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"IamRoleName"}),": el nombre del rol existente"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.h4,{id:"muestras-de-json",children:"Muestras de JSON"}),"\n",(0,n.jsx)(a.p,{children:"Utilice estos ejemplos, seg\xfan sea necesario, en una pol\xedtica vinculada al rol del administrador:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["Permita que AI Unlimited cree la funci\xf3n de motor. Incluya ",(0,n.jsx)(a.a,{href:"https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-workspaces.json",children:"ai-unlimited-workspaces.json"}),". Incluye permisos para crear instancias de motor y otorga permisos a AI Unlimited para crear pol\xedticas y funciones espec\xedficas del cl\xfaster."]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["Si su seguridad no permite que AI Unlimited cree roles, incluya ",(0,n.jsx)(a.a,{href:"https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-workspaces-without-iam-role-permissions.json",children:"ai-unlimited-without-iam-role-permissions.json"}),". Incluye permisos para crear instancias de motor, pero no los necesarios para que AI Unlimited cree roles y pol\xedticas espec\xedficos del cl\xfaster."]}),"\n",(0,n.jsx)(a.admonition,{type:"note",children:(0,n.jsxs)(a.p,{children:["Si utiliza ",(0,n.jsx)(a.a,{href:"https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-workspaces-without-iam-role-permissions.json",children:"ai-unlimited-without-iam-role-permissions.json"})," para el rol del administrador, utilice ",(0,n.jsx)(a.a,{href:"https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-engine.json",children:"ai-unlimited-engine.json"})," para el rol del motor."]})}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["Opcionalmente, incluya ",(0,n.jsx)(a.a,{href:"https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/session-manager.json",children:"session-manager.json"}),": incluye permisos para que el motor interact\xfae con el ",(0,n.jsx)(a.a,{href:"https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html",children:"AWS Session Manager"}),". Use esto si planea usar Session Manager para conectarse al motor y administrarlo de cerca."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"rol-para-el-motor-1",children:"Rol para el motor"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["Al rol que proporcione para el motor, adjunte una pol\xedtica que incluya ",(0,n.jsx)(a.a,{href:"https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-engine.json",children:"ai-unlimited-engine.json"}),". Esto permite que AI Unlimited transfiera el rol al cl\xfaster cada vez que se implementa el motor."]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"Agregue los detalles de su cuenta a la pol\xedtica. No se puede predecir el nombre del cl\xfaster, por lo que se debe utilizar un comod\xedn."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:'"arn:aws:secretsmanager:`REGION`:`ACCOUNT_ID`:secret:compute-engine/*"\nor\n"arn:aws:secretsmanager:`REGION`:111111111111:secret:compute-engine/*"\nor\n"arn:aws:secretsmanager:us-west-2:111111111111:secret:compute-engine/*"\n\n'})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.admonition,{type:"note",children:(0,n.jsxs)(a.p,{children:["Si utiliza ",(0,n.jsx)(a.a,{href:"https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-engine.json",children:"ai-unlimited-engine.json"})," para el rol del motor, utilice ",(0,n.jsx)(a.a,{href:"https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-workspaces-without-iam-role-permissions.json",children:"ai-unlimited-without-iam-role-permissions.json"})," para el rol del administrador."]})}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["Cuando configure la ",(0,n.jsx)(a.a,{href:"/pr-preview/pr-145/es/ai-unlimited/install-ai-unlimited/setup-ai-unlimited",children:"integraci\xf3n en la nube"})," en la configuraci\xf3n de AI Unlimited, coloque el nombre del rol en el campo ",(0,n.jsx)(a.strong,{children:"Rol de IAM predeterminado"}),"."]}),"\n"]})]})}function u(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,a,i)=>{i.d(a,{R:()=>l,x:()=>o});var n=i(96540);const r={},s=n.createContext(r);function l(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);