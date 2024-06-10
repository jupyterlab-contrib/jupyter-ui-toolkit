import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect
} from 'react';
import {
  provideJupyterDesignSystem,
  jpSkeleton
} from '@jupyter/web-components';
provideJupyterDesignSystem().register(jpSkeleton());
import { useProperties } from './react-utils.js';

export const Skeleton = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    fill,
    shape,
    pattern,
    shimmer,
    ...filteredProps
  } = props;

  /** Properties - run whenever a property has changed */
  useProperties(ref, 'shimmer', props.shimmer);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ({
    compose: (this_, elementDefinition) =>
      ref.current.compose(this_, elementDefinition)
  }));

  return React.createElement(
    'jp-skeleton',
    {
      ref,
      ...filteredProps,
      fill: props.fill,
      shape: props.shape,
      pattern: props.pattern,
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
