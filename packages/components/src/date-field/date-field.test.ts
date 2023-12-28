// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { test, expect } from '@playwright/test';

test('Default', async ({ page }) => {
  await page.goto('/iframe.html?id=components-date-field--default');

  expect(await page.locator('jp-date-field').screenshot()).toMatchSnapshot(
    'date-field-default.png'
  );
});

test('With Autofocus', async ({ page }) => {
  await page.goto('/iframe.html?id=components-date-field--with-autofocus');

  expect(await page.locator('jp-date-field').screenshot()).toMatchSnapshot(
    'date-field-with-autofocus.png'
  );
});

test('With Disabled', async ({ page }) => {
  await page.goto('/iframe.html?id=components-date-field--with-disabled');

  expect(await page.locator('jp-date-field').screenshot()).toMatchSnapshot(
    'date-field-with-disabled.png'
  );
});

test('With Readonly', async ({ page }) => {
  await page.goto('/iframe.html?id=components-date-field--with-readonly');

  expect(await page.locator('jp-date-field').screenshot()).toMatchSnapshot(
    'date-field-with-readonly.png'
  );
});

test('With Start Icon', async ({ page }) => {
  await page.goto('/iframe.html?id=components-date-field--with-start-icon');

  expect(await page.locator('jp-date-field').screenshot()).toMatchSnapshot(
    'date-field-with-start-icon.png'
  );
});

test('Error', async ({ page }) => {
  await page.goto('/iframe.html?id=components-date-field--with-error');

  expect(await page.locator('jp-date-field').screenshot()).toMatchSnapshot(
    'date-field-error.png'
  );
});
