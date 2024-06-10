import { Checkbox as CheckboxElement } from '@jupyter/web-components';

export type { CheckboxElement };

export interface CheckboxProps
  extends Omit<React.AllHTMLAttributes<HTMLInputElement>, 'onChange'> {
  /**
   * Allows getting a ref to the component instance.
   */
  ref?: React.Ref<CheckboxElement>;

  /** When true, the control will be immutable by user interaction. See https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly | readonly HTML attribute for more information. */
  readonly?: boolean;

  /** When true, the control will be immutable by user interaction. See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly | readonly HTML attribute} for more information. */
  readOnly?: CheckboxElement['readOnly'];

  /** The indeterminate state of the control */
  indeterminate?: CheckboxElement['indeterminate'];

  /** Emits a custom change event when the checked state changes */
  onChange?: (event: CustomEvent) => void;
}

/**
 * Checkbox class
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
 * - **indeterminate-indicator** - The indeterminate indicator
 * - _default_ - The default slot for the label
 *
 * ### **CSS Parts:**
 *  - **control** - The element representing the visual checkbox control
 * - **label** - The label
 */
export const Checkbox: React.ForwardRefExoticComponent<CheckboxProps>;
