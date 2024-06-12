import {
  jpMenuItem,
  provideJupyterDesignSystem
} from '@jupyter/web-components';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef
} from 'react';
import { useEventListener, useProperties } from './react-utils.js';
provideJupyterDesignSystem().register(jpMenuItem());

export const MenuItem = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { role, disabled, expanded, checked, ...filteredProps } = props;

  /** Event listeners - run once */
  useEventListener(ref, 'expanded-change', props.onExpand);
  useEventListener(ref, 'change', props.onChange);

  /** Properties - run whenever a property has changed */
  useProperties(ref, 'disabled', props.disabled);
  useProperties(ref, 'expanded', props.expanded);
  useProperties(ref, 'checked', props.checked);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ref.current, [ref.current]);

  return React.createElement(
    'jp-menu-item',
    {
      ref,
      ...filteredProps,
      role: props.role,
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
