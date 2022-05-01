---
sidebar_position: 1
---

# Indexers

## Supported indexers

Check [Supported indexers #1](https://github.com/autobrr/autobrr/issues/1) on Github for more info.
If you want more indexers added please either create a PR for it, post a comment on that issue or create a new one.

<details>
  <summary>Indexers</summary>

  * AlphaRatio
  * AnimeBytes
  * BeyondHD
  * Broadcasthenet
  * DanishBytes
  * DigitalCore
  * Empornium
  * FileList
  * GazelleGames
  * HD-Torrents
  * HDBits
  * IPTorrents
  * Morethantv
  * MyAnonamouse
  * Milkie
  * Nebulance
  * Norbits
  * Orpheus
  * Passthepopcorn
  * Redacted
  * RevolutionTT
  * SuperBits
  * TorrentBytes
  * TorrentDay
  * TorrentDB
  * TorrentLeech
  * TorrentSeeds
  * TorrentSyndikat
  * TranceTraffic
  * UHDBits

</details>

## Setup

Go to `settings/indexers` to add indexers.

When adding a new indexer, it sets up the IRC network and channels in the background.
Please check the [IRC]( ./irc ) section for more details regarding NickServ, keys, and grouping of nicks.

Indexers usually need some extra keys to work.

The common ones are:

* `passkey`
* `rsskey`
* `torrent_pass`
* `auth_key`
* `apikey`

When adding a new indexer you'll see which ones are needed. Check your indexers wiki/forum etc. to find where they are located.

## Custom indexer definitions

autobrr supports custom indexer definitions.

In the autobrr config file, add the following to the bottom if it's not already there:

```bash
# Custom definitions
#
customDefinitions = "/home/$YOUR_USER/.config/autobrr/definitions"
```

Change `$YOUR_USER` to your username.

For Docker:

```bash
# Custom definitions
#
customDefinitions = "/config/definitions"
```

This should work if you have `/config` mapped to a volume which you hopefully have.

1. Put the definition file to disk and place it in the folder you just entered in the config.
2. Restart autobrr.
3. Set up the indexer in `settings/indexers` as usual.
