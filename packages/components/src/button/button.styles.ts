import {
  accentFillActive,
  accentFillFocus,
  accentFillHover,
  accentFillRest,
  accentForegroundActive,
  accentForegroundHover,
  accentForegroundRest,
  baseHeightMultiplier,
  bodyFont,
  controlCornerRadius,
  density,
  designUnit,
  disabledOpacity,
  focusStrokeWidth,
  foregroundOnAccentActive,
  foregroundOnAccentHover,
  foregroundOnAccentRest,
  neutralFillActive,
  neutralFillFocus,
  neutralFillHover,
  neutralFillRest,
  neutralFillStealthActive,
  neutralFillStealthHover,
  neutralFillStealthRest,
  neutralForegroundRest,
  strokeWidth,
  typeRampBaseFontSize,
  typeRampBaseLineHeight
} from '@microsoft/fast-components';
import { css, cssPartial, ElementStyles } from '@microsoft/fast-element';
import {
  ButtonOptions,
  disabledCursor,
  display,
  ElementDefinitionContext,
  focusVisible,
  forcedColorsStylesheetBehavior,
  PropertyStyleSheetBehavior
} from '@microsoft/fast-foundation';
import { SystemColors } from '@microsoft/fast-web-utilities';

/**
 * Behavior that will conditionally apply a stylesheet based on the elements
 * appearance property
 *
 * @param value - The value of the appearance property
 * @param styles - The styles to be applied when condition matches
 *
 * @internal
 */
function appearanceBehavior(value: string, styles: ElementStyles) {
  return new PropertyStyleSheetBehavior('appearance', value, styles);
}

/**
 * A formula to retrieve the control height.
 * Use this as the value of any CSS property that
 * accepts a pixel size.
 */
const heightNumber = cssPartial`(${baseHeightMultiplier} + ${density}) * ${designUnit}`;

// TODO do we really want to use outline for focus, active, ... => this call for a minimal style for toolbar probably
// outline force to use a padding so that the outline is not hidden by other elements.

/**
 * @internal
 */
const BaseButtonStyles = css`
  ${display('inline-flex')} :host {
    font-family: ${bodyFont};
    outline: none;
    font-size: ${typeRampBaseFontSize};
    line-height: ${typeRampBaseLineHeight};
    height: calc(${heightNumber} * 1px);
    min-width: calc(${heightNumber} * 1px);
    background-color: ${neutralFillRest};
    color: ${neutralForegroundRest};
    border-radius: calc(${controlCornerRadius} * 1px);
    fill: currentcolor;
    cursor: pointer;
    margin: calc((${designUnit} + ${density} + 2) * 1px);
  }

  .control {
    background: transparent;
    height: inherit;
    flex-grow: 1;
    box-sizing: border-box;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0 calc((10 + (${designUnit} * 2 * ${density})) * 1px);
    white-space: nowrap;
    outline: 1px solid transparent;
    outline-offset: calc((${designUnit} + ${density}) * 1px);
    -moz-outline-radius: 0px;
    text-decoration: none;
    border: calc(${strokeWidth} * 1px) solid transparent;
    color: inherit;
    border-radius: inherit;
    fill: inherit;
    cursor: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  :host(:hover) {
    background-color: ${neutralFillHover};
  }

  :host(:hover) .control {
    outline-color: ${neutralFillHover};
  }

  :host(:active) {
    background-color: ${neutralFillActive};
  }

  :host(:active) .control {
    outline-color: ${neutralFillActive};
  }

  :host .control:${focusVisible} {
    outline-color: ${neutralFillFocus};
  }

  .control::-moz-focus-inner {
    border: 0;
  }

  .start,
  .end {
    display: flex;
  }

  .control.icon-only {
    padding: 0;
    line-height: 0;
  }

  ::slotted(svg) {
    ${
      /* Glyph size and margin-left is temporary -
            replace when adaptive typography is figured out */ ''
    } width: 16px;
    height: 16px;
    pointer-events: none;
  }

  .start {
    margin-inline-end: 11px;
  }

  .end {
    margin-inline-start: 11px;
  }
`.withBehaviors(
  forcedColorsStylesheetBehavior(
    css`
      :host .control {
        background-color: ${SystemColors.ButtonFace};
        border-color: ${SystemColors.ButtonText};
        color: ${SystemColors.ButtonText};
        fill: currentColor;
      }

      :host(:hover) .control {
        forced-color-adjust: none;
        background-color: ${SystemColors.Highlight};
        color: ${SystemColors.HighlightText};
      }

      .control: ${focusVisible} {
        forced-color-adjust: none;
        background-color: ${SystemColors.Highlight};
        outline-color: ${SystemColors.ButtonText};
        color: ${SystemColors.HighlightText};
      }

      .control:hover,
      :host([appearance='outline']) .control:hover {
        outline-color: ${SystemColors.ButtonText};
      }

      :host([href]) .control {
        border-color: ${SystemColors.LinkText};
        color: ${SystemColors.LinkText};
      }

      :host([href]) .control:hover,
            :host([href]) .control:${focusVisible} {
        forced-color-adjust: none;
        background: ${SystemColors.ButtonFace};
        outline-color: ${SystemColors.LinkText};
        color: ${SystemColors.LinkText};
        fill: currentColor;
      }
    `
  )
);

