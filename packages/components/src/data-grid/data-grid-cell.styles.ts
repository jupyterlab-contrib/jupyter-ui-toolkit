// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import { css, ElementStyles } from '@microsoft/fast-element';
import {
  ElementDefinitionContext,
  focusVisible,
  FoundationElementDefinition
} from '@microsoft/fast-foundation';
import {
  borderWidth,
  cornerRadius,
  designUnit,
  focusBorder,
  fontFamily,
  foreground,
  listActiveSelectionBackground,
  listActiveSelectionForeground,
  typeRampBaseFontSize,
  typeRampBaseLineHeight
} from '../design-tokens';

export const dataGridCellStyles = (
  context: ElementDefinitionContext,
  definition: FoundationElementDefinition
): ElementStyles => css`
  :host {
    padding: calc(${designUnit} * 1px) calc(${designUnit} * 3px);
    color: ${foreground};
    opacity: 1;
    box-sizing: border-box;
    font-family: ${fontFamily};
    font-size: ${typeRampBaseFontSize};
    line-height: ${typeRampBaseLineHeight};
    font-weight: 400;
    border: solid calc(${borderWidth} * 1px) transparent;
    border-radius: calc(${cornerRadius} * 1px);
    min-width: 96px;
    white-space: wrap;
    overflow-wrap: break-word;
  }
  :host(.column-header) {
    font-weight: 600;
  }
  :host(:${focusVisible}),
	:host(:focus),
	:host(:active) {
    background: ${listActiveSelectionBackground};
    border: solid calc(${borderWidth} * 1px) ${focusBorder};
    color: ${listActiveSelectionForeground};
    outline: none;
  }
`;
