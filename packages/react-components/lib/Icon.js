import React, {
  forwardRef,
  useImperativeHandle,
  useRef
} from 'react';
import { useProperties } from './react-utils.js';

export const Icon = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { className, name, ...filteredProps } = props;

  /** Properties - run whenever a property has changed */
  useProperties(ref, 'name', props.name);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ref.current, [ref.current]);

  return React.createElement(
    'jp-icon',
    {
      ref,
      ...filteredProps,
      class: props.className,
      style: { ...props.style }
    }
  );
});
