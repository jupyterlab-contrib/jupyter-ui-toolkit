import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect
} from 'react';
import { provideJupyterDesignSystem, jpMenu } from '@jupyter/web-components';
provideJupyterDesignSystem().register(jpMenu());
import { useProperties } from './react-utils.js';

export const Menu = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { ...filteredProps } = props;

  /** Properties - run whenever a property has changed */

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ({
    focus: () => ref.current.focus(),
    collapseExpandedItem: () => ref.current.collapseExpandedItem(),
    compose: (this_, elementDefinition) =>
      ref.current.compose(this_, elementDefinition)
  }));

  return React.createElement(
    'jp-menu',
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
