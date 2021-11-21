// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {Badge} from '../index';

export type BadgeArgs = {
	label: string;
};

export function createBadge({label}: BadgeArgs) {
	const badge = new Badge();

	if (label) {
		badge.textContent = label;
	}

	return badge;
}
