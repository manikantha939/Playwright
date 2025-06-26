import {test as baseTest} from '@playwright/test'

interface  TestDataForOrder {
        productName: string;
        email: string;
        password: string;
    };

exports.customTest= baseTest.extend<{testDataForOrder:TestDataForOrder}>(
    {
       testDataForOrder:{
            "productName": "ADIDAS ORIGINAL",
            "email": "testingthetest1234567@gmail.com",
            "password": "Password@123"
       } 
    }
)