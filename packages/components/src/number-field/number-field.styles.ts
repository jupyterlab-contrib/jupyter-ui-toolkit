// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import { css, ElementStyles } from '@microsoft/fast-element';
import {
  FoundationElementTemplate,
  NumberFieldOptions
} from '@microsoft/fast-foundation';
import { neutralForegroundRest } from '../design-tokens';
import { BaseFieldStyles } from '../styles/index';

/**
 * Styles for Number Field
 * @public
 */
export const numberFieldStyles: FoundationElementTemplate<
  ElementStyles,
  NumberFieldOptions
> = (context, definition) =>
  css`
    ${BaseFieldStyles}

    .controls {
      opacity: 0;
    }

    .step-up-glyph,
    .step-down-glyph {
      display: block;
      padding: 4px 10px;
      cursor: pointer;
    }

    .step-up-glyph:before,
    .step-down-glyph:before {
      content: '';
      display: block;
      border: solid transparent 6px;
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
