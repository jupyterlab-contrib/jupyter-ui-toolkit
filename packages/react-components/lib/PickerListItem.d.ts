import { PickerListItem as PickerListItemElement } from '@jupyter/web-components';

export type { PickerListItemElement };

export interface PickerListItemProps
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
  value?: PickerListItemElement['value'];

  /** The template used to render the contents of the list item */
  contentsTemplate?: PickerListItemElement['contentsTemplate'];

  /** A property which resolves the ComponentPresentation instance
for the current component. */
  $presentation?: PickerListItemElement['$presentation'];

  /** Sets the template of the element instance. When undefined,
the element will attempt to resolve the template from
the associated presentation or custom element definition. */
  template?: PickerListItemElement['template'];

  /** Sets the default styles for the element instance. When undefined,
the element will attempt to resolve default styles from
the associated presentation or custom element definition. */
  styles?: PickerListItemElement['styles'];
}

/**
 * Picker list item class
 * ---
 *
 *
 * ### **Methods:**
 *  - **compose(this: _K_, elementDefinition: _T_): _(
 *         overrideDefinition?: OverrideFoundationElementDefinition<T>
 *     ) => FoundationElementRegistry<T, K>_** - Defines an element registry function with a set of element definition defaults.
 */
export const PickerListItem: React.ForwardRefExoticComponent<PickerListItemProps>;
