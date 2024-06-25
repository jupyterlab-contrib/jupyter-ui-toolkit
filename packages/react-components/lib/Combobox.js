import {
  jpCombobox,
  provideJupyterDesignSystem
} from '@jupyter/web-components';
import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { useEventListener, useProperties } from './react-utils.js';
provideJupyterDesignSystem().register(jpCombobox());

export const Combobox = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    className,
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
    required,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(ref, 'input', props.onInput);
  useEventListener(ref, 'change', props.onChange);

  /** Properties - run whenever a property has changed */
  useProperties(ref, 'autoWidth', props.autoWidth);
  useProperties(ref, 'filteredOptions', props.filteredOptions);
  useProperties(ref, 'options', props.options);
  useProperties(ref, 'value', props.value);
  useProperties(ref, 'length', props.length);
  useProperties(ref, 'disabled', props.disabled);
  useProperties(ref, 'selectedIndex', props.selectedIndex);
  useProperties(ref, 'selectedOptions', props.selectedOptions);
  useProperties(ref, 'required', props.required);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ref.current, [ref.current]);

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
