// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import type { Button as jpButtonType } from '@microsoft/fast-foundation';
import test, { expect } from '@playwright/test';

type jpButton = HTMLElement & jpButtonType;

test.describe('jpButton', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/iframe.html?id=components-button--accent');
    await page.locator('body.sb-show-main').waitFor();

    await page.evaluate(() => {
      document.body.innerHTML = '';
      const element = document.createElement('jp-button') as jpButton;
      element.textContent = 'Hello';
      element.id = 'Button1';

      document.body.appendChild(element);
    });
  });

  // jpButton should render on the page
  test('should render on the page', async ({ page }) => {
    await expect(page.locator('jp-button')).toHaveCount(1);
  });

  test('receive focus when focused programatically', async ({ page }) => {
    const element = page.locator('jp-button');
    element.waitFor();
    await element.focus();

    expect(await page.evaluate(() => document.activeElement?.id)).toEqual(
      await element.getAttribute('id')
    );
  });
});
