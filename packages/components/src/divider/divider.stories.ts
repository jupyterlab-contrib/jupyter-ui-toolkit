// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {createDivider, DividerArgs} from './fixtures/createDivider';

export default {
	title: 'Library/Divider',
	argTypes: {
		role: {
			control: {
				type: 'select',
				options: ['Separator', 'Presentation'],
			},
		},
	},
	parameters: {
		actions: {
			disabled: true,
		},
	},
};

const Template = ({...args}: DividerArgs) => {
	return createDivider({...args});
};

export const Default: any = Template.bind({});
Default.args = {
	role: 'Separator',
};
Default.parameters = {
	docs: {
		source: {
			code: `<jp-divider></jp-divider>`,
		},
	},
};

export const WithRole: any = Template.bind({});
WithRole.args = {
	role: 'Presentation',
};
WithRole.parameters = {
	docs: {
		source: {
			code: `<jp-divider role="presentation"></jp-divider>`,
		},
	},
};
