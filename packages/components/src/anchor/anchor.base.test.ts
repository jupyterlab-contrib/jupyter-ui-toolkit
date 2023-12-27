import type { Anchor as jpAnchorType } from '@microsoft/fast-foundation';
import test, { expect } from '@playwright/test';

type jpAnchor = HTMLElement & jpAnchorType;

test.describe('jpAnchor', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/iframe.html?id=components-anchor--default');
    await page.evaluate(() => {
      document.body.innerHTML = '';
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
    const element = page.locator('jp-anchor');
    await element.waitFor();
    await element.focus();

    expect(await page.evaluate(() => document.activeElement?.id)).toEqual(
      await element.getAttribute('id')
    );
  });
});
