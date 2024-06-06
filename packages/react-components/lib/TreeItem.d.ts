import { TreeItem as TreeItemElement } from "@jupyter/web-components";

export type { TreeItemElement };

export interface TreeItemProps
  extends Pick<
    React.AllHTMLAttributes<HTMLElement>,
    | "children"
    | "dir"
    | "hidden"
    | "id"
    | "lang"
    | "slot"
    | "tabIndex"
    | "title"
    | "translate"
    | "onClick"
    | "onFocus"
    | "onBlur"
  > {
  /** A space-separated list of the classes of the element. Classes allows CSS and JavaScript to select and access specific elements via the class selectors or functions like the method `Document.getElementsByClassName()`. */
  className?: string;

  /** Contains a space-separated list of the part names of the element that should be exposed on the host element. */
  exportparts?: string;

  /** Used for labels to link them with their inputs (using input id). */
  htmlFor?: string;

  /** Used to help React identify which items have changed, are added, or are removed within a list. */
  key?: number | string;

  /** Contains a space-separated list of the part names of the element. Part names allows CSS to select and style specific elements in a shadow tree via the ::part pseudo-element. */
  part?: string;

  /** A mutable ref object whose `.current` property is initialized to the passed argument (`initialValue`). The returned object will persist for the full lifetime of the component. */
  ref?: any;

  /** Contains CSS styling declarations to be applied to the element. Note that it is recommended for styles to be defined in a separate file or files. This attribute and the <style> element have mainly the purpose of allowing for quick styling, for example for testing purposes. */
  style?: string | object;

  /** Allows developers to make HTML elements focusable, allow or prevent them from being sequentially focusable (usually with the `Tab` key, hence the name) and determine their relative ordering for sequential focus navigation. */
  tabIndex?: number;

  /** When true, the control will be appear expanded by user interaction. */
  expanded?: TreeItemElement["expanded"];

  /** When true, the control will appear selected by user interaction. */
  selected?: TreeItemElement["selected"];

  /** When true, the control will be immutable by user interaction. See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled | disabled HTML attribute} for more information. */
  disabled?: TreeItemElement["disabled"];

  /** Whether the tree is nested */
  isNestedItem?: TreeItemElement["isNestedItem"];

  /** A property which resolves the ComponentPresentation instance
for the current component. */
  $presentation?: TreeItemElement["$presentation"];

  /** Sets the template of the element instance. When undefined,
the element will attempt to resolve the template from
the associated presentation or custom element definition. */
  template?: TreeItemElement["template"];

  /** Sets the default styles for the element instance. When undefined,
the element will attempt to resolve default styles from
the associated presentation or custom element definition. */
  styles?: TreeItemElement["styles"];

  /** Fires a custom 'expanded-change' event when the expanded state changes */
  onExpandedChange?: (event: CustomEvent) => void;

  /** Fires a custom 'selected-change' event when the selected state changes */
  onSelectedChange?: (event: CustomEvent) => void;
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
