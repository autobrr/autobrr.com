module.exports = {
  docs: [
    {
      type: "doc",
      label: "Introduction",
      id: "introduction",
    },
    {
      type: "category",
      label: "Installation",
      collapsed: false,
      link: {
        type: "doc",
        id: "installation/linux",
      },
      items: [
        "installation/linux",
        "installation/docker",
        "installation/shared-seedbox",
        "installation/windows",
        "installation/transfer-installation",
        "installation/postgresql",
      ],
    },
    {
      type: "category",
      label: "Configuration",
      collapsed: true,
      link: {
        type: "doc",
        id: "configuration/autobrr",
      },
      items: [
        "configuration/autobrr",
        "configuration/indexers",
        "configuration/irc",
        {
          type: "category",
          //type: "doc",
          label: "Download clients",
          //id: "configuration/download-clients",
          collapsed: false,
          link: {
            type: "doc",
            id: "configuration/download-clients/dedi",
          },
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
      link: {
        type: "doc",
        id: "filters/basics",
      },
      items: [
        "filters/basics",
        "filters/actions",
        "filters/examples",
        "filters/categories",
      ],
    },
    {
      type: "category",
      label: "Usage",
      collapsed: true,
      link: {
        type: "doc",
        id: "usage/search",
      },
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
