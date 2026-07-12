import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import styles from "./index.module.css";

import { BiRss } from "react-icons/bi";
import { FiFilter, FiTerminal, FiPackage } from "react-icons/fi";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { TbPlugConnected } from "react-icons/tb";

/*
 * The announce wire: a scripted loop of IRC-style announces. Lines
 * cycle through; entries with a `match` light up with the matched
 * filter and the resulting push.
 */
const WIRE_LINES = [
  {
    time: "21:04:11",
    release: "The.Grand.Heist.2024.1080p.BluRay.x264-CADENZA",
  },
  {
    time: "21:04:13",
    release: "Blue.Harvest.S03E07.720p.HDTV.x264-FROND",
  },
  {
    time: "21:04:16",
    release: "Orbital.Decay.S02E04.1080p.WEB.H264-PARSEC",
    match: { filter: "TV 1080p WEB", client: "qBittorrent", ms: 14 },
  },
  {
    time: "21:04:19",
    release: "VA-Deep.Signals.Vol.3-WEB-2025-XMR",
  },
  {
    time: "21:04:22",
    release: "Static.Fields.S01E10.720p.WEB.h264-KELP",
  },
  {
    time: "21:04:24",
    release: "Quiet.Rivers.2023.2160p.WEB-DL.DV.HDR.H265-LUMEN",
    match: { filter: "Movies 4K HDR", client: "Deluge", ms: 21 },
  },
  {
    time: "21:04:27",
    release: "Concrete.Garden.S01.1080p.BluRay.x264-MORTAR",
  },
  {
    time: "21:04:30",
    release: "Last.Transmission.2025.720p.WEB.h264-RELAY",
  },
  {
    time: "21:04:33",
    release: "Night.Cartography.S04E01.1080p.WEB.H264-ATLAS",
    match: { filter: "TV 1080p WEB", client: "qBittorrent", ms: 9 },
  },
  {
    time: "21:04:36",
    release: "Golden.Ratio.2022.1080p.BluRay.x265-HELIX",
  },
];

const VISIBLE_LINES = 7;

function WireLine({ line }) {
  return (
    <div className={clsx(styles.wireLine, line.match && styles.wireMatch)}>
      <span className={styles.wireRelease}>
        <span className={styles.wireTime}>{line.time}</span>
        {line.release}
      </span>
      {line.match && (
        <span className={styles.wireResult}>
          <span className={styles.wireChip}>
            filter: {line.match.filter}
          </span>
          <span className={styles.wirePush}>
            → pushed to {line.match.client} · {line.match.ms}ms
          </span>
        </span>
      )}
    </div>
  );
}

