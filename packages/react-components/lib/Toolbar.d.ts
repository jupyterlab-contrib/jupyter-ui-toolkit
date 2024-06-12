import { Toolbar as ToolbarElement } from '@jupyter/web-components';

export type { ToolbarElement };

export interface ToolbarProps extends React.AllHTMLAttributes<HTMLElement> {
  /**
   * Allows getting a ref to the component instance.
   */
  ref?: React.Ref<ToolbarElement>;
}

/**
 *
 * ---
 *
 *
 * ### **Methods:**
 *  - **compose(this: _K_, elementDefinition: _T_): _(
 *         overrideDefinition?: OverrideFoundationElementDefinition<T>
 *     ) => FoundationElementRegistry<T, K>_** - Defines an element registry function with a set of element definition defaults.
 */
export const Toolbar: React.ForwardRefExoticComponent<ToolbarProps>;
