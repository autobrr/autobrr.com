---
slug: v1.83.0
title: v1.83.0
authors: [rogerrabbit]
---
## Changelog

### New Features

* feat(clients): add aria2 support ([#2548](https://github.com/autobrr/autobrr/pull/2548)) ([@zze0s](https://github.com/zze0s))
* feat(filters): batch external filter lookup ([#2546](https://github.com/autobrr/autobrr/pull/2546)) ([@zze0s](https://github.com/zze0s))
* feat(filters): update Perfect FLAC to match RED/OPS definition ([#2534](https://github.com/autobrr/autobrr/pull/2534)) ([@zze0s](https://github.com/zze0s))
* feat(indexers): update TorrentHR for UNIT3D migration ([#2531](https://github.com/autobrr/autobrr/pull/2531)) ([@chorijan](https://github.com/chorijan))
* feat(lists): add Whisparr v3 support and fix list refresh panic ([#2544](https://github.com/autobrr/autobrr/pull/2544)) ([@zze0s](https://github.com/zze0s))
* feat(logs): add trace id from announce to action and improved structured logging ([#2533](https://github.com/autobrr/autobrr/pull/2533)) ([@zze0s](https://github.com/zze0s))
* feat(releases): keep torrent in memory and only write a file when needed ([#840](https://github.com/autobrr/autobrr/pull/840)) ([@KyleSanderson](https://github.com/KyleSanderson))
* feat(releases): replace anacrolix/torrent with autobrr/go-torrent ([#2535](https://github.com/autobrr/autobrr/pull/2535)) ([@zze0s](https://github.com/zze0s))
* feat(tests): implement E2E test suite ([#1099](https://github.com/autobrr/autobrr/pull/1099)) ([@zze0s](https://github.com/zze0s))

### Bug fixes

* fix(actions): treat invalid arr download client responses as errors ([#2222](https://github.com/autobrr/autobrr/pull/2222)) ([@s0up4200](https://github.com/s0up4200))
* fix(docs): parse v2 definitions in indexer docs generator ([#2542](https://github.com/autobrr/autobrr/pull/2542)) ([@zze0s](https://github.com/zze0s))
* fix(feeds): empty imdb id handling ([#2539](https://github.com/autobrr/autobrr/pull/2539)) ([@zze0s](https://github.com/zze0s))
* fix(feeds): resolve magnet links from torznab magneturl ([#2547](https://github.com/autobrr/autobrr/pull/2547)) ([@zze0s](https://github.com/zze0s))
* fix(feeds): stagger scheduled runs and store cache items synchronously ([#2271](https://github.com/autobrr/autobrr/pull/2271)) ([@zze0s](https://github.com/zze0s))
* fix(irc): attempt NickServ IDENTIFY with account on failure ([#2540](https://github.com/autobrr/autobrr/pull/2540)) ([@zze0s](https://github.com/zze0s))
* fix(irc): keep live updates in sync with history when skipping message cleaning ([#2538](https://github.com/autobrr/autobrr/pull/2538)) ([@zze0s](https://github.com/zze0s))
* fix(web): replace HeadlessUI slide-overs with non-modal Base UI drawers ([#2537](https://github.com/autobrr/autobrr/pull/2537)) ([@zze0s](https://github.com/zze0s))

### Other work

* build(deps): bump actions/setup-python from 6 to 7 in the github group ([#2541](https://github.com/autobrr/autobrr/pull/2541)) ([@dependabot](https://github.com/dependabot)[bot])
* build(deps): bump the github group with 2 updates ([#2529](https://github.com/autobrr/autobrr/pull/2529)) ([@dependabot](https://github.com/dependabot)[bot])
* perf(indexers): cache announce templates and stop allocating errors on misses ([#2545](https://github.com/autobrr/autobrr/pull/2545)) ([@zze0s](https://github.com/zze0s))
* refactor(logger): drop the wrapper and improve log sanitizing  ([#2543](https://github.com/autobrr/autobrr/pull/2543)) ([@zze0s](https://github.com/zze0s))
