import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Modern UI',
    Svg: require('../../static/img/webui.svg').default,
    description: (
      <>
      autobrr was built with ease of use in mind.
      Everything is managed via a modern, sleek user interface.
      </>
    ),
  },
  {
    title: (
      <>
        <span style={{ textDecoration: "line-through" }}>Blazing fast</span>
        <br />
        <span>go brr</span>
      </>
    ),
    Svg: require('../../static/img/feed.svg').default,
    description: (
      <>
        autobrr monitors IRC announce channels to filter releases as soon as they are available and executes a user-defined action upon match.
      </>
    ),
  },
  {
    title: 'Lightweight and safe',
    Svg: require('../../static/img/feather.svg').default,
    description: (
      <>
        Built on Go/React to be resource friendly. A modern, single binary replacement for autodl-irssi+rutorrent plugin.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
