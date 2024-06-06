// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import { attr } from '@microsoft/fast-element';
import {
  Disclosure,
  disclosureTemplate as template
} from '@microsoft/fast-foundation';
import { disclosureStyles as styles } from './disclosure.styles.js';
/**
 * Types of anchor appearance.
 * @public
 */
export type DisclosureAppearance = 'accent' | 'lightweight';

/**
 * Disclosure class
 *
 * @public
 * @tagname jp-disclosure
 */
class JupyterDisclosure extends Disclosure {
  /**
   * Disclosure default height
   */
  private height = 0;
  /**
   * Disclosure height after it's expanded
   */
  private totalHeight = 0;

  public connectedCallback(): void {
    super.connectedCallback();
    if (!this.appearance) {
      this.appearance = 'accent';
    }
  }

  /**
   * The appearance the anchor should have.
   *
   * @public
   * @remarks
   * HTML Attribute: appearance
   */
  @attr
  public appearance?: DisclosureAppearance;
  public appearanceChanged(
    oldValue: DisclosureAppearance,
    newValue: DisclosureAppearance
  ): void {
    if (oldValue !== newValue) {
      this.classList.add(newValue);
      this.classList.remove(oldValue);
    }
  }

  /**
   * Set disclosure height while transitioning
   * @override
   */
  protected onToggle() {
    super.onToggle();
    this.details.style.setProperty('height', `${this.disclosureHeight}px`);
  }

  /**
   * Calculate disclosure height before and after expanded
   * @override
   */
  protected setup() {
    super.setup();

    const getCurrentHeight = () => this.details.getBoundingClientRect().height;
    this.show();
    this.totalHeight = getCurrentHeight();
    this.hide();
    this.height = getCurrentHeight();

    if (this.expanded) {
      this.show();
    }
  }

  get disclosureHeight(): number {
    return this.expanded ? this.totalHeight : this.height;
  }
}

/**
 * A function that returns a {@link @microsoft/fast-foundation#Disclosure} registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#disclosureTemplate}
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-Disclosure>`
 *
 */
export const jpDisclosure = JupyterDisclosure.compose({
  baseName: 'disclosure',
  baseClass: Disclosure,
  template,
  styles
});

export { JupyterDisclosure as Disclosure, styles as disclosureStyles };
