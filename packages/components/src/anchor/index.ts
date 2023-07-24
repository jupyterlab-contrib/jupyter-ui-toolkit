// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { Anchor as FoundationAnchor, anchorTemplate as template } from '@microsoft/fast-foundation';
import { Anchor, anchorStyles as styles } from '@microsoft/fast-components';

/**
 * A function that returns a Anchor registration for configuration with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#anchorTemplate}
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-anchor>`
 */
export const jpAnchor = Anchor.compose({
  baseName: 'anchor',
  baseClass: FoundationAnchor,
  template,
  styles
});

/**
 * Base class for Anchor
 * @public
 */
export { Anchor };

export { styles as anchorStyles };
