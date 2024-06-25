import {
  jpAnchoredRegion,
  provideJupyterDesignSystem
} from '@jupyter/web-components';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef
} from 'react';
import { useEventListener, useProperties } from './react-utils.js';
provideJupyterDesignSystem().register(jpAnchoredRegion());

export const AnchoredRegion = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    className,
    horizontalViewportLock,
    horizontalInset,
    verticalViewportLock,
    verticalInset,
    fixedPlacement,
    anchor,
    viewport,
    horizontalPositioningMode,
    horizontalDefaultPosition,
    horizontalThreshold,
    horizontalScaling,
    verticalPositioningMode,
    verticalDefaultPosition,
    verticalThreshold,
    verticalScaling,
    autoUpdateMode,
    anchorElement,
    viewportElement,
    verticalPosition,
    horizontalPosition,
    update,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(ref, 'loaded', props.onLoaded);
  useEventListener(ref, 'positionchange', props.onPositionchange);

  /** Properties - run whenever a property has changed */
  useProperties(ref, 'anchorElement', props.anchorElement);
  useProperties(ref, 'viewportElement', props.viewportElement);
  useProperties(ref, 'verticalPosition', props.verticalPosition);
  useProperties(ref, 'horizontalPosition', props.horizontalPosition);
  useProperties(ref, 'update', props.update);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ref.current, [ref.current]);

  return React.createElement(
    'jp-anchored-region',
    {
      ref,
      ...filteredProps,
      anchor: props.anchor,
      viewport: props.viewport,
      'horizontal-positioning-mode':
        props.horizontalPositioningMode || props['horizontal-positioning-mode'],
      'horizontal-default-position':
        props.horizontalDefaultPosition || props['horizontal-default-position'],
      'horizontal-threshold':
        props.horizontalThreshold || props['horizontal-threshold'],
      'horizontal-scaling':
        props.horizontalScaling || props['horizontal-scaling'],
      'vertical-positioning-mode':
        props.verticalPositioningMode || props['vertical-positioning-mode'],
      'vertical-default-position':
        props.verticalDefaultPosition || props['vertical-default-position'],
      'vertical-threshold':
        props.verticalThreshold || props['vertical-threshold'],
      'vertical-scaling': props.verticalScaling || props['vertical-scaling'],
      'auto-update-mode': props.autoUpdateMode || props['auto-update-mode'],
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      'horizontal-viewport-lock': props.horizontalViewportLock ? '' : undefined,
      'horizontal-inset': props.horizontalInset ? '' : undefined,
      'vertical-viewport-lock': props.verticalViewportLock ? '' : undefined,
      'vertical-inset': props.verticalInset ? '' : undefined,
      'fixed-placement': props.fixedPlacement ? '' : undefined,
      style: { ...props.style }
    },
    props.children
  );
});
