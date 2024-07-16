import {
  jpTreeView,
  provideJupyterDesignSystem
} from '@jupyter/web-components';
import React, {
  forwardRef,
  useLayoutEffect,
  useImperativeHandle,
  useRef
} from 'react';
import { useProperties } from './react-utils.js';

provideJupyterDesignSystem().register(jpTreeView());

export const TreeView = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { className, renderCollapsedNodes, currentSelected, ...filteredProps } =
    props;

  useLayoutEffect(() => {
    // Fix using private API to force refresh of nested flag on
    // first level of tree items.
    ref.current?.setItems();
  }, [ref.current]);

  /** Properties - run whenever a property has changed */
  useProperties(ref, 'currentSelected', props.currentSelected);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ref.current, [ref.current]);

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
