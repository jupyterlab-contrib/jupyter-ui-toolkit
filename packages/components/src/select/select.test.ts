// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto('/iframe.html?id=select--default');

  expect(await page.locator('jp-select').screenshot()).toMatchSnapshot(
    'select-default.png'
  );
});

test('WithOpen', async ({ page }) => {
  await page.goto('/iframe.html?id=select--with-open');

  expect(await page.locator('jp-select').screenshot()).toMatchSnapshot(
    'select-with-open.png'
  );
});

test('WithDisabled', async ({ page }) => {
  await page.goto('/iframe.html?id=select--with-disabled');

  expect(await page.locator('jp-select').screenshot()).toMatchSnapshot(
    'select-with-disabled.png'
  );
});

test('WithCustomIndicator', async ({ page }) => {
  await page.goto('/iframe.html?id=select--with-custom-indicator');

  expect(await page.locator('jp-select').screenshot()).toMatchSnapshot(
    'select-with-custom-indicator.png'
  );
});
