// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import { attr } from '@microsoft/fast-element';
import {
  Button as FoundationButton,
  buttonTemplate as template
} from '@microsoft/fast-foundation';
import { buttonStyles } from './button.styles';

/**
 * Types of button appearance.
 * @public
 */
export type ButtonAppearance =
  | 'accent'
  | 'error'
  | 'neutral'
  | 'outline'
  | 'stealth';

/**
 * @internal
 */
export class Button extends FoundationButton {
  /**
   * The appearance the button should have.
   *
   * @public
   * @remarks
   * HTML Attribute: appearance
   */
  @attr
  public appearance: ButtonAppearance;

  /**
   * Whether the button has a compact layout or not.
   *
   * @public
   * @remarks
   * HTML Attribute: minimal
   */
  @attr({ attribute: 'minimal', mode: 'boolean' })
  public minimal: boolean;

  public connectedCallback(): void {
    super.connectedCallback();
    if (!this.appearance) {
      this.appearance = 'neutral';
    }
  }

  /**
   * Applies 'icon-only' class when there is only an SVG in the default slot
   *
   * @public
   * @remarks
   */
  public defaultSlottedContentChanged(
    oldValue: HTMLElement[],
    newValue: HTMLElement[]
  ): void {
    const slottedElements = this.defaultSlottedContent.filter(
      x => x.nodeType === Node.ELEMENT_NODE
    );
    if (
      slottedElements.length === 1 &&
      (slottedElements[0] instanceof SVGElement ||
        slottedElements[0].classList.contains('fa') ||
        slottedElements[0].classList.contains('fas'))
    ) {
      this.control.classList.add('icon-only');
    } else {
      this.control.classList.remove('icon-only');
    }
  }
}

/**
 * The button component registration.
 *
 * @public
 * @remarks
 * Generated HTML Element: `<jp-button>`
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus | delegatesFocus}
 */
export const jpButton = Button.compose({
  baseName: 'button',
  baseClass: FoundationButton,
  template,
  styles: buttonStyles,
  shadowOptions: {
    delegatesFocus: true
  }
});
