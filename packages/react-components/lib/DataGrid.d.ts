import { DataGrid as DataGridElement } from '@jupyter/web-components';

export type { DataGridElement };

export interface DataGridProps extends React.AllHTMLAttributes<HTMLElement> {
  /**
   * Allows getting a ref to the component instance.
   */
  ref?: React.Ref<DataGridElement>;

  /** When true the component will not add itself to the tab queue.
Default is false. */
  noTabbing?: boolean;

  /** Whether the grid should automatically generate a header row and its type */
  generateHeader?: DataGridElement['generateHeader'];

  /** String that gets applied to the the css gridTemplateColumns attribute of child rows */
  gridTemplateColumns?: DataGridElement['gridTemplateColumns'];

  /** The data being displayed in the grid */
  rowsData?: DataGridElement['rowsData'];

  /** The column definitions of the grid */
  columnDefinitions?: DataGridElement['columnDefinitions'];

  /** The template to use for the programmatic generation of rows */
  rowItemTemplate?: DataGridElement['rowItemTemplate'];

  /** The template used to render cells in generated rows. */
  cellItemTemplate?: DataGridElement['cellItemTemplate'];

  /** The template used to render header cells in generated rows. */
  headerCellItemTemplate?: DataGridElement['headerCellItemTemplate'];

  /** The index of the row that will receive focus the next time the
grid is focused. This value changes as focus moves to different
rows within the grid.  Changing this value when focus is already
within the grid moves focus to the specified row. */
  focusRowIndex?: DataGridElement['focusRowIndex'];

  /** The index of the column that will receive focus the next time the
grid is focused. This value changes as focus moves to different rows
within the grid.  Changing this value when focus is already within
the grid moves focus to the specified column. */
  focusColumnIndex?: DataGridElement['focusColumnIndex'];

  /** Set by the component templates. */
  rowElementTag?: DataGridElement['rowElementTag'];
}

/**
 * DataGrid class
 * ---
 *
 *
 * ### **Methods:**
 *  - **compose(this: _K_, elementDefinition: _T_): _(
 *         overrideDefinition?: OverrideFoundationElementDefinition<T>
 *     ) => FoundationElementRegistry<T, K>_** - Defines an element registry function with a set of element definition defaults.
 *
 * ### **Slots:**
 *  - _default_ - The default slot for custom row elements
 */
export const DataGrid: React.ForwardRefExoticComponent<DataGridProps>;
