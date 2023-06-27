// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  provideJupyterDesignSystem,
  jpCard
} from '@jupyter/web-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(React, provideJupyterDesignSystem());

export const Card: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> = wrap(jpCard()) as any;
// @ts-expect-error unknown property
Card.displayName = 'Jupyter.Card';
