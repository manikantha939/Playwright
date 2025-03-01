const {test}=require('@playwright/test');

test('valid login scenario',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    const username=page.locator('#username');
    const password=page.locator('[type="password"]');
    const signIn=page.locator('#signInBtn');

    await username.fill('rahulshettyacademy');
    await password.fill('learning');
    await signIn.click();
    let label = await page.locator('.card-body a').allTextContents();
    console.log(label)
    // await page.waitForTimeout(3000);

    // let label = await page.locator('.card-body a').allTextContents();
    // console.log(label)
    // console.log('-------------------------------------------------')
    // let label1 = await page.locator('.card-body a').first().textContent();
    // let label4 = await page.locator('.card-body a').last().textContent();
    // let label2 = await page.locator('.card-body a').nth(1).textContent();
    // let label3 = await page.locator('.card-body a').nth(2).textContent();
    // console.log(label1)
    // console.log(label2)
    // console.log(label3)
    // console.log(label4)
    // console.log('-------------------------------------------------')
    // for(let key in label){
    //     console.log(label[key])
    // }

    // console.log('-------------------------------------------------')
    // const count = await page.locator('.card-body a').count();
    // for (let i = 0; i < count; i++) {
    //     const label = await page.locator('.card-body a').nth(i).textContent();
    //     console.log(`Label ${i + 1}:`, label);
    // }

    
    // let match =await page.locator('.card-body a').filter({hasText: 'i'}).allTextContents();
    // let counts=match.length;
    // console.log(counts)
    // while(counts>0){
    //     console.log(match[counts-1]);
    //     counts--;
    // }
})