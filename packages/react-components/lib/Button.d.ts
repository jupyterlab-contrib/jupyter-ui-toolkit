import { Button as ButtonElement } from "@jupyter/web-components";

export type { ButtonElement };

export interface ButtonProps
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
  /** Whether the button has a compact layout or not. */
  minimal?: boolean;

  /** The appearance the button should have. */
  appearance?: ButtonElement["appearance"];

  /** The id of a form to associate the element to. */
  form?: ButtonElement["form"];

  /** See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button | <button> element for more details. */
  formaction?: ButtonElement["formaction"];

  /** See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button | <button> element for more details. */
  formenctype?: ButtonElement["formenctype"];

  /** See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button | <button> element for more details. */
  formmethod?: ButtonElement["formmethod"];

  /** See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button | <button> element for more details. */
  formtarget?: ButtonElement["formtarget"];

  /** The button type. */
  type?: ButtonElement["type"];

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

  /** Determines if the element should receive document focus on page load. */
  autofocus?: ButtonElement["autofocus"];

  /** See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button | <button> element} for more details. */
  formnovalidate?: ButtonElement["formnovalidate"];

  /** 
Default slotted content */
  defaultSlottedContent?: ButtonElement["defaultSlottedContent"];

  /** A property which resolves the ComponentPresentation instance
for the current component. */
  $presentation?: ButtonElement["$presentation"];

  /** Sets the template of the element instance. When undefined,
the element will attempt to resolve the template from
the associated presentation or custom element definition. */
  template?: ButtonElement["template"];

  /** Sets the default styles for the element instance. When undefined,
the element will attempt to resolve default styles from
the associated presentation or custom element definition. */
  styles?: ButtonElement["styles"];
}

/**
 * Button class
 * ---
 *
 *
 * ### **Methods:**
 *  - **defaultSlottedContentChanged(oldValue: _HTMLElement[]_, newValue: _HTMLElement[]_): _void_** - Applies 'icon-only' class when there is only an SVG in the default slot
 * - **validate(): _void_** - {@inheritDoc (FormAssociated:interface).validate}
 * - **compose(this: _K_, elementDefinition: _T_): _(
 *         overrideDefinition?: OverrideFoundationElementDefinition<T>
 *     ) => FoundationElementRegistry<T, K>_** - Defines an element registry function with a set of element definition defaults.
 *
 * ### **Slots:**
 *  - **start** - Content which can be provided before the button content
 * - **end** - Content which can be provided after the button content
 * - _default_ - The default slot for button content
 *
 * ### **CSS Parts:**
 *  - **control** - The button element
 * - **content** - The element wrapping button content
 */
export const Button: React.ForwardRefExoticComponent<ButtonProps>;
