// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { jpAccordionItem } from '@jupyter/web-components';
import type React from 'react';
import { wrap } from '../wrap';

export const AccordionItem: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    'heading-level'?: number;
    expanded?: boolean;
  },
  HTMLElement
> = wrap(jpAccordionItem(), { events: { onChange: 'change' } }) as any;
// @ts-expect-error unknown property
AccordionItem.displayName = 'Jupyter.AccordionItem';
