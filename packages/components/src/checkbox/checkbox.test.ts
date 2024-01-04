// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto('/iframe.html?id=components-checkbox--default');

  expect(await page.locator('jp-checkbox').screenshot()).toMatchSnapshot(
    'checkbox-default.png'
  );
});

test('Checked', async ({ page }) => {
  await page.goto('/iframe.html?id=components-checkbox--with-checked');

  expect(await page.locator('jp-checkbox').screenshot()).toMatchSnapshot(
    'checkbox-with-checked.png'
  );
});

test('Disabled', async ({ page }) => {
  await page.goto('/iframe.html?id=components-checkbox--with-disabled');

  expect(await page.locator('jp-checkbox').screenshot()).toMatchSnapshot(
    'checkbox-disabled.png'
  );
});

test('Indeterminate', async ({ page }) => {
  await page.goto('/iframe.html?id=components-checkbox--with-indeterminate');

  expect(await page.locator('jp-checkbox').screenshot()).toMatchSnapshot(
    'checkbox-indeterminate.png'
  );
});

test('Error', async ({ page }) => {
  await page.goto('/iframe.html?id=components-checkbox--with-error');

  expect(await page.locator('jp-checkbox').screenshot()).toMatchSnapshot(
    'checkbox-error.png'
  );
});
