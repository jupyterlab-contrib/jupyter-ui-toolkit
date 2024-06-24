import {
  jpNumberField,
  provideJupyterDesignSystem
} from '@jupyter/web-components';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef
} from 'react';
import { useEventListener, useProperties } from './react-utils.js';
provideJupyterDesignSystem().register(jpNumberField());

export const NumberField = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    className,
    readonly,
    hideStep,
    appearance,
    placeholder,
    list,
    readOnly,
    autofocus,
    maxlength,
    minlength,
    size,
    step,
    max,
    min,
    disabled,
    required,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(ref, 'input', props.onInput);
  useEventListener(ref, 'change', props.onChange);

  /** Properties - run whenever a property has changed */
  useProperties(ref, 'readOnly', props.readOnly);
  useProperties(ref, 'autofocus', props.autofocus);
  useProperties(ref, 'maxlength', props.maxlength);
  useProperties(ref, 'minlength', props.minlength);
  useProperties(ref, 'size', props.size);
  useProperties(ref, 'step', props.step);
  useProperties(ref, 'max', props.max);
  useProperties(ref, 'min', props.min);
  useProperties(ref, 'disabled', props.disabled);
  useProperties(ref, 'required', props.required);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ref.current, [ref.current]);

  return React.createElement(
    'jp-number-field',
    {
      ref,
      ...filteredProps,
      appearance: props.appearance,
      placeholder: props.placeholder,
      list: props.list,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      readonly: props.readonly ? '' : undefined,
      'hide-step': props.hideStep ? '' : undefined,
      style: { ...props.style }
    },
    props.children
  );
});
