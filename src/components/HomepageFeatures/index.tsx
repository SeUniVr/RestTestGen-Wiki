import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  //Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  image: string,
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Reliability and Robustness',
    image: require('@site/static/img/strong.png').default,
    description: (
      <>
        Our components are designed to be <b>reliable</b>, preventing crashes even when encountering 
        malformed input in specifications or HTTP interactions.
      </>
    ),
  },
  {
    title: 'Quick Development',
    image: require('@site/static/img/rocket2.png').default,
    description: (
      <>
        <b>Speed up</b> the development of your automated testing strategy 
        with RTG's modular components.
      </>
    ),
  },
  {
    title: 'Smart Testing',
    image: require('@site/static/img/brain.png').default,
    description: (
      <>
        Test <b>automatically</b> your REST APIs using our built-in strategies. 
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} className={styles.featureImage} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
