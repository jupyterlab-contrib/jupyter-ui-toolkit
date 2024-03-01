// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { jpAvatar } from '@jupyter/web-components';
import type React from 'react';
import { wrap } from '../wrap';

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
