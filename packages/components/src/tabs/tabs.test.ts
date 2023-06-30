// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto('/iframe.html?id=components-tabs--default');

  expect(await page.locator('jp-tabs').screenshot()).toMatchSnapshot(
    'tabs-default.png'
  );
});

test('Vertical', async ({ page }) => {
  await page.goto('/iframe.html?id=components-tabs--vertical');

  expect(await page.locator('jp-tabs').screenshot()).toMatchSnapshot(
    'tabs-vertical.png'
  );
});

test('Without Indicator', async ({ page }) => {
  await page.goto('/iframe.html?id=components-tabs--without-indicator');

  expect(await page.locator('jp-tabs').screenshot()).toMatchSnapshot(
    'tabs-without-indicator.png'
  );
});
