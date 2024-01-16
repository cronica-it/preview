/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// declare module '@theme/Tag' {

import type {AuthorsListItem} from '@site/src/code/docusaurus-utils/authors' // '@docusaurus/utils';

import type {Optional} from 'utility-types';

export interface Props extends Optional<AuthorsListItem, 'count'> {}
