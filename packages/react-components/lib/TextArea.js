import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect
} from 'react';
import {
  provideJupyterDesignSystem,
  jpTextArea
} from '@jupyter/web-components';
provideJupyterDesignSystem().register(jpTextArea());
import { useEventListener, useProperties } from './react-utils.js';

export const TextArea = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
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

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ({
    select: () => ref.current.select(),
    validate: () => ref.current.validate(),
    compose: (this_, elementDefinition) =>
      ref.current.compose(this_, elementDefinition)
  }));

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
