// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { test, expect } from '@playwright/test';

test('With value', async ({ browserName, page }) => {
  // FIXME
  test.skip(browserName === 'webkit', 'Progress ring bar animation unstable.');

  await page.goto('/iframe.html?id=components-progress-ring--with-value');

  // Ensure the progress animation is finished
  await page.waitForTimeout(200);

  expect(await page.locator('jp-progress-ring').screenshot()).toMatchSnapshot(
    'progress-ring-with-value.png'
  );
});
