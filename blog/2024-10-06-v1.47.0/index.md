---
slug: v1.47.0
title: v1.47.0
authors: [rogerrabbit]
---
## Changelog


### New Features


* feat(database): add missing filter indexes ([\#1712](https://github.com/autobrr/autobrr/pull/1712)) ([@KyleSanderson](https://github.com/KyleSanderson))
* feat(downloads): handle http status 429 rate\-limit retry ([\#1749](https://github.com/autobrr/autobrr/pull/1749)) ([@zze0s](https://github.com/zze0s))
* feat(filters): sort by created and updated ([\#1751](https://github.com/autobrr/autobrr/pull/1751)) ([@martylukyy](https://github.com/martylukyy))
* feat(filters): wildcard slice matching optimizations ([\#1716](https://github.com/autobrr/autobrr/pull/1716)) ([@KyleSanderson](https://github.com/KyleSanderson))
* feat(indexers): add LustHive ([\#1732](https://github.com/autobrr/autobrr/pull/1732)) ([@martylukyy](https://github.com/martylukyy))
* feat(notifications): Telegram set sender ([\#1723](https://github.com/autobrr/autobrr/pull/1723)) ([@martylukyy](https://github.com/martylukyy))
* feat(notifications): optional Telegram sender ([\#1726](https://github.com/autobrr/autobrr/pull/1726)) ([@martylukyy](https://github.com/martylukyy))
* feat(releases): show indexer name in indexer filter ([\#1720](https://github.com/autobrr/autobrr/pull/1720)) ([@martylukyy](https://github.com/martylukyy))
* feat(wildcard): fast\-path some cases ([\#1747](https://github.com/autobrr/autobrr/pull/1747)) ([@KyleSanderson](https://github.com/KyleSanderson))


### Bug fixes


* fix(build): run web\-dist tarball step for tags only ([\#1730](https://github.com/autobrr/autobrr/pull/1730)) ([@fabricionaweb](https://github.com/fabricionaweb))
* fix(docs): update feature requests link and swizzin install link ([\#1729](https://github.com/autobrr/autobrr/pull/1729)) ([@martylukyy](https://github.com/martylukyy))
* fix(downloadclients): arrs change size type to uint64 ([\#1744](https://github.com/autobrr/autobrr/pull/1744)) ([@zze0s](https://github.com/zze0s))
* fix(downloadclients): do not load Deluge from cache ([\#1743](https://github.com/autobrr/autobrr/pull/1743)) ([@zze0s](https://github.com/zze0s))
* fix(filters): release download counts ([\#1739](https://github.com/autobrr/autobrr/pull/1739)) ([@cascandaliato](https://github.com/cascandaliato))
* fix(indexers): new baseURL for Fuzer ([\#1724](https://github.com/autobrr/autobrr/pull/1724)) ([@martylukyy](https://github.com/martylukyy))
* fix(notifications): disable notification and events have no effect ([\#1754](https://github.com/autobrr/autobrr/pull/1754)) ([@zze0s](https://github.com/zze0s))
* fix(sanitize): improve handling for newline tabs etc ([\#1733](https://github.com/autobrr/autobrr/pull/1733)) ([@KyleSanderson](https://github.com/KyleSanderson))
* fix(web): activity/release table cell widths ([\#1717](https://github.com/autobrr/autobrr/pull/1717)) ([@martylukyy](https://github.com/martylukyy))
* fix(web): form slideovers for mobile views ([\#1725](https://github.com/autobrr/autobrr/pull/1725)) ([@martylukyy](https://github.com/martylukyy))


### Other work


* build(deps): bump the golang group with 6 updates ([\#1748](https://github.com/autobrr/autobrr/pull/1748)) ([@dependabot](https://github.com/dependabot)\[bot])
* build: add web/dist tarball ([\#1721](https://github.com/autobrr/autobrr/pull/1721)) ([@fabricionaweb](https://github.com/fabricionaweb))
* build: upload web\-dist to release assets on tag ([\#1731](https://github.com/autobrr/autobrr/pull/1731)) ([@zze0s](https://github.com/zze0s))
* chore(indexers): remove LilleSky ([\#1735](https://github.com/autobrr/autobrr/pull/1735)) ([@NLZ](https://github.com/NLZ))


**Full Changelog**: [v1\.46\.1\...v1\.47\.0](https://github.com/autobrr/autobrr/compare/v1.46.1...v1.47.0)


## Docker images


* `docker pull ghcr.io/autobrr/autobrr:v1.47.0`


## What to do next?


* Read the [documentation](https://autobrr.com)
* Join our [Discord server](https://discord.gg/WQ2eUycxyT)
