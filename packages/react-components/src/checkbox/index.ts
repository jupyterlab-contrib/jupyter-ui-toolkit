// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { jpCheckbox } from '@jupyter/web-components';
import type React from 'react';
import { wrap } from '../wrap';

export const Checkbox: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    checked?: boolean;
    indeterminate?: boolean;
    name?: string;
    required?: boolean;
    disabled?: boolean;
    readonly?: boolean;
  },
  HTMLElement
> = wrap(jpCheckbox(), { events: { onChange: 'change' } }) as any;
// @ts-expect-error unknown property
Checkbox.displayName = 'Jupyter.Checkbox';
