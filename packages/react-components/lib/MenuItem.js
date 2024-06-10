import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect
} from 'react';
import {
  provideJupyterDesignSystem,
  jpMenuItem
} from '@jupyter/web-components';
provideJupyterDesignSystem().register(jpMenuItem());
import { useEventListener, useProperties } from './react-utils.js';

export const MenuItem = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    role,
    disabled,
    expanded,
    checked,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(ref, 'expanded-change', props.onExpandedChange);
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
