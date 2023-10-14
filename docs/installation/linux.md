---
id: linux
sidebar_label: Linux
title: Installation instructions for linux servers
description: A guide on how to install autobrr on linux servers either manually or via seedbox solutions like swizzin, saltbox and quickbox.
keywords:
  [
    autobrr,
    linux,
    installation,
    swizzin,
    saltbox,
    quickbox,
    systemd,
    reverse,
    proxy,
    nginx,
  ]
pagination_prev: introduction
pagination_next: configuration/indexers
---

# Linux

import { FaDocker } from 'react-icons/fa';
import { FaWindows } from 'react-icons/fa';
import { SiPostgresql } from 'react-icons/si';

Welcome to the autobrr installation walkthrough!
Follow these steps and we will have you up and running in no time.

Follow instructions below for recommended setup on a regular Linux server.
Additionally see our installation instructions for [Docker <FaDocker />](./installation/docker) and [Windows <FaWindows />](./installation/windows).

import SeedboxSolutionInstallers from '/snippets/seedbox-solution-installers.mdx';

## Seedbox solutions

<SeedboxSolutionInstallers />

## Regular installation

### Download

import { AiFillGithub } from 'react-icons/ai';

Download the latest release, or download the [source code <AiFillGithub />](https://github.com/autobrr/autobrr/releases/latest) and build it yourself using `make build`.

```bash
wget $(curl -s https://api.github.com/repos/autobrr/autobrr/releases/latest | grep download | grep linux_x86_64 | cut -d\" -f4)
```

### Unpack

```bash
sudo tar -C /usr/local/bin -xzf autobrr*.tar.gz
```

This will extract both `autobrr` and `autobrrctl` to `/usr/local/bin`.

:::info
If you do not have root, or are on a shared system, place the binaries somewhere in your home directory like `~/.bin` or use our installers for [shared seedboxes](./installation/shared-seedbox).
:::

### Configuration

Create the config dir

```bash
mkdir -p ~/.config/autobrr
```

#### Manually configure autobrr (optional)

You can either let autobrr create the config itself at startup, or create one manually. For more information, please visit [configuring autobrr](./configuration/autobrr) which covers creating a user manually, configuring the default port, setting the desired log level, etc.

### Systemd (recommended)

On Linux-based systems, it is recommended to run autobrr as a service with auto-restarting capabilities, in order to account for potential downtime. The most common way is to do it via systemd.

You will need to create a service file in `/etc/systemd/system/` called `autobrr@.service`. The `@` is important.

```bash
touch /etc/systemd/system/autobrr@.service
```

Then place the following content inside the file (e.g. via nano/vim/ed):

```systemd title="/etc/systemd/system/autobrr@.service"
[Unit]
Description=autobrr service for %i
After=syslog.target network-online.target

[Service]
Type=simple
User=%i
Group=%i
ExecStart=/usr/local/bin/autobrr --config=/home/%i/.config/autobrr/

[Install]
WantedBy=multi-user.target
```

The `%i` will automatically be replaced with your user when you call `systemctl enable` with `@USERNAME` like below.

Start the service. Enable will make it startup on reboot. Replace `USERNAME` with your username.

```bash
sudo systemctl enable --now autobrr@USERNAME.service
```

Make sure it's running and `active`

```bash
sudo systemctl status autobrr@USERNAME.service
```

## Listen address

:::info

By default autobrr listens on `127.0.0.1` which is the recommended way when running a reverse proxy, but if you want to expose it to the internet/network then you must change the `host` in the `~/.config/autobrr/config.toml` from `127.0.0.1` to `0.0.0.0`.

Save the changes and restart autobrr with `sudo systemctl restart autobrr@USERNAME.service`.

:::

## Reverse proxy (recommended)

It's recommended to run it behind a reverse proxy like Caddy (very simple) or nginx (moderately simple) in order to get TLS, more robust authentication mechanisms and other similar benefits.

Please see the **Reverse proxy** section for reverse proxy configuration examples.

## Finishing up

Now that autobrr is up and running, you should be able to visit the your web UI at `http://YOUR_IP:7474` or `http://domain.ltd:7474` and proceed with your registration/login.
