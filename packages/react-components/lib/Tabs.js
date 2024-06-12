import { jpTabs, provideJupyterDesignSystem } from '@jupyter/web-components';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef
} from 'react';
import { useEventListener, useProperties } from './react-utils.js';
provideJupyterDesignSystem().register(jpTabs());

export const Tabs = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    orientation,
    activeid,
    activeindicator,
    activetab,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(ref, 'change', props.onChange);

  /** Properties - run whenever a property has changed */
  useProperties(ref, 'activeindicator', props.activeindicator);
  useProperties(ref, 'activetab', props.activetab);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ref.current, [ref.current]);

  return React.createElement(
    'jp-tabs',
    {
      ref,
      ...filteredProps,
      orientation: props.orientation,
      activeid: props.activeid,
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
