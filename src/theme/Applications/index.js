import React from "react";

import clsx from "clsx";
import { AiOutlineNotification } from "react-icons/ai";
import { FaDownload } from "react-icons/fa6";
import { GrIntegration } from "react-icons/gr";
import { MdOutlineInstallDesktop } from "react-icons/md";

import Link from "@docusaurus/Link";
import Headline from "@theme/Headline";

import { clients, notificationAgents, platforms } from "./consts";
import styles from "./styles.module.scss";

function Application({ title, url, icon: Icon }) {
  return (
    <div className={clsx("col col--2", styles.feature, styles.applications)}>
      <Link className={styles.applicationLink} href={url}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {Icon && <Icon />}
          <span>{title}</span>
        </div>
      </Link>
    </div>
  );
}

function Applications() {
  return (
    <>
      {platforms && platforms.length > 0 && (
        <section id="platforms">
          <div className="container">
            <Headline
              category={
                <>
                  <GrIntegration
                    style={{ fontSize: "24px", paddingRight: "10px" }}
                  />
                  Extensive Integration
                </>
              }
              title="autobrr supports a wide range of platforms"
              icon={MdOutlineInstallDesktop}
              offset={0}
            />
            <div className={styles.description}>
              <p>
                Whether you're a Docker enthusiast, a Linux pro, a Windows user,
                a MacOS aficionado, or a Swizzin fan, our platform ensures a
                smooth and intuitive experience.
              </p>
              <p>
                Experience hassle-free setup and operation on your platform of
                choice:
              </p>
            </div>
            <div className="row">
              {platforms.map((props) => (
                <Application key={props.id} {...props} />
              ))}
            </div>
          </div>
        </section>
      )}

      {clients && clients.length > 0 && (
        <section id="clients" className={clsx(styles.features)}>
          <div className="container">
            <Headline title="Clients" icon={FaDownload} offset={0} />
            <div className={styles.description}>
              <p>
                autobrr supports a diverse array of torrent clients, including
                qBittorrent, Porla, Deluge, Transmission, and ruTorrent.
              </p>
              <p>
                autobrr is also compatible with the arr stack, including Radarr,
                Sonarr, Prowlarr, Lidarr, Readarr, and Whisparr. This
                integration offers a more comprehensive and efficient way to
                manage your media.
              </p>
            </div>
            <div className="row">
              {clients.map((props, idx) => (
                <Application key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      )}

      {notificationAgents && notificationAgents.length > 0 && (
        <section id="notification-agents" className={clsx(styles.features)}>
          <div className="container">
            <Headline
              category=""
              title="Notification agents"
              icon={AiOutlineNotification}
              offset={0}
            />
            <div className={styles.description}>
              <p>
                With autobrr, you're never out of the loop. We offer robust
                support for a range of notification agents including LunaSea,
                Notifiarr, Discord, Gotify, Pushover, and Telegram.
              </p>
              <p>
                Whether it's about a push being approved, rejected, or
                encountering an error, or updates related to IRC connectivity
                and new autobrr updates, our notification system ensures you're
                always updated in real-time.
              </p>
              <p>
                Tailor your notifications to suit your preferences and stay on
                top of your download management with ease and efficiency.
              </p>
            </div>
            <div className="row">
              {notificationAgents.map((props, idx) => (
                <Application key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Applications;
