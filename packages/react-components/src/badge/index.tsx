// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { provideJupyterDesignSystem, jpBadge } from '@jupyter/web-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(React, provideJupyterDesignSystem());

export const Badge: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    circular?: boolean;
    color?: string;
    fill?: string;
  },
  HTMLElement
> = wrap(jpBadge()) as any;
// @ts-expect-error unknown property
Badge.displayName = 'Jupyter.Badge';
