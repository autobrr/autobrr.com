---
slug: v1.66.0
title: v1.66.0
authors: [rogerrabbit]
---
## Changelog

### New Features

* feat(http): implement session storage in database ([#2158](https://github.com/autobrr/autobrr/pull/2158)) ([@zze0s](https://github.com/zze0s))
* feat(http): mask secrets in api responses ([#2163](https://github.com/autobrr/autobrr/pull/2163)) ([@zze0s](https://github.com/zze0s))
* feat(indexers): DarkPeers parse freeleech ([#2165](https://github.com/autobrr/autobrr/pull/2165)) ([@jschavey](https://github.com/jschavey))
* feat(indexers): add Fappaizuri ([#2174](https://github.com/autobrr/autobrr/pull/2174)) ([@martylukyy](https://github.com/martylukyy))
* feat(indexers): add invite command for Fappaizuri ([#2179](https://github.com/autobrr/autobrr/pull/2179)) ([@martylukyy](https://github.com/martylukyy))
* feat(indexers): update ULCX IRC network address ([#2166](https://github.com/autobrr/autobrr/pull/2166)) ([@AnabolicsAnonymous](https://github.com/AnabolicsAnonymous))
* feat(web): clear logs view ([#2170](https://github.com/autobrr/autobrr/pull/2170)) ([@luckylittle](https://github.com/luckylittle))

### Bug fixes

* fix(feeds): torznab freeleech percent parsing ([#2150](https://github.com/autobrr/autobrr/pull/2150)) ([@zze0s](https://github.com/zze0s))
* fix(indexers): SeedPool internal announces ([#2176](https://github.com/autobrr/autobrr/pull/2176)) ([@ministryfml](https://github.com/ministryfml))
* fix(indexers): update HomieHelpDesk announce format ([#2151](https://github.com/autobrr/autobrr/pull/2151)) ([@zze0s](https://github.com/zze0s))
* fix(macros): change typo `CurrenTimeUnixMS` to `CurrentTimeUnixMS` ([#2152](https://github.com/autobrr/autobrr/pull/2152)) ([@zze0s](https://github.com/zze0s))
* fix(web): form saving and validation with local patched zod-formik-adapter ([#2161](https://github.com/autobrr/autobrr/pull/2161)) ([@zze0s](https://github.com/zze0s))
* fix(web): revert local patched zod-formik-adapter to use package ([#2175](https://github.com/autobrr/autobrr/pull/2175)) ([@martylukyy](https://github.com/martylukyy))

### Other work

* build(ci): use go version from go.mod file with go-version-file ([#2159](https://github.com/autobrr/autobrr/pull/2159)) ([@s0up4200](https://github.com/s0up4200))
* build(deps): bump the github group across 1 directory with 2 updates ([#2149](https://github.com/autobrr/autobrr/pull/2149)) ([@dependabot](https://github.com/dependabot)[bot])
* build(deps): bump the github group with 2 updates ([#2180](https://github.com/autobrr/autobrr/pull/2180)) ([@dependabot](https://github.com/dependabot)[bot])
* build(deps): bump the golang group with 9 updates ([#2168](https://github.com/autobrr/autobrr/pull/2168)) ([@dependabot](https://github.com/dependabot)[bot])
* build(make): add build/dockerx for cross platform docker builds ([#2146](https://github.com/autobrr/autobrr/pull/2146)) ([@kinghrothgar](https://github.com/kinghrothgar))
* build(make): fix build/dockerx ([#2155](https://github.com/autobrr/autobrr/pull/2155)) ([@kinghrothgar](https://github.com/kinghrothgar))

**Full Changelog**: [v1.65.0...v1.66.0](https://github.com/autobrr/autobrr/compare/v1.65.0...v1.66.0)

## Docker images

* `docker pull ghcr.io/autobrr/autobrr:v1.66.0`

## What to do next?

* Read the [documentation](https://autobrr.com)
* Join our [Discord server](https://discord.gg/WQ2eUycxyT)