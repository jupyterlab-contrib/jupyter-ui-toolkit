// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {
  Divider,
  dividerTemplate as template
} from '@microsoft/fast-foundation';
import { dividerStyles as styles } from './divider.styles.js';

/**
 * Divider class
 *
 * @public
 * @tagname jp-divider
 */
class JupyterDivider extends Divider {}

/**
 * A function that returns a {@link @microsoft/fast-foundation#Divider} registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#dividerTemplate}
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-divider>`
 */
export const jpDivider = JupyterDivider.compose({
  baseName: 'divider',
  baseClass: Divider,
  template,
  styles
});

export { JupyterDivider as Divider, styles as dividerStyles };
