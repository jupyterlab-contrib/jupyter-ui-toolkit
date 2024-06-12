// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {
  AnchoredRegion,
  anchoredRegionTemplate as template
} from '@microsoft/fast-foundation';
import { anchoredRegionStyles as styles } from './anchored-region.styles.js';

/**
 * Anchored region class
 *
 * @public
 * @tagname jp-anchored-region
 */
class JupyterAnchoredRegion extends AnchoredRegion {}

/**
 * A function that returns a {@link @microsoft/fast-foundation#AnchoredRegion} registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#anchoredRegionTemplate}
 *
 *
 * @beta
 * @remarks
 * Generates HTML Element: `<jp-anchored-region>`
 */
export const jpAnchoredRegion = JupyterAnchoredRegion.compose({
  baseName: 'anchored-region',
  baseClass: AnchoredRegion,
  template,
  styles
});

export { JupyterAnchoredRegion as AnchoredRegion };

export { styles as anchoredRegionStyles };
