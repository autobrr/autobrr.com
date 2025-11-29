---
sidebar_position: 8
sidebar_label: Proxies
title: Proxies
description: autobrr supports using proxies for communication with indexers, feeds, irc networks etc. It supports both HTTP and SOCKS5 proxies. This is a guide on how to set them up in autobrr.
keywords:
  [
    autobrr,
    setup,
    proxy,
    proxies,
    http,
    "http proxy",
    socks,
    socks5,
  ]
pagination_label: Configuration - Proxies
---

autobrr can use proxies for Indexers (downloads of .torrents, api calls), Feeds and IRC.

## Supported Proxy types

### SOCKS5

To set up a SOCKS5 Proxy, head to `Settings > Proxies`.

1. Click **Add new**.
2. Pick SOCKS5 from the list and give it a name.
3. Add your proxy URL like `socks5://ip:port`.
4. Click the `Test` button to make a test query (it fetches our docs).
5. Save.

### HTTP(S)

To set up a HTTP Proxy, head to `Settings > Proxies`.

1. Click **Add new**.
2. Pick HTTP from the list and give it a name.
3. Add your proxy URL like `http://ip:port` or `https://ip:port`.
4. Click the `Test` button to make a test query (it fetches our docs).
5. Save.

## Usage

After you've setup a proxy you need to add it to Indexers, Feeds and IRC networks. Toggle Use Proxy and select the proxy you setup earlier.