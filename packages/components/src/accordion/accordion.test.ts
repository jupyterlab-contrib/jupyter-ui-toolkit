// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto('/iframe.html?id=components-accordion--default');

  expect(await page.locator('jp-accordion').screenshot()).toMatchSnapshot(
    'accordion-default.png'
  );
});
