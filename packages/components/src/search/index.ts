// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import { attr } from '@microsoft/fast-element';
import { Search, searchTemplate as template } from '@microsoft/fast-foundation';
import { searchStyles as styles } from './search.styles.js';

/**
 * Search appearances
 * @public
 */
export type SearchAppearance = 'filled' | 'outline';

/**
 * Search field class
 *
 * @public
 * @tagname jp-search
 */
class JupyterSearch extends Search {
  /**
   * The appearance of the element.
   *
   * @public
   * @remarks
   * HTML Attribute: appearance
   */
  @attr
  public appearance: SearchAppearance = 'outline';
}

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
export const jpSearch = JupyterSearch.compose({
  baseName: 'search',
  baseClass: Search,
  template,
  styles,
  shadowOptions: {
    delegatesFocus: true
  }
});

export { JupyterSearch as Search, styles as searchStyles };
