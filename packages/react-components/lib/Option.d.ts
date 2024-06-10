import { Option as OptionElement } from '@jupyter/web-components';

export type { OptionElement };

export interface OptionProps extends React.AllHTMLAttributes<HTMLElement> {
  /**
   * Allows getting a ref to the component instance.
   */
  ref?: React.Ref<OptionElement>;

  /** The selected attribute value. This sets the initial selected value. */
  selected?: boolean;

  /** The initial value of the option. This value sets the `value` property
only when the `value` property has not been explicitly set. */
  value?: OptionElement['value'];

  /** The checked state is used when the parent listbox is in multiple selection mode.
To avoid accessibility conflicts, the checked state should not be present in
single selection mode. */
  checked?: OptionElement['checked'];

  /** The defaultSelected state of the option. */
  defaultSelected?: OptionElement['defaultSelected'];

  /** The disabled state of the option. */
  disabled?: OptionElement['disabled'];

  /** The selected attribute value. This sets the initial selected value. */
  selectedAttribute?: OptionElement['selectedAttribute'];

  /** Track whether the value has been changed from the initial value */
  dirtyValue?: OptionElement['dirtyValue'];
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
export const Option: React.ForwardRefExoticComponent<OptionProps>;
