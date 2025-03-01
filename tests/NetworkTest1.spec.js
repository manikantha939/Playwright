const { test, request, expect } = require("@playwright/test");

test('Security testrequest intercept',async({page})=>{

  await page.goto('https://rahulshettyacademy.com/client');
    await page.locator('#userEmail').fill("testingthetest1234567@gmail.com");
    await page.locator('#userPassword').fill('Password@123');
    await page.locator('[value="Login"]').click();
    await page.waitForLoadState('networkidle');
    await page.locator('.card-body b').first().waitFor();

    await page.locator("button[routerlink*='myorders']").click();
    page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
    route=> route.continue({url:"https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=676c559ce2b5443b1f029abe45"}))
    await page.locator("button:has-text('View')").first().click();
    // await page.pause();
    await expect(page.locator("p").last()).toHaveText("You are not authorize to view this order")
  })
