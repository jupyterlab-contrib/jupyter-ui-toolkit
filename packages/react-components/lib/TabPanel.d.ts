import { TabPanel as TabPanelElement } from '@jupyter/web-components';

export type { TabPanelElement };

export interface TabPanelProps extends React.AllHTMLAttributes<HTMLElement> {
  /**
   * Allows getting a ref to the component instance.
   */
  ref?: React.Ref<TabPanelElement>;
}

/**
 * Tab panel class
 * ---
 *
 *
 * ### **Methods:**
 *  - **compose(this: _K_, elementDefinition: _T_): _(
 *         overrideDefinition?: OverrideFoundationElementDefinition<T>
 *     ) => FoundationElementRegistry<T, K>_** - Defines an element registry function with a set of element definition defaults.
 *
 * ### **Slots:**
 *  - _default_ - The default slot for the tabpanel content
 */
export const TabPanel: React.ForwardRefExoticComponent<TabPanelProps>;
