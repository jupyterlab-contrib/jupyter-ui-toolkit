// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { attr } from '@microsoft/fast-element';
import {
  Select as FoundationSelect,
  SelectOptions,
  selectTemplate as template
} from '@microsoft/fast-foundation';
import { selectStyles as styles } from './select.styles';

/**
 * Base class for Select
 * @public
 */
export class Select extends FoundationSelect {
  /**
   * Whether the select has a compact layout or not.
   *
   * @public
   * @remarks
   * HTML Attribute: minimal
   */
  @attr({ attribute: 'minimal', mode: 'boolean' })
  public minimal: boolean;
}

/**
 * A function that returns a Select registration for configuring the component with a DesignSystem.
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-select>`
 *
 */
export const jpSelect = Select.compose<SelectOptions>({
  baseName: 'select',
  baseClass: FoundationSelect,
  template,
  styles,
  indicator: `
        <svg
            class="select-indicator"
            part="select-indicator"
            viewBox="0 0 12 7"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11.85.65c.2.2.2.5 0 .7L6.4 6.84a.55.55 0 01-.78 0L.14 1.35a.5.5 0 11.71-.7L6 5.8 11.15.65c.2-.2.5-.2.7 0z"
            />
        </svg>
    `
});

export { styles as selectStyles };
