// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

const sum = (a: number, b: number): number => {
  return a + b;
};

// FIXME
test('temporary test', () => {
  expect(sum(1, 2)).toBe(3);
});
