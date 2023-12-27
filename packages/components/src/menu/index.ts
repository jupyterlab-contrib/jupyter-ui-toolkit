// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {
  Menu as FoundationMenu,
  menuTemplate as template
} from '@microsoft/fast-foundation';
import { fillColor, neutralLayerFloating } from '../design-tokens.js';
import { menuStyles as styles } from './menu.styles.js';

/**
 * @public
 */
export class Menu extends FoundationMenu {
  /**
   * @internal
   */
  public connectedCallback(): void {
    super.connectedCallback();

    fillColor.setValueFor(this, neutralLayerFloating);
  }
}

/**
 * A function that returns a {@link @microsoft/fast-foundation#Menu} registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#menuTemplate}
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-menu>`
 */
export const jpMenu = Menu.compose({
  baseName: 'menu',
  template,
  styles
});

export { styles as menuStyles };
