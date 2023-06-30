// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto('/iframe.html?id=components-switch--default');

  expect(await page.locator('jp-switch').screenshot()).toMatchSnapshot(
    'switch-default.png'
  );
});

test('Checked', async ({ page }) => {
  await page.goto('/iframe.html?id=components-switch--with-checked');

  expect(await page.locator('jp-switch').screenshot()).toMatchSnapshot(
    'switch-with-checked.png'
  );
});

test('Disabled', async ({ page }) => {
  await page.goto('/iframe.html?id=components-switch--with-disabled');

  expect(await page.locator('jp-switch').screenshot()).toMatchSnapshot(
    'switch-disabled.png'
  );
});

test('With Messages', async ({ page }) => {
  await page.goto('/iframe.html?id=components-switch--with-messages');

  expect(await page.locator('jp-switch').screenshot()).toMatchSnapshot(
    'switch-with-messages.png'
  );
});
