// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto('/iframe.html?id=tree-item--default');

  expect(await page.locator('jp-tree-item').screenshot()).toMatchSnapshot(
    'tree-item-default.png'
  );
});

test('Selected', async ({ page }) => {
  await page.goto('/iframe.html?id=tree-item--selected');

  expect(await page.locator('jp-tree-item').screenshot()).toMatchSnapshot(
    'tree-item-selected.png'
  );
});

test('With Before Content', async ({ page }) => {
  await page.goto('/iframe.html?id=tree-item--with-before-content');

  expect(await page.locator('jp-tree-item').screenshot()).toMatchSnapshot(
    'tree-item-with-before-content.png'
  );
});

test('With After Content', async ({ page }) => {
  await page.goto('/iframe.html?id=tree-item--with-after-content');

  expect(await page.locator('jp-tree-item').screenshot()).toMatchSnapshot(
    'tree-item-with-after-content.png'
  );
});
