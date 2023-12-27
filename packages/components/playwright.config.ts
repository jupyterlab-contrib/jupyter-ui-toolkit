import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  testMatch: 'src/**/*.test.ts',
  webServer: {
    command: 'yarn run start:ci',
    url: 'http://localhost:6006/iframe.html?id=accordion--default',
    timeout: 5 * 60 * 1000,
    // It is safe to reuse the server for stories testing
    reuseExistingServer: true
  },
  use: {
    baseURL: process.env.TARGET_URL ?? 'http://localhost:6006',
    trace: 'on-first-retry',
    launchOptions: {
      // Force slow motion to let storybook the time to update styles
      slowMo: 40
    }
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] }
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] }
    }
  ],
  reporter: [
    [process.env.CI ? 'github' : 'list'],
    ['html', { open: process.env.CI ? 'never' : 'on-failure' }]
  ]
};

export default config;
