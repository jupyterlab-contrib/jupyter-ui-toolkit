import { test, expect } from '@playwright/test';

test.describe('Button', () => {
  test('Default', async ({ page }) => {
    await page.goto('/iframe.html?id=button--default');

    expect(await page.locator('jp-button').screenshot()).toMatchSnapshot(
      'button-default.png'
    );
  });

  test('Error', async ({ page }) => {
    await page.goto('/iframe.html?id=button--error');

    expect(await page.locator('jp-button').screenshot()).toMatchSnapshot(
      'button-error.png'
    );
  });

  test('Neutral', async ({ page }) => {
    await page.goto('/iframe.html?id=button--neutral');

    expect(await page.locator('jp-button').screenshot()).toMatchSnapshot(
      'button-neutral.png'
    );
  });

  test('Lightweight', async ({ page }) => {
    await page.goto('/iframe.html?id=button--lightweight');

    expect(await page.locator('jp-button').screenshot()).toMatchSnapshot(
      'button-lightweight.png'
    );
  });

  // test('With Autofocus', async ({ page }) => {
  //   await page.goto('/iframe.html?id=button--with-autofocus');

  //   expect(
  //     await page.locator('jp-button').screenshot()
  //   ).toMatchSnapshot('button-with-autofocus.png');
  // });

  test('With Disabled', async ({ page }) => {
    await page.goto('/iframe.html?id=button--with-disabled');

    expect(await page.locator('jp-button').screenshot()).toMatchSnapshot(
      'button-with-disabled.png'
    );
  });

  test('With Start Icon', async ({ page }) => {
    await page.goto('/iframe.html?id=button--with-start-icon');

    expect(await page.locator('jp-button').screenshot()).toMatchSnapshot(
      'button-with-start-icon.png'
    );
  });

  test('Icon Only', async ({ page }) => {
    await page.goto('/iframe.html?id=button--icon-only');

    expect(await page.locator('jp-button').screenshot()).toMatchSnapshot(
      'button-icon-only.png'
    );
  });
});
