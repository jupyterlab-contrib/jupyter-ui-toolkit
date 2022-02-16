// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  AnchoredRegion,
  anchoredRegionTemplate as template
} from '@microsoft/fast-foundation';
import { anchoredRegionStyles as styles } from '@microsoft/fast-components';

/**
 * A function that returns a {@link @microsoft/fast-foundation#AnchoredRegion} registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#anchoredRegionTemplate}
 *
 *
 * @beta
 * @remarks
 * Generates HTML Element: `<jp-anchored-region>`
 */
export const jpAnchoredRegion = AnchoredRegion.compose({
  baseName: 'anchored-region',
  template,
  styles
});

/**
 * Base class for AnchoredRegion
 * @public
 */
export { AnchoredRegion };

export { styles as anchoredRegionStyles };
