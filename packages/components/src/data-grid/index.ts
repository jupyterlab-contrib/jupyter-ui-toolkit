// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {
  dataGridCellTemplate as cellTemplate,
  DataGrid as FoundationDataGrid,
  DataGridCell as FoundationDataGridCell,
  DataGridRow as FoundationDataGridRow,
  dataGridTemplate as gridTemplate,
  dataGridRowTemplate as rowTemplate
} from '@microsoft/fast-foundation';
import { dataGridStyles as gridStyles } from './data-grid.styles';
import { dataGridRowStyles as rowStyles } from './data-grid-row.styles';
import { dataGridCellStyles as cellStyles } from './data-grid-cell.styles';

/**
 * The  data grid class.
 *
 * @public
 */
export class DataGrid extends FoundationDataGrid {
  /**
   * Component lifecycle method that runs when the component is inserted
   * into the DOM.
   *
   * @internal
   */
  public connectedCallback() {
    super.connectedCallback();

    // Sets a default ARIA label on the data grid only if an aria-label attribute
    // does not already exist
    const ariaLabelValue = this.getAttribute('aria-label');
    if (!ariaLabelValue) {
      this.setAttribute('aria-label', 'Data Grid');
    }
  }
}

/**
 * The  data grid component registration.
 *
 * @remarks
 * HTML Element: `<jp-data-grid>`
 *
 * @public
 */
export const jpDataGrid = DataGrid.compose({
  baseName: 'data-grid',
  baseClass: FoundationDataGrid,
  template: gridTemplate,
  styles: gridStyles
});

/**
 * The  data grid row class.
 *
 * @public
 */
export class DataGridRow extends FoundationDataGridRow {}

/**
 * The  data grid row component registration.
 *
 * @remarks
 * HTML Element: `<jp-data-grid-row>`
 *
 * @public
 */
export const jpDataGridRow = DataGridRow.compose({
  baseName: 'data-grid-row',
  baseClass: FoundationDataGridRow,
  template: rowTemplate,
  styles: rowStyles
});

/**
 * The  data grid cell class.
 *
 * @public
 */
export class DataGridCell extends FoundationDataGridCell {}

/**
 * The  data grid cell component registration.
 *
 * @remarks
 * HTML Element: `<jp-data-grid-cell>`
 *
 * @public
 */
export const jpDataGridCell = DataGridCell.compose({
  baseName: 'data-grid-cell',
  baseClass: FoundationDataGridCell,
  template: cellTemplate,
  styles: cellStyles
});
