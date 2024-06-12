// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {
  tooltipTemplate as template,
  Tooltip
} from '@microsoft/fast-foundation';
import { tooltipStyles as styles } from './tooltip.styles.js';

/**
 * Tooltip class
 *
 * @public
 * @tagname jp-tooltip
 */
class JupyterTooltip extends Tooltip {}

/**
 * A function that returns a {@link @microsoft/fast-foundation#Tooltip} registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#tooltipTemplate}
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-tooltip>`
 */
export const jpTooltip = JupyterTooltip.compose({
  baseName: 'tooltip',
  baseClass: Tooltip,
  template,
  styles
});

export { JupyterTooltip as Tooltip, styles as tooltipStyles };
