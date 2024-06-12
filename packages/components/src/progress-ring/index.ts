// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {
  BaseProgress,
  ProgressRingOptions,
  progressRingTemplate as template
} from '@microsoft/fast-foundation';
import { progressRingStyles as styles } from './progress-ring.styles.js';

/**
 * Progress ring class
 *
 * @public
 * @tagname jp-progress-ring
 */
class JupyterProgressRing extends BaseProgress {}

/**
 * A function that returns a {@link @microsoft/fast-foundation#BaseProgress} registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#progressRingTemplate}
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-progress-ring>`
 */
export const jpProgressRing = JupyterProgressRing.compose<ProgressRingOptions>({
  baseName: 'progress-ring',
  baseClass: BaseProgress,
  template,
  styles,
  indeterminateIndicator: /* html */ `
        <svg class="progress" part="progress" viewBox="0 0 16 16">
            <circle
                class="background"
                part="background"
                cx="8px"
                cy="8px"
                r="7px"
            ></circle>
            <circle
                class="indeterminate-indicator-1"
                part="indeterminate-indicator-1"
                cx="8px"
                cy="8px"
                r="7px"
            ></circle>
        </svg>
    `
});

export { JupyterProgressRing as ProgressRing, styles as progressRingStyles };
