// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  accentFillActiveDelta,
  accentFillFocusDelta,
  accentFillHoverDelta,
  accentForegroundActiveDelta,
  accentForegroundFocusDelta,
  accentForegroundHoverDelta,
  accentForegroundRestDelta,
  ColorRecipe,
  disabledOpacity,
  fillColor,
  InteractiveColorRecipe,
  InteractiveSwatchSet,
  neutralFillActiveDelta,
  neutralFillHoverDelta,
  neutralFillRestDelta,
  neutralPalette,
  Palette,
  PaletteRGB,
  Swatch
} from '@microsoft/fast-components';
import { DesignToken } from '@microsoft/fast-foundation';
import {
  ContrastTarget,
  errorBase,
  errorFillAlgorithm,
  errorForegroundAlgorithm,
  foregroundOnErrorAlgorithm
} from './color';

// Export design token from @microsoft/fast-components
// to encapsulate them.

export {
  accentColor,
  accentFillActive,
  accentFillActiveDelta,
  accentFillFocus,
  accentFillFocusDelta,
  accentFillHover,
  accentFillHoverDelta,
  accentFillRecipe,
  accentFillRest,
  accentFillRestDelta,
  accentForegroundActive,
  accentForegroundActiveDelta,
  accentForegroundFocus,
  accentForegroundFocusDelta,
  accentForegroundHover,
  accentForegroundHoverDelta,
  accentForegroundRecipe,
  accentForegroundRest,
  accentForegroundRestDelta,
  accentPalette,
  baseHeightMultiplier,
  baseHorizontalSpacingMultiplier,
  baseLayerLuminance,
  bodyFont,
  ColorRecipe,
  controlCornerRadius,
  density,
  designUnit,
  direction,
  DirectionalStyleSheetBehavior,
  disabledOpacity,
  fillColor,
  focusStrokeInner,
  focusStrokeInnerRecipe,
  focusStrokeOuter,
  focusStrokeOuterRecipe,
  focusStrokeWidth,
  foregroundOnAccentActive,
  foregroundOnAccentActiveLarge,
  foregroundOnAccentFocus,
  foregroundOnAccentFocusLarge,
  foregroundOnAccentHover,
  foregroundOnAccentHoverLarge,
  foregroundOnAccentLargeRecipe,
  foregroundOnAccentRecipe,
  foregroundOnAccentRest,
  foregroundOnAccentRestLarge,
  InteractiveColorRecipe,
  neutralColor,
  neutralFillActive,
  neutralFillActiveDelta,
  neutralFillFocus,
  neutralFillFocusDelta,
  neutralFillHover,
  neutralFillHoverDelta,
  neutralFillInputActive,
  neutralFillInputActiveDelta,
  neutralFillInputFocus,
  neutralFillInputFocusDelta,
  neutralFillInputHover,
  neutralFillInputHoverDelta,
  neutralFillInputRecipe,
  neutralFillInputRest,
  neutralFillInputRestDelta,
  neutralFillLayerRecipe,
  neutralFillLayerRest,
  neutralFillLayerRestDelta,
  neutralFillRecipe,
  neutralFillRest,
  neutralFillRestDelta,
  neutralFillStealthActive,
  neutralFillStealthActiveDelta,
  neutralFillStealthFocus,
  neutralFillStealthFocusDelta,
  neutralFillStealthHover,
  neutralFillStealthHoverDelta,
  neutralFillStealthRecipe,
  neutralFillStealthRest,
  neutralFillStealthRestDelta,
  neutralFillStrongActive,
  neutralFillStrongActiveDelta,
  neutralFillStrongFocus,
  neutralFillStrongFocusDelta,
  neutralFillStrongHover,
  neutralFillStrongHoverDelta,
  neutralFillStrongRecipe,
  neutralFillStrongRest,
  neutralFillStrongRestDelta,
  neutralForegroundHint,
  neutralForegroundHintRecipe,
  neutralForegroundRecipe,
  neutralForegroundRest,
  neutralLayer1,
  neutralLayer1Recipe,
  neutralLayer2,
  neutralLayer2Recipe,
  neutralLayer3,
  neutralLayer3Recipe,
  neutralLayer4,
  neutralLayer4Recipe,
  neutralLayerCardContainer,
  neutralLayerCardContainerRecipe,
  neutralLayerFloating,
  neutralLayerFloatingRecipe,
  neutralPalette,
  neutralStrokeActive,
  neutralStrokeActiveDelta,
  neutralStrokeDividerRecipe,
  neutralStrokeDividerRest,
  neutralStrokeDividerRestDelta,
  neutralStrokeFocus,
  neutralStrokeFocusDelta,
  neutralStrokeHover,
  neutralStrokeHoverDelta,
  neutralStrokeRecipe,
  neutralStrokeRest,
  neutralStrokeRestDelta,
  strokeWidth,
  typeRampBaseFontSize,
  typeRampBaseLineHeight,
  typeRampMinus1FontSize,
  typeRampMinus1LineHeight,
  typeRampMinus2FontSize,
  typeRampMinus2LineHeight,
  typeRampPlus1FontSize,
  typeRampPlus1LineHeight,
  typeRampPlus2FontSize,
  typeRampPlus2LineHeight,
  typeRampPlus3FontSize,
  typeRampPlus3LineHeight,
  typeRampPlus4FontSize,
  typeRampPlus4LineHeight,
  typeRampPlus5FontSize,
  typeRampPlus5LineHeight,
  typeRampPlus6FontSize,
  typeRampPlus6LineHeight
} from '@microsoft/fast-components';

