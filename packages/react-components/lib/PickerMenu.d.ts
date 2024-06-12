import { PickerMenu as PickerMenuElement } from '@jupyter/web-components';

export type { PickerMenuElement };

export interface PickerMenuProps extends React.AllHTMLAttributes<HTMLElement> {
  /**
   * Allows getting a ref to the component instance.
   */
  ref?: React.Ref<PickerMenuElement>;

  /** Text to display to assistive technology when
suggestions are available */
  suggestionsAvailableText?: PickerMenuElement['suggestionsAvailableText'];
}

/**
 * Picker menu class
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
export const PickerMenu: React.ForwardRefExoticComponent<PickerMenuProps>;
