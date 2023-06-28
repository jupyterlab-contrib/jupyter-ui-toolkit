// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto('/iframe.html?id=menu--default');

  expect(
    await page.locator('#storybook-root > jp-menu').screenshot()
  ).toMatchSnapshot('menu-default.png');
});
