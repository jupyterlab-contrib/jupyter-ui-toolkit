import {
  jpDataGridCell,
  provideJupyterDesignSystem
} from '@jupyter/web-components';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef
} from 'react';
import { useEventListener, useProperties } from './react-utils.js';
provideJupyterDesignSystem().register(jpDataGridCell());

export const DataGridCell = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    className,
    cellType,
    gridColumn,
    rowData,
    columnDefinition,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(ref, 'cell-focused', props.onCellFocused);

  /** Properties - run whenever a property has changed */
  useProperties(ref, 'rowData', props.rowData);
  useProperties(ref, 'columnDefinition', props.columnDefinition);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ref.current, [ref.current]);

  // Add web component internal classes on top of `className`
  let allClasses = className ?? '';
  if (ref.current?.cellType === 'columnheader') {
    allClasses += ' column-header';
  }

  return React.createElement(
    'jp-data-grid-cell',
    {
      ref,
      ...filteredProps,
      'cell-type': props.cellType || props['cell-type'],
      'grid-column': props.gridColumn || props['grid-column'],
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
