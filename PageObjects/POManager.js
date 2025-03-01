const {LoginPage}=require('../PageObjects/LoginPage');
const {Dashboard} = require('../PageObjects/Dashboard');
const {Cartpage}=require('../PageObjects/Cartpage');
const { CheckoutPage } = require('../PageObjects/CheckoutPage');
const {OrderConfirmPage}=require('../PageObjects/OrderConfirmPage');
const {OrdersPage} =require('../PageObjects/OrdersPage');

class POManager{
    constructor(page, productName){
        this.page=page
        this.productName=productName;
        this.loginPage=new LoginPage(this.page)
        this.dashboard=new Dashboard(this.page);
        this.cartpage=new Cartpage(this.page, this.productName);
        this.checkoutPage=new CheckoutPage(this.page)
        this.orderConfirmPage=new OrderConfirmPage(this.page);
        this.OrdersPage=new OrdersPage(this.page);
    }

    getLoginPage(){
        return this.loginPage;
    }

    getDashboard(){
        return this.dashboard;
    }

    getCartPage(){
        return this.cartpage;
    }

    getCheckoutPage(){
        return this.checkoutPage;
    }

    getOrderConfirmPage(){
        return this.orderConfirmPage;
    }

    getOrdersPage(){
        return this.OrdersPage;
    }
}

module.exports={POManager};