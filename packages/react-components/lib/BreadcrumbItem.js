import {
  jpBreadcrumbItem,
  provideJupyterDesignSystem
} from '@jupyter/web-components';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef
} from 'react';
import { useProperties } from './react-utils.js';
provideJupyterDesignSystem().register(jpBreadcrumbItem());

export const BreadcrumbItem = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    className,
    download,
    href,
    hreflang,
    ping,
    referrerpolicy,
    rel,
    target,
    type,
    control,
    ...filteredProps
  } = props;

  /** Properties - run whenever a property has changed */
  useProperties(ref, 'control', props.control);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ref.current, [ref.current]);

  return React.createElement(
    'jp-breadcrumb-item',
    {
      ref,
      ...filteredProps,
      download: props.download,
      href: props.href,
      hreflang: props.hreflang,
      ping: props.ping,
      referrerpolicy: props.referrerpolicy,
      rel: props.rel,
      target: props.target,
      type: props.type,
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
