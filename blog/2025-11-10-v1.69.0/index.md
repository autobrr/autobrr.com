---
slug: v1.69.0
title: v1.69.0
authors: [rogerrabbit]
---
## Changelog

### New Features

* feat(http): make CORS settings configurable ([#2178](https://github.com/autobrr/autobrr/pull/2178)) ([@zze0s](https://github.com/zze0s))
* feat(http): release resources on close ([#2164](https://github.com/autobrr/autobrr/pull/2164)) ([@KyleSanderson](https://github.com/KyleSanderson))
* feat(indexers): DarkPeers add support for Featured Promo announce type ([#2226](https://github.com/autobrr/autobrr/pull/2226)) ([@jschavey](https://github.com/jschavey))
* feat(indexers): add BJ-Share ([#2231](https://github.com/autobrr/autobrr/pull/2231)) ([@zze0s](https://github.com/zze0s))
* feat(indexers): migrate Aither to SASL authentication ([#2250](https://github.com/autobrr/autobrr/pull/2250)) ([@shgew](https://github.com/shgew))
* feat(indexers): update ReelFlix domain ([#2232](https://github.com/autobrr/autobrr/pull/2232)) ([@zze0s](https://github.com/zze0s))
* feat(web): filter releases for Pending status ([#2253](https://github.com/autobrr/autobrr/pull/2253)) ([@zze0s](https://github.com/zze0s))
* feat(web): show warning banner for failed list refreshes ([#2101](https://github.com/autobrr/autobrr/pull/2101)) ([@martylukyy](https://github.com/martylukyy))

### Bug fixes

* fix(database): add missing rows.Close calls ([#2238](https://github.com/autobrr/autobrr/pull/2238)) ([@zze0s](https://github.com/zze0s))
* fix(database): db convert SQLite to PG issues ([#2090](https://github.com/autobrr/autobrr/pull/2090)) ([@katiekloss](https://github.com/katiekloss))
* fix(indexers): BJ-Share IRC channel capitilized ([#2242](https://github.com/autobrr/autobrr/pull/2242)) ([@fabricionaweb](https://github.com/fabricionaweb))
* fix(indexers): BJ-Share size to torrentSize ([@zze0s](https://github.com/zze0s))
* fix(indexers): HHD regex ([#2251](https://github.com/autobrr/autobrr/pull/2251)) ([@zze0s](https://github.com/zze0s))
* fix(macros): parse exec args on windows ([#2233](https://github.com/autobrr/autobrr/pull/2233)) ([@zze0s](https://github.com/zze0s))
* fix(proxy): test connection with non-redacted creds ([#2223](https://github.com/autobrr/autobrr/pull/2223)) ([@zze0s](https://github.com/zze0s))
* fix(web): dropdown causes crash ([#2252](https://github.com/autobrr/autobrr/pull/2252)) ([@zze0s](https://github.com/zze0s))

### Other work

* build(deps): bump actions/setup-node from 5 to 6 in the github group ([#2227](https://github.com/autobrr/autobrr/pull/2227)) ([@dependabot](https://github.com/dependabot)[bot])
* build(deps): bump github/codeql-action from 3 to 4 in the github group ([#2220](https://github.com/autobrr/autobrr/pull/2220)) ([@dependabot](https://github.com/dependabot)[bot])
* build(deps): bump the github group with 2 updates ([#2237](https://github.com/autobrr/autobrr/pull/2237)) ([@dependabot](https://github.com/dependabot)[bot])
* build(deps): bump the golang group with 9 updates ([#2245](https://github.com/autobrr/autobrr/pull/2245)) ([@dependabot](https://github.com/dependabot)[bot])
* build(deps): bump the npm group across 1 directory with 26 updates ([#2224](https://github.com/autobrr/autobrr/pull/2224)) ([@dependabot](https://github.com/dependabot)[bot])
* build(deps): bump the npm group in /web with 13 updates ([#2246](https://github.com/autobrr/autobrr/pull/2246)) ([@dependabot](https://github.com/dependabot)[bot])
* build: goreleaser update config ([#2256](https://github.com/autobrr/autobrr/pull/2256)) ([@zze0s](https://github.com/zze0s))
* build: improve parallelism ([#2187](https://github.com/autobrr/autobrr/pull/2187)) ([@zze0s](https://github.com/zze0s))
* build: remove early web dist publish ([#2255](https://github.com/autobrr/autobrr/pull/2255)) ([@zze0s](https://github.com/zze0s))
* chore(indexers): remove iAnon ([#2221](https://github.com/autobrr/autobrr/pull/2221)) ([@s0up4200](https://github.com/s0up4200))