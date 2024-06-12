import { DataGridCell as DataGridCellElement } from '@jupyter/web-components';

export type { DataGridCellElement };

export interface DataGridCellProps
  extends React.AllHTMLAttributes<HTMLElement> {
  /**
   * Allows getting a ref to the component instance.
   */
  ref?: React.Ref<DataGridCellElement>;

  /** The type of cell */
  cellType?: DataGridCellElement['cellType'];

  /** The column index of the cell.
This will be applied to the css grid-column-index value
applied to the cell */
  gridColumn?: DataGridCellElement['gridColumn'];

  /** The base data for the parent row */
  rowData?: DataGridCellElement['rowData'];

  /** The base data for the column */
  columnDefinition?: DataGridCellElement['columnDefinition'];

  /** Fires a custom 'cell-focused' event when focus is on the cell or its contents */
  onCellFocused?: (event: CustomEvent) => void;
}

/**
 * DataGridCell class
 * ---
 *
 *
 * ### **Events:**
 *  - **cell-focused** - Fires a custom 'cell-focused' event when focus is on the cell or its contents
 *
 * ### **Methods:**
 *  - **compose(this: _K_, elementDefinition: _T_): _(
 *         overrideDefinition?: OverrideFoundationElementDefinition<T>
 *     ) => FoundationElementRegistry<T, K>_** - Defines an element registry function with a set of element definition defaults.
 *
 * ### **Slots:**
 *  - _default_ - The default slot for cell contents.  The "cell contents template" renders here.
 */
export const DataGridCell: React.ForwardRefExoticComponent<DataGridCellProps>;
