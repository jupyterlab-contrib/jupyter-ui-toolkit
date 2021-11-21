// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {
	TextArea as FoundationTextArea,
	textAreaTemplate as template,
} from '@microsoft/fast-foundation';
import {textAreaStyles as styles} from './text-area.styles';

/**
 * The  text area class.
 *
 * @remarks
 * HTML Element: `<jp-text-area>`
 *
 * @public
 */
export class TextArea extends FoundationTextArea {
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
			this.setAttribute('aria-label', 'Text area');
		}
	}
}

/**
 * The  text area component registration.
 *
 * @remarks
 * HTML Element: `<jp-text-area>`
 *
 * @public
 */
export const jpTextArea = TextArea.compose({
	baseName: 'text-area',
	template,
	styles,
	shadowOptions: {
		delegatesFocus: true,
	},
});
