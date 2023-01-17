const lightCodeTheme = require("prism-react-renderer/themes/vsLight");
const darkCodeTheme = require("prism-react-renderer/themes/oceanicNext");
const FontPreloadPlugin = require("webpack-font-preload-plugin");
const config = {
  title: "autobrr",
  tagline: "the modern autodl-irssi replacement",
  url: "https://autobrr.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "autobrr", // Usually your GitHub org/user name.
  projectName: "autobrr", // Usually your repo name.

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
    docs: {
      sidebar: {
        //hideable: true,
        autoCollapseCategories: false,
      },
    },
    navbar: {
      hideOnScroll: true,
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
          label: "Discord",
          target: "_blank",
        },
        {
          href: "https://github.com/autobrr/autobrr",
          position: "right",
          label: "GitHub",
        },
      ],
    },
    colorMode: {
      defaultMode: "dark",
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ["systemd", "nginx", "toml", "docker"],
    },
    image: "img/autobrr.png"
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
