// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto('/iframe.html?id=components-slider-label--default');

  expect(await page.locator('body').screenshot()).toMatchSnapshot(
    'slider-label-default.png'
  );
});

test('With Hide Mark', async ({ page }) => {
  await page.goto('/iframe.html?id=components-slider-label--with-hide-mark');

  expect(await page.locator('body').screenshot()).toMatchSnapshot(
    'slider-label-with-hide-mark.png'
  );
});
