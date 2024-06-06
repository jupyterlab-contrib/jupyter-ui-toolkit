import { Tooltip as TooltipElement } from "@jupyter/web-components";

export type { TooltipElement };

export interface TooltipProps
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
  /** Controls if the tooltip will always remain fully in the viewport on the horizontal axis */
  horizontalViewportLock?: boolean;

  /** Controls if the tooltip will always remain fully in the viewport on the vertical axis */
  verticalViewportLock?: boolean;

  /** The id of the element the tooltip is anchored to */
  anchor?: TooltipElement["anchor"];

  /** The delay in milliseconds before a tooltip is shown after a hover event */
  delay?: TooltipElement["delay"];

  /** Controls the placement of the tooltip relative to the anchor.
When the position is undefined the tooltip is placed above or below the anchor based on available space. */
  position?: TooltipElement["position"];

  /** Controls when the tooltip updates its position, default is 'anchor' which only updates when
the anchor is resized.  'auto' will update on scroll/resize events.
Corresponds to anchored-region auto-update-mode. */
  autoUpdateMode?: TooltipElement["autoUpdateMode"];

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

  /** Whether the tooltip is visible or not.
If undefined tooltip is shown when anchor element is hovered */
  visible?: TooltipElement["visible"];

  /** the html element currently being used as anchor.
Setting this directly overrides the anchor attribute. */
  anchorElement?: TooltipElement["anchorElement"];

  /** A property which resolves the ComponentPresentation instance
for the current component. */
  $presentation?: TooltipElement["$presentation"];

  /** Sets the template of the element instance. When undefined,
the element will attempt to resolve the template from
the associated presentation or custom element definition. */
  template?: TooltipElement["template"];

  /** Sets the default styles for the element instance. When undefined,
the element will attempt to resolve default styles from
the associated presentation or custom element definition. */
  styles?: TooltipElement["styles"];

  /** Fires a custom 'dismiss' event when the tooltip is visible and escape key is pressed */
  onDismiss?: (event: CustomEvent) => void;
}

/**
 * Tooltip class
 * ---
 *
 *
 * ### **Events:**
 *  - **dismiss** - Fires a custom 'dismiss' event when the tooltip is visible and escape key is pressed
 *
 * ### **Methods:**
 *  - **compose(this: _K_, elementDefinition: _T_): _(
 *         overrideDefinition?: OverrideFoundationElementDefinition<T>
 *     ) => FoundationElementRegistry<T, K>_** - Defines an element registry function with a set of element definition defaults.
 *
 * ### **Slots:**
 *  - _default_ - The default slot for the tooltip content
 *
 * ### **CSS Parts:**
 *  - **tooltip** - The tooltip element
 */
export const Tooltip: React.ForwardRefExoticComponent<TooltipProps>;
