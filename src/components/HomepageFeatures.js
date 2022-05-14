import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Modern interface',
    Svg: require('../../static/img/webui.svg').default,
    description: (
      <>
      autobrr was built with ease of use in mind.
      Everything is managed via a modern, sleek user interface.
      </>
    ),
  },
  {
    title: 'IRC and RSS monitoring',
    Svg: require('../../static/img/feed.svg').default,
    description: (
      <>
        autobrr monitors IRC announce channels to get releases as soon as they are available with good filtering.
        You can also monitor RSS feeds for indexers not having an annouce channel.
      </>
    ),
  },
  {
    title: 'Lightweight',
    Svg: require('../../static/img/feather.svg').default,
    description: (
      <>
        Built on Go/React to be resource friendly. A modern single binary replacement for autodl-irssi+rutorrent plugin.
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
