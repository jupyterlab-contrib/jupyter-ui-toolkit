// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {
	Select as FoundationSelect,
	SelectOptions,
	selectTemplate as template,
} from '@microsoft/fast-foundation';
import {dropdownStyles as styles} from './dropdown.styles';

/**
 * Dropdown configuration options
 * @public
 */
export type DropdownOptions = SelectOptions;

/**
 * The  dropdown class.
 *
 * @public
 */
export class Dropdown extends FoundationSelect {}

/**
 * The  link dropdown registration.
 *
 * @remarks
 * HTML Element: `<jp-dropdown>`
 *
 * @public
 */
export const jpDropdown = Dropdown.compose<DropdownOptions>({
	baseName: 'dropdown',
	template,
	styles,
	indicator: `
		<svg 
			class="select-indicator"
			part="select-indicator"
			width="16" 
			height="16" 
			viewBox="0 0 16 16" 
			xmlns="http://www.w3.org/2000/svg" 
			fill="currentColor"
		>
			<path 
				fill-rule="evenodd" 
				clip-rule="evenodd" 
				d="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"
			/>
		</svg>
	`,
});
