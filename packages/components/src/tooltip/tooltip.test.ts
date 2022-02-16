// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { test, expect } from '@playwright/test';
import { Tooltip } from './index';

test('Default', async ({ page }) => {
  await page.goto('/iframe.html?id=tooltip--default');

  await page.evaluate(() => {
    const tooltip = document.querySelector('jp-tooltip') as Tooltip;
    if (tooltip) {
      tooltip.delay = 0;
      tooltip.visible = true;
    }
  });

  expect(await page.locator('jp-anchored-region').screenshot()).toMatchSnapshot(
    'tooltip-default.png'
  );
});
