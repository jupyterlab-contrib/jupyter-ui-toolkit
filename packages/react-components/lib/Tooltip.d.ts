import { Tooltip as TooltipElement } from '@jupyter/web-components';

export type { TooltipElement };

export interface TooltipProps extends React.AllHTMLAttributes<HTMLElement> {
  /**
   * Allows getting a ref to the component instance.
   */
  ref?: React.Ref<TooltipElement>;

  /** Controls if the tooltip will always remain fully in the viewport on the horizontal axis */
  horizontalViewportLock?: boolean;

  /** Controls if the tooltip will always remain fully in the viewport on the vertical axis */
  verticalViewportLock?: boolean;

  /** The id of the element the tooltip is anchored to */
  anchor?: TooltipElement['anchor'];

  /** The delay in milliseconds before a tooltip is shown after a hover event */
  delay?: TooltipElement['delay'];

  /** Controls the placement of the tooltip relative to the anchor.
When the position is undefined the tooltip is placed above or below the anchor based on available space. */
  position?: TooltipElement['position'];

  /** Controls when the tooltip updates its position, default is 'anchor' which only updates when
the anchor is resized.  'auto' will update on scroll/resize events.
Corresponds to anchored-region auto-update-mode. */
  autoUpdateMode?: TooltipElement['autoUpdateMode'];

  /** Whether the tooltip is visible or not.
If undefined tooltip is shown when anchor element is hovered */
  visible?: TooltipElement['visible'];

  /** the html element currently being used as anchor.
Setting this directly overrides the anchor attribute. */
  anchorElement?: TooltipElement['anchorElement'];

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
