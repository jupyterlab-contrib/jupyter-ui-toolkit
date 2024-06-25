import { jpDialog, provideJupyterDesignSystem } from '@jupyter/web-components';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef
} from 'react';
import { useEventListener, useProperties } from './react-utils.js';
provideJupyterDesignSystem().register(jpDialog());

export const Dialog = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    className,
    trapFocus,
    ariaDescribedby,
    ariaLabelledby,
    ariaLabel,
    modal,
    hidden,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(ref, 'cancel', props.onCancel);
  useEventListener(ref, 'close', props.onClose);

  /** Properties - run whenever a property has changed */
  useProperties(ref, 'modal', props.modal);
  useProperties(ref, 'hidden', props.hidden);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ({
    show: () => ref.current.show(),
    hide: () => ref.current.hide(),
    compose: (this_, elementDefinition) =>
      ref.current.compose(this_, elementDefinition)
  }));

  return React.createElement(
    'jp-dialog',
    {
      ref,
      ...filteredProps,
      'aria-describedby': props.ariaDescribedby || props['aria-describedby'],
      'aria-labelledby': props.ariaLabelledby || props['aria-labelledby'],
      'aria-label': props.ariaLabel || props['aria-label'],
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      'trap-focus': props.trapFocus ? '' : undefined,
      style: { ...props.style }
    },
    props.children
  );
});
