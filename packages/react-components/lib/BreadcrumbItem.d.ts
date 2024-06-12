import { BreadcrumbItem as BreadcrumbItemElement } from '@jupyter/web-components';

export type { BreadcrumbItemElement };

export interface BreadcrumbItemProps
  extends React.AllHTMLAttributes<HTMLElement> {
  /**
   * Allows getting a ref to the component instance.
   */
  ref?: React.Ref<BreadcrumbItemElement>;

  /** Prompts the user to save the linked URL. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a | <a> element  for more information. */
  download?: BreadcrumbItemElement['download'];

  /** The URL the hyperlink references. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a | <a> element  for more information. */
  href?: BreadcrumbItemElement['href'];

  /** Hints at the language of the referenced resource. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a | <a> element  for more information. */
  hreflang?: BreadcrumbItemElement['hreflang'];

  /** See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a | <a> element  for more information. */
  ping?: BreadcrumbItemElement['ping'];

  /** See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a | <a> element  for more information. */
  referrerpolicy?: BreadcrumbItemElement['referrerpolicy'];

  /** See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a | <a> element  for more information. */
  rel?: BreadcrumbItemElement['rel'];

  /** See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a | <a> element  for more information. */
  target?: BreadcrumbItemElement['target'];

  /** See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a | <a> element  for more information. */
  type?: BreadcrumbItemElement['type'];
}

/**
 * Breadcrumb item class
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
export const BreadcrumbItem: React.ForwardRefExoticComponent<BreadcrumbItemProps>;
