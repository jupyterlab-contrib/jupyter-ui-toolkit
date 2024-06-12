import { Progress as ProgressElement } from '@jupyter/web-components';

export type { ProgressElement };

export interface ProgressProps
  extends Omit<React.AllHTMLAttributes<HTMLElement>, 'value'> {
  /**
   * Allows getting a ref to the component instance.
   */
  ref?: React.Ref<ProgressElement>;

  /** The value of the progress */
  value?: ProgressElement['value'];

  /** The minimum value */
  min?: ProgressElement['min'];

  /** The maximum value */
  max?: ProgressElement['max'];

  /** Indicates the progress is paused */
  paused?: ProgressElement['paused'];
}

/**
 * Progress bar class
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
export const Progress: React.ForwardRefExoticComponent<ProgressProps>;
