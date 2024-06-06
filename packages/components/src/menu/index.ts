// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import { Menu, menuTemplate as template } from '@microsoft/fast-foundation';
import { fillColor, neutralLayerFloating } from '../design-tokens.js';
import { menuStyles as styles } from './menu.styles.js';

/**
 * Menu class
 *
 * @public
 * @tagname jp-menu
 */
class JupyterMenu extends Menu {
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
export const jpMenu = JupyterMenu.compose({
  baseName: 'menu',
  baseClass: Menu,
  template,
  styles
});

export { JupyterMenu as Menu, styles as menuStyles };
