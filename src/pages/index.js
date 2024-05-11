import React, { useEffect, useState } from "react";
import clsx from "clsx";
import {
  AiOutlineDownload,
  AiOutlineFilter,
  AiOutlineMobile,
} from "react-icons/ai";
import { BiNews, BiRss } from "react-icons/bi";
import { CgPlug } from "react-icons/cg";
import { FiFeather } from "react-icons/fi";
import { IoMagnetSharp } from "react-icons/io5";
import { MdDynamicFeed, MdOutlineNotificationsActive } from "react-icons/md";

import Link from "@docusaurus/Link";
import { useColorMode } from "@docusaurus/theme-common";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import About from "@theme/About";
import Applications from "@theme/Applications";
import Introduction from "@theme/Introduction";
import Layout from "@theme/Layout";
import Resources from "@theme/Resources";

import FrontPicDark from "../../static/img/front-dark2.png";
import FrontPicLight from "../../static/img/front-light2.png";
import logo from "../../static/img/logo.png";
import styles from "./index.module.scss";
import stylepattern from "./pattern.module.css";

const Center = ({ icon, text }) => (
  <div className="hero-icon-container">
    {icon}
    <h4>{text}</h4>
  </div>
);

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const { colorMode } = useColorMode();
  const [headerImage, setHeaderImage] = useState(null);

  useEffect(() => {
    const imageToLoad = colorMode === "dark" ? FrontPicDark : FrontPicLight;
    const img = new Image();
    img.onload = () => setHeaderImage(imageToLoad);
    img.src = imageToLoad;
  }, [colorMode]);

  const [scroll, setScroll] = useState(null);

  useEffect(() => {
    import("smooth-scroll").then((SmoothScroll) => {
      setScroll(new SmoothScroll.default('a[href*="#"]'));
    });
  }, []);

  const smoothScrollTo = (sectionId, offset = 0) => {
    const target = document.getElementById(sectionId);
    if (target && scroll) {
      const targetOffsetTop = target.offsetTop + offset;
      scroll.animateScroll(targetOffsetTop);
    }
  };

  if (!headerImage) {
    return null;
  }

  return (
    <header className={clsx("hero hero--secondary", styles.heroBanner)}>
      <div>
        <img
          src={logo}
          alt="Logo"
          style={{ width: "auto", maxHeight: "64px" }}
        />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className="hero-grid-container">
          <div className="hero-grid" style={{ maxWidth: "900px" }}>
            <Center icon={<FiFeather size="24" />} text="Single-binary" />
            <Center icon={<MdDynamicFeed size="24" />} text="Client-agnostic" />
            <Center
              icon={<AiOutlineMobile size="24" />}
              text="Mobile-friendly"
            />
            <Center
              icon={<AiOutlineDownload size="24" />}
              text="85+ Indexers"
            />
            <Center icon={<AiOutlineFilter size="24" />} text="Filters" />
            <Center icon={<CgPlug size="24" />} text="*arr Integration" />
            <Center
              icon={<MdOutlineNotificationsActive size="24" />}
              text="Notifications"
            />
            <Center icon={<BiRss size="24" />} text="RSS and *znab" />
            <Center icon={<BiNews size="24" />} text="Usenet" />
            <Center icon={<IoMagnetSharp size="24" />} text="Magnet links" />
          </div>
        </div>
        <div className={styles.buttons}>
          <Link
            className={clsx(
              "button button--secondary button--lg",
              styles.button
            )}
            onClick={() => smoothScrollTo("introduction", -70)}
          >
            Tell me more
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
        src={headerImage}
        alt="autobrr"
        className={clsx(styles.image, "front-page-pic")}
      />
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    const preloadImage = (src) => {
      const img = new Image();
      img.src = src;
    };

    preloadImage(FrontPicDark);
    preloadImage(FrontPicLight);
  }, []);

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="the modern autodl-irssi replacement"
    >
      <main
        className={clsx(styles.container, styles.main, stylepattern.pattern)}
      >
        <HomepageHeader />
        <Introduction id="introduction" />
        <Applications />
        <About />
        <Resources />
      </main>
    </Layout>
  );
}
