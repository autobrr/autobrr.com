import React from "react";

import clsx from "clsx";
import { FaBookReader } from "react-icons/fa";
import { GiDeadWood } from "react-icons/gi";

import Headline from "@theme/Headline";

import mainstyles from "../../pages/index.module.scss";
import stylepattern from "../../pages/pattern.module.css";
import styles from "./styles.module.scss";

function Introduction() {
  return (
    <>
      <section
        id="introduction"
        className={clsx(
          stylepattern.pattern,
          styles.features,
          mainstyles.pattern
        )}
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
              torrents and Usenet. By merging the best features of trackarr,
              autodl-irssi, and flexget, it creates a singular, versatile tool.
            </p>
            <p>
              This integration significantly benefits users on private trackers.
              With support for over 75 trackers with IRC announces, autobrr is
              efficient in maintaining a user's ratio by ensuring early
              participation in torrent swarms.
            </p>
            <p>
              Moreover, autobrr's compatibility with Sonarr and Radarr
              streamlines media management, ensuring timely and efficient
              downloads.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Introduction;
