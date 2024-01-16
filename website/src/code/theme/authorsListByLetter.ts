/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// declare module '@theme/TagsListByLetter'

import type { AuthorsListItem } from '@site/src/code/docusaurus-utils/authors' // '@docusaurus/utils';

export interface Props {
    readonly authors: readonly AuthorsListItem[];
}
