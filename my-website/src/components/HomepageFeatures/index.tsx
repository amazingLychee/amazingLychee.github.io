import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  // Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
    imgSrc?: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'What I learn',
      imgSrc: require('@site/static/img/Transhumans - Late for Class.png').default,
    description: (
      <strong>
          未来无法预测 过去不可改变 当下正好追梦
      </strong>
    ),
  },
  {
    title: 'About me',
    imgSrc: require('@site/static/img/transhumans_astro.png').default,
    description: (
      <>
          <strong>Dreamer. Coder. Storyteller.<br /></strong>  <code>findBeauty(technology, life)</code>
      </>
    ),
  },
  {
    title: 'What I cherish',
      imgSrc: require('@site/static/img/Transhumans - Puppy.png').default,
    description: (
      <strong>
        祝我自由且长青
      </strong>
    ),
  },
];

function Feature({title, description, imgSrc}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
          <img src={imgSrc} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
