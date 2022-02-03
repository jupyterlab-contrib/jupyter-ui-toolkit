// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  TextField as FoundationTextField,
  textFieldTemplate as template
} from '@microsoft/fast-foundation';
import { TextField } from '@microsoft/fast-components';
import { textFieldStyles as styles } from './text-field.styles';

// TODO
//   we need to add error/invalid

/**
 * A function that returns a TextField registration for configuring the component with a DesignSystem.
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-text-field>`
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus | delegatesFocus}
 */
export const jpTextField = TextField.compose({
  baseName: 'text-field',
  baseClass: FoundationTextField,
  template,
  styles,
  shadowOptions: {
    delegatesFocus: true
  }
});

export { TextField, TextFieldAppearance } from '@microsoft/fast-components';

/**
 * Styles for TextField
 * @public
 */
export { styles as textFieldStyles };
