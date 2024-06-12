import { Switch as SwitchElement } from '@jupyter/web-components';

export type { SwitchElement };

export interface SwitchProps
  extends Omit<React.AllHTMLAttributes<HTMLInputElement>, 'onChange'> {
  /**
   * Allows getting a ref to the component instance.
   */
  ref?: React.Ref<SwitchElement>;

  /** When true, the control will be immutable by user interaction. See https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly | readonly HTML attribute for more information. */
  readonly?: boolean;

  /** When true, the control will be immutable by user interaction. See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly | readonly HTML attribute} for more information. */
  readOnly?: SwitchElement['readOnly'];

  /** Emits a custom change event when the checked state changes */
  onChange?: (event: CustomEvent) => void;
}

/**
 * Switch class
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
 *  - _default_ - The deafult slot for the label
 * - **checked-message** - The message when in a checked state
 * - **unchecked-message** - The message when in an unchecked state
 *
 * ### **CSS Parts:**
 *  - **label** - The label
 * - **switch** - The element representing the switch, which wraps the indicator
 * - **status-message** - The wrapper for the status messages
 * - **checked-message** - The checked message
 * - **unchecked-message** - The unchecked message
 */
export const Switch: React.ForwardRefExoticComponent<SwitchProps>;
