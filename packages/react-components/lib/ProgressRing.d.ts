import { ProgressRing as ProgressRingElement } from '@jupyter/web-components';

export type { ProgressRingElement };

export interface ProgressRingProps
  extends Omit<React.AllHTMLAttributes<HTMLElement>, 'value'> {
  /**
   * Allows getting a ref to the component instance.
   */
  ref?: React.Ref<ProgressRingElement>;

  /** The value of the progress */
  value?: ProgressRingElement['value'];

  /** The minimum value */
  min?: ProgressRingElement['min'];

  /** The maximum value */
  max?: ProgressRingElement['max'];

  /** Indicates the progress is paused */
  paused?: ProgressRingElement['paused'];
}

/**
 * Progress ring class
 * ---
 *
 *
 * ### **Methods:**
 *  - **compose(this: _K_, elementDefinition: _T_): _(
 *         overrideDefinition?: OverrideFoundationElementDefinition<T>
 *     ) => FoundationElementRegistry<T, K>_** - Defines an element registry function with a set of element definition defaults.
 *
 * ### **Slots:**
 *  - **indeterminate** - The slot for a custom indeterminate indicator
 *
 * ### **CSS Parts:**
 *  - **progress** - Represents the progress element
 * - **determinate** - The determinate indicator
 * - **indeterminate** - The indeterminate indicator
 */
export const ProgressRing: React.ForwardRefExoticComponent<ProgressRingProps>;
