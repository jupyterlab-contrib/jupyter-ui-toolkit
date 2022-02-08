// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto('/iframe.html?id=text-field--default');

  expect(await page.locator('jp-text-field').screenshot()).toMatchSnapshot(
    'text-field-default.png'
  );
});

test('With Placeholder', async ({ page }) => {
  await page.goto('/iframe.html?id=text-field--with-placeholder');

  expect(await page.locator('jp-text-field').screenshot()).toMatchSnapshot(
    'text-field-with-placeholder.png'
  );
});

test('With Autofocus', async ({ page }) => {
  await page.goto('/iframe.html?id=text-field--with-autofocus');

  expect(await page.locator('jp-text-field').screenshot()).toMatchSnapshot(
    'text-field-with-autofocus.png'
  );
});

test('With Disabled', async ({ page }) => {
  await page.goto('/iframe.html?id=text-field--with-disabled');

  expect(await page.locator('jp-text-field').screenshot()).toMatchSnapshot(
    'text-field-with-disabled.png'
  );
});

test('With Size', async ({ page }) => {
  await page.goto('/iframe.html?id=text-field--with-size');

  expect(await page.locator('jp-text-field').screenshot()).toMatchSnapshot(
    'text-field-with-size.png'
  );
});

test('With Type', async ({ page }) => {
  await page.goto('/iframe.html?id=text-field--with-type');

  expect(await page.locator('jp-text-field').screenshot()).toMatchSnapshot(
    'text-field-with-type.png'
  );
});

test('With Max Length', async ({ page }) => {
  await page.goto('/iframe.html?id=text-field--with-max-length');

  expect(await page.locator('jp-text-field').screenshot()).toMatchSnapshot(
    'text-field-with-max-length.png'
  );
});

test('With Readonly', async ({ page }) => {
  await page.goto('/iframe.html?id=text-field--with-readonly');

  expect(await page.locator('jp-text-field').screenshot()).toMatchSnapshot(
    'text-field-with-readonly.png'
  );
});

test('With Start Icon', async ({ page }) => {
  await page.goto('/iframe.html?id=text-field--with-start-icon');

  expect(await page.locator('jp-text-field').screenshot()).toMatchSnapshot(
    'text-field-with-start-icon.png'
  );
});
