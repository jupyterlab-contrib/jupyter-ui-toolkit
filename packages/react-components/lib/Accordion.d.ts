import { Accordion as AccordionElement } from '@jupyter/web-components';

export type { AccordionElement };

export interface AccordionProps
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
  /** Controls the expand mode of the Accordion, either allowing
single or multiple item expansion. */
  expandMode?: AccordionElement['expandmode'];

  /** A property which resolves the ComponentPresentation instance
for the current component. */
  $presentation?: AccordionElement['$presentation'];

  /** Sets the template of the element instance. When undefined,
the element will attempt to resolve the template from
the associated presentation or custom element definition. */
  template?: AccordionElement['template'];

  /** Sets the default styles for the element instance. When undefined,
the element will attempt to resolve default styles from
the associated presentation or custom element definition. */
  styles?: AccordionElement['styles'];

  /** Fires a custom 'change' event when the active item changes */
  onChange?: (event: CustomEvent) => void;
}

/**
 * Accordion class
 * ---
 *
 *
 * ### **Events:**
 *  - **change** - Fires a custom 'change' event when the active item changes
 *
 * ### **Methods:**
 *  - **compose(this: _K_, elementDefinition: _T_): _(
 *         overrideDefinition?: OverrideFoundationElementDefinition<T>
 *     ) => FoundationElementRegistry<T, K>_** - Defines an element registry function with a set of element definition defaults.
 *
 * ### **CSS Parts:**
 *  - **item** - The slot for the accordion items
 */
export const Accordion: React.ForwardRefExoticComponent<AccordionProps>;
