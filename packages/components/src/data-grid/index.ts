// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  DataGrid,
  DataGridCell,
  dataGridCellTemplate,
  DataGridRow,
  dataGridRowTemplate,
  dataGridTemplate
} from '@microsoft/fast-foundation';
import { dataGridStyles, dataGridRowStyles } from '@microsoft/fast-components';
import { dataGridCellStyles } from './data-grid-cell.styles';

/**
 * A function that returns a {@link @microsoft/fast-foundation#DataGridCell} registration for configuring the component with a DesignSystem.
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-data-grid-cell>`
 */
export const jpDataGridCell = DataGridCell.compose({
  baseName: 'data-grid-cell',
  template: dataGridCellTemplate,
  styles: dataGridCellStyles
});

/**
 * A function that returns a {@link @microsoft/fast-foundation#DataGridRow} registration for configuring the component with a DesignSystem.
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-data-grid-row>`
 */
export const jpDataGridRow = DataGridRow.compose({
  baseName: 'data-grid-row',
  template: dataGridRowTemplate,
  styles: dataGridRowStyles
});

/**
 * A function that returns a {@link @microsoft/fast-foundation#DataGrid} registration for configuring the component with a DesignSystem.
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-data-grid>`
 */
export const jpDataGrid = DataGrid.compose({
  baseName: 'data-grid',
  template: dataGridTemplate,
  styles: dataGridStyles
});

/**
 * Base class for DataGrid
 * @public
 */
export { DataGrid };

/**
 * Base class for DataGridRow
 * @public
 */
export { DataGridRow };

/**
 * Base class for DataGridCell
 * @public
 */
export { DataGridCell };

export { dataGridCellStyles, dataGridStyles, dataGridRowStyles };
