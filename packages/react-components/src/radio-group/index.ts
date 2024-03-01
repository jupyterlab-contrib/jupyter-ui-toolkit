// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { jpRadioGroup } from '@jupyter/web-components';
import type React from 'react';
import { wrap } from '../wrap';

export const RadioGroup: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    disabled?: boolean;
    name?: string;
    orientation?: 'horizontal' | 'vertical';
    readonly?: boolean;
    value?: string;
  },
  HTMLElement
> = wrap(jpRadioGroup(), { events: { onChange: 'change' } }) as any;
// @ts-expect-error unknown property
RadioGroup.displayName = 'Jupyter.RadioGroup';
