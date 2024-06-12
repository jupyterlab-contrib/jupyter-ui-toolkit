import { TextArea as TextAreaElement } from '@jupyter/web-components';

export type { TextAreaElement };

export interface TextAreaProps
  extends Omit<
    React.AllHTMLAttributes<HTMLTextAreaElement>,
    'form' | 'onChange' | 'onSelect'
  > {
  /**
   * Allows getting a ref to the component instance.
   */
  ref?: React.Ref<TextAreaElement>;

  /** The appearance of the element. */
  appearance?: TextAreaElement['appearance'];

  /** The resize mode of the element. */
  resize?: TextAreaElement['resize'];

  /** The https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id | id of the https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form | form the element is associated to */
  form?: TextAreaElement['form'];

  /** Allows associating a https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist | datalist to the element by https://developer.mozilla.org/en-US/docs/Web/API/Element/id. */
  list?: TextAreaElement['list'];

  /** The name of the element. */
  name?: TextAreaElement['name'];

  /** Sets the placeholder value of the element, generally used to provide a hint to the user. */
  placeholder?: TextAreaElement['placeholder'];

  /** When true, the control will be immutable by user interaction. See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly | readonly HTML attribute} for more information. */
  readOnly?: TextAreaElement['readOnly'];

  /** Indicates that this element should get focus after the page finishes loading. */
  autofocus?: TextAreaElement['autofocus'];

  /** The maximum number of characters a user can enter. */
  maxlength?: TextAreaElement['maxlength'];

  /** The minimum number of characters a user can enter. */
  minlength?: TextAreaElement['minlength'];

  /** Sizes the element horizontally by a number of character columns. */
  cols?: TextAreaElement['cols'];

  /** Sizes the element vertically by a number of character rows. */
  rows?: TextAreaElement['rows'];

  /** Sets if the element is eligible for spell checking
but the UA. */
  spellcheck?: TextAreaElement['spellcheck'];

  /** Emits a custom 'select' event when the textarea emits a select event */
  onSelect?: (event: CustomEvent) => void;

  /** Emits a custom 'change' event when the textarea emits a change event */
  onChange?: (event: CustomEvent) => void;
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
