import { TextField as TextFieldElement } from '@jupyter/web-components';

export type { TextFieldElement };

export interface TextFieldProps
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
    | 'onClick'
    | 'onFocus'
    | 'onBlur'
  > {
  /** When true, the control will be immutable by user interaction. See https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly | readonly HTML attribute for more information. */
  readonly?: boolean;

  /** The appearance of the element. */
  appearance?: TextFieldElement['appearance'];

  /** Sets the placeholder value of the element, generally used to provide a hint to the user. */
  placeholder?: TextFieldElement['placeholder'];

  /** Allows setting a type or mode of text. */
  type?: TextFieldElement['type'];

  /** Allows associating a https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist | datalist to the element by https://developer.mozilla.org/en-US/docs/Web/API/Element/id. */
  list?: TextFieldElement['list'];

  /** A regular expression that the value must match to pass validation. */
  pattern?: TextFieldElement['pattern'];

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
  readOnly?: TextFieldElement['readOnly'];

  /** Indicates that this element should get focus after the page finishes loading. See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefautofocus | autofocus HTML attribute} for more information. */
  autofocus?: TextFieldElement['autofocus'];

  /** The maximum number of characters a user can enter. */
  maxlength?: TextFieldElement['maxlength'];

  /** The minimum number of characters a user can enter. */
  minlength?: TextFieldElement['minlength'];

  /** Sets the width of the element to a specified number of characters. */
  size?: TextFieldElement['size'];

  /** Controls whether or not to enable spell checking for the input field, or if the default spell checking configuration should be used. */
  spellcheck?: TextFieldElement['spellcheck'];

  /** A property which resolves the ComponentPresentation instance
for the current component. */
  $presentation?: TextFieldElement['$presentation'];

  /** Sets the template of the element instance. When undefined,
the element will attempt to resolve the template from
the associated presentation or custom element definition. */
  template?: TextFieldElement['template'];

  /** Sets the default styles for the element instance. When undefined,
the element will attempt to resolve default styles from
the associated presentation or custom element definition. */
  styles?: TextFieldElement['styles'];

  /** Fires a custom 'change' event when the value has changed */
  onChange?: (event: CustomEvent) => void;

  /** Fires a custom 'input' event when the value has changed */
  onInput?: (event: CustomEvent) => void;
}

/**
 * Text field class
 * ---
 *
 *
 * ### **Events:**
 *  - **change** - Fires a custom 'change' event when the value has changed
 *
 * ### **Methods:**
 *  - **select(): _void_** - Selects all the text in the text field
 * - **validate(): _void_** - {@inheritDoc (FormAssociated:interface).validate}
 * - **compose(this: _K_, elementDefinition: _T_): _(
 *         overrideDefinition?: OverrideFoundationElementDefinition<T>
 *     ) => FoundationElementRegistry<T, K>_** - Defines an element registry function with a set of element definition defaults.
 *
 * ### **Slots:**
 *  - **start** - Content which can be provided before the number field input
 * - **end** - Content which can be provided after the number field input
 * - _default_ - The default slot for the label
 *
 * ### **CSS Parts:**
 *  - **label** - The label
 * - **root** - The element wrapping the control, including start and end slots
 * - **control** - The text field element
 */
export const TextField: React.ForwardRefExoticComponent<TextFieldProps>;
