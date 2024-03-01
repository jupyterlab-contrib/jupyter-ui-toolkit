// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { jpTextArea } from '@jupyter/web-components';
import type React from 'react';
import { wrap } from '../wrap';

export const TextArea: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    appearance?: 'outline' | 'filled';
    autofocus?: boolean;
    cols?: number;
    disabled?: boolean;
    form?: string;
    list?: string;
    maxlength?: number;
    minlength?: number;
    name?: string;
    placeholder?: string;
    readonly?: boolean;
    required?: boolean;
    rows?: number;
    resize?: 'none' | 'both' | 'horizontal' | 'vertical';
    spellcheck?: boolean;
    value?: string;
  },
  HTMLElement
> = wrap(jpTextArea(), {
  events: { onChange: 'change' }
}) as any;
// @ts-expect-error unknown property
TextArea.displayName = 'Jupyter.TextArea';
