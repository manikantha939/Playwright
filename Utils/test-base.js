const base=require('@playwright/test');


exports.customTest= base.test.extend(
    {
       testDataForOrder:{
            "productName": "ADIDAS ORIGINAL",
            "email": "testingthetest1234567@gmail.com",
            "password": "Password@123"
       } 
    }
)