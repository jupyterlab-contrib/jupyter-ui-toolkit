// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto('/iframe.html?id=radio--default');

  expect(await page.locator('jp-radio').screenshot()).toMatchSnapshot(
    'radio-default.png'
  );
});

test('Checked', async ({ page }) => {
  await page.goto('/iframe.html?id=radio--with-checked');

  expect(await page.locator('jp-radio').screenshot()).toMatchSnapshot(
    'radio-checked.png'
  );
});

test('Disabled', async ({ page }) => {
  await page.goto('/iframe.html?id=radio--with-disabled');

  expect(await page.locator('jp-radio').screenshot()).toMatchSnapshot(
    'radio-disabled.png'
  );
});

test('Read-only', async ({ page }) => {
  await page.goto('/iframe.html?id=radio--with-read-only');

  expect(await page.locator('jp-radio').screenshot()).toMatchSnapshot(
    'radio-read-only.png'
  );
});
