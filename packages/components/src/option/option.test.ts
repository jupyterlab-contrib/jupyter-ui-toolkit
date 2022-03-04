// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto('/iframe.html?id=option--default');

  expect(await page.locator('jp-option').screenshot()).toMatchSnapshot(
    'option-default.png'
  );
});

test('With Disabled', async ({ page }) => {
  await page.goto('/iframe.html?id=option--with-disabled');

  expect(await page.locator('jp-option').screenshot()).toMatchSnapshot(
    'option-disabled.png'
  );
});

test('With Selected', async ({ page }) => {
  await page.goto('/iframe.html?id=option--with-selected');

  expect(await page.locator('jp-option').screenshot()).toMatchSnapshot(
    'option-selected.png'
  );
});
