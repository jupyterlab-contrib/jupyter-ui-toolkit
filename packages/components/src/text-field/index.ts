// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import { attr } from '@microsoft/fast-element';
import {
  TextField,
  textFieldTemplate as template
} from '@microsoft/fast-foundation';
import { textFieldStyles as styles } from './text-field.styles.js';

/**
 * Text field appearances
 * @public
 */
export type TextFieldAppearance = 'filled' | 'outline';

/**
 * Text field class
 *
 * @public
 * @tagname jp-text-field
 *
 * @fires select - Emits a custom 'select' event when the textarea emits a select event
 */
class JupyterTextField extends TextField {
  /**
   * The appearance of the element.
   *
   * @public
   * @remarks
   * HTML Attribute: appearance
   */
  @attr
  public appearance: TextFieldAppearance = 'outline';
}

/**
 * A function that returns a {@link @microsoft/fast-foundation#TextField} registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#textFieldTemplate}
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-text-field>`
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus | delegatesFocus}
 */
export const jpTextField = JupyterTextField.compose({
  baseName: 'text-field',
  baseClass: TextField,
  template,
  styles,
  shadowOptions: {
    delegatesFocus: true
  }
});

export { JupyterTextField as TextField, styles as textFieldStyles };
