import { test } from '@playwright/test'

test("test browser launch", async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.waitForLoadState('networkidle');
    await page.pause();
    let ele=page.getByRole('button', { name: 'Login' })
    
    await ele.click('selector',{button:"right"});
})