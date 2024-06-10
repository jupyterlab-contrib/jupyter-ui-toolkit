import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect
} from 'react';
import {
  provideJupyterDesignSystem,
  jpRadioGroup
} from '@jupyter/web-components';
provideJupyterDesignSystem().register(jpRadioGroup());
import { useEventListener, useProperties } from './react-utils.js';

export const RadioGroup = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    readonly,
    disabled,
    name,
    value,
    orientation,
    readOnly,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(ref, 'change', props.onChange);

  /** Properties - run whenever a property has changed */
  useProperties(ref, 'readOnly', props.readOnly);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ref.current, [ref.current]);

  return React.createElement(
    'jp-radio-group',
    {
      ref,
      ...filteredProps,
      name: props.name,
      value: props.value,
      orientation: props.orientation,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      readonly: props.readonly ? '' : undefined,
      disabled: props.disabled ? '' : undefined,
      style: { ...props.style }
    },
    props.children
  );
});
