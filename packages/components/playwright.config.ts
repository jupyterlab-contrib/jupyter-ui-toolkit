import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  testMatch: '**/*.test.ts',
  webServer: {
    command: 'yarn run start:ci',
    port: 6006,
    timeout: 120 * 1000,
    // It is safe to reuse the server for stories testing
    reuseExistingServer: true
  },
  use: {
    baseURL: process.env.TARGET_URL ?? 'http://localhost:6006',
    trace: 'on-first-retry'
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
  ]
};

export default config;
