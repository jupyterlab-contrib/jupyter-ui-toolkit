// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import { css } from '@microsoft/fast-element';
import {
  display,
  focusVisible,
  forcedColorsStylesheetBehavior
} from '@microsoft/fast-foundation';
import { SystemColors } from '@microsoft/fast-web-utilities';
import {
  accentFillActive,
  accentFillFocus,
  accentFillHover,
  accentFillRest,
  accentForegroundActive,
  accentForegroundHover,
  accentForegroundRest,
  bodyFont,
  controlCornerRadius,
  density,
  designUnit,
  elementScale,
  errorFillActive,
  errorFillFocus,
  errorFillHover,
  errorFillRest,
  errorForegroundActive,
  focusStrokeOuter,
  focusStrokeWidth,
  foregroundOnAccentActive,
  foregroundOnAccentHover,
  foregroundOnAccentRest,
  neutralFillActive,
  neutralFillHover,
  neutralFillRest,
  neutralFillStealthActive,
  neutralFillStealthHover,
  neutralFillStrongActive,
  neutralFillStrongFocus,
  neutralForegroundRest,
  strokeWidth,
  typeRampBaseFontSize,
  typeRampBaseLineHeight
} from '../../design-tokens.js';
import { heightNumber } from '../size.js';

// TODO do we really want to use outline for focus => this call for a minimal style for toolbar probably
// outline force to use a margin so that the outline is not hidden by other elements.

/**
 * @internal
 */
export const BaseButtonStyles = css`
  ${display('inline-flex')} :host {
    font-family: ${bodyFont};
    outline: none;
    font-size: ${typeRampBaseFontSize};
    line-height: ${typeRampBaseLineHeight};
    height: calc(${heightNumber} * 1px);
    min-width: calc(${heightNumber} * 1px);
    background-color: ${neutralFillRest};
    color: ${neutralForegroundRest};
    border-radius: calc(${controlCornerRadius} * 1px);
    fill: currentcolor;
    cursor: pointer;
    margin: calc((${focusStrokeWidth} + 2) * 1px);
  }

  .control {
    background: transparent;
    height: inherit;
    flex-grow: 1;
    box-sizing: border-box;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0
      max(
        1px,
        calc((14 + (${designUnit} * (${density} + ${elementScale})))) * 1px
      );
    white-space: nowrap;
    outline: none;
    text-decoration: none;
    border: calc(${strokeWidth} * 1px) solid transparent;
    color: inherit;
    border-radius: inherit;
    fill: inherit;
    cursor: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  :host(:hover) {
    background-color: ${neutralFillHover};
  }

  :host(:active) {
    background-color: ${neutralFillActive};
  }

  :host([aria-pressed='true']) {
    box-shadow: inset 0px 0px 2px 2px ${neutralFillStrongActive};
  }

  :host([minimal]),
  :host([scale='xsmall']) {
    --element-scale: -4;
  }

  :host([scale='small']) {
    --element-scale: -2;
  }

  :host([scale='medium']) {
    --element-scale: 0;
  }

  :host([scale='large']) {
    --element-scale: 2;
  }

  :host([scale='xlarge']) {
    --element-scale: 4;
  }

  /* prettier-ignore */
  .control:${focusVisible} {
      outline: calc(${focusStrokeWidth} * 1px) solid ${neutralFillStrongFocus};
      outline-offset: 2px;
      -moz-outline-radius: 0px;
    }

  .control::-moz-focus-inner {
    border: 0;
  }

  .start,
  .end {
    display: flex;
  }

  .control.icon-only {
    padding: 0;
    line-height: 0;
  }

  ::slotted(svg),
  ::slotted(jp-icon) {
    ${
      /* Glyph size and margin-left is temporary -
           replace when adaptive typography is figured out */ ''
    } width: 16px;
    height: 16px;
    pointer-events: none;
  }

  .start {
    margin-inline-end: 11px;
  }

  .end {
    margin-inline-start: 11px;
  }
`.withBehaviors(
  forcedColorsStylesheetBehavior(css`
    :host .control {
      background-color: ${SystemColors.ButtonFace};
      border-color: ${SystemColors.ButtonText};
      color: ${SystemColors.ButtonText};
      fill: currentColor;
    }

    :host(:hover) .control {
      forced-color-adjust: none;
      background-color: ${SystemColors.Highlight};
      color: ${SystemColors.HighlightText};
    }

    /* prettier-ignore */
    .control:${focusVisible} {
          forced-color-adjust: none;
          background-color: ${SystemColors.Highlight};
          outline-color: ${SystemColors.ButtonText};
          color: ${SystemColors.HighlightText};
        }

    .control:hover,
    :host([appearance='outline']) .control:hover {
      border-color: ${SystemColors.ButtonText};
    }

    :host([href]) .control {
      border-color: ${SystemColors.LinkText};
      color: ${SystemColors.LinkText};
    }

    :host([href]) .control:hover,
        :host([href]) .control:${focusVisible} {
      forced-color-adjust: none;
      background: ${SystemColors.ButtonFace};
      outline-color: ${SystemColors.LinkText};
      color: ${SystemColors.LinkText};
      fill: currentColor;
    }
  `)
);

