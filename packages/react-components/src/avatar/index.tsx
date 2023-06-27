// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  provideJupyterDesignSystem,
  jpAvatar
} from '@jupyter/web-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(React, provideJupyterDesignSystem());

export const Avatar: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    src?: string;
    alt?: string;
    link?: string;
    shape?: 'circle' | 'square' | 'default';
    fill?: string;
    color?: string;
  },
  HTMLElement
> = wrap(jpAvatar()) as any;
// @ts-expect-error unknown property
Avatar.displayName = 'Jupyter.Avatar';
