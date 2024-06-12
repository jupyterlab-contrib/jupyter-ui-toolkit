// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {
  DataGrid,
  DataGridCell,
  dataGridCellTemplate,
  DataGridRow,
  dataGridRowTemplate,
  dataGridTemplate
} from '@microsoft/fast-foundation';
import { dataGridStyles } from './data-grid.styles.js';
import { dataGridRowStyles } from './data-grid-row.styles.js';
import { dataGridCellStyles } from './data-grid-cell.styles.js';

/**
 * DataGridCell class
 *
 * @public
 * @tagname jp-data-grid-cell
 */
class JupyterDataGridCell extends DataGridCell {}

/**
 * A function that returns a {@link @microsoft/fast-foundation#DataGridCell} registration for configuring the component with a DesignSystem.
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-data-grid-cell>`
 */
export const jpDataGridCell = JupyterDataGridCell.compose({
  baseName: 'data-grid-cell',
  baseClass: DataGridCell,
  template: dataGridCellTemplate,
  styles: dataGridCellStyles
});

/**
 * DataGridRow class
 *
 * @public
 * @tagname jp-data-grid-row
 */
class JupyterDataGridRow extends DataGridRow {}

/**
 * A function that returns a {@link @microsoft/fast-foundation#DataGridRow} registration for configuring the component with a DesignSystem.
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-data-grid-row>`
 */
export const jpDataGridRow = JupyterDataGridRow.compose({
  baseName: 'data-grid-row',
  baseClass: DataGridRow,
  template: dataGridRowTemplate,
  styles: dataGridRowStyles
});

/**
 * DataGrid class
 *
 * @public
 * @tagname jp-data-grid
 */
class JupyterDataGrid extends DataGrid {}

/**
 * A function that returns a {@link @microsoft/fast-foundation#DataGrid} registration for configuring the component with a DesignSystem.
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-data-grid>`
 */
export const jpDataGrid = JupyterDataGrid.compose({
  baseName: 'data-grid',
  baseClass: DataGrid,
  template: dataGridTemplate,
  styles: dataGridStyles
});

export {
  JupyterDataGrid as DataGrid,
  JupyterDataGridRow as DataGridRow,
  JupyterDataGridCell as DataGridCell,
  dataGridCellStyles,
  dataGridStyles,
  dataGridRowStyles
};
