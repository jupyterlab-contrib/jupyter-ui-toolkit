import { jpTooltip, provideJupyterDesignSystem } from '@jupyter/web-components';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef
} from 'react';
import { useEventListener, useProperties } from './react-utils.js';
provideJupyterDesignSystem().register(jpTooltip());

export const Tooltip = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    className,
    horizontalViewportLock,
    verticalViewportLock,
    anchor,
    delay,
    position,
    autoUpdateMode,
    visible,
    anchorElement,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(ref, 'dismiss', props.onDismiss);

  /** Properties - run whenever a property has changed */
  useProperties(ref, 'visible', props.visible);
  useProperties(ref, 'anchorElement', props.anchorElement);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ref.current, [ref.current]);

  return React.createElement(
    'jp-tooltip',
    {
      ref,
      ...filteredProps,
      anchor: props.anchor,
      delay: props.delay,
      position: props.position,
      'auto-update-mode': props.autoUpdateMode || props['auto-update-mode'],
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      'horizontal-viewport-lock': props.horizontalViewportLock ? '' : undefined,
      'vertical-viewport-lock': props.verticalViewportLock ? '' : undefined,
      style: { ...props.style }
    },
    props.children
  );
});
