// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {
	TextField as FoundationTextField,
	textFieldTemplate as template,
	TextFieldOptions,
} from '@microsoft/fast-foundation';
import {textFieldStyles as styles} from './text-field.styles';

/**
 * The  text field class.
 *
 * @public
 */
export class TextField extends FoundationTextField {
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
			// Describe the generic component if no label is provided
			this.setAttribute('aria-label', 'Text field');
		}
	}
}

/**
 * The  text field component registration.
 *
 * @remarks
 * HTML Element: `<jp-text-field>`
 *
 * @public
 */
export const jpTextField = TextField.compose<TextFieldOptions>({
	baseName: 'text-field',
	template,
	styles,
	shadowOptions: {
		delegatesFocus: true,
	},
});
