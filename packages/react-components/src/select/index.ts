// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { jpSelect } from '@jupyter/web-components';
import type React from 'react';
import { wrap } from '../wrap';

export const Select: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    autowidth?: boolean;
    disabled?: boolean;
    minimal?: boolean;
    open?: boolean;
    position?: 'above' | 'below';
    value?: string;
  },
  HTMLElement
> = wrap(jpSelect(), {
  events: {
    onChange: 'change',
    onInput: 'input'
  }
}) as any;
// @ts-expect-error unknown property
Select.displayName = 'Jupyter.Select';
