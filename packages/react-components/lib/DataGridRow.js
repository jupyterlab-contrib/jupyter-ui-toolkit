import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect
} from 'react';
import {
  provideJupyterDesignSystem,
  jpDataGridRow
} from '@jupyter/web-components';
provideJupyterDesignSystem().register(jpDataGridRow());
import { useEventListener, useProperties } from './react-utils.js';

export const DataGridRow = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    gridTemplateColumns,
    rowType,
    rowData,
    columnDefinitions,
    cellItemTemplate,
    headerCellItemTemplate,
    rowIndex,
    $presentation,
    template,
    styles,
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
  useProperties(ref, '$presentation', props.$presentation);
  useProperties(ref, 'template', props.template);
  useProperties(ref, 'styles', props.styles);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ({
    compose: (this_, elementDefinition) =>
      ref.current.compose(this_, elementDefinition)
  }));

  return React.createElement(
    'jp-data-grid-row',
    {
      ref,
      ...filteredProps,
      'grid-template-columns':
        props.gridTemplateColumns || props['grid-template-columns'],
      'row-type': props.rowType || props['row-type'],
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
