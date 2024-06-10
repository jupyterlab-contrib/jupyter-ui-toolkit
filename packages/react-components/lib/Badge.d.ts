import { Badge as BadgeElement } from '@jupyter/web-components';

export type { BadgeElement };

export interface BadgeProps extends React.AllHTMLAttributes<HTMLElement> {
  /**
   * Allows getting a ref to the component instance.
   */
  ref?: React.Ref<BadgeElement>;

  /** Indicates the badge should have a filled style. */
  fill?: BadgeElement['fill'];

  /** Indicates the badge should have a filled style. */
  color?: BadgeElement['color'];

  /** Indicates the element should be circular */
  circular?: BadgeElement['circular'];
}

/**
 * Badge class
 * ---
 *
 *
 * ### **Methods:**
 *  - **compose(this: _K_, elementDefinition: _T_): _(
 *         overrideDefinition?: OverrideFoundationElementDefinition<T>
 *     ) => FoundationElementRegistry<T, K>_** - Defines an element registry function with a set of element definition defaults.
 *
 * ### **Slots:**
 *  - _default_ - The default slot for the badge
 *
 * ### **CSS Parts:**
 *  - **control** - The element representing the badge, which wraps the default slot
 */
export const Badge: React.ForwardRefExoticComponent<BadgeProps>;
