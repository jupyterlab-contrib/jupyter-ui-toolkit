// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import { css, ElementStyles } from '@microsoft/fast-element';
import {
  disabledCursor,
  display,
  focusVisible,
  forcedColorsStylesheetBehavior,
  FoundationElementTemplate,
  SliderOptions
} from '@microsoft/fast-foundation';
import { SystemColors } from '@microsoft/fast-web-utilities';
import {
  accentFillFocus,
  controlCornerRadius,
  designUnit,
  disabledOpacity,
  fillColor,
  focusStrokeWidth,
  neutralForegroundRest,
  neutralStrokeHover,
  neutralStrokeRest
} from '../design-tokens';
import { heightNumber } from '../styles/index';

/**
 * Styles for Slider
 * @public
 */
export const sliderStyles: FoundationElementTemplate<
  ElementStyles,
  SliderOptions
> = (context, definition) =>
  css`
    :host([hidden]) {
      display: none;
    }

    ${display('inline-grid')} :host {
      --thumb-size: calc(${heightNumber} * 0.5 - ${designUnit});
      --thumb-translate: calc(
        var(--thumb-size) * -0.5 + var(--track-width) / 2
      );
      --track-overhang: calc((${designUnit} / 2) * -1);
      --track-width: ${designUnit};
      --jp-slider-height: calc(var(--thumb-size) * 10);
      align-items: center;
      width: 100%;
      margin: calc(${designUnit} * 1px) 0;
      user-select: none;
      box-sizing: border-box;
      border-radius: calc(${controlCornerRadius} * 1px);
      outline: none;
      cursor: pointer;
    }
    :host([orientation='horizontal']) .positioning-region {
      position: relative;
      margin: 0 8px;
      display: grid;
      grid-template-rows: calc(var(--thumb-size) * 1px) 1fr;
    }
    :host([orientation='vertical']) .positioning-region {
      position: relative;
      margin: 0 8px;
      display: grid;
      height: 100%;
      grid-template-columns: calc(var(--thumb-size) * 1px) 1fr;
    }

    :host(:${focusVisible}) .thumb-cursor {
      box-shadow: 0 0 0 2px ${fillColor},
        0 0 0 calc((2 + ${focusStrokeWidth}) * 1px) ${accentFillFocus};
    }

    .thumb-container {
      position: absolute;
      height: calc(var(--thumb-size) * 1px);
      width: calc(var(--thumb-size) * 1px);
      transition: all 0.2s ease;
      color: ${neutralForegroundRest};
      fill: currentcolor;
    }
    .thumb-cursor {
      border: none;
      width: calc(var(--thumb-size) * 1px);
      height: calc(var(--thumb-size) * 1px);
      background: ${neutralForegroundRest};
      border-radius: calc(${controlCornerRadius} * 1px);
    }
    .thumb-cursor:hover {
      background: ${neutralForegroundRest};
      border-color: ${neutralStrokeHover};
    }
    .thumb-cursor:active {
      background: ${neutralForegroundRest};
    }
    :host([orientation='horizontal']) .thumb-container {
      transform: translateX(calc(var(--thumb-size) * 0.5px))
        translateY(calc(var(--thumb-translate) * 1px));
    }
    :host([orientation='vertical']) .thumb-container {
      transform: translateX(calc(var(--thumb-translate) * 1px))
        translateY(calc(var(--thumb-size) * 0.5px));
    }
    :host([orientation='horizontal']) {
      min-width: calc(var(--thumb-size) * 1px);
    }
    :host([orientation='horizontal']) .track {
      right: calc(var(--track-overhang) * 1px);
      left: calc(var(--track-overhang) * 1px);
      align-self: start;
      height: calc(var(--track-width) * 1px);
    }
    :host([orientation='vertical']) .track {
      top: calc(var(--track-overhang) * 1px);
      bottom: calc(var(--track-overhang) * 1px);
      width: calc(var(--track-width) * 1px);
      height: 100%;
    }
    .track {
      background: ${neutralStrokeRest};
      position: absolute;
      border-radius: calc(${controlCornerRadius} * 1px);
    }
    :host([orientation='vertical']) {
      height: calc(var(--jp-slider-height) * 1px);
      min-height: calc(var(--thumb-size) * 1px);
      min-width: calc(${designUnit} * 20px);
    }
    :host([disabled]),
    :host([readonly]) {
      cursor: ${disabledCursor};
    }
    :host([disabled]) {
      opacity: ${disabledOpacity};
    }
  `.withBehaviors(
    forcedColorsStylesheetBehavior(
      css`
        .thumb-cursor {
          forced-color-adjust: none;
          border-color: ${SystemColors.FieldText};
          background: ${SystemColors.FieldText};
        }
        .thumb-cursor:hover,
        .thumb-cursor:active {
          background: ${SystemColors.Highlight};
        }
        .track {
          forced-color-adjust: none;
          background: ${SystemColors.FieldText};
        }
        :host(:${focusVisible}) .thumb-cursor {
          border-color: ${SystemColors.Highlight};
        }
        :host([disabled]) {
          opacity: 1;
        }
        :host([disabled]) .track,
        :host([disabled]) .thumb-cursor {
          forced-color-adjust: none;
          background: ${SystemColors.GrayText};
        }

        :host(:${focusVisible}) .thumb-cursor {
          background: ${SystemColors.Highlight};
          border-color: ${SystemColors.Highlight};
          box-shadow: 0 0 0 2px ${SystemColors.Field},
            0 0 0 4px ${SystemColors.FieldText};
        }
      `
    )
  );
