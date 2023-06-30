// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto('/iframe.html?id=components-card--default');

  expect(await page.locator('jp-card').screenshot()).toMatchSnapshot(
    'card-default.png'
  );
});
