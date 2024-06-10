import { Skeleton as SkeletonElement } from '@jupyter/web-components';

export type { SkeletonElement };

export interface SkeletonProps
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
  /** Indicates the Skeleton should have a filled style. */
  fill?: SkeletonElement['fill'];

  /** Indicates what the shape of the Skeleton should be. */
  shape?: SkeletonElement['shape'];

  /** Indicates that the component can accept a pattern URL. */
  pattern?: SkeletonElement['pattern'];

  /** Indicates that the component has an activated shimmer effect */
  shimmer?: SkeletonElement['shimmer'];

  /** A property which resolves the ComponentPresentation instance
for the current component. */
  $presentation?: SkeletonElement['$presentation'];

  /** Sets the template of the element instance. When undefined,
the element will attempt to resolve the template from
the associated presentation or custom element definition. */
  template?: SkeletonElement['template'];

  /** Sets the default styles for the element instance. When undefined,
the element will attempt to resolve default styles from
the associated presentation or custom element definition. */
  styles?: SkeletonElement['styles'];
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
