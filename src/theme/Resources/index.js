import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { FaQuestion, FaDiscord } from "react-icons/fa";
import { FiBook, FiGithub } from "react-icons/fi";

import Headline from "@theme/Headline";
import styles from "./styles.module.css";
import mainstyles from "../../pages/index.module.css"

const size = 48;
const data = [
  {
    href: "/faqs",
    icon: <FaQuestion size={size} />,
    title: <>FAQs</>,
    description: (
      <>
        Dive into our FAQ section for quick, clear answers to your most common
        queries.
      </>
    ),
  },
  {
    href: "https://discord.gg/WehFCZxq5B",
    icon: <FaDiscord size={size} />,
    title: <>Community</>,
    description: (
      <>
        Connect, Collaborate, and Create: Join our vibrant Discord community to
        exchange ideas, get insights, and be part of our dynamic discussion!
      </>
    ),
  },
  {
    href: "/introduction",
    icon: <FiBook size={size} />,
    title: <>Documentation</>,
    description: (
      <>
        Access our user-friendly documentation for a smooth, step-by-step guide
        to get your autobrr instance up in no time.
      </>
    ),
  },
  {
    href: "https://github.com/autobrr/autobrr",
    icon: <FiGithub size={size} />,
    title: <>Contribute</>,
    description: (
      <>
        Contribute to our growth by reporting bugs and suggesting features on
        GitHub. Your insights makes autobrr better!
      </>
    ),
  },
];

export default Resources;

function Resource({ href, icon, title, description }) {
  return (
    <Link className={clsx("card", styles.card)} to={href}>
      <div className="card__header">
        {icon && <div className="card__icon">{icon}</div>}
        {title && <h3>{title}</h3>}
      </div>
      {description && (
        <div className="card__body">
          <p className={styles.descriptionText}>{description}</p>
        </div>
      )}
    </Link>
  );
}

function Resources() {
  return (
    <>
      {data && data.length > 0 && (
        <section id="resouces" className={clsx(styles.resources, mainstyles.pattern)}>
          <div className="container">
            <Headline
              category="Resources"
              title="Browse our resources"
              offset={0}
            />

            <div className="row">
              {data[0] && data[1] && (
                <div className={clsx("col", styles.resource)}>
                  <Resource {...data[1]} />
                </div>
              )}

              {data[2] && (
                <div className={clsx("col", styles.resource)}>
                  <Resource {...data[0]} />
                  <Resource {...data[2]} />
                </div>
              )}

              {data[3] && (
                <div className={clsx("col", styles.resource)}>
                  <Resource {...data[3]} />
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
