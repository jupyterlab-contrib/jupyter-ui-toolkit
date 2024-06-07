import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect
} from 'react';
import { provideJupyterDesignSystem, jpTooltip } from '@jupyter/web-components';
provideJupyterDesignSystem().register(jpTooltip());
import { useEventListener, useProperties } from './react-utils.js';

export const Tooltip = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    horizontalViewportLock,
    verticalViewportLock,
    anchor,
    delay,
    position,
    autoUpdateMode,
    visible,
    anchorElement,
    $presentation,
    template,
    styles,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(ref, 'dismiss', props.onDismiss);

  /** Properties - run whenever a property has changed */
  useProperties(ref, 'visible', props.visible);
  useProperties(ref, 'anchorElement', props.anchorElement);
  useProperties(ref, '$presentation', props.$presentation);
  useProperties(ref, 'template', props.template);
  useProperties(ref, 'styles', props.styles);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ({
    compose: (this_, elementDefinition) =>
      ref.current.compose(this_, elementDefinition)
  }));

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
