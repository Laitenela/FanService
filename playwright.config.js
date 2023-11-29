import { devices } from '@playwright/dev';

/** @type {import('@playwright/test').PlaywrightTestConfig} */
export const config = {
    projects: [
      {
        name: 'chrome',
        use: { ...devices['Desktop Chrome'] }
      }
    ],
    use: {
        launchOptions: {
            slowMo: 100,
            headless: false
        }
    }
};