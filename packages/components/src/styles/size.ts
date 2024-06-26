// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import { cssPartial } from '@microsoft/fast-element';
import {
  baseHeightMultiplier,
  density,
  designUnit,
  elementScale
} from '../design-tokens.js';

/**
 * A formula to retrieve the control height.
 * Use this as the value of any CSS property that
 * accepts a pixel size.
 */
export const heightNumber = cssPartial`(${baseHeightMultiplier} + ${density} + ${elementScale}) * ${designUnit}`;
