---
slug: v1.90.0
title: v1.90.0
description: "autobrr v1.90.0 release notes: 7 new features and 6 bug fixes, including add pagination support for Torznab and Newznab feeds and add processing order option."
authors: [rogerrabbit]
---
## Changelog

### New Features

* feat(feeds): add pagination support for Torznab and Newznab feeds ([#2751](https://github.com/autobrr/autobrr/pull/2751)) ([@GeneralPractitioner-GP](https://github.com/GeneralPractitioner-GP))
* feat(feeds): add processing order option ([#2802](https://github.com/autobrr/autobrr/pull/2802)) ([@zze0s](https://github.com/zze0s))
* feat(indexers): BTN parse size from announce ([#2757](https://github.com/autobrr/autobrr/pull/2757)) ([@zze0s](https://github.com/zze0s))
* feat(indexers): NordicQuality update announce format ([#2801](https://github.com/autobrr/autobrr/pull/2801)) ([@zze0s](https://github.com/zze0s))
* feat(indexers): add Concertos ([#2787](https://github.com/autobrr/autobrr/pull/2787)) ([@jonas-meyer](https://github.com/jonas-meyer))
* feat(indexers): add Sagmire ([#2797](https://github.com/autobrr/autobrr/pull/2797)) ([@tooSaggy](https://github.com/tooSaggy))
* feat(releases): parse TVDB and IGDB ids and pad IMDb ids ([#2800](https://github.com/autobrr/autobrr/pull/2800)) ([@zze0s](https://github.com/zze0s))

### Bug fixes

* fix(downloaders): Porla get active downloads ([#2799](https://github.com/autobrr/autobrr/pull/2799)) ([@vktr](https://github.com/vktr))
* fix(indexers): CZTeam announce sizes parsed as decimal ([#2792](https://github.com/autobrr/autobrr/pull/2792)) ([@alexframe](https://github.com/alexframe))
* fix(indexers): DreadVault update announcer ([#2789](https://github.com/autobrr/autobrr/pull/2789)) ([@zze0s](https://github.com/zze0s))
* fix(indexers): Norbits announce sizes parsed as decimal ([#2807](https://github.com/autobrr/autobrr/pull/2807)) ([@zze0s](https://github.com/zze0s))
* fix(indexers): SuperBits announce sizes parsed as decimal ([#2806](https://github.com/autobrr/autobrr/pull/2806)) ([@zze0s](https://github.com/zze0s))
* fix(indexers): update HappyFappy announce format ([#2796](https://github.com/autobrr/autobrr/pull/2796)) ([@thef4tdaddy](https://github.com/thef4tdaddy))

### Other work

* build(deps): bump the golang group with 5 updates ([#2803](https://github.com/autobrr/autobrr/pull/2803)) ([@dependabot](https://github.com/dependabot)[bot])
* build(deps): bump the npm group in /web with 11 updates ([#2804](https://github.com/autobrr/autobrr/pull/2804)) ([@dependabot](https://github.com/dependabot)[bot])
* refactor(feeds): unify feed setup and refresh ([#2749](https://github.com/autobrr/autobrr/pull/2749)) ([@zze0s](https://github.com/zze0s))