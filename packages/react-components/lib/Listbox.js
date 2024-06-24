import { jpListbox, provideJupyterDesignSystem } from '@jupyter/web-components';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef
} from 'react';
import { useEventListener, useProperties } from './react-utils.js';
provideJupyterDesignSystem().register(jpListbox());

export const Listbox = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    className,
    multiple,
    size,
    length,
    options,
    disabled,
    selectedIndex,
    selectedOptions,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(ref, 'change', props.onChange);

  /** Properties - run whenever a property has changed */
  useProperties(ref, 'multiple', props.multiple);
  useProperties(ref, 'size', props.size);
  useProperties(ref, 'length', props.length);
  useProperties(ref, 'options', props.options);
  useProperties(ref, 'disabled', props.disabled);
  useProperties(ref, 'selectedIndex', props.selectedIndex);
  useProperties(ref, 'selectedOptions', props.selectedOptions);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ref.current, [ref.current]);

  return React.createElement(
    'jp-listbox',
    {
      ref,
      ...filteredProps,
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
