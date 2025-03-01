const { expect } = require('@playwright/test');
class CheckoutPage{

    constructor(page){
        this.CreditCardNumber=page.locator("form div.field:has-text('Credit Card Number ') input");
        this.expiryDate=page.locator("div:has-text('Expiry Date ')").locator('select');
        this.CVVCode=page.locator("form div.field:has-text('CVV Code ') input");
        this.nameOnCard=page.locator("form div.field:has-text('Name on Card ') input");
        this.applyCoupon=page.locator("form div.field:has-text('Apply Coupon ') input");
        // this.apply=page.getByRole("button",{name:"Apply Coupon"});

        this.country=page.locator("[placeholder*='Country']");
        this.dropdownList=page.locator(".ta-results");
        this.email=page.locator("label[type='text']");

        this.placeorder=page.locator(".action__submit ");
    }


    async personalInformation(){
    await this.CreditCardNumber.fill('9999 9999 9999 9999');
    await this.expiryDate.first().selectOption('02');
    await this.expiryDate.last().selectOption('04');
    await this.CVVCode.fill('726');
    await this.nameOnCard.fill('rahul');
    await this.applyCoupon.fill('Offer Applied');
    // await this.apply.click();
    }

    async ShippingInformation(email){
        await this.country.pressSequentially('ind');
        const dropdown=await this.dropdownList;
        await dropdown.waitFor();
        const optionsCount= await dropdown.locator("button").count();
        for(let i=0;i<optionsCount;i++){
            const text=await dropdown.locator("button").nth(i).textContent();
            if(text===" India"){
                await dropdown.locator("button").nth(i).click();
                break;
            }
        }
        await expect(this.email).toHaveText(email);
    }

    async placeOrder(){
        await this.placeorder.click();
    }
}
module.exports={CheckoutPage};