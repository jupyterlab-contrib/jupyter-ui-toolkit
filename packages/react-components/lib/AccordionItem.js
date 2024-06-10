import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect
} from 'react';
import {
  provideJupyterDesignSystem,
  jpAccordionItem
} from '@jupyter/web-components';
provideJupyterDesignSystem().register(jpAccordionItem());
import { useEventListener, useProperties } from './react-utils.js';

export const AccordionItem = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    headingLevel,
    id,
    expanded,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(ref, 'change', props.onChange);

  /** Properties - run whenever a property has changed */
  useProperties(ref, 'expanded', props.expanded);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ({
    compose: (this_, elementDefinition) =>
      ref.current.compose(this_, elementDefinition)
  }));

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