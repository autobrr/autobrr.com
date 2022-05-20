---
sidebar_position: 7
sidebar_label: FAQs
title: FAQs
---

## I have set up an indexer, but it does not connect to the #announce channel. What do I do?

Make sure you have entered the necessary keys in the invite command and that your IRC user has privileges to access to the #announce channel. See [IRC setup](/configuration/irc).

import Botnaming from '/snippets/botnaming.mdx';

<Botnaming/>

## Setting a custom save path for Deluge in autobrr does not work. Why?

This is a problem with Deluge v1.\* and should not happen in v2.
You can use the label-plugin in Deluge and set a custom save path in that as a workaround. The label has to exist for autobrr to be able to use it!

## Why did a release not match when it clearly should have?

Check your logs. Enable trace logging for more details.

`logLevel = "TRACE"` can be set in `config.toml`. Remember to restart autobrr after.

## My autobrr instance cannot reach Deluge running in Docker

If autobrr isn't reaching Deluge when running Docker you can try this:

- `Host` should be the deluge container you're trying to reach, it will probably just be `deluge`.
  Make sure that your docker containers are on the same network, so they can reach each other. If you're using a single compose file, it should be by default.
- `Port` should be the daemon port, not the webui port. Find the correct one by logging into Deluge webui, and checking in Preferences or under Connection Manager (default: 58846).
- `Authentication` is required for deluge daemon, not the webui.
  It can be found at `/docker/appdata/deluge/auth`, the default one looks like `localclient:password:10`.
  You can add your own if you wish. Like `username:password:powerlevel`.
