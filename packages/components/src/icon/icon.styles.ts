// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { css, ElementStyles } from '@microsoft/fast-element';
import { display } from '@microsoft/fast-foundation';
import { heightNumber } from '../styles/index.js';

/**
 * Styles for Badge
 * @public
 */
export const iconStyles: ElementStyles = css`
  ${display('inline-block')} :host {
    inline-size: ${heightNumber};
    block-size: ${heightNumber};
  }

  :host svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`;
