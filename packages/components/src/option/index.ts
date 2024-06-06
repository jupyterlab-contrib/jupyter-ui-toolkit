// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {
  ListboxOption,
  listboxOptionTemplate as template
} from '@microsoft/fast-foundation';
import { optionStyles as styles } from './option.styles.js';

/**
 * Listbox option class
 *
 * @public
 * @tagname jp-option
 */
class JupyterListboxOption extends ListboxOption {}

/**
 * A function that returns a {@link @microsoft/fast-foundation#ListboxOption} registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#listboxOptionTemplate}
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-option>`
 *
 */
export const jpOption = JupyterListboxOption.compose({
  baseName: 'option',
  baseClass: ListboxOption,
  template,
  styles
});

export { JupyterListboxOption as Option, styles as optionStyles };
