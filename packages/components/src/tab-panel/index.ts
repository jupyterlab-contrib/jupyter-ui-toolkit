// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {
  TabPanel,
  tabPanelTemplate as template
} from '@microsoft/fast-foundation';
import { tabPanelStyles as styles } from './tab-panel.styles.js';

/**
 * Tab panel class
 *
 * @public
 * @tagname jp-tab-panel
 */
class JupyterTabPanel extends TabPanel {}

/**
 * A function that returns a {@link @microsoft/fast-foundation#TabPanel} registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#tabPanelTemplate}
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-tab-panel>`
 */
export const jpTabPanel = JupyterTabPanel.compose({
  baseName: 'tab-panel',
  baseClass: TabPanel,
  template,
  styles
});

export { JupyterTabPanel as TabPanel, styles as tabPanelStyles };
