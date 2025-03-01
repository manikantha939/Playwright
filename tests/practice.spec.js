const {test} =require('@playwright/test');

test('practise the test case', async({browser})=>{

    const context= await browser.newContext();
    const page=await context.newPage();
    await page.goto('https://www.amazon.in/')
})