import { Slider as SliderElement } from "@jupyter/web-components";

export type { SliderElement };

export interface SliderProps
  extends Pick<
    React.AllHTMLAttributes<HTMLElement>,
    | "children"
    | "dir"
    | "hidden"
    | "id"
    | "lang"
    | "slot"
    | "tabIndex"
    | "title"
    | "translate"
    | "onClick"
    | "onFocus"
    | "onBlur"
  > {
  /** When true, the control will be immutable by user interaction. See https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly | readonly HTML attribute for more information. */
  readonly?: boolean;

  /** The orientation of the slider. */
  orientation?: SliderElement["orientation"];

  /** The selection mode. */
  mode?: SliderElement["mode"];

  /** A space-separated list of the classes of the element. Classes allows CSS and JavaScript to select and access specific elements via the class selectors or functions like the method `Document.getElementsByClassName()`. */
  className?: string;

  /** Contains a space-separated list of the part names of the element that should be exposed on the host element. */
  exportparts?: string;

  /** Used for labels to link them with their inputs (using input id). */
  htmlFor?: string;

  /** Used to help React identify which items have changed, are added, or are removed within a list. */
  key?: number | string;

  /** Contains a space-separated list of the part names of the element. Part names allows CSS to select and style specific elements in a shadow tree via the ::part pseudo-element. */
  part?: string;

  /** A mutable ref object whose `.current` property is initialized to the passed argument (`initialValue`). The returned object will persist for the full lifetime of the component. */
  ref?: any;

  /** Contains CSS styling declarations to be applied to the element. Note that it is recommended for styles to be defined in a separate file or files. This attribute and the <style> element have mainly the purpose of allowing for quick styling, for example for testing purposes. */
  style?: string | object;

  /** Allows developers to make HTML elements focusable, allow or prevent them from being sequentially focusable (usually with the `Tab` key, hence the name) and determine their relative ordering for sequential focus navigation. */
  tabIndex?: number;

  /** When true, the control will be immutable by user interaction. See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly | readonly HTML attribute} for more information. */
  readOnly?: SliderElement["readOnly"];

  /** The value property, typed as a number. */
  valueAsNumber?: SliderElement["valueAsNumber"];

  /** Custom function that generates a string for the component's "aria-valuetext" attribute based on the current value. */
  valueTextFormatter?: SliderElement["valueTextFormatter"];

  /** The minimum allowed value. */
  min?: SliderElement["min"];

  /** The maximum allowed value. */
  max?: SliderElement["max"];

  /** Value to increment or decrement via arrow keys, mouse click or drag. */
  step?: SliderElement["step"];

  /** A property which resolves the ComponentPresentation instance
for the current component. */
  $presentation?: SliderElement["$presentation"];

  /** Sets the template of the element instance. When undefined,
the element will attempt to resolve the template from
the associated presentation or custom element definition. */
  template?: SliderElement["template"];

  /** Sets the default styles for the element instance. When undefined,
the element will attempt to resolve default styles from
the associated presentation or custom element definition. */
  styles?: SliderElement["styles"];

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
