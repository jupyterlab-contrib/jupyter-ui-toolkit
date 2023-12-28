import { SwatchRGB, isSwatchRGB } from './swatch.js';

const test: SwatchRGB = {
  r: 0,
  g: 0,
  b: 0,
  relativeLuminance: 0,
  contrast: () => 1,
  toColorString: () => ''
};

describe('isSwatchRGB', () => {
  it('should return true when called with the product of SwatchRGB.create()', () => {
    expect(isSwatchRGB(SwatchRGB.create(1, 1, 1))).toEqual(true);
  });

  it('should return true when called with an object conforming to the interface', () => {
    expect(isSwatchRGB(test)).toEqual(true);
  });

  for (const key in test) {
    it(`should return false when called with an object missing the ${key} property`, () => {
      const _test = { ...test };
      // @ts-expect-error unexpected index
      delete _test[key];

      expect(isSwatchRGB(_test)).toEqual(false);
    });

    it(`should return false when called with an object with the ${key} property assigned to a mismatching type`, () => {
      const _test = { ...test };
      // @ts-expect-error unexpected index
      _test[key] = 'foobar';

      expect(isSwatchRGB(_test)).toEqual(false);
    });
  }
});
