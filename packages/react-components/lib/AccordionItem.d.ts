import { AccordionItem as AccordionItemElement } from '@jupyter/web-components';

export type { AccordionItemElement };

export interface AccordionItemProps
  extends Omit<React.AllHTMLAttributes<HTMLElement>, 'onChange'> {
  /**
   * Allows getting a ref to the component instance.
   */
  ref?: React.Ref<AccordionItemElement>;
  /** Configures the https://www.w3.org/TR/wai-aria-1.1/#aria-level | level of the
heading element. */
  headingLevel?: AccordionItemElement['headinglevel'];

  /** The item ID */
  id?: AccordionItemElement['id'];

  /** Expands or collapses the item. */
  expanded?: AccordionItemElement['expanded'];

  /** Fires a custom 'change' event when the button is invoked */
  onChange?: (event: CustomEvent) => void;
}

/**
 * Accordion item class
 * ---
 *
 *
 * ### **Events:**
 *  - **change** - Fires a custom 'change' event when the button is invoked
 *
 * ### **Methods:**
 *  - **compose(this: _K_, elementDefinition: _T_): _(
 *         overrideDefinition?: OverrideFoundationElementDefinition<T>
 *     ) => FoundationElementRegistry<T, K>_** - Defines an element registry function with a set of element definition defaults.
 *
 * ### **Slots:**
 *  - **start** - Content which can be provided between the heading and the icon
 * - **end** - Content which can be provided between the start slot and icon
 * - **heading** - Content which serves as the accordion item heading and text of the expand button
 * - _default_ - The default slot for accordion item content
 * - **expanded-icon** - The expanded icon
 * - **collapsed-icon** - The collapsed icon
 *
 * ### **CSS Parts:**
 *  - **heading** - Wraps the button
 * - **button** - The button which serves to invoke the item
 * - **heading-content** - Wraps the slot for the heading content within the button
 * - **icon** - The icon container
 * - **expanded-icon** - The expanded icon slot
 * - **collapsed-icon** - The collapsed icon
 * - **region** - The wrapper for the accordion item content
 */
export const AccordionItem: React.ForwardRefExoticComponent<AccordionItemProps>;
