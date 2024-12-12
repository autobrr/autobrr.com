---
title: Category Examples
description: Categories for autobrr filters. This list was created with help from users like you. If you have others, please add them yourself or reach out on discord and we can add more.
keywords: [autobrr, category, categories]
sidebar_label: Categories
pagination_label: Filters - Categories
---

This list was created with help from users like you. If you have others, please add them yourself or reach out on discord and we can add more. See how to export categories [here](#how-to-export-categories-from-autobrrdb).

## Categories

As a rule of thumb, simple filtering rules such as `*TV*,*Episode*` or `*Movie*` will sufice for most users needs

import AcidLounge from "/snippets/categories/acidlounge.mdx";
import Aither from "/snippets/categories/aither.mdx";
import AlphaRatio from "/snippets/categories/ar.mdx";
import Animebytes from "/snippets/categories/animebytes.mdx";
import AnimeWorld from "/snippets/categories/animeworld.mdx";
import BeyondHD from "/snippets/categories/bhd.mdx";
import BitHDTV from "/snippets/categories/bithdtv.mdx";
import Broadcasthenet from "/snippets/categories/btn.mdx";
import BTFiles from "/snippets/categories/btfiles.mdx";
import CathodeRayTube from "/snippets/categories/cathoderaytube.mdx";
import DigitalCore from "/snippets/categories/digitalcore.mdx";
import Filelist from "/snippets/categories/fl.mdx";
import GazelleGames from "/snippets/categories/ggn.mdx";
import HDBits from "/snippets/categories/hdbits.mdx";
import HDSpace from "/snippets/categories/hdspace.mdx";
import HDTorrents from "/snippets/categories/hdtorrents.mdx";
import Huno from "/snippets/categories/huno.mdx";
import ImmortalSeed from "/snippets/categories/immortalseed.mdx";
import IPTorrents from "/snippets/categories/ipt.mdx";
import Milkie from "/snippets/categories/milkie.mdx";
import MorethanTV from "/snippets/categories/mtv.mdx";
import MyAnonamouse from "/snippets/categories/mam.mdx";
import Nebulance from "/snippets/categories/nebulance.mdx";
import Norbits from "/snippets/categories/norbits.mdx";
import Pretome from "/snippets/categories/pretome.mdx";
import PassThePopcorn from "/snippets/categories/ptp.mdx";
import RED from "/snippets/categories/red.mdx";
import RevolutionTT from "/snippets/categories/revolutiontt.mdx";
import SpeedApp from "/snippets/categories/speedapp.mdx";
import Superbits from "/snippets/categories/sbs.mdx";
import TorrentDay from "/snippets/categories/torrentday.mdx";
import Torrentleech from "/snippets/categories/tl.mdx";
import TorrentSeeds from "/snippets/categories/torrentseeds.mdx";
import TorrentSyndikat from "/snippets/categories/torrentsyndikat.mdx";
import XSpeeds from "/snippets/categories/xspeeds.mdx";

### AcidLounge

<AcidLounge />

### Aither

<Aither />

### AlphaRatio

<AlphaRatio />

### Animebytes

<Animebytes />

### AnimeWorld

<AnimeWorld />

### BeyondHD

<BeyondHD />

### BitHDTV

<BitHDTV />

### BroadcasTheNet

<Broadcasthenet />

### BTFiles

<BTFiles />

### CathodeRayTube

<CathodeRayTube />

### DigitalCore

<DigitalCore />

### Filelist

<Filelist />

### GazelleGames

<GazelleGames />

### HDBits

<HDBits />

### HDSpace

<HDSpace />

### HDTorrents

<HDTorrents />

### Huno

<Huno />

### ImmortalSeed

<ImmortalSeed />

### IPTorrents

<IPTorrents />

### Milkie

<Milkie />

### MorethanTV

<MorethanTV />

### MyAnonamouse

<MyAnonamouse />

### Nebulance

<Nebulance />

### Norbits

<Norbits />

### PreToMe

<Pretome />

### PassThePopcorn

<PassThePopcorn />

### RED

<RED />

### RevolutionTT

<RevolutionTT />

### SpeedApp

<SpeedApp />

### Superbits

<Superbits />

### TorrentDay

<TorrentDay />

### Torrentleech

<Torrentleech />

### TorrentSeeds

<TorrentSeeds />

### TorrentSyndikat

<TorrentSyndikat />

### xSpeeds

<XSpeeds />

## How to export categories from autobrr.db

You can export categories from your autobrr.db like this:

```bash
sqlite3 /path/to/autobrr.db "SELECT DISTINCT indexer, category FROM "release" ORDER BY indexer, category;" ".exit" > dump.txt
```

You can add them to this page by opening a [pull request](https://github.com/autobrr/autobrr.com/pulls) or by providing them to us on [Discord](https://discord.gg/WQ2eUycxyT).
