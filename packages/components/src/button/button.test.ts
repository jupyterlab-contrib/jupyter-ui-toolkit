import { test, expect } from '@playwright/test';

test.describe('Button', () => {
  test('Default', async ({ page }) => {
    await page.goto('/iframe.html?id=library-button--default');

    expect(
      await page.locator('#root :nth-child(1)').first().screenshot()
    ).toMatchSnapshot('button-default.png');
  });

  test('Neutral', async ({ page }) => {
    await page.goto('/iframe.html?id=library-button--neutral');

    expect(
      await page.locator('#root :nth-child(1)').first().screenshot()
    ).toMatchSnapshot('button-neutral.png');
  });

  // test('With Autofocus', async ({ page }) => {
  //   await page.goto('/iframe.html?id=library-button--with-autofocus');

  //   expect(
  //     await page.locator('#root :nth-child(1)').first().screenshot()
  //   ).toMatchSnapshot('button-with-autofocus.png');
  // });

  test('With Disabled', async ({ page }) => {
    await page.goto('/iframe.html?id=library-button--with-disabled');

    expect(
      await page.locator('#root :nth-child(1)').first().screenshot()
    ).toMatchSnapshot('button-with-disabled.png');
  });
});
