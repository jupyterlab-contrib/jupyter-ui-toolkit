// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto('/iframe.html?id=divider--default');

  expect(await page.locator('jp-divider').screenshot()).toMatchSnapshot(
    'divider-default.png'
  );
});

test('Vertical', async ({ page }) => {
  await page.goto('/iframe.html?id=divider--vertical');

  expect(await page.locator('jp-divider').screenshot()).toMatchSnapshot(
    'divider-vertical.png'
  );
});
