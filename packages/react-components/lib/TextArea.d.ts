import { TextArea as TextAreaElement } from "@jupyter/web-components";

export type { TextAreaElement };

export interface TextAreaProps
  extends Pick<
    React.AllHTMLAttributes<HTMLTextAreaElement>,
    | "children"
    | "dir"
    | "hidden"
    | "id"
    | "lang"
    | "slot"
    | "tabIndex"
    | "title"
    | "translate"
    | "name"
    | "required"
    | "value"
    | "disabled"
    | "onClick"
    | "onFocus"
    | "onBlur"
  > {
  /** The appearance of the element. */
  appearance?: TextAreaElement["appearance"];

  /** The resize mode of the element. */
  resize?: TextAreaElement["resize"];

  /** The https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id | id of the https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form | form the element is associated to */
  form?: TextAreaElement["form"];

  /** Allows associating a https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist | datalist to the element by https://developer.mozilla.org/en-US/docs/Web/API/Element/id. */
  list?: TextAreaElement["list"];

  /** The name of the element. */
  name?: TextAreaElement["name"];

  /** Sets the placeholder value of the element, generally used to provide a hint to the user. */
  placeholder?: TextAreaElement["placeholder"];

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
  readOnly?: TextAreaElement["readOnly"];

  /** Indicates that this element should get focus after the page finishes loading. */
  autofocus?: TextAreaElement["autofocus"];

  /** The maximum number of characters a user can enter. */
  maxlength?: TextAreaElement["maxlength"];

  /** The minimum number of characters a user can enter. */
  minlength?: TextAreaElement["minlength"];

  /** Sizes the element horizontally by a number of character columns. */
  cols?: TextAreaElement["cols"];

  /** Sizes the element vertically by a number of character rows. */
  rows?: TextAreaElement["rows"];

  /** Sets if the element is eligible for spell checking
but the UA. */
  spellcheck?: TextAreaElement["spellcheck"];

  /** A property which resolves the ComponentPresentation instance
for the current component. */
  $presentation?: TextAreaElement["$presentation"];

  /** Sets the template of the element instance. When undefined,
the element will attempt to resolve the template from
the associated presentation or custom element definition. */
  template?: TextAreaElement["template"];

  /** Sets the default styles for the element instance. When undefined,
the element will attempt to resolve default styles from
the associated presentation or custom element definition. */
  styles?: TextAreaElement["styles"];

  /** Emits a custom 'change' event when the textarea emits a change event */
  onChange?: (event: CustomEvent) => void;

  /** Emits a custom 'input' event when the textarea emits a change event */
  onInput?: (event: CustomEvent) => void;
}

/**
 * Textarea class
 * ---
 *
 *
 * ### **Events:**
 *  - **change** - Emits a custom 'change' event when the textarea emits a change event
 *
 * ### **Methods:**
 *  - **select(): _void_** - Selects all the text in the text area
 * - **validate(): _void_** - {@inheritDoc (FormAssociated:interface).validate}
 * - **compose(this: _K_, elementDefinition: _T_): _(
 *         overrideDefinition?: OverrideFoundationElementDefinition<T>
 *     ) => FoundationElementRegistry<T, K>_** - Defines an element registry function with a set of element definition defaults.
 *
 * ### **Slots:**
 *  - _default_ - The default slot for the label
 *
 * ### **CSS Parts:**
 *  - **label** - The label
 * - **root** - The element wrapping the control
 * - **control** - The textarea element
 */
export const TextArea: React.ForwardRefExoticComponent<TextAreaProps>;
