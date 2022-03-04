// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  TextArea as FoundationTextArea,
  textAreaTemplate as template
} from '@microsoft/fast-foundation';
import { TextArea, TextAreaAppearance } from '@microsoft/fast-components';
import { textAreaStyles as styles } from './text-area.styles';

/**
 * A function that returns a {@link @microsoft/fast-foundation#TextArea} registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#textAreaTemplate}
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-text-area>`
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus | delegatesFocus}
 */
export const jpTextArea = TextArea.compose({
  baseName: 'text-area',
  baseClass: FoundationTextArea,
  template,
  styles,
  shadowOptions: {
    delegatesFocus: true
  }
});

export { TextArea, TextAreaAppearance, styles as textAreaStyles };
