---
slug: 1.29
title: v1.29.0
authors: [rogerrabbit]
---

## Changelog

### New Features
* feat(config): check for updates reading from config (#1038) (@fabricionaweb)
* feat(downloadclient): set downloadClientId for arr clients (#1081) (@zze0s)
* feat(downloadclients): arrs increase timeout for release/push (#1083) (@KyleSanderson)
* feat(feeds): add scheduled cleanup (#1073) (@zze0s)
* feat(feeds): clear feed cache (#1071) (@zze0s)
* feat(feeds): show next run (#1074) (@zze0s)
* feat(filters): add support for multiple external filters (#1030) (@zze0s)
* feat(filters): log external filter exec cmd output (#1029) (@zze0s)
* feat(indexers): DigitalCore support tags (#1090) (@zze0s)
* feat(indexers): support improved ANT announce (#1063) (@onedr0p)
* feat(logs): show full log event (#1096) (@zze0s)
* feat(macros): add SizeString DownloadURL and InfoURL (#1080) (@zze0s)
* feat(notifications): add Size to Discord notification (#1075) (@KyleSanderson)

### Bug fixes
* fix(actions): missing data on retry (#1051) (@zze0s)
* fix(filters): replace newline with comma (#1052) (@zze0s)
* fix(filters): store and update with no external filters (#1049) (@zze0s)
* fix(indexers): IRC URL for Sharewood (#1035) (@Mavyre)
* fix(indexers): MTV announce regex pattern (#1054) (@s0up4200)
* fix(indexers): remove nickserv options for AlphaRatio (#1053) (@martylukyy)
* fix(indexers): update iPlay IRC port (#1062) (@sigma2017)
* fix(irc): merge with existing network (#1085) (@zze0s)
* fix(releases): improve search keyword specifiers (#1106) (@KyleSanderson)
* fix(releases): use case-insensitive searching  (#1092) (@KyleSanderson)
* fix(vite): update code for updated dependencies (#1043) (@KyleSanderson)
* fix(web): actions ratio limit support decimal values (#1100) (@stacksmash76)
* fix(web): Add and update Indexer tooltips (#1111) (@martylukyy)
* fix(web): autoscrolling for Logs page (#1069) (@martylukyy)
* fix(web): cant update from settings panels (#1105) (@stacksmash76)
* fix(web): floating "Import filter" dropdown button (#1102) (@stacksmash76)
* fix(web): implement offline detection (#1065) (@KyleSanderson)
* fix(web): improve initial context state (#1103) (@stacksmash76)
* fix(web): potentially unsafe external links (#1027) (@s0up4200)
* fix(web): removal of service worker (#1088) (@martylukyy)
* fix(web): slideover propagation bug (#1104) (@stacksmash76)
* fix(web): typo on NotFound page (#1070) (@martylukyy)

### Enhancements
* enhancement(web): IRC logs view (#1066) (@martylukyy)
* enhancement(web): add react suspense and improve DX (#1089) (@stacksmash76)
* enhancement(web): disable background scroll when IRC fullscreen view is active (#1112) (@martylukyy)
* enhancement(web): improve font loading performance and avoid page reflow (#1087) (@stacksmash76)
* enhancement(web): improve functionality of utility components (#1094) (@stacksmash76)
* enhancement(web): layout improvements (#1095) (@stacksmash76)
* enhancement(web): modernize APIClient and improve robustness (#1093) (@stacksmash76)

### Other work
* build(docker): improve cache on web-builder stage (#1034) (@fabricionaweb)
* ci(docker): change docker metadata tag to `{{raw}}` from `{{version}}` (#1115) (@zze0s)
* ci: back-off Dependabot to monthly due to spam (#1076) (@KyleSanderson)
* ci: build Goreleaser binaries on windows (#1040) (@KyleSanderson)
* ci: dependabot back-off scheduled runs (#1042) (@KyleSanderson)
* ci: enable dependabot (#1028) (@KyleSanderson)
* ci: fix docker metadata to parse semver tags (#1110) (@fabricionaweb)
* ci: goreleaser lower parallelism to mitigate OOM issues (#1086) (@KyleSanderson)

### Dependencies
* build(deps): bump go-deluge to v1.1.0 (#1082) (@zze0s)
* build(deps): bump go-qbittorrent to v1.3.4 (#1116) (@zze0s)
* build(deps): bump pnpm (#1067) (@martylukyy)
* build(deps): bump the chore-dependabot-github group with 1 update (#1032) (@dependabot[bot])
* build(deps): bump the github group with 1 update (#1091) (@dependabot[bot])
* build(deps): bump the golang group with 1 update (@dependabot[bot])
* build(deps): bump the npm group in /web with 1 update (#1047) (@dependabot[bot])
* build(deps): bump the npm group in /web with 1 update (#1079) (@dependabot[bot])
* build(deps): bump the npm group in /web with 17 updates (#1064) (@dependabot[bot])
* build(deps): bump the npm group in /web with 2 updates (#1072) (@dependabot[bot])
* build(deps): bump go packages (#1039) (@KyleSanderson)

**Full Changelog**: https://github.com/autobrr/autobrr/compare/v1.28.0...v1.29.0

## Docker images

- `docker pull ghcr.io/autobrr/autobrr:v1.29.0`

## What to do next?

- Read the [documentation](https://autobrr.com)
- Join our [Discord server](https://discord.gg/WQ2eUycxyT)

