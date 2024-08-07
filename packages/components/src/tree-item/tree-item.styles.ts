// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import { css, cssPartial, ElementStyles } from '@microsoft/fast-element';
import {
  DesignToken,
  disabledCursor,
  display,
  focusVisible,
  forcedColorsStylesheetBehavior,
  FoundationElementTemplate,
  TreeItem,
  TreeItemOptions
} from '@microsoft/fast-foundation';
import { SystemColors } from '@microsoft/fast-web-utilities';
import { Swatch } from '../color/swatch.js';
import {
  accentFillFocus,
  accentForegroundRest,
  baseHeightMultiplier,
  bodyFont,
  controlCornerRadius,
  density,
  designUnit,
  disabledOpacity,
  focusStrokeWidth,
  neutralFillActive,
  neutralFillHover,
  neutralFillRecipe,
  neutralFillRest,
  neutralFillStealthActive,
  neutralFillStealthHover,
  neutralFillStealthRecipe,
  neutralFillStealthRest,
  neutralForegroundRest,
  strokeWidth,
  typeRampBaseFontSize,
  typeRampBaseLineHeight,
  typeRampPlus1FontSize
} from '../design-tokens.js';
import {
  DirectionalStyleSheetBehavior,
  heightNumber
} from '../styles/index.js';

/**
 * Tree item expand collapse button size CSS Partial
 * @public
 */
export const expandCollapseButtonSize = cssPartial`(((${baseHeightMultiplier} + ${density}) * 0.5 + 2) * ${designUnit})`;

const ltr = css`
  .expand-collapse-glyph {
    transform: rotate(0deg);
  }
  :host(.nested) .expand-collapse-button {
    left: var(
      --expand-collapse-button-nested-width,
      calc(
        (
            ${expandCollapseButtonSize} +
              ((${baseHeightMultiplier} + ${density}) * 1.25)
          ) * -1px
      )
    );
  }
  :host([selected])::after {
    left: calc(${focusStrokeWidth} * 1px);
  }
  :host([expanded]) > .positioning-region .expand-collapse-glyph {
    transform: rotate(90deg);
  }
`;

const rtl = css`
  .expand-collapse-glyph {
    transform: rotate(180deg);
  }
  :host(.nested) .expand-collapse-button {
    right: var(
      --expand-collapse-button-nested-width,
      calc(
        (
            ${expandCollapseButtonSize} +
              ((${baseHeightMultiplier} + ${density}) * 1.25)
          ) * -1px
      )
    );
  }
  :host([selected])::after {
    right: calc(${focusStrokeWidth} * 1px);
  }
  :host([expanded]) > .positioning-region .expand-collapse-glyph {
    transform: rotate(90deg);
  }
`;

const expandCollapseHoverBehavior = DesignToken.create<Swatch>(
  'tree-item-expand-collapse-hover'
).withDefault((target: HTMLElement) => {
  const recipe = neutralFillStealthRecipe.getValueFor(target);
  return recipe.evaluate(target, recipe.evaluate(target).hover).hover;
});

const selectedExpandCollapseHoverBehavior = DesignToken.create<Swatch>(
  'tree-item-expand-collapse-selected-hover'
).withDefault((target: HTMLElement) => {
  const baseRecipe = neutralFillRecipe.getValueFor(target);
  const buttonRecipe = neutralFillStealthRecipe.getValueFor(target);
  return buttonRecipe.evaluate(target, baseRecipe.evaluate(target).rest).hover;
});

/**
 * Styles for Tree Item
 * @public
 */
export const treeItemStyles: FoundationElementTemplate<
  ElementStyles,
  TreeItemOptions
