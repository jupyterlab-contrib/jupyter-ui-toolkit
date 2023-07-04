// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto('/iframe.html?id=components-menu-item--default');

  expect(await page.locator('jp-menu-item').screenshot()).toMatchSnapshot(
    'menu-item-default.png'
  );
});

test('Disabled', async ({ page }) => {
  await page.goto('/iframe.html?id=components-menu-item--disabled');

  expect(await page.locator('jp-menu-item').screenshot()).toMatchSnapshot(
    'menu-item-disabled.png'
  );
});

test('Checkbox', async ({ page }) => {
  await page.goto('/iframe.html?id=components-menu-item--checkbox');

  expect(await page.locator('jp-menu-item').screenshot()).toMatchSnapshot(
    'menu-item-checkbox.png'
  );
});

test('Radio', async ({ page }) => {
  await page.goto('/iframe.html?id=components-menu-item--radio');

  expect(await page.locator('jp-menu-item').screenshot()).toMatchSnapshot(
    'menu-item-radio.png'
  );
});