/**
 * @internal
 */
const AccentButtonStyles = css`
  :host([appearance='accent']) {
    background: ${accentFillRest};
    color: ${foregroundOnAccentRest};
  }

  :host([appearance='accent']:hover) {
    background: ${accentFillHover};
    color: ${foregroundOnAccentHover};
  }

  :host([appearance='accent']:hover) .control {
    outline-color: ${accentFillHover};
  }

  :host([appearance='accent']:active) .control:active {
    background: ${accentFillActive};
    color: ${foregroundOnAccentActive};
    outline-color: ${accentFillActive};
  }

  :host([appearance="accent"]) .control:${focusVisible} {
    outline-color: ${accentFillFocus};
  }
`.withBehaviors(
  forcedColorsStylesheetBehavior(
    css`
      :host([appearance='accent']) .control {
        forced-color-adjust: none;
        background: ${SystemColors.Highlight};
        color: ${SystemColors.HighlightText};
      }

      :host([appearance='accent']) .control:hover,
      :host([appearance='accent']:active) .control:active {
        background: ${SystemColors.HighlightText};
        outline-color: ${SystemColors.Highlight};
        color: ${SystemColors.Highlight};
      }

      :host([appearance="accent"]) .control:${focusVisible} {
        outline-color: ${SystemColors.Highlight};
      }

      :host([appearance='accent'][href]) .control {
        background: ${SystemColors.LinkText};
        color: ${SystemColors.HighlightText};
      }

      :host([appearance='accent'][href]) .control:hover {
        background: ${SystemColors.ButtonFace};
        outline-color: ${SystemColors.LinkText};
        color: ${SystemColors.LinkText};
        fill: currentColor;
      }

      :host([appearance="accent"][href]) .control:${focusVisible} {
        outline-color: ${SystemColors.LinkText};
      }
    `
  )
);

/**
 * @internal
 */
