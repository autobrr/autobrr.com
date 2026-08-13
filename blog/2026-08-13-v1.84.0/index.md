---
slug: v1.84.0
title: v1.84.0
authors: [rogerrabbit]
---
## Changelog

### New Features

* feat(clients): add Sportarr support ([#2552](https://github.com/autobrr/autobrr/pull/2552)) ([@Sportarr](https://github.com/Sportarr))
* feat(dashboard): user-configurable widgets with release stats and charts ([#2561](https://github.com/autobrr/autobrr/pull/2561)) ([@zze0s](https://github.com/zze0s))
* feat(feeds): add support for custom User-Agent header ([#2526](https://github.com/autobrr/autobrr/pull/2526)) ([@nihalxx3](https://github.com/nihalxx3))
* feat(filters): add Books tab for book and audiobook filtering ([#2599](https://github.com/autobrr/autobrr/pull/2599)) ([@zze0s](https://github.com/zze0s))
* feat(indexers): DigitalCore freeleech support ([#2597](https://github.com/autobrr/autobrr/pull/2597)) ([@zze0s](https://github.com/zze0s))
* feat(indexers): add PeerGarden ([#2562](https://github.com/autobrr/autobrr/pull/2562)) ([@zze0s](https://github.com/zze0s))
* feat(indexers): add RetroToon World ([#2589](https://github.com/autobrr/autobrr/pull/2589)) ([@zze0s](https://github.com/zze0s))
* feat(indexers): update MAM announce format ([#2593](https://github.com/autobrr/autobrr/pull/2593)) ([@zze0s](https://github.com/zze0s))
* feat(indexers): update PeerGarden IRC server ([#2601](https://github.com/autobrr/autobrr/pull/2601)) ([@zze0s](https://github.com/zze0s))
* feat(lists): add support for Trakt smart lists ([#2550](https://github.com/autobrr/autobrr/pull/2550)) ([@MaKTaiL](https://github.com/MaKTaiL))

### Bug fixes

* fix(auth): preserve return url and clean up session on expiry ([#2573](https://github.com/autobrr/autobrr/pull/2573)) ([@zze0s](https://github.com/zze0s))
* fix(ci): docs update trigger never fired on tag builds ([#2557](https://github.com/autobrr/autobrr/pull/2557)) ([@s0up4200](https://github.com/s0up4200))
* fix(ci): update existing docs indexer PR instead of opening duplicates ([#2577](https://github.com/autobrr/autobrr/pull/2577)) ([@zze0s](https://github.com/zze0s))
* fix(http): improve bad request and not found handling ([#2592](https://github.com/autobrr/autobrr/pull/2592)) ([@zze0s](https://github.com/zze0s))
* fix(indexers): TBy remove invite command ([#2549](https://github.com/autobrr/autobrr/pull/2549)) ([@luckylittle](https://github.com/luckylittle))
* fix(indexers): bring back MAM VIP to FL mapping ([#2603](https://github.com/autobrr/autobrr/pull/2603)) ([@zze0s](https://github.com/zze0s))
* fix(indexers): feed refresh scheduling and indexer secret setting ([#2591](https://github.com/autobrr/autobrr/pull/2591)) ([@zze0s](https://github.com/zze0s))
* fix(indexers): update TorrentHR pattern ([#2554](https://github.com/autobrr/autobrr/pull/2554)) ([@senseiriksha](https://github.com/senseiriksha))
* fix(irc): accept join confirmation received before the join workflow starts ([#2587](https://github.com/autobrr/autobrr/pull/2587)) ([@s0up4200](https://github.com/s0up4200))
* fix(irc): do not log entering Connecting state as invalid ([#2606](https://github.com/autobrr/autobrr/pull/2606)) ([@zze0s](https://github.com/zze0s))
* fix(irc): set default auth mechanism and gate NickServ fallback ([#2604](https://github.com/autobrr/autobrr/pull/2604)) ([@zze0s](https://github.com/zze0s))
* fix(irc): show full channel history in webui ([#2571](https://github.com/autobrr/autobrr/pull/2571)) ([@zze0s](https://github.com/zze0s))
* fix(irc): stop network after repeated short-lived connections ([#2605](https://github.com/autobrr/autobrr/pull/2605)) ([@zze0s](https://github.com/zze0s))
* fix(lists): error on update when list has never been refreshed ([#2568](https://github.com/autobrr/autobrr/pull/2568)) ([@zze0s](https://github.com/zze0s))
* fix(notifications): respect Discord embed limits ([#2594](https://github.com/autobrr/autobrr/pull/2594)) ([@com6056](https://github.com/com6056))
* fix(releases): cleanup with Pending state ([#2590](https://github.com/autobrr/autobrr/pull/2590)) ([@zze0s](https://github.com/zze0s))

### Other work

* build(deps): bump pnpm/action-setup from 6.0.9 to 6.0.10 in the github group across 1 directory ([#2576](https://github.com/autobrr/autobrr/pull/2576)) ([@dependabot](https://github.com/dependabot)[bot])
* build(deps): bump the golang group with 14 updates ([#2559](https://github.com/autobrr/autobrr/pull/2559)) ([@dependabot](https://github.com/dependabot)[bot])
* build(deps): bump the npm group across 1 directory with 25 updates ([#2572](https://github.com/autobrr/autobrr/pull/2572)) ([@dependabot](https://github.com/dependabot)[bot])
* build(web): replace @vitejs/plugin-react-swc with @vitejs/plugin-react ([#2582](https://github.com/autobrr/autobrr/pull/2582)) ([@zze0s](https://github.com/zze0s))
* chore(dependabot): exclude CodeQL from cooldown ([#2575](https://github.com/autobrr/autobrr/pull/2575)) ([@zze0s](https://github.com/zze0s))
* chore(deps): migrate Shoutrrr to active fork ([#2581](https://github.com/autobrr/autobrr/pull/2581)) ([@zze0s](https://github.com/zze0s))
* docs: add NZBGet, Shoutrrr and ntfy ([#2551](https://github.com/autobrr/autobrr/pull/2551)) ([@zotabee](https://github.com/zotabee))
* refactor(filters): store indexer connections ([#2569](https://github.com/autobrr/autobrr/pull/2569)) ([@zze0s](https://github.com/zze0s))