---
id: transfer-installation
sidebar_label: Transfer your installation
title: Transfer your installation
description: This guide will walk you through the steps needed to transfer your settings such as filters, indexers, IRC networks, feeds, clients, notifications and API keys of your current autobrr installation from one host to another.
keywords: [autobrr, installation, setup, seedbox, transfer, database, migration]
pagination_prev: introduction
pagination_next: configuration/indexers
---

# Transfer your installation

This guide will walk you through the steps needed to transfer your settings such as filters, indexers, IRC networks, feeds, clients, notifications and API keys of your current autobrr installation from one host to another.

:::info
Settings like hostname / IP, port, baseUrl, logPath or logLevel are not transferred and have to be adjusted again in `config.toml` after the transfer in case you made any changes to this file.
:::

## Backing up your current installation

First you need to stop the autobrr service on your old host so that we can safely pull the `autobrr.db`  
and to prevent any conflicts after restoring your installation on your new host.

All filters, indexers, IRC networks, feeds, clients, notifications and API keys are stored in this file.  
Stopping autobrr can be done in multiple ways depending on your setup or the hosting provider you use.  
Please refer to the documentation of your hosting provider for how to stop autobrr in case you don't know how to stop autobrr.

After you stopped your autobrr service, use the FTP program of your choice to connect to your old host and  
download the `autobrr.db` from `~/.config/autobrr`.

:::info
You may need to enable the option to show hidden files and folders in your FTP program (if not already enabled) since the `.config` folder will not be shown otherwise.
:::

## Installing autobrr

Now that you have successfully backed up your `autobrr.db` from your old host, you need to install a new instance of autobrr on your new host.

Please refer to our guides or to the guides of your hosting provider on how to install autobrr on you new host:

- [Linux](../linux.md)
- [macOS](../macos.md)
- [Windows](../windows.md)
- [Docker](../docker.md)
- [Shared Seedbox](../shared-seedbox.md)

## Restoring your database

Having successfully installed autobrr on your new host we can now restore your `autobrr.db` backup.  
Stop autobrr on your new host and delete the following files (via SSH or FTP) if present:

- autobrr.db
- autobrr.db-shm
- autobrr.db-wal

After deleting these files you can upload the backup of your `autobrr.db`.

Once the upload is successfully completed you can start your autobrr service on your new host and  
you will be greeted with your restored stats, activity and settings from your old host!

:::info

Having restored the `autobrr.db` from your old host, your new installation will now have the password of the old autobrr installation!

:::
