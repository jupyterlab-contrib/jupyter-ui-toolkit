import { Avatar as AvatarElement } from "@jupyter/web-components";

export type { AvatarElement };

export interface AvatarProps
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
  /** Indicates the Avatar should have an image source */
  src?: AvatarElement["imgSrc"];

  /** Indicates the Avatar should have alt text */
  alt?: AvatarElement["alt"];

  /** Indicates the Avatar should have a color fill. */
  fill?: AvatarElement["fill"];

  /** Indicates the Avatar should have a text color. */
  color?: AvatarElement["color"];

  /** Indicates the Avatar should have url link */
  link?: AvatarElement["link"];

  /** Indicates the Avatar shape should be. By default it will be set to "circle". */
  shape?: AvatarElement["shape"];

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

  /** A property which resolves the ComponentPresentation instance
for the current component. */
  $presentation?: AvatarElement["$presentation"];

  /** Sets the template of the element instance. When undefined,
the element will attempt to resolve the template from
the associated presentation or custom element definition. */
  template?: AvatarElement["template"];

  /** Sets the default styles for the element instance. When undefined,
the element will attempt to resolve default styles from
the associated presentation or custom element definition. */
  styles?: AvatarElement["styles"];
}

/**
 * Jupyter Avatar Class
 * ---
 *
 *
 * ### **Methods:**
 *  - **compose(this: _K_, elementDefinition: _T_): _(
 *         overrideDefinition?: OverrideFoundationElementDefinition<T>
 *     ) => FoundationElementRegistry<T, K>_** - Defines an element registry function with a set of element definition defaults.
 *
 * ### **Slots:**
 *  - **media** - Used for media such as an image
 * - _default_ - The default slot for avatar text, commonly a name or initials
 * - **badge** - Used to provide a badge, such as a status badge
 *
 * ### **CSS Parts:**
 *  - **backplate** - The wrapping container for the avatar
 * - **link** - The avatar link
 * - **media** - The media slot
 * - **content** - The default slot
 */
export const Avatar: React.ForwardRefExoticComponent<AvatarProps>;
