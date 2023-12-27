// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import { css, ElementStyles } from '@microsoft/fast-element';
import {
  FoundationElementTemplate,
  TextFieldOptions
} from '@microsoft/fast-foundation';
import { BaseFieldStyles } from '../styles/index.js';

/**
 * Styles for Text Field
 * @public
 */
export const textFieldStyles: FoundationElementTemplate<
  ElementStyles,
  TextFieldOptions
> = (context, definition) => css`
  ${BaseFieldStyles}

  .start,
    .end {
    display: flex;
  }
`;
