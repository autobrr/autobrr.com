module.exports = {
  docs: [
    {
      type: "doc",
      label: "Introduction",
      id: "introduction",
    },
    {
      type: "doc",
      label: "Quick Start",
      id: "quick-start",
    },
    {
      type: "category",
      label: "Installation",
      collapsed: false,
      items: [
        "installation/linux",
        "installation/docker",
        "installation/shared-seedbox",
        "installation/windows",
        {
          type: "category",
          label: "Reverse proxy",
          items: [
            "installation/reverse-proxy/caddy",
            "installation/reverse-proxy/nginx",
            "installation/reverse-proxy/swag",
            "installation/reverse-proxy/traefik"
          ],
        },
        {
          type: "category",
          label: "Supplementary",
          items: [
            "installation/supplementary/transfer-installation",
            "installation/supplementary/postgresql",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Configuration",
      items: [
        "configuration/autobrr",
        "configuration/indexers",
        "configuration/irc",
        {
          type: "category",
          label: "Download clients",
          items: [
            "configuration/download-clients/dedi",
            "configuration/download-clients/shared",
          ],
        },
        "configuration/feeds",
        "configuration/notifications",
      ],
    },
    {
      type: "category",
      label: "Filters",
      collapsed: true,
      items: [
        "filters/basics",
        "filters/tv-movies",
        "filters/music",
        "filters/advanced",
        "filters/external",
        "filters/actions",
        "filters/macros",
        "filters/omegabrr",
        "filters/examples",
        "filters/categories",
        "filters/freeleech",
      ],
    },
    {
      type: "category",
      label: "Usage",
      collapsed: true,
      items: ["usage/search", "usage/tips"],
    },
    {
      type: "doc",
      label: "3rd party tools",
      id: "3rd-party-tools",
    },
    {
      type: "doc",
      label: "faqs",
      id: "faqs",
    },
  ],
};
