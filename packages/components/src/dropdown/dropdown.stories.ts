// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {action} from '@storybook/addon-actions';
import {createDropdown, DropdownArgs} from './fixtures/createDropdown';

export default {
	title: 'Library/Dropdown',
	argTypes: {
		isOpen: {control: 'boolean'},
		position: {
			control: {
				type: 'select',
				options: ['Above', 'Below'],
			},
		},
		isDisabled: {control: 'boolean'},
		isFocused: {control: 'boolean'},
		customIndicator: {control: 'boolean'},
		numberOfChildren: {control: 'number'},
		onChange: {
			action: 'changed',
			table: {
				disable: true,
			},
		},
	},
};

const Template = ({...args}: DropdownArgs) => {
	return createDropdown({...args});
};

export const Default: any = Template.bind({});
Default.args = {
	isOpen: false,
	position: 'Below',
	isDisabled: false,
	isFocused: false,
	numberOfChildren: 3,
	customIndicator: false,
	onChange: action('dropdown-onchange'),
};
Default.parameters = {
	docs: {
		source: {
			code: `<jp-dropdown>\n\t<jp-option>Option Label #1</jp-option>\n\t<jp-option>Option Label #2</jp-option>\n\t<jp-option>Option Label #3</jp-option>\n</jp-dropdown>`,
		},
	},
};

export const WithDisabled: any = Template.bind({});
WithDisabled.args = {
	...Default.args,
	isDisabled: true,
};
WithDisabled.parameters = {
	docs: {
		source: {
			code: `<jp-dropdown disabled>\n\t<jp-option>Option Label #1</jp-option>\n\t<jp-option>Option Label #2</jp-option>\n\t<jp-option>Option Label #3</jp-option>\n</jp-dropdown>`,
		},
	},
};

export const WithOpen: any = Template.bind({});
WithOpen.args = {
	...Default.args,
	isOpen: true,
};
WithOpen.parameters = {
	docs: {
		source: {
			code: `<jp-dropdown open>\n\t<jp-option>Option Label #1</jp-option>\n\t<jp-option>Option Label #2</jp-option>\n\t<jp-option>Option Label #3</jp-option>\n</jp-dropdown>`,
		},
	},
};

export const WithPositionAbove: any = Template.bind({});
WithPositionAbove.decorators = [
	story => {
		const decorator = document.createElement('div');
		decorator.style.marginTop = '5rem';
		decorator.appendChild(story());
		return decorator;
	},
];
WithPositionAbove.args = {
	...Default.args,
	isOpen: true,
	position: 'Above',
};
WithPositionAbove.parameters = {
	docs: {
		source: {
			code: `<jp-dropdown position="above">\n\t<jp-option>Option Label #1</jp-option>\n\t<jp-option>Option Label #2</jp-option>\n\t<jp-option>Option Label #3</jp-option>\n</jp-dropdown>`,
		},
	},
};

export const WithCustomIndicator: any = Template.bind({});
WithCustomIndicator.args = {
	...Default.args,
	customIndicator: true,
};
WithCustomIndicator.parameters = {
	docs: {
		source: {
			code: `<!-- Note: Using Visual Studio Code Codicon Library -->\n\n<jp-dropdown>\n\t<span slot="indicator" class="codicon codicon-settings"></span>\n\t<jp-option>Option Label #1</jp-option>\n\t<jp-option>Option Label #2</jp-option>\n\t<jp-option>Option Label #3</jp-option>\n</jp-dropdown>`,
		},
	},
};
