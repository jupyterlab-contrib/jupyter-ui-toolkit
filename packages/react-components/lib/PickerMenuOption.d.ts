import { PickerMenuOption as PickerMenuOptionElement } from '@jupyter/web-components';

export type { PickerMenuOptionElement };

export interface PickerMenuOptionProps
  extends React.AllHTMLAttributes<HTMLElement> {
  /**
   * Allows getting a ref to the component instance.
   */
  ref?: React.Ref<PickerMenuOptionElement>;

  /** The underlying string value of the item */
  value?: PickerMenuOptionElement['value'];

  /** The template used to render the contents of the list item */
  contentsTemplate?: PickerMenuOptionElement['contentsTemplate'];
}

/**
 * Picker menu options class
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
export const PickerMenuOption: React.ForwardRefExoticComponent<PickerMenuOptionProps>;