/**
 * @internal
 */
export const AccentButtonStyles = css`
  :host([appearance='accent']) {
    background: ${accentFillRest};
    color: ${foregroundOnAccentRest};
  }

  :host([appearance='accent']:hover) {
    background: ${accentFillHover};
    color: ${foregroundOnAccentHover};
  }

  :host([appearance='accent'][aria-pressed='true']) {
    box-shadow: inset 0px 0px 2px 2px ${accentForegroundActive};
  }

  :host([appearance='accent']:active) .control:active {
    background: ${accentFillActive};
    color: ${foregroundOnAccentActive};
  }

  :host([appearance="accent"]) .control:${focusVisible} {
    outline-color: ${accentFillFocus};
  }
`.withBehaviors(
  forcedColorsStylesheetBehavior(css`
    :host([appearance='accent']) .control {
      forced-color-adjust: none;
      background: ${SystemColors.Highlight};
      color: ${SystemColors.HighlightText};
    }

    :host([appearance='accent']) .control:hover,
    :host([appearance='accent']:active) .control:active {
      background: ${SystemColors.HighlightText};
      border-color: ${SystemColors.Highlight};
      color: ${SystemColors.Highlight};
    }

    :host([appearance="accent"]) .control:${focusVisible} {
      outline-color: ${SystemColors.Highlight};
    }

    :host([appearance='accent'][href]) .control {
      background: ${SystemColors.LinkText};
      color: ${SystemColors.HighlightText};
    }

    :host([appearance='accent'][href]) .control:hover {
      background: ${SystemColors.ButtonFace};
      border-color: ${SystemColors.LinkText};
      box-shadow: none;
      color: ${SystemColors.LinkText};
      fill: currentColor;
    }

    :host([appearance="accent"][href]) .control:${focusVisible} {
      outline-color: ${SystemColors.HighlightText};
    }
  `)
);

/**
 * @internal
 */
export const ErrorButtonStyles = css`
  :host([appearance='error']) {
    background: ${errorFillRest};
    color: ${foregroundOnAccentRest};
  }

  :host([appearance='error']:hover) {
    background: ${errorFillHover};
    color: ${foregroundOnAccentHover};
  }

  :host([appearance='error'][aria-pressed='true']) {
    box-shadow: inset 0px 0px 2px 2px ${errorForegroundActive};
  }

  :host([appearance='error']:active) .control:active {
    background: ${errorFillActive};
    color: ${foregroundOnAccentActive};
  }

  :host([appearance="error"]) .control:${focusVisible} {
    outline-color: ${errorFillFocus};
  }
`.withBehaviors(
  forcedColorsStylesheetBehavior(css`
    :host([appearance='error']) .control {
      forced-color-adjust: none;
      background: ${SystemColors.Highlight};
      color: ${SystemColors.HighlightText};
    }

    :host([appearance='error']) .control:hover,
    :host([appearance='error']:active) .control:active {
      background: ${SystemColors.HighlightText};
      border-color: ${SystemColors.Highlight};
      color: ${SystemColors.Highlight};
    }

    :host([appearance="error"]) .control:${focusVisible} {
      outline-color: ${SystemColors.Highlight};
    }

    :host([appearance='error'][href]) .control {
      background: ${SystemColors.LinkText};
      color: ${SystemColors.HighlightText};
    }

    :host([appearance='error'][href]) .control:hover {
      background: ${SystemColors.ButtonFace};
      border-color: ${SystemColors.LinkText};
      box-shadow: none;
      color: ${SystemColors.LinkText};
      fill: currentColor;
    }

    :host([appearance="error"][href]) .control:${focusVisible} {
      outline-color: ${SystemColors.HighlightText};
    }
  `)
);
/**
 * @internal
 */
