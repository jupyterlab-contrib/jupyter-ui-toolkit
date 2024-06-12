import { AnchoredRegion as AnchoredRegionElement } from '@jupyter/web-components';

export type { AnchoredRegionElement };

export interface AnchoredRegionProps
  extends React.AllHTMLAttributes<HTMLElement> {
  /**
   * Allows getting a ref to the component instance.
   */
  ref?: React.Ref<AnchoredRegionElement>;
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
