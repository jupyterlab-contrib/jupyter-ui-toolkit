// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  Search as FoundationSearch,
  searchTemplate as template
} from '@microsoft/fast-foundation';
import { Search } from '@microsoft/fast-components';
import { searchStyles as styles } from './search.styles';

// TODO
//   we need to add error/invalid

/**
 * A function that returns a {@link @microsoft/fast-foundation#Search} registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#searchTemplate}
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-search>`
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus | delegatesFocus}
 */
export const jpSearch = Search.compose({
  baseName: 'search',
  baseClass: FoundationSearch,
  template,
  styles,
  shadowOptions: {
    delegatesFocus: true
  }
});

export { Search, SearchAppearance } from '@microsoft/fast-components';

/**
 * Styles for Search
 * @public
 */
export { styles as searchStyles };
