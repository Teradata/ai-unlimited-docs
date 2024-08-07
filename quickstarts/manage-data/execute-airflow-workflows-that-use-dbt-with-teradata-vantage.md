---
sidebar_position: 13
author: Igor Machin, Ambrose Inman
email: igor.machin@teradata.com
page_last_update: November 18th, 2022
description: Execute Airflow workflows that use dbt with Teradata Vantage
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, object storage, business intelligence, enterprise analytics, airflow, queries, dbt]
---

#  Execute Airflow workflows that use dbt with Teradata Vantage

## Overview

This tutorial demonstrates how to install Airflow on an AWS EC2 VM, configure the workflow to use dbt, and run it against a Teradata Vantage database. Airflow is a task scheduling tool that is typically used to build data pipelines to process and load data. In this example, we go through the Airflow installation process, which creates a Docker-based Airflow environment. Once Airflow is installed, we run several Airflow DAG (Direct Acyclic Graph, or simply workflow) examples that load data into a Teradata Vantage database.

## Prerequsites

1. Access to AWS (Amazon Web Services) with permissions to create a VM.
:::tip
This tutorial can be adjusted to other compute platforms or even on a bare metal machine as long as it has a computing and storage capacity comparable to the machine mentioned in this document (t2.2xlarge EC2 on AWS with approximately 100GB of storage) and is connected to the internet. If you decide to use a different compute platform, some steps in the tutorial will have to be altered.
:::
2. An SSH client.
:::tip
If you are on a Mac or a Linux machine, these tools are already included. If you are on Windows, consider [PuTTY](https://www.putty.org) or [MobaXterm](https://mobaxterm.mobatek.net/download.html).
:::
3. Access to a Teradata Vantage database. If you don't have access to Teradata Vantage, explore [Vantage Express](../get-access-to-vantage/on-your-local/getting-started-utm.md) - a free edition for developers.

## Install and execute Airflow

### Create a VM
1. Go to the AWS EC2 console and click on `Launch instance`.
2. Select `Red Hat` for OS image.
3. Select `t2.2xlarge` for instance type.
4. Create a new key pair or use an existing one.
5. Apply network settings that will allow you ssh to the server and the server will have outbound connectivity to the Internet. Usually, applying the default settings will do.
6. Assign 100GB of storage.

### Install Python

1. ssh to the machine using `ec2-user` user.

2. Check if python is installed (should be Python 3.7 or higher). Type `python` or `python3` on the command line.

3. If python is not installed (you are getting `command not found` message) run the commands below to install it. The commands may require you to confirm the installation by typing `y` and enter.

``` bash , id="install_python", role="content-editable emits-gtm-events"
sudo yum install python3
# create a virtual environment for the project
sudo yum install python3-pip
sudo pip3 install virtualenv
```

### Create an Airflow environment

1. Create the Airflow directory structure (from the ec2-user home directory /home/ec2-user)

``` bash , id="install_airflow", role="content-editable emits-gtm-events"
mkdir airflow
cd airflow
mkdir -p ./dags ./logs ./plugins ./data ./config ./data
echo -e "AIRFLOW_UID=$(id -u)" > .env
```

2. Use your preferred file transfer tool (`scp`, `PuTTY`, `MobaXterm`, or similar) to upload [airflow.cfg](../other-integrations/attachments/execute-airflow-workflows-that-use-dbt-with-teradata-vantage/airflow.cfg) file to `airflow/config` directory.

### Install Docker

Docker is a containerization tool that allows us to install Airflow in a containerized environment.

:::note
The steps must be executed in `airflow` directory.
:::

1. Uninstall podman (RHEL containerization tool)

``` bash , id="uninstall_podman", role="content-editable emits-gtm-events"
sudo yum remove docker \
docker-client \
docker-client-latest \
docker-common \
docker-latest \
docker-latest-logrotate \
docker-logrotate \
docker-engine \
podman \
runc
```

2. Install yum utilities

``` bash , id="install_yum", role="content-editable emits-gtm-events"
sudo yum install -y yum-utils
```

3. Add docker to yum repository.

``` bash , id="add_docker_to_yum", role="content-editable emits-gtm-events"
sudo yum-config-manager \
--add-repo \
https://download.docker.com/linux/centos/docker-ce.repo
```

4. Install docker.

``` bash , id="install_docker", role="content-editable emits-gtm-events"
sudo yum install docker-ce docker-ce-cli containerd.io
```

5. Start docker as a service. The first command runs the docker service automatically when the system starts up next time. The second command starts Docker now.

``` bash , id="start_docker", role="content-editable emits-gtm-events"
sudo systemctl enable docker
sudo systemctl start docker
```

6. Check if Docker is installed correctly. This command should return an empty list of containers (since we have not started any container yet):

``` bash , id="check_docker", role="content-editable emits-gtm-events"
sudo docker ps
```

### Install `docker-compose` and docker environment configuration files

1. Upload [Dockerfile](../other-integrations/attachments/execute-airflow-workflows-that-use-dbt-with-teradata-vantage/docker-compose.yaml) and [Dockerfile](attachments/Dockerfile.txt) files to the VM and save them in `airflow` directory.

:::tip 
What `docker-compose.yaml` and `Dockerfile` do
`docker-compose.yaml` and `Dockerfile` files are necessary to build the environment during the installation. The `docker-compose.yaml` file downloads and installs the Airflow docker container. The container includes the web ui, a Postgres database for metadata, the scheduler, 3 workers (so 3 tasks can be run in parallel), the trigger and the nginx web server to show the docs produced by `dbt`. In addition host directories are mounted on containers and various other install processes are performed. `Dockerfile` will additionally install needed packages in each container.

If you would like to learn more what `docker-compose.yaml` and `Dockerfile` files do, examine these files. There are comments which clarify what is installed and why.
:::

2. Install docker-compose (necessary to run the yaml file).

:::note
The instructions are based on version 1.29.2. Check out https://github.com/docker/compose/releases site for the latest release and update the command below as needed.
:::

``` bash , id="install_docker_compose", role="content-editable emits-gtm-events"
sudo curl -L https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
```

3. Test your docker-compose installation. The command should return the docker-compose version, for example `docker-compose version 1.29.2, build 5becea4c`:

``` bash , id="check_docker_compose", role="content-editable emits-gtm-events"
docker-compose --version
```

### Install a test dbt project

:::note 
These steps set up a sample dbt project. `dbt` tool itself will be installed on the containers later by `docker-compose`.
:::

1. Install git:

``` bash , id="install_git", role="content-editable emits-gtm-events"
sudo yum install git
```

2. Get the sample jaffle shop dbt project:

:::note
The dbt directories will be created under the home directory (not under `airflow`). The home directory in our example is `/home/ec2-user`.
:::

``` bash , id="download_sample_dbt_project", role="content-editable emits-gtm-events"
# move to home dir
cd
mkdir dbt
cd dbt
git clone https://github.com/Teradata/jaffle_shop-dev.git jaffle_shop
cd jaffle_shop
mkdir target
chmod 777 target
echo '' > target/index.html
chmod o+w target/index.html
```

3. Create the `airflowtest` and `jaffle_shop` users/databases on your Teradata database by using your preferred database tool (Teradata Studio Express, `bteq` or similar). Log into the database as `dbc`, then execute the commands (change the passwords if needed):

``` sql , id="create_databases", role="content-editable emits-gtm-events"
CREATE USER "airflowtest" FROM "dbc" AS PERM=5000000000 PASSWORD="abcd";
CREATE USER "jaffle_shop" FROM "dbc" AS PERM=5000000000 PASSWORD="abcd";
```

4. Create the dbt configuration directory:

``` bash , id="create_dbt_config_dir", role="content-editable emits-gtm-events"
cd
mkdir .dbt
```

5. Copy [profiles.yml](../other-integrations/attachments/execute-airflow-workflows-that-use-dbt-with-teradata-vantage/profiles.yml) into the `.dbt` directory.

6. Edit the file so it corresponds to your Teradata database setup. At a minium, you will need to change the host, user and password. Use `jaffle_shop` user credentials you set up in step 3.

### Create the Airflow environment in Docker

1. Run the docker environment creation script in the `airflow` directory where `Dockerfile` and `docker-compose.yaml`:

``` bash , id="run_docker_compose", role="content-editable emits-gtm-events"
cd ~/airflow
sudo docker-compose up --build
```

This can take 5-10 minutes, when the installation is complete you should see on the screen a message similar to this:

``` bash , id="run_docker_compose_response", role="content-editable emits-gtm-events"
airflow-webserver_1  | 127.0.0.1 - - [13/Sep/2022:00:20:48 +0000] "GET /health HTTP/1.1" 200 187 "-" "curl/7.74.0"
```

This means the Airflow webserver is ready to accept calls.

2. Now Airflow should be up. The terminal session that we were using during the installation will be used to display log messages, so it is recommended
to open another terminal session for subsequent steps. To check the Airflow installation type:

``` bash , id="check_airflow_in_docker", role="content-editable emits-gtm-events"
sudo docker ps
```

The result should be something like:

``` bash , id="check_airflow_in_docker_output", role="content-editable emits-gtm-events"
CONTAINER ID   IMAGE                  COMMAND                  CREATED          STATUS                    PORTS                                                 NAMES
60d50d9f43f5   apache/airflow:2.2.4   "/usr/bin/dumb-init …"   18 minutes ago   Up 18 minutes (healthy)   8080/tcp                                              airflow_airflow-scheduler_1
e2b46ec98274   apache/airflow:2.2.4   "/usr/bin/dumb-init …"   18 minutes ago   Up 18 minutes (healthy)   8080/tcp                                              airflow_airflow-worker_3_1
7b44004c7277   apache/airflow:2.2.4   "/usr/bin/dumb-init …"   18 minutes ago   Up 18 minutes (healthy)   8080/tcp                                              airflow_airflow-worker_1_1
4017b8ce9235   apache/airflow:2.2.4   "/usr/bin/dumb-init …"   18 minutes ago   Up 18 minutes (healthy)   0.0.0.0:8080->8080/tcp, :::8080->8080/tcp             airflow_airflow-webserver_1
3cc407e2d565   apache/airflow:2.2.4   "/usr/bin/dumb-init …"   18 minutes ago   Up 18 minutes (healthy)   0.0.0.0:5555->5555/tcp, :::5555->5555/tcp, 8080/tcp   airflow_flower_1
340a83b202e3   apache/airflow:2.2.4   "/usr/bin/dumb-init …"   18 minutes ago   Up 18 minutes (healthy)   8080/tcp                                              airflow_airflow-triggerer_1
82198f0d8b84   apache/airflow:2.2.4   "/usr/bin/dumb-init …"   18 minutes ago   Up 18 minutes (healthy)   8080/tcp                                              airflow_airflow-worker_2_1
382c3077c1e5   redis:latest           "docker-entrypoint.s…"   18 minutes ago   Up 18 minutes (healthy)   6379/tcp                                              airflow_redis_1
8a3be8d8a7f4   nginx                  "/docker-entrypoint.…"   18 minutes ago   Up 18 minutes (healthy)   0.0.0.0:4000->80/tcp, :::4000->80/tcp                 airflow_nginx_1
9ca888e9e8df   postgres:13            "docker-entrypoint.s…"   18 minutes ago   Up 18 minutes (healthy)   5432/tcp                                              airflow_postgres_1
```

3. OPTIONAL: If you want to delete the docker installation (for example to update the docker-compose.yaml and the Dockerfile files and recreate a different environment), the command is (from the airflow directory where these files are located):

``` bash , id="docker_compose_down", role="content-editable emits-gtm-events"
sudo docker-compose down --volumes --rmi all
```

Once the stack is down, update the configuration files and restart by running the command in step 1.


4. To test if the Airflow web UI works, type the following urls on your browser. Replace `<VM_IP_ADDRESS>` with the external IP address of the VM:
  * DAG UI: `http://<YOUR_IP_ADDRESS>:8080/home` - username: airflow / password: airflow
  * Flower Airflow UI (worker control): `http://<YOUR_IP_ADDRESS>:5555/`

### Run an Airflow DAG

1. Copy [airflow_dbt_integration.py](../other-integrations/attachments/execute-airflow-workflows-that-use-dbt-with-teradata-vantage/airflow_dbt_integration.py), [db_test_example_dag.py](../other-integrations/attachments/execute-airflow-workflows-that-use-dbt-with-teradata-vantage/db_test_example_dag.py), [discover_dag.py](../other-integrations/attachments/execute-airflow-workflows-that-use-dbt-with-teradata-vantage/discover_dag.py), [variables.json](../other-integrations/attachments/execute-airflow-workflows-that-use-dbt-with-teradata-vantage/variables.json) files to `/home/ec2-user/airflow/dags`.
2. Examine the files:
* `airflow_dbt_integration.py` - a simple Teradata sql example that creates a few tables and runs queries.
* `db_test_example_dag.py` - runs a dbt example [i.e. integration of dbt and airflow with a Teradata database). In this example a fictitious jaffle_shop data model is created, loaded and the documentation for this project is produced (you can view it by pointing your browser to `http://<VM_IP_ADDRESS>:4000/`)

:::note
[Adjust `db_test_example_dag.py`]
`db_test_example_dag.py` needs to be updated so that the Teradata database IP address points to your database.
:::

* `discover_dag.py` - an example on how to load various types of data files (CSV, Parquet, JSON). The source code file contains comments that explain what the program does and how to use it. This example relies on `variables.json` file. The file needs to be imported into Airflow. It will happen in subsequent steps.

3. Wait for a few minutes until these dag files are picked up by the airflow tool. Once they are picked up they will appear on the list of dags on the Airflow home page.

4. Import `variables.json` file as a variable file into Airflow:
* Click on `Admin -> Variables` menu item to go to the Variables page
![Airflow admin dropdown](../other-integrations/images/execute-airflow-workflows-that-use-dbt-with-teradata-vantage/admin-dropdown.png)
* Click on `Choose File`, then select `variable.json` in your file explorer and click on `Import Variables`
![Airflow admin dropdown](../other-integrations/images/execute-airflow-workflows-that-use-dbt-with-teradata-vantage/import-variables.png)
* Edit the variables to match your environment


5. Run the dags from the UI and check the logs.



## Summary

This tutorial aimed at providing a hands on exercise on how to install an Airflow environment on a Linux server and how to use Airflow to interact with a Teradata Vantage database. An additional example is provided on how to integrate Airflow and the data modelling and maintenance tool dbt to create and load a Teradata Vantage database.

## Further reading
* [Use dbt (data build tool) with Teradata Vantage](dbt.md)

import CommunityLinkPartial from '../_partials/community_link.mdx';

<CommunityLinkPartial />