"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[6226],{17450:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>o});var l=i(74848),r=i(28453);const s={id:"aws-account-requirements",title:"AWS-Kontoanforderungen",description:"So bereiten Sie Ihr AWS-Konto f\xfcr die Installation von AI Unlimited vor",sidebar_label:"AWS-Kontoanforderungen",sidebar_position:1,pagination_prev:null,pagination_next:null},t="AWS-Kontoanforderungen",a={id:"resources/aws-account-requirements",title:"AWS-Kontoanforderungen",description:"So bereiten Sie Ihr AWS-Konto f\xfcr die Installation von AI Unlimited vor",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/resources/aws-requirements.md",sourceDirName:"resources",slug:"/resources/aws-account-requirements",permalink:"/pr-preview/pr-147/de/ai-unlimited/resources/aws-account-requirements",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"aws-account-requirements",title:"AWS-Kontoanforderungen",description:"So bereiten Sie Ihr AWS-Konto f\xfcr die Installation von AI Unlimited vor",sidebar_label:"AWS-Kontoanforderungen",sidebar_position:1,pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},d={},o=[{value:"Vorbereiten Ihres AWS-Kontos",id:"vorbereiten-ihres-aws-kontos",level:2},{value:"Erlauben Sie AI Unlimited, Rollen zu erstellen",id:"erlauben-sie-ai-unlimited-rollen-zu-erstellen",level:2},{value:"Rolle des Managers",id:"rolle-des-managers",level:3},{value:"Rolle der Engine",id:"rolle-der-engine",level:3},{value:"Stellen Sie von Ihrer Organisation erstellte Rollen bereit",id:"stellen-sie-von-ihrer-organisation-erstellte-rollen-bereit",level:2},{value:"Rolle des Managers",id:"rolle-des-managers-1",level:3},{value:"JSON-Beispiele",id:"json-beispiele",level:4},{value:"Rolle der Engine",id:"rolle-der-engine-1",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"aws-kontoanforderungen",children:"AWS-Kontoanforderungen"}),"\n",(0,l.jsxs)(n.p,{children:["Stellen Sie zun\xe4chst sicher, dass Sie \xfcber die ",(0,l.jsx)(n.a,{href:"/pr-preview/pr-147/de/ai-unlimited/install-ai-unlimited/#prerequisites",children:"Voraussetzungen"})," verf\xfcgen."]}),"\n",(0,l.jsx)(n.p,{children:"Bevor Sie AI Unlimited installieren, k\xfcmmern Sie sich um diese AWS-Elemente."}),"\n",(0,l.jsx)(n.h2,{id:"vorbereiten-ihres-aws-kontos",children:"Vorbereiten Ihres AWS-Kontos"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Arbeiten Sie mit Ihrem Cloud-Administrator zusammen, um sicherzustellen, dass Sie \xfcber die ",(0,l.jsx)(n.a,{href:"https://aws.amazon.com/iam/",children:"IAM"}),"-Berechtigungen zum Erstellen der in der ",(0,l.jsx)(n.a,{href:"https://github.com/Teradata/ai-unlimited/tree/develop/deployments/aws/templates/ai-unlimited",children:"AI Unlimited-Vorlage"})," definierten Cloud-Ressourcen verf\xfcgen."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Wenn Sie auf die Managerinstanz zugreifen m\xfcssen, um Befehle auszuf\xfchren oder Fehler zu beheben, k\xf6nnen Sie auf eine der folgenden Arten eine Verbindung herstellen:\n- Verwenden Sie ein ",(0,l.jsx)(n.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html",children:"Schl\xfcsselpaar"}),", um eine sichere Verbindung \xfcber Secure Shell (SSH) herzustellen. Sie ben\xf6tigen das Schl\xfcsselpaar, wenn Sie ",(0,l.jsx)(n.a,{href:"/pr-preview/pr-147/de/ai-unlimited/install-ai-unlimited/deploy-manager-aws-console#specify-stack-details-and-options",children:"die Stapeldetails angeben"}),".\n- Verwenden Sie AWS Session Manager zum Herstellen einer Verbindung. Um dies zu erm\xf6glichen, h\xe4ngen Sie die Richtlinie ",(0,l.jsx)(n.a,{href:"https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/session-manager.json",children:"session-manager.json"})," an eine ",(0,l.jsx)(n.a,{href:"#provide-roles-created-by-your-organization",children:"von Ihnen bereitgestellte Rolle"})," an den Manager an."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Wenn Sie einen ",(0,l.jsx)(n.a,{href:"https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancer-getting-started.html",children:"Application Load Balancer (ALB)"})," oder ",(0,l.jsx)(n.a,{href:"https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancer-getting-started.html",children:"Network Load Balancer (NLB)"}),"verwenden m\xf6chten, stellen Sie sicher, dass Sie \xfcber die Berechtigung zum Verwalten dieser AWS-Dienste verf\xfcgen:\n- ",(0,l.jsx)(n.a,{href:"https://docs.aws.amazon.com/acm/",children:"AWS Certificate Manager"})," \u2013 um ein neues Zertifikat f\xfcr die gehostete Zonen-ID in Route 53 auszustellen.\n- ",(0,l.jsx)(n.a,{href:"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html",children:"AWS Route 53"})," \u2013 um einen benutzerdefinierten Dom\xe4nennamen zu konfigurieren und DNS-Abfragen an Ihren Lastausgleich weiterzuleiten."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"erlauben-sie-ai-unlimited-rollen-zu-erstellen",children:"Erlauben Sie AI Unlimited, Rollen zu erstellen"}),"\n",(0,l.jsx)(n.p,{children:"Der Manager ben\xf6tigt eine Rolle, die es ihm erlaubt, die Engine bereitzustellen. Die Engine ben\xf6tigt eine Rolle, die eine Kommunikation zwischen den Engine-Knoten erm\xf6glicht. Sie k\xf6nnen beide Rollen von AI Unlimited erstellen lassen."}),"\n",(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsxs)(n.p,{children:["Wenn Ihre Sicherheitsvorkehrungen es AI Unlimited nicht erlauben, Rollen zu erstellen, ",(0,l.jsx)(n.a,{href:"#provide-roles-created-by-your-organization",children:"erstellen Sie die Rollen"})," selbst oder mit der Hilfe Ihres Cloud-Administrators."]})}),"\n",(0,l.jsx)(n.h3,{id:"rolle-des-managers",children:"Rolle des Managers"}),"\n",(0,l.jsxs)(n.p,{children:["Damit AI Unlimited diese Rolle f\xfcr Sie erstellen kann, geben Sie bei ",(0,l.jsx)(n.a,{href:"/pr-preview/pr-147/de/ai-unlimited/install-ai-unlimited/deploy-manager-aws-console#specify-stack-details-and-options",children:"Angabe der Stapeldetails"})," die folgenden Werte f\xfcr die Parameter an:\n- ",(0,l.jsx)(n.code,{children:"IamRole"}),": ",(0,l.jsx)(n.strong,{children:"Neu"}),"\n- ",(0,l.jsx)(n.code,{children:"IamRoleName"}),": leer lassen"]}),"\n",(0,l.jsx)(n.h3,{id:"rolle-der-engine",children:"Rolle der Engine"}),"\n",(0,l.jsx)(n.p,{children:"AI Unlimited kann bei jeder Bereitstellung der Engine eine neue Rolle f\xfcr die Engine erstellen."}),"\n",(0,l.jsx)(n.p,{children:"Die von AI Unlimited erstellten Engine-spezifischen Richtlinien werden folgenderma\xdfen eingeschr\xe4nkt:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'"Resource": ["arn:aws:secretsmanager:`REGION`:`ACCOUNT_ID`:secret:compute-engine/`CLUSTER_NAME`/`SECRET_NAME`"]\n'})}),"\n",(0,l.jsxs)(n.p,{children:["Um AI Unlimited zu erm\xf6glichen, f\xfcr jede Engine-Bereitstellung eine neue Rolle zu erstellen, lassen Sie das Feld ",(0,l.jsx)(n.strong,{children:"Standard-IAM-Rolle"})," leer, wenn Sie im AI Unlimited-Setup die ",(0,l.jsx)(n.a,{href:"/pr-preview/pr-147/de/ai-unlimited/install-ai-unlimited/setup-ai-unlimited",children:"Cloud-Integration"})," konfigurieren."]}),"\n",(0,l.jsx)(n.h2,{id:"stellen-sie-von-ihrer-organisation-erstellte-rollen-bereit",children:"Stellen Sie von Ihrer Organisation erstellte Rollen bereit"}),"\n",(0,l.jsx)(n.p,{children:"Wenn Ihre Sicherheitsvorkehrungen es AI Unlimited nicht erlauben, Rollen zu erstellen, stellen Sie von Ihrer Organisation erstellte Rollen bereit."}),"\n",(0,l.jsxs)(n.p,{children:["Der Ordner ",(0,l.jsx)(n.code,{children:"deployments"})," im von Teradata bereitgestellten ",(0,l.jsx)(n.a,{href:"https://github.com/Teradata/ai-unlimited",children:"AI Unlimited GitHub-Repository"})," enth\xe4lt Richtlinienbeispiele f\xfcr die Manager- und Engine-Rollen."]}),"\n",(0,l.jsx)(n.p,{children:"\xd6ffnen Sie ein Terminalfenster und klonen Sie das Repository."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/Teradata/ai-unlimited\n"})}),"\n",(0,l.jsx)(n.p,{children:"Oder verwenden Sie die in den folgenden Abschnitten bereitgestellten Links, um die ben\xf6tigten Informationen herunterzuladen."}),"\n",(0,l.jsx)(n.h3,{id:"rolle-des-managers-1",children:"Rolle des Managers"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Wenn Sie \xfcber Berechtigungen zum Erstellen von IAM-Ressourcen verf\xfcgen, erstellen Sie die Rolle:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"F\xfcgen Sie eine Richtlinie an, die den JSON-Code enth\xe4lt, der Ihren Anforderungen entspricht. Sehen Sie sich die folgenden JSON-Beispiele an."}),"\n",(0,l.jsxs)(n.li,{children:["Wenn Sie ",(0,l.jsx)(n.a,{href:"/pr-preview/pr-147/de/ai-unlimited/install-ai-unlimited/deploy-manager-aws-console#specify-stack-details-and-options",children:"die Stapeldetails angeben"}),", verwenden Sie diese Parameterwerte:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"IamRole"}),": ",(0,l.jsx)(n.strong,{children:"Neu"}),"\n- ",(0,l.jsx)(n.code,{children:"IamRoleName"}),": Name der neuen Rolle"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Wenn Sie nicht \xfcber die Berechtigung zum Erstellen von IAM-Ressourcen verf\xfcgen, wenden Sie sich an Ihren Cloud-Administrator, um eine vorhandene Rolle zu verwenden:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"F\xfcgen Sie eine Richtlinie an, die den JSON-Code enth\xe4lt, der Ihren Anforderungen entspricht. Sehen Sie sich die folgenden JSON-Beispiele an."}),"\n",(0,l.jsxs)(n.li,{children:["Wenn Sie ",(0,l.jsx)(n.a,{href:"/pr-preview/pr-147/de/ai-unlimited/install-ai-unlimited/deploy-manager-aws-console#specify-stack-details-and-options",children:"die Stapeldetails angeben"}),", verwenden Sie diese Parameterwerte:"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"IamRole"}),": ",(0,l.jsx)(n.strong,{children:"Vorhanden"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"IamRoleName"}),": Name der vorhandenen Rolle"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"json-beispiele",children:"JSON-Beispiele"}),"\n",(0,l.jsx)(n.p,{children:"Verwenden Sie diese Beispiele nach Bedarf in einer Richtlinie, die der Rolle des Managers zugeordnet ist:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Erlauben Sie AI Unlimited, die Engine-Rolle zu erstellen. Geben Sie ",(0,l.jsx)(n.a,{href:"https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-workspaces.json",children:"ai-unlimited-workspaces.json"})," mit an. Dies umfasst Berechtigungen zum Erstellen von Engine-Instanzen und erteilt AI Unlimited Berechtigungen zum Erstellen clusterspezifischer Rollen und Richtlinien."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Wenn Ihre Sicherheitsvorkehrungen es AI Unlimited nicht erlauben, Rollen zu erstellen, geben Sie ",(0,l.jsx)(n.a,{href:"https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-workspaces-without-iam-role-permissions.json",children:"ai-unlimited-without-iam-role-permissions.json"})," mit an. Dies enth\xe4lt Berechtigungen zum Erstellen von Engine-Instanzen, aber nicht die, die AI Unlimited zum Erstellen clusterspezifischer Rollen und Richtlinien ben\xf6tigt."]}),"\n",(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsxs)(n.p,{children:["Wenn Sie ",(0,l.jsx)(n.a,{href:"https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-workspaces-without-iam-role-permissions.json",children:"ai-unlimited-without-iam-role-permissions.json"})," f\xfcr die Rolle des Managers verwenden, verwenden Sie ",(0,l.jsx)(n.a,{href:"https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-engine.json",children:"ai-unlimited-engine.json"})," f\xfcr die Rolle der Engine."]})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Optional k\xf6nnen Sie ",(0,l.jsx)(n.a,{href:"https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/session-manager.json",children:"session-manager.json"})," mit angeben: Dies schlie\xdft Berechtigungen f\xfcr die Engine ein, um mit dem ",(0,l.jsx)(n.a,{href:"https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html",children:"AWS Session Manager"})," zu interagieren. Verwenden Sie dies, wenn Sie den Session Manager verwenden m\xf6chten, um eine Verbindung mit der Engine herzustellen und sie genau zu verwalten."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"rolle-der-engine-1",children:"Rolle der Engine"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["F\xfcgen Sie der Rolle, die Sie f\xfcr die Engine bereitstellen, eine Richtlinie hinzu, die ",(0,l.jsx)(n.a,{href:"https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-engine.json",children:"ai-unlimited-engine.json"})," enth\xe4lt. Dadurch kann AI Unlimited die Rolle bei jeder Bereitstellung der Engine an den Cluster weitergeben."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"F\xfcgen Sie der Richtlinie Ihre Kontodetails hinzu. Da Sie den Clusternamen nicht vorhersagen k\xf6nnen, verwenden Sie ein Platzhalterzeichen."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'"arn:aws:secretsmanager:`REGION`:`ACCOUNT_ID`:secret:compute-engine/*"\nor\n"arn:aws:secretsmanager:`REGION`:111111111111:secret:compute-engine/*"\nor\n"arn:aws:secretsmanager:us-west-2:111111111111:secret:compute-engine/*"\n\n'})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsxs)(n.p,{children:["Wenn Sie ",(0,l.jsx)(n.a,{href:"https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-engine.json",children:"ai-unlimited-engine.json"})," f\xfcr die Rolle der Engine verwenden, verwenden Sie ",(0,l.jsx)(n.a,{href:"https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-workspaces-without-iam-role-permissions.json",children:"ai-unlimited-without-iam-role-permissions.json"})," f\xfcr die Rolle des Managers."]})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Wenn Sie die ",(0,l.jsx)(n.a,{href:"/pr-preview/pr-147/de/ai-unlimited/install-ai-unlimited/setup-ai-unlimited",children:"Cloud-Integration"})," im AI Unlimited-Setup konfigurieren, geben Sie den Rollennamen in das Feld ",(0,l.jsx)(n.strong,{children:"Standard-IAM-Rolle"})," ein."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>a});var l=i(96540);const r={},s=l.createContext(r);function t(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);