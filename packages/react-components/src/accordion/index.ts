// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { jpAccordion } from '@jupyter/web-components';
import type React from 'react';
import { wrap } from '../wrap';

export const Accordion: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    'expand-mode'?: 'single' | 'multi';
  },
  HTMLElement
> = wrap(jpAccordion(), { events: { onChange: 'change' } }) as any;
// @ts-expect-error unknown property
Accordion.displayName = 'Jupyter.Accordion';
