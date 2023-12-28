// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto('/iframe.html?id=components-slider--default');

  expect(await page.locator('body').screenshot()).toMatchSnapshot(
    'slider-default.png'
  );
});

test('Vertical', async ({ page }) => {
  await page.goto('/iframe.html?id=components-slider--vertical');

  expect(await page.locator('body').screenshot()).toMatchSnapshot(
    'slider-vertical.png'
  );
});

test('With Disabled', async ({ browserName, page }) => {
  // FIXME
  test.skip(browserName === 'webkit', 'Slider thumb animation unstable.');

  await page.goto('/iframe.html?id=components-slider--with-disabled');

  expect(await page.locator('body').screenshot()).toMatchSnapshot(
    'slider-with-disabled.png'
  );
});

test('Error', async ({ page }) => {
  await page.goto('/iframe.html?id=components-slider--with-error');

  expect(await page.locator('jp-slider').screenshot()).toMatchSnapshot(
    'slider-error.png'
  );
});
