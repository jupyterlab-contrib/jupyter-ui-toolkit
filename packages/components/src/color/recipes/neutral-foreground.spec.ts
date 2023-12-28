import { PaletteRGB } from '../palette.js';
import { neutralForeground } from './neutral-foreground.js';
import { middleGrey, white } from '../utilities/color-constants.js';

describe('neutralForeground', (): void => {
  const neutralPalette = PaletteRGB.create(middleGrey);

  it('should return correct result with default design system values', (): void => {
    expect(
      neutralForeground(neutralPalette, neutralPalette.get(88)).contrast(
        neutralPalette.get(neutralPalette.swatches.length - 1)
      )
    ).toBeGreaterThanOrEqual(14);
  });

  it('should return #FFFFFF with a dark background', (): void => {
    expect(
      neutralForeground(neutralPalette, white).contrast(white)
    ).toBeGreaterThanOrEqual(14);
  });
});
