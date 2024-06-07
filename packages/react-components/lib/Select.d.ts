import { Select as SelectElement } from "@jupyter/web-components";

export type { SelectElement };

export interface SelectProps
  extends Pick<
    React.AllHTMLAttributes<HTMLInputElement>,
    | "children"
    | "dir"
    | "hidden"
    | "id"
    | "lang"
    | "slot"
    | "tabIndex"
    | "title"
    | "translate"
    | "name"
    | "required"
    | "value"
    | "disabled"
    | "onClick"
    | "onFocus"
    | "onBlur"
  > {
  /** Whether the select has a compact layout or not. */
  autowidth?: boolean;

  /** Whether the select has a compact layout or not. */
  minimal?: boolean;

  /** The open attribute. */
  open?: boolean;

  /** Reflects the placement for the listbox when the select is open. */
  position?: SelectElement["position"];

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

  /** Whether the select has a compact layout or not. */
  autoWidth?: SelectElement["autoWidth"];

  /** The value property. */
  value?: SelectElement["value"];

  /** The value displayed on the button. */
  displayValue?: SelectElement["displayValue"];

  /** Indicates if the listbox is in multi-selection mode. */
  multiple?: SelectElement["multiple"];

  /** The maximum number of options to display. */
  size?: SelectElement["size"];

  /** The number of options. */
  length?: SelectElement["length"];

  /** The list of options. */
  options?: SelectElement["options"];

  /** The disabled state of the listbox. */
  disabled?: SelectElement["disabled"];

  /** The index of the selected option. */
  selectedIndex?: SelectElement["selectedIndex"];

  /** A collection of the selected options. */
  selectedOptions?: SelectElement["selectedOptions"];

  /** A property which resolves the ComponentPresentation instance
for the current component. */
  $presentation?: SelectElement["$presentation"];

  /** Sets the template of the element instance. When undefined,
the element will attempt to resolve the template from
the associated presentation or custom element definition. */
  template?: SelectElement["template"];

  /** Sets the default styles for the element instance. When undefined,
the element will attempt to resolve default styles from
the associated presentation or custom element definition. */
  styles?: SelectElement["styles"];

  /** Fires a custom 'input' event when the value updates */
  onInput?: (event: CustomEvent) => void;

  /** Fires a custom 'change' event when the value updates */
  onChange?: (event: CustomEvent) => void;
}

/**
 * Select class
 * ---
 *
 *
 * ### **Events:**
 *  - **input** - Fires a custom 'input' event when the value updates
 * - **change** - Fires a custom 'change' event when the value updates
 *
 * ### **Methods:**
 *
 *
 * - **setPositioning(): _void_** - Calculate and apply listbox positioning based on available viewport space.
 * - **multipleChanged(prev: _boolean | undefined_, next: _boolean_)** - Sets the multiple property on the proxy element.
 * - **setSelectedOptions()** - Sets an option as selected and gives it focus.
 * - **selectFirstOption(): _void_** - Moves focus to the first selectable option.
 * - **compose(this: _K_, elementDefinition: _T_): _(
 *         overrideDefinition?: OverrideFoundationElementDefinition<T>
 *     ) => FoundationElementRegistry<T, K>_** - Defines an element registry function with a set of element definition defaults.
 *
 * ### **Slots:**
 *  - **start** - Content which can be provided before the button content
 * - **end** - Content which can be provided after the button content
 * - **button-container** - The element representing the select button
 * - **selected-value** - The selected value
 * - **indicator** - The visual indicator for the expand/collapse state of the button
 * - _default_ - The default slot for slotted options
 *
 * ### **CSS Parts:**
 *  - **control** - The element representing the select invoking element
 * - **selected-value** - The element wrapping the selected value
 * - **indicator** - The element wrapping the visual indicator
 * - **listbox** - The listbox element
 */
export const Select: React.ForwardRefExoticComponent<SelectProps>;
