---
slug: v1.42.0
title: v1.42.0
authors: [rogerrabbit]
---
## Changelog


### New Features


* [56ef3a5](https://github.com/autobrr/autobrr/commit/56ef3a54020749f44a8ae2862641b1c5d891979b): feat(actions): qBittorrent add first-last piece priority ([#1517](https://github.com/autobrr/autobrr/pull/1517)) ([@s0up4200](https://github.com/s0up4200))
* [f8715c1](https://github.com/autobrr/autobrr/commit/f8715c193c88921f9beb60e18dee029544698ae3): feat(auth): improved error handling during login ([#1523](https://github.com/autobrr/autobrr/pull/1523)) ([@s0up4200](https://github.com/s0up4200))
* [0016228](https://github.com/autobrr/autobrr/commit/0016228d899113c1af859505504f9a17b669f536): feat(indexers): add External Identifier to map with ARR indexers ([#1534](https://github.com/autobrr/autobrr/pull/1534)) ([@zze0s](https://github.com/zze0s))
* [28172cf](https://github.com/autobrr/autobrr/commit/28172cfba6e1f551a828f78200075706e939559c): feat(indexers): add HD-Only ([#1525](https://github.com/autobrr/autobrr/pull/1525)) ([@s0up4200](https://github.com/s0up4200))
* [3202c60](https://github.com/autobrr/autobrr/commit/3202c6043db11e76055c2ae1d8ca98d4fcebc3a7): feat(indexers): update release baseurl on update ([#1532](https://github.com/autobrr/autobrr/pull/1532)) ([@zze0s](https://github.com/zze0s))
* [19e129e](https://github.com/autobrr/autobrr/commit/19e129e55fdbf47c43cdf8cf467768994eb56330): feat(releases): delete based on age/indexer/status ([#1522](https://github.com/autobrr/autobrr/pull/1522)) ([@s0up4200](https://github.com/s0up4200))
* [3dab295](https://github.com/autobrr/autobrr/commit/3dab29538744f98f2c2186233577bc9f74d05620): feat(web): add theme toggle to navbar ([#1540](https://github.com/autobrr/autobrr/pull/1540)) ([@s0up4200](https://github.com/s0up4200))
* [190994c](https://github.com/autobrr/autobrr/commit/190994c70b37ab39570e85e2569021d38181a5de): feat(web): set Safari window colors ([#1543](https://github.com/autobrr/autobrr/pull/1543)) ([@s0up4200](https://github.com/s0up4200))


### Bug fixes


* [8120c33](https://github.com/autobrr/autobrr/commit/8120c33f6b83efb58880cdead009c11c64f21dc5): fix(auth): cookie expiry and renewal ([#1527](https://github.com/autobrr/autobrr/pull/1527)) ([@martylukyy](https://github.com/martylukyy))
* [56aa7dd](https://github.com/autobrr/autobrr/commit/56aa7dd5cb6d68bfa6193b6c98e7784d5be08a0a): fix(feeds): parse magnet URI from enclosure ([#1514](https://github.com/autobrr/autobrr/pull/1514)) ([@zze0s](https://github.com/zze0s))
* [d558db2](https://github.com/autobrr/autobrr/commit/d558db231ccdf741e4c6ed9483b23e893043a970): fix(filters): export not working with Safari ([#1505](https://github.com/autobrr/autobrr/pull/1505)) ([@zze0s](https://github.com/zze0s))
* [9832076](https://github.com/autobrr/autobrr/commit/9832076d7ef9bf09287c1eb233bdbdb287521065): fix(indexers): irc baseurl override for links ([#1537](https://github.com/autobrr/autobrr/pull/1537)) ([@zze0s](https://github.com/zze0s))
* [3e7c436](https://github.com/autobrr/autobrr/commit/3e7c436fe6ffcf8f10d553d4df5ca970b1a30139): fix(indexers): new IPT announce bot name ([#1548](https://github.com/autobrr/autobrr/pull/1548)) ([@martylukyy](https://github.com/martylukyy))
* [9d08f14](https://github.com/autobrr/autobrr/commit/9d08f149b4b5706d1d4a74bf8d71b0e2358a3a9c): fix(web): disable pnpm strict version check ([#1519](https://github.com/autobrr/autobrr/pull/1519)) ([@s0up4200](https://github.com/s0up4200))
* [9c8c4a9](https://github.com/autobrr/autobrr/commit/9c8c4a9ab2b36f4ab15c7857cba386bca5f00f47): fix(web): disable autocomplete on APIKeyAddForm and FilterAddForm ([#1546](https://github.com/autobrr/autobrr/pull/1546)) ([@s0up4200](https://github.com/s0up4200))
* [5945b51](https://github.com/autobrr/autobrr/commit/5945b51f36461e04e0fcb4731f34bf21bd8d3a53): fix(web): qbittorrent action rules spacing ([#1544](https://github.com/autobrr/autobrr/pull/1544)) ([@martylukyy](https://github.com/martylukyy))
* [5bae500](https://github.com/autobrr/autobrr/commit/5bae500a8651fa3cefba8f044f34f96557bed9d3): fix(web): responsive account settings ([#1545](https://github.com/autobrr/autobrr/pull/1545)) ([@martylukyy](https://github.com/martylukyy))
* [7134e06](https://github.com/autobrr/autobrr/commit/7134e06379ae2a77e597904e6a2014536d358b7a): fix(web): root pending component placement ([#1547](https://github.com/autobrr/autobrr/pull/1547)) ([@martylukyy](https://github.com/martylukyy))


### Other work


* [ad6ef22](https://github.com/autobrr/autobrr/commit/ad6ef228eca91d780412cd80fc323743bd57ae3d): build(deps): bump CatChen/eslint-suggestion-action from 3 to 4 in the github group ([#1536](https://github.com/autobrr/autobrr/pull/1536)) ([@dependabot](https://github.com/dependabot)[bot])
* [f820060](https://github.com/autobrr/autobrr/commit/f82006049261dba5ae3e6185f4e1a4e2219eac3b): build(deps): bump the golang group with 6 updates ([#1528](https://github.com/autobrr/autobrr/pull/1528)) ([@dependabot](https://github.com/dependabot)[bot])
* [575944d](https://github.com/autobrr/autobrr/commit/575944de1ebc27f70cb41bcf4fe815c84c4dfe1f): chore(database): remove unused test func ([#1465](https://github.com/autobrr/autobrr/pull/1465)) ([@kenstir](https://github.com/kenstir))
* [ccff369](https://github.com/autobrr/autobrr/commit/ccff369f30acf8cf060868128115d3a2a8231a23): chore(indexers): danishbytes remove unused url ([#1526](https://github.com/autobrr/autobrr/pull/1526)) ([@kbhsn4](https://github.com/kbhsn4))
* [ce17292](https://github.com/autobrr/autobrr/commit/ce1729257388d02388de4789c68f48fbd82dcc9e): chore: add missing license headers ([#1512](https://github.com/autobrr/autobrr/pull/1512)) ([@martylukyy](https://github.com/martylukyy))
* [7b9993b](https://github.com/autobrr/autobrr/commit/7b9993b2965085246be96bec4552a5cd151f7a1f): chore: bump pnpm to 9.0.2 ([#1515](https://github.com/autobrr/autobrr/pull/1515)) ([@chenrui333](https://github.com/chenrui333))
* [4311341](https://github.com/autobrr/autobrr/commit/4311341b03a9c98d0973365e7baf937f93e185ea): docs: add macos homebrew installation ([#1518](https://github.com/autobrr/autobrr/pull/1518)) ([@s0up4200](https://github.com/s0up4200))
* [2f9b82c](https://github.com/autobrr/autobrr/commit/2f9b82ca4475964ba4679c4e4f46552c4d4b2b5d): refactor(apiclient): simplify query in release delete method ([#1538](https://github.com/autobrr/autobrr/pull/1538)) ([@s0up4200](https://github.com/s0up4200))


**Full Changelog**: [v1.41.0...v1.42.0](https://github.com/autobrr/autobrr/compare/v1.41.0...v1.42.0)


## Docker images


* `docker pull ghcr.io/autobrr/autobrr:v1.42.0`


## What to do next?


* Read the [documentation](https://autobrr.com)
* Join our [Discord server](https://discord.gg/WQ2eUycxyT)
