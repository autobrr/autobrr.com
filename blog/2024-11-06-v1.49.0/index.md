---
slug: v1.49.0
title: v1.49.0
authors: [rogerrabbit]
---
## Changelog


### New Features


* [50e0e41](https://github.com/autobrr/autobrr/commit/50e0e419e039914c6b2085346fbb93e1fb0354f1): feat(actions): rename skip reannounce to disable reannounce ([\#1794](https://github.com/autobrr/autobrr/pull/1794)) ([@zze0s](https://github.com/zze0s))
* [f89ea9e](https://github.com/autobrr/autobrr/commit/f89ea9e2ff1b14e44478f6561e31df31ece17ca8): feat(filters): sanitize description ([\#1781](https://github.com/autobrr/autobrr/pull/1781)) ([@KyleSanderson](https://github.com/KyleSanderson))
* [a003f68](https://github.com/autobrr/autobrr/commit/a003f68f92d27dffcc86361808511042a49ece30): feat(http): set ResponseHeaderTimeout ([\#1777](https://github.com/autobrr/autobrr/pull/1777)) ([@KyleSanderson](https://github.com/KyleSanderson))
* [1311390](https://github.com/autobrr/autobrr/commit/13113907b23a806987c0920cf06c6dc7ba335710): feat(indexers): DigitalCore parse Tags and Genre ([\#1790](https://github.com/autobrr/autobrr/pull/1790)) ([@s0up4200](https://github.com/s0up4200))


### Bug fixes


* [d23e7ff](https://github.com/autobrr/autobrr/commit/d23e7ffca69684b64745c7b3bdab8dcbd61e6d4d): fix(downloads): handle panic in error check ([\#1782](https://github.com/autobrr/autobrr/pull/1782)) ([@zze0s](https://github.com/zze0s))
* [8f2398a](https://github.com/autobrr/autobrr/commit/8f2398a627d70759039331bec41d7c71d28a6b26): fix(filters): lint warning variable naming ([\#1783](https://github.com/autobrr/autobrr/pull/1783)) ([@zze0s](https://github.com/zze0s))
* [63b8519](https://github.com/autobrr/autobrr/commit/63b8519bd9da5d9f7e3e7aad6e3611049c1f083a): fix(filters): trim user input ([\#1784](https://github.com/autobrr/autobrr/pull/1784)) ([@zze0s](https://github.com/zze0s))
* [70dc2cb](https://github.com/autobrr/autobrr/commit/70dc2cb6c079e0ff9fb58f7966d2d72200a53ec6): fix(indexer): update suggested nick format for FearNoPeer IRC ([\#1788](https://github.com/autobrr/autobrr/pull/1788)) ([@s0up4200](https://github.com/s0up4200))
* [f4c2aef](https://github.com/autobrr/autobrr/commit/f4c2aef38c6e8b0c3a5823135f544a7ffbf63533): fix(indexers): BTFiles size parsing ([\#1805](https://github.com/autobrr/autobrr/pull/1805)) ([@KyleSanderson](https://github.com/KyleSanderson))
* [40fe3e9](https://github.com/autobrr/autobrr/commit/40fe3e9f54d8b0f526c0d79d826737d61acdf91d): fix(indexers): delete feed with indexer ([\#1810](https://github.com/autobrr/autobrr/pull/1810)) ([@zze0s](https://github.com/zze0s))
* [41216ba](https://github.com/autobrr/autobrr/commit/41216babe6c4679cbc73384a1abc0dec1b87d0c7): fix(proxy): add shared transport for proxies ([\#1808](https://github.com/autobrr/autobrr/pull/1808)) ([@zze0s](https://github.com/zze0s))
* [59c5858](https://github.com/autobrr/autobrr/commit/59c5858bf08b483867bba98746b819539ef45fff): fix(releases): update size after actions run ([\#1809](https://github.com/autobrr/autobrr/pull/1809)) ([@zze0s](https://github.com/zze0s))
* [594393e](https://github.com/autobrr/autobrr/commit/594393eaaf05a80333b30c013e4c249358df1596): fix(wildcard): improve short word matching ([\#1806](https://github.com/autobrr/autobrr/pull/1806)) ([@KyleSanderson](https://github.com/KyleSanderson))
* [8cd7d67](https://github.com/autobrr/autobrr/commit/8cd7d67cee3b2087b7cf4d3df8a23cd7d9f1713f): fix(wildcard): match on multi\-line data ([\#1780](https://github.com/autobrr/autobrr/pull/1780)) ([@zze0s](https://github.com/zze0s))


### Other work


* [1e76f33](https://github.com/autobrr/autobrr/commit/1e76f33e47252d26e4fd2486e386ea14ea619e01): build(deps): bump the golang group with 2 updates ([\#1798](https://github.com/autobrr/autobrr/pull/1798)) ([@dependabot](https://github.com/dependabot)\[bot])
* [4ba380b](https://github.com/autobrr/autobrr/commit/4ba380b8ea2839eea8b3b867bfe48fb8b0e4c048): build(deps): bump the npm group in /web with 23 updates ([\#1750](https://github.com/autobrr/autobrr/pull/1750)) ([@dependabot](https://github.com/dependabot)\[bot])
* [b4f0d60](https://github.com/autobrr/autobrr/commit/b4f0d60b9bbacebd862653a5e12ce96d4c6949a5): chore: add missing license headers ([\#1811](https://github.com/autobrr/autobrr/pull/1811)) ([@s0up4200](https://github.com/s0up4200))


**Full Changelog**: [v1\.48\.0\...v1\.49\.0](https://github.com/autobrr/autobrr/compare/v1.48.0...v1.49.0)


## Docker images


* `docker pull ghcr.io/autobrr/autobrr:v1.49.0`


## What to do next?


* Read the [documentation](https://autobrr.com)
* Join our [Discord server](https://discord.gg/WQ2eUycxyT)
