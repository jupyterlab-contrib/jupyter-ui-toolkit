// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  provideJupyterDesignSystem,
  jpAccordionItem
} from '@jupyter-notebook/web-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(React, provideJupyterDesignSystem());

export const AccordionItem: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    'heading-level'?: number;
    expanded?: boolean;
  },
  HTMLElement
> = wrap(jpAccordionItem(), { events: { onChange: 'change' } }) as any;
// @ts-expect-error unknown property
AccordionItem.displayName = 'Jupyter.AccordionItem';
