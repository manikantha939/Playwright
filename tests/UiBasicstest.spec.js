const {test, expect}=require('@playwright/test')

// test('First Palywright test', async({browser})=>{
//     const context= await browser.newContext();
//     const page= await context.newPage();
//     await page.goto("https://www.google.com/");

//     //get title - assertion
//     console.log(await page.title());
//     await expect(page).toHaveTitle('Google');
// })


test('Second Palywright Test', async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    await page.locator('#username').fill('rahulshetty');
  
    await page.locator("[type='password']").fill('learning');
    await page.locator('#signInBtn').click();
    await page.waitForTimeout(3000);
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect')

})

test('Browser context-validating error login', async({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    const username=page.locator('#username');
    const password=page.locator("[type='password']");
    const signInBtn=page.locator('#signInBtn');
    const message=page.locator("[style*='block']");

    await username.fill('rahulshetty');
    await password.fill('learning');
    await signInBtn.click();
    console.log(await message.textContent());
    await expect(message).toContainText('Incorrect')

    await username.fill("");
    await username.fill('rahulshettyacademy');
    await signInBtn.click();
    await page.waitForTimeout(3000);
})