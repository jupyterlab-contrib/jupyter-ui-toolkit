// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import { attr } from '@microsoft/fast-element';
import { Anchor, anchorTemplate as template } from '@microsoft/fast-foundation';
import { ButtonAppearance } from '../button/index.js';
import { anchorStyles as styles } from './anchor.styles.js';

/**
 * Types of anchor appearance.
 * @public
 */
export type AnchorAppearance = ButtonAppearance | 'hypertext';

/**
 * Anchor class
 * @public
 * @tagname jp-anchor
 */
class JupyterAnchor extends Anchor {
  /**
   * The appearance the anchor should have.
   *
   * @public
   * @remarks
   * HTML Attribute: appearance
   */
  @attr
  public appearance?: AnchorAppearance;
  public appearanceChanged(
    oldValue: AnchorAppearance,
    newValue: AnchorAppearance
  ): void {
    if (this.$fastController.isConnected) {
      this.classList.remove(oldValue);
      this.classList.add(newValue);
    }
  }

  public connectedCallback() {
    super.connectedCallback();

    if (!this.appearance) {
      this.appearance = 'neutral';
    }
  }

  /**
   * Applies 'icon-only' class when there is only an SVG in the default slot
   *
   * @internal
   *
   */
  public defaultSlottedContentChanged(oldValue: any, newValue: any): void {
    const slottedElements = this.defaultSlottedContent.filter(
      x => x.nodeType === Node.ELEMENT_NODE
    );
    if (
      slottedElements.length === 1 &&
      slottedElements[0] instanceof SVGElement
    ) {
      this.control!.classList.add('icon-only');
    } else {
      this.control!.classList.remove('icon-only');
    }
  }
}

/**
 * A function that returns a {@link @microsoft/fast-foundation#Anchor} registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#anchorTemplate}
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-anchor>`
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus | delegatesFocus}
 */
export const jpAnchor = JupyterAnchor.compose({
  baseName: 'anchor',
  baseClass: Anchor,
  template,
  styles,
  shadowOptions: {
    delegatesFocus: true
  }
});

export { JupyterAnchor as Anchor };

export { styles as anchorStyles };
