const{test,request, expect}=require('@playwright/test');
const {APIUtils}=require('../Utils/APIUtils');

const createOrderPayload={
    "orders": [
        {
            "country": "India",
            "productOrderedId": "6581cade9fd99c85e8ee7ff5"
        }
    ]
}
const loginPayload={
    "userEmail": "porago7946@lendfash.com",
    "userPassword": "Password@123"
}
let response;
test.beforeAll(async({})=>{
    const apiContext=await request.newContext();
    const apiUtils=new APIUtils(apiContext, loginPayload);
    response=await apiUtils.createOrder(createOrderPayload);
})

test("Place the order", async({page})=>{
    page.addInitScript(value=>{
        window.localStorage.setItem("token",value)
    }, response.token);

    await page.goto("https://rahulshettyacademy.com/client/");
    
    await page.locator("button[routerlink*='myorders']").click();

    // await page.getByRole("listitem").getByRole("ORDERS").click();
    await page.locator("tbody").waitFor();
    
    // await page.getByRole("table").filter({hasText:orderId}).getByRole("button",{name:'View'}).click();
    // const orderIdDetails=await page.locator("div .col-text").textContent()
    // console.log(orderIdDetails)
    // await expect(orderId.includes(orderIdDetails)).toBeTruthy();

    
    const rows=page.locator("tbody tr");
    const count1= await rows.count();
    console.log(count1)
    for(let i=0;i<count1;i++){
        const rowOrderId=await rows.nth(i).locator("th").textContent();
        if(response.orderId.includes(rowOrderId)){
            await rows.nth(i).locator("button").first().click();
            break;
        }   
    }
    const orderIdDetails=await page.locator("div .col-text").textContent()
    console.log(orderIdDetails)
    await expect(response.orderId.includes(orderIdDetails)).toBeTruthy();
})