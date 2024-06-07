import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect
} from 'react';
import { provideJupyterDesignSystem, jpTabs } from '@jupyter/web-components';
provideJupyterDesignSystem().register(jpTabs());
import { useEventListener, useProperties } from './react-utils.js';

export const Tabs = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    orientation,
    activeid,
    activeindicator,
    activetab,
    $presentation,
    template,
    styles,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(ref, 'change', props.onChange);

  /** Properties - run whenever a property has changed */
  useProperties(ref, 'activeindicator', props.activeindicator);
  useProperties(ref, 'activetab', props.activetab);
  useProperties(ref, '$presentation', props.$presentation);
  useProperties(ref, 'template', props.template);
  useProperties(ref, 'styles', props.styles);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ({
    adjust: adjustment => ref.current.adjust(adjustment),
    compose: (this_, elementDefinition) =>
      ref.current.compose(this_, elementDefinition)
  }));

  return React.createElement(
    'jp-tabs',
    {
      ref,
      ...filteredProps,
      orientation: props.orientation,
      activeid: props.activeid,
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
