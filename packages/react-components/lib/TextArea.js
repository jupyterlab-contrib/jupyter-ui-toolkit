import {
  jpTextArea,
  provideJupyterDesignSystem
} from '@jupyter/web-components';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef
} from 'react';
import { useEventListener, useProperties } from './react-utils.js';
provideJupyterDesignSystem().register(jpTextArea());

export const TextArea = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    className,
    appearance,
    resize,
    form,
    list,
    name,
    placeholder,
    readOnly,
    autofocus,
    maxlength,
    minlength,
    cols,
    rows,
    spellcheck,
    disabled,
    required,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(ref, 'select', props.onSelect);
  useEventListener(ref, 'change', props.onChange);

  /** Properties - run whenever a property has changed */
  useProperties(ref, 'readOnly', props.readOnly);
  useProperties(ref, 'autofocus', props.autofocus);
  useProperties(ref, 'maxlength', props.maxlength);
  useProperties(ref, 'minlength', props.minlength);
  useProperties(ref, 'cols', props.cols);
  useProperties(ref, 'rows', props.rows);
  useProperties(ref, 'spellcheck', props.spellcheck);
  useProperties(ref, 'disabled', props.disabled);
  useProperties(ref, 'required', props.required);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ref.current, [ref.current]);

  return React.createElement(
    'jp-text-area',
    {
      ref,
      ...filteredProps,
      appearance: props.appearance,
      resize: props.resize,
      form: props.form,
      list: props.list,
      name: props.name,
      placeholder: props.placeholder,
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