export const HypertextStyles = css`
  :host([appearance='hypertext']) {
    font-size: inherit;
    line-height: inherit;
    height: auto;
    min-width: 0;
    background: transparent;
  }

  :host([appearance='hypertext']) .control {
    display: inline;
    padding: 0;
    border: none;
    box-shadow: none;
    border-radius: 0;
    line-height: 1;
  }

  :host a.control:not(:link) {
    background-color: transparent;
    cursor: default;
  }
  :host([appearance='hypertext']) .control:link,
  :host([appearance='hypertext']) .control:visited {
    background: transparent;
    color: ${accentForegroundRest};
    border-bottom: calc(${strokeWidth} * 1px) solid ${accentForegroundRest};
  }

  :host([appearance='hypertext']:hover),
  :host([appearance='hypertext']) .control:hover {
    background: transparent;
    border-bottom-color: ${accentForegroundHover};
  }

  :host([appearance='hypertext']:active),
  :host([appearance='hypertext']) .control:active {
    background: transparent;
    border-bottom-color: ${accentForegroundActive};
  }

  :host([appearance="hypertext"]) .control:${focusVisible} {
    outline-color: transparent;
    border-bottom: calc(${focusStrokeWidth} * 1px) solid ${focusStrokeOuter};
    margin-bottom: calc(calc(${strokeWidth} - ${focusStrokeWidth}) * 1px);
  }
`.withBehaviors(
  forcedColorsStylesheetBehavior(css`
    :host([appearance='hypertext']:hover) {
      background-color: ${SystemColors.ButtonFace};
      color: ${SystemColors.ButtonText};
    }
    :host([appearance="hypertext"][href]) .control:hover,
        :host([appearance="hypertext"][href]) .control:active,
        :host([appearance="hypertext"][href]) .control:${focusVisible} {
      color: ${SystemColors.LinkText};
      border-bottom-color: ${SystemColors.LinkText};
      box-shadow: none;
    }
  `)
);

/**
 * @internal
 */
export const LightweightButtonStyles = css`
  :host([appearance='lightweight']) {
    background: transparent;
    color: ${accentForegroundRest};
  }

  :host([appearance='lightweight']) .control {
    padding: 0;
    height: initial;
    border: none;
    box-shadow: none;
    border-radius: 0;
  }

  :host([appearance='lightweight']:hover) {
    background: transparent;
    color: ${accentForegroundHover};
  }

  :host([appearance='lightweight']:active) {
    background: transparent;
    color: ${accentForegroundActive};
  }

  :host([appearance='lightweight']) .content {
    position: relative;
  }

  :host([appearance='lightweight']) .content::before {
    content: '';
    display: block;
    height: calc(${strokeWidth} * 1px);
    position: absolute;
    top: calc(1em + 4px);
    width: 100%;
  }

  :host([appearance='lightweight']:hover) .content::before {
    background: ${accentForegroundHover};
  }

  :host([appearance='lightweight']:active) .content::before {
    background: ${accentForegroundActive};
  }

  :host([appearance="lightweight"]) .control:${focusVisible} {
    outline-color: transparent;
  }

  :host([appearance="lightweight"]) .control:${focusVisible} .content::before {
    background: ${neutralForegroundRest};
    height: calc(${focusStrokeWidth} * 1px);
  }
`.withBehaviors(
  forcedColorsStylesheetBehavior(css`
    :host([appearance="lightweight"]) .control:hover,
        :host([appearance="lightweight"]) .control:${focusVisible} {
      forced-color-adjust: none;
      background: ${SystemColors.ButtonFace};
      color: ${SystemColors.Highlight};
    }
    :host([appearance="lightweight"]) .control:hover .content::before,
        :host([appearance="lightweight"]) .control:${focusVisible} .content::before {
      background: ${SystemColors.Highlight};
    }

    :host([appearance="lightweight"][href]) .control:hover,
        :host([appearance="lightweight"][href]) .control:${focusVisible} {
      background: ${SystemColors.ButtonFace};
      box-shadow: none;
      color: ${SystemColors.LinkText};
    }

    :host([appearance="lightweight"][href]) .control:hover .content::before,
        :host([appearance="lightweight"][href]) .control:${focusVisible} .content::before {
      background: ${SystemColors.LinkText};
    }
  `)
);

