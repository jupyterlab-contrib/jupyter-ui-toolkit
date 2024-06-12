import { Anchor as AnchorElement } from '@jupyter/web-components';

export type { AnchorElement };

export interface AnchorProps extends React.AllHTMLAttributes<HTMLElement> {
  /**
   * Allows getting a ref to the component instance.
   */
  ref?: React.Ref<AnchorElement>;
  /** The appearance the anchor should have. */
  appearance?: AnchorElement['appearance'];

  /** Prompts the user to save the linked URL. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a | <a> element  for more information. */
  download?: AnchorElement['download'];

  /** The URL the hyperlink references. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a | <a> element  for more information. */
  href?: AnchorElement['href'];

  /** Hints at the language of the referenced resource. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a | <a> element  for more information. */
  hreflang?: AnchorElement['hreflang'];

  /** See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a | <a> element  for more information. */
  ping?: AnchorElement['ping'];

  /** See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a | <a> element  for more information. */
  referrerpolicy?: AnchorElement['referrerpolicy'];

  /** See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a | <a> element  for more information. */
  rel?: AnchorElement['rel'];

  /** See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a | <a> element  for more information. */
  target?: AnchorElement['target'];

  /** See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a | <a> element  for more information. */
  type?: AnchorElement['type'];

  /** References the root element */
  control?: AnchorElement['control'];
}

/**
 * Anchor class
 * ---
 *
 *
 * ### **Methods:**
 *  - **compose(this: _K_, elementDefinition: _T_): _(
 *         overrideDefinition?: OverrideFoundationElementDefinition<T>
 *     ) => FoundationElementRegistry<T, K>_** - Defines an element registry function with a set of element definition defaults.
 *
 * ### **Slots:**
 *  - **start** - Content which can be provided before the anchor content
 * - **end** - Content which can be provided after the anchor content
 * - _default_ - The default slot for anchor content
 *
 * ### **CSS Parts:**
 *  - **control** - The anchor element
 * - **content** - The element wrapping anchor content
 */
export const Anchor: React.ForwardRefExoticComponent<AnchorProps>;
