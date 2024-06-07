import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect
} from 'react';
import { provideJupyterDesignSystem, jpListbox } from '@jupyter/web-components';
provideJupyterDesignSystem().register(jpListbox());
import { useEventListener, useProperties } from './react-utils.js';

export const Listbox = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    multiple,
    size,
    length,
    options,
    disabled,
    selectedIndex,
    selectedOptions,
    $presentation,
    template,
    styles,
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
  useProperties(ref, '$presentation', props.$presentation);
  useProperties(ref, 'template', props.template);
  useProperties(ref, 'styles', props.styles);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ({
    setSelectedOptions: () => ref.current.setSelectedOptions(),
    selectFirstOption: () => ref.current.selectFirstOption(),
    compose: (this_, elementDefinition) =>
      ref.current.compose(this_, elementDefinition)
  }));

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
