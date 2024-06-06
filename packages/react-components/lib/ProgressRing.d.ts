import { ProgressRing as ProgressRingElement } from "@jupyter/web-components";

export type { ProgressRingElement };

export interface ProgressRingProps
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

  /** The value of the progress */
  value?: ProgressRingElement["value"];

  /** The minimum value */
  min?: ProgressRingElement["min"];

  /** The maximum value */
  max?: ProgressRingElement["max"];

  /** Indicates the progress is paused */
  paused?: ProgressRingElement["paused"];

  /** A property which resolves the ComponentPresentation instance
for the current component. */
  $presentation?: ProgressRingElement["$presentation"];

  /** Sets the template of the element instance. When undefined,
the element will attempt to resolve the template from
the associated presentation or custom element definition. */
  template?: ProgressRingElement["template"];

  /** Sets the default styles for the element instance. When undefined,
the element will attempt to resolve default styles from
the associated presentation or custom element definition. */
  styles?: ProgressRingElement["styles"];
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
