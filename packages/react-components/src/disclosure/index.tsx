// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  provideJupyterDesignSystem,
  jpDisclosure
} from '@jupyter/web-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(React, provideJupyterDesignSystem());

export const Disclosure: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    appearance?: 'accent' | 'lightweight';
    expanded?: boolean;
    title?: string;
  },
  HTMLElement
> = wrap(jpDisclosure(), {
  events: { onToggle: 'toggle' }
}) as any;
// @ts-expect-error unknown property
Disclosure.displayName = 'Jupyter.Disclosure';
