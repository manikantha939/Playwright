
const {test, expect}=require('@playwright/test')


let webContext;
let email="testingthetest1234567@gmail.com";
test.beforeAll(async({browser})=>{
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto('https://rahulshettyacademy.com/client');
    await page.locator('#userEmail').fill(email);
    await page.locator('#userPassword').fill('Password@123');
    await page.locator('[value="Login"]').click();
    await page.waitForLoadState('networkidle');
    await context.storageState({path: 'state.json'});
    webContext=await browser.newContext({storageState:"state.json"})
    // console.log(webContext)
})


test('Clinet App Login', async({})=>{
    const productName='ADIDAS ORIGINAL';
    const page=await webContext.newPage();
    await page.goto('https://rahulshettyacademy.com/client')
    const products=page.locator('.card-body');
    
    const Titles= await page.locator('.card-body b').allTextContents();
    console.log(Titles);

    const count= await products.count();
    for(let i=0; i<count;i++){
        if(await products.nth(i).locator('b').textContent() === productName){
            // await page.locator('[routerlink="/dashboard/cart"]').click();
            await products.nth(i).locator("text= Add To Cart").click()
            break;
        }
    }
    
    await page.locator("[routerlink*='cart']").click();
    await page.locator('div li').first().waitFor();
    const bool=await page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible();
    expect(bool).toBeTruthy();

    await page.locator("button:has-text('Checkout')").click();
    
    // await page.locator("div:has-text('Credit Card Number') input").first().fill('9999 9999 9999 9999');
    await page.locator("form div.field:has-text('Credit Card Number ') input").fill('9999 9999 9999 9999');
    await page.locator("div:has-text('Expiry Date ')").locator('select').first().selectOption('02');
    await page.locator("div:has-text('Expiry Date ')").locator('select').last().selectOption('04');
    await page.locator("form div.field:has-text('CVV Code ') input").fill('726');
    // await page.locator("div:has-text('Name on Card ') input").first().fill('rahul');
    await page.locator("form div.field:has-text('Name on Card ') input").fill('rahul');
    // await page.locator("[name='coupon']").fill('Offer Applied');
    await page.locator("form div.field:has-text('Apply Coupon ') input").fill('Offer Applied');

    await page.locator("[placeholder*='Country']").pressSequentially('ind');
    const dropdown=await page.locator(".ta-results");
    await dropdown.waitFor();
    const optionsCount= await dropdown.locator("button").count();
    for(let i=0;i<optionsCount;i++){
        const text=await dropdown.locator("button").nth(i).textContent();
        console.log(text)
        if(text===" India"){
            await dropdown.locator("button").nth(i).click();
            break;
        }
    }
    const text=await page.locator("label[type='text']").textContent();
    console.log(text)

    await expect(page.locator("label[type='text']")).toHaveText(email);
    await page.locator(".action__submit ").click();
    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ")
    const orderId=await page.locator(".box .ng-star-inserted label").textContent();
    console.log(orderId);

    await page.locator("button[routerlink*='myorders']").click();
    await page.locator("tbody").waitFor();
    const rows=page.locator("tbody tr");
    const count1= await rows.count();
    console.log(count1)
    for(let i=0;i<count1;i++){
        const rowOrderId=await rows.nth(i).locator("th").textContent();
        if(orderId.includes(rowOrderId)){
            await rows.nth(i).locator("button").first().click();
            break;
        }   
    }
    const orderIdDetails=await page.locator("div .col-text").textContent()
    console.log(orderIdDetails)
    await expect(orderId.includes(orderIdDetails)).toBeTruthy();
})


test('Test case 2', async({})=>{
    const productName='ADIDAS ORIGINAL';
    const page=await webContext.newPage();
    await page.goto('https://rahulshettyacademy.com/client')
    const products=page.locator('.card-body');
    
    const Titles= await page.locator('.card-body b').allTextContents();
    console.log(Titles);
})