/**
 * @internal
 */
export const OutlineButtonStyles = css`
  :host([appearance='outline']) {
    background: transparent;
    border-color: ${accentFillRest};
  }

  :host([appearance='outline']:hover) {
    border-color: ${accentFillHover};
  }

  :host([appearance='outline']:active) {
    border-color: ${accentFillActive};
  }

  :host([appearance='outline']) .control {
    border-color: inherit;
  }

  :host([appearance="outline"]) .control:${focusVisible} {
    outline-color: ${accentFillFocus};
  }
`.withBehaviors(
  forcedColorsStylesheetBehavior(css`
    :host([appearance='outline']) .control {
      border-color: ${SystemColors.ButtonText};
    }
    :host([appearance="outline"]) .control:${focusVisible} {
      forced-color-adjust: none;
      background-color: ${SystemColors.Highlight};
      outline-color: ${SystemColors.ButtonText};
      color: ${SystemColors.HighlightText};
      fill: currentColor;
    }
    :host([appearance='outline'][href]) .control {
      background: ${SystemColors.ButtonFace};
      border-color: ${SystemColors.LinkText};
      color: ${SystemColors.LinkText};
      fill: currentColor;
    }
    :host([appearance="outline"][href]) .control:hover,
        :host([appearance="outline"][href]) .control:${focusVisible} {
      forced-color-adjust: none;
      outline-color: ${SystemColors.LinkText};
    }
  `)
);

/**
 * @internal
 */
export const StealthButtonStyles = css`
  :host([appearance='stealth']),
  :host([appearance='stealth'][disabled]:active),
  :host([appearance='stealth'][disabled]:hover) {
    background: transparent;
  }

  :host([appearance='stealth']:hover) {
    background: ${neutralFillStealthHover};
  }

  :host([appearance='stealth']:active) {
    background: ${neutralFillStealthActive};
  }

  :host([appearance='stealth']) .control:${focusVisible} {
    outline-color: ${accentFillFocus};
  }

  /* Make the focus outline displayed within the button if
     it is in a start or end slot; e.g. in a tree item
     This will make the focus outline bounded within the container.
   */
  :host([appearance='stealth'][slot="end"]) .control:${focusVisible},
  :host([appearance='stealth'][slot="start"]) .control:${focusVisible} {
    outline-offset: -2px;
  }
`.withBehaviors(
  forcedColorsStylesheetBehavior(css`
    :host([appearance='stealth']),
    :host([appearance='stealth']) .control {
      forced-color-adjust: none;
      background: ${SystemColors.ButtonFace};
      border-color: transparent;
      color: ${SystemColors.ButtonText};
      fill: currentColor;
    }

    :host([appearance='stealth']:hover) .control {
      background: ${SystemColors.Highlight};
      border-color: ${SystemColors.Highlight};
      color: ${SystemColors.HighlightText};
      fill: currentColor;
    }

    :host([appearance="stealth"]:${focusVisible}) .control {
      outline-color: ${SystemColors.Highlight};
      color: ${SystemColors.HighlightText};
      fill: currentColor;
    }

    :host([appearance='stealth'][href]) .control {
      color: ${SystemColors.LinkText};
    }

    :host([appearance="stealth"][href]:hover) .control,
        :host([appearance="stealth"][href]:${focusVisible}) .control {
      background: ${SystemColors.LinkText};
      border-color: ${SystemColors.LinkText};
      color: ${SystemColors.HighlightText};
      fill: currentColor;
    }

    :host([appearance="stealth"][href]:${focusVisible}) .control {
      forced-color-adjust: none;
      box-shadow: 0 0 0 1px ${SystemColors.LinkText};
    }
  `)
);
