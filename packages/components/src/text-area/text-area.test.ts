// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto('/iframe.html?id=text-area--default');

  expect(await page.locator('jp-text-area').screenshot()).toMatchSnapshot(
    'text-area-default.png'
  );
});

test('With Placeholder', async ({ page }) => {
  await page.goto('/iframe.html?id=text-area--with-placeholder');

  expect(await page.locator('jp-text-area').screenshot()).toMatchSnapshot(
    'text-area-with-placeholder.png'
  );
});

test('With Autofocus', async ({ page }) => {
  await page.goto('/iframe.html?id=text-area--with-autofocus');

  expect(await page.locator('jp-text-area').screenshot()).toMatchSnapshot(
    'text-area-with-autofocus.png'
  );
});

test('With Disabled', async ({ page }) => {
  await page.goto('/iframe.html?id=text-area--with-disabled');

  expect(await page.locator('jp-text-area').screenshot()).toMatchSnapshot(
    'text-area-with-disabled.png'
  );
});

test('With Max Length', async ({ page }) => {
  await page.goto('/iframe.html?id=text-area--with-max-length');

  expect(await page.locator('jp-text-area').screenshot()).toMatchSnapshot(
    'text-area-with-max-length.png'
  );
});

test('With Readonly', async ({ page }) => {
  await page.goto('/iframe.html?id=text-area--with-readonly');

  expect(await page.locator('jp-text-area').screenshot()).toMatchSnapshot(
    'text-area-with-readonly.png'
  );
});
