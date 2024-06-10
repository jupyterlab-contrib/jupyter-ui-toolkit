import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect
} from 'react';
import {
  provideJupyterDesignSystem,
  jpDisclosure
} from '@jupyter/web-components';
provideJupyterDesignSystem().register(jpDisclosure());
import { useEventListener, useProperties } from './react-utils.js';

export const Disclosure = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    appearance,
    title,
    expanded,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(ref, 'toggle', props.onToggle);

  /** Properties - run whenever a property has changed */
  useProperties(ref, 'expanded', props.expanded);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ref.current, [ref.current]);

  return React.createElement(
    'jp-disclosure',
    {
      ref,
      ...filteredProps,
      appearance: props.appearance,
      title: props.title,
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
