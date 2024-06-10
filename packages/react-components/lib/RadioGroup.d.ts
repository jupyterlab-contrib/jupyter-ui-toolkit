import { RadioGroup as RadioGroupElement } from '@jupyter/web-components';

export type { RadioGroupElement };

export interface RadioGroupProps
  extends Omit<React.AllHTMLAttributes<HTMLElement>, 'onChange'> {
  /**
   * Allows getting a ref to the component instance.
   */
  ref?: React.Ref<RadioGroupElement>;

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

  /** When true, the child radios will be immutable by user interaction. See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly | readonly HTML attribute} for more information. */
  readOnly?: RadioGroupElement['readOnly'];

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
