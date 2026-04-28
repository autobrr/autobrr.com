---
slug: v1.76.0
title: v1.76.0
authors: [rogerrabbit]
---
## Changelog

### New Features

* feat(auth): add PKCE support to OIDC implementation ([#2421](https://github.com/autobrr/autobrr/pull/2421)) ([@oynqr](https://github.com/oynqr))
* feat(feeds): add NZB download type support for RSS feeds ([#2376](https://github.com/autobrr/autobrr/pull/2376)) ([@jcarr](https://github.com/jcarr))
* feat(indexers): add InfinityHD ([#2401](https://github.com/autobrr/autobrr/pull/2401)) ([@zze0s](https://github.com/zze0s))
* feat(indexers): add Retro Movies Club ([#2404](https://github.com/autobrr/autobrr/pull/2404)) ([@drtaru](https://github.com/drtaru))
* feat(indexers): add Samaritano ([#2403](https://github.com/autobrr/autobrr/pull/2403)) ([@vaaleyard](https://github.com/vaaleyard))
* feat(indexers): add SeedPool (Music) ([#2423](https://github.com/autobrr/autobrr/pull/2423)) ([@DigitGram](https://github.com/DigitGram))
* feat(irc): add support for `/sleep` in connect commands ([#2419](https://github.com/autobrr/autobrr/pull/2419)) ([@zze0s](https://github.com/zze0s))
* feat(web): add French language ([#2415](https://github.com/autobrr/autobrr/pull/2415)) ([@zze0s](https://github.com/zze0s))
* feat(web): add German language ([#2410](https://github.com/autobrr/autobrr/pull/2410)) ([@zze0s](https://github.com/zze0s))
* feat(web): add Russian language ([#2416](https://github.com/autobrr/autobrr/pull/2416)) ([@NoeRi9n](https://github.com/NoeRi9n))
* feat(web): add Spanish language ([#2411](https://github.com/autobrr/autobrr/pull/2411)) ([@jabloink](https://github.com/jabloink))
* feat(web): add i18n support with English and Simplified Chinese locales ([#2394](https://github.com/autobrr/autobrr/pull/2394)) ([@uifor](https://github.com/uifor))

### Bug fixes

* fix(database): use stable timestamp for release tests ([#2402](https://github.com/autobrr/autobrr/pull/2402)) ([@zze0s](https://github.com/zze0s))
* fix(releases): keep releases if PUSH\_APPROVED is not in the delete list for cleanup ([#2420](https://github.com/autobrr/autobrr/pull/2420)) ([@zze0s](https://github.com/zze0s))
* fix(web): indexer proxy button overflow ([#2414](https://github.com/autobrr/autobrr/pull/2414)) ([@martylukyy](https://github.com/martylukyy))

### Other work

* build(deps): bump the golang group with 15 updates ([#2405](https://github.com/autobrr/autobrr/pull/2405)) ([@dependabot](https://github.com/dependabot)[bot])
* build(deps): bump the npm group across 1 directory with 19 updates ([#2409](https://github.com/autobrr/autobrr/pull/2409)) ([@dependabot](https://github.com/dependabot)[bot])
* build: fix publish binaries condition ([#2424](https://github.com/autobrr/autobrr/pull/2424)) ([@zze0s](https://github.com/zze0s))
* build: skip GoReleaser publish from forks ([#2418](https://github.com/autobrr/autobrr/pull/2418)) ([@zze0s](https://github.com/zze0s))