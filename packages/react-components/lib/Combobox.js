import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect
} from 'react';
import {
  provideJupyterDesignSystem,
  jpCombobox
} from '@jupyter/web-components';
provideJupyterDesignSystem().register(jpCombobox());
import { useEventListener, useProperties } from './react-utils.js';

export const Combobox = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    autowidth,
    minimal,
    open,
    autocomplete,
    placeholder,
    position,
    autoWidth,
    filteredOptions,
    options,
    value,
    length,
    disabled,
    selectedIndex,
    selectedOptions,
    $presentation,
    template,
    styles,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(ref, 'change', props.onChange);
  useEventListener(ref, 'input', props.onInput);

  /** Properties - run whenever a property has changed */
  useProperties(ref, 'autoWidth', props.autoWidth);
  useProperties(ref, 'filteredOptions', props.filteredOptions);
  useProperties(ref, 'options', props.options);
  useProperties(ref, 'value', props.value);
  useProperties(ref, 'length', props.length);
  useProperties(ref, 'disabled', props.disabled);
  useProperties(ref, 'selectedIndex', props.selectedIndex);
  useProperties(ref, 'selectedOptions', props.selectedOptions);
  useProperties(ref, '$presentation', props.$presentation);
  useProperties(ref, 'template', props.template);
  useProperties(ref, 'styles', props.styles);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ({
    autoWidthChanged: (prev, next) => ref.current.autoWidthChanged(prev, next),
    setAutoWidth: () => ref.current.setAutoWidth(),
    validate: () => ref.current.validate(),
    filterOptions: () => ref.current.filterOptions(),
    setPositioning: force => ref.current.setPositioning(force),
    selectFirstOption: () => ref.current.selectFirstOption(),
    setSelectedOptions: () => ref.current.setSelectedOptions(),
    compose: (this_, elementDefinition) =>
      ref.current.compose(this_, elementDefinition)
  }));

  return React.createElement(
    'jp-combobox',
    {
      ref,
      ...filteredProps,
      autocomplete: props.autocomplete,
      placeholder: props.placeholder,
      position: props.position,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      autowidth: props.autowidth ? '' : undefined,
      minimal: props.minimal ? '' : undefined,
      open: props.open ? '' : undefined,
      style: { ...props.style }
    },
    props.children
  );
});
