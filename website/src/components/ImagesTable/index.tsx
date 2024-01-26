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

// import logger from '@docusaurus/logger'

const rowSize = 3

function splitRows(images) {
  const rows = []

  let row = []
  images.forEach((image, index) => {
    if (index % rowSize == 0) {
      row = []
      rows.push(row)
    }
    row.push(image)
  })

  return rows
}

export function ImagesTable({ images }): JSX.Element {
  const rows = splitRows(images)
  return (
    <table class="images">
      {
        rows.map(row =>
          <tr>
            {
              row.map(column =>
                <td>
                  <a href={column.src} target="_blank"><img src={column.src} alt={column.alt} /></a>
                </td>
              )
            }
          </tr>
        )
      }
    </table>
  );
}
