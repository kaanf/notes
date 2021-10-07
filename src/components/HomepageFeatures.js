import React from 'react';
import clsx from 'clsx';

import Link from '@docusaurus/Link';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Digital Garden of Kaan Fırat',
    Svg: require('../../static/img/memoji_cross_pp.svg').default,
    description: (
      <>
        An open collection of notes, resources, sketches, and explorations I'm currently cultivating. <br/>Some notes are seedlings, some are budding, and some are fully grown evergreen. <br/>
        <i>Have something to say? </i>I check email and twitter occasionally.
        <p className={styles.textStyle}><code>metal music</code> <code>project management</code> <code>ui design</code> <code>android development</code> </p>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--12')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className={styles.buttons}>
          <Link className="button button--secondary button--md" to="/README">
            Start Read
          </Link>
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
