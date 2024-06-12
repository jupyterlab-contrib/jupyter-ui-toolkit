import { PickerList as PickerListElement } from '@jupyter/web-components';

export type { PickerListElement };

export interface PickerListProps extends React.AllHTMLAttributes<HTMLElement> {
  /**
   * Allows getting a ref to the component instance.
   */
  ref?: React.Ref<PickerListElement>;
}

/**
 * Picker list class
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
export const PickerList: React.ForwardRefExoticComponent<PickerListProps>;
