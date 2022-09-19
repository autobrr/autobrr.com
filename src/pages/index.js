import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import logo from "../../static/img/logo.png";
import autobrrfront from "../../static/img/autobrr-front.png";

import { FiFeather } from "react-icons/fi";
import {
  AiOutlineFilter,
  AiOutlineMobile,
  AiOutlineDownload,
} from "react-icons/ai";
import { MdDynamicFeed, MdOutlineNotificationsActive } from "react-icons/md";
import { CgPlug } from "react-icons/cg";
import { BiRss } from "react-icons/bi";

const Center = ({ icon, text }) => (
  <div className="hero-icon-container">
    {icon}
    <h4>{text}</h4>
  </div>
);

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx(
        "hero hero--secondary",
        styles.heroBanner,
        styles.pattern
      )}
    >
      <div className="container">
        <img
          src={logo}
          alt="Logo"
          style={{ width: "auto", maxHeight: "64px" }}
        />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className="hero-grid-container">
          <div className="hero-grid">
            <Center icon={<FiFeather size="24" />} text="Single-binary" />
            <Center icon={<MdDynamicFeed size="24" />} text="Client-agnostic" />
            <Center
              icon={<AiOutlineMobile size="24" />}
              text="Mobile-friendly"
            />
            <Center icon={<AiOutlineFilter size="24" />} text="Filters" />
            <Center icon={<BiRss size="24" />} text="RSS and Torznab" />
            <Center
              icon={<AiOutlineDownload size="24" />}
              text="50+ Indexers"
            />
            <Center icon={<CgPlug size="24" />} text="*arr Integration" />
            <Center
              icon={<MdOutlineNotificationsActive size="24" />}
              text="Notifications"
            />
          </div>
        </div>
        <div className={styles.buttons}>
          <Link
            className={clsx(
              "button button--secondary button--lg",
              styles.button
            )}
            to="/introduction"
          >
            Introduction
          </Link>
          <Link
            className={clsx("button button--primary button--lg", styles.button)}
            to="/installation/linux"
          >
            Get Started
          </Link>
        </div>
      </div>
      <img
        src={autobrrfront}
        alt="autobrr"
        className={clsx("shadow-md", styles.image)}
      />
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="the modern autodl-irssi replacement"
    >
      <HomepageHeader />
    </Layout>
  );
}
