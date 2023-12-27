import { css, ElementStyles } from '@microsoft/fast-element';
import {
  DesignToken,
  focusVisible,
  FoundationElementTemplate,
  TextFieldOptions
} from '@microsoft/fast-foundation';
import { Swatch } from '../color/swatch.js';
import {
  bodyFont,
  controlCornerRadius,
  density,
  designUnit,
  neutralFillRecipe,
  neutralFillStealthActive,
  neutralFillStealthHover,
  neutralFillStealthRecipe,
  neutralForegroundRest,
  typeRampBaseFontSize,
  typeRampBaseLineHeight
} from '../design-tokens.js';
import { BaseFieldStyles, heightNumber } from '../styles/index.js';

const clearButtonHover = DesignToken.create<Swatch>(
  'clear-button-hover'
).withDefault((target: HTMLElement) => {
  const buttonRecipe = neutralFillStealthRecipe.getValueFor(target);
  const inputRecipe = neutralFillRecipe.getValueFor(target);
  return buttonRecipe.evaluate(target, inputRecipe.evaluate(target).hover)
    .hover;
});

const clearButtonActive = DesignToken.create<Swatch>(
  'clear-button-active'
).withDefault((target: HTMLElement) => {
  const buttonRecipe = neutralFillStealthRecipe.getValueFor(target);
  const inputRecipe = neutralFillRecipe.getValueFor(target);
  return buttonRecipe.evaluate(target, inputRecipe.evaluate(target).hover)
    .active;
});

export const searchStyles: FoundationElementTemplate<
  ElementStyles,
  TextFieldOptions
> = (context, definition) => css`
  ${BaseFieldStyles}

  .control {
    padding: 0;
    padding-inline-start: calc(${designUnit} * 2px + 1px);
    padding-inline-end: calc(
      (${designUnit} * 2px) + (${heightNumber} * 1px) + 1px
    );
  }

  .control::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }

  .control:hover,
    .control:${focusVisible},
    .control:disabled,
    .control:active {
    outline: none;
  }

  .clear-button {
    height: calc(100% - 2px);
    opacity: 0;
    margin: 1px;
    background: transparent;
    color: ${neutralForegroundRest};
    fill: currentcolor;
    border: none;
    border-radius: calc(${controlCornerRadius} * 1px);
    min-width: calc(${heightNumber} * 1px);
    font-size: ${typeRampBaseFontSize};
    line-height: ${typeRampBaseLineHeight};
    outline: none;
    font-family: ${bodyFont};
    padding: 0 calc((10 + (${designUnit} * 2 * ${density})) * 1px);
  }

  .clear-button:hover {
    background: ${neutralFillStealthHover};
  }

  .clear-button:active {
    background: ${neutralFillStealthActive};
  }

  :host([appearance='filled']) .clear-button:hover {
    background: ${clearButtonHover};
  }

  :host([appearance='filled']) .clear-button:active {
    background: ${clearButtonActive};
  }

  .input-wrapper {
    display: flex;
    position: relative;
    width: 100%;
  }

  .start,
  .end {
    display: flex;
    margin: 1px;
    fill: currentcolor;
  }

  ::slotted([slot='end']) {
    height: 100%;
  }

  .end {
    margin-inline-end: 1px;
    height: calc(100% - 2px);
  }

  ::slotted(svg) {
    /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
    width: 16px;
    height: 16px;
    margin-inline-end: 11px;
    margin-inline-start: 11px;
    margin-top: auto;
    margin-bottom: auto;
  }

  .clear-button__hidden {
    opacity: 0;
  }

  :host(:hover:not([disabled], [readOnly])) .clear-button,
  :host(:active:not([disabled], [readOnly])) .clear-button,
  :host(:focus-within:not([disabled], [readOnly])) .clear-button {
    opacity: 1;
  }

  :host(:hover:not([disabled], [readOnly])) .clear-button__hidden,
  :host(:active:not([disabled], [readOnly])) .clear-button__hidden,
  :host(:focus-within:not([disabled], [readOnly])) .clear-button__hidden {
    opacity: 0;
  }
`;
