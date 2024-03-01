// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { jpListbox } from '@jupyter/web-components';
import type React from 'react';
import { wrap } from '../wrap';

export const Listbox: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    disabled?: boolean;
    multiple?: boolean;
    size?: number;
  },
  HTMLElement
> = wrap(jpListbox()) as any;
// @ts-expect-error unknown property
Listbox.displayName = 'Jupyter.Listbox';
