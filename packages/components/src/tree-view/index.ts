// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {
  isTreeItemElement,
  treeViewTemplate as template,
  TreeView,
  type TreeItem
} from '@microsoft/fast-foundation';
import { treeViewStyles as styles } from './tree-view.styles.js';

/**
 * Tree view class
 *
 * @public
 * @tagname jp-tree-view
 */
class JupyterTreeView extends TreeView {
  /**
   * Handles click events bubbling up
   *
   *  @internal
   */
  public handleClick(e: Event): boolean | void {
    if (e.defaultPrevented) {
      // handled, do nothing
      return;
    }

    if (!(e.target instanceof Element)) {
      // not a tree item, ignore
      return true;
    }

    let item = e.target as Element | null;
    while (item && !isTreeItemElement(item)) {
      item = item.parentElement;

      // Escape if we get out of the tree view component
      if (item === this) {
        item = null;
      }
    }

    if (item && !(item as TreeItem).disabled) {
      // Force selection - it is not possible to unselect
      (item as TreeItem).selected = true;
    }

    return;
  }
}

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
