import { TabPanel as TabPanelElement } from '@jupyter/web-components';

export type { TabPanelElement };

export interface TabPanelProps
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
  /** A property which resolves the ComponentPresentation instance
for the current component. */
  $presentation?: TabPanelElement['$presentation'];

  /** Sets the template of the element instance. When undefined,
the element will attempt to resolve the template from
the associated presentation or custom element definition. */
  template?: TabPanelElement['template'];

  /** Sets the default styles for the element instance. When undefined,
the element will attempt to resolve default styles from
the associated presentation or custom element definition. */
  styles?: TabPanelElement['styles'];
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
