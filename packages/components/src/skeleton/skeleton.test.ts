// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto('/iframe.html?id=components-skeleton--default');

  expect(
    await page.getByTestId('skeleton-container').screenshot()
  ).toMatchSnapshot('skeleton-default.png');
});
