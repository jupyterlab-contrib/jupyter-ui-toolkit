import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect
} from 'react';
import { provideJupyterDesignSystem, jpAnchor } from '@jupyter/web-components';
provideJupyterDesignSystem().register(jpAnchor());
import { useProperties } from './react-utils.js';

export const Anchor = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    appearance,
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
  useImperativeHandle(forwardedRef, () => ({
    compose: (this_, elementDefinition) =>
      ref.current.compose(this_, elementDefinition)
  }));

  return React.createElement(
    'jp-anchor',
    {
      ref,
      ...filteredProps,
      appearance: props.appearance,
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
