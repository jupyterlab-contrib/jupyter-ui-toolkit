// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { jpCard } from '@jupyter/web-components';
import type React from 'react';
import { wrap } from '../wrap';

export const Card: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> = wrap(jpCard()) as any;
// @ts-expect-error unknown property
Card.displayName = 'Jupyter.Card';
