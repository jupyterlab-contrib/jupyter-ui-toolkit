// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {
  Switch,
  SwitchOptions,
  switchTemplate as template
} from '@microsoft/fast-foundation';
import { switchStyles as styles } from './switch.styles.js';

/**
 * Switch class
 * @public
 * @tagname jp-switch
 */
class JupyterSwitch extends Switch {}

/**
 * A function that returns a {@link @microsoft/fast-foundation#Switch} registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#switchTemplate}
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-switch>`
 */
export const jpSwitch = JupyterSwitch.compose<SwitchOptions>({
  baseName: 'switch',
  baseClass: Switch,
  template,
  styles,
  switch: /* html */ `
        <span class="checked-indicator" part="checked-indicator"></span>
    `
});

export { JupyterSwitch as Switch, styles as switchStyles };
