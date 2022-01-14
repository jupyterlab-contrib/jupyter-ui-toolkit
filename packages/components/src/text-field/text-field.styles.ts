// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import { css, ElementStyles } from '@microsoft/fast-element';
import {
  disabledCursor,
  display,
  ElementDefinitionContext,
  focusVisible,
  TextFieldOptions
} from '@microsoft/fast-foundation';
import {
  borderWidth,
  cornerRadius,
  designUnit,
  disabledOpacity,
  dropdownBorder,
  focusBorder,
  fontFamily,
  foreground,
  inputBackground,
  inputForeground,
  inputHeight,
  inputMinWidth,
  typeRampBaseFontSize,
  typeRampBaseLineHeight
} from '../design-tokens';

export const textFieldStyles = (
  context: ElementDefinitionContext,
  definition: TextFieldOptions
): ElementStyles => css`
  ${display('inline-block')} :host {
    font-family: ${fontFamily};
    outline: none;
    user-select: none;
  }
  .root {
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: row;
    color: ${inputForeground};
    background: ${inputBackground};
    border-radius: calc(${cornerRadius} * 1px);
    border: calc(${borderWidth} * 1px) solid ${dropdownBorder};
    height: calc(${inputHeight} * 1px);
    min-width: ${inputMinWidth};
  }
  .control {
    -webkit-appearance: none;
    font: inherit;
    background: transparent;
    border: 0;
    color: inherit;
    height: calc(100% - (${designUnit} * 1px));
    width: 100%;
    margin-top: auto;
    margin-bottom: auto;
    border: none;
    padding: 0 calc(${designUnit} * 2px + 1px);
    font-size: ${typeRampBaseFontSize};
    line-height: ${typeRampBaseLineHeight};
  }
  .control:hover,
	.control:${focusVisible},
	.control:disabled,
	.control:active {
    outline: none;
  }
  .label {
    display: block;
    color: ${foreground};
    cursor: pointer;
    font-size: ${typeRampBaseFontSize};
    line-height: ${typeRampBaseLineHeight};
    margin-bottom: calc(${designUnit} * 1px);
  }
  .label__hidden {
    display: none;
    visibility: hidden;
  }
  .start,
  .end {
    display: flex;
    margin: auto;
    fill: currentcolor;
  }
  ::slotted(svg),
  ::slotted(span) {
    width: calc(${designUnit} * 4px);
    height: calc(${designUnit} * 4px);
  }
  .start {
    margin-inline-start: 11px;
  }
  .end {
    margin-inline-end: 11px;
  }
  :host(:hover:not([disabled])) .root {
    background: ${inputBackground};
    border-color: ${dropdownBorder};
  }
  :host(:active:not([disabled])) .root {
    background: ${inputBackground};
    border-color: ${focusBorder};
  }
  :host(:focus-within:not([disabled])) .root {
    border-color: ${focusBorder};
  }
  :host([disabled]) .label,
  :host([readonly]) .label,
  :host([readonly]) .control,
  :host([disabled]) .control {
    cursor: ${disabledCursor};
  }
  :host([disabled]) {
    opacity: ${disabledOpacity};
  }
  :host([disabled]) .control {
    border-color: ${dropdownBorder};
  }
`;
