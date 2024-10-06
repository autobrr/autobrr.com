---
slug: v1.47.0
title: v1.47.0
authors: [rogerrabbit]
---
## Changelog


### New Features


* [ea25b6b](https://github.com/autobrr/autobrr/commit/ea25b6bb7fc77dd0a77fa6b111a3100324da3d90): feat(database): add missing filter indexes ([\#1712](https://github.com/autobrr/autobrr/pull/1712)) ([@KyleSanderson](https://github.com/KyleSanderson))
* [737184a](https://github.com/autobrr/autobrr/commit/737184a98584f43c8c06664e10d95f59971856ce): feat(downloads): handle http status 429 rate\-limit retry ([\#1749](https://github.com/autobrr/autobrr/pull/1749)) ([@zze0s](https://github.com/zze0s))
* [009647f](https://github.com/autobrr/autobrr/commit/009647fcd1e93b785c4ad7b28fbcad366f45bca6): feat(filters): sort by created and updated ([\#1751](https://github.com/autobrr/autobrr/pull/1751)) ([@martylukyy](https://github.com/martylukyy))
* [e9f8730](https://github.com/autobrr/autobrr/commit/e9f8730ca011e6825eb06be34c62b0184a6e51bd): feat(filters): wildcard slice matching optimizations ([\#1716](https://github.com/autobrr/autobrr/pull/1716)) ([@KyleSanderson](https://github.com/KyleSanderson))
* [a4452e4](https://github.com/autobrr/autobrr/commit/a4452e4fdc036479f4a04edd48c604ec1f7c1bab): feat(indexers): add LustHive ([\#1732](https://github.com/autobrr/autobrr/pull/1732)) ([@martylukyy](https://github.com/martylukyy))
* [e56bf1f](https://github.com/autobrr/autobrr/commit/e56bf1f8fcf9a1c24dd306ed4db4606fafd35db9): feat(notifications): Telegram set sender ([\#1723](https://github.com/autobrr/autobrr/pull/1723)) ([@martylukyy](https://github.com/martylukyy))
* [ec79eaf](https://github.com/autobrr/autobrr/commit/ec79eafe4336ae6e46457c14bb98a9ddc361be11): feat(notifications): optional Telegram sender ([\#1726](https://github.com/autobrr/autobrr/pull/1726)) ([@martylukyy](https://github.com/martylukyy))
* [51265b6](https://github.com/autobrr/autobrr/commit/51265b67022121ee6b9122d8504cfe360a27c1c4): feat(releases): show indexer name in indexer filter ([\#1720](https://github.com/autobrr/autobrr/pull/1720)) ([@martylukyy](https://github.com/martylukyy))
* [caccaf3](https://github.com/autobrr/autobrr/commit/caccaf3e0987db84bcf7280de90e62d31251782b): feat(wildcard): fast\-path some cases ([\#1747](https://github.com/autobrr/autobrr/pull/1747)) ([@KyleSanderson](https://github.com/KyleSanderson))


### Bug fixes


* [c8e2fba](https://github.com/autobrr/autobrr/commit/c8e2fba3343597eb40c3cc1046bb318ea49e2525): fix(build): run web\-dist tarball step for tags only ([\#1730](https://github.com/autobrr/autobrr/pull/1730)) ([@fabricionaweb](https://github.com/fabricionaweb))
* [45df8a6](https://github.com/autobrr/autobrr/commit/45df8a67ee76c27c691ba46ce0408cf160d32f01): fix(docs): update feature requests link and swizzin install link ([\#1729](https://github.com/autobrr/autobrr/pull/1729)) ([@martylukyy](https://github.com/martylukyy))
* [bf7e138](https://github.com/autobrr/autobrr/commit/bf7e1381ac1201b2c6ce2dbeb626747d85d081b7): fix(downloadclients): arrs change size type to uint64 ([\#1744](https://github.com/autobrr/autobrr/pull/1744)) ([@zze0s](https://github.com/zze0s))
* [e972636](https://github.com/autobrr/autobrr/commit/e9726363b42a2640122a204b15d07a5ae7cb71b0): fix(downloadclients): do not load Deluge from cache ([\#1743](https://github.com/autobrr/autobrr/pull/1743)) ([@zze0s](https://github.com/zze0s))
* [d15b618](https://github.com/autobrr/autobrr/commit/d15b61870eb01d8f8093e87a4b1e4c40ec71977c): fix(filters): release download counts ([\#1739](https://github.com/autobrr/autobrr/pull/1739)) ([@cascandaliato](https://github.com/cascandaliato))
* [490308c](https://github.com/autobrr/autobrr/commit/490308c9c6ef6e4d1d79dd7df6d6166bf6dde8b0): fix(indexers): new baseURL for Fuzer ([\#1724](https://github.com/autobrr/autobrr/pull/1724)) ([@martylukyy](https://github.com/martylukyy))
* [ca2d956](https://github.com/autobrr/autobrr/commit/ca2d956e0240846da2500e5da13196ad964c2148): fix(notifications): disable notification and events have no effect ([\#1754](https://github.com/autobrr/autobrr/pull/1754)) ([@zze0s](https://github.com/zze0s))
* [e9cd6b0](https://github.com/autobrr/autobrr/commit/e9cd6b00493f00a4ed75077daa4552679229501b): fix(sanitize): improve handling for newline tabs etc ([\#1733](https://github.com/autobrr/autobrr/pull/1733)) ([@KyleSanderson](https://github.com/KyleSanderson))
* [3af0655](https://github.com/autobrr/autobrr/commit/3af06553e7612f126d3ea9355e9dcbf3cca1df1a): fix(web): activity/release table cell widths ([\#1717](https://github.com/autobrr/autobrr/pull/1717)) ([@martylukyy](https://github.com/martylukyy))
* [425c3b2](https://github.com/autobrr/autobrr/commit/425c3b21ef20b490c62e7cfa83eebd8b7c6e8a07): fix(web): form slideovers for mobile views ([\#1725](https://github.com/autobrr/autobrr/pull/1725)) ([@martylukyy](https://github.com/martylukyy))


### Other work


* [5e6c4b1](https://github.com/autobrr/autobrr/commit/5e6c4b16c5b30323563adbdd30a6c6c91aedf436): build(deps): bump the golang group with 6 updates ([\#1748](https://github.com/autobrr/autobrr/pull/1748)) ([@dependabot](https://github.com/dependabot)\[bot])
* [e7f25cb](https://github.com/autobrr/autobrr/commit/e7f25cbe3b09b133b599aecc2b96058455116a37): build: add web/dist tarball ([\#1721](https://github.com/autobrr/autobrr/pull/1721)) ([@fabricionaweb](https://github.com/fabricionaweb))
* [1d68aec](https://github.com/autobrr/autobrr/commit/1d68aec31e7509a7b0b1d25294a9f006b96a71f8): build: upload web\-dist to release assets on tag ([\#1731](https://github.com/autobrr/autobrr/pull/1731)) ([@zze0s](https://github.com/zze0s))
* [91db3cf](https://github.com/autobrr/autobrr/commit/91db3cfd0f7a516f8f166903c29b2cd910d179cd): chore(indexers): remove LilleSky ([\#1735](https://github.com/autobrr/autobrr/pull/1735)) ([@NLZ](https://github.com/NLZ))


**Full Changelog**: [v1\.46\.1\...v1\.47\.0](https://github.com/autobrr/autobrr/compare/v1.46.1...v1.47.0)


## Docker images


* `docker pull ghcr.io/autobrr/autobrr:v1.47.0`


## What to do next?


* Read the [documentation](https://autobrr.com)
* Join our [Discord server](https://discord.gg/WQ2eUycxyT)
