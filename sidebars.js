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
      collapsed: false,
      items: [
        "configuration/autobrr",
        "configuration/indexers",
        "configuration/irc",
        "configuration/download-clients",
        "configuration/feeds",
        "configuration/notifications",
      ],
    },
    {
      type: "category",
      label: "Filters",
      collapsed: false,
      items: ["filters/basics", "filters/actions", "filters/examples", "filters/categories",],
    },
//    {
//      type: "category",
//      label: "Usage",
//      collapsed: false,
//      items: ["usage/search", "usage/tips/freespace"],
//    },
    {
      type: 'category',
      label: 'Usage',
      collapsed: false,
      items: [
        'usage/search',
        {
          type: 'category',
          label: 'Tips',
          collapsed: false,
          items: [
            'usage/tips/freespace',
          ],
        },  
      ],
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
