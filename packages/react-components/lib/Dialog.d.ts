import { Dialog as DialogElement } from '@jupyter/web-components';

export type { DialogElement };

export interface DialogProps
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
  /** Indicates that the dialog should trap focus. */
  trapFocus?: boolean;

  /** The id of the element describing the dialog. */
  ariaDescribedby?: DialogElement['ariaDescribedby'];

  /** The id of the element labeling the dialog. */
  ariaLabelledby?: DialogElement['ariaLabelledby'];

  /** The label surfaced to assistive technologies. */
  ariaLabel?: DialogElement['ariaLabel'];

  /** Indicates the element is modal. When modal, user mouse interaction will be limited to the contents of the element by a modal
overlay.  Clicks on the overlay will cause the dialog to emit a "dismiss" event. */
  modal?: DialogElement['modal'];

  /** The hidden state of the element. */
  hidden?: DialogElement['hidden'];

  /** A property which resolves the ComponentPresentation instance
for the current component. */
  $presentation?: DialogElement['$presentation'];

  /** Sets the template of the element instance. When undefined,
the element will attempt to resolve the template from
the associated presentation or custom element definition. */
  template?: DialogElement['template'];

  /** Sets the default styles for the element instance. When undefined,
the element will attempt to resolve default styles from
the associated presentation or custom element definition. */
  styles?: DialogElement['styles'];

  /** Fires a custom 'cancel' event when the modal overlay is clicked */
  onCancel?: (event: CustomEvent) => void;

  /** Fires a custom 'close' event when the dialog is hidden */
  onClose?: (event: CustomEvent) => void;
}

/**
 * Dialog class
 * ---
 *
 *
 * ### **Events:**
 *  - **cancel** - Fires a custom 'cancel' event when the modal overlay is clicked
 * - **close** - Fires a custom 'close' event when the dialog is hidden
 *
 * ### **Methods:**
 *  - **show(): _void_** - The method to show the dialog.
 * - **hide(): _void_** - The method to hide the dialog.
 * - **compose(this: _K_, elementDefinition: _T_): _(
 *         overrideDefinition?: OverrideFoundationElementDefinition<T>
 *     ) => FoundationElementRegistry<T, K>_** - Defines an element registry function with a set of element definition defaults.
 *
 * ### **Slots:**
 *  - _default_ - The default slot for the dialog content
 *
 * ### **CSS Parts:**
 *  - **positioning-region** - A wrapping element used to center the dialog and position the modal overlay
 * - **overlay** - The modal dialog overlay
 * - **control** - The dialog element
 */
export const Dialog: React.ForwardRefExoticComponent<DialogProps>;
