import { DataGridCell as DataGridCellElement } from '@jupyter/web-components';

export type { DataGridCellElement };

export interface DataGridCellProps
  extends Pick<
    React.AllHTMLAttributes<HTMLElement>,
    | 'children'
    | 'className'
    | 'dir'
    | 'exportparts'
    | 'htmlFor'
    | 'hidden'
    | 'id'
    | 'key'
    | 'lang'
    | 'part'
    | 'ref'
    | 'slot'
    | 'style'
    | 'tabIndex'
    | 'title'
    | 'translate'
    | 'onClick'
    | 'onFocus'
    | 'onBlur'
  > {
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

  /** A property which resolves the ComponentPresentation instance
for the current component. */
  $presentation?: DataGridCellElement['$presentation'];

  /** Sets the template of the element instance. When undefined,
the element will attempt to resolve the template from
the associated presentation or custom element definition. */
  template?: DataGridCellElement['template'];

  /** Sets the default styles for the element instance. When undefined,
the element will attempt to resolve default styles from
the associated presentation or custom element definition. */
  styles?: DataGridCellElement['styles'];

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
