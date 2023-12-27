import type { Dialog as JpDialogType } from '@microsoft/fast-foundation';
import test, { expect } from '@playwright/test';

type JpDialog = HTMLElement & JpDialogType;

test.describe('JpDialog', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/iframe.html?id=components-dialog--default');
    await page.locator('body.sb-show-main').waitFor();
    await page.evaluate(() => {
      document.body.innerHTML = '';
      const element = document.createElement('jp-dialog') as JpDialog;
      element.id = 'testelement';

      const button1 = document.createElement('button');
      button1.id = 'button1';
      element.appendChild(button1);

      const button2 = document.createElement('button');
      button2.id = 'button2';
      element.appendChild(button2);

      document.body.appendChild(element);
    });
  });

  // jpDialog should render on the page
  test('should render on the page', async ({ page }) => {
    await expect(page.locator('jp-dialog')).toHaveCount(1);
  });

  // jpDialog should focus on the first element
  test('should focus on first element', async ({ page }) => {
    await page.locator('jp-dialog').waitFor({ state: 'attached' });
    await page.waitForTimeout(500);

    expect(await page.evaluate(() => document.activeElement?.id)).toEqual(
      'button1'
    );
  });

  // jpDialog should trap focus
  test('should trap focus', async ({ page }) => {
    await page.locator('jp-dialog').waitFor({ state: 'attached' });
    await page.waitForTimeout(500);

    expect
      .soft(await page.evaluate(() => document.activeElement?.id))
      .toEqual('button1');

    await page.locator('jp-dialog').press('Tab');
    expect
      .soft(await page.evaluate(() => document.activeElement?.id))
      .toEqual('button2');

    await page.locator('jp-dialog').press('Tab');
    expect
      .soft(await page.evaluate(() => document.activeElement?.id))
      .toEqual('button1');

    await page.locator('jp-dialog').press('Shift+Tab');
    expect
      .soft(await page.evaluate(() => document.activeElement?.id))
      .toEqual('button2');

    await page.locator('jp-dialog').press('Shift+Tab');
    expect(await page.evaluate(() => document.activeElement?.id)).toEqual(
      'button1'
    );
  });
});
