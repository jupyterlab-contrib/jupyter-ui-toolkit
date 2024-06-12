// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import { Badge, badgeTemplate as template } from '@microsoft/fast-foundation';
import { badgeStyles as styles } from './badge.styles.js';

/**
 * Badge class
 *
 * @public
 * @tagname jp-badge
 */
class JupyterBadge extends Badge {}

/**
 * A function that returns a {@link @microsoft/fast-foundation#Badge} registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#badgeTemplate}
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-badge>`
 */
export const jpBadge = JupyterBadge.compose({
  baseName: 'badge',
  baseClass: Badge,
  template,
  styles
});

export { JupyterBadge as Badge };

export { styles as badgeStyles };
