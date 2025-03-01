// @ts-check
const { devices } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config={
  testDir: './tests',
  timeout: 30*1000,
  workers:3,
  expect: {
    timeout: 5000
  },
  retries: 1,
  reporter:'html',
  // reporter: [
  //   ['allure-playwright']
  // ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */

  projects:[
    {
      name:'safari execution',
      use: {
        browserName: 'webkit',
        headless: false,
        screenshot: 'off',
        trace: 'off',
        // ...devices['iPhone 11']
        // viewport:{width:720,height:720}
      },
    },
    {
      name:'chrome',
      use: {
        browserName: 'chromium',
        headless: false,
        screenshot: 'on',
        video:'retain-on-failure',
        trace: 'retain-on-failure',//off,on
        // viewport:{width:720,height:720}
        ...devices['Galaxy S5'],
        ignoreHTTPSErrors:true,
        permissions:['geolocation']
      },
    },
    {
      name:'firefox execution',
      use: {
        browserName: 'firefox',
        headless: true,
        screenshot: 'only-on-failure',
        trace: 'on'
      },
    }
  ]

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
};

module.exports=config;