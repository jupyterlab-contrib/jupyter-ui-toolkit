import {
  jpTreeView,
  provideJupyterDesignSystem
} from '@jupyter/web-components';
import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { useProperties } from './react-utils.js';

provideJupyterDesignSystem().register(jpTreeView());

export const TreeView = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    renderCollapsedNodes,
    currentSelected,
    ...filteredProps
  } = props;

  /** Properties - run whenever a property has changed */
  useProperties(ref, 'currentSelected', props.currentSelected);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ({
    compose: (this_, elementDefinition) =>
      ref.current.compose(this_, elementDefinition)
  }));

  return React.createElement(
    'jp-tree-view',
    {
      ref,
      ...filteredProps,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      'render-collapsed-nodes': props.renderCollapsedNodes ? '' : undefined,
      style: { ...props.style }
    },
    props.children
  );
});