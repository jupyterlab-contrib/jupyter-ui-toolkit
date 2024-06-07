import { Radio as RadioElement } from '@jupyter/web-components';

export type { RadioElement };

export interface RadioProps
  extends Pick<
    React.AllHTMLAttributes<HTMLInputElement>,
    | 'children'
    | 'dir'
    | 'hidden'
    | 'id'
    | 'lang'
    | 'slot'
    | 'tabIndex'
    | 'title'
    | 'translate'
    | 'name'
    | 'required'
    | 'value'
    | 'disabled'
    | 'checked'
    | 'onClick'
    | 'onFocus'
    | 'onBlur'
  > {
  /** When true, the control will be immutable by user interaction. See https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly | readonly HTML attribute for more information. */
  readonly?: boolean;

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

  /** When true, the control will be immutable by user interaction. See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly | readonly HTML attribute} for more information. */
  readOnly?: RadioElement['readOnly'];

  /** The name of the radio. See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname | name attribute} for more info. */
  name?: RadioElement['name'];

  /** A property which resolves the ComponentPresentation instance
for the current component. */
  $presentation?: RadioElement['$presentation'];

  /** Sets the template of the element instance. When undefined,
the element will attempt to resolve the template from
the associated presentation or custom element definition. */
  template?: RadioElement['template'];

  /** Sets the default styles for the element instance. When undefined,
the element will attempt to resolve default styles from
the associated presentation or custom element definition. */
  styles?: RadioElement['styles'];

  /** Emits a custom change event when the checked state changes */
  onChange?: (event: CustomEvent) => void;
}

/**
 * Radio class
 * ---
 *
 *
 * ### **Events:**
 *  - **change** - Emits a custom change event when the checked state changes
 *
 * ### **Methods:**
 *  - **compose(this: _K_, elementDefinition: _T_): _(
 *         overrideDefinition?: OverrideFoundationElementDefinition<T>
 *     ) => FoundationElementRegistry<T, K>_** - Defines an element registry function with a set of element definition defaults.
 *
 * ### **Slots:**
 *  - **checked-indicator** - The checked indicator
 * - _default_ - The default slot for the label
 *
 * ### **CSS Parts:**
 *  - **control** - The element representing the visual radio control
 * - **label** - The label
 */
export const Radio: React.ForwardRefExoticComponent<RadioProps>;
