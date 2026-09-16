# autobrr docs

[![Netlify Status](https://api.netlify.com/api/v1/badges/b6c26aeb-b04d-4cd0-9ddb-62cba5d2fd5c/deploy-status)](https://app.netlify.com/sites/autobrr/deploys)

Documentation for [autobrr](https://github.com/autobrr/autobrr), served at [autobrr.com](https://autobrr.com). Built with [Docusaurus](https://docusaurus.io/).

## Development

Requires Node.js and [pnpm](https://pnpm.io/).

```sh
pnpm install   # install dependencies
pnpm start     # dev server with live reload
pnpm build     # production build, also validates links and MDX
pnpm serve     # serve the production build locally
```

## Contributing

Docs live in `docs/`, release notes in `blog/`. Open a pull request against `main`; Netlify deploys on merge.
