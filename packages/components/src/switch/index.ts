// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {
  Switch as BaseSwitch,
  SwitchOptions,
  switchTemplate as template
} from '@microsoft/fast-foundation';
import { switchStyles as styles } from './switch.styles.js';
import { ErrorMessageMixin } from '../validation.js';

/**
 * Base class for Switch
 * @public
 */
export class Switch extends ErrorMessageMixin(BaseSwitch) {}

/**
 * A function that returns a {@link @microsoft/fast-foundation#Switch} registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#switchTemplate}
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-switch>`
 */
export const jpSwitch = Switch.compose<SwitchOptions>({
  baseName: 'switch',
  baseClass: BaseSwitch,
  template,
  styles,
  switch: /* html */ `
        <span class="checked-indicator" part="checked-indicator"></span>
    `
});

export { styles as switchStyles };
