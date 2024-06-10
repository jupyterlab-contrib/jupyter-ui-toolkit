import { Breadcrumb as BreadcrumbElement } from '@jupyter/web-components';

export type { BreadcrumbElement };

export interface BreadcrumbProps
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
  /** A property which resolves the ComponentPresentation instance
for the current component. */
  $presentation?: BreadcrumbElement['$presentation'];

  /** Sets the template of the element instance. When undefined,
the element will attempt to resolve the template from
the associated presentation or custom element definition. */
  template?: BreadcrumbElement['template'];

  /** Sets the default styles for the element instance. When undefined,
the element will attempt to resolve default styles from
the associated presentation or custom element definition. */
  styles?: BreadcrumbElement['styles'];
}

/**
 * Breadcrumb class
 * ---
 *
 *
 * ### **Methods:**
 *  - **compose(this: _K_, elementDefinition: _T_): _(
 *         overrideDefinition?: OverrideFoundationElementDefinition<T>
 *     ) => FoundationElementRegistry<T, K>_** - Defines an element registry function with a set of element definition defaults.
 *
 * ### **Slots:**
 *  - _default_ - The default slot for the breadcrumb items
 *
 * ### **CSS Parts:**
 *  - **list** - The element wrapping the slotted items
 */
export const Breadcrumb: React.ForwardRefExoticComponent<BreadcrumbProps>;
