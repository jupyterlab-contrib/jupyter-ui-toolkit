import { jpOption, provideJupyterDesignSystem } from '@jupyter/web-components';
import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { useProperties } from './react-utils.js';
provideJupyterDesignSystem().register(jpOption());

export const Option = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    className,
    selected,
    value,
    checked,
    content,
    defaultSelected,
    disabled,
    selectedAttribute,
    dirtyValue,
    ...filteredProps
  } = props;

  /** Properties - run whenever a property has changed */
  useProperties(ref, 'checked', props.checked);
  useProperties(ref, 'content', props.content);
  useProperties(ref, 'defaultSelected', props.defaultSelected);
  useProperties(ref, 'disabled', props.disabled);
  useProperties(ref, 'selectedAttribute', props.selectedAttribute);
  useProperties(ref, 'dirtyValue', props.dirtyValue);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ref.current, [ref.current]);

  return React.createElement(
    'jp-option',
    {
      ref,
      ...filteredProps,
      value: props.value,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      selected: props.selected ? '' : undefined,
      style: { ...props.style }
    },
    props.children
  );
});
