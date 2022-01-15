import { test, expect } from '@playwright/test';

test.describe('Button', () => {
  test('Default', async ({ page }) => {
    await page.goto('/iframe.html?id=library-button--default');

    expect(
      await page.locator('#root :nth-child(1)').first().screenshot()
    ).toMatchSnapshot('button-default.png');
  });

  test('Secondary', async ({ page }) => {
    await page.goto('/iframe.html?id=library-button--secondary');

    expect(
      await page.locator('#root :nth-child(1)').first().screenshot()
    ).toMatchSnapshot('button-secondary.png');
  });

  test('With Autofocus', async ({ page }) => {
    await page.goto('/iframe.html?id=library-button--with-autofocus');

    expect(
      await page.locator('#root :nth-child(1)').first().screenshot()
    ).toMatchSnapshot('button-with-autofocus.png');
  });

  test('With Disabled', async ({ page }) => {
    await page.goto('/iframe.html?id=library-button--with-disabled');

    expect(
      await page.locator('#root :nth-child(1)').first().screenshot()
    ).toMatchSnapshot('button-with-disabled.png');
  });
});
