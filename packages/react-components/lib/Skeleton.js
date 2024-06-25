import {
  jpSkeleton,
  provideJupyterDesignSystem
} from '@jupyter/web-components';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef
} from 'react';
import { useProperties } from './react-utils.js';
provideJupyterDesignSystem().register(jpSkeleton());

export const Skeleton = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { className, fill, shape, pattern, shimmer, ...filteredProps } = props;

  /** Properties - run whenever a property has changed */
  useProperties(ref, 'shimmer', props.shimmer);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ref.current, [ref.current]);

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
