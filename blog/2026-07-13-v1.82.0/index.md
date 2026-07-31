---
slug: v1.82.0
title: v1.82.0
authors: [rogerrabbit]
---
## Changelog

### New Features

* feat(config): align defaults with README.md ([#2509](https://github.com/autobrr/autobrr/pull/2509)) ([@Nomsplease](https://github.com/Nomsplease))
* feat(indexers):  definition v2 format ([#2502](https://github.com/autobrr/autobrr/pull/2502)) ([@zze0s](https://github.com/zze0s))
* feat(indexers): DigitalCore add alt url ([#2514](https://github.com/autobrr/autobrr/pull/2514)) ([@zze0s](https://github.com/zze0s))
* feat(indexers): add DasUnerwartete ([#2493](https://github.com/autobrr/autobrr/pull/2493)) ([@zze0s](https://github.com/zze0s))
* feat(indexers): make NickServ optional and channel password required for BIT-HDTV ([#2498](https://github.com/autobrr/autobrr/pull/2498)) ([@arjunrn](https://github.com/arjunrn))
* feat(irc): optionally skip message cleaning ([#2518](https://github.com/autobrr/autobrr/pull/2518)) ([@zze0s](https://github.com/zze0s))
* feat(irc): resilient connection & channel handling with improved auto-recover ([#1709](https://github.com/autobrr/autobrr/pull/1709)) ([@zze0s](https://github.com/zze0s))
* feat(macros): add MetaTMDB field ([#2517](https://github.com/autobrr/autobrr/pull/2517)) ([@zze0s](https://github.com/zze0s))
* feat(releases): support type in release search ([#2512](https://github.com/autobrr/autobrr/pull/2512)) ([@nuxencs](https://github.com/nuxencs))

### Bug fixes

* fix(indexers): DasUnerwartete key settings and NickServ auth ([#2516](https://github.com/autobrr/autobrr/pull/2516)) ([@martylukyy](https://github.com/martylukyy))
* fix(irc): announce processor channel lookup order ([#2510](https://github.com/autobrr/autobrr/pull/2510)) ([@zze0s](https://github.com/zze0s))

### Other work

* build(deps): add workflow to update language versions ([#2499](https://github.com/autobrr/autobrr/pull/2499)) ([@zze0s](https://github.com/zze0s))
* build(deps): bump Go to 1.26 ([#2497](https://github.com/autobrr/autobrr/pull/2497)) ([@zze0s](https://github.com/zze0s))
* build(deps): bump rls to v0.8.1 ([#2496](https://github.com/autobrr/autobrr/pull/2496)) ([@zze0s](https://github.com/zze0s))
* build(deps): bump the npm group in /web with 18 updates ([#2501](https://github.com/autobrr/autobrr/pull/2501)) ([@dependabot](https://github.com/dependabot)[bot])
* chore: update PR template and add agent guidelines ([#2513](https://github.com/autobrr/autobrr/pull/2513)) ([@zze0s](https://github.com/zze0s))
* refactor(backend): return structs and accept interfaces ([#2504](https://github.com/autobrr/autobrr/pull/2504)) ([@zze0s](https://github.com/zze0s))
