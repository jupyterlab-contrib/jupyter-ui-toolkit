import { Picker as PickerElement } from '@jupyter/web-components';

export type { PickerElement };

export interface PickerProps extends React.AllHTMLAttributes<HTMLInputElement> {
  /**
   * Allows getting a ref to the component instance.
   */
  ref?: React.Ref<PickerElement>;

  /** Whether the component should remove an option from the list when it is in the selection */
  filterSelected?: boolean;

  /** Whether the component should remove options based on the current query */
  filterQuery?: boolean;

  /** Currently selected items. Comma delineated string ie. "apples,oranges". */
  selection?: PickerElement['selection'];

  /** Currently available options. Comma delineated string ie. "apples,oranges". */
  options?: PickerElement['options'];

  /** The maximum number of items that can be selected. */
  maxSelected?: PickerElement['maxSelected'];

  /** The text to present to assistive technolgies when no suggestions are available. */
  noSuggestionsText?: PickerElement['noSuggestionsText'];

  /** The text to present to assistive technolgies when suggestions are available. */
  suggestionsAvailableText?: PickerElement['suggestionsAvailableText'];

  /** The text to present to assistive technologies when suggestions are loading. */
  loadingText?: PickerElement['loadingText'];

  /** Applied to the aria-label attribute of the input element */
  label?: PickerElement['label'];

  /** Applied to the aria-labelledby attribute of the input element */
  labelledby?: PickerElement['labelledBy'];

  /** Applied to the placeholder attribute of the input element */
  placeholder?: PickerElement['placeholder'];

  /** Controls menu placement */
  menuPlacement?: PickerElement['menuPlacement'];

  /** Whether to display a loading state if the menu is opened. */
  showLoading?: PickerElement['showLoading'];

  /** Template used to generate selected items.
This is used in a repeat directive. */
  listItemTemplate?: PickerElement['listItemTemplate'];

  /** Default template to use for selected items (usually specified in the component template).
This is used in a repeat directive. */
  defaultListItemTemplate?: PickerElement['defaultListItemTemplate'];

  /** Template to use for available options.
This is used in a repeat directive. */
  menuOptionTemplate?: PickerElement['menuOptionTemplate'];

  /** Default template to use for available options (usually specified in the template).
This is used in a repeat directive. */
  defaultMenuOptionTemplate?: PickerElement['defaultMenuOptionTemplate'];

  /** Template to use for the contents of a selected list item */
  listItemContentsTemplate?: PickerElement['listItemContentsTemplate'];

  /** Template to use for the contents of menu options */
  menuOptionContentsTemplate?: PickerElement['menuOptionContentsTemplate'];

  /** Current list of options in array form */
  optionsList?: PickerElement['optionsList'];

  /** The text value currently in the input field */
  query?: PickerElement['query'];

  /** Reference to the placeholder element for the repeat directive */
  itemsPlaceholderElement?: PickerElement['itemsPlaceholderElement'];
}

/**
 * Picker class
 *
 * @alpha
 * ---
 *
 *
 * ### **Methods:**
 *  - **focus()** - Move focus to the input element
 * - **handleKeyDown(e: _KeyboardEvent_): _boolean_** - Handle key down events.
 * - **handleFocusIn(e: _FocusEvent_): _boolean_** - Handle focus in events.
 * - **handleFocusOut(e: _FocusEvent_): _boolean_** - Handle focus out events.
 * - **handleSelectionChange(): _void_** - The list of selected items has changed
 * - **handleRegionLoaded(e: _Event_): _void_** - Anchored region is loaded, menu and options exist in the DOM.
 * - **handleItemInvoke(e: _Event_): _boolean_** - A list item has been invoked.
 * - **handleOptionInvoke(e: _Event_): _boolean_** - A menu option has been invoked.
 * - **compose(this: _K_, elementDefinition: _T_): _(
 *         overrideDefinition?: OverrideFoundationElementDefinition<T>
 *     ) => FoundationElementRegistry<T, K>_** - Defines an element registry function with a set of element definition defaults.
 */
export const Picker: React.ForwardRefExoticComponent<PickerProps>;
