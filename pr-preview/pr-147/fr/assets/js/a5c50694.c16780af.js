"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[7396],{41269:(e,t,n)=>{n.d(t,{Ay:()=>s,RM:()=>i});var a=n(74848),r=n(28453);const i=[];function o(e){const t={a:"a",admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["If you have any questions or need further assistance, please visit our ",(0,a.jsx)(t.a,{href:"https://support.teradata.com/community",children:"community forum"})," where you can get support and interact with other community members."]})})}function s(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},62680:(e,t,n)=>{n.d(t,{Ay:()=>s,RM:()=>i});var a=n(74848),r=n(28453);const i=[];function o(e){const t={a:"a",admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["If you need a test instance of Vantage, you can provision one for free at ",(0,a.jsx)(t.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})]})})}function s(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},98553:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var a=n(74848),r=n(28453),i=n(62680),o=n(41269);const s={sidebar_position:1,id:"jdbc",author:"Adam Tworkiewicz",email:"adam.tworkiewicz@teradata.com",page_last_update:"November 14th, 2022",description:"How to connect to Teradata Vantage using JDBC.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","JDBC","java applications","business intelligence","enterprise analytics"]},c="Connect to Vantage using JDBC",d={id:"create-applications/jdbc",title:"Connect to Vantage using JDBC",description:"How to connect to Teradata Vantage using JDBC.",source:"@site/quickstarts/create-applications/jdbc.md",sourceDirName:"create-applications",slug:"/create-applications/jdbc",permalink:"/pr-preview/pr-147/fr/quickstarts/create-applications/jdbc",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"jdbc",author:"Adam Tworkiewicz",email:"adam.tworkiewicz@teradata.com",page_last_update:"November 14th, 2022",description:"How to connect to Teradata Vantage using JDBC.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","JDBC","java applications","business intelligence","enterprise analytics"]},sidebar:"tutorialSidebar",previous:{title:"Ingest and Catalog Data from Teradata Vantage to Amazon S3 with AWS Glue Scripts",permalink:"/pr-preview/pr-147/fr/quickstarts/manage-data/ingest-catalog-data-teradata-s3-with-glue"},next:{title:"Connect to Vantage using Python",permalink:"/pr-preview/pr-147/fr/quickstarts/create-applications/teradatasql"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},...i.RM,{value:"Add dependency to your maven project",id:"add-dependency-to-your-maven-project",level:2},{value:"Code to send a query",id:"code-to-send-a-query",level:2},{value:"Run the tests",id:"run-the-tests",level:3},{value:"Summary",id:"summary",level:2},{value:"Further reading",id:"further-reading",level:2},...o.RM];function u(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"connect-to-vantage-using-jdbc",children:"Connect to Vantage using JDBC"}),"\n",(0,a.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsxs)(t.p,{children:["This how-to demonstrates how to connect to Teradata Vantage using JDBC using a sample Java application: ",(0,a.jsx)(t.a,{href:"https://github.com/Teradata/jdbc-sample-app",children:"GitHub JDBC"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Access to a Teradata Vantage instance."}),"\n"]}),"\n",(0,a.jsx)(i.Ay,{}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"JDK"}),"\n",(0,a.jsx)(t.li,{children:"Maven"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"add-dependency-to-your-maven-project",children:"Add dependency to your maven project"}),"\n",(0,a.jsx)(t.p,{children:"Add the Teradata JDBC driver as a dependency to your Maven POM XML file:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-xml",children:"<dependency>\n  <groupId>com.teradata.jdbc</groupId>\n  <artifactId>terajdbc</artifactId>\n  <version>20.00.00.06</version>\n</dependency>\n"})}),"\n",(0,a.jsx)(t.h2,{id:"code-to-send-a-query",children:"Code to send a query"}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["This step assumes that your Vantage database is available on ",(0,a.jsx)(t.code,{children:"localhost"})," on port ",(0,a.jsx)(t.code,{children:"1025"}),". If you are running Vantage Express on your laptop, you need to expose the port from the VM to the host machine. Refer to your virtualization software documentation how to forward ports."]})}),"\n",(0,a.jsx)(t.p,{children:"The project is set up. All that is left, is to load the driver, pass connection and authentication parameters and run a query:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'package com.teradata.app;\n \nimport java.sql.*;\n \npublic class App {\n    static final String DB_URL = "jdbc:teradata://localhost";\n    static final String USER = "dbc";\n    static final String PASS = "dbc";\n    static final String QUERY = "SELECT * FROM dbc.dbcinfo";\n \n    public static void main(String[] args) {\n        App app = new App();\n        app.query();\n    }\n \n    public void query() {\n        Connection conn = null;\n        Statement stmt = null;\n        ResultSet rs = null;\n \n        // Open a connection\n        try {\n            conn = DriverManager.getConnection(DB_URL, USER, PASS);\n            stmt = conn.createStatement();\n            rs = stmt.executeQuery(QUERY);\n \n            // Extract data from result set\n            while (rs.next()) {\n                System.out.println(String.format("setting: %s, value: %s", rs.getString(1), rs.getString(2)));\n            }\n        } catch (SQLException e) {\n            e.printStackTrace();\n        } finally {\n            if (rs != null) {\n                try {\n                    rs.close();\n                } catch (SQLException e) { /* Ignored */}\n            }\n            if (stmt != null) {\n                try {\n                    stmt.close();\n                } catch (SQLException e) { /* Ignored */}\n            }\n            if (conn != null) {\n                try {\n                    conn.close();\n                } catch (SQLException e) { /* Ignored */}\n            }\n        }\n    }\n}\n'})}),"\n",(0,a.jsx)(t.h3,{id:"run-the-tests",children:"Run the tests"}),"\n",(0,a.jsx)(t.p,{children:"Run the tests:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"mvn test\n"})}),"\n",(0,a.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,a.jsx)(t.p,{children:"This how-to demonstrated how to connect to Teradata Vantage using JDBC. It described a sample Java application with Maven as the build tool that uses the Teradata JDBC driver to send SQL queries to Teradata Vantage."}),"\n",(0,a.jsx)(t.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://teradata-docs.s3.amazonaws.com/doc/connectivity/jdbc/reference/current/frameset.html",children:"Teradata JDBC Driver Reference"})}),"\n"]}),"\n",(0,a.jsx)(o.Ay,{})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var a=n(96540);const r={},i=a.createContext(r);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);