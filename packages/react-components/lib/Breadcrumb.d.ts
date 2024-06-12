import { Breadcrumb as BreadcrumbElement } from '@jupyter/web-components';

export type { BreadcrumbElement };

export interface BreadcrumbProps extends React.AllHTMLAttributes<HTMLElement> {
  /**
   * Allows getting a ref to the component instance.
   */
  ref?: React.Ref<BreadcrumbElement>;
}

/**
 * Breadcrumb class
 * ---
 *
 *
 * ### **Methods:**
 *  - **compose(this: _K_, elementDefinition: _T_): _(
 *         overrideDefinition?: OverrideFoundationElementDefinition<T>
 *     ) => FoundationElementRegistry<T, K>_** - Defines an element registry function with a set of element definition defaults.
 *
 * ### **Slots:**
 *  - _default_ - The default slot for the breadcrumb items
 *
 * ### **CSS Parts:**
 *  - **list** - The element wrapping the slotted items
 */
export const Breadcrumb: React.ForwardRefExoticComponent<BreadcrumbProps>;
