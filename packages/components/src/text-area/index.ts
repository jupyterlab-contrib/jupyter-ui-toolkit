// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import { attr } from '@microsoft/fast-element';
import {
  TextArea,
  textAreaTemplate as template
} from '@microsoft/fast-foundation';
import { textAreaStyles as styles } from './text-area.styles.js';

/**
 * Text area appearances
 * @public
 */
export type TextAreaAppearance = 'filled' | 'outline';

/**
 * Textarea class
 *
 * @public
 * @tagname jp-text-area
 *
 * @fires select - Emits a custom 'select' event when the textarea emits a select event
 */
class JupyterTextArea extends TextArea {
  /**
   * The appearance of the element.
   *
   * @public
   * @remarks
   * HTML Attribute: appearance
   */
  @attr
  public appearance: TextAreaAppearance = 'outline';
}

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
export const jpTextArea = JupyterTextArea.compose({
  baseName: 'text-area',
  baseClass: TextArea,
  template,
  styles,
  shadowOptions: {
    delegatesFocus: true
  }
});

export { JupyterTextArea as TextArea, styles as textAreaStyles };
