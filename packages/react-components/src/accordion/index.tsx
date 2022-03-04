// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  provideJupyterDesignSystem,
  jpAccordion
} from '@jupyter-notebook/web-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(React, provideJupyterDesignSystem());

export const Accordion: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    'expand-mode'?: 'single' | 'multi';
  },
  HTMLElement
> = wrap(jpAccordion(), { events: { onChange: 'change' } }) as any;
// @ts-expect-error unknown property
Accordion.displayName = 'Jupyter.Accordion';
