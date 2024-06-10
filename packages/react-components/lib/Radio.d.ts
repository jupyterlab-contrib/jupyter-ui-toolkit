import { Radio as RadioElement } from '@jupyter/web-components';

export type { RadioElement };

export interface RadioProps
  extends Omit<React.AllHTMLAttributes<HTMLInputElement>, 'onChange'> {
  /**
   * Allows getting a ref to the component instance.
   */
  ref?: React.Ref<RadioElement>;

  /** When true, the control will be immutable by user interaction. See https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly | readonly HTML attribute for more information. */
  readonly?: boolean;

  /** When true, the control will be immutable by user interaction. See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly | readonly HTML attribute} for more information. */
  readOnly?: RadioElement['readOnly'];

  /** The name of the radio. See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname | name attribute} for more info. */
  name?: RadioElement['name'];

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
