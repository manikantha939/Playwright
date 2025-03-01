const{expect}=require('@playwright/test');
class OrderConfirmPage{
 
    constructor(page){
        this.confirmMessage=page.locator(".hero-primary");
        this.listOfProducts=page.locator(".box .ng-star-inserted label");
        this.orders=page.locator("button[routerlink*='myorders']");
        }
    
    async verifyTheOrder(){
        await expect(this.confirmMessage).toHaveText(" Thankyou for the order. ")
        const orderId=await this.listOfProducts.textContent();
        return orderId;
    }

    async myOrders(){
        await this.orders.click();
    }
}
module.exports={OrderConfirmPage}