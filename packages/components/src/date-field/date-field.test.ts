// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { test, expect } from '@playwright/test';

// WebKit renders today's date as the placeholder of an empty date input, which
// would make the snapshots change every day. Hide that text in WebKit, while
// keeping the size of the field.
function screenshotOptions(browserName: string) {
  return browserName === 'webkit'
    ? { style: '::-webkit-datetime-edit { visibility: hidden; }' }
    : {};
}

test('Default', async ({ page, browserName }) => {
  await page.goto('/iframe.html?id=components-date-field--default');

  expect(
    await page
      .locator('jp-date-field')
      .screenshot(screenshotOptions(browserName))
  ).toMatchSnapshot('date-field-default.png');
});

test('With Autofocus', async ({ page, browserName }) => {
  await page.goto('/iframe.html?id=components-date-field--with-autofocus');

  expect(
    await page
      .locator('jp-date-field')
      .screenshot(screenshotOptions(browserName))
  ).toMatchSnapshot('date-field-with-autofocus.png');
});

test('With Disabled', async ({ page, browserName }) => {
  await page.goto('/iframe.html?id=components-date-field--with-disabled');

  expect(
    await page
      .locator('jp-date-field')
      .screenshot(screenshotOptions(browserName))
  ).toMatchSnapshot('date-field-with-disabled.png');
});

test('With Readonly', async ({ page, browserName }) => {
  await page.goto('/iframe.html?id=components-date-field--with-readonly');

  expect(
    await page
      .locator('jp-date-field')
      .screenshot(screenshotOptions(browserName))
  ).toMatchSnapshot('date-field-with-readonly.png');
});

test('With Start Icon', async ({ page, browserName }) => {
  await page.goto('/iframe.html?id=components-date-field--with-start-icon');

  expect(
    await page
      .locator('jp-date-field')
      .screenshot(screenshotOptions(browserName))
  ).toMatchSnapshot('date-field-with-start-icon.png');
});

test('Error', async ({ page, browserName }) => {
  await page.goto('/iframe.html?id=components-date-field--with-error');

  expect(
    await page
      .locator('jp-date-field')
      .screenshot(screenshotOptions(browserName))
  ).toMatchSnapshot('date-field-error.png');
});
