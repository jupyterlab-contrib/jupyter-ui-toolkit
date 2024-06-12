import { NumberField as NumberFieldElement } from '@jupyter/web-components';

export type { NumberFieldElement };

export interface NumberFieldProps
  extends Omit<
    React.AllHTMLAttributes<HTMLInputElement>,
    'onChange' | 'onInput'
  > {
  /**
   * Allows getting a ref to the component instance.
   */
  ref?: React.Ref<NumberFieldElement>;

  /** When true, the control will be immutable by user interaction. See https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly | readonly HTML attribute for more information. */
  readonly?: boolean;

  /** When true, spin buttons will not be rendered */
  hideStep?: boolean;

  /** The appearance of the element. */
  appearance?: NumberFieldElement['appearance'];

  /** Sets the placeholder value of the element, generally used to provide a hint to the user. */
  placeholder?: NumberFieldElement['placeholder'];

  /** Allows associating a https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist | datalist to the element by https://developer.mozilla.org/en-US/docs/Web/API/Element/id. */
  list?: NumberFieldElement['list'];

  /** When true, the control will be immutable by user interaction. See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly | readonly HTML attribute} for more information. */
  readOnly?: NumberFieldElement['readOnly'];

  /** Indicates that this element should get focus after the page finishes loading. See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefautofocus | autofocus HTML attribute} for more information. */
  autofocus?: NumberFieldElement['autofocus'];

  /** The maximum number of characters a user can enter. */
  maxlength?: NumberFieldElement['maxlength'];

  /** The minimum number of characters a user can enter. */
  minlength?: NumberFieldElement['minlength'];

  /** Sets the width of the element to a specified number of characters. */
  size?: NumberFieldElement['size'];

  /** Amount to increment or decrement the value by */
  step?: NumberFieldElement['step'];

  /** The maximum the value can be */
  max?: NumberFieldElement['max'];

  /** The minimum the value can be */
  min?: NumberFieldElement['min'];

  /** Fires a custom 'input' event when the value has changed */
  onInput?: (event: CustomEvent) => void;

  /** Fires a custom 'change' event when the value has changed */
  onChange?: (event: CustomEvent) => void;
}

/**
 * Number field class
 * ---
 *
 *
 * ### **Events:**
 *  - **input** - Fires a custom 'input' event when the value has changed
 * - **change** - Fires a custom 'change' event when the value has changed
 *
 * ### **Methods:**
 *  - **validate(): _void_** - {@inheritDoc (FormAssociated:interface).validate}
 * - **stepUp(): _void_** - Increments the value using the step value
 * - **stepDown(): _void_** - Decrements the value using the step value
 * - **select(): _void_** - Selects all the text in the number field
 * - **compose(this: _K_, elementDefinition: _T_): _(
 *         overrideDefinition?: OverrideFoundationElementDefinition<T>
 *     ) => FoundationElementRegistry<T, K>_** - Defines an element registry function with a set of element definition defaults.
 *
 * ### **Slots:**
 *  - **start** - Content which can be provided before the number field input
 * - **end** - Content which can be provided after the number field input
 * - _default_ - The default slot for the label
 * - **step-up-glyph** - The glyph for the step up control
 * - **step-down-glyph** - The glyph for the step down control
 *
 * ### **CSS Parts:**
 *  - **label** - The label
 * - **root** - The element wrapping the control, including start and end slots
 * - **control** - The element representing the input
 * - **controls** - The step up and step down controls
 * - **step-up** - The step up control
 * - **step-down** - The step down control
 */
export const NumberField: React.ForwardRefExoticComponent<NumberFieldProps>;
