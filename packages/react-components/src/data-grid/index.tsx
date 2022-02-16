// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  provideJupyterDesignSystem,
  jpDataGrid,
  jpDataGridCell,
  jpDataGridRow
} from '@jupyter-notebook/web-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(React, provideJupyterDesignSystem());

export const DataGrid: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    'generate-header'?: 'none' | 'default' | 'sticky';
    'grid-template-columns'?: 'string';
  },
  HTMLElement
> = wrap(jpDataGrid()) as any;
// @ts-expect-error unknown property
DataGrid.displayName = 'Jupyter.DataGrid';

export const DataGridCell: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    'cell-type'?: 'default' | 'columnheader' | 'rowheader';
    'grid-column'?: string;
  },
  HTMLElement
> = wrap(jpDataGridCell()) as any;
// @ts-expect-error unknown property
DataGridCell.displayName = 'Jupyter.DataGridCell';

export const DataGridRow: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    'grid-template-columns'?: string;
    'row-type'?: 'default' | 'header' | 'sticky-header';
  },
  HTMLElement
> = wrap(jpDataGridRow()) as any;
// @ts-expect-error unknown property
DataGridRow.displayName = 'Jupyter.DataGridRow';
