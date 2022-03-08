import { FormAssociated, FoundationElement } from '@microsoft/fast-foundation';

class _DateField extends FoundationElement {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface _DateField extends FormAssociated {}

/**
 * A form-associated base class for the {@link @jupyter-notebook/web-components#(DateField:class)} component.
 *
 * @internal
 */
export class FormAssociatedDateField extends FormAssociated(_DateField) {
  proxy = document.createElement('input');
}
