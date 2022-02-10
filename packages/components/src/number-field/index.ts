// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  NumberField as FoundationNumberField,
  NumberFieldOptions,
  numberFieldTemplate as template
} from '@microsoft/fast-foundation';
import { NumberField } from '@microsoft/fast-components';
import { numberFieldStyles as styles } from './number-field.styles';

// TODO
//   we need to add error/invalid

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
export const jpNumberField = NumberField.compose<NumberFieldOptions>({
  baseName: 'number-field',
  baseClass: FoundationNumberField,
  styles,
  template,
  shadowOptions: {
    delegatesFocus: true
  },
  stepDownGlyph: `
        <span class="step-down-glyph" part="step-down-glyph"></span>
    `,
  stepUpGlyph: `
        <span class="step-up-glyph" part="step-up-glyph"></span>
    `
});

export { NumberField, NumberFieldAppearance } from '@microsoft/fast-components';

/**
 * Styles for NumberField
 * @public
 */
export { styles as numberFieldStyles };
