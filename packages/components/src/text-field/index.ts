// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import { attr } from '@microsoft/fast-element';
import {
  TextField as FoundationTextField,
  textFieldTemplate as template
} from '@microsoft/fast-foundation';
import { textFieldStyles as styles } from './text-field.styles.js';
import { ErrorMessageMixin } from '../validation.js';

/**
 * Text field appearances
 * @public
 */
export type TextFieldAppearance = 'filled' | 'outline';

/**
 * @internal
 */
export class TextField extends ErrorMessageMixin(FoundationTextField) {
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
export const jpTextField = TextField.compose({
  baseName: 'text-field',
  baseClass: FoundationTextField,
  template,
  styles,
  shadowOptions: {
    delegatesFocus: true
  }
});

export { styles as textFieldStyles };
