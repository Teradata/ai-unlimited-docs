---
sidebar_position: 1
author: Adam Tworkiewicz
email: adam.tworkiewicz@teradata.com
page_last_update: December 12th, 2022
description: Run Vantage Express on AWS.
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, object storage, business intelligence, enterprise analytics, AWS]
---

import UseCase from '../../_partials/use-csae.mdx';
import CommunityLink from '../../_partials/community_link.mdx';
import InstallVeInPublic from '../../_partials/install-ve-in-public.mdx';

# Run Vantage Express on AWS

<UseCase />

## Overview

This how-to demonstrates how to run Vantage Express on AWS. Vantage Express is a small footprint configuration that contains a fully functional Teradata SQL Engine.


:::info
<b>Cloud charges</b>

Vantage Express is distributed as a virtual machine image. This how-to uses the EC2 `c5n.metal` instance type. It's a bare metal instance that costs over $3/h.

If you want a cheaper option, try [Google Cloud](./vantage-express-gcp.md) and [Azure](run-vantage-express-on-microsoft-azure.md) which support nested virtualization and can run Vantage Express on cheap VM's.

If you do not wish to pay for cloud usage, you can get a free hosted instance of Vantage at [https://clearscape.teradata.com/](https://clearscape.teradata.com/). Alternatively, you install Vantage Express locally using [VMware](../on-your-local/getting-started-vmware.md), [VirtualBox](../on-your-local/getting-started-vbox.md), or [UTM](../on-your-local/getting-started-utm.md).
:::

## Prerequisites

* An AWS account. If you need to create a new account follow [the official AWS instructions](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/).
* `awscli` command line utility installed and configured on your machine. You can find installation instructions here: [https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html).

## Installation


* You will need a VPC with an Internet-facing subnet. If you don't have one available, here is how you can create it:

```bash
# Copied from https://cloudaffaire.com/how-to-create-a-custom-vpc-using-aws-cli/

# Create VPC
AWS_VPC_ID=$(aws ec2 create-vpc \
  --cidr-block 10.0.0.0/16 \
  --query 'Vpc.{VpcId:VpcId}' \
  --output text)

# Enable DNS hostname for your VPC
aws ec2 modify-vpc-attribute \
  --vpc-id $AWS_VPC_ID \
  --enable-dns-hostnames "{\"Value\":true}"

# Create a public subnet
AWS_SUBNET_PUBLIC_ID=$(aws ec2 create-subnet \
  --vpc-id $AWS_VPC_ID --cidr-block 10.0.1.0/24 \
  --query 'Subnet.{SubnetId:SubnetId}' \
  --output text)

# Enable Auto-assign Public IP on Public Subnet
aws ec2 modify-subnet-attribute \
  --subnet-id $AWS_SUBNET_PUBLIC_ID \
  --map-public-ip-on-launch

# Create an Internet Gateway
AWS_INTERNET_GATEWAY_ID=$(aws ec2 create-internet-gateway \
  --query 'InternetGateway.{InternetGatewayId:InternetGatewayId}' \
  --output text)

# Attach Internet gateway to your VPC
aws ec2 attach-internet-gateway \
  --vpc-id $AWS_VPC_ID \
  --internet-gateway-id $AWS_INTERNET_GATEWAY_ID

# Create a route table
AWS_CUSTOM_ROUTE_TABLE_ID=$(aws ec2 create-route-table \
  --vpc-id $AWS_VPC_ID \
  --query 'RouteTable.{RouteTableId:RouteTableId}' \
  --output text )

# Create route to Internet Gateway
aws ec2 create-route \
  --route-table-id $AWS_CUSTOM_ROUTE_TABLE_ID \
  --destination-cidr-block 0.0.0.0/0 \
  --gateway-id $AWS_INTERNET_GATEWAY_ID \
  --output text

# Associate the public subnet with route table
AWS_ROUTE_TABLE_ASSOID=$(aws ec2 associate-route-table  \
  --subnet-id $AWS_SUBNET_PUBLIC_ID \
  --route-table-id $AWS_CUSTOM_ROUTE_TABLE_ID \
  --output text | head -1)

# Create a security group
aws ec2 create-security-group \
  --vpc-id $AWS_VPC_ID \
  --group-name myvpc-security-group \
  --description 'My VPC non default security group' \
  --output text

# Get security group ID's
AWS_DEFAULT_SECURITY_GROUP_ID=$(aws ec2 describe-security-groups \
  --filters "Name=vpc-id,Values=$AWS_VPC_ID" \
  --query 'SecurityGroups[?GroupName == `default`].GroupId' \
  --output text) &&
  AWS_CUSTOM_SECURITY_GROUP_ID=$(aws ec2 describe-security-groups \
  --filters "Name=vpc-id,Values=$AWS_VPC_ID" \
  --query 'SecurityGroups[?GroupName == `myvpc-security-group`].GroupId' \
  --output text)

# Create security group ingress rules
aws ec2 authorize-security-group-ingress \
  --group-id $AWS_CUSTOM_SECURITY_GROUP_ID \
  --ip-permissions '[{"IpProtocol": "tcp", "FromPort": 22, "ToPort": 22, "IpRanges": [{"CidrIp": "0.0.0.0/0", "Description": "Allow SSH"}]}]' \
  --output text

# Add a tag to the VPC
aws ec2 create-tags \
  --resources $AWS_VPC_ID \
  --tags "Key=Name,Value=vantage-express-vpc"

# Add a tag to public subnet
aws ec2 create-tags \
  --resources $AWS_SUBNET_PUBLIC_ID \
  --tags "Key=Name,Value=vantage-express-vpc-public-subnet"

# Add a tag to the Internet-Gateway
aws ec2 create-tags \
  --resources $AWS_INTERNET_GATEWAY_ID \
  --tags "Key=Name,Value=vantage-express-vpc-internet-gateway"

# Add a tag to the default route table
AWS_DEFAULT_ROUTE_TABLE_ID=$(aws ec2 describe-route-tables \
  --filters "Name=vpc-id,Values=$AWS_VPC_ID" \
  --query 'RouteTables[?Associations[0].Main != `false`].RouteTableId' \
  --output text) &&
  aws ec2 create-tags \
  --resources $AWS_DEFAULT_ROUTE_TABLE_ID \
  --tags "Key=Name,Value=vantage-express-vpc-default-route-table"

# Add a tag to the public route table
aws ec2 create-tags \
  --resources $AWS_CUSTOM_ROUTE_TABLE_ID \
  --tags "Key=Name,Value=vantage-express-vpc-public-route-table"

# Add a tags to security groups
aws ec2 create-tags \
  --resources $AWS_CUSTOM_SECURITY_GROUP_ID \
  --tags "Key=Name,Value=vantage-express-vpc-security-group" &&
  aws ec2 create-tags \
  --resources $AWS_DEFAULT_SECURITY_GROUP_ID \
  --tags "Key=Name,Value=vantage-express-vpc-default-security-group"

```

* To create a VM you will need an ssh key pair. If you don't have it already, create one:
```bash
aws ec2 create-key-pair --key-name vantage-key --query 'KeyMaterial' --output text > vantage-key.pem
```

* Restrict access to the private key. Replace `<path_to_private_key_file>` with the private key path returned by the previous command:

```bash
chmod 600 vantage-key.pem
```
* Get the AMI id of the latest Ubuntu image in your region:
```bash
AWS_AMI_ID=$(aws ec2 describe-images \
  --filters 'Name=name,Values=ubuntu/images/hvm-ssd/ubuntu-*amd64*' \
  --query 'Images[*].[Name,ImageId,CreationDate]' --output text \
  | sort -k3 -r | head -n1 | cut -f 2)
```
* Create a Ubuntu VM with 4 CPU's and 8GB of RAM, and a 70GB disk. 
```bash
AWS_INSTANCE_ID=$(aws ec2 run-instances \
  --image-id $AWS_AMI_ID \
  --count 1 \
  --instance-type c5n.metal \
  --block-device-mapping DeviceName=/dev/sda1,Ebs={VolumeSize=70} \
  --key-name vantage-key \
  --security-group-ids $AWS_CUSTOM_SECURITY_GROUP_ID \
  --subnet-id $AWS_SUBNET_PUBLIC_ID \
  --query 'Instances[0].InstanceId' \
  --output text)
```
* ssh to your VM:
```bash
AWS_INSTANCE_PUBLIC_IP=$(aws ec2 describe-instances \
  --query "Reservations[*].Instances[*].PublicIpAddress" \
  --output=text --instance-ids $AWS_INSTANCE_ID)
ssh -i vantage-key.pem ubuntu@$AWS_INSTANCE_PUBLIC_IP
```

* Once in the VM, switch to `root` user:
```bash
sudo -i
```

* Prepare the download directory for Vantage Express:
```bash
mkdir /opt/downloads
cd /opt/downloads
```
<InstallVeInPublic />

* If you would like to connect to Vantage Express from the Internet, you will need to open up firewall holes to your VM. You should also change the default password to `dbc` user:
* To change the password for `dbc` user go to your VM and start bteq:
```bash
bteq
```

* Login to your database using `dbc` as username and password:
```bash
.logon localhost/dbc
```

* Change the password for `dbc` user:
```bash
MODIFY USER dbc AS PASSWORD = new_password;
```

* You can now open up port 1025 to the internet:
```bash
aws ec2 authorize-security-group-ingress \
  --group-id $AWS_CUSTOM_SECURITY_GROUP_ID \
  --ip-permissions '[{"IpProtocol": "tcp", "FromPort": 1025, "ToPort": 1025, "IpRanges": [{"CidrIp": "0.0.0.0/0", "Description": "Allow Teradata port"}]}]'
```

## Cleanup
To stop incurring charges, delete all the resources:
```bash
# Delete the VM
aws ec2 terminate-instances --instance-ids $AWS_INSTANCE_ID --output text

# Wait for the VM to terminate

# Delete custom security group
aws ec2 delete-security-group \
  --group-id $AWS_CUSTOM_SECURITY_GROUP_ID

# Delete internet gateway
aws ec2 detach-internet-gateway \
  --internet-gateway-id $AWS_INTERNET_GATEWAY_ID \
  --vpc-id $AWS_VPC_ID &&
  aws ec2 delete-internet-gateway \
  --internet-gateway-id $AWS_INTERNET_GATEWAY_ID

# Delete the custom route table
aws ec2 disassociate-route-table \
  --association-id $AWS_ROUTE_TABLE_ASSOID &&
  aws ec2 delete-route-table \
  --route-table-id $AWS_CUSTOM_ROUTE_TABLE_ID

# Delete the public subnet
aws ec2 delete-subnet \
  --subnet-id $AWS_SUBNET_PUBLIC_ID

# Delete the vpc
aws ec2 delete-vpc \
  --vpc-id $AWS_VPC_ID
```

## Next steps
* [Query data stored in object storage](../../manage-data/nos.md)

## Further reading
* [Teradata® Studio™ and Studio™ Express Installation Guide](https://docs.teradata.com/r/Teradata-StudioTM-and-StudioTM-Express-Installation-Guide-17.20)
* [Introduction to BTEQ](https://docs.teradata.com/r/jmAxXLdiDu6NiyjT6hhk7g/root)

<CommunityLink />


