// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import { css, ElementStyles } from '@microsoft/fast-element';
import {
  display,
  ElementDefinitionContext,
  FoundationElementDefinition
} from '@microsoft/fast-foundation';
import { borderWidth, designUnit, dividerBackground } from '../design-tokens';

export const dividerStyles = (
  context: ElementDefinitionContext,
  definition: FoundationElementDefinition
): ElementStyles => css`
  ${display('block')} :host {
    border: none;
    border-top: calc(${borderWidth} * 1px) solid ${dividerBackground};
    box-sizing: content-box;
    height: 0;
    margin: calc(${designUnit} * 1px) 0;
    width: 100%;
  }
`;
