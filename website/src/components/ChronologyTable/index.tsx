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

// import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import { ChronologyRecord } from '@xpack/docusaurus-plugin-content-blog'

function ChronologyRow({interval, title, permalink, isInternational}: ChronologyRecord) {
  const intlInterval = interval+(isInternational ? ' (intl)' : '');

  return (
    <tr class="chronology">
      <td class="chronology">{intlInterval}</td>
      <td class="chronology">
        <a href={permalink}>{title}</a>
      </td>
    </tr>
  )
}

export function ChronologyTable({ items }): JSX.Element {
  return (
    <section className={styles.chronology}>
      <div className="container">
        <Heading as="h3">Evenimente, în ordine invers cronologică</Heading>
        <table class="chronology">
          <thead>
            <tr>
              <td class="chronology">Date</td>
              <td class="chronology">Evenimente</td>
            </tr>
          </thead>
          <tbody>
            {
              items.map((props: ChronologyRecord, idx) => (
                <ChronologyRow key={idx} {...props} />
              ))
            }
          </tbody>
        </table>
        <p class="chronology_length">({items.length} evenimente)</p>
      </div>
    </section>
  );
}
