import { AnchoredRegion as AnchoredRegionElement } from '@jupyter/web-components';

export type { AnchoredRegionElement };

export interface AnchoredRegionProps
  extends Pick<
    React.AllHTMLAttributes<HTMLElement>,
    | 'children'
    | 'dir'
    | 'hidden'
    | 'id'
    | 'lang'
    | 'slot'
    | 'tabIndex'
    | 'title'
    | 'translate'
    | 'onClick'
    | 'onFocus'
    | 'onBlur'
  > {
  /** Whether the region remains in the viewport (ie. detaches from the anchor) on the horizontal axis */
  horizontalViewportLock?: boolean;

  /** Whether the region overlaps the anchor on the horizontal axis */
  horizontalInset?: boolean;

  /** Whether the region remains in the viewport (ie. detaches from the anchor) on the vertical axis */
  verticalViewportLock?: boolean;

  /** Whether the region overlaps the anchor on the vertical axis */
  verticalInset?: boolean;

  /** Whether the region is positioned using css "position: fixed".
Otherwise the region uses "position: absolute".
Fixed placement allows the region to break out of parent containers, */
  fixedPlacement?: boolean;

  /** The HTML ID of the anchor element this region is positioned relative to */
  anchor?: AnchoredRegionElement['anchor'];

  /** The HTML ID of the viewport element this region is positioned relative to */
  viewport?: AnchoredRegionElement['viewport'];

  /** Sets what logic the component uses to determine horizontal placement.
'locktodefault' forces the default position
'dynamic' decides placement based on available space
'uncontrolled' does not control placement on the horizontal axis */
  horizontalPositioningMode?: AnchoredRegionElement['horizontalPositioningMode'];

  /** The default horizontal position of the region relative to the anchor element */
  horizontalDefaultPosition?: AnchoredRegionElement['horizontalDefaultPosition'];

  /** How narrow the space allocated to the default position has to be before the widest area
is selected for layout */
  horizontalThreshold?: AnchoredRegionElement['horizontalThreshold'];

  /** Defines how the width of the region is calculated */
  horizontalScaling?: AnchoredRegionElement['horizontalScaling'];

  /** Sets what logic the component uses to determine vertical placement.
'locktodefault' forces the default position
'dynamic' decides placement based on available space
'uncontrolled' does not control placement on the vertical axis */
  verticalPositioningMode?: AnchoredRegionElement['verticalPositioningMode'];

  /** The default vertical position of the region relative to the anchor element */
  verticalDefaultPosition?: AnchoredRegionElement['verticalDefaultPosition'];

  /** How short the space allocated to the default position has to be before the tallest area
is selected for layout */
  verticalThreshold?: AnchoredRegionElement['verticalThreshold'];

  /** Defines how the height of the region is calculated */
  verticalScaling?: AnchoredRegionElement['verticalScaling'];

  /** Defines what triggers the anchored region to revaluate positioning */
  autoUpdateMode?: AnchoredRegionElement['autoUpdateMode'];

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

  /** The HTML element being used as the anchor */
  anchorElement?: AnchoredRegionElement['anchorElement'];

  /** The HTML element being used as the viewport */
  viewportElement?: AnchoredRegionElement['viewportElement'];

  /** indicates the current horizontal position of the region */
  verticalPosition?: AnchoredRegionElement['verticalPosition'];

  /** indicates the current vertical position of the region */
  horizontalPosition?: AnchoredRegionElement['horizontalPosition'];

  /** update position */
  update?: AnchoredRegionElement['update'];

  /** A property which resolves the ComponentPresentation instance
for the current component. */
  $presentation?: AnchoredRegionElement['$presentation'];

  /** Sets the template of the element instance. When undefined,
the element will attempt to resolve the template from
the associated presentation or custom element definition. */
  template?: AnchoredRegionElement['template'];

  /** Sets the default styles for the element instance. When undefined,
the element will attempt to resolve default styles from
the associated presentation or custom element definition. */
  styles?: AnchoredRegionElement['styles'];

  /** Fires a custom 'loaded' event when the region is loaded and visible */
  onLoaded?: (event: CustomEvent) => void;

  /** Fires a custom 'positionchange' event when the position has changed */
  onPositionchange?: (event: CustomEvent) => void;
}

/**
 * Anchored region class
 * ---
 *
 *
 * ### **Events:**
 *  - **loaded** - Fires a custom 'loaded' event when the region is loaded and visible
 * - **positionchange** - Fires a custom 'positionchange' event when the position has changed
 *
 * ### **Methods:**
 *  - **compose(this: _K_, elementDefinition: _T_): _(
 *         overrideDefinition?: OverrideFoundationElementDefinition<T>
 *     ) => FoundationElementRegistry<T, K>_** - Defines an element registry function with a set of element definition defaults.
 *
 * ### **Slots:**
 *  - _default_ - The default slot for the content
 */
export const AnchoredRegion: React.ForwardRefExoticComponent<AnchoredRegionProps>;
