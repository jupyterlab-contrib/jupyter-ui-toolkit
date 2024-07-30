// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import { css, ElementStyles } from '@microsoft/fast-element';
import {
  FoundationElementTemplate,
  NumberFieldOptions
} from '@microsoft/fast-foundation';
import {
  density,
  designUnit,
  elementScale,
  neutralFillActive,
  neutralFillHover,
  neutralForegroundRest
} from '../design-tokens.js';
import { BaseFieldStyles } from '../styles/index.js';

/**
 * Styles for Number Field
 * @public
 */
export const numberFieldStyles: FoundationElementTemplate<
  ElementStyles,
  NumberFieldOptions
> = (context, definition) => css`
  ${BaseFieldStyles}

  .controls {
    opacity: 0;
    margin: auto 0;
  }

  .step-up-glyph,
  .step-down-glyph {
    display: block;
    padding: calc(
        (${designUnit} + 0.5 * ${density} + 0.5 * ${elementScale}) * 1px
      )
      calc((2 + 2 * ${designUnit} + ${density} + ${elementScale}) * 1px);
    cursor: pointer;
  }

  .step-up-glyph:before,
  .step-down-glyph:before {
    content: '';
    display: block;
    border: solid transparent
      calc((2 + ${designUnit} + 0.5 * ${density} + 0.5 * ${elementScale}) * 1px);
  }

  .step-up-glyph:hover:before,
  .step-down-glyph:hover:before {
    background-color: ${neutralFillHover};
  }

  .step-up-glyph:active:before,
  .step-down-glyph:active:before {
    background-color: ${neutralFillActive};
  }

  .step-up-glyph:before {
    border-bottom-color: ${neutralForegroundRest};
  }

  .step-down-glyph:before {
    border-top-color: ${neutralForegroundRest};
  }

  :host(:hover:not([disabled])) .controls,
  :host(:focus-within:not([disabled])) .controls {
    opacity: 1;
  }
`;
