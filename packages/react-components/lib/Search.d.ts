import { Search as SearchElement } from '@jupyter/web-components';

export type { SearchElement };

export interface SearchProps
  extends Omit<
    React.AllHTMLAttributes<HTMLInputElement>,
    'onChange' | 'onInput'
  > {
  /**
   * Allows getting a ref to the component instance.
   */
  ref?: React.Ref<SearchElement>;

  /** When true, the control will be immutable by user interaction. See https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly | readonly HTML attribute for more information. */
  readonly?: boolean;

  /** The appearance of the element. */
  appearance?: SearchElement['appearance'];

  /** Sets the placeholder value of the element, generally used to provide a hint to the user. */
  placeholder?: SearchElement['placeholder'];

  /** Allows associating a https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist | datalist to the element by https://developer.mozilla.org/en-US/docs/Web/API/Element/id. */
  list?: SearchElement['list'];

  /** A regular expression that the value must match to pass validation. */
  pattern?: SearchElement['pattern'];

  /** When true, the control will be immutable by user interaction. See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly | readonly HTML attribute} for more information. */
  readOnly?: SearchElement['readOnly'];

  /** Indicates that this element should get focus after the page finishes loading. See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefautofocus | autofocus HTML attribute} for more information. */
  autofocus?: SearchElement['autofocus'];

  /** The maximum number of characters a user can enter. */
  maxlength?: SearchElement['maxlength'];

  /** The minimum number of characters a user can enter. */
  minlength?: SearchElement['minlength'];

  /** Sets the width of the element to a specified number of characters. */
  size?: SearchElement['size'];

  /** Controls whether or not to enable spell checking for the input field, or if the default spell checking configuration should be used. */
  spellcheck?: SearchElement['spellcheck'];

  /** Fires a custom 'input' event when the value has changed */
  onInput?: (event: CustomEvent) => void;

  /** Fires a custom 'change' event when the value has changed */
  onChange?: (event: CustomEvent) => void;
}

/**
 * Search field class
 * ---
 *
 *
 * ### **Events:**
 *  - **input** - Fires a custom 'input' event when the value has changed
 * - **change** - Fires a custom 'change' event when the value has changed
 *
 * ### **Methods:**
 *  - **validate(): _void_** - {@inheritDoc (FormAssociated:interface).validate}
 * - **handleClearInput(): _void_** - Handles the control's clear value event
 * - **compose(this: _K_, elementDefinition: _T_): _(
 *         overrideDefinition?: OverrideFoundationElementDefinition<T>
 *     ) => FoundationElementRegistry<T, K>_** - Defines an element registry function with a set of element definition defaults.
 *
 * ### **Slots:**
 *  - **start** - Content which can be provided before the search input
 * - **end** - Content which can be provided after the search clear button
 * - _default_ - The default slot for the label
 * - **close-button** - The clear button
 * - **close-glyph** - The clear glyph
 *
 * ### **CSS Parts:**
 *  - **label** - The label
 * - **root** - The element wrapping the control, including start and end slots
 * - **control** - The element representing the input
 * - **clear-button** - The button to clear the input
 */
export const Search: React.ForwardRefExoticComponent<SearchProps>;
