import { PickerMenu as PickerMenuElement } from '@jupyter/web-components';

export type { PickerMenuElement };

export interface PickerMenuProps
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
  /** Text to display to assistive technology when
suggestions are available */
  suggestionsAvailableText?: PickerMenuElement['suggestionsAvailableText'];

  /** A property which resolves the ComponentPresentation instance
for the current component. */
  $presentation?: PickerMenuElement['$presentation'];

  /** Sets the template of the element instance. When undefined,
the element will attempt to resolve the template from
the associated presentation or custom element definition. */
  template?: PickerMenuElement['template'];

  /** Sets the default styles for the element instance. When undefined,
the element will attempt to resolve default styles from
the associated presentation or custom element definition. */
  styles?: PickerMenuElement['styles'];
}

/**
 * Picker menu class
 * ---
 *
 *
 * ### **Methods:**
 *  - **compose(this: _K_, elementDefinition: _T_): _(
 *         overrideDefinition?: OverrideFoundationElementDefinition<T>
 *     ) => FoundationElementRegistry<T, K>_** - Defines an element registry function with a set of element definition defaults.
 */
export const PickerMenu: React.ForwardRefExoticComponent<PickerMenuProps>;
