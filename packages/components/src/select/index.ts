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
  @attr({ attribute: 'autowidth', mode: 'boolean' })
  public autoWidth: boolean;

  /**
   * Whether the select has a compact layout or not.
   *
   * @public
   * @remarks
   * HTML Attribute: minimal
   */
  @attr({ attribute: 'minimal', mode: 'boolean' })
  public minimal: boolean;

  /**
   * The connected callback for this FASTElement.
   *
   * @override
   *
   * @internal
   */
  connectedCallback(): void {
    super.connectedCallback();
    this.setAutoWidth();
  }

  /**
   * Synchronize the form-associated proxy and updates the value property of the element.
   *
   * @param prev - the previous collection of slotted option elements
   * @param next - the next collection of slotted option elements
   *
   * @internal
   */
  slottedOptionsChanged(prev: Element[] | undefined, next: Element[]): void {
    super.slottedOptionsChanged(prev, next);
    this.setAutoWidth();
  }

  /**
   * (Un-)set the width when the autoWidth property changes.
   *
   * @param prev - the previous autoWidth value
   * @param next - the current autoWidth value
   */
  protected autoWidthChanged(prev: boolean | undefined, next: boolean): void {
    if (next) {
      this.setAutoWidth();
    } else {
      this.style.removeProperty('width');
    }
  }

  /**
   * Compute the listbox width to set the one of the input.
   */
  protected setAutoWidth(): void {
    if (!this.autoWidth || !this.isConnected) {
      return;
    }

    let listWidth = this.listbox.getBoundingClientRect().width;
    // If the list has not been displayed yet trick to get its size
    if (listWidth === 0 && this.listbox.hidden) {
      Object.assign(this.listbox.style, { visibility: 'hidden' });
      this.listbox.removeAttribute('hidden');
      listWidth = this.listbox.getBoundingClientRect().width;
      this.listbox.setAttribute('hidden', '');
      this.listbox.style.removeProperty('visibility');
    }

    if (listWidth > 0) {
      Object.assign(this.style, { width: `${listWidth}px` });
    }
  }
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
  indicator: /* html */ `
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