function AnnounceWire() {
  const [count, setCount] = useState(VISIBLE_LINES);
  const reducedRef = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedRef.current = mq.matches;
    if (mq.matches) {
      return undefined;
    }
    const id = setInterval(() => setCount((c) => c + 1), 2100);
    return () => clearInterval(id);
  }, []);

  const lines = [];
  for (let i = Math.max(0, count - VISIBLE_LINES); i < count; i++) {
    lines.push({ key: i, ...WIRE_LINES[i % WIRE_LINES.length] });
  }

  return (
    <div className={styles.wireWrap}>
      <div className={styles.wireGlow} aria-hidden="true" />
      <div className={styles.wire} aria-hidden="true">
        <div className={styles.wireHeader}>
          <span className={styles.wireDots}>
            <span />
            <span />
            <span />
          </span>
          <span>#announces — connected</span>
        </div>
        <div className={styles.wireBody}>
          {lines.map((line) => (
            <WireLine key={line.key} line={line} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <header className={styles.hero}>
      <div className="container">
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <h1 className={styles.heroTitle}>
              From announce to download{" "}
              <span className={styles.heroTitleAccent}>in seconds</span>
            </h1>
            <p className={styles.heroSub}>
              autobrr sits in your indexers&apos; IRC announce channels,
              checks every release against your filters, and sends the
              matches to your download client before the RSS feed updates.
            </p>
            <div className={styles.heroActions}>
              <Link className={styles.btnPrimary} to="/installation/intro">
                Get started
              </Link>
              <Link className={styles.btnGhost} to="/introduction">
                What is autobrr?
              </Link>
            </div>
            <div className={styles.heroFacts}>
              <span>
                <strong>100+</strong> indexers
              </span>
              <span>
                <strong>7</strong> download clients
              </span>
              <span>
                <strong>5</strong> *arr integrations
              </span>
            </div>
          </div>
          <AnnounceWire />
        </div>
      </div>
    </header>
  );
}

const STEPS = [
  {
    num: "01",
    title: "Listen",
    body: "autobrr connects to your indexers' IRC networks and sits in their announce channels. For indexers without IRC, it polls RSS, Torznab and Newznab feeds instead.",
  },
  {
    num: "02",
    title: "Filter",
    body: "Each announce runs through your filters: resolution, source, codec, size, release group, freeleech. When the presets run out, write your own regex.",
  },
  {
    num: "03",
    title: "Push",
    body: "Matches go straight to your download client or one of the *arrs. Webhooks and external scripts can weigh in before anything gets pushed.",
  },
];

function HowItWorks() {
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <p className={styles.sectionEyebrow}>How it works</p>
        <h2 className={styles.sectionTitle}>
          One pipeline: listen, filter, push
        </h2>
        <p className={styles.sectionLead}>
          Set up your filters once. From then on, autobrr sits in the
          announce channels and reacts the moment a release you want
          shows up, whether you&apos;re at the keyboard or asleep.
        </p>
        <div className={styles.steps}>
          {STEPS.map((step) => (
            <div className={styles.step} key={step.num}>
              <span className={styles.stepNum}>{step.num}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepBody}>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FEATURES = [
  {
    icon: <FiTerminal size={20} />,
    title: "Real-time IRC announces",
    body: "Grab releases the moment they're announced, minutes before they show up in any RSS feed.",
  },
  {
    icon: <BiRss size={20} />,
    title: "Feeds when there's no IRC",
    body: "Some indexers don't announce over IRC. Point autobrr at their RSS, Torznab or Newznab feed and filter those releases the same way.",
  },
  {
    icon: <FiFilter size={20} />,
    title: "Filters, down to the regex",
    body: "Match on resolution, source, codec, size, seasons, episodes and release groups. If a preset doesn't cut it, drop into regex.",
  },
  {
    icon: <TbPlugConnected size={20} />,
    title: "Works with your setup",
    body: "Push to qBittorrent, Deluge, Transmission, rTorrent, Porla or SABnzbd, or route releases through Sonarr and Radarr.",
  },
  {
    icon: <MdOutlineNotificationsActive size={20} />,
    title: "Notifications and hooks",
    body: "Get a ping on Discord, Telegram, Pushover or ntfy for every push, and trigger webhooks or scripts on match.",
  },
  {
    icon: <FiPackage size={20} />,
    title: "One binary, anywhere",
    body: "A single Go binary with a built-in web UI. Runs on Linux, macOS, Windows, FreeBSD, Docker and your seedbox.",
  },
];

function Features() {
  return (
    <section className={styles.section}>
      <div className="container">
        <p className={styles.sectionEyebrow}>Features</p>
        <h2 className={styles.sectionTitle}>
          Everything between the indexer and your client
        </h2>
        <p className={styles.sectionLead}>
          Your indexers on one side, your download client on the other.
          autobrr is everything in between.
        </p>
        <div className={styles.features}>
          {FEATURES.map((feature) => (
            <div className={styles.feature} key={feature.title}>
              <span className={styles.featureIcon}>{feature.icon}</span>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureBody}>{feature.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const SHOTS = [
  {
    key: "dashboard",
    label: "Dashboard",
    alt: "The autobrr dashboard with push stats and recent activity",
    caption:
      "Push stats and recent activity: every release that came through, and what happened to it.",
  },
  {
    key: "filters",
    label: "Filters",
    alt: "The filters list with enabled toggles, priorities and indexers",
    caption:
      "Every filter in one list, with its priority, its actions and the indexers it listens to.",
  },
  {
    key: "filter-moviestv",
    label: "Filter detail",
    alt: "A filter's Movies and TV tab with resolution, source and codec matching",
    caption:
      "Dial in exactly what to grab: seasons, resolutions, sources, codecs and more per filter.",
    height: 1536,
  },
  {
    key: "releases",
    label: "Releases",
    alt: "The releases page listing approved and rejected pushes per indexer",
    caption:
      "The full release history, searchable and filterable by push status and indexer.",
  },
  {
    key: "settings-irc",
    label: "IRC",
    alt: "IRC settings with connected networks and healthy channels",
    caption:
      "Network health at a glance: green means autobrr is in the announce channel, listening.",
  },
];

const SHOT_SIZES = "(max-width: 1140px) 94vw, 1080px";

function shotSrcSet(key, theme) {
  return `/img/webui/${key}-${theme}-1000.webp 1000w, /img/webui/${key}-${theme}-2000.webp 2000w`;
}

function Screenshot() {
  const [active, setActive] = useState(SHOTS[0]);
  const [loaded, setLoaded] = useState(() => new Set());

  const markLoaded = (key) =>
    setLoaded((prev) => (prev.has(key) ? prev : new Set(prev).add(key)));

  const activeLoaded =
    loaded.has(`${active.key}-light`) || loaded.has(`${active.key}-dark`);

  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <p className={styles.sectionEyebrow}>The web UI</p>
        <h2 className={styles.sectionTitle}>
          Why did it grab that? The UI will tell you
        </h2>
        <p className={styles.sectionLead}>
          Filters, releases, networks and clients are all managed from
          the web UI, and the logs are right there when a release
          doesn&apos;t match.
        </p>
        <div
          className={styles.shotTabs}
          role="tablist"
          aria-label="Web UI pages"
        >
          {SHOTS.map((shot) => (
            <button
              key={shot.key}
              type="button"
              role="tab"
              aria-selected={active.key === shot.key}
              className={clsx(
                styles.shotTab,
                active.key === shot.key && styles.shotTabActive
              )}
              onClick={() => setActive(shot)}
            >
              {shot.label}
            </button>
          ))}
        </div>
        <div className={styles.shotWrap}>
          {/*
           * All screenshots stay mounted in a stack and crossfade on
           * tab change; remounting a single <img> would blank the area
           * until the next image decodes.
           */}
          <div className={styles.shotStack}>
            {!activeLoaded && (
              <div className={styles.shotSkeleton} aria-hidden="true" />
            )}
            {SHOTS.map((shot) =>
              ["light", "dark"].map((theme) => {
                const imgKey = `${shot.key}-${theme}`;
                return (
                  <img
                    key={imgKey}
                    /*
                     * onLoad misses images that finish before React
                     * hydrates, so the ref double-checks `complete`.
                     */
                    ref={(el) => {
                      if (el && el.complete && el.naturalWidth > 0) {
                        markLoaded(imgKey);
                      }
                    }}
                    onLoad={() => markLoaded(imgKey)}
                    src={`/img/webui/${imgKey}-1000.webp`}
                    srcSet={shotSrcSet(shot.key, theme)}
                    sizes={SHOT_SIZES}
                    alt={shot.alt}
                    className={clsx(
                      styles.shot,
                      theme === "dark" ? styles.shotDark : styles.shotLight,
                      shot.key !== active.key && styles.shotInactive,
                      !loaded.has(imgKey) && styles.shotPending
                    )}
                    loading="lazy"
                    width="2000"
                    height={shot.height || 1125}
                  />
                );
              })
            )}
          </div>
          <p className={styles.shotCaption}>{active.caption}</p>
        </div>
      </div>
    </section>
  );
}

const STACK = [
  {
    label: "Download clients",
    items: [
      "qBittorrent",
      "Deluge",
      "Transmission",
      "rTorrent",
      "ruTorrent",
      "Porla",
      "SABnzbd",
    ],
  },
  {
    label: "The *arr suite",
    items: ["Sonarr", "Radarr", "Lidarr", "Readarr", "Whisparr"],
  },
  {
    label: "Feeds",
    items: ["IRC announces", "RSS", "Torznab", "Newznab"],
  },
  {
    label: "Notifications",
    items: ["Discord", "Notifiarr", "Telegram", "Pushover", "Gotify", "ntfy"],
  },
];

function Stack() {
  return (
    <section className={styles.section}>
      <div className="container">
        <p className={styles.sectionEyebrow}>Integrations</p>
        <h2 className={styles.sectionTitle}>Works with what you run</h2>
        <p className={styles.sectionLead}>
          autobrr supports all the major download clients and the *arr
          suite. Point it at the client you already run, on the same box
          or across the network.
        </p>
        <div className={styles.stackGroups}>
          {STACK.map((group) => (
            <div key={group.label}>
              <p className={styles.stackLabel}>{group.label}</p>
              <div className={styles.chips}>
                {group.items.map((item) => (
                  <span className={styles.chip} key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Install() {
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <div className={styles.installGrid}>
          <div>
            <p className={styles.sectionEyebrow}>Install</p>
            <h2 className={styles.sectionTitle}>Running in minutes</h2>
            <p className={styles.sectionLead}>
              Pull the Docker image or drop a single binary on Linux,
              macOS, Windows or FreeBSD. On most seedbox providers it&apos;s
              a one-click install.
            </p>
            <div className={styles.heroActions}>
              <Link className={styles.btnPrimary} to="/installation/docker">
                Docker guide
              </Link>
              <Link className={styles.btnGhost} to="/installation/linux">
                All platforms
              </Link>
            </div>
          </div>
          <div className={styles.installTerm}>
            <div className={styles.installTermHead}>sh</div>
            <pre className={styles.installTermBody}>
              <span className={styles.installComment}>
                # grab the image
              </span>
              {"\n"}
              <span className={styles.installPrompt}>$ </span>
              docker pull ghcr.io/autobrr/autobrr:latest{"\n"}
              <span className={styles.installComment}>
                # or grab the latest linux binary
              </span>
              {"\n"}
              <span className={styles.installPrompt}>$ </span>
              wget $(curl -s https://api.github.com/repos/autobrr/autobrr/releases/latest \{"\n"}
              {"    "}| grep download | grep linux_x86_64 | cut -d\" -f4)
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

const FOOTER_COLUMNS = [
  {
    heading: "Docs",
    links: [
      { label: "Introduction", to: "/introduction" },
      { label: "Quick start", to: "/quick-start" },
      { label: "Installation", to: "/installation/intro" },
      { label: "Filters", to: "/filters" },
      { label: "FAQ", to: "/faqs" },
    ],
  },
  {
    heading: "Project",
    links: [
      { label: "GitHub", href: "https://github.com/autobrr/autobrr" },
      { label: "Release notes", to: "/release-notes" },
      { label: "API", to: "/api" },
      { label: "Contributing", to: "/contributing" },
    ],
  },
  {
    heading: "Community",
    links: [
      { label: "Discord & IRC", to: "/community" },
      {
        label: "Report a bug",
        href: "https://github.com/autobrr/autobrr/issues",
      },
      {
        label: "Edit these docs",
        href: "https://github.com/autobrr/autobrr.com",
      },
      { label: "Support the project", to: "/support" },
    ],
  },
];

function FooterLink({ link }) {
  if (link.to) {
    return (
      <Link className={styles.footerLink} to={link.to}>
        {link.label}
      </Link>
    );
  }
  return (
    <a
      className={styles.footerLink}
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {link.label}
    </a>
  );
}

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <p className={styles.footerBrandName}>autobrr</p>
            <p className={styles.footerBlurb}>
              Open source, self-hosted release automation: from the
              announce channel to your download client.
            </p>
          </div>
          {FOOTER_COLUMNS.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <p className={styles.footerHeading}>{column.heading}</p>
              <ul className={styles.footerList}>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink link={link} />
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className={styles.footerBottom}>
          <p className={styles.footerMeta}>
            © {new Date().getFullYear()} autobrr contributors
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="autobrr is the modern autodl-irssi replacement: it monitors IRC announce channels and feeds, filters releases and pushes them to your download client in seconds."
    >
      <Hero />
      <main>
        <HowItWorks />
        <Features />
        <Screenshot />
        <Stack />
        <Install />
      </main>
      <Footer />
    </Layout>
  );
}
