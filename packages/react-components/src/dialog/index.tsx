// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { provideJupyterDesignSystem, jpDialog } from '@jupyter/web-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(React, provideJupyterDesignSystem());

export const Dialog: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    hidden?: boolean;
    modal?: boolean;
    'trap-focus'?: boolean;
  },
  HTMLElement
> = wrap(jpDialog()) as any;
// @ts-expect-error unknown property
Dialog.displayName = 'Jupyter.Dialog';
