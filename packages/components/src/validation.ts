import { Constructable, attr } from '@microsoft/fast-element';
import { FormAssociatedElement } from '@microsoft/fast-foundation';

/**
 * Mixin for setting a custom error message through attribute.
 *
 * @alpha
 */
export function ErrorMessageMixin<
  T extends Constructable<FormAssociatedElement>
>(Base: T): T {
  const C = class ErrorMessage extends Base {
    /**
     * Custom error message externally settable
     *
     * @remarks
     * HTML Attribute: error-message
     */
    errorMessage: string;
    errorMessageChanged(prev: string, next: string): void {
      this.setValidity({ customError: !!next }, next);

      const isValid = this.reportValidity();
      if (isValid) {
        this.classList.remove('invalid');
      } else {
        this.classList.add('invalid');
      }
    }
  };

  attr({ attribute: 'error-message' })(C.prototype, 'errorMessage');
  return C;
}
