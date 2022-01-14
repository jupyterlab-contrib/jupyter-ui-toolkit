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
  tagCornerRadius,
  typeRampMinus1FontSize,
  typeRampMinus1LineHeight
} from '../design-tokens';

export const tagStyles = (
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
    background-color: ${badgeBackground};
    border: calc(${borderWidth} * 1px) solid ${buttonBorder};
    border-radius: ${tagCornerRadius};
    color: ${badgeForeground};
    padding: calc(${designUnit} * 0.5px) calc(${designUnit} * 1px);
    text-transform: uppercase;
  }
`;
