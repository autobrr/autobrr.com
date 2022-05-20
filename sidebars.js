module.exports = {
  docs: [
    {
      type: "doc",
      label: "Introduction",
      id: "introduction"
    },
    {
      type: "category",
      label: "Getting Started",
      link: {type: 'doc', id: 'getting-started/getting-started'},
      collapsed: false,
      items: [
          "getting-started/installation",
          "getting-started/docker",
          "getting-started/windows",
          "getting-started/postgres"
        ],
    },
    {
      type: "category",
      label: "Configuration",
      collapsed: false,
      link: {type: 'doc', id: 'configuration/configuration'},
      items: [
          "configuration/indexers",
          "configuration/irc",
          "configuration/download-clients",
          "configuration/torznab-feeds"
        ],
    },
    {
      type: "category",
      label: "Filters",
      link: {type: 'doc', id: 'filters/basics'},
      collapsed: false,
      items: [
          "filters/basics",
          "filters/actions"
        ],
    },
    {
      type: "doc",
      label: "Notifications",
      id: "notifications"
    },
    {
      type: "doc",
      label: "3rd party scripts",
      id: "3rd-party-scripts"
    },
    {
      type: "doc",
      label: "faqs",
      id: "faqs"
    },
  ],
};