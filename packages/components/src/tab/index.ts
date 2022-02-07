// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { Tab, tabTemplate as template } from '@microsoft/fast-foundation';
import { tabStyles as styles } from './tab.styles';

/**
 * A function that returns a {@link @microsoft/fast-foundation#Tab} registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#tabTemplate}
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-tab>`
 */
export const jpTab = Tab.compose({
  baseName: 'tab',
  template,
  styles
});

/**
 * Base class for Tab
 * @public
 */
export { Tab };

export { styles as tabStyles };
