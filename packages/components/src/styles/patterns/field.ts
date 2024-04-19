// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import { css } from '@microsoft/fast-element';
import {
  disabledCursor,
  display,
  focusVisible,
  forcedColorsStylesheetBehavior
} from '@microsoft/fast-foundation';
import { SystemColors } from '@microsoft/fast-web-utilities';
import {
  accentFillFocus,
  bodyFont,
  controlCornerRadius,
  designUnit,
  disabledOpacity,
  errorFillActive,
  errorFillFocus,
  errorFillHover,
  errorFillRest,
  focusStrokeWidth,
  neutralFillHover,
  neutralFillInputHover,
  neutralFillInputRest,
  neutralFillRest,
  neutralFillStrongActive,
  neutralFillStrongHover,
  neutralFillStrongRest,
  neutralForegroundRest,
  neutralStrokeRest,
  strokeWidth,
  typeRampBaseFontSize,
  typeRampBaseLineHeight
} from '../../design-tokens.js';
import { heightNumber } from '../size.js';

export const BaseFieldStyles = css`
  ${display('inline-block')} :host {
    font-family: ${bodyFont};
    outline: none;
    user-select: none;
    /* Ensure to display focus highlight */
    margin: calc((${focusStrokeWidth} - ${strokeWidth}) * 1px);
  }

  .root {
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: row;
    color: ${neutralForegroundRest};
    background: ${neutralFillInputRest};
    border-radius: calc(${controlCornerRadius} * 1px);
    border: calc(${strokeWidth} * 1px) solid ${neutralFillStrongRest};
    height: calc(${heightNumber} * 1px);
  }

  :host([aria-invalid='true']) .root {
    border-color: ${errorFillRest};
  }

  .control {
    -webkit-appearance: none;
    font: inherit;
    background: transparent;
    border: 0;
    color: inherit;
    height: calc(100% - 4px);
    width: 100%;
    margin-top: auto;
    margin-bottom: auto;
    border: none;
    padding: 0 calc(${designUnit} * 2px + 1px);
    font-size: ${typeRampBaseFontSize};
    line-height: ${typeRampBaseLineHeight};
  }

  .control:placeholder-shown {
    text-overflow: ellipsis;
  }

  .control:hover,
  .control:${focusVisible},
  .control:disabled,
  .control:active {
    outline: none;
  }

  .label {
    display: block;
    color: ${neutralForegroundRest};
    cursor: pointer;
    font-size: ${typeRampBaseFontSize};
    line-height: ${typeRampBaseLineHeight};
    margin-bottom: 4px;
  }

  .label__hidden {
    display: none;
    visibility: hidden;
  }

  .start,
  .end {
    margin: auto;
    fill: currentcolor;
  }

  ::slotted(svg) {
    /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
    width: 16px;
    height: 16px;
  }

  .start {
    margin-inline-start: 11px;
  }

  .end {
    margin-inline-end: 11px;
  }

  :host(:hover:not([disabled])) .root {
    background: ${neutralFillInputHover};
    border-color: ${neutralFillStrongHover};
  }

  :host([aria-invalid='true']:hover:not([disabled])) .root {
    border-color: ${errorFillHover};
  }

  :host(:active:not([disabled])) .root {
    background: ${neutralFillInputHover};
    border-color: ${neutralFillStrongActive};
  }

  :host([aria-invalid='true']:active:not([disabled])) .root {
    border-color: ${errorFillActive};
  }

  :host(:focus-within:not([disabled])) .root {
    border-color: ${accentFillFocus};
    box-shadow: 0 0 0 calc((${focusStrokeWidth} - ${strokeWidth}) * 1px)
      ${accentFillFocus};
  }

  :host([aria-invalid='true']:focus-within:not([disabled])) .root {
    border-color: ${errorFillFocus};
    box-shadow: 0 0 0 calc((${focusStrokeWidth} - ${strokeWidth}) * 1px)
      ${errorFillFocus};
  }

  :host([appearance='filled']) .root {
    background: ${neutralFillRest};
  }

  :host([appearance='filled']:hover:not([disabled])) .root {
    background: ${neutralFillHover};
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
    border-color: ${neutralStrokeRest};
  }
`.withBehaviors(
  forcedColorsStylesheetBehavior(css`
    .root,
    :host([appearance='filled']) .root {
      forced-color-adjust: none;
      background: ${SystemColors.Field};
      border-color: ${SystemColors.FieldText};
    }
    :host([aria-invalid='true']) .root {
      border-style: dashed;
    }
    :host(:hover:not([disabled])) .root,
    :host([appearance='filled']:hover:not([disabled])) .root,
    :host([appearance='filled']:hover) .root {
      background: ${SystemColors.Field};
      border-color: ${SystemColors.Highlight};
    }
    .start,
    .end {
      fill: currentcolor;
    }
    :host([disabled]) {
      opacity: 1;
    }
    :host([disabled]) .root,
    :host([appearance='filled']:hover[disabled]) .root {
      border-color: ${SystemColors.GrayText};
      background: ${SystemColors.Field};
    }
    :host(:focus-within:enabled) .root {
      border-color: ${SystemColors.Highlight};
      box-shadow: 0 0 0 calc((${focusStrokeWidth} - ${strokeWidth}) * 1px)
        ${SystemColors.Highlight};
    }
    input::placeholder {
      color: ${SystemColors.GrayText};
    }
  `)
);
