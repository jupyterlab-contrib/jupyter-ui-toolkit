import { jpSelect, provideJupyterDesignSystem } from '@jupyter/web-components';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef
} from 'react';
import { useEventListener, useProperties } from './react-utils.js';
provideJupyterDesignSystem().register(jpSelect());

export const Select = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    className,
    autowidth,
    minimal,
    open,
    position,
    autoWidth,
    value,
    displayValue,
    multiple,
    size,
    length,
    options,
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
  useProperties(ref, 'value', props.value);
  useProperties(ref, 'displayValue', props.displayValue);
  useProperties(ref, 'multiple', props.multiple);
  useProperties(ref, 'size', props.size);
  useProperties(ref, 'length', props.length);
  useProperties(ref, 'options', props.options);
  useProperties(ref, 'disabled', props.disabled);
  useProperties(ref, 'selectedIndex', props.selectedIndex);
  useProperties(ref, 'selectedOptions', props.selectedOptions);
  useProperties(ref, 'required', props.required);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ref.current, [ref.current]);

  return React.createElement(
    'jp-select',
    {
      ref,
      ...filteredProps,
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
