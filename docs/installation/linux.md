---
id: linux
title: Linux
pagination_prev: introduction
pagination_next: configuration/indexers
---

import { FaDocker } from 'react-icons/fa';
import { FaWindows } from 'react-icons/fa';
import { SiPostgresql } from 'react-icons/si';

# Linux

Welcome to the autobrr installation walkthrough!
Follow these steps and we will have you up and running in no time.

Follow instructions below for recommended setup on a regular Linux server.
Additionally see our installation instructions for [Docker <FaDocker />](/installation/docker) and [windows <FaWindows />](/installation/windows).

## Swizzin

[Swizzin](https://swizzin.ltd/) users can simply run:

```
sudo box update
sudo box install autobrr
```

Note: Remember to head over to our [Configuration Guide](/configuration/indexers) to learn how to set up your indexers, IRC, and download clients after you're done installing.

## Regular installation

### Downloading autobrr

Download the latest release, or download the [source code](https://github.com/autobrr/autobrr/releases/latest) and build it yourself using `make build`.

```bash
wget $(curl -s https://api.github.com/repos/autobrr/autobrr/releases/latest | grep download | grep linux_x86_64 | cut -d\" -f4)
```

### Unpack

Run with `root` or `sudo`. If you do not have root, or are on a shared system, place the binaries somewhere in your home directory like `~/.bin`.

```bash
tar -C /usr/local/bin -xzf autobrr*.tar.gz
```

This will extract both `autobrr` and `autobrrctl` to `/usr/local/bin`.
Note: If the command fails, prefix it with `sudo ` and re-run again.

### Manually configure autobrr (Optional)

You can either let autobrr create the config itself at startup, or create one manually. For more information, please visit [configuring autobrr](../configuration/autobrr) which covers creating a user manually, configuring the default port, setting the desired log level, etc.

### Systemd (Recommended)

On Linux-based systems, it is recommended to run autobrr as sort of a service with auto-restarting capabilities, in order to account for potential downtime. The most common way is to do it via systemd.

You will need to create a service file in `/etc/systemd/system/` called `autobrr.service`.

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
ExecStart=/usr/bin/autobrr --config=/home/%i/.config/autobrr/

[Install]
WantedBy=multi-user.target
```

Start the service. Enable will make it startup on reboot.

```bash
systemctl enable -q --now autobrr
```

## Reverse proxy (Recommended)

It's recommended to run it behind a reverse proxy like nginx in order to get TLS, more robust authentification mechanisms and other similar benefits.

This is an nginx example that should work for most:

```nginx
location /autobrr/ {
    proxy_pass              http://$remote_user.autobrr;
    proxy_http_version      1.1;
    proxy_set_header        X-Forwarded-Host        $http_host;

    auth_basic "What's the password?";
    auth_basic_user_file /etc/htpasswd;

    rewrite ^/autobrr/(.*) /$1 break;
}
```

:::info

The `rewrite` statement in this example is crucial for correctly setting things up when using a reverse proxy with a base path.

:::

## Done

Now that autobrr is up and running, you should be able to visit the your web UI at `domain.ltd:7474` and proceed with your registration/login.
