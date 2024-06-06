// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import { Dialog, dialogTemplate as template } from '@microsoft/fast-foundation';
import { dialogStyles as styles } from './dialog.styles.js';

/**
 * Dialog class
 *
 * @public
 * @tagname jp-dialog
 */
class JupyterDialog extends Dialog {}

/**
 * A function that returns a {@link @microsoft/fast-foundation#Dialog} registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#dialogTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: `<jp-dialog>`
 *
 */
export const jpDialog = JupyterDialog.compose({
  baseName: 'dialog',
  baseClass: Dialog,
  template,
  styles
});

export { JupyterDialog as Dialog, styles as dialogStyles };
