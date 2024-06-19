import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import { Typography } from '@teradata-web/react-components';

const FeatureTitle = 'Categories';
const Guides = [
  {
    title: `Getting started with Teradata AI Unlimited`,
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    href: '/quickstarts/introduction/teradata-vantage-engine-architecture-and-concepts/',
  },
  {
    title: 'Deploy Teradata AI Unlimited locally using Docker',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    href: '/quickstarts/get-access-to-vantage/on-your-local/getting-started-vmware/',
  },
  {
    title: 'Deploy Teradata AI Unlimited on AWS',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    href: '/quickstarts/connect-to-vantage/install-teradata-studio-on-mac-m1-m2/',
  }
];
const FeatureList = [
  {
    title: `Introduction`,
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    href: '/quickstarts/introduction/teradata-vantage-engine-architecture-and-concepts/',
  },
  {
    title: 'Get access to Vantage',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    href: '/quickstarts/get-access-to-vantage/on-your-local/getting-started-vmware/',
  },
  {
    title: 'Connect to Vantage',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    href: '/quickstarts/connect-to-vantage/install-teradata-studio-on-mac-m1-m2/',
  },
  {
    title: 'Manage data',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    href: '/quickstarts/manage-data/nos/',
  },
  {
    title: 'Connect applications',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    href: '/quickstarts/create-applications/jdbc/',
  },
  {
    title: 'Analyze data',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    href: '/quickstarts/analyze-data/jupyter/',
  },
  {
    title: 'Teradata AI Unlimited',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    href: '/ai-unlimited-docs/',
  },
  {
    title: 'VantageCloud Lake',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    href: '/quickstarts/vantagecloud-lake/getting-started-with-vantagecloud-lake/',
  },
];


function Feature({ title, description, href }) {
  return (
    <Link to={href} className={clsx('col col--4', styles.col)}>
      <div className={clsx('doc-card', styles.card)}>
        <Heading as="h3">{title}</Heading>
        {<p className={clsx(styles.description)}>{description}</p>}
      </div>
    </Link>
  );
}

export default function Categories() {
  return (
    <>
      <section className={clsx(styles.features, styles.fGuides)}>
        <div className={clsx('container', styles.container)}>
            <Typography scale="headline2">Featured guides</Typography>
            <br/>
            <div className={clsx('row', styles.row)}>
            {Guides.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      <section className={styles.features}>
        <div className={clsx('container', styles.container)}>
          <Typography scale="headline2">{FeatureTitle}</Typography>
          <br/>
          
          <div className={clsx('row', styles.row)}>
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
