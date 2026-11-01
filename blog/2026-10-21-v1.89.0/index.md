---
slug: v1.89.0
title: v1.89.0
description: "autobrr v1.89.0 release notes: 8 new features and 8 bug fixes, including rTorrent ratio group and priority and add cobra cli and rework app setup."
authors: [rogerrabbit]
---
## Changelog

### New Features

* feat(actions): rTorrent ratio group and priority ([#2752](https://github.com/autobrr/autobrr/pull/2752)) ([@zze0s](https://github.com/zze0s))
* feat(app): add cobra cli and rework app setup ([#2753](https://github.com/autobrr/autobrr/pull/2753)) ([@zze0s](https://github.com/zze0s))
* feat(database): add PostgreSQL to SQLite converter ([#2781](https://github.com/autobrr/autobrr/pull/2781)) ([@zze0s](https://github.com/zze0s))
* feat(indexers): add BinaryBay ([#2755](https://github.com/autobrr/autobrr/pull/2755)) ([@zze0s](https://github.com/zze0s))
* feat(indexers): add Curupira ([#2762](https://github.com/autobrr/autobrr/pull/2762)) ([@JoaoForce](https://github.com/JoaoForce))
* feat(indexers): add DreadVault ([#2756](https://github.com/autobrr/autobrr/pull/2756)) ([@zze0s](https://github.com/zze0s))
* feat(indexers): add EchelonHD ([#2764](https://github.com/autobrr/autobrr/pull/2764)) ([@zze0s](https://github.com/zze0s))
* feat(notifications): add Bark ([#2761](https://github.com/autobrr/autobrr/pull/2761)) ([@zent00](https://github.com/zent00))

### Bug fixes

* fix(indexers): TorrentHR make TMDb and IMDb announce fields independently optional ([#2774](https://github.com/autobrr/autobrr/pull/2774)) ([@senseiriksha](https://github.com/senseiriksha))
* fix(indexers): allow saving indexers with secrets removed from their definition ([#2776](https://github.com/autobrr/autobrr/pull/2776)) ([@zze0s](https://github.com/zze0s))
* fix(irc): follow server CASEMAPPING for nick and channel comparisons ([#2748](https://github.com/autobrr/autobrr/pull/2748)) ([@zze0s](https://github.com/zze0s))
* fix(irc): join channel of indexer added to a running shared network ([#2763](https://github.com/autobrr/autobrr/pull/2763)) ([@zze0s](https://github.com/zze0s))
* fix(irc): network stuck after restart or long server outage ([#2765](https://github.com/autobrr/autobrr/pull/2765)) ([@zze0s](https://github.com/zze0s))
* fix(irc): restart and shutdown lifecycle ([#2767](https://github.com/autobrr/autobrr/pull/2767)) ([@zze0s](https://github.com/zze0s))
* fix(irc): retry NickServ identify when services are missing ([#2771](https://github.com/autobrr/autobrr/pull/2771)) ([@kris-anderson](https://github.com/kris-anderson))
* fix(web): add pointer cursor and dark hover styles to form test buttons ([#2754](https://github.com/autobrr/autobrr/pull/2754)) ([@Shraymonks](https://github.com/Shraymonks))

### Other work

* build(deps): bump the golang group with 10 updates ([#2783](https://github.com/autobrr/autobrr/pull/2783)) ([@dependabot](https://github.com/dependabot)[bot])
* build(deps): bump the npm group in /web with 22 updates ([#2784](https://github.com/autobrr/autobrr/pull/2784)) ([@dependabot](https://github.com/dependabot)[bot])
* build(deps): pin Go toolchain to 1.27.3 ([#2785](https://github.com/autobrr/autobrr/pull/2785)) ([@zze0s](https://github.com/zze0s))
* chore(indexers): deprecate Sharewood ([#2778](https://github.com/autobrr/autobrr/pull/2778)) ([@zze0s](https://github.com/zze0s))
* chore(indexers): remove EchelonHD ([#2775](https://github.com/autobrr/autobrr/pull/2775)) ([@zze0s](https://github.com/zze0s))