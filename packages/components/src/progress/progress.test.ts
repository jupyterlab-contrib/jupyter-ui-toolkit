// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { test, expect } from '@playwright/test';

test.describe('Progress', () => {
  test('With value', async ({ browserName, page }) => {
    // FIXME
    test.skip(browserName === 'webkit', 'Progress bar animation unstable.');

    await page.goto('/iframe.html?id=progress--with-value');

    // Ensure the progress animation is finished
    await page.waitForTimeout(200);

    expect(await page.locator('jp-progress').screenshot()).toMatchSnapshot(
      'progress-with-value.png'
    );
  });
});
