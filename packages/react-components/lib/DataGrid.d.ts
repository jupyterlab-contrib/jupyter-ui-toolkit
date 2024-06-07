import { DataGrid as DataGridElement } from '@jupyter/web-components';

export type { DataGridElement };

export interface DataGridProps
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
  /** When true the component will not add itself to the tab queue.
Default is false. */
  noTabbing?: boolean;

  /** Whether the grid should automatically generate a header row and its type */
  generateHeader?: DataGridElement['generateHeader'];

  /** String that gets applied to the the css gridTemplateColumns attribute of child rows */
  gridTemplateColumns?: DataGridElement['gridTemplateColumns'];

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

  /** A property which resolves the ComponentPresentation instance
for the current component. */
  $presentation?: DataGridElement['$presentation'];

  /** Sets the template of the element instance. When undefined,
the element will attempt to resolve the template from
the associated presentation or custom element definition. */
  template?: DataGridElement['template'];

  /** Sets the default styles for the element instance. When undefined,
the element will attempt to resolve default styles from
the associated presentation or custom element definition. */
  styles?: DataGridElement['styles'];
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
