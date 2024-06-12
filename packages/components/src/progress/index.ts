// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {
  BaseProgress,
  ProgressOptions,
  progressTemplate as template
} from '@microsoft/fast-foundation';
import { progressStyles as styles } from './progress.styles.js';

/**
 * Progress bar class
 *
 * @public
 * @tagname jp-progress
 */
class JupyterProgress extends BaseProgress {}

/**
 * A function that returns a {@link @microsoft/fast-foundation#BaseProgress} registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#progressTemplate}
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-progress>`
 */
export const jpProgress = JupyterProgress.compose<ProgressOptions>({
  baseName: 'progress',
  baseClass: BaseProgress,
  template,
  styles,
  indeterminateIndicator1: /* html */ `
        <span class="indeterminate-indicator-1" part="indeterminate-indicator-1"></span>
    `,
  indeterminateIndicator2: /* html */ `
        <span class="indeterminate-indicator-2" part="indeterminate-indicator-2"></span>
    `
});

export { JupyterProgress as Progress, styles as progressStyles };
