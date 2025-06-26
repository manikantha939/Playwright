import { test } from '@playwright/test'

test("test browser launch", async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.waitForLoadState('networkidle');
    await page.pause();
    page.click('button:"right"')
})