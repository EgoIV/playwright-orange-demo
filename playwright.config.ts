import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: '.',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: process.env.BASE_URL,
    
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry'
  },

  globalSetup: require.resolve('./global-setup'),

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'all test',
      testMatch: ['ui/tests/**/*.test.ts'],
      testIgnore: ['ui/tests/login.test.ts'],
      use: { 
        storageState: 'storageState/adminStorage.json',
      },
    },
    {
      name: 'login test',
      testMatch: ['ui/tests/login.test.ts']
    },
    {
      name: 'all test firefox',
      testMatch: ['ui/tests/**/*.test.ts'],
      testIgnore: ['ui/tests/login.test.ts'],
      use: { 
        storageState: 'storageState/adminStorage.json',
        ...devices['Desktop Firefox']
      },
    },
    {
      name: 'login test firefox',
      testMatch: ['ui/tests/login.test.ts'],
      use: { ...devices['Desktop Firefox'] }
    },
    {
      name: 'api',
      testMatch: ['api/tests/**/*.test.ts'],
      use: {
        baseURL: process.env.API_BASE_URL,
      },
    },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
