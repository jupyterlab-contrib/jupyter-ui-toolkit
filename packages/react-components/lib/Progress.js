import {
  jpProgress,
  provideJupyterDesignSystem
} from '@jupyter/web-components';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef
} from 'react';
import { useProperties } from './react-utils.js';
provideJupyterDesignSystem().register(jpProgress());

export const Progress = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { className, value, min, max, paused, ...filteredProps } = props;

  /** Properties - run whenever a property has changed */
  useProperties(ref, 'value', props.value);
  useProperties(ref, 'min', props.min);
  useProperties(ref, 'max', props.max);
  useProperties(ref, 'paused', props.paused);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ref.current, [ref.current]);

  return React.createElement(
    'jp-progress',
    {
      ref,
      ...filteredProps,
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
