import { SwatchRGB } from '../swatch.js';
import { black } from '../utilities/color-constants.js';
import { foregroundOnAccent } from './foreground-on-accent.js';

describe('Cut text', (): void => {
  it('should return black when background does not meet contrast ratio', (): void => {
    const small = foregroundOnAccent(
      SwatchRGB.create(1, 1, 1),
      4.5
    ) as SwatchRGB;
    const large = foregroundOnAccent(SwatchRGB.create(1, 1, 1), 3) as SwatchRGB;

    expect(small.r).toEqual(black.r);
    expect(small.g).toEqual(black.g);
    expect(small.b).toEqual(black.b);

    expect(large.r).toEqual(black.r);
    expect(large.g).toEqual(black.g);
    expect(large.b).toEqual(black.b);
  });
});
