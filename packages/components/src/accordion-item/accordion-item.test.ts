// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto('/iframe.html?id=accordion-item--default');

  expect(await page.locator('jp-accordion-item').screenshot()).toMatchSnapshot(
    'accordion-item-default.png'
  );
});
