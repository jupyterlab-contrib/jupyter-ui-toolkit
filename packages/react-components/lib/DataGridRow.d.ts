import { DataGridRow as DataGridRowElement } from '@jupyter/web-components';

export type { DataGridRowElement };

export interface DataGridRowProps extends React.AllHTMLAttributes<HTMLElement> {
  /**
   * Allows getting a ref to the component instance.
   */
  ref?: React.Ref<DataGridRowElement>;

  /** String that gets applied to the the css gridTemplateColumns attribute for the row */
  gridTemplateColumns?: DataGridRowElement['gridTemplateColumns'];

  /** The type of row */
  rowType?: DataGridRowElement['rowType'];

  /** The base data for this row */
  rowData?: DataGridRowElement['rowData'];

  /** The column definitions of the row */
  columnDefinitions?: DataGridRowElement['columnDefinitions'];

  /** The template used to render cells in generated rows. */
  cellItemTemplate?: DataGridRowElement['cellItemTemplate'];

  /** The template used to render header cells in generated rows. */
  headerCellItemTemplate?: DataGridRowElement['headerCellItemTemplate'];

  /** The index of the row in the parent grid.
This is typically set programmatically by the parent grid. */
  rowIndex?: DataGridRowElement['rowIndex'];

  /** Fires a custom 'row-focused' event when focus is on an element (usually a cell or its contents) in the row */
  onRowFocused?: (event: CustomEvent) => void;
}

/**
 * DataGridRow class
 * ---
 *
 *
 * ### **Events:**
 *  - **row-focused** - Fires a custom 'row-focused' event when focus is on an element (usually a cell or its contents) in the row
 *
 * ### **Methods:**
 *  - **compose(this: _K_, elementDefinition: _T_): _(
 *         overrideDefinition?: OverrideFoundationElementDefinition<T>
 *     ) => FoundationElementRegistry<T, K>_** - Defines an element registry function with a set of element definition defaults.
 *
 * ### **Slots:**
 *  - _default_ - The default slot for custom cell elements
 */
export const DataGridRow: React.ForwardRefExoticComponent<DataGridRowProps>;
