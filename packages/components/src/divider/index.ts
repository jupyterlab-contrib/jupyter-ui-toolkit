// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {
  Divider as FoundationDivider,
  dividerTemplate as template
} from '@microsoft/fast-foundation';
import { dividerStyles as styles } from './divider.styles';

/**
 * The  divider class.
 *
 * @public
 */
export class Divider extends FoundationDivider {}

/**
 * The  divider component registration.
 *
 * @remarks
 * HTML Element: `<jp-divider>`
 *
 * @public
 */
export const jpDivider = Divider.compose({
  baseName: 'divider',
  template,
  styles
});
