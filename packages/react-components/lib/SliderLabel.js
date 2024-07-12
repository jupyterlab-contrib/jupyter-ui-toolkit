import {
  jpSliderLabel,
  provideJupyterDesignSystem
} from '@jupyter/web-components';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef
} from 'react';
import { useProperties } from './react-utils.js';
provideJupyterDesignSystem().register(jpSliderLabel());

export const SliderLabel = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { className, hideMark, disabled, position, ...filteredProps } = props;

  /** Properties - run whenever a property has changed */

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ref.current, [ref.current]);

  // Add web component internal classes on top of `className`
  let allClasses = className ?? '';
  if (ref.current?.disabled) {
    allClasses += ' disabled';
  }

  return React.createElement(
    'jp-slider-label',
    {
      ref,
      ...filteredProps,
      position: props.position,
      class: allClasses.trim(),
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      'hide-mark': props.hideMark ? '' : undefined,
      disabled: props.disabled ? '' : undefined,
      style: { ...props.style }
    },
    props.children
  );
});
