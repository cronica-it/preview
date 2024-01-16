/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// declare module '@theme/BlogTagsPostsPage'

import type { Content } from '@theme/BlogPostPage';
import type {
    BlogSidebar,
    BlogPaginatedMetadata,
} from '@docusaurus/plugin-content-blog';
import { AuthorModule } from '@site/src/code/docusaurus-utils/authors'; // '@docusaurus/utils';

export interface Props {
    /** Blog sidebar. */
    readonly sidebar: BlogSidebar;
    /** Metadata of this tag. */
    readonly author: AuthorModule;
    /** Looks exactly the same as the posts list page */
    readonly listMetadata: BlogPaginatedMetadata;
    /**
     * Array of blog posts included on this page. Every post's metadata is also
     * available.
     */
    readonly items: readonly { readonly content: Content }[];
}

