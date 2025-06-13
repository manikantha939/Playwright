const{test}=require('@playwright/test')

test.only("navigation", async({page})=>{
    await page.goto("https://www.google.com")
})