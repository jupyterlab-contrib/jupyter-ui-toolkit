// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {
  accentFillActive,
  accentFillFocus,
  accentFillHover,
  accentFillRest,
  bodyFont,
  controlCornerRadius,
  designUnit,
  disabledOpacity,
  focusStrokeWidth,
  foregroundOnAccentActive,
  foregroundOnAccentFocus,
  foregroundOnAccentHover,
  foregroundOnAccentRest,
  neutralFillHover,
  neutralForegroundRest,
  typeRampBaseFontSize,
  typeRampBaseLineHeight
} from '@microsoft/fast-components';
import type { ElementStyles } from '@microsoft/fast-element';
import { css } from '@microsoft/fast-element';
import type {
  FoundationElementTemplate,
  ListboxOptionOptions
} from '@microsoft/fast-foundation';
import {
  disabledCursor,
  display,
  focusVisible,
  forcedColorsStylesheetBehavior
} from '@microsoft/fast-foundation';
import { SystemColors } from '@microsoft/fast-web-utilities';
import { heightNumber } from '../styles';

/**
 * Styles for Option
 * @public
 */
export const optionStyles: FoundationElementTemplate<
  ElementStyles,
  ListboxOptionOptions
> = (context, definition) =>
  css`
    ${display('inline-flex')} :host {
      align-items: center;
      font-family: ${bodyFont};
      border-radius: calc(${controlCornerRadius} * 1px);
      border: calc(${focusStrokeWidth} * 1px) solid transparent;
      box-sizing: border-box;
      color: ${neutralForegroundRest};
      cursor: pointer;
      flex: 0 0 auto;
      fill: currentcolor;
      font-size: ${typeRampBaseFontSize};
      height: calc(${heightNumber} * 1px);
      line-height: ${typeRampBaseLineHeight};
      margin: 0 calc(${designUnit} * 1px);
      outline: none;
      overflow: hidden;
      padding: 0 calc(${designUnit} * 2.25px);
      user-select: none;
      white-space: nowrap;
    }

    /* TODO should we use outline instead of background for focus to support multi-selection */
    :host(:${focusVisible}) {
      background: ${accentFillFocus};
      color: ${foregroundOnAccentFocus};
    }

    :host([aria-selected='true']) {
      background: ${accentFillRest};
      color: ${foregroundOnAccentRest};
    }

    :host(:hover) {
      background: ${accentFillHover};
      color: ${foregroundOnAccentHover};
    }

    :host(:active) {
      background: ${accentFillActive};
      color: ${foregroundOnAccentActive};
    }

    :host(:not([aria-selected='true']):hover),
    :host(:not([aria-selected='true']):active) {
      background: ${neutralFillHover};
      color: ${neutralForegroundRest};
    }

    :host([disabled]) {
      cursor: ${disabledCursor};
      opacity: ${disabledOpacity};
    }

    :host([disabled]:hover) {
      background-color: inherit;
    }

    .content {
      grid-column-start: 2;
      justify-self: start;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .start,
    .end,
    ::slotted(svg) {
      display: flex;
    }

    ::slotted(svg) {
      /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
      height: calc(${designUnit} * 4px);
      width: calc(${designUnit} * 4px);
    }

    ::slotted([slot='end']) {
      margin-inline-start: 1ch;
    }

    ::slotted([slot='start']) {
      margin-inline-end: 1ch;
    }
  `.withBehaviors(
    forcedColorsStylesheetBehavior(css`
      :host {
        border-color: transparent;
        forced-color-adjust: none;
        color: ${SystemColors.ButtonText};
        fill: currentcolor;
      }

      :host(:not([aria-selected='true']):hover),
      :host([aria-selected='true']) {
        background: ${SystemColors.Highlight};
        color: ${SystemColors.HighlightText};
      }

      :host([disabled]),
      :host([disabled]:not([aria-selected='true']):hover) {
        background: ${SystemColors.Canvas};
        color: ${SystemColors.GrayText};
        fill: currentcolor;
        opacity: 1;
      }
    `)
  );
