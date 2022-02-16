// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import { designUnit } from '@microsoft/fast-components';
import { css, ElementStyles } from '@microsoft/fast-element';
import {
  focusVisible,
  FoundationElementTemplate,
  TextFieldOptions
} from '@microsoft/fast-foundation';
import { BaseFieldStyles, heightNumber } from '../styles/index';

export const searchStyles: FoundationElementTemplate<
  ElementStyles,
  TextFieldOptions
> = (context, definition) =>
  css`
    ${BaseFieldStyles}

    .control {
      padding: 0;
      padding-inline-start: calc(${designUnit} * 2px + 1px);
      padding-inline-end: calc(
        (${designUnit} * 2px) + (${heightNumber} * 1px) + 1px
      );
    }

    .control::-webkit-search-cancel-button {
      -webkit-appearance: none;
    }

    .control:hover,
    .control:${focusVisible},
    .control:disabled,
    .control:active {
      outline: none;
    }

    /* Cancel margin set for button focus outline */
    jp-button {
      margin: 0;
    }

    .clear-button {
      position: absolute;
      right: 0;
      top: 1px;
      height: calc(100% - 2px);
      opacity: 0;
    }

    .input-wrapper {
      display: flex;
      position: relative;
      width: 100%;
    }

    .start,
    .end {
      display: flex;
      margin: 1px;
    }

    ::slotted([slot='end']) {
      height: 100%;
    }

    .end {
      margin-inline-end: 1px;
    }

    ::slotted(svg) {
      /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
      margin-inline-end: 11px;
      margin-inline-start: 11px;
      margin-top: auto;
      margin-bottom: auto;
    }

    .clear-button__hidden {
      opacity: 0;
    }

    :host(:hover:not([disabled], [readOnly])) .clear-button,
    :host(:active:not([disabled], [readOnly])) .clear-button,
    :host(:focus-within:not([disabled], [readOnly])) .clear-button {
      opacity: 1;
    }

    :host(:hover:not([disabled], [readOnly])) .clear-button__hidden,
    :host(:active:not([disabled], [readOnly])) .clear-button__hidden,
    :host(:focus-within:not([disabled], [readOnly])) .clear-button__hidden {
      opacity: 0;
    }
  `;
