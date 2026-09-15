import JsonLd from "@site/src/components/JsonLd";

// FAQPage structured data for docs/faqs.mdx.
// Keep these pairs in sync with the headings and answers on that page:
// Google only shows FAQ rich results when the marked-up text is visible.
const FAQ = [
  {
    q: "I think I found a bug",
    a: "Report it on GitHub Issues using the bug report template, or in the #bugs channel on the autobrr Discord.",
  },
  {
    q: "I have a feature request",
    a: "Open a GitHub Discussion in the ideas category, or post in the #suggestions channel on Discord. If you want to build it yourself, see the contributing guide.",
  },
  {
    q: "Nothing happens - I'm not seeing any releases",
    a: "Only releases that reach the action stage show up under Releases. Check that you have an enabled indexer, that the IRC network is green under Settings > IRC, and that you have an enabled filter with at least one indexer selected and an action to run on match. A filter that is too narrow, such as selecting everything under Quality, is a common cause; deselect everything except resolution.",
  },
  {
    q: "Common action rejections",
    a: "A rejection like 'error downloading torrent file for release ... bencode: syntax error' usually means an entire URL was entered instead of only the RSS key. That field only accepts the alphanumeric key.",
  },
  {
    q: "I have set up an indexer, but it does not connect to the #announce channel. What do I do?",
    a: "Make sure you entered the necessary keys in the invite command and that your IRC user has privileges to access the #announce channel. See the IRC setup guide.",
  },
  {
    q: "Setting a custom save path for Deluge in autobrr does not work. Why?",
    a: "This is a Deluge v1 problem and should not happen in v2. As a workaround, use the Deluge label plugin and set a custom save path on a label you create yourself first.",
  },
  {
    q: "Why did a release not match when it clearly should have?",
    a: "Check your logs. Enable trace logging by setting logLevel = \"TRACE\" in config.toml, which is picked up without a restart, or change the log level under Settings > Logs in the web UI.",
  },
  {
    q: "How does autobrr handle multiple matching filters for a release?",
    a: "autobrr checks filters in order of priority, higher number first. When a filter matches it runs all of that filter's actions and stops. The exception is *arr actions: if Radarr or Sonarr rejects the release, the next matching filter is processed.",
  },
  {
    q: "My autobrr instance cannot reach Deluge running in Docker",
    a: "Set Host to the Deluge container name and make sure both containers share a Docker network. Port must be the daemon port, not the web UI port (default 58846). Authentication is the daemon auth from the Deluge auth file, and Allow Remote Connections may need to be enabled in Deluge.",
  },
  {
    q: "I forgot my password",
    a: "Change it from the command line with autobrrctl --config <config dir> change-password <USERNAME>.",
  },
  {
    q: "I want to change my username",
    a: "Change it from the Account page in the web UI. Without web UI access, update the users table in autobrr.db with the sqlite3 CLI or a tool like SQLitebrowser.",
  },
  {
    q: "How can I use my freeleech tokens from RED?",
    a: "RED's Golden Rule 5.3 prohibits autosnatching freeleech torrents, and RED staff have confirmed that automating freeleech tokens falls under it. autobrr does not encourage this; always respect the rules of your trackers.",
  },
];

export default function FaqStructuredData() {
  return (
    <JsonLd
      data={{
        "@type": "FAQPage",
        mainEntity: FAQ.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      }}
    />
  );
}
