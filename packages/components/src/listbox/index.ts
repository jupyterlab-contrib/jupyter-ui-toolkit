// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  ListboxElement,
  listboxTemplate as template
} from '@microsoft/fast-foundation';
import { listboxStyles as styles } from '@microsoft/fast-components';

/**
 * The Jupyter listbox Custom Element. Implements, {@link @microsoft/fast-foundation#Listbox}
 * {@link @microsoft/fast-foundation#ListboxTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<jp-listbox\>
 *
 */
export const jpListbox = ListboxElement.compose({
  baseName: 'listbox',
  template,
  styles
});

/**
 * Base class for ListBox
 * @public
 */
export { ListboxElement };

export { styles as listboxStyles };
