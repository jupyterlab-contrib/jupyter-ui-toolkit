// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto('/iframe.html?id=components-listbox--default');

  expect(await page.locator('jp-listbox').screenshot()).toMatchSnapshot(
    'listbox-default.png'
  );
});

test('Disabled', async ({ page }) => {
  await page.goto('/iframe.html?id=components-listbox--with-disabled');

  expect(await page.locator('jp-listbox').screenshot()).toMatchSnapshot(
    'listbox-disabled.png'
  );
});
