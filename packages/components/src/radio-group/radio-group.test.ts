// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto('/iframe.html?id=radio-group--default');

  expect(await page.locator('jp-radio-group').screenshot()).toMatchSnapshot(
    'radio-group-default.png'
  );
});

test('Vertical', async ({ page }) => {
  await page.goto('/iframe.html?id=radio-group--vertical');

  expect(await page.locator('jp-radio-group').screenshot()).toMatchSnapshot(
    'radio-group-vertical.png'
  );
});

test('Disabled', async ({ page }) => {
  await page.goto('/iframe.html?id=radio-group--with-disabled');

  expect(await page.locator('jp-radio-group').screenshot()).toMatchSnapshot(
    'radio-group-disabled.png'
  );
});

test('Read-only', async ({ page }) => {
  await page.goto('/iframe.html?id=radio-group--with-read-only');

  expect(await page.locator('jp-radio-group').screenshot()).toMatchSnapshot(
    'radio-group-read-only.png'
  );
});
