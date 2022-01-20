import { parseColorHexRGB } from '@microsoft/fast-colors';
import {
  accentFillActiveDelta,
  accentFillFocusDelta,
  accentFillHoverDelta,
  accentForegroundActiveDelta,
  accentForegroundFocusDelta,
  accentForegroundHoverDelta,
  accentForegroundRestDelta,
  ColorRecipe,
  fillColor,
  InteractiveColorRecipe,
  InteractiveSwatchSet,
  isDark,
  neutralFillActiveDelta,
  neutralFillHoverDelta,
  neutralFillRestDelta,
  neutralPalette,
  Palette,
  PaletteRGB,
  Swatch,
  SwatchRGB
} from '@microsoft/fast-components';

import { DesignToken } from '@microsoft/fast-foundation';
import {
  ContrastTarget,
  errorBase,
  errorFillAlgorithm,
  errorForegroundAlgorithm,
  foregroundOnErrorAlgorithm
} from './colors';

const { create } = DesignToken;

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
