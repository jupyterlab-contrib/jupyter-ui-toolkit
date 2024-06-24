import { jpRadio, provideJupyterDesignSystem } from '@jupyter/web-components';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef
} from 'react';
import { useEventListener, useProperties } from './react-utils.js';
provideJupyterDesignSystem().register(jpRadio());

export const Radio = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    className,
    readonly,
    readOnly,
    name,
    checked,
    disabled,
    required,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(ref, 'change', props.onChange);

  /** Properties - run whenever a property has changed */
  useProperties(ref, 'readOnly', props.readOnly);
  useProperties(ref, 'name', props.name);
  useProperties(ref, 'checked', props.checked);
  useProperties(ref, 'disabled', props.disabled);
  useProperties(ref, 'required', props.required);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ref.current, [ref.current]);

  return React.createElement(
    'jp-radio',
    {
      ref,
      ...filteredProps,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      readonly: props.readonly ? '' : undefined,
      style: { ...props.style }
    },
    props.children
  );
});
