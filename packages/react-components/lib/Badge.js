import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect
} from 'react';
import { provideJupyterDesignSystem, jpBadge } from '@jupyter/web-components';
provideJupyterDesignSystem().register(jpBadge());
import { useProperties } from './react-utils.js';

export const Badge = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    fill,
    color,
    circular,
    ...filteredProps
  } = props;

  /** Properties - run whenever a property has changed */
  useProperties(ref, 'circular', props.circular);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ref.current, [ref.current]);

  return React.createElement(
    'jp-badge',
    {
      ref,
      ...filteredProps,
      fill: props.fill,
      color: props.color,
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
