// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {
	Radio as FoundationRadio,
	RadioOptions,
	radioTemplate as template,
} from '@microsoft/fast-foundation';
import {radioStyles as styles} from './radio.styles';

/**
 * The  radio class.
 *
 * @public
 */
export class Radio extends FoundationRadio {
	/**
	 * Component lifecycle method that runs when the component is inserted
	 * into the DOM.
	 *
	 * @internal
	 */
	public connectedCallback() {
		super.connectedCallback();
		if (this.textContent) {
			this.setAttribute('aria-label', this.textContent);
		} else {
			// Fallback to the label if there is no text content
			this.setAttribute('aria-label', 'Radio');
		}
	}
}

/**
 * The  radio component registration.
 *
 * @remarks
 * HTML Element: `<jp-radio>`
 *
 * @public
 */
export const jpRadio = Radio.compose<RadioOptions>({
	baseName: 'radio',
	template,
	styles,
	checkedIndicator: `
		<div part="checked-indicator" class="checked-indicator"></div>
	`,
});
