---
sidebar_position: 7
sidebar_label: FAQ
title: FAQ
description: FAQ - Frequently Asked Questions
keywords: [autobrr, question, faq, error, no filter, no releases]
---

## Nothing happens - I'm not seeing any releases

First of all, that's a pretty bad question to start with.

Please clarify what you actually mean.

1. What doesn't happen? Is it filter related? Client related?
2. What did you expect to happen?

There could be multiple reasons. Only filtered releases that gets to the action stage will show up in **Releases**. That means:

- \*arr actions that gets Approved or Rejected.
- Releases sent to a torrent client
- Releases that sent a webhook or ran custom scripts and so on.

:::tip

Go over your setup again and make sure that:

1. You have added some indexer and enabled it.
2. Check `Settings -> IRC` and make sure the network is GREEN. If it's gray it's not enabled.
3. Did you add **a filter**, which is **enabled**, **have at least 1 indexer selected** and any **action** to run on match.
4. Your filter might be too narrow/specific. A common issue is selecting everything in Quality. Deselect everything except resolution.

:::

## Common action rejections

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

> Rejected: error downloading torrent file for release: Some Release name: All attempts fail: #1: metainfo could not load file contents: /tmp/autobrr-3310314409: bencode: syntax error (offset: 0): unknown value type '<'

This is highly likely caused by you adding an entire URL instead of just the RSS-key. This field only works with an alphanumeric string.

With TorrentLeech as an example, only add the red part when setting up your indexer:

`https://rss.tl.org/`<Highlight color="#ff2754">1812u12urr1203j12jeq</Highlight>

## I have set up an indexer, but it does not connect to the #announce channel. What do I do?

Make sure you have entered the necessary keys in the invite command and that your IRC user has privileges to access to the #announce channel. See [IRC setup](/configuration/irc).

import Botnaming from '/snippets/botnaming.mdx';

<Botnaming/>

## Setting a custom save path for Deluge in autobrr does not work. Why?

This is a problem with Deluge v1.\* and should not happen in v2.
You can use the label-plugin in Deluge and set a custom save path in that as a workaround. The label has to exist for autobrr to be able to use it!

## Why did a release not match when it clearly should have?

Check your logs. Additionally, enable trace logging by setting `logLevel = "TRACE"` in your `config.toml` (which can usually be found in `~/.config/autobrr/`). Remember to restart autobrr after doing so.

## My autobrr instance cannot reach Deluge running in Docker

If autobrr isn't reaching Deluge when running Docker you can try this:

- `Host` should be the deluge container you're trying to reach, it will probably just be `deluge`.
  Make sure that your docker containers are on the same network, so they can reach each other. If you're using a single compose file, it should be by default.
- `Port` should be the daemon port, not the webui port. Find the correct one by logging into Deluge webui, and checking in Preferences or under Connection Manager (default: 58846).
- `Authentication` is required for deluge daemon, not the webui.
  It can be found at `/docker/appdata/deluge/auth`, the default one looks like `localclient:password:10`.
  You can add your own if you wish. Like `username:password:powerlevel`.
- Enabling `Allow Remote Connections` in Deluge might be needed depending on your setup.

## I forgot my password {#forgot-password}

If you forget your password, you can change it via the command line.

```shell
autobrrctl --config /home/username/.config/autobrr change-password <USERNAME>
```
