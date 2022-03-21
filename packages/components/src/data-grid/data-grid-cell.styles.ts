// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import { css, ElementStyles } from '@microsoft/fast-element';
import {
  focusVisible,
  forcedColorsStylesheetBehavior,
  FoundationElementTemplate
} from '@microsoft/fast-foundation';
import { SystemColors } from '@microsoft/fast-web-utilities';
import {
  accentFillFocus,
  bodyFont,
  controlCornerRadius,
  designUnit,
  focusStrokeWidth,
  neutralForegroundRest,
  strokeWidth,
  typeRampBaseFontSize,
  typeRampBaseLineHeight
} from '../design-tokens';

/**
 * Styles for Data Grid cell
 * @public
 */
export const dataGridCellStyles: FoundationElementTemplate<ElementStyles> = (
  context,
  definition
) =>
  css`
    :host {
      padding: calc(${designUnit} * 1px) calc(${designUnit} * 3px);
      color: ${neutralForegroundRest};
      box-sizing: border-box;
      font-family: ${bodyFont};
      font-size: ${typeRampBaseFontSize};
      line-height: ${typeRampBaseLineHeight};
      border: transparent calc(${strokeWidth} * 1px) solid;
      font-weight: 400;
      overflow: hidden;
      white-space: nowrap;
      border-radius: calc(${controlCornerRadius} * 1px);
    }

    :host(.column-header) {
      font-weight: 600;
    }

    :host(:${focusVisible}) {
      outline: calc(${focusStrokeWidth} * 1px) solid ${accentFillFocus};
    }
  `.withBehaviors(
    forcedColorsStylesheetBehavior(
      css`
        :host {
          forced-color-adjust: none;
          border-color: transparent;
          background: ${SystemColors.Field};
          color: ${SystemColors.FieldText};
        }

        :host(:${focusVisible}) {
          border-color: ${SystemColors.FieldText};
          box-shadow: 0 0 0 2px inset ${SystemColors.Field};
        }
      `
    )
  );
