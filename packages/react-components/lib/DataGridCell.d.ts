import { DataGridCell as DataGridCellElement } from '@jupyter/web-components';

export type { DataGridCellElement };

export interface DataGridCellProps
  extends Pick<
    React.AllHTMLAttributes<HTMLElement>,
    | 'children'
    | 'dir'
    | 'hidden'
    | 'id'
    | 'lang'
    | 'slot'
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

  /** A space-separated list of the classes of the element. Classes allows CSS and JavaScript to select and access specific elements via the class selectors or functions like the method `Document.getElementsByClassName()`. */
  className?: string;

  /** Contains a space-separated list of the part names of the element that should be exposed on the host element. */
  exportparts?: string;

  /** Used for labels to link them with their inputs (using input id). */
  htmlFor?: string;

  /** Used to help React identify which items have changed, are added, or are removed within a list. */
  key?: number | string;

  /** Contains a space-separated list of the part names of the element. Part names allows CSS to select and style specific elements in a shadow tree via the ::part pseudo-element. */
  part?: string;

  /** A mutable ref object whose `.current` property is initialized to the passed argument (`initialValue`). The returned object will persist for the full lifetime of the component. */
  ref?: any;

  /** Contains CSS styling declarations to be applied to the element. Note that it is recommended for styles to be defined in a separate file or files. This attribute and the <style> element have mainly the purpose of allowing for quick styling, for example for testing purposes. */
  style?: string | object;

  /** Allows developers to make HTML elements focusable, allow or prevent them from being sequentially focusable (usually with the `Tab` key, hence the name) and determine their relative ordering for sequential focus navigation. */
  tabIndex?: number;

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
