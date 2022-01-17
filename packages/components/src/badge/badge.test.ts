import { test, expect } from '@playwright/test';

test.describe('Badge', () => {
  test('Default', async ({ page }) => {
    await page.goto('/iframe.html?id=library-badge--default');

    expect(
      await page.locator('#root :nth-child(1)').first().screenshot()
    ).toMatchSnapshot('badge-default.png');
  });
});
