// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import { css, ElementStyles } from '@microsoft/fast-element';
import {
  disabledCursor,
  display,
  ElementDefinitionContext,
  focusVisible
} from '@microsoft/fast-foundation';
import {
  borderWidth,
  cornerRadius,
  designUnit,
  disabledOpacity,
  dropdownBackground,
  dropdownBorder,
  dropdownListMaxHeight,
  focusBorder,
  fontFamily,
  foreground,
  inputHeight,
  inputMinWidth,
  listActiveSelectionBackground,
  listActiveSelectionForeground,
  typeRampBaseFontSize,
  typeRampBaseLineHeight
} from '../design-tokens';
import { DropdownOptions } from './';

export const dropdownStyles = (
  context: ElementDefinitionContext,
  definition: DropdownOptions
): ElementStyles => css`
  ${display('inline-flex')} :host {
    background: ${dropdownBackground};
    box-sizing: border-box;
    color: ${foreground};
    contain: contents;
    font-family: ${fontFamily};
    height: calc(${inputHeight} * 1px);
    position: relative;
    user-select: none;
    min-width: ${inputMinWidth};
    outline: none;
    vertical-align: top;
  }
  .control {
    align-items: center;
    box-sizing: border-box;
    border: calc(${borderWidth} * 1px) solid ${dropdownBorder};
    border-radius: calc(${cornerRadius} * 1px);
    cursor: pointer;
    display: flex;
    font-family: inherit;
    font-size: ${typeRampBaseFontSize};
    line-height: ${typeRampBaseLineHeight};
    min-height: 100%;
    padding: 0 calc(${designUnit} * 2px);
    width: 100%;
  }
  .listbox {
    background: ${dropdownBackground};
    border: calc(${borderWidth} * 1px) solid ${focusBorder};
    border-radius: calc(${cornerRadius} * 1px);
    box-sizing: border-box;
    display: inline-flex;
    flex-direction: column;
    left: 0;
    max-height: ${dropdownListMaxHeight};
    padding: 0 0 calc(${designUnit} * 1px) 0;
    overflow-y: auto;
    position: absolute;
    width: 100%;
    z-index: 1;
  }
  .listbox[hidden] {
    display: none;
  }
  :host(:${focusVisible}) .control {
    border-color: ${focusBorder};
  }
  :host(:not([disabled]):hover) {
    background: ${dropdownBackground};
    border-color: ${dropdownBorder};
  }
  :host(:${focusVisible}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
    background: ${listActiveSelectionBackground};
    border: calc(${borderWidth} * 1px) solid ${focusBorder};
    color: ${listActiveSelectionForeground};
  }
  :host([disabled]) {
    cursor: ${disabledCursor};
    opacity: ${disabledOpacity};
  }
  :host([disabled]) .control {
    cursor: ${disabledCursor};
    user-select: none;
  }
  :host([disabled]:hover) {
    background: ${dropdownBackground};
    color: ${foreground};
    fill: currentcolor;
  }
  :host(:not([disabled])) .control:active {
    border-color: ${focusBorder};
  }
  :host(:empty) .listbox {
    display: none;
  }
  :host([open]) .control {
    border-color: ${focusBorder};
  }
  :host([open][position='above']) .listbox,
  :host([open][position='below']) .control {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  :host([open][position='above']) .control,
  :host([open][position='below']) .listbox {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  :host([open][position='above']) .listbox {
    bottom: calc(${inputHeight} * 1px);
  }
  :host([open][position='below']) .listbox {
    top: calc(${inputHeight} * 1px);
  }
  .selected-value {
    flex: 1 1 auto;
    font-family: inherit;
    overflow: hidden;
    text-align: start;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .indicator {
    flex: 0 0 auto;
    margin-inline-start: 1em;
  }
  slot[name='listbox'] {
    display: none;
    width: 100%;
  }
  :host([open]) slot[name='listbox'] {
    display: flex;
    position: absolute;
  }
  .end {
    margin-inline-start: auto;
  }
  .start,
  .end,
  .indicator,
  .select-indicator,
  ::slotted(svg),
  ::slotted(span) {
    fill: currentcolor;
    height: 1em;
    min-height: calc(${designUnit} * 4px);
    min-width: calc(${designUnit} * 4px);
    width: 1em;
  }
  ::slotted([role='option']),
  ::slotted(option) {
    flex: 0 0 auto;
  }
`;
