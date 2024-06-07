import { Tabs as TabsElement } from '@jupyter/web-components';

export type { TabsElement };

export interface TabsProps
  extends Pick<
    React.AllHTMLAttributes<HTMLElement>,
    | 'children'
    | 'dir'
    | 'hidden'
    | 'id'
    | 'lang'
    | 'slot'
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

  /** A space-separated list of the classes of the element. Classes allows CSS and JavaScript to select and access specific elements via the class selectors or functions like the method `Document.getElementsByClassName()`. */
  className?: string;

  /** Contains a space-separated list of the part names of the element that should be exposed on the host element. */
  exportparts?: string;

  /** Used for labels to link them with their inputs (using input id). */
  htmlFor?: string;

  /** Used to help React identify which items have changed, are added, or are removed within a list. */
  key?: number | string;

  /** Contains a space-separated list of the part names of the element. Part names allows CSS to select and style specific elements in a shadow tree via the ::part pseudo-element. */
  part?: string;

  /** A mutable ref object whose `.current` property is initialized to the passed argument (`initialValue`). The returned object will persist for the full lifetime of the component. */
  ref?: any;

  /** Contains CSS styling declarations to be applied to the element. Note that it is recommended for styles to be defined in a separate file or files. This attribute and the <style> element have mainly the purpose of allowing for quick styling, for example for testing purposes. */
  style?: string | object;

  /** Allows developers to make HTML elements focusable, allow or prevent them from being sequentially focusable (usually with the `Tab` key, hence the name) and determine their relative ordering for sequential focus navigation. */
  tabIndex?: number;

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
