import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect
} from 'react';
import { provideJupyterDesignSystem, jpPicker } from '@jupyter/web-components';
provideJupyterDesignSystem().register(jpPicker());
import { useProperties } from './react-utils.js';

export const Picker = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    filterSelected,
    filterQuery,
    selection,
    options,
    maxSelected,
    noSuggestionsText,
    suggestionsAvailableText,
    loadingText,
    label,
    labelledby,
    placeholder,
    menuPlacement,
    showLoading,
    listItemTemplate,
    defaultListItemTemplate,
    menuOptionTemplate,
    defaultMenuOptionTemplate,
    listItemContentsTemplate,
    menuOptionContentsTemplate,
    optionsList,
    query,
    itemsPlaceholderElement,
    $presentation,
    template,
    styles,
    ...filteredProps
  } = props;

  /** Properties - run whenever a property has changed */
  useProperties(ref, 'showLoading', props.showLoading);
  useProperties(ref, 'listItemTemplate', props.listItemTemplate);
  useProperties(ref, 'defaultListItemTemplate', props.defaultListItemTemplate);
  useProperties(ref, 'menuOptionTemplate', props.menuOptionTemplate);
  useProperties(
    ref,
    'defaultMenuOptionTemplate',
    props.defaultMenuOptionTemplate
  );
  useProperties(
    ref,
    'listItemContentsTemplate',
    props.listItemContentsTemplate
  );
  useProperties(
    ref,
    'menuOptionContentsTemplate',
    props.menuOptionContentsTemplate
  );
  useProperties(ref, 'optionsList', props.optionsList);
  useProperties(ref, 'query', props.query);
  useProperties(ref, 'itemsPlaceholderElement', props.itemsPlaceholderElement);
  useProperties(ref, '$presentation', props.$presentation);
  useProperties(ref, 'template', props.template);
  useProperties(ref, 'styles', props.styles);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ({
    focus: () => ref.current.focus(),
    handleKeyDown: e => ref.current.handleKeyDown(e),
    handleFocusIn: e => ref.current.handleFocusIn(e),
    handleFocusOut: e => ref.current.handleFocusOut(e),
    handleSelectionChange: () => ref.current.handleSelectionChange(),
    handleRegionLoaded: e => ref.current.handleRegionLoaded(e),
    handleItemInvoke: e => ref.current.handleItemInvoke(e),
    handleOptionInvoke: e => ref.current.handleOptionInvoke(e),
    compose: (this_, elementDefinition) =>
      ref.current.compose(this_, elementDefinition)
  }));

  return React.createElement(
    'jp-draft-picker',
    {
      ref,
      ...filteredProps,
      selection: props.selection,
      options: props.options,
      'max-selected': props.maxSelected || props['max-selected'],
      'no-suggestions-text':
        props.noSuggestionsText || props['no-suggestions-text'],
      'suggestions-available-text':
        props.suggestionsAvailableText || props['suggestions-available-text'],
      'loading-text': props.loadingText || props['loading-text'],
      label: props.label,
      labelledby: props.labelledby,
      placeholder: props.placeholder,
      'menu-placement': props.menuPlacement || props['menu-placement'],
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      'filter-selected': props.filterSelected ? '' : undefined,
      'filter-query': props.filterQuery ? '' : undefined,
      style: { ...props.style }
    },
    props.children
  );
});
