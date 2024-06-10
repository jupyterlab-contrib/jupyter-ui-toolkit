import { Slider as SliderElement } from '@jupyter/web-components';

export type { SliderElement };

export interface SliderProps
  extends Omit<React.AllHTMLAttributes<HTMLInputElement>, 'onChange'> {
  /**
   * Allows getting a ref to the component instance.
   */
  ref?: React.Ref<SliderElement>;

  /** When true, the control will be immutable by user interaction. See https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly | readonly HTML attribute for more information. */
  readonly?: boolean;

  /** The orientation of the slider. */
  orientation?: SliderElement['orientation'];

  /** The selection mode. */
  mode?: SliderElement['mode'];

  /** When true, the control will be immutable by user interaction. See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly | readonly HTML attribute} for more information. */
  readOnly?: SliderElement['readOnly'];

  /** The value property, typed as a number. */
  valueAsNumber?: SliderElement['valueAsNumber'];

  /** Custom function that generates a string for the component's "aria-valuetext" attribute based on the current value. */
  valueTextFormatter?: SliderElement['valueTextFormatter'];

  /** The minimum allowed value. */
  min?: SliderElement['min'];

  /** The maximum allowed value. */
  max?: SliderElement['max'];

  /** Value to increment or decrement via arrow keys, mouse click or drag. */
  step?: SliderElement['step'];

  /** Fires a custom 'change' event when the slider value changes */
  onChange?: (event: CustomEvent) => void;
}

/**
 * Slider class
 * ---
 *
 *
 * ### **Events:**
 *  - **change** - Fires a custom 'change' event when the slider value changes
 *
 * ### **Methods:**
 *  - **increment(): _void_** - Increment the value by the step
 * - **decrement(): _void_** - Decrement the value by the step
 * - **setThumbPositionForOrientation(direction: _Direction_): _void_** - Places the thumb based on the current value
 * - **compose(this: _K_, elementDefinition: _T_): _(
 *         overrideDefinition?: OverrideFoundationElementDefinition<T>
 *     ) => FoundationElementRegistry<T, K>_** - Defines an element registry function with a set of element definition defaults.
 *
 * ### **Slots:**
 *  - **track** - The track of the slider
 * - **track-start** - The track-start visual indicator
 * - **thumb** - The slider thumb
 * - _default_ - The default slot for labels
 *
 * ### **CSS Parts:**
 *  - **positioning-region** - The region used to position the elements of the slider
 * - **track-container** - The region containing the track elements
 * - **track-start** - The element wrapping the track start slot
 * - **thumb-container** - The thumb container element which is programatically positioned
 */
export const Slider: React.ForwardRefExoticComponent<SliderProps>;
