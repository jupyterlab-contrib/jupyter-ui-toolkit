// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { test, expect } from '@playwright/test';

test.describe('Breadcrumb Item', () => {
  test('Default', async ({ page }) => {
    await page.goto('/iframe.html?id=breadcrumb-item--default');

    expect(
      await page.locator('jp-breadcrumb-item').screenshot()
    ).toMatchSnapshot('breadcrumb-item-default.png');
  });

  test('Without href', async ({ page }) => {
    await page.goto('/iframe.html?id=breadcrumb-item--without-href');

    expect(
      await page.locator('jp-breadcrumb-item').screenshot()
    ).toMatchSnapshot('breadcrumb-item-without-href.png');
  });

  test('With Start Icon', async ({ page }) => {
    await page.goto('/iframe.html?id=breadcrumb-item--with-start-icon');

    expect(
      await page.locator('jp-breadcrumb-item').screenshot()
    ).toMatchSnapshot('breadcrumb-item-with-start-icon.png');
  });

  test('With End Icon', async ({ page }) => {
    await page.goto('/iframe.html?id=breadcrumb-item--with-end-icon');

    expect(
      await page.locator('jp-breadcrumb-item').screenshot()
    ).toMatchSnapshot('breadcrumb-item-with-end-icon.png');
  });
});
