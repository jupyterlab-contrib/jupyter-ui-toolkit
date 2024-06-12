import { Disclosure as DisclosureElement } from '@jupyter/web-components';

export type { DisclosureElement };

export interface DisclosureProps extends React.AllHTMLAttributes<HTMLElement> {
  /**
   * Allows getting a ref to the component instance.
   */
  ref?: React.Ref<DisclosureElement>;

  /** The appearance the anchor should have. */
  appearance?: DisclosureElement['appearance'];

  /** Invoker title */
  title?: DisclosureElement['title'];

  /** Determines if the element should show the extra content or not. */
  expanded?: DisclosureElement['expanded'];

  /** fires a toggle event when the summary is toggled */
  onToggle?: (event: CustomEvent) => void;
}

/**
 * Disclosure class
 * ---
 *
 *
 * ### **Events:**
 *  - **toggle** - fires a toggle event when the summary is toggled
 *
 * ### **Methods:**
 *
 *
 * - **show(): _void_** - Show extra content.
 * - **hide(): _void_** - Hide extra content.
 * - **toggle(): _void_** - Toggle the current(expanded/collapsed) state.
 * - **compose(this: _K_, elementDefinition: _T_): _(
 *         overrideDefinition?: OverrideFoundationElementDefinition<T>
 *     ) => FoundationElementRegistry<T, K>_** - Defines an element registry function with a set of element definition defaults.
 *
 * ### **Slots:**
 *  - **start** - Content which can be provided before the summary content
 * - **end** - Content which can be provided after the summary content
 * - **title** - The summary content
 * - _default_ - The default slot for the disclosure content
 */
export const Disclosure: React.ForwardRefExoticComponent<DisclosureProps>;
