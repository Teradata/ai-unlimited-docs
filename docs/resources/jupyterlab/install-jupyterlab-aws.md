---
id: deploy-jupyter-aws-console
title: Install JupyterLab on AWS
description: Learn how to deploy JupyterLab using a CloudFormation template.
sidebar_label: Install on AWS
sidebar_position: 1
pagination_prev: null
pagination_next: null
---

# Install JupyterLab on AWS

You'll use a CloudFormation template provided by Teradata to install JupyterLab and the AI Unlimited kernel from the AWS Management Console. 

This deploys a server instance, with JupyterLab running in a container controlled by [systemd](../../glossary.md#systemd).

:::tip
For installation support, email the <a href="mailto:aiunlimited.support@Teradata.com">support team</a> or ask the [community](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa).
:::

## Prepare your AWS account

- Work with your cloud admin to ensure you have the [IAM](https://aws.amazon.com/iam/) permissions to create the cloud resources defined in the [JupyterLab template](https://github.com/Teradata/ai-unlimited/tree/develop/deployments/aws/templates/jupyter).

- If you'll need to access the JupyterLab instance to run commands or debug, you can use a [key pair](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html) to securely connect using Secure Shell (SSH). You will need the key pair when you [specify the stack details](#specify-stack-details-and-options).
  
- If you plan to use an [Application Load Balancer (ALB)](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancer-getting-started.html) or [Network Load Balancer (NLB)](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancer-getting-started.html), make sure you have permission to manage these AWS services:
	- [AWS Certificate Manager](https://docs.aws.amazon.com/acm/)&mdash;to issue a new certificate for the hosted zone ID in Route 53.
	- [AWS Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html)&mdash;to configure a custom domain name and route DNS queries to your load balancer.


## Clone the repository

import MyPartial from '../../_partials/_clone-repo.mdx';

<MyPartial />


## Locate the Jupyter template

CloudFormation templates for JupyterLab are here in the AI Unlimited GitHub repository:

`deployments/aws/templates/jupyter`

Choose a template based on whether you intend to use a [load balancer](../../glossary.md#load-balancer) and what type.
:::note
You might want to ask a cloud admin at your organization for guidance.
:::
    - `jupyter-alb.yaml`&mdash;Hosts JupyterLab behind an [application load balancer](../../glossary.md#application-load-balancer)
    - `jupyter-with-nlb.yaml`&mdash;Hosts JupyterLab behind a [network load balancer](../../glossary.md#network-load-balancer)
    - `jupyter-without-lb.yaml`&mdash;No load balancer


## Load the template	

1. Sign in to the [AWS console](https://aws.amazon.com).
   :::note
   References to AWS Management Console are up-to-date as of May 29, 2024.
   :::
2. Select the region in which to deploy JupyterLab.<br/>
   We recommend selecting the region closest to your primary work location.
3. Search for and go to **CloudFormation**.
4. Select **Create Stack**, then **With new resources (standard)**.
5. Select **Choose an existing template** and **Upload a template file**.
6. Select the template file you chose to use, and click **Next**.


## Specify stack details and options

1. Provide a stack name.
2. Review the parameters. Provide values for the required ones. Your organization might require others.

<details>

<summary>AWS and JupyterLab parameters</summary>

| Parameter | Description | Notes 
|---------|-------------|-----------|
| InstanceType | The EC2 instance type that you want to use for the service. | Required with default<br/>Default: t3.small<br/>We recommend using the default instance type to save costs. |
| RootVolumeSize | The size of the root disk you want to attach to the instance, in GB. | Required with default<br/>Default: 8<br/>Supports values between 8 and 1000. |
| TerminationProtection | Enable instance termination protection. | Required with default<br/>Default: false |
|IamRole | Specifies whether CloudFormation should create a new IAM role or use an existing one. | Required with default<br/>Default: New<br/>Supported options are: New or Existing |
|IamRoleName | The name of the IAM role to assign to the instance, either an existing IAM role or a  newly created IAM role. | Optional with default<br/>Default:  ai-unlimited-iam-role<br/>If naming a new IAM role, CloudFormation requires the CAPABILITY_NAMED_IAM capability. Leave this blank to use an autogenerated name. |
|IamPermissions<br/>Boundary | The ARN of the IAM permissions boundary to associate with the IAM role assigned to the instance.| Optional<br/>Default: NA|
|AvailabilityZone | The availability zone to which you want to deploy the instance. | Required<br/>Default: NA<br/>The value must match the subnet, the zone of any pre-existing volumes, and the instance type must be available in the selected zone. |
|LoadBalancing		|Specifies whether the instance is accessed via an NLB. | Required with default<br/>Default: NetworkLoadBalancer<br/>Supported options are: NetworkLoadBalancer or None |
|LoadBalancerScheme	| If a load balancer is used, this field specifies whether the instance is accessible from the Internet or only from within the VPC. | Optional with default<br/>Default: Internet-facing<br/>The DNS name of an Internet-facing load balancer is publicly resolvable to the public IP addresses of the nodes. Therefore, Internet-facing load balancers can route requests from clients over the Internet. The nodes of an internal load balancer have only private IP addresses. The DNS name of an internal load balancer is publicly resolvable to the personal IP addresses of the nodes. Therefore, internal load balancers can route requests from clients with access to the VPC for the load balancer.|
|Private	|Specifies whether the service is deployed in a private network without public IPs.| Required<br/>Default: false<br/>Make sure you select the `Enable auto-assign public IPv4 address` option in the subnet where the manager resides. If this option is not selected, the installation may fail.|
|Session	|Specifies whether you can use the AWS Session Manager to access the instance.| Required<br/>Default: false |
|Vpc		|The network to which you want to deploy the instance.|Required<br/>Default: NA|
|Subnet	|The subnetwork to which you want to deploy the instance. |Required<br/>Default: NA<br/>The subnet must reside in the selected availability zone.|
|KeyName		|The public/private key pair which allows you to connect securely to your instance after it launches. When you create an AWS account, this is the key pair you create in your preferred region.| Optional<br/>Default: NA<br/>Leave this field blank if you do not want to include the SSH keys.|
|AccessCIDR	|The CIDR IP address range that is permitted to access the instance.| Optional<br/>Default: NA<br/>We recommend setting this value to a trusted IP range. Define at least one of AccessCIDR, PrefixList, or SecurityGroup to allow inbound traffic unless you create custom security group ingress rules.|
|PrefixList			| The prefix list that you can use to communicate with the instance. It is a collection of CIDR blocks that define a set of IP address ranges that require the same policy enforcement. | Optional<br/>Default: NA<br/>Define at least one of AccessCIDR, PrefixList, or SecurityGroup to allow inbound traffic unless you create custom security group ingress rules.|
|SecurityGroup	|The virtual firewall that controls inbound and outbound traffic to the instance.| Optional<br/>Default: NA<br/>Implemented as a set of rules that specify which protocols, ports, and IP addresses or CIDR blocks are allowed to access the instance. Define at least one of AccessCIDR, PrefixList, or SecurityGroup to allow inbound traffic unless you create custom security group ingress rules.|
|UsePersistentVolume| Specifies whether you want to use a new or existing persistent volume to store data. See *Learn more: Using a persistent volume* below the parameters section. |Optional with default<br/>Default: New<br/>Supported options are a new persistent volume or an existing one, depending on your use case.|
|PersistentVolumeSize	|The size of the persistent volume that you can attach to the instance, in GB.|Required with default<br/>Default: 20<br/>Supports values between 8 and 1000|
|ExistingPersistent<br/>VolumeId		|The ID of the existing persistent volume that you can attach to the instance.| Required if UsePersistentVolume is set to Existing<br/>Default: NA<br/>The persistent volume must be in the same availability zone as the AI Unlimited instance.|
|PersistentVolume<br/>DeletionPolicy		|The persistent volume behavior when you delete the CloudFormation deployment.| Required with default<br/>Default:  Retain<br/>Supported options are: Delete, Retain, RetainExceptOnCreate, and Snapshot.|
|LatestAmiId	|The ID of the image that points to the latest version of AMI. This value is used for the SSM lookup.|Required with default<br/>Default: NA<br/>This deployment uses the latest ami-amazon-linux-latest/amzn2-ami-hvm-x86_64-gp2 image available.<br/>IMPORTANT: Changing this value may break the stack.|
| JupyterHttpPort | The port to access the JupyterLab service UI. | Required with default<br/>Default: 8888|
| JupyterVersion | The version of JupyterLab you want to deploy. | Required with default<br/>Default: latest<br/>The value is a container version tag, for example, latest. |
| JupyterToken | The token or password used to access JupyterLab from the UI. | Required<br/>Default: NA<br/>The token must begin with a letter and contain only alphanumeric characters. The allowed pattern is ^[a-zA-Z][a-zA-Z0-9-]*. |
</details>

<details>

<summary>Learn more: Using a persistent volume</summary>

The JupyterLab instance runs in a container and saves its configuration data in a database in the root volume of the instance. This data persists if you shut down, restart, or snapshot and relaunch the instance. 

A persistent volume stores data for a containerized application beyond the lifetime of the container, pod, or node in which it runs. 

**Without a persistent volume**

If the container, pod, or node crashes or terminates, you lose the JupyterLab configuration data. You can deploy a new JupyterLab instance, but not to the same state as the one that was lost.

**With a persistent volume**

If the container, pod, or node crashes or terminates, and the JupyterLab configuration data is stored in a persistent volume, you can deploy a new JupyterLab instance that has the same configuration as the one that was lost.

**Example**

1. Deploy JupyterLab, and include these parameters:
   - `UsePersistentVolume`: **New**
   - `PersistentVolumeDeletionPolicy`: **Retain**
3. After you create the stack, on the **Outputs** tab, note the `volume-id`.
4. Use JupyterLab.
5. If the JupyterLab instance is lost, deploy JupyterLab again, and include these parameters:
   - `UsePersistentVolume`: **New**
   - `PersistentVolumeDeletionPolicy`: **Retain** 
   - `ExistingPersistentVolumeId`: the value you noted in step 2
   
 The new JupyterLab instance has the same configuration as the one that was lost.

</details>

3. Select **Next**.
4. [Configure stack options](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-console-add-tags.html) per your requirements, then select **Next**. 


## Review and create the stack

1. Review the template settings. 
2. Select the check box to acknowledge that the template will create IAM resources. 
3. Select **Submit** to deploy the stack.<br />
On the **Events** tab, you can monitor progress. When the status of all the resources is `CREATE_COMPLETE`, the JupyterLab is ready. 

The **Outputs** tab shows the URL for accessing JupyterLab.



