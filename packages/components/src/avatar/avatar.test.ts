// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto('/iframe.html?id=components-avatar--default');

  expect(await page.locator('jp-avatar').screenshot()).toMatchSnapshot(
    'avatar-default.png'
  );
});

test('Square', async ({ page }) => {
  await page.goto('/iframe.html?id=components-avatar--square');

  expect(await page.locator('jp-avatar').screenshot()).toMatchSnapshot(
    'avatar-square.png'
  );
});

test('With Image', async ({ page }) => {
  await page.goto('/iframe.html?id=components-avatar--with-image');

  expect(await page.locator('jp-avatar').screenshot()).toMatchSnapshot(
    'avatar-with-image.png'
  );
});
