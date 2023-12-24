// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { Tabs, tabsTemplate as template } from '@microsoft/fast-foundation';
import { tabsStyles as styles } from './tabs.styles';

/**
 * A function that returns a {@link @microsoft/fast-foundation#Tabs} registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#tabsTemplate}
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-tabs>`
 */
export const jpTabs = Tabs.compose({
    baseName: 'tabs',
    template,
    styles,
});

export * from "../tab/index.js";
export * from "../tab-panel/index.js";

/**
 * Base class for Tabs
 * @public
 */
export { Tabs };

export { styles as tabsStyles };
