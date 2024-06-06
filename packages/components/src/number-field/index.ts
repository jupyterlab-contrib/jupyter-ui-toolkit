// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import { attr } from '@microsoft/fast-element';
import {
  NumberField,
  NumberFieldOptions,
  numberFieldTemplate as template
} from '@microsoft/fast-foundation';
import { numberFieldStyles as styles } from './number-field.styles.js';

/**
 * Number field appearances
 * @public
 */
export type NumberFieldAppearance = 'filled' | 'outline';

/**
 * Number field class
 *
 * @public
 * @tagname jp-number-field
 */
class JupyterNumberField extends NumberField {
  /**
   * The appearance of the element.
   *
   * @public
   * @remarks
   * HTML Attribute: appearance
   */
  @attr
  public appearance: NumberFieldAppearance = 'outline';
}

/**
 * A function that returns a {@link @microsoft/fast-foundation#NumberField} registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#numberFieldTemplate}
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-number-field>`
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus | delegatesFocus}
 */
export const jpNumberField = JupyterNumberField.compose<NumberFieldOptions>({
  baseName: 'number-field',
  baseClass: NumberField,
  styles,
  template,
  shadowOptions: {
    delegatesFocus: true
  },
  stepDownGlyph: /* html */ `
        <span class="step-down-glyph" part="step-down-glyph"></span>
    `,
  stepUpGlyph: /* html */ `
        <span class="step-up-glyph" part="step-up-glyph"></span>
    `
});

export { JupyterNumberField as NumberField, styles as numberFieldStyles };
