import React, { type ReactElement } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '../components/HomepageFeatures';
import { ThemedImg } from '../components/ThemedImg';

import styles from './index.module.css';

function HomepageHeader(): ReactElement {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--4 padding-vert--md', styles.bannerText)}>
            <h1 className="hero__title" style={{ color: 'white' }}>
              {siteConfig.title}
            </h1>
            <p className="hero__subtitle" style={{ color: 'white' }}>
              {siteConfig.tagline}
            </p>
            <Link
              className="button button--secondary button--lg"
              to="/documentation/Intro"
            >
              Get Started
            </Link>
          </div>
          <div className="col col--8 padding-vert--md">
            <ThemedImg name="Demo" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactElement {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} Documentation`}
      description="Visualize and Analyze JSON"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
