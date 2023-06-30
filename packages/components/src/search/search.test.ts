// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto('/iframe.html?id=components-search--default');

  expect(await page.locator('jp-search').screenshot()).toMatchSnapshot(
    'search-default.png'
  );
});

test('With Placeholder', async ({ page }) => {
  await page.goto('/iframe.html?id=components-search--with-placeholder');

  expect(await page.locator('jp-search').screenshot()).toMatchSnapshot(
    'search-with-placeholder.png'
  );
});

test('With Autofocus', async ({ page }) => {
  await page.goto('/iframe.html?id=components-search--with-autofocus');

  expect(await page.locator('jp-search').screenshot()).toMatchSnapshot(
    'search-with-autofocus.png'
  );
});

test('With Disabled', async ({ page }) => {
  await page.goto('/iframe.html?id=components-search--with-disabled');

  expect(await page.locator('jp-search').screenshot()).toMatchSnapshot(
    'search-with-disabled.png'
  );
});

test('With Size', async ({ page }) => {
  await page.goto('/iframe.html?id=components-search--with-size');

  expect(await page.locator('jp-search').screenshot()).toMatchSnapshot(
    'search-with-size.png'
  );
});

test('With Maxlength', async ({ page }) => {
  await page.goto('/iframe.html?id=components-search--with-max-length');

  expect(await page.locator('jp-search').screenshot()).toMatchSnapshot(
    'search-with-maxlength.png'
  );
});

test('With Search Icon', async ({ page }) => {
  await page.goto('/iframe.html?id=components-search--with-search-icon');

  expect(await page.locator('jp-search').screenshot()).toMatchSnapshot(
    'search-with-search-icon.png'
  );
});
