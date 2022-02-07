// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { test, expect } from '@playwright/test';

test.describe('Breadcrumb', () => {
  test('Default', async ({ page }) => {
    await page.goto('/iframe.html?id=breadcrumb--default');

    expect(await page.locator('jp-breadcrumb').screenshot()).toMatchSnapshot(
      'breadcrumb-default.png'
    );
  });

  test('With Custom Children', async ({ page }) => {
    await page.goto('/iframe.html?id=breadcrumb--with-custom-children');

    expect(await page.locator('jp-breadcrumb').screenshot()).toMatchSnapshot(
      'breadcrumb-with-custom-children.png'
    );
  });

  test('With Start Icon', async ({ page }) => {
    await page.goto('/iframe.html?id=breadcrumb--with-start-icon');

    expect(await page.locator('jp-breadcrumb').screenshot()).toMatchSnapshot(
      'breadcrumb-with-start-icon.png'
    );
  });

  test('With End Icon', async ({ page }) => {
    await page.goto('/iframe.html?id=breadcrumb--with-end-icon');

    expect(await page.locator('jp-breadcrumb').screenshot()).toMatchSnapshot(
      'breadcrumb-with-end-icon.png'
    );
  });
});
