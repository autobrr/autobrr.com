---
id: intro
sidebar_label: Introduction
title: Installation instructions
description: An overview of the ways to install autobrr; on a shared seedbox, a Linux server, Docker, macOS or Windows, with pointers to reverse proxy and database guides.
keywords:
  [
    autobrr,
    installation,
    setup,
    seedbox,
    linux,
    docker,
    macos,
    homebrew,
    windows,
    systemd,
    reverse,
    proxy,
    nginx,
    postgresql,
  ]
pagination_prev: introduction
pagination_next: installation/seedbox
---

import { FaDocker, FaLinux, FaWindows, FaApple, FaServer } from 'react-icons/fa';

# Installation

autobrr ships as a single binary with the web UI built in, so installing it mostly comes down to getting that binary running on whatever you already have. Pick the guide that matches your setup.

## Pick your setup

### Seedbox <FaServer /> {#seedbox}

If you rent a seedbox, start with the [Seedbox guide](./seedbox.md). Most shared providers (Ultra.cc, Whatbox, HostingByDesign, Swizzin-based boxes and others) offer a one-click installer or an install script, so you never need root access. The guide also covers dedicated seedboxes.

### Linux server <FaLinux /> {#linux}

For your own VPS, home server or NAS, follow the [Linux guide](./linux.md). You download the binary and run it as a systemd service so it starts on boot and restarts on failure. This is the recommended setup when you control the machine.

### Docker <FaDocker /> {#docker}

Already running your stack in containers? The [Docker guide](./docker.md) covers the official `ghcr.io/autobrr/autobrr` image with a compose example, which slots in next to your existing qBittorrent, Sonarr and Radarr containers.

### macOS <FaApple /> {#macos}

On a Mac, the [macOS guide](./macos.md) uses Homebrew: `brew install autobrr`, then `brew services start autobrr` to keep it running in the background.

### Windows <FaWindows /> {#windows}

The [Windows guide](./windows.md) sets autobrr up as a background service, so it runs 24/7 without a command prompt window open.

## Good to know

- Whatever the platform, you end up with the same thing: autobrr serving its web UI on port `7474`, ready to be configured in the browser.
- autobrr uses SQLite by default, which suits most setups. If you expect a large release history you can use [PostgreSQL](./supplementary/postgresql.md) instead.
- To reach the web UI from outside, see the [reverse proxy guides](./reverse-proxy/index.md), with examples for Caddy, lighttpd, nginx, SWAG, Traefik and Tailscale Serve.
- Moving to a new box later? [Transfer your installation](./supplementary/transfer-installation.md) walks through bringing your filters, indexers and settings along.

## After installing

Once autobrr is running, head to the [Configuration guide](../configuration/autobrr.md) to set up your [indexers](../configuration/indexers.md), IRC connections and download clients.
