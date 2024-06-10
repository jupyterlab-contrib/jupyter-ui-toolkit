import { PickerMenuOption as PickerMenuOptionElement } from '@jupyter/web-components';

export type { PickerMenuOptionElement };

export interface PickerMenuOptionProps
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
  /** The underlying string value of the item */
  value?: PickerMenuOptionElement['value'];

  /** The template used to render the contents of the list item */
  contentsTemplate?: PickerMenuOptionElement['contentsTemplate'];

  /** A property which resolves the ComponentPresentation instance
for the current component. */
  $presentation?: PickerMenuOptionElement['$presentation'];

  /** Sets the template of the element instance. When undefined,
the element will attempt to resolve the template from
the associated presentation or custom element definition. */
  template?: PickerMenuOptionElement['template'];

  /** Sets the default styles for the element instance. When undefined,
the element will attempt to resolve default styles from
the associated presentation or custom element definition. */
  styles?: PickerMenuOptionElement['styles'];
}

/**
 * Picker menu options class
 * ---
 *
 *
 * ### **Methods:**
 *  - **compose(this: _K_, elementDefinition: _T_): _(
 *         overrideDefinition?: OverrideFoundationElementDefinition<T>
 *     ) => FoundationElementRegistry<T, K>_** - Defines an element registry function with a set of element definition defaults.
 */
export const PickerMenuOption: React.ForwardRefExoticComponent<PickerMenuOptionProps>;