const { create } = DesignToken;

disabledOpacity.withDefault(0.4);

/*
 * The error palette is built using the same color algorithm as the accent palette
 * But by copying the algorithm from @microsoft/fast-components at commit 03d711f222bd816834a5e1d60256d3e083b27c27
 * as some helpers are not exported.
 * The delta used are those of the accent palette.
 */

/**
 * Error palette
 */
export const errorPalette = create<Palette>({
  name: 'error-palette',
  cssCustomPropertyName: null
}).withDefault(PaletteRGB.from(errorBase));

// Error Fill
/** @public */
export const errorFillRecipe = create<InteractiveColorRecipe>({
  name: 'error-fill-recipe',
  cssCustomPropertyName: null
}).withDefault({
  evaluate: (element: HTMLElement, reference?: Swatch): InteractiveSwatchSet =>
    errorFillAlgorithm(
      errorPalette.getValueFor(element),
      neutralPalette.getValueFor(element),
      reference || fillColor.getValueFor(element),
      accentFillHoverDelta.getValueFor(element),
      accentFillActiveDelta.getValueFor(element),
      accentFillFocusDelta.getValueFor(element),
      neutralFillRestDelta.getValueFor(element),
      neutralFillHoverDelta.getValueFor(element),
      neutralFillActiveDelta.getValueFor(element)
    )
});

/** @public */
export const errorFillRest = create<Swatch>('error-fill-rest').withDefault(
  (element: HTMLElement) => {
    return errorFillRecipe.getValueFor(element).evaluate(element).rest;
  }
);
/** @public */
export const errorFillHover = create<Swatch>('error-fill-hover').withDefault(
  (element: HTMLElement) => {
    return errorFillRecipe.getValueFor(element).evaluate(element).hover;
  }
);
/** @public */
export const errorFillActive = create<Swatch>('error-fill-active').withDefault(
  (element: HTMLElement) => {
    return errorFillRecipe.getValueFor(element).evaluate(element).active;
  }
);
/** @public */
export const errorFillFocus = create<Swatch>('error-fill-focus').withDefault(
  (element: HTMLElement) => {
    return errorFillRecipe.getValueFor(element).evaluate(element).focus;
  }
);

// Foreground On Error
const foregroundOnErrorByContrast =
  (contrast: number) => (element: HTMLElement, reference?: Swatch) => {
    return foregroundOnErrorAlgorithm(
      reference || errorFillRest.getValueFor(element),
      contrast
    );
  };

