import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import logo from '../../static/img/logo.png';
import autobrrfront from '../../static/img/autobrr-front.png';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--secondary pattern', styles.heroBanner)}>
      <div className="container">
      <img src={logo} alt="Logo" />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx("button button--secondary button--lg", styles.button)}
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
      <img src={autobrrfront} alt="autobrr" className={clsx("shadow-md", styles.image)}/>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="autobrr"
    >
      <HomepageHeader />
      <main
        style={{
          borderTop: "1px solid var(--colors-mauve5)",
          borderBottom: "1px solid var(--colors-mauve5)",
        }}
      >
        <HomepageFeatures />
      </main>
    </Layout>
  );
}