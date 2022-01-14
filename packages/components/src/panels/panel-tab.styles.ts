// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import { css, ElementStyles } from '@microsoft/fast-element';
import {
  display,
  ElementDefinitionContext,
  focusVisible,
  FoundationElementDefinition
} from '@microsoft/fast-foundation';
import {
  borderWidth,
  cornerRadius,
  designUnit,
  fontFamily,
  panelTabActiveBorder,
  panelTabActiveForeground,
  panelTabForeground,
  typeRampBaseFontSize,
  typeRampBaseLineHeight
} from '../design-tokens';

export const panelTabStyles = (
  context: ElementDefinitionContext,
  definition: FoundationElementDefinition
): ElementStyles => css`
  ${display('inline-flex')} :host {
    box-sizing: border-box;
    font-family: ${fontFamily};
    font-size: ${typeRampBaseFontSize};
    line-height: ${typeRampBaseLineHeight};
    height: calc(${designUnit} * 7px);
    padding: calc(${designUnit} * 1px) 0;
    color: ${panelTabForeground};
    fill: currentcolor;
    border-radius: calc(${cornerRadius} * 1px);
    border: solid calc(${borderWidth} * 1px) transparent;
    align-items: center;
    justify-content: center;
    grid-row: 1;
    cursor: pointer;
  }
  :host(:hover) {
    color: ${panelTabActiveForeground};
    fill: currentcolor;
  }
  :host(:active) {
    color: ${panelTabActiveForeground};
    fill: currentcolor;
  }
  :host([aria-selected='true']) {
    background: transparent;
    color: ${panelTabActiveForeground};
    fill: currentcolor;
  }
  :host([aria-selected='true']:hover) {
    background: transparent;
    color: ${panelTabActiveForeground};
    fill: currentcolor;
  }
  :host([aria-selected='true']:active) {
    background: transparent;
    color: ${panelTabActiveForeground};
    fill: currentcolor;
  }
  :host(:${focusVisible}) {
    outline: none;
    border: solid calc(${borderWidth} * 1px) ${panelTabActiveBorder};
  }
  :host(:focus) {
    outline: none;
  }
  ::slotted(jp-badge) {
    margin-inline-start: calc(${designUnit} * 2px);
  }
`;
