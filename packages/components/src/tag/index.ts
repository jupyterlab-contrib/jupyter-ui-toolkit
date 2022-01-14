// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {
  Badge as FoundationBadge,
  badgeTemplate as template
} from '@microsoft/fast-foundation';
import { tagStyles as styles } from './tag.styles';

/**
 * The  tag class.
 *
 * @public
 */
export class Tag extends FoundationBadge {
  /**
   * Component lifecycle method that runs when the component is inserted
   * into the DOM.
   *
   * @internal
   */
  public connectedCallback(): void {
    super.connectedCallback();

    // This will override any usage of the circular attribute
    // inherited by the FAST Foundation Badge component so that
    // VSCodeTags are never circular
    if (this.circular) {
      this.circular = false;
    }
  }
}

/**
 * The  tag component registration.
 *
 * @remarks
 * HTML Element: `<jp-tag>`
 *
 * @public
 */
export const jpTag = Tag.compose({
  baseName: 'tag',
  template,
  styles
});
