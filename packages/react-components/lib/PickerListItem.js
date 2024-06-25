import {
  jpPickerListItem,
  provideJupyterDesignSystem
} from '@jupyter/web-components';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef
} from 'react';
import { useProperties } from './react-utils.js';
provideJupyterDesignSystem().register(jpPickerListItem());

export const PickerListItem = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { className, value, contentsTemplate, ...filteredProps } = props;

  /** Properties - run whenever a property has changed */
  useProperties(ref, 'contentsTemplate', props.contentsTemplate);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ref.current, [ref.current]);

  return React.createElement(
    'jp-draft-picker-list-item',
    {
      ref,
      ...filteredProps,
      value: props.value,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      style: { ...props.style }
    },
    props.children
  );
});
