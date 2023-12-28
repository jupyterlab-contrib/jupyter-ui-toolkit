// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto('/iframe.html?id=components-number-field--default');

  expect(await page.locator('jp-number-field').screenshot()).toMatchSnapshot(
    'number-field-default.png'
  );
});

test('With Placeholder', async ({ page }) => {
  await page.goto('/iframe.html?id=components-number-field--with-placeholder');

  expect(await page.locator('jp-number-field').screenshot()).toMatchSnapshot(
    'number-field-with-placeholder.png'
  );
});

test('With Autofocus', async ({ page }) => {
  await page.goto('/iframe.html?id=components-number-field--with-autofocus');

  expect(await page.locator('jp-number-field').screenshot()).toMatchSnapshot(
    'number-field-with-autofocus.png'
  );
});

test('With Disabled', async ({ page }) => {
  await page.goto('/iframe.html?id=components-number-field--with-disabled');

  expect(await page.locator('jp-number-field').screenshot()).toMatchSnapshot(
    'number-field-with-disabled.png'
  );
});

test('With Size', async ({ page }) => {
  await page.goto('/iframe.html?id=components-number-field--with-size');

  expect(await page.locator('jp-number-field').screenshot()).toMatchSnapshot(
    'number-field-with-size.png'
  );
});

test('With Max Length', async ({ page }) => {
  await page.goto('/iframe.html?id=components-number-field--with-max-length');

  expect(await page.locator('jp-number-field').screenshot()).toMatchSnapshot(
    'number-field-with-max-length.png'
  );
});

test('With Readonly', async ({ page }) => {
  await page.goto('/iframe.html?id=components-number-field--with-readonly');

  expect(await page.locator('jp-number-field').screenshot()).toMatchSnapshot(
    'number-field-with-readonly.png'
  );
});

test('With Start Icon', async ({ page }) => {
  await page.goto('/iframe.html?id=components-number-field--with-start-icon');

  expect(await page.locator('jp-number-field').screenshot()).toMatchSnapshot(
    'number-field-with-start-icon.png'
  );
});

test('Error', async ({ page }) => {
  await page.goto('/iframe.html?id=components-number-field--with-error');

  expect(await page.locator('jp-number-field').screenshot()).toMatchSnapshot(
    'number-field-error.png'
  );
});
