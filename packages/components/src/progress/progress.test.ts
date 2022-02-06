// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { test, expect } from '@playwright/test';

test.describe('Progress', () => {
  test('With value', async ({ page }) => {
    await page.goto('/iframe.html?id=progress--with-value');

    expect(await page.locator('jp-progress').screenshot()).toMatchSnapshot(
      'progress-with-value.png'
    );
  });
});
