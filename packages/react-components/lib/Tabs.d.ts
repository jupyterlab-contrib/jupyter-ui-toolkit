import { Tabs as TabsElement } from '@jupyter/web-components';

export type { TabsElement };

export interface TabsProps
  extends Omit<React.AllHTMLAttributes<HTMLElement>, 'onChange'> {
  /**
   * Allows getting a ref to the component instance.
   */
  ref?: React.Ref<TabsElement>;

  /** The orientation */
  orientation?: TabsElement['orientation'];

  /** The id of the active tab */
  activeid?: TabsElement['activeid'];

  /** Whether or not to show the active indicator */
  activeindicator?: TabsElement['activeindicator'];

  /** A reference to the active tab */
  activetab?: TabsElement['activetab'];

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