> = (context, definition) =>
  css`
    /**
     * This animation exists because when tree item children are conditionally loaded
     * there is a visual bug where the DOM exists but styles have not yet been applied (essentially FOUC).
     * This subtle animation provides a ever so slight timing adjustment for loading that solves the issue.
     */
    @keyframes treeItemLoading {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    ${display('block')} :host {
      contain: content;
      position: relative;
      outline: none;
      color: ${neutralForegroundRest};
      background: ${neutralFillStealthRest};
      cursor: pointer;
      font-family: ${bodyFont};
      --tree-item-nested-width: 0;
    }

    :host(:focus) > .positioning-region {
      outline: none;
    }

    :host(:focus) .content-region {
      outline: none;
    }

    :host(:${focusVisible}) .positioning-region {
      border-color: ${accentFillFocus};
      box-shadow: 0 0 0 calc((${focusStrokeWidth} - ${strokeWidth}) * 1px)
        ${accentFillFocus} inset;
      color: ${neutralForegroundRest};
    }

    .positioning-region {
      display: flex;
      position: relative;
      box-sizing: border-box;
      background: ${neutralFillStealthRest};
      border: transparent calc(${strokeWidth} * 1px) solid;
      border-radius: calc(${controlCornerRadius} * 1px);
      height: calc((${heightNumber} + 1) * 1px);
    }

    .positioning-region::before {
      content: '';
      display: block;
      width: var(--tree-item-nested-width);
      flex-shrink: 0;
    }

    :host(:not([disabled])) .positioning-region:hover {
      background: ${neutralFillStealthHover};
    }

    :host(:not([disabled])) .positioning-region:active {
      background: ${neutralFillStealthActive};
    }

    .content-region {
      display: inline-flex;
      align-items: center;
      white-space: nowrap;
      width: 100%;
      min-width: 0;
      height: calc(${heightNumber} * 1px);
      margin-inline-start: calc(${designUnit} * 2px + 8px);
      font-size: ${typeRampBaseFontSize};
      line-height: ${typeRampBaseLineHeight};
      font-weight: 400;
    }

    .items {
      /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
      font-size: calc(1em + (${designUnit} + 16) * 1px);
    }

    .expand-collapse-button {
      background: none;
      border: none;
      outline: none;
      /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
      width: calc(${expandCollapseButtonSize} * 1px);
      height: calc(${expandCollapseButtonSize} * 1px);
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      margin-left: 6px;
      margin-right: 6px;
    }

    .expand-collapse-glyph {
      /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
      width: calc((16 + ${density}) * 1px);
      height: calc((16 + ${density}) * 1px);
      transition: transform 0.1s linear;

      pointer-events: none;
      fill: currentcolor;
    }

    .start,
    .end {
      display: flex;
      fill: currentcolor;
    }

    ::slotted(svg),
    ::slotted(jp-icon) {
      /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
      width: 16px;
      height: 16px;

      /* Something like that would do if the typography is adaptive
      font-size: inherit;
      width: ${typeRampPlus1FontSize};
      height: ${typeRampPlus1FontSize};
      */
    }

    .start {
      /* TODO: horizontalSpacing https://github.com/microsoft/fast/issues/2766 */
      margin-inline-end: calc(${designUnit} * 2px + 2px);
    }

    .end {
      /* TODO: horizontalSpacing https://github.com/microsoft/fast/issues/2766 */
      margin-inline-start: calc(${designUnit} * 2px + 2px);
    }

    :host([expanded]) > .items {
      animation: treeItemLoading ease-in 10ms;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
    }

    :host([disabled]) .content-region {
      opacity: ${disabledOpacity};
      cursor: ${disabledCursor};
    }

    :host(.nested) .content-region {
      position: relative;
      /* Add left margin to collapse button size */
      margin-inline-start: calc(
        (
            ${expandCollapseButtonSize} +
              ((${baseHeightMultiplier} + ${density}) * 1.25)
          ) * 1px
      );
    }

    :host(.nested) .expand-collapse-button {
      position: absolute;
    }

    :host(.nested:not([disabled])) .expand-collapse-button:hover {
      background: ${expandCollapseHoverBehavior};
    }

    :host([selected]) .positioning-region {
      background: ${neutralFillRest};
    }

    :host([selected]:not([disabled])) .positioning-region:hover {
      background: ${neutralFillHover};
    }

    :host([selected]:not([disabled])) .positioning-region:active {
      background: ${neutralFillActive};
    }

    :host([selected]:not([disabled])) .expand-collapse-button:hover {
      background: ${selectedExpandCollapseHoverBehavior};
    }

    :host([selected])::after {
      /* The background needs to be calculated based on the selected background state
         for this control. We currently have no way of changing that, so setting to
         accent-foreground-rest for the time being */
      background: ${accentForegroundRest};
      border-radius: calc(${controlCornerRadius} * 1px);
      content: '';
      display: block;
      position: absolute;
      top: calc((${heightNumber} / 4) * 1px);
      width: 3px;
      height: calc((${heightNumber} / 2) * 1px);
    }

    ::slotted(${context.tagFor(TreeItem)}) {
      --tree-item-nested-width: 1em;
      --expand-collapse-button-nested-width: calc(
        (
            ${expandCollapseButtonSize} +
              ((${baseHeightMultiplier} + ${density}) * 1.25)
          ) * -1px
      );
    }
  `.withBehaviors(
    new DirectionalStyleSheetBehavior(ltr, rtl),
    forcedColorsStylesheetBehavior(css`
      :host {
        forced-color-adjust: none;
        border-color: transparent;
        background: ${SystemColors.Field};
        color: ${SystemColors.FieldText};
      }
      :host .content-region .expand-collapse-glyph {
        fill: ${SystemColors.FieldText};
      }
      :host .positioning-region:hover,
      :host([selected]) .positioning-region {
        background: ${SystemColors.Highlight};
      }
      :host .positioning-region:hover .content-region,
      :host([selected]) .positioning-region .content-region {
        color: ${SystemColors.HighlightText};
      }
      :host .positioning-region:hover .content-region .expand-collapse-glyph,
      :host .positioning-region:hover .content-region .start,
      :host .positioning-region:hover .content-region .end,
      :host([selected]) .content-region .expand-collapse-glyph,
      :host([selected]) .content-region .start,
      :host([selected]) .content-region .end {
        fill: ${SystemColors.HighlightText};
      }
      :host([selected])::after {
        background: ${SystemColors.Field};
      }
      :host(:${focusVisible}) .positioning-region {
        border-color: ${SystemColors.FieldText};
        box-shadow: 0 0 0 2px inset ${SystemColors.Field};
        color: ${SystemColors.FieldText};
      }
      :host([disabled]) .content-region,
      :host([disabled]) .positioning-region:hover .content-region {
        opacity: 1;
        color: ${SystemColors.GrayText};
      }
      :host([disabled]) .content-region .expand-collapse-glyph,
      :host([disabled]) .content-region .start,
      :host([disabled]) .content-region .end,
      :host([disabled])
        .positioning-region:hover
        .content-region
        .expand-collapse-glyph,
      :host([disabled]) .positioning-region:hover .content-region .start,
      :host([disabled]) .positioning-region:hover .content-region .end {
        fill: ${SystemColors.GrayText};
      }
      :host([disabled]) .positioning-region:hover {
        background: ${SystemColors.Field};
      }
      .expand-collapse-glyph,
      .start,
      .end {
        fill: ${SystemColors.FieldText};
      }
      :host(.nested) .expand-collapse-button:hover {
        background: ${SystemColors.Field};
      }
      :host(.nested) .expand-collapse-button:hover .expand-collapse-glyph {
        fill: ${SystemColors.FieldText};
      }
    `)
  );
