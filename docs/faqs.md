---
sidebar_position: 7
sidebar_label: FAQ
title: Frequently Asked Questions
description: Here you'll find a list of frequently asked questions.
keywords:
  [
    autobrr,
    question,
    faq,
    error,
    filter,
    releases,
    forgot,
    password,
    not,
    working,
    freeleech,
    tokens,
  ]
---

# FAQ

If the docs did not answer your questions then the best place to ask is in our [Discord community](https://discord.gg/WQ2eUycxyT).

## I think I found a bug

If you think you have found a bug then please report it either on [Github Issues](https://github.com/autobrr/autobrr/issues/new?assignees=&labels=bug&projects=&template=bug_report.md&title=) or in our Discord and use the `#bugs` channel.

## I have a feature request

If you have a feature request then report it on [Github Feature Request](https://github.com/autobrr/autobrr/issues/new?assignees=&labels=Feature+request&projects=&template=feature_request.md&title=%5BFEATURE+REQ%5D) or in our Discord and use the `#suggestions` channel.

## Nothing happens - I'm not seeing any releases

Before you ask for help in Discord or other place, then try to forumlate your question so it's easier to help you.

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

    Rejected: error downloading torrent file for release: Some Release name: All attempts fail: #1: metainfo could not load file contents: /tmp/autobrr-3310314409: bencode: syntax error (offset: 0): unknown value type

This is highly likely caused by you adding an entire URL instead of just the RSS-key. This field only works with an alphanumeric string.

With TorrentLeech as an example, only add the red part when setting up your indexer:

`https://rss.tl.org/`<Highlight color="#ff2754">1812u12urr1203j12jeq</Highlight>

In case you are still having troubles with setting up the TorrentLeech indexer,
you can find detailed instructions for the setup process on their wiki:

[https://wiki.torrentleech.org/doku.php/autobrr](https://wiki.torrentleech.org/doku.php/autobrr)

## I have set up an indexer, but it does not connect to the #announce channel. What do I do?

Make sure you have entered the necessary keys in the invite command and that your IRC user has privileges to access to the #announce channel. See [IRC setup](./configuration/irc.md).

import Botnaming from '/snippets/botnaming.mdx';

<Botnaming/>

## Setting a custom save path for Deluge in autobrr does not work. Why?

This is a problem with Deluge v1.\* and should not happen in v2.
You can use the label-plugin in Deluge and set a custom save path in that as a workaround. The label has to exist for autobrr to be able to use it!

## Why did a release not match when it clearly should have?

Check your logs. Additionally, enable trace logging by setting `logLevel = "TRACE"` in your `config.toml` (which can usually be found in `~/.config/autobrr/`). Remember to restart autobrr after doing so.

## How does autobrr handle multiple matching filters for a release?

When a release is processed, autobrr checks all the filters in order of priority (higher number = higher priority). If a filter matches the release, autobrr executes all the actions defined in that filter and then stops processing further filters for that release. The exception here is \*arr actions. If e.g., Radarr or Sonarr rejects a release, the next filter in line will be processed.

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

```bash
autobrrctl --config /home/username/.config/autobrr change-password <USERNAME>
```

## I want to change my username {#change-username}

If you want to change your username, you can do so via the [web UI](./usage/account.md).
If you don't have access to the web UI, you need to change it directly in the database.
Use the command line or an sqlite editor.

### CLI

You need the `sqlite3` package for this.

- If you are using our docker container then you can exec in and run `apk add sqlite3`.
- Ubuntu: `sudo apt install sqlite3`
- On other linux based systems use the package manager to install the package

`sqlite3 autobrr.db "UPDATE users SET username = 'newuser';"`

### GUI

SQLitebrowser is a simple cross-platform SQLite gui/browser. Download from [official site](https://sqlitebrowser.org/dl/).

Open the db file `autobrr.db` and run the following command:

`UPDATE users SET username = 'newuser';`

Or use the gui to click edit on the `username` column of the `users` table.

## How can I use my freeleech tokens from RED? {#redacted-freeleech-tokens}

This is something a lot of users are asking for.

Golden Rule 5.3 on RED:

> Do not autosnatch freeleech torrents.
> The automatic snatching of freeleech torrents using any method involving little or no user-input (e.g., API-based scripts, log or site scraping, etc.) is prohibited.

We have asked RED staff, and they have confirmed that automating the use of freeleech tokens falls under this rule.

While the possibility to do it exists, its not something we will encourage users to do. Always make sure you respect the rules of any tracker that you are a part of.
