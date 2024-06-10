import { Option as OptionElement } from '@jupyter/web-components';

export type { OptionElement };

export interface OptionProps
  extends Pick<
    React.AllHTMLAttributes<HTMLElement>,
    | 'children'
    | 'className'
    | 'dir'
    | 'exportparts'
    | 'htmlFor'
    | 'hidden'
    | 'id'
    | 'key'
    | 'lang'
    | 'part'
    | 'ref'
    | 'slot'
    | 'style'
    | 'tabIndex'
    | 'title'
    | 'translate'
    | 'onClick'
    | 'onFocus'
    | 'onBlur'
  > {
  /** The selected attribute value. This sets the initial selected value. */
  selected?: boolean;

  /** The initial value of the option. This value sets the `value` property
only when the `value` property has not been explicitly set. */
  value?: OptionElement['value'];

  /** The checked state is used when the parent listbox is in multiple selection mode.
To avoid accessibility conflicts, the checked state should not be present in
single selection mode. */
  checked?: OptionElement['checked'];

  /** The default slotted content. */
  content?: OptionElement['content'];

  /** The defaultSelected state of the option. */
  defaultSelected?: OptionElement['defaultSelected'];

  /** The disabled state of the option. */
  disabled?: OptionElement['disabled'];

  /** The selected attribute value. This sets the initial selected value. */
  selectedAttribute?: OptionElement['selectedAttribute'];

  /** Track whether the value has been changed from the initial value */
  dirtyValue?: OptionElement['dirtyValue'];

  /** A property which resolves the ComponentPresentation instance
for the current component. */
  $presentation?: OptionElement['$presentation'];

  /** Sets the template of the element instance. When undefined,
the element will attempt to resolve the template from
the associated presentation or custom element definition. */
  template?: OptionElement['template'];

  /** Sets the default styles for the element instance. When undefined,
the element will attempt to resolve default styles from
the associated presentation or custom element definition. */
  styles?: OptionElement['styles'];
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
