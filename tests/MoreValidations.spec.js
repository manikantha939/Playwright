const {test}=require('@playwright/test')

test.describe.configure({mode:'parallel'})
// test.beforeEach('launching the browser', async({page})=>{
//     await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
// })

test('@web Hidden validation', async({page})=>{
    // await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    // await page.pause();

    const elementDisplay=await page.locator('#displayed-text');
    await expect(elementDisplay).toBeVisible();
    await page.locator('#hide-textbox').click();

    await expect(elementDisplay).toBeHidden();

})

test('Popup validation', async({page})=>{
    await page.goto('https://www.google.com/');
    // await page.pause();
    // await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await page.goBack();
    await page.goForward();
})

test('Alert Popups', async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    // await page.pause();
    page.on('dialog', dailog=> dailog.dismiss())
    // await page.locator('#alertbtn').click();
    await page.locator('#confirmbtn').click();
})  


test('Mouse Hover', async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    // await page.pause();
    await page.locator('#mousehover').hover();
    await page.locator("a:has-text('Top')").click();
}) 

test('I Frame', async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    
    const framesPage=page.frameLocator('#courses-iframe');
    await framesPage.locator("a[href='lifetime-access']:visible").click();

    const text=await framesPage.locator(".content-side h2").textContent();
    console.log(text.split(" ")[1]);
}) 
