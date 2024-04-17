---
id: deploy-manager-aws-console
title: Teradata - AI Unlimited - Deploy the manager using the AWS console
description: Learn how to deploy the AI Unlimited manager using the CloudFormation template.
sidebar_label: Deploy the CloudFormation template
sidebar_position: 2
---

# Deploy the CloudFormation template

The CloudFormation template deploys a server instance with the AI Unlimited manager running in a container controlled by [systemd](/docs/glossary.md#glo-systemd).

:::note
References to the AWS Management Console are accurate as of April 11, 2024.
:::

## Download the manager template

import MyPartial from '/docs/_partials/_choose-aws-manager-template.mdx';

<MyPartial />

Download the template.

## Load the template	

1. Sign in to the [AWS](https://aws.amazon.com) console.
2. Select the AWS region in which to deploy AI Unlimited. Teradata recommends selecting the region closest to your primary work location.
3. Search for and go to **CloudFormation**.
4. Select **Create Stack**, then **With new resources (standard)**.
5. Under **Prerequisite - Prepare template**, select **Choose an existing template**.
6. Under **Specify template**,  select **Upload a template file**.
7. Choose the template file you downloaded, and click **Next**.  

## Specify stack details and options

1. Provide a stack name.
2. Review the parameters. Provide values for the required ones. Your organization might require others.

:::note
The parameters for each template vary. You might see some in the table that you don't see in the AWS console.
:::

<details>

<summary>AWS and AI Unlimited parameters</summary>
| Parameter | Description | Required? | Default | Notes
|---------|-------------|-----------|-----------|-----------|
| Stack name	| The identifier that helps you find the AI Unlimited stack from a list of stacks.	|Required| | The name can contain only alphanumeric characters (case-sensitive) and hyphens. It must start with an alphabetic character and can't be longer than 128 characters.|
|AiUnlimitedName| The name of the AI Unlimited instance. |Required with default|ai-unlimited| The name can contain only alphanumeric characters (case-sensitive) and hyphens. It must start with an alphabetic character and can't be longer than 20 characters.|
| InstanceType | The EC2 instance type that you want to use for the service. | Required with default | t3.small | Teradata recommends using the default instance type to save costs. |
| RootVolumeSize | The size of the root disk you want to attach to the instance, in GB. | Required with default | 8 | Supports values between 8 and 1000. |
| TerminationProtection | Enable instance termination protection. | Required with default | false | |
|IamRole | Specifies whether CloudFormation should create a new IAM role or use an existing one. | Required with default | New | Supported options are: New or Existing |
|IamRoleName | The name of the IAM role to assign to the instance, either an existing IAM role or a  newly created IAM role. | Optional with default | ai-unlimited-iam-role | If naming a new IAM role, CloudFormation requires the CAPABILITY_NAMED_IAM capability. Leave this blank to use an autogenerated name. |
|IamPermissionsBoundary	| The ARN of the IAM permissions boundary to associate with the IAM role assigned to the instance. | Optional | | |
|AvailabilityZone | The availability zone to which you want to deploy the instance. |Required | |The value must match the subnet, the zone of any pre-existing volumes, and the instance type must be available in the selected zone. |
|LoadBalancerScheme	| If a load balancer is used, this field specifies whether the instance is accessible from the Internet or only from within the VPC.	|Optional with default	|Internet-facing	|The DNS name of an Internet-facing load balancer is publicly resolvable to the public IP addresses of the nodes. Therefore, Internet-facing load balancers can route requests from clients over the Internet. The nodes of an internal load balancer have only private IP addresses. The DNS name of an internal load balancer is publicly resolvable to the personal IP addresses of the nodes. Therefore, internal load balancers can route requests from clients with access to the VPC for the load balancer.|
|LoadBalancerSubnetOne | The subnet where the load balancer is hosted. The subnet determines load balancer availability zones, IP addresses, and endpoints. |Optional with default	|	| You must define a minimum of one available subnet to create a Network Load Balancer (NLB) and two subnets for an Application Load Balancer (ALB).|
| LoadBalancerSubnetTwo| The subnet where the load balancer is hosted. |Optional. This option is only available in the template with ALB.||This subnet must be in a different availability zone than the first subnet you chose.|
|HostedZoneID |	The ID that Amazon Route 53 assigned to the hosted zone when you created it.|||	Each hosted zone corresponds to a domain name, or possibly a subdomain. The hosted zone is the container for DNS records, where you configure how the world interacts with your domain, such as pointing it to an IP address with a record. On the AWS console, go to **Route 53** > **Hosted zones**. Find your registered domain name and the corresponding Hosted zone ID.|
|DnsName|	The name of the domain. For public hosted zones, this is the name you registered with your DNS registrar. | | |For information about how to specify characters other than a-z, 0-9, and - (hyphen) and how to specify internationalized domain names, see [Create Hosted Zone](https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateHostedZone.html).|
|Private	|Specifies whether the service is deployed in a private network without public IPs.|Required|false| |
|Session	|Specifies whether you can use the AWS Session Manager to access the instance.|Required|false| |
|Vpc		|The network to which you want to deploy the instance.|Required|||
|Subnet	|The subnetwork to which you want to deploy the instance.|Required||The subnet must reside in the selected availability zone.|
|KeyName		|The public/private key pair which allows you to connect securely to your instance after it launches. When you create an AWS account, this is the key pair you create in your preferred region.|Optional||Leave this field blank if you do not want to include the SSH keys.|
|AccessCIDR	|The CIDR IP address range that is permitted to access the instance. |Optional||Teradata recommends setting this value to a trusted IP range. Define at least one of AccessCIDR, PrefixList, or SecurityGroup to allow inbound traffic unless you create custom security group ingress rules.|
|PrefixList	|The prefix list that you can use to communicate with the instance. |Optional ||Define at least one of AccessCIDR, PrefixList, or SecurityGroup to allow inbound traffic unless you create custom security group ingress rules.|
|SecurityGroup	|The virtual firewall that controls inbound and outbound traffic to the instance. |Optional | |Implemented as a set of rules that specify which protocols, ports, and IP addresses or CIDR blocks are allowed to access the instance. Define at least one of AccessCIDR, PrefixList, or SecurityGroup to allow inbound traffic unless you create custom security group ingress rules.|
|AIUnlimitedHttpPort		|The port to access the AI Unlimited UI.|Required with default	|3000||
|AIUnlimitedGrpcPort		|The port to access the AI Unlimited API.|Required with default|3282||
|AIUnlimitedVersion		|The version of AI Unlimited you want to deploy.|Required with default|latest|The value is a container version tag.|
|UsePersistentVolume|Specifies whether you want to use persistent volume to store data.|Optional with default|None|Supported options are: new persistent volume, an existing one, or none, depending on your use case.|
|PersistentVolumeSize	|The size of the persistent volume that you can attach to the instance, in GB.|Required with default|8|Supports values between 8 and 1000|
|ExistingPersistentVolumeId		|The ID of the existing persistent volume that you can attach to the instance. |Required if UsePersistentVolume is set to Existing	||The persistent volume must be in the same availability zone as the AI Unlimited instance.|
|PersistentVolumeDeletionPolicy		|The persistent volume behavior when you delete the CloudFormations deployment.|Required with default|Delete|Supported options are: Delete, Retain, RetainExceptOnCreate, and Snapshot.|
|LatestAmiId	|The ID of the image that points to the latest version of AMI. This value is used for the SSM lookup.|Required with defaults||This deployment uses the latest ami-amazon-linux-latest/amzn2-ami-hvm-x86_64-gp2 image available. IMPORTANT: Changing this value may break the stack.

</details>

***These are all the parms for the 3 templates this topic uses, correct? Just to make sure, do they exlude any that are for the all-in-one?*** 
**TA: Yes, I verified the fields***

***If/when we know there will be no more changes, we should verify all of them.***

***Possible to include the section names in the table? AI Unlimited, AI Unlimited connection, and Persistent volume. I tried and couldn't do it.*** **TA: Table design restriction for Markdown*** Can provide an row with the headers but columns can't be merged***

***Persistent volume parms are in the table. Do we need a section in this topic for more info about persistent volumes (from the readme - and like what's in the tech review content)? If we can slim that down and put it in the Notes column of the table, that would be best.*** 

***TA: I think, the important bits can be in the table, as it would help users make the right selection at that point in time, or provide a link to a topic in the advanced section***

4. Select **Next**.
5. [Configure stack options](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-console-add-tags.html) per your requirements, then select **Next**. 

## Review and create the stack

1. Review the template settings. 
2. Select the check box to acknowledge that the template will create IAM resources. 
3. Select **Submit** to deploy the stack. 

***This is as far as I could get. Need someone who can actually create resources to test what happens next.***

You can monitor the stack's status. When you see `CREATE_COMPLETE`, the AI Unlimited manager is ready. 

Use the URLs on the stack's **Outputs** tab to view the created resources. You'll need the host (the IP address or hostname) when you connect to the manager from a Jupyter notebook. ***Is that on the Outputs tab?***  ***Verify wording.*** 




