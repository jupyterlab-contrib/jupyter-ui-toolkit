import { Menu as MenuElement } from '@jupyter/web-components';

export type { MenuElement };

export interface MenuProps extends React.AllHTMLAttributes<HTMLElement> {
  /**
   * Allows getting a ref to the component instance.
   */
  ref?: React.Ref<MenuElement>;
}

/**
 * Menu class
 * ---
 *
 *
 * ### **Methods:**
 *  - **focus(): _void_** - Focuses the first item in the menu.
 * - **collapseExpandedItem(): _void_** - Collapses any expanded menu items.
 * - **compose(this: _K_, elementDefinition: _T_): _(
 *         overrideDefinition?: OverrideFoundationElementDefinition<T>
 *     ) => FoundationElementRegistry<T, K>_** - Defines an element registry function with a set of element definition defaults.
 *
 * ### **Slots:**
 *  - _default_ - The default slot for the menu items
 */
export const Menu: React.ForwardRefExoticComponent<MenuProps>;
