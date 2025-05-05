---
slug: v1.62.0
title: v1.62.0
authors: [rogerrabbit]
---
## Changelog

### New Features

* feat(database): connect postgres via socket and read config from env \_FILE secrets ([#2061](https://github.com/autobrr/autobrr/pull/2061)) ([@zze0s](https://github.com/zze0s))
* feat(filters): add DSD formats to music ([#1993](https://github.com/autobrr/autobrr/pull/1993)) ([@fabricionaweb](https://github.com/fabricionaweb))
* feat(filters): show disabled indexer warning ([#2034](https://github.com/autobrr/autobrr/pull/2034)) ([@s0up4200](https://github.com/s0up4200))
* feat(indexers): add HomieHelpDesk ([#2050](https://github.com/autobrr/autobrr/pull/2050)) ([@zze0s](https://github.com/zze0s))
* feat(indexers): add T66y ([#2044](https://github.com/autobrr/autobrr/pull/2044)) ([@nitrix](https://github.com/nitrix))
* feat(indexers): add XtremeWrestlingTorrents ([#2051](https://github.com/autobrr/autobrr/pull/2051)) ([@zze0s](https://github.com/zze0s))
* feat(macros): implement template cache ([#2049](https://github.com/autobrr/autobrr/pull/2049)) ([@s0up4200](https://github.com/s0up4200))
* feat(web): persist releases incognito state ([#2042](https://github.com/autobrr/autobrr/pull/2042)) ([@s0up4200](https://github.com/s0up4200))

### Bug fixes

* fix(filters): multi-single value dynamic range matching ([#2033](https://github.com/autobrr/autobrr/pull/2033)) ([@zze0s](https://github.com/zze0s))
* fix(http): change onboarding unavailable log level ([#2048](https://github.com/autobrr/autobrr/pull/2048)) ([@martylukyy](https://github.com/martylukyy))
* fix(macros): set HasLog when Log Score is missing in announce ([#2052](https://github.com/autobrr/autobrr/pull/2052)) ([@nuxencs](https://github.com/nuxencs))
* fix(metrics): irc channel enabled gauge ([#2039](https://github.com/autobrr/autobrr/pull/2039)) ([@Intuinewin](https://github.com/Intuinewin))

### Other work

* build(deps): bump Go to 1.24 ([#2060](https://github.com/autobrr/autobrr/pull/2060)) ([@zze0s](https://github.com/zze0s))
* build(deps): bump the golang group with 10 updates ([#2059](https://github.com/autobrr/autobrr/pull/2059)) ([@dependabot](https://github.com/dependabot)[bot])
* build(deps): bump the npm group in /web with 19 updates ([#2058](https://github.com/autobrr/autobrr/pull/2058)) ([@dependabot](https://github.com/dependabot)[bot])
* chore(indexers): remove TorrentSeeds ([#2040](https://github.com/autobrr/autobrr/pull/2040)) ([@s0up4200](https://github.com/s0up4200))

**Full Changelog**: [v1.61.0...v1.62.0](https://github.com/autobrr/autobrr/compare/v1.61.0...v1.62.0)

## Docker images

* `docker pull ghcr.io/autobrr/autobrr:v1.62.0`

## What to do next?

* Read the [documentation](https://autobrr.com)
* Join our [Discord server](https://discord.gg/WQ2eUycxyT)