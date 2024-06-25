import {
  Combobox as ComboboxElement,
  type ComboboxScale
} from '@jupyter/web-components';

export type { ComboboxElement, ComboboxScale };

export interface ComboboxProps
  extends Omit<React.AllHTMLAttributes<HTMLElement>, 'onChange' | 'onInput'> {
  /**
   * Allows getting a ref to the component instance.
   */
  ref?: React.Ref<ComboboxElement>;

  /** Whether the combobox has a compact layout or not. */
  autowidth?: boolean;

  /** Whether the combobox has a compact layout or not.
   * @deprecated Use {@link scale} equals to `xsmall` instead.
   */
  minimal?: boolean;

  /**
   * Scale the element compared to the theme size.
   */
  scale?: ComboboxScale;

  /** The open attribute. */
  open?: boolean;

  /** The autocomplete attribute. */
  autocomplete?: ComboboxElement['autocomplete'];

  /** Sets the placeholder value of the element, generally used to provide a hint to the user. */
  placeholder?: ComboboxElement['placeholder'];

  /** The placement for the listbox when the combobox is open. */
  position?: ComboboxElement['position'];

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

  /** Fires a custom 'input' event when the value has changed */
  onInput?: (event: CustomEvent) => void;

  /** Fires a custom 'change' event when the value updates */
  onChange?: (event: CustomEvent) => void;
}

/**
 * Combobox class
 * ---
 *
 *
 * ### **Events:**
 *  - **input** - Fires a custom 'input' event when the value has changed
 * - **change** - Fires a custom 'change' event when the value updates
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
