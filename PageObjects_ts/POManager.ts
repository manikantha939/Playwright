import { LoginPage } from '../PageObjects/LoginPage';
import { Dashboard } from '../PageObjects/Dashboard';
import { Cartpage } from '../PageObjects/Cartpage';
import { CheckoutPage } from '../PageObjects/CheckoutPage';
import { OrderConfirmPage } from '../PageObjects/OrderConfirmPage';
import { OrdersPage } from '../PageObjects/OrdersPage';
import { Page } from '@playwright/test';

export class POManager{
    page: Page
    productName:String;
    loginPage:LoginPage;
    dashboard:Dashboard;
    cartpage:Cartpage;
    checkoutPage:CheckoutPage;
    orderConfirmPage:OrderConfirmPage;
    OrdersPage:OrdersPage;
    constructor(page:Page, productName:String){
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