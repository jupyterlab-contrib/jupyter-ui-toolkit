import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect
} from 'react';
import { provideJupyterDesignSystem, jpButton } from '@jupyter/web-components';
provideJupyterDesignSystem().register(jpButton());
import { useProperties } from './react-utils.js';

export const Button = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
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
    $presentation,
    template,
    styles,
    ...filteredProps
  } = props;

  /** Properties - run whenever a property has changed */
  useProperties(ref, 'autofocus', props.autofocus);
  useProperties(ref, 'formnovalidate', props.formnovalidate);
  useProperties(ref, 'defaultSlottedContent', props.defaultSlottedContent);
  useProperties(ref, '$presentation', props.$presentation);
  useProperties(ref, 'template', props.template);
  useProperties(ref, 'styles', props.styles);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ({
    defaultSlottedContentChanged: (oldValue, newValue) =>
      ref.current.defaultSlottedContentChanged(oldValue, newValue),
    validate: () => ref.current.validate(),
    compose: (this_, elementDefinition) =>
      ref.current.compose(this_, elementDefinition)
  }));

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
