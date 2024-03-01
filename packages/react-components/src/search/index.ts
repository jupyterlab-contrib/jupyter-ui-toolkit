// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { jpSearch } from '@jupyter/web-components';
import type React from 'react';
import { wrap } from '../wrap';

export const Search: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    appearance?: 'outline' | 'filled';
    autofocus?: boolean;
    disabled?: boolean;
    form?: string;
    label?: string;
    list?: string;
    maxlength?: number;
    minlength?: number;
    name?: string;
    pattern?: string;
    placeholder?: string;
    readonly?: boolean;
    required?: boolean;
    size?: number;
    value?: string;
  },
  HTMLElement
> = wrap(jpSearch(), {
  events: {
    onChange: 'change',
    onInput: 'input'
  }
}) as any;
// @ts-expect-error unknown property
Search.displayName = 'Jupyter.Search';
