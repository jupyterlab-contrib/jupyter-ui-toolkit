import { Option as ListboxOptionElement } from "@jupyter/web-components";

export type { ListboxOptionElement };

export interface ListboxOptionProps
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
  /** The selected attribute value. This sets the initial selected value. */
  selected?: boolean;

  /** The initial value of the option. This value sets the `value` property
only when the `value` property has not been explicitly set. */
  value?: ListboxOptionElement["value"];

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

  /** The checked state is used when the parent listbox is in multiple selection mode.
To avoid accessibility conflicts, the checked state should not be present in
single selection mode. */
  checked?: ListboxOptionElement["checked"];

  /** The default slotted content. */
  content?: ListboxOptionElement["content"];

  /** The defaultSelected state of the option. */
  defaultSelected?: ListboxOptionElement["defaultSelected"];

  /** The disabled state of the option. */
  disabled?: ListboxOptionElement["disabled"];

  /** The selected attribute value. This sets the initial selected value. */
  selectedAttribute?: ListboxOptionElement["selectedAttribute"];

  /** Track whether the value has been changed from the initial value */
  dirtyValue?: ListboxOptionElement["dirtyValue"];

  /** A property which resolves the ComponentPresentation instance
for the current component. */
  $presentation?: ListboxOptionElement["$presentation"];

  /** Sets the template of the element instance. When undefined,
the element will attempt to resolve the template from
the associated presentation or custom element definition. */
  template?: ListboxOptionElement["template"];

  /** Sets the default styles for the element instance. When undefined,
the element will attempt to resolve default styles from
the associated presentation or custom element definition. */
  styles?: ListboxOptionElement["styles"];
}

/**
 * Listbox option class
 * ---
 *
 *
 * ### **Methods:**
 *  - **checkedChanged(prev: _boolean | unknown_, next: _boolean_): _void_** - Updates the ariaChecked property when the checked property changes.
 * - **compose(this: _K_, elementDefinition: _T_): _(
 *         overrideDefinition?: OverrideFoundationElementDefinition<T>
 *     ) => FoundationElementRegistry<T, K>_** - Defines an element registry function with a set of element definition defaults.
 *
 * ### **Slots:**
 *  - **start** - Content which can be provided before the listbox option content
 * - **end** - Content which can be provided after the listbox option content
 * - _default_ - The default slot for listbox option content
 *
 * ### **CSS Parts:**
 *  - **content** - Wraps the listbox option content
 */
export const ListboxOption: React.ForwardRefExoticComponent<ListboxOptionProps>;
