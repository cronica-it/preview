/*
 * This file is part of the Cronica-IT project (https://github.com/cronica-it).
 * Copyright (c) 2023 Liviu Ionescu. All rights reserved.
 *
 * Permission to use, copy, modify, and/or distribute this software
 * for any purpose is hereby granted, under the terms of the MIT license.
 *
 * If a copy of the license was not distributed with this file, it can
 * be obtained from https://opensource.org/license/mit/.
 */

/*
 * This is the site home page, mapped as '/'.
 */

import clsx from 'clsx';
// import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
// import Link from '@docusaurus/Link';
import logger from '@docusaurus/logger'

import { ChronologyTable, ChronologyEvent } from '@site/src/components/ChronologyTable';
import { eventDateComparator } from '@site/src/utils/eventDateComparator'

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div> */}
      </div>
    </header>
  );
}

// https://webpack.js.org/guides/dependency-management/#requirecontext
// require.context() returns a map of modules keyed by file paths.

const prepareChronologyRows = ((ctx) => {
  const keys: string[] = ctx.keys();

  // Array of modules extracted from context.
  const chronologyModules = [];

  // Keep only posts with eventDate.
  keys.forEach((key) => {
    const module = ctx(key);
    if (module.metadata === undefined || module.metadata.frontMatter === undefined) {
      logger.info(`${key} has no frontMatter, ignored`);
    } else {
      const { frontMatter } = module.metadata;
      // logger.info(frontMatter.eventDate);
      if (frontMatter.eventDate === undefined) {
        logger.error(`Missing eventDate: for event ${key}`)
      }
      // if (frontMatter.eventSummary === undefined) {
      //   logger.error(`Missing eventSummary: for event ${key}`)
      // }
      chronologyModules.push(module);
    }
  })

  chronologyModules.sort(eventDateComparator)

  return chronologyModules.map((module) => {
    // permalink includes the baseUrl, can be used directly.
    const { permalink, frontMatter } = module.metadata;
    // logger.info(module.metadata)
    let interval = frontMatter.eventIntervalFormatted;
    // logger.info(frontMatter.tags)
    if (frontMatter.tags?.includes('international')) {
      interval += ' (intl)'
    }
    const row: ChronologyEvent = {
      interval: frontMatter.eventIntervalFormatted,
      description: (<a href={permalink}>{frontMatter.title}</a>)
    }
    // logger.info(row)
    return row;
  })

  // @ts-ignore
});


export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  const chronologyRows = prepareChronologyRows(require.context('../../evenimente', true, /.*.md/))
  // logger.info(chronologyRows.length);
  // chronologyRows.forEach((x) => { logger.info(x) })

  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.tagline}`}>
      <HomepageHeader />
      <main>
        <ChronologyTable items={chronologyRows} />
      </main>
    </Layout>
  );
}
