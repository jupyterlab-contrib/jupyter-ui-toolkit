// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  Breadcrumb,
  breadcrumbTemplate as template
} from '@microsoft/fast-foundation';
import { breadcrumbStyles as styles } from '@microsoft/fast-components';

/**
 * A function that returns a Breadcrumb registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#breadcrumbTemplate}
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-breadcrumb>`
 */
export const jpBreadcrumb = Breadcrumb.compose({
  baseName: 'breadcrumb',
  template,
  styles
});

/**
 * Base class for Breadcrumb
 * @public
 */
export { Breadcrumb };

export { styles as breadcrumbStyles };
