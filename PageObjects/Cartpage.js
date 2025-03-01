class Cartpage{

    constructor(page,productName){
        this.cartList= page.locator('div li');
        // this.productName= page.locator("h3:has-text('ADIDAS ORIGINAL')");
        this.productName= page.locator(`h3:has-text("${productName}")`);
        this.checkoutButton=page.locator("button:has-text('Checkout')");
    }

    async verifyCart(){
        await this.cartList.first().waitFor();
        const bool=await this.productName.isVisible();
        return bool;
    }
    
    async checkout(){
        await this.checkoutButton.click();
    }
    
}
module.exports={Cartpage};