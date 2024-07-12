import {
  jpTreeItem,
  provideJupyterDesignSystem
} from '@jupyter/web-components';
import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { useEventListener, useProperties } from './react-utils.js';
provideJupyterDesignSystem().register(jpTreeItem());

export const TreeItem = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { className, expanded, selected, disabled, ...filteredProps } = props;

  /** Event listeners - run once */
  useEventListener(ref, 'expanded-change', props.onExpand);
  useEventListener(ref, 'selected-change', props.onSelect);

  /** Properties - run whenever a property has changed */
  useProperties(ref, 'expanded', props.expanded);
  useProperties(ref, 'selected', props.selected);
  useProperties(ref, 'disabled', props.disabled);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ref.current, [ref.current]);

  // Add web component internal classes on top of `className`
  let allClasses = className ?? '';
  if (ref.current?.nested) {
    allClasses += ' nested';
  }

  return React.createElement(
    'jp-tree-item',
    {
      ref,
      ...filteredProps,
      class: allClasses.trim(),
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      style: { ...props.style }
    },
    props.children
  );
});
