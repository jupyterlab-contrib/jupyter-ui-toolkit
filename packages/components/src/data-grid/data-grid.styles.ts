// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {css} from '@microsoft/fast-element';
import {
	ElementDefinitionContext,
	FoundationElementDefinition,
} from '@microsoft/fast-foundation';

export const dataGridStyles = (
	context: ElementDefinitionContext,
	definition: FoundationElementDefinition
) => css`
	:host {
		display: flex;
		position: relative;
		flex-direction: column;
		width: 100%;
	}
`;
