import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect
} from 'react';
import { provideJupyterDesignSystem, jpAvatar } from '@jupyter/web-components';
provideJupyterDesignSystem().register(jpAvatar());
import { useProperties } from './react-utils.js';

export const Avatar = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    src,
    alt,
    fill,
    color,
    link,
    shape,
    ...filteredProps
  } = props;

  /** Properties - run whenever a property has changed */

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ({
    compose: (this_, elementDefinition) =>
      ref.current.compose(this_, elementDefinition)
  }));

  return React.createElement(
    'jp-avatar',
    {
      ref,
      ...filteredProps,
      src: props.src,
      alt: props.alt,
      fill: props.fill,
      color: props.color,
      link: props.link,
      shape: props.shape,
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
