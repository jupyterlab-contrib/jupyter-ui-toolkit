// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { jpMenu } from '@jupyter/web-components';
import type React from 'react';
import { wrap } from '../wrap';

export const Menu: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> = wrap(jpMenu()) as any;
// @ts-expect-error unknown property
Menu.displayName = 'Jupyter.Menu';
