import { Anchor as AnchorElement } from '@jupyter/web-components';

export type { AnchorElement };

export interface AnchorProps
  extends Pick<
    React.AllHTMLAttributes<HTMLElement>,
    | 'children'
    | 'className'
    | 'dir'
    | 'exportparts'
    | 'htmlFor'
    | 'hidden'
    | 'id'
    | 'key'
    | 'lang'
    | 'part'
    | 'ref'
    | 'slot'
    | 'style'
    | 'tabIndex'
    | 'title'
    | 'translate'
    | 'onClick'
    | 'onFocus'
    | 'onBlur'
  > {
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

  /** A property which resolves the ComponentPresentation instance
for the current component. */
  $presentation?: AnchorElement['$presentation'];

  /** Sets the template of the element instance. When undefined,
the element will attempt to resolve the template from
the associated presentation or custom element definition. */
  template?: AnchorElement['template'];

  /** Sets the default styles for the element instance. When undefined,
the element will attempt to resolve default styles from
the associated presentation or custom element definition. */
  styles?: AnchorElement['styles'];
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
