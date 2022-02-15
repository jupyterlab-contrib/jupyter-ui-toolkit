// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { Toolbar } from '@microsoft/fast-components';
import {
  Toolbar as FoundationToolbar,
  toolbarTemplate as template
} from '@microsoft/fast-foundation';
import { toolbarStyles as styles } from './toolbar.styles';

/**
 * A function that returns a {@link @microsoft/fast-foundation#Toolbar} registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#toolbarTemplate}
 *
 * @public
 * @remarks
 *
 * Generates HTML Element: `<jp-toolbar>`
 *
 */
export const jpToolbar = Toolbar.compose({
  baseName: 'toolbar',
  baseClass: FoundationToolbar,
  template,
  styles,
  shadowOptions: {
    delegatesFocus: true
  }
});

export { Toolbar, styles as toolbarStyles };
