import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect
} from 'react';
import {
  provideJupyterDesignSystem,
  jpNumberField
} from '@jupyter/web-components';
provideJupyterDesignSystem().register(jpNumberField());
import { useEventListener, useProperties } from './react-utils.js';

export const NumberField = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
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
    valueAsNumber,
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
  useProperties(ref, 'valueAsNumber', props.valueAsNumber);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ({
    validate: () => ref.current.validate(),
    stepUp: () => ref.current.stepUp(),
    stepDown: () => ref.current.stepDown(),
    select: () => ref.current.select(),
    compose: (this_, elementDefinition) =>
      ref.current.compose(this_, elementDefinition)
  }));

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
