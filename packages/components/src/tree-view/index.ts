// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {
  treeViewTemplate as template,
  TreeView
} from '@microsoft/fast-foundation';
import { treeViewStyles as styles } from './tree-view.styles.js';

/**
 * Tree view class
 *
 * @public
 * @tagname jp-tree-view
 */
class JupyterTreeView extends TreeView {}

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
export const jpTreeView = JupyterTreeView.compose({
  baseName: 'tree-view',
  baseClass: TreeView,
  template,
  styles
});

export { JupyterTreeView as TreeView, styles as treeViewStyles };
