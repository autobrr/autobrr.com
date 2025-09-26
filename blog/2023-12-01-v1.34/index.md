---
slug: 1.34
title: v1.34.0
authors: [rogerrabbit]
---

## Changelog

This is a pretty big release in many ways!

- Revamp of the UI
- New indexer: SugoiMusic
- IRC now have an optional BOT mode
- Force refresh Feeds
- Lots of code improvements (db integration testing, various bug fixes)

[https://github.com/autobrr/autobrr/releases/tag/v1.34.0](https://github.com/autobrr/autobrr/releases/tag/v1.34.0)

### New Features

- feat(database): postgres set ssl mode (#1245) (Intuinewin)
- feat(database): setup integration tests (#1118) (KaiserBh)
- feat(definitions): add expectations for test lines (#1257) (frrad)
- feat(feeds): add force run (#1243) (s0up4200)
- feat(filters): auto-expand used sections (#1278) (s0up4200)
- feat(filters): validate filter size (#1263) (frrad)
- feat(go): implement cpu quota detection (#1251) (KyleSanderson)
- feat(indexers): add SugoiMusic (#1255) (Kuredant)
- feat(indexers): update base url for Milkie (#1256) (mynameisbogdan)
- feat(irc): log connection errors (#1239) (frrad)
- feat(irc): support optional bot mode (#1246) (Kuredant)
- feat(sqlite): implement query planner (#1174) (KyleSanderson)
- feat(tests): verify external autobrr.com URLs (#1253) (s0up4200)
- enhancement(web): releases description for narrow screens (#1234) (martylukyy)
- enhancement(web): ui overhaul (#1155) (stacksmash76)
- refactor(config): copylocks and staticcheck findings (#1261) (s0up4200)
- refactor: streamline shutdown signal handling (#1248) (s0up4200)
- refactor(filters): move rejections from release to filter (#1272) (frrad)

### Bug fixes

- fix(codeql): empty node cache error (#1267) (zze0s)
- fix(config): load from env vars (#995) (zze0s)
- fix(database): broken migrations (zze0s)
- fix(filters): could not delete filter without actions (#1275) (KaiserBh)
- fix(filters): external webhook remove jitter (#1254) (buroa)
- fix(filters): validate external filters (#1250) (s0up4200)
- fix(web): improve responsiveness on settings pages (#1270) (s0up4200)
- fix(web): revert package versions causing errors (#1274) (martylukyy)
- fix(indexers): AnimeBytes parsing (#1259) (frrad)
- fix(indexers): toggle state (#1214) (fabricionaweb)

### Other work

- build(deps): bump the golang group with 1 update (#1235) (dependabot[bot])
- build(deps): bump pnpm to 8.10.5 (#1271) (fabricionaweb)
- build(deps): bump the golang group with 6 updates (#1290) (dependabot[bot])
- build(deps): bump the npm group in /web with 18 updates (#1266) (dependabot[bot])
- build: build rpm and deb (#963) (KyleSanderson)
- chore: Add CODE_OF_CONDUCT (#1098) (onedr0p)
- docs: add coc to readme (#1268) (s0up4200)
- docs: readme improvements and additions (#1262) (s0up4200)

**Full Changelog**: [https://github.com/autobrr/autobrr/compare/v1.33.0...v1.34.0](https://github.com/autobrr/autobrr/compare/v1.33.0...v1.34.0)

## Docker images

- `docker pull ghcr.io/autobrr/autobrr:v1.34.0`

## What to do next?

- Read the [documentation](https://autobrr.com)
- Join our [Discord server](https://discord.gg/8s5d8pFhba)
