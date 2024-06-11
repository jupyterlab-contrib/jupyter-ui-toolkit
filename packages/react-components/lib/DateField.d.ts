import { DateField as DateFieldElement } from '@jupyter/web-components';

export type { DateFieldElement };

export interface DateFieldProps
  extends Omit<
    React.AllHTMLAttributes<HTMLInputElement>,
    'onChange' | 'onInput' | 'max' | 'min'
  > {
  /**
   * Allows getting a ref to the component instance.
   */
  ref?: React.Ref<DateFieldElement>;

  /** When true, the control will be immutable by user interaction. See https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly | readonly HTML attribute for more information. */
  readonly?: boolean;

  /** The appearance of the element. */
  appearance?: DateFieldElement['appearance'];

  /** Allows associating a https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist | datalist to the element by https://developer.mozilla.org/en-US/docs/Web/API/Element/id. */
  list?: DateFieldElement['list'];

  /** Indicates that this element should get focus after the page finishes loading. See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefautofocus | autofocus HTML attribute} for more information. */
  autofocus?: DateFieldElement['autofocus'];

  /** Amount to increment or decrement the value by */
  step?: DateFieldElement['step'];

  /** The maximum the value can be */
  max?: DateFieldElement['max'];

  /** The minimum the value can be */
  min?: DateFieldElement['min'];

  /** Fires a custom 'input' event when the value has changed */
  onInput?: (event: CustomEvent) => void;

  /** Fires a custom 'change' event when the value has changed */
  onChange?: (event: CustomEvent) => void;
}

/**
 * Date field class
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
 * - **select(): _void_** - Selects all the text in the date field
 * - **compose(this: _K_, elementDefinition: _T_): _(
 *         overrideDefinition?: OverrideFoundationElementDefinition<T>
 *     ) => FoundationElementRegistry<T, K>_** - Defines an element registry function with a set of element definition defaults.
 *
 * ### **Slots:**
 *  - **start** - Content which can be provided before the date field input
 * - **end** - Content which can be provided after the date field input
 * - _default_ - The default slot for the label
 *
 * ### **CSS Parts:**
 *  - **label** - The label
 * - **root** - The element wrapping the control, including start and end slots
 * - **control** - The element representing the input
 */
export const DateField: React.ForwardRefExoticComponent<DateFieldProps>;
