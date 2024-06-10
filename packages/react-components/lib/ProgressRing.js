import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect
} from 'react';
import {
  provideJupyterDesignSystem,
  jpProgressRing
} from '@jupyter/web-components';
provideJupyterDesignSystem().register(jpProgressRing());
import { useProperties } from './react-utils.js';

export const ProgressRing = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    value,
    min,
    max,
    paused,
    ...filteredProps
  } = props;

  /** Properties - run whenever a property has changed */
  useProperties(ref, 'value', props.value);
  useProperties(ref, 'min', props.min);
  useProperties(ref, 'max', props.max);
  useProperties(ref, 'paused', props.paused);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ({
    compose: (this_, elementDefinition) =>
      ref.current.compose(this_, elementDefinition)
  }));

  return React.createElement(
    'jp-progress-ring',
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
