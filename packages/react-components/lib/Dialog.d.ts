import { Dialog as DialogElement } from '@jupyter/web-components';

export type { DialogElement };

export interface DialogProps extends React.AllHTMLAttributes<HTMLElement> {
  /**
   * Allows getting a ref to the component instance.
   */
  ref?: React.Ref<DialogElement>;

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
