// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {
  accentFillActive,
  accentFillFocus,
  bodyFont,
  controlCornerRadius,
  designUnit,
  disabledOpacity,
  focusStrokeWidth,
  neutralFillInputActive,
  neutralFillInputHover,
  neutralFillInputRest,
  neutralFillStealthRest,
  neutralFillStrongHover,
  neutralFillStrongRest,
  neutralForegroundRest,
  neutralLayerFloating,
  neutralStrokeRest,
  strokeWidth,
  typeRampBaseFontSize,
  typeRampBaseLineHeight
} from '@microsoft/fast-components';
import type { ElementStyles } from '@microsoft/fast-element';
import { css } from '@microsoft/fast-element';
import type {
  FoundationElementTemplate,
  SelectOptions
} from '@microsoft/fast-foundation';
import {
  disabledCursor,
  display,
  focusVisible,
  forcedColorsStylesheetBehavior
} from '@microsoft/fast-foundation';
import { SystemColors } from '@microsoft/fast-web-utilities';
import { elevation, heightNumber } from '../styles';

/**
 * Styles for Select
 * @public
 */
export const selectStyles: FoundationElementTemplate<
  ElementStyles,
  SelectOptions
> = (context, definition) =>
  css`
    ${display('inline-flex')} :host {
      --elevation: 14;
      background: ${neutralFillInputRest};
      border-radius: calc(${controlCornerRadius} * 1px);
      border: calc(${strokeWidth} * 1px) solid ${neutralFillStrongRest};
      box-sizing: border-box;
      color: ${neutralForegroundRest};
      font-family: ${bodyFont};
      height: calc(${heightNumber} * 1px);
      position: relative;
      user-select: none;
      outline: none;
      vertical-align: top;
    }

    :host(:not([autowidth])) {
      min-width: 250px;
    }

    .listbox {
      ${elevation}
      background: ${neutralLayerFloating};
      border: calc(${strokeWidth} * 1px) solid ${neutralStrokeRest};
      border-radius: calc(${controlCornerRadius} * 1px);
      box-sizing: border-box;
      display: inline-flex;
      flex-direction: column;
      left: 0;
      max-height: calc(var(--max-height) - (${heightNumber} * 1px));
      padding: calc(${designUnit} * 1px) 0;
      overflow-y: auto;
      position: absolute;
      z-index: 1;
    }

    :host(:not([autowidth])) .listbox {
      width: 100%;
    }

    :host([autowidth]) ::slotted([role='option']),
    :host([autowidth]) ::slotted(option) {
      padding: 0 calc(1em + ${designUnit} * 1.25px);
    }

    .listbox[hidden] {
      display: none;
    }

    .control {
      align-items: center;
      box-sizing: border-box;
      cursor: pointer;
      display: flex;
      font-size: ${typeRampBaseFontSize};
      font-family: inherit;
      line-height: ${typeRampBaseLineHeight};
      min-height: 100%;
      padding: 0 calc(${designUnit} * 2.25px);
      width: 100%;
    }

    :host([minimal]) {
      --density: -4;
    }

    :host(:not([disabled]):hover) {
      background: ${neutralFillInputHover};
      border-color: ${neutralFillStrongHover};
    }

    :host(:${focusVisible}) {
      border-color: ${accentFillFocus};
      box-shadow: 0 0 0 calc((${focusStrokeWidth} - ${strokeWidth}) * 1px)
        ${accentFillFocus};
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
      background: ${neutralFillStealthRest};
      color: ${neutralForegroundRest};
      fill: currentcolor;
    }

    :host(:not([disabled])) .control:active {
      background: ${neutralFillInputActive};
      border-color: ${accentFillActive};
      border-radius: calc(${controlCornerRadius} * 1px);
    }

    :host([open][position='above']) .listbox {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    :host([open][position='below']) .listbox {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }

    :host([open][position='above']) .listbox {
      border-bottom: 0;
      bottom: calc(${heightNumber} * 1px);
    }

    :host([open][position='below']) .listbox {
      border-top: 0;
      top: calc(${heightNumber} * 1px);
    }

    .selected-value {
      flex: 1 1 auto;
      font-family: inherit;
      text-align: start;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
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
      ${elevation}
    }

    .end {
      margin-inline-start: auto;
    }

    .start,
    .end,
    .indicator,
    .select-indicator,
    ::slotted(svg) {
      /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
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
  `.withBehaviors(
    forcedColorsStylesheetBehavior(css`
      :host(:not([disabled]):hover),
      :host(:not([disabled]):active) {
        border-color: ${SystemColors.Highlight};
      }

      :host(:not([disabled]):${focusVisible}) {
        background-color: ${SystemColors.ButtonFace};
        box-shadow: 0 0 0 calc(${focusStrokeWidth} * 1px)
          ${SystemColors.Highlight};
        color: ${SystemColors.ButtonText};
        fill: currentcolor;
        forced-color-adjust: none;
      }

      :host(:not([disabled]):${focusVisible}) .listbox {
        background: ${SystemColors.ButtonFace};
      }

      :host([disabled]) {
        border-color: ${SystemColors.GrayText};
        background-color: ${SystemColors.ButtonFace};
        color: ${SystemColors.GrayText};
        fill: currentcolor;
        opacity: 1;
        forced-color-adjust: none;
      }

      :host([disabled]:hover) {
        background: ${SystemColors.ButtonFace};
      }

      :host([disabled]) .control {
        color: ${SystemColors.GrayText};
        border-color: ${SystemColors.GrayText};
      }

      :host([disabled]) .control .select-indicator {
        fill: ${SystemColors.GrayText};
      }

      :host(:${focusVisible}) ::slotted([aria-selected="true"][role="option"]),
            :host(:${focusVisible}) ::slotted(option[aria-selected="true"]),
            :host(:${focusVisible}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
        background: ${SystemColors.Highlight};
        border-color: ${SystemColors.ButtonText};
        box-shadow: 0 0 0 calc((${focusStrokeWidth} - ${strokeWidth}) * 1px)
          ${SystemColors.HighlightText};
        color: ${SystemColors.HighlightText};
        fill: currentcolor;
      }

      .start,
      .end,
      .indicator,
      .select-indicator,
      ::slotted(svg) {
        color: ${SystemColors.ButtonText};
        fill: currentcolor;
      }
    `)
  );
