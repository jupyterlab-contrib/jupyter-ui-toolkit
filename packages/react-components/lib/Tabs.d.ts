import { Tabs as TabsElement } from '@jupyter/web-components';

export type { TabsElement };

export interface TabsProps
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
  /** The orientation */
  orientation?: TabsElement['orientation'];

  /** The id of the active tab */
  activeid?: TabsElement['activeid'];

  /** Whether or not to show the active indicator */
  activeindicator?: TabsElement['activeindicator'];

  /** A reference to the active tab */
  activetab?: TabsElement['activetab'];

  /** A property which resolves the ComponentPresentation instance
for the current component. */
  $presentation?: TabsElement['$presentation'];

  /** Sets the template of the element instance. When undefined,
the element will attempt to resolve the template from
the associated presentation or custom element definition. */
  template?: TabsElement['template'];

  /** Sets the default styles for the element instance. When undefined,
the element will attempt to resolve default styles from
the associated presentation or custom element definition. */
  styles?: TabsElement['styles'];

  /** Fires a custom 'change' event when a tab is clicked or during keyboard navigation */
  onChange?: (event: CustomEvent) => void;
}

/**
 * Tabs class
 * ---
 *
 *
 * ### **Events:**
 *  - **change** - Fires a custom 'change' event when a tab is clicked or during keyboard navigation
 *
 * ### **Methods:**
 *  - **adjust(adjustment: _number_): _void_** - The adjust method for FASTTabs
 * - **compose(this: _K_, elementDefinition: _T_): _(
 *         overrideDefinition?: OverrideFoundationElementDefinition<T>
 *     ) => FoundationElementRegistry<T, K>_** - Defines an element registry function with a set of element definition defaults.
 *
 * ### **Slots:**
 *  - **start** - Content which can be provided before the tablist element
 * - **end** - Content which can be provided after the tablist element
 * - **tab** - The slot for tabs
 * - **tabpanel** - The slot for tabpanels
 *
 * ### **CSS Parts:**
 *  - **tablist** - The element wrapping for the tabs
 * - **tab** - The tab slot
 * - **activeIndicator** - The visual indicator
 * - **tabpanel** - The tabpanel slot
 */
export const Tabs: React.ForwardRefExoticComponent<TabsProps>;
