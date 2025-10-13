import React, { ReactElement } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactElement;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Visualize',
    description: (
      <>
        Alljson efficiently displays JSON documents in user-friendly formats,
        simplifying data visualization and interpretation.
      </>
    ),
  },
  {
    title: 'Analyze',
    description: (
      <>
        Alljson offers a built-in query system that allows you to thoroughly
        analyze JSON documents. This feature empowers users to extract insights
        and explore data effectively, enhancing the accuracy of data analysis.
      </>
    ),
  },
  {
    title: 'Transform',
    description: (
      <>
        Alljson offers a comprehensive solution by allowing users to both
        transform JSON documents using its built-in system and convert them into
        different formats, enhancing data adaptability.
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p style={{ textAlign: 'justify' }}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactElement {
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
