// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import { css, ElementStyles } from '@microsoft/fast-element';
import {
  ComboboxOptions,
  disabledCursor,
  focusVisible,
  FoundationElementTemplate
} from '@microsoft/fast-foundation';
import {
  accentFillFocus,
  errorFillFocus,
  focusStrokeWidth,
  strokeWidth,
  typeRampBaseFontSize,
  typeRampBaseLineHeight
} from '../design-tokens.js';
import { selectStyles } from '../select/select.styles.js';

/**
 * Styles for Combobox
 * @public
 */
export const comboboxStyles: FoundationElementTemplate<
  ElementStyles,
  ComboboxOptions
> = (context, definition) => css`
  ${selectStyles(context, definition)}

  :host(:empty) .listbox {
    display: none;
  }

  :host([disabled]) *,
  :host([disabled]) {
    cursor: ${disabledCursor};
    user-select: none;
  }

  :host(:focus-within:not([disabled])) {
    border-color: ${accentFillFocus};
    box-shadow: 0 0 0 calc((${focusStrokeWidth} - ${strokeWidth}) * 1px)
      ${accentFillFocus};
  }

  :host(.invalid:focus-within:not([disabled])) {
    border-color: ${errorFillFocus};
    box-shadow: 0 0 0 calc((${focusStrokeWidth} - ${strokeWidth}) * 1px)
      ${errorFillFocus};
  }

  .selected-value {
    -webkit-appearance: none;
    background: transparent;
    border: none;
    color: inherit;
    font-size: ${typeRampBaseFontSize};
    line-height: ${typeRampBaseLineHeight};
    height: calc(100% - (${strokeWidth} * 1px));
    margin: auto 0;
    width: 100%;
  }

  .selected-value:hover,
    .selected-value:${focusVisible},
    .selected-value:disabled,
    .selected-value:active {
    outline: none;
  }
`;
