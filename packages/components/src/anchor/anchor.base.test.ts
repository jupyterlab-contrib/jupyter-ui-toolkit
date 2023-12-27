import type { Anchor as jpAnchorType } from '@microsoft/fast-foundation';
import test, { expect } from '@playwright/test';

type jpAnchor = HTMLElement & jpAnchorType;

test.describe('jpAnchor', () => {
  test.beforeEach(async ({ page }) => {
    await page.evaluate(() => {
      const element = document.createElement('jp-anchor') as jpAnchor;
      element.href = '#';
      element.textContent = 'Hello';
      element.id = 'anchor1';

      document.body.appendChild(element);
    });
  });

  // jpAnchor should render on the page
  test('should render on the page', async ({ page }) => {
    await expect(page.locator('jp-anchor')).toHaveCount(1);
  });

  test('receive focus when focused programatically', async ({ page }) => {
    await page.locator('jp-anchor').focus();

    expect(await page.evaluate(() => document.activeElement?.id)).toEqual(
      await page.locator('jp-anchor').getAttribute('id')
    );
  });
});
