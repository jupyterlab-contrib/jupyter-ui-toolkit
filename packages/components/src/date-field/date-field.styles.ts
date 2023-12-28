// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { css, ElementStyles } from '@microsoft/fast-element';
import type { FoundationElementTemplate } from '@microsoft/fast-foundation';
import { BaseFieldStyles } from '../styles/index.js';
import { DateFieldOptions } from './date-field.js';

/**
 * Styles for Date Field
 * @public
 */
export const dateFieldStyles: FoundationElementTemplate<
  ElementStyles,
  DateFieldOptions
> = (context, definition) => css`
  ${BaseFieldStyles}
`;
