const{test,expect,request}= require('@playwright/test');

const loginPayload={
    "userEmail": "porago7946@lendfash.com",
    "userPassword": "Password@123"
}
let token;

test.beforeAll( async({})=>{
    const apiContext=await request.newContext();
    const loginResponse=await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
        {
            data:loginPayload
        }
    )
    expect(loginResponse.ok()).toBeTruthy();
    const loginResponseJson=await loginResponse.json();
    token= loginResponseJson.token;
    console.log(token)
})

test("Clinet App Login", async({page})=>{

    page.addInitScript(value=>{
        window.localStorage.setItem('token',value)
    }, token);

    const productName='ZARA COAT 3';
    const email="testingthetest1234567@gmail.com";
    const password="Password@123";
    const products=page.locator('.card-body');
    await page.goto('https://rahulshettyacademy.com/client');
    
    await page.locator('.card-body b').first().waitFor();
    await page.locator('.card-body').filter({hasText:'ZARA COAT 3'}).getByRole("button",{name:' Add To Cart'}).click();
    
    await page.getByRole("listitem").getByRole("button",{name:'Cart'}).click();

    await page.locator('div li').first().waitFor();
    
    await expect(page.getByText("ZARA COAT 3")).toBeVisible();
    await page.getByRole("button", {name:'Checkout'}).click();
    
    await page.locator("form div.field:has-text('Credit Card Number ') input").fill('9999 9999 9999 9999');
    await page.locator("div:has-text('Expiry Date ')").locator('select').first().selectOption('02');
    await page.locator("div:has-text('Expiry Date ')").locator('select').last().selectOption('04');
    await page.locator("form div.field:has-text('CVV Code ') input").fill('726');
    await page.locator("form div.field:has-text('Name on Card ') input").fill('rahul');
    await page.locator("form div.field:has-text('Apply Coupon ') input").fill('Offer Applied');

    await page.getByPlaceholder("Select Country").pressSequentially("ind");
    await page.getByRole("Button",{name:"India"}).nth(1).click();

    await expect(page.locator("label[type='text']")).toHaveText(email);
    await page.getByText("Place Order").click();

    await expect(page.getByText(" Thankyou for the order. ")).toHaveText(" Thankyou for the order. ");
    const orderId=await page.getByText(" | 676593fde2b5443b1ffc23e5 | ").textContent();

    await page.getByRole("listitem").getByRole("ORDERS").click();
    await page.locator("tbody").waitFor();
    
    page.getByRole("table").filter({hasText:orderId}).getByRole("button",{name:'View'}).click();
    
    const orderIdDetails=await page.locator("div .col-text").textContent()
    console.log(orderIdDetails)
    await expect(orderId.includes(orderIdDetails)).toBeTruthy();

})