import { test, expect } from '@playwright/test';

test('Calander Validaion', async({page})=>{


    const date="18";
    const month="10";
    const year="2021";
    const expDate=[month,date,year];
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");

    // await page.pause();
    await page.locator(".react-date-picker__inputGroup").click();

    await page.locator(".react-calendar__navigation__label").click();
    await page.locator(".react-calendar__navigation__label").click();

    await page.getByRole("button",{name:year, exact: true }).click();
    await page.locator(".react-calendar__year-view__months__month").nth(Number(month)-1).click();
    await page.locator("//abbr[text()='"+date+"']").click();
    
    // await page.getByText(year, {exact:true}).click();
    // await page.locator(".react-calendar__year-view__months__month").nth(month-1).click();
    // await page.locator(".react-calendar__month-view__days__day").getByText(date).click();

    const actDate= await page.locator(".react-date-picker__inputGroup [type='number']");
    const actdatecount= await actDate.count();
    for(let i=0;i< actdatecount;i++){
        const value= await actDate.nth(i).getAttribute("value");
        console.log(`Input ${i + 1} value: ${value}`);
        await expect(value).toEqual(expDate[i]);
    }
})