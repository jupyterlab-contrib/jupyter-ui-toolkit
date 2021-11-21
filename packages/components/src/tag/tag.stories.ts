// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {createTag, TagArgs} from './fixtures/createTag';

export default {
	title: 'Library/Tag',
	argTypes: {
		label: {control: 'text'},
	},
	parameters: {
		actions: {
			disabled: true,
		},
	},
};

const Template = ({...args}: TagArgs) => {
	return createTag({...args});
};

export const Default: any = Template.bind({});
Default.args = {
	label: 'Tag Text',
};
Default.parameters = {
	docs: {
		source: {
			code: `<jp-tag>Tag Text</jp-tag>`,
		},
	},
};
