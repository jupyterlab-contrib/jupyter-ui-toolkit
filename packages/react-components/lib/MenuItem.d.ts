import { MenuItem as MenuItemElement } from '@jupyter/web-components';

export type { MenuItemElement };

export interface MenuItemProps
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
  /** The role of the element. */
  role?: MenuItemElement['role'];

  /** The disabled state of the element. */
  disabled?: MenuItemElement['disabled'];

  /** The expanded state of the element. */
  expanded?: MenuItemElement['expanded'];

  /** The checked value of the element. */
  checked?: MenuItemElement['checked'];

  /** A property which resolves the ComponentPresentation instance
for the current component. */
  $presentation?: MenuItemElement['$presentation'];

  /** Sets the template of the element instance. When undefined,
the element will attempt to resolve the template from
the associated presentation or custom element definition. */
  template?: MenuItemElement['template'];

  /** Sets the default styles for the element instance. When undefined,
the element will attempt to resolve default styles from
the associated presentation or custom element definition. */
  styles?: MenuItemElement['styles'];

  /** Fires a custom 'expanded-change' event when the expanded state changes */
  onExpandedChange?: (event: CustomEvent) => void;

  /** Fires a custom 'change' event when a non-submenu item with a role of `menuitemcheckbox`, `menuitemradio`, or `menuitem` is invoked */
  onChange?: (event: CustomEvent) => void;
}

/**
 * Menu item class
 * ---
 *
 *
 * ### **Events:**
 *  - **expanded-change** - Fires a custom 'expanded-change' event when the expanded state changes
 * - **change** - Fires a custom 'change' event when a non-submenu item with a role of `menuitemcheckbox`, `menuitemradio`, or `menuitem` is invoked
 *
 * ### **Methods:**
 *  - **compose(this: _K_, elementDefinition: _T_): _(
 *         overrideDefinition?: OverrideFoundationElementDefinition<T>
 *     ) => FoundationElementRegistry<T, K>_** - Defines an element registry function with a set of element definition defaults.
 *
 * ### **Slots:**
 *  - **checked-indicator** - The checked indicator
 * - **radio-indicator** - The radio indicator
 * - **start** - Content which can be provided before the menu item content
 * - **end** - Content which can be provided after the menu item content
 * - _default_ - The default slot for menu item content
 * - **expand-collapse-indicator** - The expand/collapse indicator
 * - **submenu** - Used to nest menu's within menu items
 *
 * ### **CSS Parts:**
 *  - **input-container** - The element representing the visual checked or radio indicator
 * - **checkbox** - The element wrapping the `menuitemcheckbox` indicator
 * - **radio** - The element wrapping the `menuitemradio` indicator
 * - **content** - The element wrapping the menu item content
 * - **expand-collapse-glyph-container** - The element wrapping the expand collapse element
 * - **expand-collapse** - The expand/collapse element
 * - **submenu-region** - The container for the submenu, used for positioning
 */
export const MenuItem: React.ForwardRefExoticComponent<MenuItemProps>;
