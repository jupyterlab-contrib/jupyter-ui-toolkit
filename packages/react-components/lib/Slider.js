import { jpSlider, provideJupyterDesignSystem } from '@jupyter/web-components';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef
} from 'react';
import { useEventListener, useProperties } from './react-utils.js';
provideJupyterDesignSystem().register(jpSlider());

export const Slider = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    className,
    readonly,
    orientation,
    mode,
    readOnly,
    valueAsNumber,
    valueTextFormatter,
    min,
    max,
    step,
    disabled,
    required,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(ref, 'change', props.onChange);

  /** Properties - run whenever a property has changed */
  useProperties(ref, 'readOnly', props.readOnly);
  useProperties(ref, 'valueAsNumber', props.valueAsNumber);
  useProperties(ref, 'valueTextFormatter', props.valueTextFormatter);
  useProperties(ref, 'min', props.min);
  useProperties(ref, 'max', props.max);
  useProperties(ref, 'step', props.step);
  useProperties(ref, 'disabled', props.disabled);
  useProperties(ref, 'required', props.required);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ref.current, [ref.current]);

  return React.createElement(
    'jp-slider',
    {
      ref,
      ...filteredProps,
      orientation: props.orientation,
      mode: props.mode,
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
