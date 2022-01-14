// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  provideJupyterDesignSystem,
  jpLink
} from '@jupyter-notebook/web-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(React, provideJupyterDesignSystem());

export const Link: React.DetailedHTMLFactory<
React.HTMLAttributes<HTMLElement> & {
  download?: boolean;
  href?: string;
  hreflang?: string;
  ping?: string;
  referrerpolicy?: string;
  rel?: string;
  target?: string;
  type?: string;
},
HTMLElement
> = wrap(jpLink()) as any;
// @ts-expect-error unknown property
Link.displayName = 'Jupyter.Link';
