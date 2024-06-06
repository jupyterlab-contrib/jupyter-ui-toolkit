// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {
  Breadcrumb,
  breadcrumbTemplate as template
} from '@microsoft/fast-foundation';
import { breadcrumbStyles as styles } from './breadcrumb.styles.js';

/**
 * Breadcrumb class
 *
 * @public
 * @tagname jp-breadcrumb
 */
class JupyterBreadcrumb extends Breadcrumb {}

/**
 * A function that returns a {@link @microsoft/fast-foundation#Breadcrumb} registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#breadcrumbTemplate}
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-breadcrumb>`
 */
export const jpBreadcrumb = JupyterBreadcrumb.compose({
  baseName: 'breadcrumb',
  baseClass: Breadcrumb,
  template,
  styles
});

export { JupyterBreadcrumb as Breadcrumb };

export { styles as breadcrumbStyles };
