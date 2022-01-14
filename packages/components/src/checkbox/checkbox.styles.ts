// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import { css, ElementStyles } from '@microsoft/fast-element';
import {
  CheckboxOptions,
  disabledCursor,
  display,
  ElementDefinitionContext,
  focusVisible
} from '@microsoft/fast-foundation';
import {
  borderWidth,
  checkboxBackground,
  checkboxBorder,
  checkboxCornerRadius,
  cornerRadius,
  designUnit,
  disabledOpacity,
  focusBorder,
  fontFamily,
  foreground,
  typeRampBaseFontSize,
  typeRampBaseLineHeight
} from '../design-tokens';

export const checkboxStyles = (
  context: ElementDefinitionContext,
  defintiion: CheckboxOptions
): ElementStyles => css`
  ${display('inline-flex')} :host {
    align-items: center;
    outline: none;
    margin: calc(${designUnit} * 1px) 0;
    user-select: none;
    font-size: ${typeRampBaseFontSize};
    line-height: ${typeRampBaseLineHeight};
  }
  .control {
    position: relative;
    width: calc(${designUnit} * 4px);
    height: calc(${designUnit} * 4px);
    box-sizing: border-box;
    border-radius: calc(${checkboxCornerRadius} * 1px);
    border: calc(${borderWidth} * 1px) solid ${checkboxBorder};
    background: ${checkboxBackground};
    outline: none;
    cursor: pointer;
  }
  .label {
    font-family: ${fontFamily};
    color: ${foreground};
    padding-inline-start: calc(${designUnit} * 2px + 2px);
    margin-inline-end: calc(${designUnit} * 2px + 2px);
    cursor: pointer;
  }
  .label__hidden {
    display: none;
    visibility: hidden;
  }
  .checked-indicator {
    width: 100%;
    height: 100%;
    display: block;
    fill: ${foreground};
    opacity: 0;
    pointer-events: none;
  }
  .indeterminate-indicator {
    border-radius: 2px;
    background: ${foreground};
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%;
    height: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }
  :host(:enabled) .control:hover {
    background: ${checkboxBackground};
    border-color: ${checkboxBorder};
  }
  :host(:enabled) .control:active {
    background: ${checkboxBackground};
    border-color: ${focusBorder};
  }
  :host(:${focusVisible}) .control {
    border: calc(${borderWidth} * 1px) solid ${focusBorder};
    border-radius: ${cornerRadius};
  }
  :host(.disabled) .label,
  :host(.readonly) .label,
  :host(.readonly) .control,
  :host(.disabled) .control {
    cursor: ${disabledCursor};
  }
  :host(.checked:not(.indeterminate)) .checked-indicator,
  :host(.indeterminate) .indeterminate-indicator {
    opacity: 1;
  }
  :host(.disabled) {
    opacity: ${disabledOpacity};
  }
`;
