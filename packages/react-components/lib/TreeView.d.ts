import { TreeView as TreeViewElement } from '@jupyter/web-components';

export type { TreeViewElement };

export interface TreeViewProps
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
  /** /**
  When true, the control will be appear expanded by user interaction. */
  renderCollapsedNodes?: boolean;

  /** The currently selected tree item */
  currentSelected?: TreeViewElement['currentSelected'];

  /** A property which resolves the ComponentPresentation instance
for the current component. */
  $presentation?: TreeViewElement['$presentation'];

  /** Sets the template of the element instance. When undefined,
the element will attempt to resolve the template from
the associated presentation or custom element definition. */
  template?: TreeViewElement['template'];

  /** Sets the default styles for the element instance. When undefined,
the element will attempt to resolve default styles from
the associated presentation or custom element definition. */
  styles?: TreeViewElement['styles'];
}

/**
 * Tree view class
 * ---
 *
 *
 * ### **Methods:**
 *  - **compose(this: _K_, elementDefinition: _T_): _(
 *         overrideDefinition?: OverrideFoundationElementDefinition<T>
 *     ) => FoundationElementRegistry<T, K>_** - Defines an element registry function with a set of element definition defaults.
 *
 * ### **Slots:**
 *  - _default_ - The default slot for tree items
 */
export const TreeView: React.ForwardRefExoticComponent<TreeViewProps>;
