// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {
  Badge as FoundationBadge,
  badgeTemplate as template
} from '@microsoft/fast-foundation';
import { badgeStyles as styles } from './badge.styles';

/**
 * The  badge class.
 *
 * @public
 */
export class Badge extends FoundationBadge {
  /**
   * Component lifecycle method that runs when the component is inserted
   * into the DOM.
   *
   * @internal
   */
  public connectedCallback(): void {
    super.connectedCallback();

    // This will override any usage of the circular attribute
    // inherited by the FAST Foundation Badge component so
    // that Jupyter Badges are always circular
    if (!this.circular) {
      this.circular = true;
    }
  }
}

/**
 * The  badge component registration.
 *
 * @remarks
 * HTML Element: `<jp-badge>`
 *
 * @public
 */
export const jpBadge = Badge.compose({
  baseName: 'badge',
  template,
  styles
});
