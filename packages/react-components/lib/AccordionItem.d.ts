import { AccordionItem as AccordionItemElement } from '@jupyter/web-components';

export type { AccordionItemElement };

export interface AccordionItemProps
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
  /** Configures the https://www.w3.org/TR/wai-aria-1.1/#aria-level | level of the
heading element. */
  headingLevel?: AccordionItemElement['headingLevel'];

  /** The item ID */
  id?: AccordionItemElement['id'];

  /** Expands or collapses the item. */
  expanded?: AccordionItemElement['expanded'];

  /** A property which resolves the ComponentPresentation instance
for the current component. */
  $presentation?: AccordionItemElement['$presentation'];

  /** Sets the template of the element instance. When undefined,
the element will attempt to resolve the template from
the associated presentation or custom element definition. */
  template?: AccordionItemElement['template'];

  /** Sets the default styles for the element instance. When undefined,
the element will attempt to resolve default styles from
the associated presentation or custom element definition. */
  styles?: AccordionItemElement['styles'];

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
