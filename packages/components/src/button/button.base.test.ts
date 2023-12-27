import type { Button as jpButtonType } from '@microsoft/fast-foundation';
import test, { expect } from '@playwright/test';

type jpButton = HTMLElement & jpButtonType;

test.describe('jpButton', () => {
  test.beforeEach(async ({ page }) => {

    await page.evaluate(() => {
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
    await page.locator('jp-button').focus();

    expect(await page.evaluate(() => document.activeElement?.id)).toEqual(
      await page.locator('jp-button').getAttribute('id')
    );
  });
});
