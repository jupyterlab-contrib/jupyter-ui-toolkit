import { TextField as TextFieldElement } from '@jupyter/web-components';

export type { TextFieldElement };

export interface TextFieldProps
  extends Omit<
    React.AllHTMLAttributes<HTMLInputElement>,
    'onChange' | 'onInput'
  > {
  /**
   * Allows getting a ref to the component instance.
   */
  ref?: React.Ref<TextFieldElement>;

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
