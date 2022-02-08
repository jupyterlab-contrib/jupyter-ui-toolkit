// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto('/iframe.html?id=slider--default');

  expect(await page.locator('body').screenshot()).toMatchSnapshot(
    'slider-default.png'
  );
});

test('Vertical', async ({ page }) => {
  await page.goto('/iframe.html?id=slider--vertical');

  expect(await page.locator('body').screenshot()).toMatchSnapshot(
    'slider-vertical.png'
  );
});

test('With Disabled', async ({ page }) => {
  await page.goto('/iframe.html?id=slider--with-disabled');

  expect(await page.locator('body').screenshot()).toMatchSnapshot(
    'slider-with-disabled.png'
  );
});
