import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect
} from 'react';
import {
  provideJupyterDesignSystem,
  jpBreadcrumb
} from '@jupyter/web-components';
provideJupyterDesignSystem().register(jpBreadcrumb());
import { useProperties } from './react-utils.js';

export const Breadcrumb = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { $presentation, template, styles, ...filteredProps } = props;

  /** Properties - run whenever a property has changed */
  useProperties(ref, '$presentation', props.$presentation);
  useProperties(ref, 'template', props.template);
  useProperties(ref, 'styles', props.styles);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ({
    compose: (this_, elementDefinition) =>
      ref.current.compose(this_, elementDefinition)
  }));

  return React.createElement(
    'jp-breadcrumb',
    {
      ref,
      ...filteredProps,
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