const LightweightButtonStyles = css`
  :host([appearance='lightweight']) {
    background: transparent;
    color: ${accentForegroundRest};
  }

  :host([appearance='lightweight']) .control {
    padding: 0;
    height: initial;
    border: none;
    box-shadow: none;
    border-radius: 0;
  }

  :host([appearance='lightweight']:hover) {
    background: transparent;
    color: ${accentForegroundHover};
  }

  :host([appearance='lightweight']:active) {
    background: transparent;
    color: ${accentForegroundActive};
  }

  :host([appearance='lightweight']) .content {
    position: relative;
  }

  :host([appearance='lightweight']) .content::before {
    content: '';
    display: block;
    height: calc(${strokeWidth} * 1px);
    position: absolute;
    top: calc(1em + 4px);
    width: 100%;
  }

  :host([appearance='lightweight']:hover) .content::before {
    background: ${accentForegroundHover};
  }

  :host([appearance='lightweight']:active) .content::before {
    background: ${accentForegroundActive};
  }

  :host([appearance="lightweight"]) .control:${focusVisible} .content::before {
    background: ${neutralForegroundRest};
    height: calc(${focusStrokeWidth} * 1px);
  }
`.withBehaviors(
  forcedColorsStylesheetBehavior(
    css`
      :host([appearance="lightweight"]) .control:hover,
            :host([appearance="lightweight"]) .control:${focusVisible} {
        forced-color-adjust: none;
        background: ${SystemColors.ButtonFace};
        color: ${SystemColors.Highlight};
      }
      :host([appearance="lightweight"]) .control:hover .content::before,
            :host([appearance="lightweight"]) .control:${focusVisible} .content::before {
        background: ${SystemColors.Highlight};
      }

      :host([appearance="lightweight"][href]) .control:hover,
            :host([appearance="lightweight"][href]) .control:${focusVisible} {
        background: ${SystemColors.ButtonFace};
        box-shadow: none;
        color: ${SystemColors.LinkText};
      }

      :host([appearance="lightweight"][href]) .control:hover .content::before,
            :host([appearance="lightweight"][href]) .control:${focusVisible} .content::before {
        background: ${SystemColors.LinkText};
      }
    `
  )
);

/**
 * @internal
 */
const OutlineButtonStyles = css`
  :host([appearance='outline']) {
    background: transparent;
    border-color: ${accentFillRest};
  }

  :host([appearance='outline']:hover) {
    border-color: ${accentFillHover};
  }

  :host([appearance='outline']:active) {
    border-color: ${accentFillActive};
  }

  :host([appearance='outline']) .control {
    border-color: inherit;
  }

  :host([appearance="outline"]) .control:${focusVisible} {
    border-color: ${accentFillFocus};
  }
`.withBehaviors(
  forcedColorsStylesheetBehavior(
    css`
      :host([appearance='outline']) .control {
        border-color: ${SystemColors.ButtonText};
      }
      :host([appearance="outline"]) .control:${focusVisible} {
        forced-color-adjust: none;
        background-color: ${SystemColors.Highlight};
        border-color: ${SystemColors.ButtonText};
        color: ${SystemColors.HighlightText};
        fill: currentColor;
      }
      :host([appearance='outline'][href]) .control {
        background: ${SystemColors.ButtonFace};
        border-color: ${SystemColors.LinkText};
        color: ${SystemColors.LinkText};
        fill: currentColor;
      }
      :host([appearance="outline"][href]) .control:hover,
            :host([appearance="outline"][href]) .control:${focusVisible} {
        forced-color-adjust: none;
        border-color: ${SystemColors.LinkText};
        box-shadow: 0 0 0 1px ${SystemColors.LinkText} inset;
      }
    `
  )
);

/**
 * @internal
 */
const StealthButtonStyles = css`
  :host([appearance='stealth']) {
    background: ${neutralFillStealthRest};
  }

  :host([appearance='stealth']:hover) {
    background: ${neutralFillStealthHover};
  }

  :host([appearance='stealth']:active) {
    background: ${neutralFillStealthActive};
  }
`.withBehaviors(
  forcedColorsStylesheetBehavior(
    css`
      :host([appearance='stealth']),
      :host([appearance='stealth']) .control {
        forced-color-adjust: none;
        background: ${SystemColors.ButtonFace};
        outline-color: transparent;
        color: ${SystemColors.ButtonText};
        fill: currentColor;
      }

      :host([appearance='stealth']:hover) .control {
        background: ${SystemColors.Highlight};
        outline-color: ${SystemColors.Highlight};
        color: ${SystemColors.HighlightText};
        fill: currentColor;
      }

      :host([appearance="stealth"]:${focusVisible}) .control {
        background: ${SystemColors.Highlight};
        box-shadow: 0 0 0 1px ${SystemColors.Highlight};
        color: ${SystemColors.HighlightText};
        fill: currentColor;
      }

      :host([appearance='stealth'][href]) .control {
        color: ${SystemColors.LinkText};
      }

      :host([appearance="stealth"][href]:hover) .control,
            :host([appearance="stealth"][href]:${focusVisible}) .control {
        background: ${SystemColors.LinkText};
        outline-color: ${SystemColors.LinkText};
        color: ${SystemColors.HighlightText};
        fill: currentColor;
      }

      :host([appearance="stealth"][href]:${focusVisible}) .control {
        forced-color-adjust: none;
        box-shadow: 0 0 0 1px ${SystemColors.LinkText};
      }
    `
  )
);

