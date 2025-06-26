import {test, expect} from '@playwright/test'
import { customTest } from '../Utils/test-base'
import { POManager } from '../PageObjects_ts/POManager';
// Json-> String -> object
const dataSet=JSON.parse(JSON.stringify(require('../Utils/PlaceorderTestData.json')));

for(const data of dataSet){
test(`Client App Login for ${data.productName}`, async({page})=>{
    const poManager=new POManager(page,data.productName);
    const loginPage=poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(data.email,data.password);
    
    const dashboard=poManager.getDashboard();
    await dashboard.searchProductAddCart(data.productName);
    await dashboard.navigateToCart();
    
    const cartpage=poManager.getCartPage();
    let isPresent=await cartpage.verifyCart();
    expect(isPresent).toBeTruthy();
    await cartpage.checkout();

    const checkoutPage=poManager.getCheckoutPage();
    await checkoutPage.personalInformation();
    await checkoutPage.ShippingInformation(data.email);
    await checkoutPage.placeOrder();

    const orderConfirmPage=poManager.getOrderConfirmPage();
    const expectedOrderId=await orderConfirmPage.verifyTheOrder();
    orderConfirmPage.myOrders();

    const ordersPage=poManager.getOrdersPage();
    const actualOrderId=await ordersPage.verfiyOrder(expectedOrderId);
    expect(expectedOrderId.includes(actualOrderId)).toBeTruthy();
})
}


customTest(`Client App Login`, async({page, testDataForOrder})=>{
    const poManager=new POManager(page,testDataForOrder.productName);
    const loginPage=poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(testDataForOrder.email,testDataForOrder.password);
    
    const dashboard=poManager.getDashboard();
    await dashboard.searchProductAddCart(testDataForOrder.productName);
    await dashboard.navigateToCart();
    
    const cartpage=poManager.getCartPage();
    let isPresent=await cartpage.verifyCart();
    expect(isPresent).toBeTruthy();
    await cartpage.checkout();
})