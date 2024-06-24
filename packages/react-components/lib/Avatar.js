import { jpAvatar, provideJupyterDesignSystem } from '@jupyter/web-components';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef
} from 'react';
import { useProperties } from './react-utils.js';
provideJupyterDesignSystem().register(jpAvatar());

export const Avatar = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { className, src, alt, fill, color, link, shape, ...filteredProps } =
    props;

  /** Properties - run whenever a property has changed */

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ref.current, [ref.current]);

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
