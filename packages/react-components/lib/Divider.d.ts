import { Divider as DividerElement } from '@jupyter/web-components';

export type { DividerElement };

export interface DividerProps extends React.AllHTMLAttributes<HTMLElement> {
  /**
   * Allows getting a ref to the component instance.
   */
  ref?: React.Ref<DividerElement>;

  /** The role of the element. */
  role?: DividerElement['role'];

  /** The orientation of the divider. */
  orientation?: DividerElement['orientation'];
}

/**
 * Divider class
 * ---
 *
 *
 * ### **Methods:**
 *  - **compose(this: _K_, elementDefinition: _T_): _(
 *         overrideDefinition?: OverrideFoundationElementDefinition<T>
 *     ) => FoundationElementRegistry<T, K>_** - Defines an element registry function with a set of element definition defaults.
 */
export const Divider: React.ForwardRefExoticComponent<DividerProps>;
