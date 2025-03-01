const{test,expect}=require("@playwright/test");

test("Screenshot & Visaul Comparison", async({page})=>{
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
        // await page.pause();
        const elementDisplay=await page.locator('#displayed-text');
        await page.locator('#displayed-text').screenshot({path:'partialScreenshot.png'});
        await expect(elementDisplay).toBeVisible();
        await page.locator('#hide-textbox').click();
        await page.screenshot({path:'screenshot.png'});

        await expect(elementDisplay).toBeHidden();
})


test("Visual", async({page})=>{

    await page.goto("https://www.flightaware.com/");
    expect( await page.screenshot()).toMatchSnapshot("flighatware.png");


    // await page.goto('https://google.com/');
    // expect(await page.locator("[aria-label='Gmail ']").textContent()).toMatchSnapshot("test.txt");
    // expect(await page.screenshot()).toMatchSnapshot("landing1.png");
    

})