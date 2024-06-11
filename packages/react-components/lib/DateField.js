import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect
} from 'react';
import {
  provideJupyterDesignSystem,
  jpDateField
} from '@jupyter/web-components';
provideJupyterDesignSystem().register(jpDateField());
import { useEventListener, useProperties } from './react-utils.js';

export const DateField = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    autofocus,
    step,
    max,
    min,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(ref, 'input', props.onInput);
  useEventListener(ref, 'change', props.onChange);

  /** Properties - run whenever a property has changed */
  useProperties(ref, 'autofocus', props.autofocus);
  useProperties(ref, 'step', props.step);
  useProperties(ref, 'max', props.max);
  useProperties(ref, 'min', props.min);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ref.current, [ref.current]);

  return React.createElement(
    'jp-date-field',
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
