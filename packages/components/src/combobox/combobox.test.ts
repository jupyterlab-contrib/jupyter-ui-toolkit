// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto('/iframe.html?id=combobox--default');

  expect(await page.locator('jp-combobox').screenshot()).toMatchSnapshot(
    'combobox-default.png'
  );
});

test('Disabled', async ({ page }) => {
  await page.goto('/iframe.html?id=combobox--with-disabled');

  expect(await page.locator('jp-combobox').screenshot()).toMatchSnapshot(
    'combobox-disabled.png'
  );
});

test('Custom Indicator', async ({ page }) => {
  await page.goto('/iframe.html?id=combobox--with-custom-indicator');

  expect(await page.locator('jp-combobox').screenshot()).toMatchSnapshot(
    'combobox-custom-indicator.png'
  );
});
