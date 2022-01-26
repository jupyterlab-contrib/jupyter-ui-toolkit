import { test, expect } from '@playwright/test';

test.describe('Option', () => {
  test('Default', async ({ page }) => {
    await page.goto('/iframe.html?id=library-option--default');

    expect(await page.locator('jp-option').screenshot()).toMatchSnapshot(
      'option-default.png'
    );
  });

  test('With Disabled', async ({ page }) => {
    await page.goto('/iframe.html?id=library-option--with-disabled');

    expect(await page.locator('jp-option').screenshot()).toMatchSnapshot(
      'option-disabled.png'
    );
  });

  test('With Selected', async ({ page }) => {
    await page.goto('/iframe.html?id=library-option--with-selected');

    expect(await page.locator('jp-option').screenshot()).toMatchSnapshot(
      'option-selected.png'
    );
  });
});
