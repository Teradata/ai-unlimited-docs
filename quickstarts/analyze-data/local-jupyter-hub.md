---
sidebar_position: 2
id: local-jupyter-hub
title: Deploy Teradata Jupyter extensions to JupyterHub
author: Hailing Jiang
email: Hailing.iang@teradata.com
page_last_update: November 17th, 2021
description: Deploy Teradata Jupyter extensions in customer JupyterHub clusters
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, java applications, business intelligence, enterprise analytics, jupyter, teradatasql, ipython-sql, teradatasqlalchemy]
---

import ClearscapeDocsNote from '../_partials/vantage_clearscape_analytics.mdx'
import CommunityLink from '../_partials/community_link.mdx'

# Deploy Teradata Jupyter extensions to JupyterHub

## Overview

For customers who have their own JupyterHub clusters, there are two options to integrate Teradata Jupyter extensions into the existing clusters:

1. Use Teradata Jupyter Docker image.
2. Customize an existing Docker image to include Teradata extensions.

This page contains detailed instructions on the two options. Instructions are based on the assumption that the customer JupyterHub deployment is based on [Zero to JupyterHub with Kubernetes](https://zero-to-jupyterhub.readthedocs.io/en/latest/index.html).

<ClearscapeDocsNote />

## Use Teradata Jupyter Docker image

Teradata provides a ready-to-run Docker image that builds on the [jupyter/datascience-notebook](https://hub.docker.com/r/jupyter/datascience-notebook/) image. It bundles the Teradata SQL kernel, Teradata Python and R libraries and drivers and Teradata extensions for Jupyter to make you productive while interacting with Teradata database. The image also contains sample notebooks that demonstrate how to use the SQL kernel, extensions and Teradata libraries.

You can use this image in the following ways:

* Start a personal Jupyter Notebook server in a local Docker container
* Run JupyterLab servers for a team using JupyterHub

For instructions to start a personal JupyterLab server in a local Docker container, please see [installation guide](https://docs.teradata.com/r/KQLs1kPXZ02rGWaS9Ktoww/Fwvns7y_a7juDWx1NixC2A). This section will focus on how to use the  Teradata Jupyter Docker image in a customer's existing JupyterHub environment.

### Install Teradata Jupyter Docker image in your registry

1. Go to [Vantage Modules for Jupyter](https://downloads.teradata.com/download/tools/vantage-modules-for-jupyter) page and download the Docker image. It is a tarball with name in this format `teradatajupyterlabext_VERSION.tar.gz`.

2. Load the image:
```bash
docker load -i teradatajupyterlabext_VERSION.tar.gz
```

3. Push the image to your Docker registry:
```bash
docker push
```

:::tip
You may want to consider changing the name of the loaded image for simplicity:

```bash
docker tag OLD_IMAGE_NAME NEW_IMAGE_NAME
```
:::

### Use Teradata Jupyter Docker image in JupyterHub

1. To use the Teradata Jupyter Docker image directly in your JupyterHub cluster, modify the override file as described in [herein the JupyterHub documentation](https://zero-to-jupyterhub.readthedocs.io/en/latest/jupyterhub/customizing/user-environment.html#choose-and-use-an-existing-docker-image). Replace `REGISTRY_URL` and `VERSION` with appropriate values from the step above:

```bash
singleuser:
  image:
  name: REGISTRY_URL/teradatajupyterlabext_VERSION
  tag: latest
```

2. Apply the changes to the cluster as described in [JupyterHub documentation](https://zero-to-jupyterhub.readthedocs.io/en/latest/jupyterhub/customizing/extending-jupyterhub.html#applying-configuration-changes).

:::tip
You can use multiple profiles to allow users to select which image they want to use when they log in to JupyterHub. For detailed instructions and examples on configuring multiple profiles, please see [JupyterHub documentation](https://zero-to-jupyterhub.readthedocs.io/en/latest/jupyterhub/customizing/user-environment.html#using-multiple-profiles-to-let-users-select-their-environment).
:::

### Customize Teradata Jupyter Docker image

If your users need some packages or notebooks that are not bundled in the Teradata Jupyter Docker image, we recommend that you use Teradata image as a base image and build a new one on top of it.

Here is an example Dockerfile that builds on top of Teradata image and adds additional packages and notebooks. Use the Dockerfile to build a new Docker image, push the image to a designated registry, modify override file as shown above to use the new image as singleuser image, apply the changes to the cluster as described above. Replace `REGISTRY_URL` and `VERSION` with appropriate values:
 
```bash
FROM REGISTRY_URL/teradatajupyterlabext_VERSION:latest

# install additional packages
RUN pip install --no-cache-dir astropy

# copy notebooks
COPY notebooks/. /tmp/JupyterLabRoot/DemoNotebooks/
```

## Customize an existing Docker image to include Teradata extensions

If you prefer, you can include the Teradata SQL kernel and extensions into into an existing image you are currently using.

1. Go to [Vantage Modules for Jupyter](https://downloads.teradata.com/download/tools/vantage-modules-for-jupyter) page to download the zipped Teradata Jupyter extensions package bundle.  Assuming your existing docker image is Linux based, you will want to use the Linux version of the download.  Otherwise, download for the platform you are using. The `.zip` file contains the Teradata SQL Kernel, extensions and sample notebooks.
2. Unzip the bundle file to your working directory.
3. Below is an example Dockerfile to add Teradata Jupyter extensions to your existing Docker image. Use the Dockerfile to build a new Docker image, push the image to a designated registry, modify override file as shown above to use the new image as singleuser image, apply the changes to the cluster:

    ```bash
    FROM REGISTRY_URL/your-existing-image:tag
    ENV NB_USER=jovyan \
      HOME=/home/jovyan \
      EXT_DIR=/opt/teradata/jupyterext/packages

    USER root

    ##############################################################
    # Install kernel and copy supporting files
    ##############################################################

    # Copy the kernel
    COPY ./teradatakernel /usr/local/bin
    RUN chmod 755 /usr/local/bin/teradatakernel

    # Copy directory with kernel.json file into image
    COPY ./teradatasql teradatasql/

    ##############################################################
    # Switch to user jovyan to copy the notebooks and license files.
    ##############################################################

    USER $NB_USER

    # Copy notebooks
    COPY ./notebooks/ /tmp/JupyterLabRoot/TeradataSampleNotebooks/

    # Copy license files
    COPY ./ThirdPartyLicenses /tmp/JupyterLabRoot/ThirdPartyLicenses/

    USER root

    # Install the kernel file to /opt/conda jupyter lab instance
    RUN jupyter kernelspec install ./teradatasql --prefix=/opt/conda

    ##############################################################
    # Install Teradata extensions
    ##############################################################

    COPY ./teradata_*.tgz $EXT_DIR

    WORKDIR $EXT_DIR

    RUN jupyter labextension install --no-build teradata_database* && \
      jupyter labextension install --no-build teradata_resultset* && \
      jupyter labextension install --no-build teradata_sqlhighlighter* && \
      jupyter labextension install --no-build teradata_connection_manager* && \
      jupyter labextension install --no-build teradata_preferences* && \
      jupyter lab build --dev-build=False --minimize=False && \
      rm -rf *

    WORKDIR $HOME

    # Give back ownership of /opt/conda to  jovyan
    RUN chown -R jovyan:users /opt/conda

    # Jupyter will create .local directory
    RUN rm -rf $HOME/.local
    ```

4. You can optionally install Teradata package for Python and Teradata package for R. See the following pages for details:
    * [Teradata Package for Python - teradataml download page](https://downloads.teradata.com/download/aster/teradata-python-package-teradataml)
    * [Teradata Package for R - tdplyr download page](https://downloads.teradata.com/download/aster/tdplyr-download-page)

## Further reading
* [Teradata Jupyter Extensions Website](https://teradata.github.io/jupyterextensions)
* [Teradata Vantage™ Modules for Jupyter Installation Guide](https://docs.teradata.com/r/KQLs1kPXZ02rGWaS9Ktoww/root)
* [Teradata® Package for Python User Guide](https://docs.teradata.com/r/1YKutX2ODdO9ppo_fnguTA/root)

<CommunityLink />
