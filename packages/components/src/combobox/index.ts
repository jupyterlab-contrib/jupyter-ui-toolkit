// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import { attr, css, ElementStyles } from '@microsoft/fast-element';
import type { ComboboxOptions } from '@microsoft/fast-foundation';
import {
  Combobox as FoundationCombobox,
  comboboxTemplate as template
} from '@microsoft/fast-foundation';
import { heightNumberAsToken } from '../design-tokens.js';
import { comboboxStyles as styles } from './combobox.styles.js';
import { ErrorMessageMixin } from '../validation.js';

/**
 * Base class for Combobox.
 * @public
 */
export class Combobox extends ErrorMessageMixin(FoundationCombobox) {
  /**
   * Whether the combobox has a compact layout or not.
   *
   * @public
   * @remarks
   * HTML Attribute: minimal
   */
  @attr({ attribute: 'autowidth', mode: 'boolean' })
  public autoWidth: boolean;

  /**
   * Whether the combobox has a compact layout or not.
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

  /**
   * An internal stylesheet to hold calculated CSS custom properties.
   *
   * @internal
   */
  private computedStylesheet?: ElementStyles;

  /**
   * @internal
   */
  protected maxHeightChanged(prev: number | undefined, next: number): void {
    this.updateComputedStylesheet();
  }

  /**
   * Updates an internal stylesheet with calculated CSS custom properties.
   *
   * @internal
   */
  protected updateComputedStylesheet(): void {
    if (this.computedStylesheet) {
      this.$fastController.removeStyles(this.computedStylesheet);
    }

    const popupMaxHeight = Math.floor(
      this.maxHeight / heightNumberAsToken.getValueFor(this)
    ).toString();

    this.computedStylesheet = css`
      :host {
        --listbox-max-height: ${popupMaxHeight};
      }
    `;

    this.$fastController.addStyles(this.computedStylesheet);
  }
}

/**
 * A function that returns a {@link @microsoft/fast-foundation#Combobox} registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#comboboxTemplate}
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-combobox>`
 *
 */
export const jpCombobox = Combobox.compose<ComboboxOptions>({
  baseName: 'combobox',
  baseClass: FoundationCombobox,
  template,
  styles,
  shadowOptions: {
    delegatesFocus: true
  },
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

export { styles as comboboxStyles };
