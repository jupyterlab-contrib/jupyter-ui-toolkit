// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { parseColorHexRGB } from '@microsoft/fast-colors';
import {
  InteractiveSwatchSet,
  isDark,
  Palette,
  Swatch,
  SwatchRGB
} from '@microsoft/fast-components';

export {
  InteractiveSwatchSet,
  isDark,
  Palette,
  PaletteRGB,
  Recipe,
  StandardLuminance,
  Swatch,
  SwatchRGB
} from '@microsoft/fast-components';

/*
 * The error palette is built using the same color algorithm as the accent palette
 * But by copying the algorithm from @microsoft/fast-components at commit 03d711f222bd816834a5e1d60256d3e083b27c27
 * as some helpers are not exported.
 * The delta used are those of the accent palette.
 */

export const white = SwatchRGB.create(1, 1, 1);
export const black = SwatchRGB.create(0, 0, 0);
export const baseErrorColor = parseColorHexRGB('#D32F2F')!;

export enum ContrastTarget {
  normal = 4.5,
  large = 7
}

export function errorFillAlgorithm(
  palette: Palette,
  neutralPalette: Palette,
  reference: Swatch,
  hoverDelta: number,
  activeDelta: number,
  focusDelta: number,
  neutralFillRestDelta: number,
  neutralFillHoverDelta: number,
  neutralFillActiveDelta: number
): InteractiveSwatchSet {
  const error = palette.source;
  const referenceIndex = neutralPalette.closestIndexOf(reference);
  const swapThreshold = Math.max(
    neutralFillRestDelta,
    neutralFillHoverDelta,
    neutralFillActiveDelta
  );
  const direction = referenceIndex >= swapThreshold ? -1 : 1;
  const errorIndex = palette.closestIndexOf(error);

  const hoverIndex = errorIndex;
  const restIndex = hoverIndex + direction * -1 * hoverDelta;
  const activeIndex = restIndex + direction * activeDelta;
  const focusIndex = restIndex + direction * focusDelta;

  return {
    rest: palette.get(restIndex),
    hover: palette.get(hoverIndex),
    active: palette.get(activeIndex),
    focus: palette.get(focusIndex)
  };
}

/**
 * @internal
 */
export function errorForegroundAlgorithm(
  palette: Palette,
  reference: Swatch,
  contrastTarget: number,
  restDelta: number,
  hoverDelta: number,
  activeDelta: number,
  focusDelta: number
): InteractiveSwatchSet {
  const error = palette.source;
  const errorIndex = palette.closestIndexOf(error);
  const direction = isDark(reference) ? -1 : 1;
  const startIndex =
    errorIndex +
    (direction === 1
      ? Math.min(restDelta, hoverDelta)
      : Math.max(direction * restDelta, direction * hoverDelta));
  const accessibleSwatch = palette.colorContrast(
    reference,
    contrastTarget,
    startIndex,
    direction
  );
  const accessibleIndex1 = palette.closestIndexOf(accessibleSwatch);
  const accessibleIndex2 =
    accessibleIndex1 + direction * Math.abs(restDelta - hoverDelta);
  const indexOneIsRestState =
    direction === 1
      ? restDelta < hoverDelta
      : direction * restDelta > direction * hoverDelta;

  let restIndex: number;
  let hoverIndex: number;

  if (indexOneIsRestState) {
    restIndex = accessibleIndex1;
    hoverIndex = accessibleIndex2;
  } else {
    restIndex = accessibleIndex2;
    hoverIndex = accessibleIndex1;
  }

  return {
    rest: palette.get(restIndex),
    hover: palette.get(hoverIndex),
    active: palette.get(restIndex + direction * activeDelta),
    focus: palette.get(restIndex + direction * focusDelta)
  };
}

/**
 * @internal
 */
export function foregroundOnErrorAlgorithm(
  reference: Swatch,
  contrastTarget: number
): Swatch {
  return reference.contrast(white) >= contrastTarget ? white : black;
}

export const errorBase = SwatchRGB.create(
  baseErrorColor.r,
  baseErrorColor.g,
  baseErrorColor.b
);
