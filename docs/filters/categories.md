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

import Categories from '/snippets/category-snippets.mdx';

<Categories />

## How to export categories from autobrr.db

You can export categories from your autobrr.db like this:

```bash
sqlite3 /path/to/autobrr.db "SELECT DISTINCT indexer, category FROM "release" ORDER BY indexer, category;" ".exit" > dump.txt
```

You can add them to this page by opening a [pull request](https://github.com/autobrr/autobrr.com/pulls) or by providing them to us on [Discord](https://discord.gg/WQ2eUycxyT).
