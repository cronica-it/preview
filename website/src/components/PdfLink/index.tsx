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

import useBaseUrl from '@docusaurus/useBaseUrl';

// Component to render a link that downloads a PDF file.
export function PdfLink({ href }): JSX.Element {
  const imgSrc = useBaseUrl('/img/pdf-24.png');

  return (
    <a href={href} target="_blank">
      <img class="link-icon" src={imgSrc} width="24" height="24" alt="PDF" />
    </a>
  );
}
