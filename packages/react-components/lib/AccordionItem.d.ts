import { AccordionItem as AccordionItemElement } from '@jupyter/web-components';

export type { AccordionItemElement };

export interface AccordionItemProps
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
  /** Configures the https://www.w3.org/TR/wai-aria-1.1/#aria-level | level of the
heading element. */
  headingLevel?: AccordionItemElement['headinglevel'];

  /** The item ID */
  id?: AccordionItemElement['id'];

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
