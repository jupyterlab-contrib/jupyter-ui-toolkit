// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { Tabs, tabsTemplate as template } from '@microsoft/fast-foundation';
import { tabsStyles as styles } from './tabs.styles.js';

/**
 * Tabs class
 *
 * @public
 * @tagname jp-tabs
 */
class JupyterTabs extends Tabs {}

/**
 * A function that returns a {@link @microsoft/fast-foundation#Tabs} registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#tabsTemplate}
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-tabs>`
 */
export const jpTabs = JupyterTabs.compose({
  baseName: 'tabs',
  baseClass: Tabs,
  template,
  styles
});

export * from '../tab/index.js';
export * from '../tab-panel/index.js';

export { JupyterTabs as Tabs, styles as tabsStyles };
