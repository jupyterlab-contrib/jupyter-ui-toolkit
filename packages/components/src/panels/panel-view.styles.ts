// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import { css, ElementStyles } from '@microsoft/fast-element';
import {
  display,
  ElementDefinitionContext,
  FoundationElementDefinition
} from '@microsoft/fast-foundation';
import {
  borderWidth,
  designUnit,
  typeRampBaseFontSize,
  typeRampBaseLineHeight
} from '../design-tokens';

export const panelViewStyles = (
  context: ElementDefinitionContext,
  definition: FoundationElementDefinition
): ElementStyles => css`
  ${display('flex')} :host {
    color: inherit;
    background-color: transparent;
    border: solid calc(${borderWidth} * 1px) transparent;
    box-sizing: border-box;
    font-size: ${typeRampBaseFontSize};
    line-height: ${typeRampBaseLineHeight};
    padding: 10px calc((${designUnit} + 2) * 1px);
  }
`;
