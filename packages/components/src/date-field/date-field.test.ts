// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { test, expect, Page } from '@playwright/test';

// WebKit renders today's date as the placeholder of an empty date input, which
// would make the snapshots change every day. Mask the input in WebKit.
function screenshotOptions(page: Page, browserName: string) {
  return browserName === 'webkit'
    ? { mask: [page.locator('jp-date-field .control')] }
    : {};
}

test('Default', async ({ page, browserName }) => {
  await page.goto('/iframe.html?id=components-date-field--default');

  expect(
    await page
      .locator('jp-date-field')
      .screenshot(screenshotOptions(page, browserName))
  ).toMatchSnapshot('date-field-default.png');
});

test('With Autofocus', async ({ page, browserName }) => {
  await page.goto('/iframe.html?id=components-date-field--with-autofocus');

  expect(
    await page
      .locator('jp-date-field')
      .screenshot(screenshotOptions(page, browserName))
  ).toMatchSnapshot('date-field-with-autofocus.png');
});

test('With Disabled', async ({ page, browserName }) => {
  await page.goto('/iframe.html?id=components-date-field--with-disabled');

  expect(
    await page
      .locator('jp-date-field')
      .screenshot(screenshotOptions(page, browserName))
  ).toMatchSnapshot('date-field-with-disabled.png');
});

test('With Readonly', async ({ page, browserName }) => {
  await page.goto('/iframe.html?id=components-date-field--with-readonly');

  expect(
    await page
      .locator('jp-date-field')
      .screenshot(screenshotOptions(page, browserName))
  ).toMatchSnapshot('date-field-with-readonly.png');
});

test('With Start Icon', async ({ page, browserName }) => {
  await page.goto('/iframe.html?id=components-date-field--with-start-icon');

  expect(
    await page
      .locator('jp-date-field')
      .screenshot(screenshotOptions(page, browserName))
  ).toMatchSnapshot('date-field-with-start-icon.png');
});

test('Error', async ({ page, browserName }) => {
  await page.goto('/iframe.html?id=components-date-field--with-error');

  expect(
    await page
      .locator('jp-date-field')
      .screenshot(screenshotOptions(page, browserName))
  ).toMatchSnapshot('date-field-error.png');
});
