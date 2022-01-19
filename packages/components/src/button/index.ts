// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import { Button } from '@microsoft/fast-components';
import { buttonTemplate as template } from '@microsoft/fast-foundation';
import { buttonStyles } from './button.styles';

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
  styles: buttonStyles,
  shadowOptions: {
    delegatesFocus: true
  }
});
