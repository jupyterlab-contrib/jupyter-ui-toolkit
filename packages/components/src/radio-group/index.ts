// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {
  RadioGroup,
  radioGroupTemplate as template
} from '@microsoft/fast-foundation';
import { radioGroupStyles as styles } from './radio-group.styles.js';

/**
 * A function that returns a {@link @microsoft/fast-foundation#RadioGroup} registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#radioGroupTemplate}
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-radio-group>`
 */
export const jpRadioGroup = RadioGroup.compose({
  baseName: 'radio-group',
  template,
  styles
});

/**
 * Base class for RadioGroup
 * @public
 */
export { RadioGroup };

export { styles as radioGroupStyles };
