import {
  jpAccordionItem,
  provideJupyterDesignSystem
} from '@jupyter/web-components';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef
} from 'react';
import { useEventListener, useProperties } from './react-utils.js';
provideJupyterDesignSystem().register(jpAccordionItem());

export const AccordionItem = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { className, headingLevel, id, expanded, ...filteredProps } = props;

  /** Event listeners - run once */
  useEventListener(ref, 'change', props.onChange);

  /** Properties - run whenever a property has changed */
  useProperties(ref, 'expanded', props.expanded);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ref.current, [ref.current]);

  return React.createElement(
    'jp-accordion-item',
    {
      ref,
      ...filteredProps,
      'heading-level': props.headingLevel || props['heading-level'],
      id: props.id,
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
