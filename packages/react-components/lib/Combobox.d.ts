import { Combobox as ComboboxElement } from '@jupyter/web-components';

export type { ComboboxElement };

export interface ComboboxProps
  extends Pick<
    React.AllHTMLAttributes<HTMLElement>,
    | 'children'
    | 'dir'
    | 'hidden'
    | 'id'
    | 'lang'
    | 'slot'
    | 'tabIndex'
    | 'title'
    | 'translate'
    | 'onClick'
    | 'onFocus'
    | 'onBlur'
  > {
  /** Whether the combobox has a compact layout or not. */
  autowidth?: boolean;

  /** Whether the combobox has a compact layout or not. */
  minimal?: boolean;

  /** The open attribute. */
  open?: boolean;

  /** The autocomplete attribute. */
  autocomplete?: ComboboxElement['autocomplete'];

  /** Sets the placeholder value of the element, generally used to provide a hint to the user. */
  placeholder?: ComboboxElement['placeholder'];

  /** The placement for the listbox when the combobox is open. */
  position?: ComboboxElement['position'];

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

  /** Whether the combobox has a compact layout or not. */
  autoWidth?: ComboboxElement['autoWidth'];

  /** The collection of currently filtered options. */
  filteredOptions?: ComboboxElement['filteredOptions'];

  /** The list of options. */
  options?: ComboboxElement['options'];

  /** The value property. */
  value?: ComboboxElement['value'];

  /** The number of options. */
  length?: ComboboxElement['length'];

  /** The disabled state of the listbox. */
  disabled?: ComboboxElement['disabled'];

  /** The index of the selected option. */
  selectedIndex?: ComboboxElement['selectedIndex'];

  /** A collection of the selected options. */
  selectedOptions?: ComboboxElement['selectedOptions'];

  /** A property which resolves the ComponentPresentation instance
for the current component. */
  $presentation?: ComboboxElement['$presentation'];

  /** Sets the template of the element instance. When undefined,
the element will attempt to resolve the template from
the associated presentation or custom element definition. */
  template?: ComboboxElement['template'];

  /** Sets the default styles for the element instance. When undefined,
the element will attempt to resolve default styles from
the associated presentation or custom element definition. */
  styles?: ComboboxElement['styles'];

  /** Fires a custom 'change' event when the value updates */
  onChange?: (event: CustomEvent) => void;

  onInput?: (event: CustomEvent) => void;
}

/**
 * Combobox class
 * ---
 *
 *
 * ### **Events:**
 *  - **change** - Fires a custom 'change' event when the value updates
 *
 * ### **Methods:**
 *
 *
 * - **validate(): _void_** - {@inheritDoc (FormAssociated:interface).validate}
 * - **filterOptions(): _void_** - Filter available options by text value.
 * - **setPositioning(force): _void_** - Calculate and apply listbox positioning based on available viewport space.
 * - **selectFirstOption(): _void_** - Moves focus to the first selectable option.
 * - **setSelectedOptions()** - Sets an option as selected and gives it focus.
 * - **compose(this: _K_, elementDefinition: _T_): _(
 *         overrideDefinition?: OverrideFoundationElementDefinition<T>
 *     ) => FoundationElementRegistry<T, K>_** - Defines an element registry function with a set of element definition defaults.
 *
 * ### **Slots:**
 *  - **start** - Content which can be provided before the input
 * - **end** - Content which can be provided after the input
 * - **control** - Used to replace the input element representing the combobox
 * - **indicator** - The visual indicator representing the expanded state
 * - _default_ - The default slot for the options
 *
 * ### **CSS Parts:**
 *  - **control** - The wrapper element containing the input area, including start and end
 * - **selected-value** - The input element representing the selected value
 * - **indicator** - The element wrapping the indicator slot
 * - **listbox** - The wrapper for the listbox slotted options
 */
export const Combobox: React.ForwardRefExoticComponent<ComboboxProps>;
