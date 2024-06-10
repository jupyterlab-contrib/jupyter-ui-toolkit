import { Accordion as AccordionElement } from '@jupyter/web-components';

export type { AccordionElement };

export interface AccordionProps
  extends Omit<React.AllHTMLAttributes<HTMLElement>, 'onChange'> {
  /**
   * Allows getting a ref to the component instance.
   */
  ref?: React.Ref<AccordionElement>;
  /** Controls the expand mode of the Accordion, either allowing
single or multiple item expansion. */
  expandMode?: AccordionElement['expandmode'];

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
