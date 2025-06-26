import { expect, type Locator, type Page } from '@playwright/test';

let message1 : string="Hello"
message1="bye";
console.log(message1);

let age : number =20;
console.log(age)


function add(a:number, b:number):number {
    return a+b;
}
console.log(add(3,2)) 


let user: {name:String, age:number, location:string}={name: "Bob" , age:34, location:""}
user.location="bangalore";
console.log(user)


class Cartpage{

    page:Page
    cartList:Locator
    productName:Locator
    checkoutButton:Locator
    constructor(page,productName){
        this.cartList= page.locator('div li');
        this.productName= page.locator("h3:has-text('ADIDAS ORIGINAL')");
        this.productName= page.locator(`h3:has-text("${productName}")`);
        this.checkoutButton=page.locator("button:has-text('Checkout')");
    }
}