import { attr } from "@microsoft/fast-element";
import {
    Button as FoundationButton,
    buttonTemplate as template,
} from "@microsoft/fast-foundation";
import { buttonStyles as styles } from "./button.styles.js";

/**
 * Types of button appearance.
 * @public
 */
export type ButtonAppearance =
    | "accent"
    | "lightweight"
    | "neutral"
    | "outline"
    | "stealth";

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
    public appearance: ButtonAppearance = 'neutral';

  /**
   * Whether the button has a compact layout or not.
   *
   * @public
   * @remarks
   * HTML Attribute: minimal
   */
  @attr({ attribute: 'minimal', mode: 'boolean' })
  public minimal: boolean;

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
 * A function that returns a {@link @microsoft/fast-foundation#Button} registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#buttonTemplate}
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-button>`
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus | delegatesFocus}
 */
export const jpButton = Button.compose({
    baseName: 'button',
    baseClass: FoundationButton,
    template,
    styles,
    shadowOptions: {
        delegatesFocus: true,
    },
});

export { styles as buttonStyles };