/** @public */
export const foregroundOnErrorRecipe = create<ColorRecipe>({
  name: 'foreground-on-error-recipe',
  cssCustomPropertyName: null
}).withDefault({
  evaluate: (element: HTMLElement, reference?: Swatch): Swatch =>
    foregroundOnErrorByContrast(ContrastTarget.normal)(element, reference)
});
/** @public */
export const foregroundOnErrorRest = create<Swatch>(
  'foreground-on-error-rest'
).withDefault((element: HTMLElement) =>
  foregroundOnErrorRecipe
    .getValueFor(element)
    .evaluate(element, errorFillRest.getValueFor(element))
);
/** @public */
export const foregroundOnErrorHover = create<Swatch>(
  'foreground-on-error-hover'
).withDefault((element: HTMLElement) =>
  foregroundOnErrorRecipe
    .getValueFor(element)
    .evaluate(element, errorFillHover.getValueFor(element))
);
/** @public */
export const foregroundOnErrorActive = create<Swatch>(
  'foreground-on-error-active'
).withDefault((element: HTMLElement) =>
  foregroundOnErrorRecipe
    .getValueFor(element)
    .evaluate(element, errorFillActive.getValueFor(element))
);
/** @public */
export const foregroundOnErrorFocus = create<Swatch>(
  'foreground-on-error-focus'
).withDefault((element: HTMLElement) =>
  foregroundOnErrorRecipe
    .getValueFor(element)
    .evaluate(element, errorFillFocus.getValueFor(element))
);

/** @public */
export const foregroundOnErrorLargeRecipe = create<ColorRecipe>({
  name: 'foreground-on-error-large-recipe',
  cssCustomPropertyName: null
}).withDefault({
  evaluate: (element: HTMLElement, reference?: Swatch): Swatch =>
    foregroundOnErrorByContrast(ContrastTarget.large)(element, reference)
});
/** @public */
export const foregroundOnErrorRestLarge = create<Swatch>(
  'foreground-on-error-rest-large'
).withDefault((element: HTMLElement) =>
  foregroundOnErrorLargeRecipe
    .getValueFor(element)
    .evaluate(element, errorFillRest.getValueFor(element))
);
/** @public */
export const foregroundOnErrorHoverLarge = create<Swatch>(
  'foreground-on-error-hover-large'
).withDefault((element: HTMLElement) =>
  foregroundOnErrorLargeRecipe
    .getValueFor(element)
    .evaluate(element, errorFillHover.getValueFor(element))
);
/** @public */
export const foregroundOnErrorActiveLarge = create<Swatch>(
  'foreground-on-error-active-large'
).withDefault((element: HTMLElement) =>
  foregroundOnErrorLargeRecipe
    .getValueFor(element)
    .evaluate(element, errorFillActive.getValueFor(element))
);
/** @public */
export const foregroundOnErrorFocusLarge = create<Swatch>(
  'foreground-on-error-focus-large'
).withDefault((element: HTMLElement) =>
  foregroundOnErrorLargeRecipe
    .getValueFor(element)
    .evaluate(element, errorFillFocus.getValueFor(element))
);

// Error Foreground
const errorForegroundByContrast =
  (contrast: number) => (element: HTMLElement, reference?: Swatch) =>
    errorForegroundAlgorithm(
      errorPalette.getValueFor(element),
      reference || fillColor.getValueFor(element),
      contrast,
      accentForegroundRestDelta.getValueFor(element),
      accentForegroundHoverDelta.getValueFor(element),
      accentForegroundActiveDelta.getValueFor(element),
      accentForegroundFocusDelta.getValueFor(element)
    );

/** @public */
export const errorForegroundRecipe = create<InteractiveColorRecipe>({
  name: 'error-foreground-recipe',
  cssCustomPropertyName: null
}).withDefault({
  evaluate: (element: HTMLElement, reference?: Swatch): InteractiveSwatchSet =>
    errorForegroundByContrast(ContrastTarget.normal)(element, reference)
});

/** @public */
export const errorForegroundRest = create<Swatch>(
  'error-foreground-rest'
).withDefault(
  (element: HTMLElement) =>
    errorForegroundRecipe.getValueFor(element).evaluate(element).rest
);
/** @public */
export const errorForegroundHover = create<Swatch>(
  'error-foreground-hover'
).withDefault(
  (element: HTMLElement) =>
    errorForegroundRecipe.getValueFor(element).evaluate(element).hover
);
/** @public */
export const errorForegroundActive = create<Swatch>(
  'error-foreground-active'
).withDefault(
  (element: HTMLElement) =>
    errorForegroundRecipe.getValueFor(element).evaluate(element).active
);
/** @public */
export const errorForegroundFocus = create<Swatch>(
  'error-foreground-focus'
).withDefault(
  (element: HTMLElement) =>
    errorForegroundRecipe.getValueFor(element).evaluate(element).focus
);
