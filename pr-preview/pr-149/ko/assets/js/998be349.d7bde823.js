"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[1510],{42955:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>y,frontMatter:()=>c,metadata:()=>u,toc:()=>h});var a=t(74848),r=t(28453),s=t(56240),o=t(19365);function i(e){const n={code:"code",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(s.A,{children:[(0,a.jsx)(o.A,{value:"Python",label:"Python",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import base64\nimport json\nimport time\nimport requests\nimport datetime\n\nfrom cryptography.hazmat.primitives import hashes\nfrom cryptography.hazmat.primitives.asymmetric import padding\nfrom cryptography.hazmat.primitives.serialization import load_pem_private_key\n\ndef base64_url_encode(data):\n    return base64.urlsafe_b64encode(data).rstrip(b\'=\').decode(\'utf-8\')\n\ndef create_jwt():\n    # Define the header\n    header = {\n        "alg": "RS256",\n        "kid": "primary",\n        "typ": "JWT"\n    }\n    header_json = json.dumps(header)\n    header_encoded = base64_url_encode(header_json.encode(\'utf-8\'))\n\n    # Define the payload\n    payload = {\n        "aud": ["td:service:authentication"],\n        "exp": int(datetime.datetime.now().timestamp()) + 3600,\n        "iat": int(datetime.datetime.now().timestamp()),\n        "iss": "wiki",\n        "org_id": "38b6*****-****-****-****-********5df7",\n        "multi-use": True,\n        "pat": "gwxh******************n4yco",\n        "sub": "data_engineer"\n    }\n    payload_json = json.dumps(payload)\n    payload_encoded = base64_url_encode(payload_json.encode(\'utf-8\'))\n\n    # Load the private key\n    with open(\'primary.pem\', \'rb\') as key_file:\n        private_key = load_pem_private_key(key_file.read(), password=None)\n\n    # Create the signature\n    data = f"{header_encoded}.{payload_encoded}".encode(\'utf-8\')\n    signature = private_key.sign(\n        data,\n        padding.PKCS1v15(),\n        hashes.SHA256()\n    )\n    signature_encoded = base64_url_encode(signature)\n\n    # Construct the JWT\n    jwt = f"{header_encoded}.{payload_encoded}.{signature_encoded}"\n\n    # Make the HTTP request\n    url = \'https://tddemos.innovationlabs.teradata.com/api/tdrest/systems/shared_demo/queries\'\n    headers = {\n        \'Accept\': \'application/json\',\n        \'Authorization\': f\'Bearer {jwt}\',\n        \'Content-Type\': \'application/json\'\n    }\n    req_body = json.dumps({"query": "SEL * FROM dbc.dbcinfo", "logMech": "JWT"})\n\n    response = requests.post(url, headers=headers, data=req_body)\n    print("Response Code:", response.status_code)\n    print("Response Body:", response.text)\n\ncreate_jwt()\n'})})}),(0,a.jsx)(o.A,{value:"Java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Java",children:'import java.util.Base64;\nimport java.util.List;\nimport java.util.Map;\nimport java.util.HashMap;\nimport java.nio.charset.StandardCharsets;\nimport java.nio.file.Files;\nimport java.nio.file.Paths;\nimport java.security.KeyFactory;\nimport java.security.PrivateKey;\nimport java.security.Signature;\nimport java.security.spec.PKCS8EncodedKeySpec;\nimport javax.net.ssl.HttpsURLConnection;\nimport java.net.URL;\nimport java.io.OutputStream;\n\npublic class CreateJWT {\n    public static void main(String[] args) throws Exception {\n        // Define the header\n        String headerJson = "{\\"alg\\":\\"RS256\\", \\"kid\\":\\"primary\\", \\"typ\\":\\"JWT\\"}";\n        String header = Base64.getUrlEncoder().withoutPadding().encodeToString(headerJson.getBytes(StandardCharsets.UTF_8));\n\n        // Define the payload\n        String payloadJson = "{"\n                + "\\"aud\\": [\\"td:service:authentication\\"],"\n                + `"exp": ${Math.floor(Date.now() / 1000) + 3600},`\n                + `"iat": ${Math.floor(Date.now() / 1000)},`\n                + "\\"iss\\": \\"wiki\\","\n                + "\\"org_id\\": \\"38b6*****-****-****-****-********5df7\\","\n                + "\\"multi-use\\": true,"\n                + "\\"pat\\": \\"gwxh******************n4yco\\","\n                + "\\"sub\\": \\"data_engineer\\""\n                + "}";\n        String payload = Base64.getUrlEncoder().withoutPadding().encodeToString(payloadJson.getBytes(StandardCharsets.UTF_8));\n\n        // Load the private key\n        byte[] keyBytes = Files.readAllBytes(Paths.get("primary.pem"));\n        String privateKeyPEM = new String(keyBytes, StandardCharsets.UTF_8)\n                .replace("-----BEGIN PRIVATE KEY-----", "")\n                .replace("-----END PRIVATE KEY-----", "")\n                .replaceAll("\\\\s", "");\n        byte[] decodedKey = Base64.getDecoder().decode(privateKeyPEM);\n        PKCS8EncodedKeySpec keySpec = new PKCS8EncodedKeySpec(decodedKey);\n        KeyFactory keyFactory = KeyFactory.getInstance("RSA");\n        PrivateKey privateKey = keyFactory.generatePrivate(keySpec);\n\n        // Create the signature\n        String data = header + "." + payload;\n        Signature signature = Signature.getInstance("SHA256withRSA");\n        signature.initSign(privateKey);\n        signature.update(data.getBytes(StandardCharsets.UTF_8));\n        String signatureStr = Base64.getUrlEncoder().withoutPadding().encodeToString(signature.sign());\n\n        // Construct the JWT\n        String jwt = data + "." + signatureStr;\n\n        // Make the HTTP request\n        URL url = new URL("https://tddemos.innovationlabs.teradata.com/api/tdrest/systems/shared_demo/queries");\n        HttpsURLConnection conn = (HttpsURLConnection) url.openConnection();\n        conn.setRequestMethod("POST");\n        conn.setRequestProperty("Accept", "application/json");\n        conn.setRequestProperty("Authorization", "Bearer " + jwt);\n        conn.setDoOutput(true);\n\n        String jsonInputString = "{\\"query\\":\\"SEL * FROM dbc.dbcinfo\\",\\"logMech\\":\\"JWT\\"}";\n        try (OutputStream os = conn.getOutputStream()) {\n            byte[] input = jsonInputString.getBytes(StandardCharsets.UTF_8);\n            os.write(input, 0, input.length);\n        }\n\n        int responseCode = conn.getResponseCode();\n        System.out.println("Response Code: " + responseCode);\n    }\n}\n'})})}),(0,a.jsx)(o.A,{value:"Golang",label:"Golang",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-golang",children:'package main\n\nimport (\n    "bytes"\n    "crypto"\n    "crypto/rand"\n    "crypto/rsa"\n    "crypto/sha256"\n    "crypto/x509"\n    "encoding/base64"\n    "encoding/json"\n    "encoding/pem"\n    "fmt"\n    "io/ioutil"\n    "net/http"\n    "strings"\n    "time"\n)\n\nfunc main() {\n    // Define the header\n    header := map[string]string{\n        "alg": "RS256",\n        "kid": "primary",\n        "typ": "JWT",\n    }\n    headerJson, _ := json.Marshal(header)\n    headerEncoded := base64.RawURLEncoding.EncodeToString(headerJson)\n\n    // Define the payload\n    payload := map[string]interface{}{\n        "aud":      []string{"td:service:authentication"},\n        "exp":      time.Now().Add(time.Hour).Unix(),\n        "iat":      time.Now().Unix(),\n        "iss":      "wiki",\n        "org_id":   "38b6*****-****-****-****-********5df7",\n        "multi-use": true,\n        "pat":      "gwxh******************n4yco",\n        "sub":      "data_engineer",\n    }\n    payloadJson, _ := json.Marshal(payload)\n    payloadEncoded := base64.RawURLEncoding.EncodeToString(payloadJson)\n\n    // Load the private key\n    keyBytes, err := ioutil.ReadFile("primary.pem")\n    if err != nil {\n        panic(err)\n    }\n    block, _ := pem.Decode(keyBytes)\n    privateKey, err := x509.ParsePKCS8PrivateKey(block.Bytes)\n    if err != nil {\n        panic(err)\n    }\n\n    // Create the signature\n    data := headerEncoded + "." + payloadEncoded\n    hashed := sha256.Sum256([]byte(data))\n    signature, err := rsa.SignPKCS1v15(rand.Reader, privateKey.(*rsa.PrivateKey), crypto.SHA256, hashed[:])\n    if err != nil {\n        panic(err)\n    }\n    signatureEncoded := base64.RawURLEncoding.EncodeToString(signature)\n\n    // Construct the JWT\n    jwt := data + "." + signatureEncoded\n\n    // Make the HTTP request\n    url := "https://tddemos.innovationlabs.teradata.com/api/tdrest/systems/shared_demo/queries"\n    reqBody := `{"query":"SEL * FROM dbc.dbcinfo","logMech":"JWT"}`\n    req, err := http.NewRequest("POST", url, bytes.NewBuffer([]byte(reqBody)))\n    if err != nil {\n        panic(err)\n    }\n    req.Header.Set("Accept", "application/json")\n    req.Header.Set("Authorization", "Bearer "+jwt)\n\n    client := &http.Client{}\n    resp, err := client.Do(req)\n    if err != nil {\n        panic(err)\n    }\n    defer resp.Body.Close()\n\n    body, _ := ioutil.ReadAll(resp.Body)\n    fmt.Println("Response Code:", resp.StatusCode)\n    fmt.Println("Response Body:", string(body))\n}\n'})})}),(0,a.jsx)(o.A,{value:"C#",label:"C#",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c#",children:'using System;\nusing System.Collections.Generic;\nusing System.Security.Cryptography;\nusing System.Text;\nusing System.Text.Json;\nusing System.Net.Http;\nusing System.Net.Http.Headers;\nusing System.Threading.Tasks;\n\nclass Program\n{\n    static async Task Main(string[] args)\n    {\n        // Define the header\n        var header = new Dictionary<string, string>\n        {\n            { "alg", "RS256" },\n            { "kid", "primary" },\n            { "typ", "JWT" }\n        };\n        string headerJson = JsonSerializer.Serialize(header);\n        string headerEncoded = Base64UrlEncode(Encoding.UTF8.GetBytes(headerJson));\n\n        // Define the payload\n        var payload = new Dictionary<string, object>\n        {\n            { "aud", new string[] { "td:service:authentication" } },\n            { "exp", DateTimeOffset.UtcNow.ToUnixTimeSeconds() + 3600 },  // Current timestamp + 1 hour\n            { "iat", DateTimeOffset.UtcNow.ToUnixTimeSeconds() },  // Current timestamp\n            { "iss", "wiki" },\n            { "org_id", "38b6*****-****-****-****-********5df7" },\n            { "multi-use", true },\n            { "pat", "gwxh******************n4yco" },\n            { "sub", "data_engineer" }\n        };\n        string payloadJson = JsonSerializer.Serialize(payload);\n        string payloadEncoded = Base64UrlEncode(Encoding.UTF8.GetBytes(payloadJson));\n\n        // Load the private key\n        string privateKeyPath = "primary.pem";\n        RSA privateKey = LoadPrivateKey(privateKeyPath);\n\n        // Create the signature\n        string data = $"{headerEncoded}.{payloadEncoded}";\n        byte[] dataBytes = Encoding.UTF8.GetBytes(data);\n        byte[] signatureBytes = privateKey.SignData(dataBytes, HashAlgorithmName.SHA256, RSASignaturePadding.Pkcs1);\n        string signatureEncoded = Base64UrlEncode(signatureBytes);\n\n        // Construct the JWT\n        string jwt = $"{data}.{signatureEncoded}";\n\n        // Make the HTTP request\n        string url = "https://tddemos.innovationlabs.teradata.com/api/tdrest/systems/shared_demo/queries";\n        var client = new HttpClient();\n        client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));\n        client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", jwt);\n\n        var requestBody = new StringContent("{\\"query\\":\\"SEL * FROM dbc.dbcinfo\\",\\"logMech\\":\\"JWT\\"}", Encoding.UTF8, "application/json");\n        HttpResponseMessage response = await client.PostAsync(url, requestBody);\n\n        Console.WriteLine("Response Code: " + (int)response.StatusCode);\n        string responseBody = await response.Content.ReadAsStringAsync();\n        Console.WriteLine("Response Body: " + responseBody);\n    }\n\n    static string Base64UrlEncode(byte[] input)\n    {\n        return Convert.ToBase64String(input).TrimEnd(\'=\').Replace(\'+\', \'-\').Replace(\'/\', \'_\');\n    }\n\n    static RSA LoadPrivateKey(string path)\n    {\n        string pem = System.IO.File.ReadAllText(path);\n        pem = pem.Replace("-----BEGIN PRIVATE KEY-----", "").Replace("-----END PRIVATE KEY-----", "").Replace("\\n", "").Replace("\\r", "");\n        byte[] keyBytes = Convert.FromBase64String(pem);\n\n        RSA rsa = RSA.Create();\n        rsa.ImportPkcs8PrivateKey(keyBytes, out _);\n        return rsa;\n    }\n}\n'})})}),(0,a.jsx)(o.A,{value:"Typescript",label:"Typescript",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import * as crypto from 'crypto';\nimport * as fs from 'fs';\nimport * as https from 'https';\n\nfunction base64UrlEncode(input: Buffer): string {\n    return input.toString('base64').replace(/=/g, '').replace(/\\+/g, '-').replace(/\\//g, '_');\n}\n\nasync function createJWT() {\n    // Define the header\n    const header = {\n        alg: \"RS256\",\n        kid: \"primary\",\n        typ: \"JWT\"\n    };\n    const headerJson = JSON.stringify(header);\n    const headerEncoded = base64UrlEncode(Buffer.from(headerJson, 'utf8'));\n\n    // Define the payload\n    const payload = {\n        aud: [\"td:service:authentication\"],\n        exp: Math.floor(Date.now() / 1000) + 3600,\n        iat: Math.floor(Date.now() / 1000),\n        iss: \"wiki\",\n        org_id: \"38b6*****-****-****-****-********5df7\",\n        \"multi-use\": true,\n        pat: \"gwxh******************n4yco\",\n        sub: \"data_engineer\"\n    };\n    const payloadJson = JSON.stringify(payload);\n    const payloadEncoded = base64UrlEncode(Buffer.from(payloadJson, 'utf8'));\n\n    // Load the private key\n    const privateKeyPath = 'primary.pem';\n    const privateKey = fs.readFileSync(privateKeyPath, 'utf8');\n\n    // Create the signature\n    const data = `${headerEncoded}.${payloadEncoded}`;\n    const sign = crypto.createSign('RSA-SHA256');\n    sign.update(data);\n    const signature = sign.sign(privateKey);\n    const signatureEncoded = base64UrlEncode(signature);\n\n    // Construct the JWT\n    const jwt = `${data}.${signatureEncoded}`;\n\n    // Make the HTTP request\n    const options = {\n        hostname: 'tddemos.innovationlabs.teradata.com',\n        path: '/api/tdrest/systems/shared_demo/queries',\n        method: 'POST',\n        headers: {\n            'Accept': 'application/json',\n            'Authorization': `Bearer ${jwt}`,\n            'Content-Type': 'application/json'\n        }\n    };\n\n    const reqBody = JSON.stringify({ query: \"SEL * FROM dbc.dbcinfo\", logMech: \"JWT\" });\n\n    const req = https.request(options, (res) => {\n        let data = '';\n        res.on('data', (chunk) => {\n            data += chunk;\n        });\n        res.on('end', () => {\n            console.log('Response Code:', res.statusCode);\n            console.log('Response Body:', data);\n        });\n    });\n\n    req.on('error', (e) => {\n        console.error(e);\n    });\n\n    req.write(reqBody);\n    req.end();\n}\n\ncreateJWT();\n"})})}),(0,a.jsx)(o.A,{value:"Javascript",label:"Javascript",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const crypto = require('crypto');\nconst fs = require('fs');\nconst https = require('https');\n\nfunction base64UrlEncode(input) {\n    return input.toString('base64').replace(/=/g, '').replace(/\\+/g, '-').replace(/\\//g, '_');\n}\n\nasync function createJWT() {\n    // Define the header\n    const header = {\n        alg: \"RS256\",\n        kid: \"primary\",\n        typ: \"JWT\"\n    };\n    const headerJson = JSON.stringify(header);\n    const headerEncoded = base64UrlEncode(Buffer.from(headerJson, 'utf8'));\n\n    // Define the payload\n    const payload = {\n        aud: [\"td:service:authentication\"],\n        exp: Math.floor(Date.now() / 1000) + 3600,\n        iat: Math.floor(Date.now() / 1000),\n        iss: \"wiki\",\n        org_id: \"38b6*****-****-****-****-********5df7\",\n        \"multi-use\": true,\n        pat: \"gwxh******************n4yco\",\n        sub: \"data_engineer\"\n    };\n    const payloadJson = JSON.stringify(payload);\n    const payloadEncoded = base64UrlEncode(Buffer.from(payloadJson, 'utf8'));\n\n    // Load the private key\n    const privateKeyPath = 'primary.pem';\n    const privateKey = fs.readFileSync(privateKeyPath, 'utf8');\n\n    // Create the signature\n    const data = `${headerEncoded}.${payloadEncoded}`;\n    const sign = crypto.createSign('RSA-SHA256');\n    sign.update(data);\n    const signature = sign.sign(privateKey);\n    const signatureEncoded = base64UrlEncode(signature);\n\n    // Construct the JWT\n    const jwt = `${data}.${signatureEncoded}`;\n\n    // Make the HTTP request\n    const options = {\n        hostname: 'tddemos.innovationlabs.teradata.com',\n        path: '/api/tdrest/systems/shared_demo/queries',\n        method: 'POST',\n        headers: {\n            'Accept': 'application/json',\n            'Authorization': `Bearer ${jwt}`,\n            'Content-Type': 'application/json'\n        }\n    };\n\n    const reqBody = JSON.stringify({ query: \"SEL * FROM dbc.dbcinfo\", logMech: \"JWT\" });\n\n    const req = https.request(options, (res) => {\n        let data = '';\n        res.on('data', (chunk) => {\n            data += chunk;\n        });\n        res.on('end', () => {\n            console.log('Response Code:', res.statusCode);\n            console.log('Response Body:', data);\n        });\n    });\n\n    req.on('error', (e) => {\n        console.error(e);\n    });\n\n    req.write(reqBody);\n    req.end();\n}\n\ncreateJWT();\n"})})}),(0,a.jsx)(o.A,{value:"Bash (MacOS)",label:"Bash",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'# define the header, the kid needs to be the same as the key name defined in the console, i.e. `primary`\nheader=$(echo -n \'{"alg":"RS256", "kid":"primary", "typ":"JWT"}\')\n\n# define the payload, here is the description of different params from the wiki\n# exp       - Expiration claim. This is a UTC epoch and recommended to be at \n#             least 30 seconds into the future. You can use Epoch Converter \n#             website: https://www.epochconverter.com/\n# iat       - Issued At claim. This is a UTC epoch. Set to the current time\n# iss       - The issuer. Can be anything and will be recorded in the logs\n# multi-use - Determines if the token can be used more than once.\n# org_id    - org_id (you can get it from the console in dev mode)\n# pat       - The pat to be exchanged (retrieved from the console)\n# sub       - The owner of the PAT. This must match the owner specified when \n#             creating the pat. (the name of the user that you used to log in \n#             to the console)\n\npayload=$(echo -n \'{\n  "aud": [\n    "td:service:authentication"\n  ],\n  "exp": $(($(date +%s) + 3600)),\n  "iat": $(date +%s),\n  "iss": "wiki",\n  "org_id": "38b6*****-****-****-****-********5df7",\n  "multi-use": true,\n  "pat": "gwxh******************n4yco",\n  "sub": "data_engineer"\n}\')\n\nexport header=$(echo -n "$header" | base64)\nexport payload=$(echo -n "$payload" | base64)\nexport signature=$(echo -n "$header.$payload" | openssl dgst -sha256 -binary -sign primary.pem | openssl enc -base64 | tr -d \'\\n=\' | tr -- \'+/\' \'-_\')\nexport jwt=$(echo -n "$header.$payload.$signature")\n\ncurl \'https://tddemos.innovationlabs.teradata.com/api/tdrest/systems/shared_demo/queries\' \\\n  --header \'Accept: application/json\' \\\n  --header "Authorization: Bearer $jwt" \\\n  --data-raw \'{"query":"SEL * FROM dbc.dbcinfo","logMech":"JWT"}\'\n'})})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}const c={sidebar_position:7,author:"Adam Tworkiewicz",email:"adam.tworkiewicz@teradata.com",page_last_update:"September 6th, 2024",description:"Create JWT tokens to call Lake APIs",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","business intelligence","enterprise analytics","jupyter","teradatasql","ipython-sql","teradatasqlalchemy","vantagecloud","vantagecloud lake","ip address","public internet","lake","rest api"]},l="Create JWT tokens to call VantageCloud Lake APIs",u={id:"vantagecloud-lake/create-jwt-token-for-api-calls",title:"Create JWT tokens to call VantageCloud Lake APIs",description:"Create JWT tokens to call Lake APIs",source:"@site/quickstarts/vantagecloud-lake/create-jwt-token-for-api-calls.md",sourceDirName:"vantagecloud-lake",slug:"/vantagecloud-lake/create-jwt-token-for-api-calls",permalink:"/pr-preview/pr-149/ko/quickstarts/vantagecloud-lake/create-jwt-token-for-api-calls",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,author:"Adam Tworkiewicz",email:"adam.tworkiewicz@teradata.com",page_last_update:"September 6th, 2024",description:"Create JWT tokens to call Lake APIs",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","business intelligence","enterprise analytics","jupyter","teradatasql","ipython-sql","teradatasqlalchemy","vantagecloud","vantagecloud lake","ip address","public internet","lake","rest api"]},sidebar:"tutorialSidebar",previous:{title:"Run Teradata Jupyter Notebook Demos for VantageCloud Lake in Microsoft Azure",permalink:"/pr-preview/pr-149/ko/quickstarts/vantagecloud-lake/vantagecloud-lake-demo-jupyter-azure"},next:{title:"Manage VantageCloud Lake Compute Clusters with Apache Airflow",permalink:"/pr-preview/pr-149/ko/quickstarts/vantagecloud-lake/vantagecloud-lake-compute-cluster-airflow"}},p={},h=[{value:"Overview",id:"overview",level:2},{value:"Generate Personal Access Token (PAT) and private key",id:"generate-personal-access-token-pat-and-private-key",level:2},{value:"Use PAT and private key to generate JWT",id:"use-pat-and-private-key-to-generate-jwt",level:2},{value:"Summary",id:"summary",level:2},{value:"Further reading",id:"further-reading",level:2}];function g(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"create-jwt-tokens-to-call-vantagecloud-lake-apis",children:"Create JWT tokens to call VantageCloud Lake APIs"}),"\n",(0,a.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)(n.p,{children:"VantageCloud Lake exposes a set or REST APIs to manage environments. To call VantageCloud Lake REST APIs such as Query Service you need a valid JWT token. This quickstart demonstrates how to create a JWT token and how to use it to call VantageCloud Lake REST APIs."}),"\n",(0,a.jsx)(n.p,{children:"The process has the following steps:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Generate Personal Access Token and your private key - they are needed to create JWTs"}),"\n",(0,a.jsx)(n.li,{children:"Create a JWT"}),"\n",(0,a.jsx)(n.li,{children:"Call the API"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"generate-personal-access-token-pat-and-private-key",children:"Generate Personal Access Token (PAT) and private key"}),"\n",(0,a.jsx)(n.admonition,{type:"important",children:(0,a.jsxs)(n.p,{children:["To get a VantageCloud Lake sign-on link and credentials, submit the ",(0,a.jsx)(n.a,{href:"https://www.teradata.com/about-us/contact",children:"contact form"})," to reach out to Teradata team."]})}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Go to the URL provided by Teradata, for example, mycompany.innovationlabs.teradata.com and sign on as a database user who has Console access rights."}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["Click ",(0,a.jsx)(n.a,{href:"https://login.customer.teradata.com/ext/pwdreset/Identify?AdapterId=CDSCustomer",children:"here"})," to reset the organization admin password."]})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Sign On",src:t(90275).A+"",width:"2434",height:"1400"})}),"\n",(0,a.jsx)(n.p,{children:"The signing on takes you to VantageCloud Lake welcome page."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Welcome Page",src:t(50938).A+"",width:"1857",height:"977"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Create a Personal Access Token (PAT)"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:['In the top-right corner click on the user icon and then click on "Account settings"\n',(0,a.jsx)(n.img,{alt:"Account settings",src:t(3983).A+"",width:"3584",height:"1644"})]}),"\n",(0,a.jsxs)(n.li,{children:['Click on "Create" and then on "Access token"\n',(0,a.jsx)(n.img,{alt:"Click on Create access token",src:t(87741).A+"",width:"3562",height:"1538"})]}),"\n",(0,a.jsxs)(n.li,{children:["Select the environment you want to use the PAT for, fill out other fields and click Save\n",(0,a.jsx)(n.img,{alt:"Click on Save access token",src:t(69618).A+"",width:"1360",height:"1516"})]}),"\n",(0,a.jsx)(n.li,{children:"Copy the PAT displayed on the page"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Create a private key"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:['Go back to the "Account settings" page and click "Create" and then "Key"\n',(0,a.jsx)(n.img,{alt:"Click on Create private key",src:t(10512).A+"",width:"3584",height:"1238"})]}),"\n",(0,a.jsxs)(n.li,{children:['Click on "Generate key pair", name the key "primary", click on "Generate private key", download the ',(0,a.jsx)(n.code,{children:".pem"}),' file and click on "Save"\n',(0,a.jsx)(n.img,{alt:"Save private key",src:t(25449).A+"",width:"1200",height:"1434"})]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Retrieve the organization id"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Open a new tab and go to https://{MY_COMPANY}.innovationlabs.teradata.com/api/my-organization. Replace ",(0,a.jsx)(n.code,{children:"{MY_COMPANY}"})," with the right name for your Lake deployment"]}),"\n",(0,a.jsxs)(n.li,{children:["Copy the value of the organization id. It should be similar to this: ",(0,a.jsx)(n.code,{children:"fd3463dee-3efe-4120-8153-0bb253547df7"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"use-pat-and-private-key-to-generate-jwt",children:"Use PAT and private key to generate JWT"}),"\n",(0,a.jsxs)(n.admonition,{type:"note",children:[(0,a.jsx)(n.p,{children:"This section assumes that you have you have the following:"}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Private key saved in file called ",(0,a.jsx)(n.code,{children:"primary.pem"})]}),"\n",(0,a.jsx)(n.li,{children:"You now your lake user name that you have used to create the PAT and the primary key"}),"\n",(0,a.jsx)(n.li,{children:"You have the PAT"}),"\n",(0,a.jsx)(n.li,{children:"You have your organization id"}),"\n"]})]}),"\n",(0,a.jsxs)(n.p,{children:["The code demonstrates how to generate a JWT and call Query Service with the JWT. Make sure you set the correct path to ",(0,a.jsx)(n.code,{children:"primary.pem"})," file containing the private key and set the correct values for:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"sub"})," - the user name"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"pat"})," - PAT"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"org_id"})," - organization id"]}),"\n"]}),"\n",(0,a.jsx)(d,{}),"\n",(0,a.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,a.jsx)(n.p,{children:"This quickstart describes how to create JWT tokens to call VantageCloud Lake REST APIs."}),"\n",(0,a.jsx)(n.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://docs.teradata.com/r/Teradata-VantageCloud-Lake/Getting-Started-First-Sign-On-by-Organization-Admin",children:"Teradata VantageCloud Lake documentation"})}),"\n"]})]})}function y(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(g,{...e})}):g(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var a=t(34164);const r={tabItem:"tabItem_Ymn6"};var s=t(74848);function o(e){var n=e.children,t=e.hidden,o=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,o),hidden:t,children:n})}},56240:(e,n,t)=>{t.d(n,{A:()=>j});var a=t(96540),r=t(34164),s=t(23104),o=t(56347),i=t(205),d=t(57485);var c=t(89466);function l(e){var n,t;return null!=(n=null==(t=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function u(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:function(e){return l(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n,t,a=(void 0===(t=function(e,n){return e.value===n.value})&&(t=function(e,n){return e===n}),(n=e).filter((function(e,a){return n.findIndex((function(n){return t(n,e)}))!==a})));if(a.length>0)throw new Error('Docusaurus error: Duplicate values "'+a.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function h(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,s=(0,o.W6)(),i=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:r});return[(0,d.aZ)(i),(0,a.useCallback)((function(e){if(i){var n=new URLSearchParams(s.location.search);n.set(i,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[i,s])]}function g(e){var n,t,r,s,o=e.defaultValue,d=e.queryString,l=void 0!==d&&d,g=e.groupId,y=u(e),m=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:y})})),f=m[0],v=m[1],b=h({queryString:l,groupId:g}),k=b[0],j=b[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:g}.groupId),t=(0,c.Dv)(n),r=t[0],s=t[1],[r,(0,a.useCallback)((function(e){n&&s.set(e)}),[n,s])]),x=w[0],S=w[1],T=function(){var e=null!=k?k:x;return p({value:e,tabValues:y})?e:null}();return(0,i.A)((function(){T&&v(T)}),[T]),{selectedValue:f,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:y}))throw new Error("Can't select invalid tab value="+e);v(e),j(e),S(e)}),[j,S,y]),tabValues:y}}var y=t(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(74848);function v(e){var n=e.className,t=e.block,a=e.selectedValue,o=e.selectValue,i=e.tabValues,d=[],c=(0,s.a_)().blockElementScrollPositionUntilNextRender,l=function(e){var n=e.currentTarget,t=d.indexOf(n),r=i[t].value;r!==a&&(c(n),o(r))},u=function(e){var n,t=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":var a,r=d.indexOf(e.currentTarget)+1;t=null!=(a=d[r])?a:d[0];break;case"ArrowLeft":var s,o=d.indexOf(e.currentTarget)-1;t=null!=(s=d[o])?s:d[d.length-1]}null==(n=t)||n.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:i.map((function(e){var n=e.value,t=e.label,s=e.attributes;return(0,f.jsx)("li",Object.assign({role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:function(e){return d.push(e)},onKeyDown:u,onClick:l},s,{className:(0,r.A)("tabs__item",m.tabItem,null==s?void 0:s.className,{"tabs__item--active":a===n}),children:null!=t?t:n}),n)}))})}function b(e){var n=e.lazy,t=e.children,r=e.selectedValue,s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var o=s.find((function(e){return e.props.value===r}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})}))})}function k(e){var n=g(e);return(0,f.jsxs)("div",{className:(0,r.A)("tabs-container",m.tabList),children:[(0,f.jsx)(v,Object.assign({},e,n)),(0,f.jsx)(b,Object.assign({},e,n))]})}function j(e){var n=(0,y.A)();return(0,f.jsx)(k,Object.assign({},e,{children:l(e.children)}),String(n))}},90275:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/lake_sign_on-65f61d85b75362238725a2a2f3a1c4fd.png"},50938:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/lake_welcome_page-70f9995600a3a89bb5cd0cdcd892054a.png"},3983:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/account-settings-473ea3161671d3001026149234f7b1bc.png"},87741:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/click-access-token-3d0c05b4e674b8b0d10521014fdadc4e.png"},10512:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/click-private-key-d073fcfa04a62fb1459e2136247eec54.png"},69618:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/save-access-token-1c54c68335eacd01247314b883d6e6e4.png"},25449:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/save-private-key-6add4af2c9172df6e659e553fc252ae4.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var a=t(96540);const r={},s=a.createContext(r);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);