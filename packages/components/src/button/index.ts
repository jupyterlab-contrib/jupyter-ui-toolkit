// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import { Button, buttonStyles } from '@microsoft/fast-components';
import { css } from '@microsoft/fast-element';
import {
  ButtonOptions,
  buttonTemplate as template,
  ElementDefinitionContext
} from '@microsoft/fast-foundation';

/* Button style customization */

/**
 * The button component registration.
 *
 * @public
 * @remarks
 * Generated HTML Element: `<jp-button>`
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus | delegatesFocus}
 */
export const jpButton = Button.compose({
  baseName: 'button',
  template,
  styles: (context: ElementDefinitionContext, definition: ButtonOptions) =>
    css`
      ${buttonStyles(context, definition)}
    `,
  shadowOptions: {
    delegatesFocus: true
  }
});
