---
slug: v1.42.0
title: v1.42.0
authors: [rogerrabbit]
---
## Changelog


### New Features


* feat(actions): qBittorrent add first-last piece priority ([#1517](https://github.com/autobrr/autobrr/pull/1517)) ([@s0up4200](https://github.com/s0up4200))
* feat(auth): improved error handling during login ([#1523](https://github.com/autobrr/autobrr/pull/1523)) ([@s0up4200](https://github.com/s0up4200))
* feat(indexers): add External Identifier to map with ARR indexers ([#1534](https://github.com/autobrr/autobrr/pull/1534)) ([@zze0s](https://github.com/zze0s))
* feat(indexers): add HD-Only ([#1525](https://github.com/autobrr/autobrr/pull/1525)) ([@s0up4200](https://github.com/s0up4200))
* feat(indexers): update release baseurl on update ([#1532](https://github.com/autobrr/autobrr/pull/1532)) ([@zze0s](https://github.com/zze0s))
* feat(releases): delete based on age/indexer/status ([#1522](https://github.com/autobrr/autobrr/pull/1522)) ([@s0up4200](https://github.com/s0up4200))
* feat(web): add theme toggle to navbar ([#1540](https://github.com/autobrr/autobrr/pull/1540)) ([@s0up4200](https://github.com/s0up4200))
* feat(web): set Safari window colors ([#1543](https://github.com/autobrr/autobrr/pull/1543)) ([@s0up4200](https://github.com/s0up4200))


### Bug fixes


* fix(auth): cookie expiry and renewal ([#1527](https://github.com/autobrr/autobrr/pull/1527)) ([@martylukyy](https://github.com/martylukyy))
* fix(feeds): parse magnet URI from enclosure ([#1514](https://github.com/autobrr/autobrr/pull/1514)) ([@zze0s](https://github.com/zze0s))
* fix(filters): export not working with Safari ([#1505](https://github.com/autobrr/autobrr/pull/1505)) ([@zze0s](https://github.com/zze0s))
* fix(indexers): irc baseurl override for links ([#1537](https://github.com/autobrr/autobrr/pull/1537)) ([@zze0s](https://github.com/zze0s))
* fix(indexers): new IPT announce bot name ([#1548](https://github.com/autobrr/autobrr/pull/1548)) ([@martylukyy](https://github.com/martylukyy))
* fix(web): disable pnpm strict version check ([#1519](https://github.com/autobrr/autobrr/pull/1519)) ([@s0up4200](https://github.com/s0up4200))
* fix(web): disable autocomplete on APIKeyAddForm and FilterAddForm ([#1546](https://github.com/autobrr/autobrr/pull/1546)) ([@s0up4200](https://github.com/s0up4200))
* fix(web): qbittorrent action rules spacing ([#1544](https://github.com/autobrr/autobrr/pull/1544)) ([@martylukyy](https://github.com/martylukyy))
* fix(web): responsive account settings ([#1545](https://github.com/autobrr/autobrr/pull/1545)) ([@martylukyy](https://github.com/martylukyy))
* fix(web): root pending component placement ([#1547](https://github.com/autobrr/autobrr/pull/1547)) ([@martylukyy](https://github.com/martylukyy))


### Other work


* build(deps): bump CatChen/eslint-suggestion-action from 3 to 4 in the github group ([#1536](https://github.com/autobrr/autobrr/pull/1536)) ([@dependabot](https://github.com/dependabot)[bot])
* build(deps): bump the golang group with 6 updates ([#1528](https://github.com/autobrr/autobrr/pull/1528)) ([@dependabot](https://github.com/dependabot)[bot])
* chore(database): remove unused test func ([#1465](https://github.com/autobrr/autobrr/pull/1465)) ([@kenstir](https://github.com/kenstir))
* chore(indexers): danishbytes remove unused url ([#1526](https://github.com/autobrr/autobrr/pull/1526)) ([@kbhsn4](https://github.com/kbhsn4))
* chore: add missing license headers ([#1512](https://github.com/autobrr/autobrr/pull/1512)) ([@martylukyy](https://github.com/martylukyy))
* chore: bump pnpm to 9.0.2 ([#1515](https://github.com/autobrr/autobrr/pull/1515)) ([@chenrui333](https://github.com/chenrui333))
* docs: add macos homebrew installation ([#1518](https://github.com/autobrr/autobrr/pull/1518)) ([@s0up4200](https://github.com/s0up4200))
* refactor(apiclient): simplify query in release delete method ([#1538](https://github.com/autobrr/autobrr/pull/1538)) ([@s0up4200](https://github.com/s0up4200))


**Full Changelog**: [v1.41.0...v1.42.0](https://github.com/autobrr/autobrr/compare/v1.41.0...v1.42.0)


## Docker images


* `docker pull ghcr.io/autobrr/autobrr:v1.42.0`


## What to do next?


* Read the [documentation](https://autobrr.com)
* Join our [Discord server](https://discord.gg/WQ2eUycxyT)
