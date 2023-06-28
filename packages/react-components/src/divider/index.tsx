// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { provideJupyterDesignSystem, jpDivider } from '@jupyter/web-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(React, provideJupyterDesignSystem());

export const Divider: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    orientation?: 'horizontal' | 'vertical';
    role?: 'separator' | 'presentation';
  },
  HTMLElement
> = wrap(jpDivider()) as any;
// @ts-expect-error unknown property
Divider.displayName = 'Jupyter.Divider';
