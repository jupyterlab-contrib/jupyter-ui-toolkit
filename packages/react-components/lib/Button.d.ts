import {
  Button as ButtonElement,
  type ButtonScale,
  type ButtonAppearance
} from '@jupyter/web-components';

export type { ButtonAppearance, ButtonElement, ButtonScale };

export interface ButtonProps
  extends Omit<React.AllHTMLAttributes<HTMLElement>, 'form'> {
  /**
   * Allows getting a ref to the component instance.
   */
  ref?: React.Ref<ButtonElement>;

  /** Whether the button has a compact layout or not.
   * @deprecated Use {@link scale} equals to `xsmall` instead.
   */
  minimal?: boolean;

  /**
   * Scale the element compared to the theme size.
   */
  scale?: ButtonScale;

  /** The appearance the button should have. */
  appearance?: ButtonElement['appearance'];

  /** The id of a form to associate the element to. */
  form?: ButtonElement['form'];

  /** See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button | <button> element for more details. */
  formaction?: ButtonElement['formaction'];

  /** See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button | <button> element for more details. */
  formenctype?: ButtonElement['formenctype'];

  /** See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button | <button> element for more details. */
  formmethod?: ButtonElement['formmethod'];

  /** See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button | <button> element for more details. */
  formtarget?: ButtonElement['formtarget'];

  /** The button type. */
  type?: ButtonElement['type'];

  /** Determines if the element should receive document focus on page load. */
  autofocus?: ButtonElement['autofocus'];

  /** See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button | <button> element} for more details. */
  formnovalidate?: ButtonElement['formnovalidate'];
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
