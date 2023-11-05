import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { ChronologyTable, ChronologyEvent } from '@site/src/components/ChronologyTable';
import Heading from '@theme/Heading';
import logger from '@docusaurus/logger'

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

// If month/day are not present, extend with defaults.
// It does not accept negative values.
const makeDateMillis = ((eventDate: string) => {
  let newDate
  if (eventDate.match(/[0-9][0-9]*-[0-9][0-9]*-[0-9][0-9]*/))
    newDate = new Date(eventDate);
  else if (eventDate.match(/[0-9][0-9]*-[0-9][0-9]*/))
    newDate = new Date(eventDate + '-15'); // mid month
  else if (eventDate.match(/[0-9][0-9]*/))
    newDate = new Date(eventDate + '-07-01'); // mid year
  else {
    // Last resort, parse as valid.
    newDate = new Date(eventDate);
  }

  // For weird reasons, 2 digit years are considered relative to epoch.
  // To allow dates in the antiquity, set explicitly.
  const year = eventDate.replace(/-.*/, '')
  newDate.setFullYear(year)

  return newDate
})

// Reverse order.
const compareDates = ((aEventDate, bEventDate) => {
  const aEventDateMillis = makeDateMillis(aEventDate)
  const bEventDateMillis = makeDateMillis(bEventDate)

  return bEventDateMillis - aEventDateMillis;
})

const monthNames = [
  '',
  'Ianuarie',
  'Februarie',
  'Martie',
  'Aprilie',
  'Mai',
  'Iunie',
  'Iulie',
  'August',
  'Septembrie',
  'Octombrie',
  'Noiembrie',
  'Decembrie'
]

const formatDate = ((eventDate) => {
  const eventDateArray = eventDate.split('-').map((str) => parseInt(str))

  if (eventDateArray.length === 3) {
    return `${eventDateArray[2]} ${monthNames[eventDateArray[1]]} ${eventDateArray[0]}`;
  } else if (eventDateArray.length === 2) {
    return `${monthNames[eventDateArray[1]]} ${eventDateArray[0]}`;
  } else if (eventDateArray.length === 1) {
    return `${eventDateArray[0]}`;
  } else {
    return eventDate;
  }
})

const formatInterval = ((eventDate, eventEndDate) => {
  const eventDateArray = eventDate.split('-').map((str) => parseInt(str))
  if (eventEndDate === undefined) {
    return formatDate(eventDate);
  } else {
    const eventEndDateArray = eventEndDate.split('-').map((str) => parseInt(str))

    if (eventDateArray[0] === eventEndDateArray[0]) {
      // Same year.
      let interval = ''
      if (eventDateArray.length === 3 && eventEndDateArray.length === 3 && eventDateArray[1] === eventEndDateArray[1]) {
        // Same month, format as '1 - 4 Noiembrie 1993'.
        interval = `${eventDateArray[2]} - ${eventEndDateArray[2]} ${monthNames[eventDateArray[1]]}`;
      } else if (eventDateArray.length >= 2 && eventEndDateArray.length >= 2) {
        // Different months, format as 'Octombrie - Noiembrie 1993'.
        if (eventDateArray.length === 3) {
          interval += ` ${eventDateArray[2]}`
        }
        interval += ` ${monthNames[eventDateArray[1]]}`
        interval += ` -`
        if (eventEndDateArray.length === 3) {
          interval += ` ${eventEndDateArray[2]}`
        }
        interval += ` ${monthNames[eventEndDateArray[1]]}`
      } else {
        // One has no month.
        return `${formatDate(eventDate)} - ${formatDate(eventEndDate)}`;
      }
      return `${interval} ${eventDateArray[0]}`
    } else {
      // Different years.
      return `${formatDate(eventDate)} - ${formatDate(eventEndDate)}`;
    }
  }

})

// https://webpack.js.org/guides/dependency-management/#requirecontext
// require.context() returns a map of modules keyed by file paths.

const chronologyRows = ((ctx) => {
  const keys: string[] = ctx.keys();

  // Array of modules extracted from context.
  const chronologyModules = [];

  // Keep only posts with eventDate.
  keys.forEach((key) => {
    const module = ctx(key);
    const { frontMatter } = module.metadata;
    // logger.info(frontMatter.eventDate);
    if (frontMatter.eventDate === undefined) {
      logger.error(`Missing eventDate: for event ${key}`)
    }
    chronologyModules.push(module);
  })

  chronologyModules.sort((a, b) => {
    const aEventDate: string = a.metadata.frontMatter.eventDate;
    const bEventDate: string = b.metadata.frontMatter.eventDate;
    // logger.info(aEventDate);
    // logger.info(bEventDate);

    const value: number = compareDates(aEventDate, bEventDate);
    if (value !== 0)
      return value

    const aEventEndDate: string = a.metadata.frontMatter.eventEndDate || aEventDate;
    const bEventEndDate: string = b.metadata.frontMatter.eventEndDate || bEventDate;

    return compareDates(aEventEndDate, bEventEndDate)
  })

  return chronologyModules.map((module) => {
    const { permalink, frontMatter } = module.metadata;
    // logger.info(module.metadata)
    const row: ChronologyEvent = {
      interval: formatInterval(frontMatter.eventDate, frontMatter.eventEndDate),
      description: (<a href={permalink}>{frontMatter.eventSummary}</a>)
    }
    // logger.info(row)
    return row;
  })

  // @ts-ignore
})(require.context('../../events', true, /.*.md/));

// logger.info(chronologyRows.length);
// chronologyRows.forEach((x) => { logger.info(x) })

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
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
