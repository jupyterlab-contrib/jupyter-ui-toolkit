// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { Badge, badgeTemplate as template } from '@microsoft/fast-foundation';
import { badgeStyles as styles } from './badge.styles';

/**
 * A function that returns a {@link @microsoft/fast-foundation#Badge} registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#badgeTemplate}
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-badge>`
 */
export const jpBadge = Badge.compose({
  baseName: 'badge',
  template,
  styles
});

/**
 * Base class for Badge
 * @public
 */
export { Badge };

export { styles as badgeStyles };
