// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'autobrr',
  tagline: 'the modern autodl-irssi replacement',
  url: 'https://autobrr.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'autobrr', // Usually your GitHub org/user name.
  projectName: 'autobrr', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/autobrr/autobrr.com/tree/main/',
          sidebarCollapsible: false,
          routeBasePath: "/",
        },
        blog: false,

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'autobrr',
        logo: {
          alt: 'autobrr Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'getting-started/installation',
            position: 'left',
            label: 'Docs',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/autobrr/autobrr',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      colorMode: {
        defaultMode: 'dark',
      },
      footer: {
        logo: {
          alt: 'autobrr Logo',
          src: 'img/logo-sm.png',
          href: 'https://autobrr.com',
        },
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/introduction',
              },
              {
                label: 'Filters',
                to: '/docs/filters/basics',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/WQ2eUycxyT',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/autobrr/autobrr',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} autobrr Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
