// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { Tab, tabTemplate as template } from '@microsoft/fast-foundation';
import { tabStyles as styles } from './tab.styles.js';

/**
 * Tab class
 *
 * @public
 * @tagname jp-tab
 */
class JupyterTab extends Tab {}

/**
 * A function that returns a {@link @microsoft/fast-foundation#Tab} registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#tabTemplate}
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-tab>`
 */
export const jpTab = JupyterTab.compose({
  baseName: 'tab',
  baseClass: Tab,
  template,
  styles
});

export { JupyterTab as Tab, styles as tabStyles };
