import { test, expect } from '@playwright/test';

test.describe('Button', () => {
  test('Default', async ({ page }) => {
    await page.goto('/iframe.html?id=library-button--default');

    expect(
      await page.locator('jp-button').first().screenshot()
    ).toMatchSnapshot('button-default.png');
  });

  test('Error', async ({ page }) => {
    await page.goto('/iframe.html?id=library-button--error');

    expect(
      await page.locator('jp-button').first().screenshot()
    ).toMatchSnapshot('button-error.png');
  });

  test('Neutral', async ({ page }) => {
    await page.goto('/iframe.html?id=library-button--neutral');

    expect(
      await page.locator('jp-button').first().screenshot()
    ).toMatchSnapshot('button-neutral.png');
  });

  // test('With Autofocus', async ({ page }) => {
  //   await page.goto('/iframe.html?id=library-button--with-autofocus');

  //   expect(
  //     await page.locator('jp-button').first().screenshot()
  //   ).toMatchSnapshot('button-with-autofocus.png');
  // });

  test('With Disabled', async ({ page }) => {
    await page.goto('/iframe.html?id=library-button--with-disabled');

    expect(
      await page.locator('jp-button').first().screenshot()
    ).toMatchSnapshot('button-with-disabled.png');
  });

  test('With Start Icon', async ({ page }) => {
    await page.goto('/iframe.html?id=library-button--with-start-icon');

    expect(
      await page.locator('jp-button').first().screenshot()
    ).toMatchSnapshot('button-with-start-icon.png');
  });
});
