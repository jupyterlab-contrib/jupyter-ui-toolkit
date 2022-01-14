// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import { css, ElementStyles } from '@microsoft/fast-element';
import {
  ElementDefinitionContext,
  FoundationElementDefinition
} from '@microsoft/fast-foundation';
import {
  designUnit,
  listHoverBackground,
  quickInputBackground
} from '../design-tokens';

export const dataGridRowStyles = (
  context: ElementDefinitionContext,
  definition: FoundationElementDefinition
): ElementStyles => css`
  :host {
    display: grid;
    padding: calc((${designUnit} / 4) * 1px) 0;
    box-sizing: border-box;
    width: 100%;
    background: transparent;
  }
  :host(.header) {
  }
  :host(.sticky-header) {
    background: ${quickInputBackground};
    position: sticky;
    top: 0;
  }
  :host(:hover) {
    background: ${listHoverBackground};
  }
`;
