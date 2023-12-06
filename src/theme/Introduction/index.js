import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { FaBookReader } from "react-icons/fa";
import Headline from "@theme/Headline";
import styles from "./styles.module.css";

function Introduction() {
  return (
    <>
      <section id="introduction" className={styles.features}>
        <div className="container">
          <Headline
            category={
              <>
                <FaBookReader
                  style={{ fontSize: "24px", paddingRight: "10px" }}
                />
                Introduction
              </>
            }
            title="What is autobrr and how does it fit into the ecosystem?"
            offset={0}
          />

          <div className={styles.description}>
            <p>
              We can start by talking about torrent trackers (hereby referred to
              as indexers) and maintaining ratio. You are required to maintain a
              ratio with most indexers. Ratio is built by seeding your torrents.
              The earlier you're seeding a torrent, the more peers you make
              yourself available to on that torrent.
            </p>
            <p>
              Software like Radarr and Sonarr utilizes RSS to look for new
              torrents. RSS feeds are updated regularly, but too slow to let you
              be a part of what we call the initial swarm of a torrent. This is
              where autobrr comes into play.
            </p>
            <p>
              Many indexers announce new torrents on their
              [IRC](./configuration/irc.md) channels the second it is uploaded
              to the site. autobrr monitors such channels in real time and grabs
              the torrent file as soon as it's uploaded based on certain
              conditions (hereby referred to as [filters](./filters/basics.md))
              that you set up within autobrr. It then sends that torrent file to
              a download client of your choice via an
              [action](./filters/actions.md) set within the filter.
            </p>
            <p>
              A download client can be anything from qBittorrent and Deluge, to
              Radarr and Sonarr, or a watch folder. When your autobrr filter is
              set to send the torrent files to Radarr and Sonarr, they will
              decide if it's something they want, and then forward it to the
              torrent client they are set up with.
            </p>
            <p>
              autobrr can also send matches (torrent files that meets your
              filter's criteria) directly to torrent clients like qBittorrent,
              Deluge, r(u)Torrent and Transmission. You don't need to use the
              \*arr suite to make use of autobrr.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Introduction;
