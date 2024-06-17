import { TreeItem as TreeItemElement } from '@jupyter/web-components';

export type { TreeItemElement };

export interface TreeItemProps
  extends Omit<React.AllHTMLAttributes<HTMLElement>, 'onSelect'> {
  /**
   * Allows getting a ref to the component instance.
   */
  ref?: React.Ref<TreeItemElement>;

  /** When true, the control will be appear expanded by user interaction. */
  expanded?: TreeItemElement['expanded'];

  /** When true, the control will appear selected by user interaction. */
  selected?: TreeItemElement['selected'];

  /** When true, the control will be immutable by user interaction. See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled | disabled HTML attribute} for more information. */
  disabled?: TreeItemElement['disabled'];

  /** Fires a custom 'expanded-change' event when the expanded state changes */
  onExpand?: (event: CustomEvent) => void;

  /** Fires a custom 'selected-change' event when the selected state changes */
  onSelect?: (event: CustomEvent) => void;
}

/**
 * Tree item class
 * ---
 *
 *
 * ### **Events:**
 *  - **expanded-change** - Fires a custom 'expanded-change' event when the expanded state changes
 * - **selected-change** - Fires a custom 'selected-change' event when the selected state changes
 *
 * ### **Methods:**
 *  - **focusItem(el: _HTMLElement_)** - Places document focus on a tree item
 * - **compose(this: _K_, elementDefinition: _T_): _(
 *         overrideDefinition?: OverrideFoundationElementDefinition<T>
 *     ) => FoundationElementRegistry<T, K>_** - Defines an element registry function with a set of element definition defaults.
 *
 * ### **Slots:**
 *  - **start** - Content which can be provided before the tree item content
 * - **end** - Content which can be provided after the tree item content
 * - _default_ - The default slot for tree item text content
 * - **item** - The slot for tree items (fast tree items manage this assignment themselves)
 * - **expand-collapse-button** - The expand/collapse button
 *
 * ### **CSS Parts:**
 *  - **positioning-region** - The element used to position the tree item content with exception of any child nodes
 * - **content-region** - The element containing the expand/collapse, start, and end slots
 * - **items** - The element wrapping any child items
 * - **expand-collapse-button** - The expand/collapse button
 */
export const TreeItem: React.ForwardRefExoticComponent<TreeItemProps>;
