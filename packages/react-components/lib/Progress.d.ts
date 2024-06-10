import { Progress as ProgressElement } from '@jupyter/web-components';

export type { ProgressElement };

export interface ProgressProps
  extends Pick<
    React.AllHTMLAttributes<HTMLElement>,
    | 'children'
    | 'className'
    | 'dir'
    | 'exportparts'
    | 'htmlFor'
    | 'hidden'
    | 'id'
    | 'key'
    | 'lang'
    | 'part'
    | 'ref'
    | 'slot'
    | 'style'
    | 'tabIndex'
    | 'title'
    | 'translate'
    | 'onClick'
    | 'onFocus'
    | 'onBlur'
  > {
  /** The value of the progress */
  value?: ProgressElement['value'];

  /** The minimum value */
  min?: ProgressElement['min'];

  /** The maximum value */
  max?: ProgressElement['max'];

  /** Indicates the progress is paused */
  paused?: ProgressElement['paused'];

  /** A property which resolves the ComponentPresentation instance
for the current component. */
  $presentation?: ProgressElement['$presentation'];

  /** Sets the template of the element instance. When undefined,
the element will attempt to resolve the template from
the associated presentation or custom element definition. */
  template?: ProgressElement['template'];

  /** Sets the default styles for the element instance. When undefined,
the element will attempt to resolve default styles from
the associated presentation or custom element definition. */
  styles?: ProgressElement['styles'];
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
