import { PickerListItem as PickerListItemElement } from '@jupyter/web-components';

export type { PickerListItemElement };

export interface PickerListItemProps
  extends React.AllHTMLAttributes<HTMLElement> {
  /**
   * Allows getting a ref to the component instance.
   */
  ref?: React.Ref<PickerListItemElement>;

  /** The underlying string value of the item */
  value?: PickerListItemElement['value'];

  /** The template used to render the contents of the list item */
  contentsTemplate?: PickerListItemElement['contentsTemplate'];
}

/**
 * Picker list item class
 *
 * @alpha
 * ---
 *
 *
 * ### **Methods:**
 *  - **compose(this: _K_, elementDefinition: _T_): _(
 *         overrideDefinition?: OverrideFoundationElementDefinition<T>
 *     ) => FoundationElementRegistry<T, K>_** - Defines an element registry function with a set of element definition defaults.
 */
export const PickerListItem: React.ForwardRefExoticComponent<PickerListItemProps>;
