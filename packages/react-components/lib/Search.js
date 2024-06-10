import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect
} from 'react';
import { provideJupyterDesignSystem, jpSearch } from '@jupyter/web-components';
provideJupyterDesignSystem().register(jpSearch());
import { useEventListener, useProperties } from './react-utils.js';

export const Search = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    readonly,
    appearance,
    placeholder,
    list,
    pattern,
    readOnly,
    autofocus,
    maxlength,
    minlength,
    size,
    spellcheck,
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
  useProperties(ref, 'spellcheck', props.spellcheck);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ref.current, [ref.current]);

  return React.createElement(
    'jp-search',
    {
      ref,
      ...filteredProps,
      appearance: props.appearance,
      placeholder: props.placeholder,
      list: props.list,
      pattern: props.pattern,
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
