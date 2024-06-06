import { Picker as PickerElement } from "@jupyter/web-components";

export type { PickerElement };

export interface PickerProps
  extends Pick<
    React.AllHTMLAttributes<HTMLElement>,
    | "children"
    | "dir"
    | "hidden"
    | "id"
    | "lang"
    | "slot"
    | "tabIndex"
    | "title"
    | "translate"
    | "onClick"
    | "onFocus"
    | "onBlur"
  > {
  /** Whether the component should remove an option from the list when it is in the selection */
  filterSelected?: boolean;

  /** Whether the component should remove options based on the current query */
  filterQuery?: boolean;

  /** Currently selected items. Comma delineated string ie. "apples,oranges". */
  selection?: PickerElement["selection"];

  /** Currently available options. Comma delineated string ie. "apples,oranges". */
  options?: PickerElement["options"];

  /** The maximum number of items that can be selected. */
  maxSelected?: PickerElement["maxSelected"];

  /** The text to present to assistive technolgies when no suggestions are available. */
  noSuggestionsText?: PickerElement["noSuggestionsText"];

  /** The text to present to assistive technolgies when suggestions are available. */
  suggestionsAvailableText?: PickerElement["suggestionsAvailableText"];

  /** The text to present to assistive technologies when suggestions are loading. */
  loadingText?: PickerElement["loadingText"];

  /** Applied to the aria-label attribute of the input element */
  label?: PickerElement["label"];

  /** Applied to the aria-labelledby attribute of the input element */
  labelledby?: PickerElement["labelledby"];

  /** Applied to the placeholder attribute of the input element */
  placeholder?: PickerElement["placeholder"];

  /** Controls menu placement */
  menuPlacement?: PickerElement["menuPlacement"];

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

  /** Whether to display a loading state if the menu is opened. */
  showLoading?: PickerElement["showLoading"];

  /** Template used to generate selected items.
This is used in a repeat directive. */
  listItemTemplate?: PickerElement["listItemTemplate"];

  /** Default template to use for selected items (usually specified in the component template).
This is used in a repeat directive. */
  defaultListItemTemplate?: PickerElement["defaultListItemTemplate"];

  /** Template to use for available options.
This is used in a repeat directive. */
  menuOptionTemplate?: PickerElement["menuOptionTemplate"];

  /** Default template to use for available options (usually specified in the template).
This is used in a repeat directive. */
  defaultMenuOptionTemplate?: PickerElement["defaultMenuOptionTemplate"];

  /** Template to use for the contents of a selected list item */
  listItemContentsTemplate?: PickerElement["listItemContentsTemplate"];

  /** Template to use for the contents of menu options */
  menuOptionContentsTemplate?: PickerElement["menuOptionContentsTemplate"];

  /** Current list of options in array form */
  optionsList?: PickerElement["optionsList"];

  /** The text value currently in the input field */
  query?: PickerElement["query"];

  /** Reference to the placeholder element for the repeat directive */
  itemsPlaceholderElement?: PickerElement["itemsPlaceholderElement"];

  /** A property which resolves the ComponentPresentation instance
for the current component. */
  $presentation?: PickerElement["$presentation"];

  /** Sets the template of the element instance. When undefined,
the element will attempt to resolve the template from
the associated presentation or custom element definition. */
  template?: PickerElement["template"];

  /** Sets the default styles for the element instance. When undefined,
the element will attempt to resolve default styles from
the associated presentation or custom element definition. */
  styles?: PickerElement["styles"];
}

/**
 * Picker class
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
