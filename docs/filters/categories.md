---
title: Category Examples
description: Filter categories for TV Sonarr, Movies Radarr, Buffer, Ratio
keywords:
  [
    autobrr,
    category,
    categories
  ]
sidebar_label: Categories
pagination_label: Filters - Categories
---

This list was created with help from users like you. If you have others, please add them yourself or reach out on discord and we can add more. See how to export categories [here](#how-to-export-categories-from-autobrrdb).

## Categories

As a rule of thumb, simple regex rules such as `*TV*,*Episode*` or `*Movie*` will sufice for most users needs

import AcidLounge from '/snippets/categories/acidlounge.mdx';
import AlphaRatio from '/snippets/categories/ar.mdx';
import BeyondHD from '/snippets/categories/bhd.mdx';
import BitHDTV from '/snippets/categories/bithdtv.mdx';
import Broadcasthenet from '/snippets/categories/btn.mdx';
import DigitalCore from '/snippets/categories/digitalcore.mdx';
import Filelist from '/snippets/categories/fl.mdx';
import HDSpace from '/snippets/categories/hdspace.mdx';
import IPTorrents from '/snippets/categories/ipt.mdx';
import Milkie from '/snippets/categories/milkie.mdx';
import MorethanTV from '/snippets/categories/mtv.mdx';
import Nebulance from '/snippets/categories/nebulance.mdx';
import Norbits from '/snippets/categories/norbits.mdx';
import Pretome from '/snippets/categories/pretome.mdx';
import RED from '/snippets/categories/red.mdx';
import Superbits from '/snippets/categories/sbs.mdx';
import TorrentDay from '/snippets/categories/torrentday.mdx';
import TorrentDB from '/snippets/categories/torrentdb.mdx';
import Torrentleech from '/snippets/categories/tl.mdx';
import TorrentSeeds from '/snippets/categories/torrentseeds.mdx';
import TorrentSyndikat from '/snippets/categories/torrentsyndikat.mdx';

<AcidLounge/>
<AlphaRatio/>
<BeyondHD/>
<BitHDTV/>
<Broadcasthenet/>
<DigitalCore/>
<Filelist/>
<HDSpace/>
<IPTorrents/>
<Milkie/>
<MorethanTV/>
<Nebulance/>
<Norbits/>
<Pretome/>
<RED/>
<Superbits/>
<TorrentDay/>
<TorrentDB/>
<Torrentleech/>
<TorrentSeeds/>
<TorrentSyndikat/>

## How to export categories from autobrr.db

You can export categories from your autobrr.db like this:

```bash
sqlite3 /path/to/autobrr.db "SELECT DISTINCT indexer, category FROM "release" ORDER BY indexer, category;" ".exit" > dump.txt
```

You can add them to this page by opening a [pull request](https://github.com/autobrr/autobrr.com/pulls) or by providing them to us on [Discord](https://discord.gg/WQ2eUycxyT).
