// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { provideJupyterDesignSystem, jpAnchor } from '@jupyter/web-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(React, provideJupyterDesignSystem());

export const Anchor: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLAnchorElement> & {
    appearance?:
      | 'accent'
      | 'lightweight'
      | 'neutral'
      | 'outline'
      | 'stealth'
      | 'hypertext';
  },
  HTMLElement
> = wrap(jpAnchor()) as any;
// @ts-expect-error unknown property
Anchor.displayName = 'Jupyter.Anchor';
