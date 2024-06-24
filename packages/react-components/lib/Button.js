import { jpButton, provideJupyterDesignSystem } from '@jupyter/web-components';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef
} from 'react';
import { useProperties } from './react-utils.js';
provideJupyterDesignSystem().register(jpButton());

export const Button = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    className,
    minimal,
    appearance,
    form,
    formaction,
    formenctype,
    formmethod,
    formtarget,
    type,
    autofocus,
    formnovalidate,
    defaultSlottedContent,
    disabled,
    required,
    ...filteredProps
  } = props;

  /** Properties - run whenever a property has changed */
  useProperties(ref, 'autofocus', props.autofocus);
  useProperties(ref, 'formnovalidate', props.formnovalidate);
  useProperties(ref, 'defaultSlottedContent', props.defaultSlottedContent);
  useProperties(ref, 'disabled', props.disabled);
  useProperties(ref, 'required', props.required);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ref.current, [ref.current]);

  return React.createElement(
    'jp-button',
    {
      ref,
      ...filteredProps,
      appearance: props.appearance,
      form: props.form,
      formaction: props.formaction,
      formenctype: props.formenctype,
      formmethod: props.formmethod,
      formtarget: props.formtarget,
      type: props.type,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      minimal: props.minimal ? '' : undefined,
      style: { ...props.style }
    },
    props.children
  );
});
