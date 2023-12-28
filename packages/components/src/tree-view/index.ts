// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {
  treeViewTemplate as template,
  TreeView
} from '@microsoft/fast-foundation';
import { treeViewStyles as styles } from './tree-view.styles.js';

/**
 * A function that returns a {@link @microsoft/fast-foundation#TreeView} registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#treeViewTemplate}
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-tree-view>`
 *
 */
export const jpTreeView = TreeView.compose({
  baseName: 'tree-view',
  template,
  styles
});

/**
 * Base class for TreeView
 * @public
 */
export { TreeView };

export { styles as treeViewStyles };
