// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { test, expect } from '@playwright/test';

// The radios fade to their disabled style with a CSS transition; take the
// screenshot once transitions have ended.
const screenshotOptions = { animations: 'disabled' as const };

test('Default', async ({ page }) => {
  await page.goto('/iframe.html?id=components-radio-group--default');

  expect(
    await page.locator('jp-radio-group').screenshot(screenshotOptions)
  ).toMatchSnapshot('radio-group-default.png');
});

test('Vertical', async ({ page }) => {
  await page.goto('/iframe.html?id=components-radio-group--vertical');

  expect(
    await page.locator('jp-radio-group').screenshot(screenshotOptions)
  ).toMatchSnapshot('radio-group-vertical.png');
});

test('Disabled', async ({ page }) => {
  await page.goto('/iframe.html?id=components-radio-group--with-disabled');
  // The group propagates the disabled state to its radios asynchronously.
  await expect(page.locator('jp-radio:not([disabled])')).toHaveCount(0);

  expect(
    await page.locator('jp-radio-group').screenshot(screenshotOptions)
  ).toMatchSnapshot('radio-group-disabled.png');
});

test('Read-only', async ({ page }) => {
  await page.goto('/iframe.html?id=components-radio-group--with-read-only');
  // The group propagates the read-only state to its radios asynchronously.
  await expect(page.locator('jp-radio:not([readonly])')).toHaveCount(0);

  expect(
    await page.locator('jp-radio-group').screenshot(screenshotOptions)
  ).toMatchSnapshot('radio-group-read-only.png');
});

test('Error', async ({ page }) => {
  await page.goto('/iframe.html?id=components-radio-group--with-error');

  expect(
    await page.locator('jp-radio-group').screenshot(screenshotOptions)
  ).toMatchSnapshot('radio-group-error.png');
});
