---
slug: v1.87.0
title: v1.87.0
description: "autobrr v1.87.0 release notes: 4 new features and 4 bug fixes, including add DanishBits and add Materialize."
authors: [rogerrabbit]
---
## Changelog

### New Features

* feat(indexers): add DanishBits ([#2697](https://github.com/autobrr/autobrr/pull/2697)) ([@zze0s](https://github.com/zze0s))
* feat(indexers): add Materialize ([#2693](https://github.com/autobrr/autobrr/pull/2693)) ([@zze0s](https://github.com/zze0s))
* feat(indexers): allow external identifier during creation ([#2695](https://github.com/autobrr/autobrr/pull/2695)) ([@nuxencs](https://github.com/nuxencs))
* feat(indexers): update ItaTorrents announce format ([#2696](https://github.com/autobrr/autobrr/pull/2696)) ([@zze0s](https://github.com/zze0s))

### Bug fixes

* fix(arr): handle error object in bad request responses ([#2681](https://github.com/autobrr/autobrr/pull/2681)) ([@yegle](https://github.com/yegle))
* fix(irc): manual announce panic on channel without indexer ([#2699](https://github.com/autobrr/autobrr/pull/2699)) ([@zze0s](https://github.com/zze0s))
* fix(lists): metacritic always use match releases format ([#2690](https://github.com/autobrr/autobrr/pull/2690)) ([@zze0s](https://github.com/zze0s))
* fix(web): wrong filter action counts ([#2688](https://github.com/autobrr/autobrr/pull/2688)) ([@nuxencs](https://github.com/nuxencs))

### Other work

* build(ci): add workflow to build and push images for external PRs ([#2694](https://github.com/autobrr/autobrr/pull/2694)) ([@zze0s](https://github.com/zze0s))
* build(deps): bump pnpm/action-setup from 6.0.10 to 6.1.0 in the github group ([#2682](https://github.com/autobrr/autobrr/pull/2682)) ([@dependabot](https://github.com/dependabot)[bot])
* chore: update AGENTS.md ([#2689](https://github.com/autobrr/autobrr/pull/2689)) ([@zze0s](https://github.com/zze0s))
* refactor(tests): use testify assert and require everywhere ([#2700](https://github.com/autobrr/autobrr/pull/2700)) ([@zze0s](https://github.com/zze0s))