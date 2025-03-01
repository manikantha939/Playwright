class Dashboard{

    constructor(page){
        this.products=page.locator('.card-body');
        this.productText=page.locator('.card-body b');
        this.cart=page.locator("[routerlink*='cart']");

    }

    async searchProductAddCart(productName){
        await this.productText.first().waitFor();
        const Titles= await this.productText.allTextContents();
            console.log(Titles);
        
            const count= await this.products.count();
            for(let i=0; i<count;i++){
                if(await this.products.nth(i).locator('b').textContent() === productName){
                    await this.products.nth(i).locator("text= Add To Cart").click()
                    break;
                }
            }
    }

    async navigateToCart(){
        await this.cart.click();
    }
}


module.exports={Dashboard};