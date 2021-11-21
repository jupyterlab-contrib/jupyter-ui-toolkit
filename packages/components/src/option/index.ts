// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {
	ListboxOption as FoundationListboxOption,
	ListboxOptionOptions,
	listboxOptionTemplate as template,
} from '@microsoft/fast-foundation';
import {optionStyles as styles} from './option.styles';

/**
 * Dropdown option configuration options
 * @public
 */
export type OptionOptions = ListboxOptionOptions;

/**
 * The  option class.
 *
 * @public
 */
export class Option extends FoundationListboxOption {
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
			this.setAttribute('aria-label', 'Option');
		}
	}
}

/**
 * The  option component registration.
 *
 * @remarks
 * HTML Element: `<jp-option>`
 *
 * @public
 */
export const jpOption = Option.compose<OptionOptions>({
	baseName: 'option',
	template,
	styles,
});
