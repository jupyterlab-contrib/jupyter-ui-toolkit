import { jpTab, provideJupyterDesignSystem } from '@jupyter/web-components';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef
} from 'react';
import { useProperties } from './react-utils.js';
provideJupyterDesignSystem().register(jpTab());

export const Tab = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { className, disabled, ...filteredProps } = props;

  /** Properties - run whenever a property has changed */
  useProperties(ref, 'disabled', props.disabled);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ref.current, [ref.current]);

  // Add web component internal classes on top of `className`
  let allClasses = className ?? '';
  if (ref.current?.classList.contains('vertical')) {
    allClasses += ' vertical';
  }

  return React.createElement(
    'jp-tab',
    {
      ref,
      ...filteredProps,
      class: allClasses.trim(),
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      style: { ...props.style }
    },
    props.children
  );
});
