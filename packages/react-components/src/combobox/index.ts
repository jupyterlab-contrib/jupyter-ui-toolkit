// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { jpCombobox } from '@jupyter/web-components';
import type React from 'react';
import { wrap } from '../wrap';

export const Combobox: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    autocomplete?: 'inline' | 'list' | 'both' | 'none';
    autowidth?: boolean;
    disabled?: boolean;
    minimal?: boolean;
    name?: string;
    position?: 'above' | 'below';
    placeholder?: 'string';
    value?: 'string';
  },
  HTMLElement
> = wrap(jpCombobox(), {
  events: {
    onChange: 'change',
    onInput: 'input'
  }
}) as any;
// @ts-expect-error unknown property
Combobox.displayName = 'Jupyter.Combobox';
