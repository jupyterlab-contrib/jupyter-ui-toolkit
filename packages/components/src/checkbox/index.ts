// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {
  CheckboxOptions,
  Checkbox as FoundationCheckbox,
  checkboxTemplate as template
} from '@microsoft/fast-foundation';
import { checkboxStyles as styles } from './checkbox.styles';

/**
 * The  checkbox class.
 *
 * @public
 */
export class Checkbox extends FoundationCheckbox {
  /**
   * Component lifecycle method that runs when the component is inserted
   * into the DOM.
   *
   * @internal
   */
  public connectedCallback(): void {
    super.connectedCallback();
    if (this.textContent) {
      this.setAttribute('aria-label', this.textContent);
    } else {
      // Fallback to the label if there is no text content
      this.setAttribute('aria-label', 'Checkbox');
    }
  }
}

/**
 * The  checkbox component registration.
 *
 * @remarks
 * HTML Element: `<jp-checkbox>`
 *
 * @public
 */
export const jpCheckbox = Checkbox.compose<CheckboxOptions>({
  baseName: 'checkbox',
  template,
  styles,
  checkedIndicator: `
		<svg 
			part="checked-indicator"
			class="checked-indicator"
			width="16" 
			height="16" 
			viewBox="0 0 16 16" 
			xmlns="http://www.w3.org/2000/svg" 
			fill="currentColor"
		>
			<path 
				fill-rule="evenodd" 
				clip-rule="evenodd" 
				d="M14.431 3.323l-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z"
			/>
		</svg>
	`,
  indeterminateIndicator: `
		<div part="indeterminate-indicator" class="indeterminate-indicator"></div>
	`
});
