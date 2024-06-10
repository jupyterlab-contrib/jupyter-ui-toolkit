import { Listbox as ListboxElement } from '@jupyter/web-components';

export type { ListboxElement };

export interface ListboxProps
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
  /** Indicates if the listbox is in multi-selection mode. */
  multiple?: ListboxElement['multiple'];

  /** The maximum number of options to display. */
  size?: ListboxElement['size'];

  /** The number of options. */
  length?: ListboxElement['length'];

  /** The list of options. */
  options?: ListboxElement['options'];

  /** The disabled state of the listbox. */
  disabled?: ListboxElement['disabled'];

  /** The index of the selected option. */
  selectedIndex?: ListboxElement['selectedIndex'];

  /** A collection of the selected options. */
  selectedOptions?: ListboxElement['selectedOptions'];

  /** A property which resolves the ComponentPresentation instance
for the current component. */
  $presentation?: ListboxElement['$presentation'];

  /** Sets the template of the element instance. When undefined,
the element will attempt to resolve the template from
the associated presentation or custom element definition. */
  template?: ListboxElement['template'];

  /** Sets the default styles for the element instance. When undefined,
the element will attempt to resolve default styles from
the associated presentation or custom element definition. */
  styles?: ListboxElement['styles'];

  /** Fires a custom 'change' event when the value has changed */
  onChange?: (event: CustomEvent) => void;
}

/**
 * Listbox class
 * ---
 *
 *
 * ### **Events:**
 *  - **change** - Fires a custom 'change' event when the value has changed
 *
 * ### **Methods:**
 *  - **setSelectedOptions()** - Sets an option as selected and gives it focus.
 * - **selectFirstOption(): _void_** - Moves focus to the first selectable option.
 * - **compose(this: _K_, elementDefinition: _T_): _(
 *         overrideDefinition?: OverrideFoundationElementDefinition<T>
 *     ) => FoundationElementRegistry<T, K>_** - Defines an element registry function with a set of element definition defaults.
 *
 * ### **Slots:**
 *  - _default_ - The default slot for the listbox options
 */
export const Listbox: React.ForwardRefExoticComponent<ListboxProps>;