/**
 * Styles for Button
 * @public
 */
export const buttonStyles: (
  context: ElementDefinitionContext,
  definition: ButtonOptions
) => ElementStyles = (
  context: ElementDefinitionContext,
  definition: ButtonOptions
) =>
  css`
    :host([disabled]),
    :host([disabled]:hover),
    :host([disabled]:active) {
      opacity: ${disabledOpacity};
      background-color: ${neutralFillRest};
      cursor: ${disabledCursor};
    }

    ${BaseButtonStyles}
  `.withBehaviors(
    forcedColorsStylesheetBehavior(
      css`
        :host([disabled]),
        :host([disabled]) .control,
        :host([disabled]:hover),
        :host([disabled]:active) {
          forced-color-adjust: none;
          background-color: ${SystemColors.ButtonFace};
          outline-color: ${SystemColors.GrayText};
          color: ${SystemColors.GrayText};
          cursor: ${disabledCursor};
          opacity: 1;
        }
      `
    ),
    appearanceBehavior(
      'accent',
      css`
        :host([appearance='accent'][disabled]),
        :host([appearance='accent'][disabled]:hover),
        :host([appearance='accent'][disabled]:active) {
          background: ${accentFillRest};
        }

        ${AccentButtonStyles}
      `.withBehaviors(
        forcedColorsStylesheetBehavior(
          css`
            :host([appearance='accent'][disabled]) .control,
            :host([appearance='accent'][disabled]) .control:hover {
              background: ${SystemColors.ButtonFace};
              border-color: ${SystemColors.GrayText};
              color: ${SystemColors.GrayText};
            }
          `
        )
      )
    ),
    appearanceBehavior(
      'lightweight',
      css`
        :host([appearance='lightweight'][disabled]:hover),
        :host([appearance='lightweight'][disabled]:active) {
          background-color: transparent;
          color: ${accentForegroundRest};
        }

        :host([appearance='lightweight'][disabled]) .content::before,
        :host([appearance='lightweight'][disabled]:hover) .content::before,
        :host([appearance='lightweight'][disabled]:active) .content::before {
          background: transparent;
        }

        ${LightweightButtonStyles}
      `.withBehaviors(
        forcedColorsStylesheetBehavior(
          css`
            :host([appearance='lightweight'].disabled) .control {
              forced-color-adjust: none;
              color: ${SystemColors.GrayText};
            }

            :host([appearance='lightweight'].disabled)
              .control:hover
              .content::before {
              background: none;
            }
          `
        )
      )
    ),
    appearanceBehavior(
      'outline',
      css`
        :host([appearance='outline'][disabled]),
        :host([appearance='outline'][disabled]:hover),
        :host([appearance='outline'][disabled]:active) {
          background: transparent;
          border-color: ${accentFillRest};
        }

        ${OutlineButtonStyles}
      `.withBehaviors(
        forcedColorsStylesheetBehavior(
          css`
            :host([appearance='outline'][disabled]) .control {
              border-color: ${SystemColors.GrayText};
            }
          `
        )
      )
    ),
    appearanceBehavior(
      'stealth',
      css`
        :host([appearance='stealth'][disabled]),
        :host([appearance='stealth'][disabled]:hover),
        :host([appearance='stealth'][disabled]:active) {
          background: ${neutralFillStealthRest};
        }

        ${StealthButtonStyles}
      `.withBehaviors(
        forcedColorsStylesheetBehavior(
          css`
            :host([appearance='stealth'][disabled]) {
              background: ${SystemColors.ButtonFace};
            }

            :host([appearance='stealth'][disabled]) .control {
              background: ${SystemColors.ButtonFace};
              border-color: transparent;
              color: ${SystemColors.GrayText};
            }
          `
        )
      )
    )
  );
