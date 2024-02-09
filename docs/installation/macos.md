---
id: macos
sidebar_label: MacOS
title: Installation instructions for macOS
description: A guide on how to install autobrr on macOS.
keywords: [autobrr, macOS, apple, installation]
pagination_prev: introduction
pagination_next: configuration/indexers
---

# macOS

In this setup we will create an autobrr user and a macOS service that operates in the background. This way we won't need to have a command prompt window open 24/7.

## Homebrew

[Homebrew](https://brew.sh/) is a free and open-source software package management system that simplifies the installation of software on macOS and Linux. Known as "the missing package manager for macOS," it extends or fills gaps in the standard software management offerings on these operating systems. Homebrew allows users to easily install, update, and manage software packages and their dependencies through simple commands in the terminal.

### Install Homebrew

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
```

Alternatively use their `.pkg` installer. Download it from [Homebrew's latest GitHub release](https://github.com/Homebrew/brew/releases/latest).

### Install autobrr

```bash
brew install autobrr
```

### Run

To start autobrr now and restart at login:

```bash
brew services start autobrr
```

Or, if you don't want/need a background service you can just run:

```bash
/opt/homebrew/opt/autobrr/bin/autobrr --config /opt/homebrew/var/autobrr/
```

## Listen address

:::info

By default autobrr listens on `127.0.0.1` which is the recommended way when running a reverse proxy, but if you want to expose it to the internet/network then you must change the `host` in the `config.toml` from `127.0.0.1` to `0.0.0.0`.

Restart autobrr after.
:::

## Reverse proxy (recommended)

It's recommended to run it behind a reverse proxy like Caddy (very simple) or nginx (moderately simple) in order to get TLS, more robust authentication mechanisms and other similar benefits.

You can install nginx on macOS with Homebrew:

```bash
brew install nginx
```

Please see the **Reverse proxy** section for reverse proxy configuration examples.

## Finishing up

Now that autobrr is up and running, you should be able to visit the your web UI at `http://YOUR_IP:7474` or `http://domain.ltd:7474` and proceed with your registration/login.

## Version Updates

To upgrade Autobrr to the latest version first stop the service (if you have configured it):

```bash
brew services stop autobrr
```

Upgrade:

```bash
brew update
brew upgrade autobrr
brew services start autobrr
```
