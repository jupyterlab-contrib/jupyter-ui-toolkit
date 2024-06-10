import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect
} from 'react';
import {
  provideJupyterDesignSystem,
  jpAccordion
} from '@jupyter/web-components';
provideJupyterDesignSystem().register(jpAccordion());
import { useEventListener, useProperties } from './react-utils.js';

export const Accordion = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { expandMode, ...filteredProps } =
    props;

  /** Event listeners - run once */
  useEventListener(ref, 'change', props.onChange);

  /** Properties - run whenever a property has changed */

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ({
    compose: (this_, elementDefinition) =>
      ref.current.compose(this_, elementDefinition)
  }));

  return React.createElement(
    'jp-accordion',
    {
      ref,
      ...filteredProps,
      'expand-mode': props.expandMode || props['expand-mode'],
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
