import {
  jpDataGridRow,
  provideJupyterDesignSystem
} from '@jupyter/web-components';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef
} from 'react';
import { useEventListener, useProperties } from './react-utils.js';
provideJupyterDesignSystem().register(jpDataGridRow());

export const DataGridRow = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    className,
    gridTemplateColumns,
    rowType,
    rowData,
    columnDefinitions,
    cellItemTemplate,
    headerCellItemTemplate,
    rowIndex,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(ref, 'row-focused', props.onRowFocused);

  /** Properties - run whenever a property has changed */
  useProperties(ref, 'rowData', props.rowData);
  useProperties(ref, 'columnDefinitions', props.columnDefinitions);
  useProperties(ref, 'cellItemTemplate', props.cellItemTemplate);
  useProperties(ref, 'headerCellItemTemplate', props.headerCellItemTemplate);
  useProperties(ref, 'rowIndex', props.rowIndex);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ref.current, [ref.current]);

  // Add web component internal classes on top of `className`
  let allClasses = className ?? '';
  if (ref.current) {
    if (ref.current.rowType !== 'default') {
      allClasses += ` ${ref.current.rowType}`;
    }
  }

  return React.createElement(
    'jp-data-grid-row',
    {
      ref,
      ...filteredProps,
      'grid-template-columns':
        props.gridTemplateColumns || props['grid-template-columns'],
      'row-type': props.rowType || props['row-type'],
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
