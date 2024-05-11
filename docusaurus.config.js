import { themes } from "prism-react-renderer";

const FontPreloadPlugin = require("webpack-font-preload-plugin");
const config = {
  title: "autobrr",
  tagline: "The modern autodl-irssi replacement.",
  url: "https://autobrr.com",
  baseUrl: "/",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "autobrr", // Usually your GitHub org/user name.
  projectName: "autobrr", // Usually your repo name.

  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        docsRouteBasePath: "/",
        language: "en",
        docsDir: "docs",
        searchBarShortcutHint: false,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      }),
    ],
  ],

  presets: [
    [
      "classic",
      {
        blog: {
          blogTitle: "Release Notes",
          routeBasePath: "/release-notes",
          blogSidebarTitle: "Release Notes",
          blogSidebarCount: 'ALL',
        },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/autobrr/autobrr.com/tree/main/",
          //sidebarCollapsible: false,
          routeBasePath: "/",
          showLastUpdateTime: false,
          includeCurrentVersion: true,
          lastVersion: "current",
          versions: {
            current: {
              label: "Latest", // latest will always be the content of /docs
              path: "",
              banner: "none",
              badge: true,
            },
            // list older archived versiones here after running `yarn docusaurus docs:version <version_number>`
            //"1.3.0": {
            //  label: "1.3.0",
            //  path: "1.3.0",
            //  banner: "unmaintained",
            //},
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
      },
    ],
  ],

  themeConfig: {
    // metadata: [
    //   {
    //     name: "keywords",
    //     content: "autobrr, autodl-irssi, torrents, automation",
    //   },
    // ],
    image: "img/autobrr.png",
    docs: {
      sidebar: {
        //hideable: true,
        autoCollapseCategories: false,
      },
    },
    navbar: {
      title: "autobrr",
      logo: {
        alt: "autobrr Logo",
        src: "img/logo.png",
      },
      items: [
        {
          to: "introduction",
          position: "left",
          label: "Docs",
          activeBaseRegex:
            "/(introduction|installation|configuration|filters|usage)",
        },
        {
          to: "release-notes",
          label: "Release Notes",
          position: "left",
        },
        //{
        //{
        //  type: "docsVersionDropdown", // disabling until its of use
        //  position: "left",
        //  dropdownActiveClassDisabled: false,
        //},
        {
          href: "https://discord.gg/WQ2eUycxyT",
          position: "right",
          className: "header-discord-link",
          "aria-label": "Discord",
          target: "_blank",
          title: "Discord",
        },
        {
          href: "https://github.com/autobrr/autobrr",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
          target: "_blank",
          title: "Github repository",
        },
      ],
    },
    colorMode: {
      //defaultMode: "dark", 
      respectPrefersColorScheme: true
    },
    prism: {
      theme: themes.vsLight,
      darkTheme: themes.oceanicNext,
      additionalLanguages: ["systemd", "nginx", "toml", "docker", "bash", "json"],
    },
  },

  plugins: [
    function preloadFontPlugin(_context, _options) {
      return {
        name: "preload-font-plugin",
        configureWebpack(_config, _isServer) {
          return { plugins: [new FontPreloadPlugin()] };
        },
      };
    },
    // ...
  ],
};

module.exports = config;
