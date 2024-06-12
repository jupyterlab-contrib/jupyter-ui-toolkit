import { TreeView as TreeViewElement } from '@jupyter/web-components';

export type { TreeViewElement };

export interface TreeViewProps extends React.AllHTMLAttributes<HTMLElement> {
  /**
   * Allows getting a ref to the component instance.
   */
  ref?: React.Ref<TreeViewElement>;

  /**
  When true, the control will be appear expanded by user interaction. */
  renderCollapsedNodes?: boolean;

  /** The currently selected tree item */
  currentSelected?: TreeViewElement['currentSelected'];
}

/**
 * Tree view class
 * ---
 *
 *
 * ### **Methods:**
 *  - **compose(this: _K_, elementDefinition: _T_): _(
 *         overrideDefinition?: OverrideFoundationElementDefinition<T>
 *     ) => FoundationElementRegistry<T, K>_** - Defines an element registry function with a set of element definition defaults.
 *
 * ### **Slots:**
 *  - _default_ - The default slot for tree items
 */
export const TreeView: React.ForwardRefExoticComponent<TreeViewProps>;
