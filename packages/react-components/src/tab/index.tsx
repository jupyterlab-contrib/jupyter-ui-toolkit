// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  provideJupyterDesignSystem,
  jpTab
} from '@jupyter/web-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(React, provideJupyterDesignSystem());

export const Tab: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    disabled?: boolean;
  },
  HTMLElement
> = wrap(jpTab()) as any;
// @ts-expect-error unknown property
Tab.displayName = 'Jupyter.Tab';
