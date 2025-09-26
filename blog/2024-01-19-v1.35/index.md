---
slug: 1.35.0
title: v1.35.0
authors: [rogerrabbit]
---

## Changelog

### New Features

- feat(actions): deluge v2 add skip recheck (#1321) (@s0up4200)
- feat(actions): qBittorrent add priority handling (#1315) (@s0up4200)
- feat(auth): change password and username (#1295) (@KaiserBh)
- feat(autobrrctl): add db migrate/seed/reset functionality (#934) (@s0up4200)
- feat(clients): override arr download client by name (#1328) (@zze0s)
- feat(filters): implement min and max seeders/leechers filtering for Torznab feeds (#1342) (@luckyboy)
- feat(filters): show enabled and disabled actions in list view (#1304) (@s0up4200)
- feat(notifications): add LunaSea support (#1284) (@s0up4200)
- feat(notifications): add Shoutrrr support (#1326) (@zze0s)
- feat(notifications): add ntfy support (#1323) (@zze0s)
- feat(releases): incognito mode (#1282) (@s0up4200)
- feat(releases): show details in list view (#1337) (@zze0s)
- feat(web): link Dashboard stats to Releases page (#1281) (@s0up4200)
- feat(web): migrate Tanstack Query to v5 (#1277) (@KaiserBh)

### Bug fixes

- fix(actions): qBit handle `Ignore slow torrents` rule correctly when disabled (#1309) (@s0up4200)
- fix(filters): do not split commas inside valid Regexp (#1212) (@varoOP)
- fix(filters): ensure sort by priority (#1325) (@zze0s)
- fix(filters): hide tooltip when actions are active (#1318) (@s0up4200)
- fix(http): specify ip stack when listen fails (#1306) (@KyleSanderson)
- fix(indexers): DocsPedia adjust announcer name (#1330) (@KyleSanderson)
- fix(notifications): ntfy and shoutrrr enabled check (#1335) (@zze0s)
- fix(releases): search query (#1353) (@zze0s)
- fix(web): improve tooltip responsiveness and click-through (#1314) (@s0up4200)

### Other work

- build(docker): do not tag pre-release as latest (#1352) (@zze0s)
- build(ci): add Go test summary (#1341) (@zze0s)
- build(ci): change goreleaser back to ubuntu runner (#1331) (@KyleSanderson)
- build(ci): disable ghcr push from forks (#1340) (@KyleSanderson)
- build(ci): integrate ESLint with CodeQL (#1273) (@s0up4200)
- build(ci): setup Golang linter nilaway (#1310) (@KyleSanderson)
- build(deps): bump the github group with 1 update (#1299) (@dependabot[bot])
- build(deps): bump the github group with 3 updates (#1308) (@dependabot[bot])
- build(deps): bump the github group with 4 updates (#1324) (@dependabot[bot])
- build(deps): bump the golang group with 5 updates (#1333) (@dependabot[bot])
- build(deps): bump the npm group in /web with 18 updates (#1336) (@dependabot[bot])
- builds(ci): containers build additional architectures (#1265) (@s0up4200)
- build(web): bump vite and cjs node api refactor (#1276) (@KaiserBh)
- chore(build): update go and node (#1301) (@KyleSanderson)
- chore: update license header year (#1332) (@zze0s)
- docs(filters): explain GetDownloadsByFilterId (#1345) (@frrad)
- enchancement(web): IRC settings layout (#1312) (@martylukyy)
- enhancement(feeds): change max age default value to 0 (#1313) (@KaiserBh)
- enhancement(web): force run feed with enter key (#1329) (@martylukyy)
- refactor(filters): checkMaxDownloads (#1285) (@frrad)
- refactor(filters): optimize assignment to allocation (#1293) (@KyleSanderson)
- refactor(http): auth handlers (#1311) (@KyleSanderson)
- refactor(http): implement shared transport and clients (#1288) (@KyleSanderson)
- refactor(indexers): ANT improve freeleech support (#1302) (@Kuredant)

**Full Changelog**: https://github.com/autobrr/autobrr/compare/v1.34.1...v1.35.0

## Docker images

- `docker pull ghcr.io/autobrr/autobrr:v1.35.0`

## What to do next?

- Read the [documentation](https://autobrr.com)
- Join our [Discord server](https://discord.autobrr.com/)
