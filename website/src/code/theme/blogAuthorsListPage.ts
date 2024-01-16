/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// declare module '@theme/BlogTagsListPage'

import type {BlogSidebar} from '@docusaurus/plugin-content-blog';
import type { AuthorsListItem } from '@site/src/code/docusaurus-utils/authors' // '@docusaurus/utils';

export interface Props {
  /** Blog sidebar. */
  readonly sidebar: BlogSidebar;
  /** All tags declared in this blog. */
  readonly authors: AuthorsListItem[];
}
