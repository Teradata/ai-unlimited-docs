"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[2169],{4130:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=i(4848),t=i(8453);const o={id:"aws-account-requirements",title:"AWS account requirements",description:"How to prepare your AWS account for AI Unlimited installation",sidebar_label:"AWS account requirements",sidebar_position:1,pagination_prev:null,pagination_next:null},a="AWS account requirements",r={id:"resources/aws-account-requirements",title:"AWS account requirements",description:"How to prepare your AWS account for AI Unlimited installation",source:"@site/docs/resources/aws-requirements.md",sourceDirName:"resources",slug:"/resources/aws-account-requirements",permalink:"/ai-unlimited-docs/pr-preview/pr-9/docs/resources/aws-account-requirements",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"aws-account-requirements",title:"AWS account requirements",description:"How to prepare your AWS account for AI Unlimited installation",sidebar_label:"AWS account requirements",sidebar_position:1,pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},l={},c=[{value:"Prepare your AWS account",id:"prepare-your-aws-account",level:2},{value:"Allow AI Unlimited to create roles",id:"allow-ai-unlimited-to-create-roles",level:2},{value:"Role for the manager",id:"role-for-the-manager",level:3},{value:"Role for the engine",id:"role-for-the-engine",level:3},{value:"Provide roles created by your organization",id:"provide-roles-created-by-your-organization",level:2},{value:"Role for the manager",id:"role-for-the-manager-1",level:3},{value:"JSON samples",id:"json-samples",level:4},{value:"Role for the engine",id:"role-for-the-engine-1",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"aws-account-requirements",children:"AWS account requirements"}),"\n",(0,s.jsx)(n.p,{children:"Before you install AI Unlimited, address these items."}),"\n",(0,s.jsx)(n.h2,{id:"prepare-your-aws-account",children:"Prepare your AWS account"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Work with your cloud admin to ensure you have the ",(0,s.jsx)(n.a,{href:"https://aws.amazon.com/iam/",children:"IAM"})," permissions you need to create the cloud resources defined in the ",(0,s.jsx)(n.a,{href:"https://github.com/Teradata/ai-unlimited/tree/develop/deployments/aws/templates/ai-unlimited",children:"AI Unlimited template"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"If you'll need to access the manager instance to run commands or debug, you can connect to it one of these ways:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use a ",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html",children:"key pair"})," that you generate to securely connect using Secure Shell (SSH). You will need the key pair when you ",(0,s.jsx)(n.a,{href:"/ai-unlimited-docs/pr-preview/pr-9/docs/install-ai-unlimited/deploy-manager-aws-console#aws-parms",children:"specify the stack details"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Use AWS Session Manager to connect. To enable this, attach the ",(0,s.jsx)(n.a,{href:"https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/session-manager.json",children:"session-manager.json"})," policy to a ",(0,s.jsx)(n.a,{href:"#provide-roles",children:"role you provide"})," to the manager."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If you plan to use an ",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancer-getting-started.html",children:"Application Load Balancer (ALB)"})," or ",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancer-getting-started.html",children:"Network Load Balancer (NLB)"}),", make sure you have permission to manage these AWS services:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/acm/",children:"AWS Certificate Manager"}),"\u2014to issue a new certificate for the hosted zone ID in Route 53."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html",children:"AWS Route 53"}),"\u2014to configure a custom domain name and route DNS queries to your load balancer."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"allow-ai-unlimited-to-create-roles",children:"Allow AI Unlimited to create roles"}),"\n",(0,s.jsx)(n.p,{children:"The manager needs a role that allows it to deploy the engine. The engine needs a role that allows the engine nodes to communicate. You can let AI Unlimited create both of these roles."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["If your security does not allow AI Unlimited to create roles, ",(0,s.jsx)(n.a,{href:"#provide-roles",children:"create the roles"})," yourself or with the help of your cloud admin."]})}),"\n",(0,s.jsx)(n.h3,{id:"role-for-the-manager",children:"Role for the manager"}),"\n",(0,s.jsxs)(n.p,{children:["To let AI Unlimited create this role for you, when you ",(0,s.jsx)(n.a,{href:"/ai-unlimited-docs/pr-preview/pr-9/docs/install-ai-unlimited/deploy-manager-aws-console#aws-parms",children:"specify the stack details"}),", provide these values for these parameters:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"IamRole"}),": ",(0,s.jsx)(n.strong,{children:"New"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"IamRoleName"}),": leave blank"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"role-for-the-engine",children:"Role for the engine"}),"\n",(0,s.jsx)(n.p,{children:"AI Unlimited can create a new role for the engine each time the engine is deployed."}),"\n",(0,s.jsx)(n.p,{children:"The engine-specific policies AI Unlimited creates are restricted this way:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'"Resource": ["arn:aws:secretsmanager:`REGION`:`ACCOUNT_ID`:secret:compute-engine/`CLUSTER_NAME`/`SECRET_NAME`"]\n'})}),"\n",(0,s.jsxs)(n.p,{children:["To allow AI Unlimited to create a new role for each engine deployment, when you configure the ",(0,s.jsx)(n.a,{href:"/docs/install-ai-unlimited/setup-ai-unlimited#setup-fields",children:"cloud integration"})," as part of ",(0,s.jsx)(n.a,{href:"/docs/install-ai-unlimited/setup-ai-unlimited",children:"AI Unlimited setup"}),", leave the ",(0,s.jsx)(n.strong,{children:"Default IAM role"})," field blank."]}),"\n",(0,s.jsx)("a",{id:"provide-roles"}),"\n",(0,s.jsx)(n.h2,{id:"provide-roles-created-by-your-organization",children:"Provide roles created by your organization"}),"\n",(0,s.jsx)(n.p,{children:"If your security does not allow AI Unlimited to create roles, provide them."}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"deployments"})," folder in the ",(0,s.jsx)(n.a,{href:"https://github.com/Teradata/ai-unlimited",children:"AI Unlimited GitHub repository"})," that Teradata provides includes policy samples for the manager and engine roles."]}),"\n",(0,s.jsx)(n.p,{children:"Open a terminal window, and clone the repository."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/Teradata/ai-unlimited\n"})}),"\n",(0,s.jsx)(n.p,{children:"Or use the links that follow to download what you need."}),"\n",(0,s.jsx)(n.h3,{id:"role-for-the-manager-1",children:"Role for the manager"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If you have permissions to create IAM resources, create the role:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Attach a policy that includes the JSON that meets your needs. See the JSON samples that follow."}),"\n",(0,s.jsxs)(n.li,{children:["When you ",(0,s.jsx)(n.a,{href:"/ai-unlimited-docs/pr-preview/pr-9/docs/install-ai-unlimited/deploy-manager-aws-console#aws-parms",children:"specify the stack details"}),", use these parameter values:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"IamRole"}),": ",(0,s.jsx)(n.strong,{children:"New"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"IamRoleName"}),": the new role's name"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["If you don't have permissions to create IAM resources, work with your cloud admin to use an existing role:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Attach a policy that includes the JSON that meets your needs. See the JSON samples that follow."}),"\n",(0,s.jsxs)(n.li,{children:["When you ",(0,s.jsx)(n.a,{href:"/ai-unlimited-docs/pr-preview/pr-9/docs/install-ai-unlimited/deploy-manager-aws-console#aws-parms",children:"specify the stack details"}),", use these parameter values:"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"IamRole"}),": ",(0,s.jsx)(n.strong,{children:"Existing"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"IamRoleName"}),": the existing role's name"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"json-samples",children:"JSON samples"}),"\n",(0,s.jsx)(n.p,{children:"Use these samples, as needed, in a policy attached to the manager's role:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Allow AI Unlimited to create the engine role. Include ",(0,s.jsx)(n.a,{href:"https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-workspaces.json",children:"ai-unlimited-workspaces.json"}),". It includes permissions to create engine instances, and grants AI Unlimited permissions to create cluster-specific roles and policies."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If your security does not allow AI Unlimited to create roles, include ",(0,s.jsx)(n.a,{href:"https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-workspaces-without-iam-role-permissions.json",children:"ai-unlimited-without-iam-role-permissions.json"}),". It includes permissions to create engine instances, but not those needed for AI Unlimited to create cluster-specific roles and policies."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["If you use ",(0,s.jsx)(n.a,{href:"https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-workspaces-without-iam-role-permissions.json",children:"ai-unlimited-without-iam-role-permissions.json"})," for the manager's role, use  ",(0,s.jsx)(n.a,{href:"https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-engine.json",children:"ai-unlimited-engine.json"})," for the engine's role."]})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Optionally, include ",(0,s.jsx)(n.a,{href:"https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/session-manager.json",children:"session-manager.json"}),": It includes permissions for the engine to interact with the ",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html",children:"AWS Session Manager"}),". Use this if you plan to use Session Manager to connect to the engine to closely manage it."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"role-for-the-engine-1",children:"Role for the engine"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["To the role you provide for the engine, attach a policy that includes ",(0,s.jsx)(n.a,{href:"https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-engine.json",children:"ai-unlimited-engine.json"}),". This allows AI Unlimited to pass the role to the cluster each time the engine is deployed."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Add your account details to the policy. You can't predict the cluster name, so use a wildcard."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'"arn:aws:secretsmanager:`REGION`:`ACCOUNT_ID`:secret:compute-engine/*"\nor\n"arn:aws:secretsmanager:`REGION`:111111111111:secret:compute-engine/*"\nor\n"arn:aws:secretsmanager:us-west-2:111111111111:secret:compute-engine/*"\n\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["If you use ",(0,s.jsx)(n.a,{href:"https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-engine.json",children:"ai-unlimited-engine.json"})," for the engine's role, use  ",(0,s.jsx)(n.a,{href:"https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-workspaces-without-iam-role-permissions.json",children:"ai-unlimited-without-iam-role-permissions.json"})," for the manager's role."]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["When you configure the ",(0,s.jsx)(n.a,{href:"/docs/install-ai-unlimited/setup-ai-unlimited#setup-fields",children:"cloud integration"})," as part of ",(0,s.jsx)(n.a,{href:"/docs/install-ai-unlimited/setup-ai-unlimited",children:"AI Unlimited setup"}),", put the role name in the ",(0,s.jsx)(n.strong,{children:"Default IAM role"})," field."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var s=i(6540);const t={},o=s.createContext(t);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);