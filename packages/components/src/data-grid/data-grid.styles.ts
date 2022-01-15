// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import { css, ElementStyles } from '@microsoft/fast-element';
import {
  ElementDefinitionContext,
  FoundationElementDefinition
} from '@microsoft/fast-foundation';

export const dataGridStyles = (
  context: ElementDefinitionContext,
  definition: FoundationElementDefinition
): ElementStyles => css`
  :host {
    display: flex;
    position: relative;
    flex-direction: column;
    width: 100%;
  }
`;
