// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {
  BreadcrumbItem,
  BreadcrumbItemOptions,
  breadcrumbItemTemplate as template
} from '@microsoft/fast-foundation';
import { breadcrumbItemStyles as styles } from './breadcrumb-item.styles.js';

/**
 * A function that returns a {@link @microsoft/fast-foundation#BreadcrumbItem} registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#breadcrumbItemTemplate}
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-breadcrumb-item>`
 */
export const jpBreadcrumbItem = BreadcrumbItem.compose<BreadcrumbItemOptions>({
  baseName: 'breadcrumb-item',
  template,
  styles,
  separator: '/',
  shadowOptions: {
    delegatesFocus: true
  }
});

/**
 * Base class for BreadcrumbItem
 * @public
 */
export { BreadcrumbItem };

export { styles as breadcrumbItemStyles };
