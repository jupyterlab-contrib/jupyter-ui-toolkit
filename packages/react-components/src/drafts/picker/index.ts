// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { jpPicker } from '@jupyter/web-components';
import type React from 'react';
import { wrap } from '../../wrap';

/**
 * @alpha
 */
export const Picker: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    selection?: string;
    options?: string;
    'filter-selected'?: boolean;
    'filter-query'?: boolean;
    'max-selected'?: number;
    'no-suggestions-text'?: string;
    'suggestions-available-text'?: string;
    'loading-text'?: string;
    label?: string;
    labelledby?: string;
    placeholder?: string;
    'menu-placement'?:
      | 'bottom'
      | 'bottom-fill'
      | 'tallest'
      | 'tallest-fill'
      | 'top'
      | 'top-fill';
  },
  HTMLElement
> = wrap(jpPicker(), {
  events: {
    onChange: 'change',
    onInput: 'input'
  }
}) as any;
// @ts-expect-error unknown property
Picker.displayName = 'Jupyter.Picker';
