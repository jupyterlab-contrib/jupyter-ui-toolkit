// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import { css, ElementStyles } from '@microsoft/fast-element';
import {
  AccordionItemOptions,
  display,
  focusVisible,
  forcedColorsStylesheetBehavior,
  FoundationElementTemplate
} from '@microsoft/fast-foundation';
import { SystemColors } from '@microsoft/fast-web-utilities';
import {
  accentFillFocus,
  bodyFont,
  controlCornerRadius,
  density,
  designUnit,
  focusStrokeWidth,
  neutralForegroundRest,
  neutralStrokeDividerRest,
  strokeWidth,
  typeRampMinus1FontSize,
  typeRampMinus1LineHeight
} from '../design-tokens';
import { heightNumber } from '../styles/size';

/**
 * Styles for AccordionItem
 * @public
 */
export const accordionItemStyles: FoundationElementTemplate<
  ElementStyles,
  AccordionItemOptions
> = (context, definition) =>
  css`
    ${display('flex')} :host {
      box-sizing: border-box;
      font-family: ${bodyFont};
      flex-direction: column;
      font-size: ${typeRampMinus1FontSize};
      line-height: ${typeRampMinus1LineHeight};
      border-bottom: calc(${strokeWidth} * 1px) solid
        ${neutralStrokeDividerRest};
    }

    .region {
      display: none;
      padding: calc((6 + (${designUnit} * 2 * ${density})) * 1px);
    }

    div.heading {
      display: grid;
      position: relative;
      grid-template-columns: calc(${heightNumber} * 1px) auto 1fr auto;
      color: ${neutralForegroundRest};
    }

    .button {
      appearance: none;
      border: none;
      background: none;
      grid-column: 3;
      outline: none;
      padding: 0 calc((6 + (${designUnit} * 2 * ${density})) * 1px);
      text-align: left;
      height: calc(${heightNumber} * 1px);
      color: currentcolor;
      cursor: pointer;
      font-family: inherit;
    }

    .button:hover {
      color: currentcolor;
    }

    .button:active {
      color: currentcolor;
    }

    .button::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      cursor: pointer;
    }

    /* prettier-ignore */
    .button:${focusVisible}::before {
      outline: none;
      border: calc(${focusStrokeWidth} * 1px) solid ${accentFillFocus};
      border-radius: calc(${controlCornerRadius} * 1px);
    }

    :host([expanded]) .region {
      display: block;
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      grid-column: 1;
      grid-row: 1;
      pointer-events: none;
      position: relative;
    }

    slot[name='expanded-icon'],
    slot[name='collapsed-icon'] {
      fill: currentcolor;
    }

    slot[name='collapsed-icon'] {
      display: flex;
    }

    :host([expanded]) slot[name='collapsed-icon'] {
      display: none;
    }

    slot[name='expanded-icon'] {
      display: none;
    }

    :host([expanded]) slot[name='expanded-icon'] {
      display: flex;
    }

    .start {
      display: flex;
      align-items: center;
      padding-inline-start: calc(${designUnit} * 1px);
      justify-content: center;
      grid-column: 2;
      position: relative;
    }

    .end {
      display: flex;
      align-items: center;
      justify-content: center;
      grid-column: 4;
      position: relative;
    }
  `.withBehaviors(
    forcedColorsStylesheetBehavior(css`
      /* prettier-ignore */
      .button:${focusVisible}::before {
          border-color: ${SystemColors.Highlight};
        }
      :host slot[name='collapsed-icon'],
      :host([expanded]) slot[name='expanded-icon'] {
        fill: ${SystemColors.ButtonText};
      }
    `)
  );
