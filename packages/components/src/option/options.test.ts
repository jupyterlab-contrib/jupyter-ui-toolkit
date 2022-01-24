import { test, expect } from '@playwright/test';

test.describe('Option', () => {
  test('Default', async ({ page }) => {
    await page.goto('/iframe.html?id=library-option--default');

    expect(
      await page.locator('jp-option').first().screenshot()
    ).toMatchSnapshot('option-default.png');
  });
});
