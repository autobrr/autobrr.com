---
sidebar_position: 7
sidebar_label: FAQs
title: FAQs
---

## I have set up an indexer, but it does not connect to the #announce channel. What do I do?

Make sure you have entered the necessary keys in the invite command and that your IRC user has privileges to access to the #announce channel. See [IRC setup](/docs/configuration/irc).

import Botnaming from '/snippets/botnaming.mdx';

<Botnaming/>

## I'm using Deluge and setting a custom save path for it in autobrr does not work. What do I do?

This is a problem with Deluge v1 and should not happen in v2.
You can use the `label`-plugin in Deluge and set a custom save path in that as a workaround.

The label has to exist for autobrr to be able to use it!

## Why did a release not match when it clearly should have?

Check your logs. Enable trace logging for more details.

`logLevel = "TRACE"` can be set in `config.toml`. Remember to restart autobrr after.

## My /config is filled with .bk files! What is going on?

You are likely using a third party script that backs up the database on every run. Do some house cleaning.
