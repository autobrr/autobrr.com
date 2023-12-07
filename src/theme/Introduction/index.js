import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { FaBookReader } from "react-icons/fa";
import Headline from "@theme/Headline";
import styles from "./styles.module.scss";
import mainstyles from "../../pages/index.module.css";
import { GiDeadWood } from "react-icons/gi";

function Introduction() {
  return (
    <>
      <section
        id="introduction"
        className={clsx(styles.features, mainstyles.pattern)}
      >
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
            title="reap the benefits"
            icon={GiDeadWood}
            offset={0}
          />
          <div className={styles.description}>
            <p>
              Autobrr redefines the landscape of download automation for
              torrents and Usenet, merging the best features of trackarr,
              autodl-irssi, and flexget into a singular, versatile tool. This
              significantly benefits you if you're on private trackers. With
              support for over 75 trackers with IRC announces, autobrr is
              efficient in maintaining a user's ratio by ensuring early
              participation in torrent swarms. Moreover, autobrr's compatibility
              with Sonarr and Radarr streamlines media management, ensuring
              timely and efficient downloads.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Introduction;
