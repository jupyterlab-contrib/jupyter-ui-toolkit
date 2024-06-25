import {
  Select as SelectElement,
  type SelectScale
} from '@jupyter/web-components';

export type { SelectElement, SelectScale };

export interface SelectProps
  extends Omit<
    React.AllHTMLAttributes<HTMLInputElement>,
    'onChange' | 'onInput'
  > {
  /**
   * Allows getting a ref to the component instance.
   */
  ref?: React.Ref<SelectElement>;

  /** Whether the select has a compact layout or not. */
  autowidth?: boolean;

  /** Whether the select has a compact layout or not.
   * @deprecated Use {@link scale} equals to `xsmall` instead.
   */
  minimal?: boolean;

  /**
   * Scale the element compared to the theme size.
   */
  scale?: SelectScale;

  /** The open attribute. */
  open?: boolean;

  /** Reflects the placement for the listbox when the select is open. */
  position?: SelectElement['position'];

  /** Whether the select has a compact layout or not. */
  autoWidth?: SelectElement['autoWidth'];

  /** The value property. */
  value?: SelectElement['value'];

  /** The value displayed on the button. */
  displayValue?: SelectElement['displayValue'];

  /** Indicates if the listbox is in multi-selection mode. */
  multiple?: SelectElement['multiple'];

  /** The maximum number of options to display. */
  size?: SelectElement['size'];

  /** The number of options. */
  length?: SelectElement['length'];

  /** The list of options. */
  options?: SelectElement['options'];

  /** The disabled state of the listbox. */
  disabled?: SelectElement['disabled'];

  /** The index of the selected option. */
  selectedIndex?: SelectElement['selectedIndex'];

  /** A collection of the selected options. */
  selectedOptions?: SelectElement['selectedOptions'];

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
