import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect
} from 'react';
import {
  provideJupyterDesignSystem,
  jpDataGridCell
} from '@jupyter/web-components';
provideJupyterDesignSystem().register(jpDataGridCell());
import { useEventListener, useProperties } from './react-utils.js';

export const DataGridCell = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
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
  useImperativeHandle(forwardedRef, () => ({
    compose: (this_, elementDefinition) =>
      ref.current.compose(this_, elementDefinition)
  }));

  return React.createElement(
    'jp-data-grid-cell',
    {
      ref,
      ...filteredProps,
      'cell-type': props.cellType || props['cell-type'],
      'grid-column': props.gridColumn || props['grid-column'],
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