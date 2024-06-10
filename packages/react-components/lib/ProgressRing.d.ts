import { ProgressRing as ProgressRingElement } from '@jupyter/web-components';

export type { ProgressRingElement };

export interface ProgressRingProps
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
  value?: ProgressRingElement['value'];

  /** The minimum value */
  min?: ProgressRingElement['min'];

  /** The maximum value */
  max?: ProgressRingElement['max'];

  /** Indicates the progress is paused */
  paused?: ProgressRingElement['paused'];

  /** A property which resolves the ComponentPresentation instance
for the current component. */
  $presentation?: ProgressRingElement['$presentation'];

  /** Sets the template of the element instance. When undefined,
the element will attempt to resolve the template from
the associated presentation or custom element definition. */
  template?: ProgressRingElement['template'];

  /** Sets the default styles for the element instance. When undefined,
the element will attempt to resolve default styles from
the associated presentation or custom element definition. */
  styles?: ProgressRingElement['styles'];
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
