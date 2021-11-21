// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {Link} from '../index';

export type LinkArgs = {
	label: string;
	href: string;
};

export function createLink({label, href}: LinkArgs) {
	const link = new Link();

	if (label) {
		link.textContent = label;
	}
	if (href) {
		link.setAttribute('href', href);
	}

	return link;
}
