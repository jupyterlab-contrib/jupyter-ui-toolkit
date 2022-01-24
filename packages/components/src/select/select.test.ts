import { test, expect } from '@playwright/test';

test.describe('Select', () => {
  test('Default', async ({ page }) => {
    await page.goto('/iframe.html?id=library-select--default');

    expect(
      await page.locator('jp-select').first().screenshot()
    ).toMatchSnapshot('select-default.png');
  });
});
