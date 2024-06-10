import { Badge as BadgeElement } from '@jupyter/web-components';

export type { BadgeElement };

export interface BadgeProps
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
  /** Indicates the badge should have a filled style. */
  fill?: BadgeElement['fill'];

  /** Indicates the badge should have a filled style. */
  color?: BadgeElement['color'];

  /** Indicates the element should be circular */
  circular?: BadgeElement['circular'];

  /** A property which resolves the ComponentPresentation instance
for the current component. */
  $presentation?: BadgeElement['$presentation'];

  /** Sets the template of the element instance. When undefined,
the element will attempt to resolve the template from
the associated presentation or custom element definition. */
  template?: BadgeElement['template'];

  /** Sets the default styles for the element instance. When undefined,
the element will attempt to resolve default styles from
the associated presentation or custom element definition. */
  styles?: BadgeElement['styles'];
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
