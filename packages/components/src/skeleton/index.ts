// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {
  Skeleton,
  skeletonTemplate as template
} from '@microsoft/fast-foundation';
import { skeletonStyles as styles } from './skeleton.styles.js';

/**
 * Skeleton class
 *
 * @public
 * @tagname jp-skeleton
 */
class JupyterSkeleton extends Skeleton {}

/**
 * A function that returns a {@link @microsoft/fast-foundation#Skeleton} registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#skeletonTemplate}
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-skeleton>`
 */
export const jpSkeleton = JupyterSkeleton.compose({
  baseName: 'skeleton',
  baseClass: Skeleton,
  template,
  styles
});

export { JupyterSkeleton as Skeleton, styles as skeletonStyles };
