import { RadioGroup as RadioGroupElement } from '@jupyter/web-components';

export type { RadioGroupElement };

export interface RadioGroupProps
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
  /** When true, the child radios will be immutable by user interaction. See https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly | readonly HTML attribute for more information. */
  readonly?: boolean;

  /** Disables the radio group and child radios. */
  disabled?: boolean;

  /** The name of the radio group. Setting this value will set the name value
for all child radio elements. */
  name?: RadioGroupElement['name'];

  /** The value of the checked radio */
  value?: RadioGroupElement['value'];

  /** The orientation of the group */
  orientation?: RadioGroupElement['orientation'];

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

  /** When true, the child radios will be immutable by user interaction. See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly | readonly HTML attribute} for more information. */
  readOnly?: RadioGroupElement['readOnly'];

  /** A property which resolves the ComponentPresentation instance
for the current component. */
  $presentation?: RadioGroupElement['$presentation'];

  /** Sets the template of the element instance. When undefined,
the element will attempt to resolve the template from
the associated presentation or custom element definition. */
  template?: RadioGroupElement['template'];

  /** Sets the default styles for the element instance. When undefined,
the element will attempt to resolve default styles from
the associated presentation or custom element definition. */
  styles?: RadioGroupElement['styles'];

  /** Fires a custom 'change' event when the value changes */
  onChange?: (event: CustomEvent) => void;
}

/**
 * RadioGroup class
 * ---
 *
 *
 * ### **Events:**
 *  - **change** - Fires a custom 'change' event when the value changes
 *
 * ### **Methods:**
 *  - **compose(this: _K_, elementDefinition: _T_): _(
 *         overrideDefinition?: OverrideFoundationElementDefinition<T>
 *     ) => FoundationElementRegistry<T, K>_** - Defines an element registry function with a set of element definition defaults.
 *
 * ### **Slots:**
 *  - **label** - The slot for the label
 * - _default_ - The default slot for radio buttons
 *
 * ### **CSS Parts:**
 *  - **positioning-region** - The positioning region for laying out the radios
 */
export const RadioGroup: React.ForwardRefExoticComponent<RadioGroupProps>;
