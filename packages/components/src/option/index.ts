// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {
  ListboxOption,
  listboxOptionTemplate as template
} from '@microsoft/fast-foundation';
import { optionStyles as styles } from '@microsoft/fast-components';

/**
 * A function that returns a Option registration for configuring the component with a DesignSystem.
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-option>`
 *
 */
export const jpOption = ListboxOption.compose({
  baseName: 'option',
  template,
  styles
});

/**
 * Base class for Option
 * @public
 */
export { ListboxOption as Option };

export { styles as optionStyles };
