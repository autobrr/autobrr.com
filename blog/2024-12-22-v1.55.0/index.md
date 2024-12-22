---
slug: v1.55.0
title: v1.55.0
authors: [rogerrabbit]
---

## Changelog

### New Features

* feat(auth): implement auth proxy support with OpenID Connect ([#1853](https://github.com/autobrr/autobrr/pull/1853)) ([@s0up4200](https://github.com/s0up4200))
* feat(cache): implement TTLCache and TimeCache ([#1822](https://github.com/autobrr/autobrr/pull/1822)) ([@KyleSanderson](https://github.com/KyleSanderson))
* feat(filters): RED and OPS fetch uploader from API ([#1348](https://github.com/autobrr/autobrr/pull/1348)) ([@alekc](https://github.com/alekc))
* feat(http): implement proper BaseUrl support to coexist with legacy mode ([#1298](https://github.com/autobrr/autobrr/pull/1298)) ([@kaiserbh](https://github.com/kaiserbh))
* feat(releases): improve freeleech parsing ([#1880](https://github.com/autobrr/autobrr/pull/1880)) ([@zze0s](https://github.com/zze0s))
* feat(web): vendor react-hot-toast ([#1883](https://github.com/autobrr/autobrr/pull/1883)) ([@zze0s](https://github.com/zze0s))

### Bug fixes

* fix(http): init oidc handler if enabled ([#1888](https://github.com/autobrr/autobrr/pull/1888)) ([@zze0s](https://github.com/zze0s))
* fix(indexers): PrivateSilverScreen freeleech parsing ([#1879](https://github.com/autobrr/autobrr/pull/1879)) ([@zze0s](https://github.com/zze0s))
* fix(web): circular dependencies ([#1882](https://github.com/autobrr/autobrr/pull/1882)) ([@zze0s](https://github.com/zze0s))
* fix(web): feed and IRC menu out of bounce ([#1887](https://github.com/autobrr/autobrr/pull/1887)) ([@martylukyy](https://github.com/martylukyy))

### Other work

* build(deps): bump the npm group across 1 directory with 23 updates ([#1884](https://github.com/autobrr/autobrr/pull/1884)) ([@dependabot](https://github.com/dependabot)[bot])

**Full Changelog**: [v1.54.0...v1.55.0](https://github.com/autobrr/autobrr/compare/v1.54.0...v1.55.0)

## Docker images

* `docker pull ghcr.io/autobrr/autobrr:v1.55.0`

## What to do next?

* Read the [documentation](https://autobrr.com)
* Join our [Discord server](https://discord.gg/WQ2eUycxyT)
