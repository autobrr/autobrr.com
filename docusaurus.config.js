const prism = require("prism-react-renderer");

const FontPreloadPlugin = require("webpack-font-preload-plugin");
const config = {
  title: "autobrr",
  tagline: "The modern autodl-irssi replacement.",
  url: "https://autobrr.com",
  baseUrl: "/",
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
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/autobrr/autobrr.com/tree/main/",
          //sidebarCollapsible: false,
          routeBasePath: "/",
        },
        blog: false,
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
    head: [
      {
        tagName: "link",
        attributes: {
          rel: "preload",
          as: "image",
          href: "../../static/img/front-dark.png",
        },
      },
      {
        tagName: "link",
        attributes: {
          rel: "preload",
          as: "image",
          href: "../../static/img/front-light.png",
        },
      },
    ],
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
          to: "faqs",
          label: "FAQs",
          position: "left",
        },
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
      defaultMode: "dark",
    },
    prism: {
      theme: prism.themes.vsLight,
      darkTheme: prism.themes.oceanicNext,
      additionalLanguages: ["systemd", "nginx", "toml", "docker"],
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
