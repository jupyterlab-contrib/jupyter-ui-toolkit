import { Skeleton as SkeletonElement } from '@jupyter/web-components';

export type { SkeletonElement };

export interface SkeletonProps extends React.AllHTMLAttributes<HTMLElement> {
  /**
   * Allows getting a ref to the component instance.
   */
  ref?: React.Ref<SkeletonElement>;

  /** Indicates the Skeleton should have a filled style. */
  fill?: SkeletonElement['fill'];

  /** Indicates what the shape of the Skeleton should be. */
  shape?: SkeletonElement['shape'];

  /** Indicates that the component can accept a pattern URL. */
  pattern?: SkeletonElement['pattern'];

  /** Indicates that the component has an activated shimmer effect */
  shimmer?: SkeletonElement['shimmer'];
}

/**
 * Skeleton class
 * ---
 *
 *
 * ### **Methods:**
 *  - **compose(this: _K_, elementDefinition: _T_): _(
 *         overrideDefinition?: OverrideFoundationElementDefinition<T>
 *     ) => FoundationElementRegistry<T, K>_** - Defines an element registry function with a set of element definition defaults.
 *
 * ### **Slots:**
 *  - _default_ - The default slot
 */
export const Skeleton: React.ForwardRefExoticComponent<SkeletonProps>;
