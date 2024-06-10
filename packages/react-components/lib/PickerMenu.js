import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect
} from 'react';
import {
  provideJupyterDesignSystem,
  jpPickerMenu
} from '@jupyter/web-components';
provideJupyterDesignSystem().register(jpPickerMenu());
import { useProperties } from './react-utils.js';

export const PickerMenu = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    suggestionsAvailableText,
    ...filteredProps
  } = props;

  /** Properties - run whenever a property has changed */
  useProperties(
    ref,
    'suggestionsAvailableText',
    props.suggestionsAvailableText
  );

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ref.current, [ref.current]);

  return React.createElement(
    'jp-draft-picker-menu',
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
