import {
  jpDataGrid,
  provideJupyterDesignSystem
} from '@jupyter/web-components';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef
} from 'react';
import { useProperties } from './react-utils.js';
provideJupyterDesignSystem().register(jpDataGrid());

export const DataGrid = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    className,
    noTabbing,
    generateHeader,
    gridTemplateColumns,
    rowsData,
    columnDefinitions,
    rowItemTemplate,
    cellItemTemplate,
    headerCellItemTemplate,
    focusRowIndex,
    focusColumnIndex,
    rowElementTag,
    ...filteredProps
  } = props;

  /** Properties - run whenever a property has changed */
  useProperties(ref, 'rowsData', props.rowsData);
  useProperties(ref, 'columnDefinitions', props.columnDefinitions);
  useProperties(ref, 'rowItemTemplate', props.rowItemTemplate);
  useProperties(ref, 'cellItemTemplate', props.cellItemTemplate);
  useProperties(ref, 'headerCellItemTemplate', props.headerCellItemTemplate);
  useProperties(ref, 'focusRowIndex', props.focusRowIndex);
  useProperties(ref, 'focusColumnIndex', props.focusColumnIndex);
  useProperties(ref, 'rowElementTag', props.rowElementTag);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ref.current, [ref.current]);

  return React.createElement(
    'jp-data-grid',
    {
      ref,
      ...filteredProps,
      'generate-header': props.generateHeader || props['generate-header'],
      'grid-template-columns':
        props.gridTemplateColumns || props['grid-template-columns'],
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      'no-tabbing': props.noTabbing ? '' : undefined,
      style: { ...props.style }
    },
    props.children
  );
});
