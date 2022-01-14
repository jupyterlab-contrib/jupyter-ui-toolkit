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
  badgeBackground,
  badgeForeground,
  borderWidth,
  buttonBorder,
  designUnit,
  fontFamily,
  typeRampMinus1FontSize,
  typeRampMinus1LineHeight
} from '../design-tokens';

export const badgeStyles = (
  context: ElementDefinitionContext,
  definition: FoundationElementDefinition
): ElementStyles => css`
  ${display('inline-block')} :host {
    box-sizing: border-box;
    font-family: ${fontFamily};
    font-size: ${typeRampMinus1FontSize};
    line-height: ${typeRampMinus1LineHeight};
  }
  .control {
    align-items: center;
    background-color: ${badgeBackground};
    border: calc(${borderWidth} * 1px) solid ${buttonBorder};
    border-radius: 100px;
    box-sizing: border-box;
    color: ${badgeForeground};
    display: flex;
    height: calc(${designUnit} * 4px);
    justify-content: center;
    min-width: calc(${designUnit} * 4px);
    padding: 0 calc(${designUnit} * 1px);
  }
`;
