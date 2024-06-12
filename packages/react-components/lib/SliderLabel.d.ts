import { SliderLabel as SliderLabelElement } from '@jupyter/web-components';

export type { SliderLabelElement };

export interface SliderLabelProps extends React.AllHTMLAttributes<HTMLElement> {
  /**
   * Allows getting a ref to the component instance.
   */
  ref?: React.Ref<SliderLabelElement>;

  /** Hides the tick mark. */
  hideMark?: boolean;

  /** The disabled state of the label. This is generally controlled by the parent @microsoft/fast-foundation#(Slider:class). */
  disabled?: boolean;

  /** The position of the label relative to the min and max value of the parent @microsoft/fast-foundation#(Slider:class). */
  position?: SliderLabelElement['position'];
}

/**
 * Slider label class
 * ---
 *
 *
 * ### **Methods:**
 *  - **compose(this: _K_, elementDefinition: _T_): _(
 *         overrideDefinition?: OverrideFoundationElementDefinition<T>
 *     ) => FoundationElementRegistry<T, K>_** - Defines an element registry function with a set of element definition defaults.
 *
 * ### **Slots:**
 *  - _default_ - The default slot for the label content
 *
 * ### **CSS Parts:**
 *  - **root** - The element wrapping the label mark and text
 */
export const SliderLabel: React.ForwardRefExoticComponent<SliderLabelProps>;
