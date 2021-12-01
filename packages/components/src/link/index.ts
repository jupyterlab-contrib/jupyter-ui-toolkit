// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {
  AnchorOptions,
  Anchor as FoundationAnchor,
  anchorTemplate as template
} from '@microsoft/fast-foundation';
import { linkStyles as styles } from './link.styles';

/**
 * Link configuration options
 * @public
 */
export type LinkOptions = AnchorOptions;

/**
 * The  link class.
 *
 * @public
 */
export class Link extends FoundationAnchor {}

/**
 * The  link component registration.
 *
 * @remarks
 * HTML Element: `<jp-link>`
 *
 * @public
 */
export const jpLink = Link.compose<LinkOptions>({
  baseName: 'link',
  template,
  styles,
  shadowOptions: {
    delegatesFocus: true
  }
});
