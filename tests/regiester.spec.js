const {test, expect}=require('@playwright/test');
// const { promises } = require('dns');

// test('login to the application', async({page})=>{
//     await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

//     const username=page.locator('#username');
//     const password=page.locator('[type="password"]');
//     const signIn=page.locator('#signInBtn');
//     await username.fill('rahulshettyacademy');
//     await password.fill('learning');
//     await signIn.click();
// })

test('Registering the user', async({page})=>{
    await page.goto('https://rahulshettyacademy.com/client/');

    const email=page.locator('#userEmail');
    const password=page.locator('#userPassword');
    const login=page.locator('#login');
    // const registerHere=page.locator('text="Register here"');

    // await registerHere.click();

    // const firstname=page.locator('#firstName');
    // const lastname=page.locator('#lastName');
    // const emailfield=page.locator('#userEmail');
    // const phonenumber=page.locator('#userMobile');
    // const occupation=page.locator('[formcontrolname="occupation"]');
    // const option=page.locator('select[formcontrolname="occupation"]');
    // const Gender=page.locator('input[value="Male"]');
    // const newPassword=page.locator('#userPassword');
    // const confirmPassword=page.locator('#confirmPassword');
    // const checkbox=page.locator('input[type="checkbox"]');
    // const register=page.locator('#login');

    // await firstname.fill('dom1234567');
    // await lastname.fill('torrado1234567');
    // await emailfield.fill('testingthetest1234567@gmail.com');
    // await phonenumber.fill('9999999999');
    // await occupation.click();
    // await option.selectOption('Engineer');
    // await Gender.click();
    // await newPassword.fill('Password@123');
    // await confirmPassword.fill('Password@123');
    // await checkbox.click();
    // await register.click();
    
    // const message=page.locator('text=Account Created Successfully');
    // await expect(message).toHaveText('Account Created Successfully');
    // const loginButton=page.locator('text=Login');
    // await loginButton.click();

    // await page.waitForTimeout(3000);

    await email.fill('porago7946@lendfash.com');
    await password.fill('Password@123');
    await login.click();

    // await page.waitForLoadState('networkidle')
    await page.locator('div.card').locator('div b').first().waitFor();
    const Item=await page.locator('div.card').locator('div b').first().textContent();
    console.log(Item)
})

test('Ui Controls', async({page})=>{
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    const username=page.locator('#username');
    const password=page.locator('[type="password"]');
    const signIn=page.locator('#signInBtn');
    const dropdown=page.locator('select.form-control');
    const userRadioButton=page.locator('.radiotextsty');
    const okayBtn= page.locator('#okayBtn');

    await username.fill('rahulshettyacademy');
    await password.fill('learning');
    // await page.pause();
    await dropdown.selectOption('Consultant');// Selecting the option from the dropdown
    await userRadioButton.last().click();
    await okayBtn.click();

    console.log(await userRadioButton.last().isChecked());
    await expect(userRadioButton.last()).toBeChecked();

    await page.locator('#terms').click();
    expect(await page.locator('#terms').isChecked()).toBeTruthy();
    await page.locator('#terms').uncheck();// for check box uncheck we can use uncheck()
    expect(await page.locator('#terms').isChecked()).toBeFalsy();

    await expect(page.locator('.blinkingText').first()).toHaveAttribute('class','blinkingText');// attribute scenario
})

test('Handling multiple tabs', async({browser})=>{
    const context= await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.waitForLoadState('networkidle');

    const [newpage]=await Promise.all([
        context.waitForEvent('page'),
        page.locator('.blinkingText', {hasText: 'Free Access to'}).click(),
    ])
    
    // const [test]=await Promise.all([
    //     context.newPage(),
    // ])
    // await test.goto('https://www.google.com')
    let newPage2= await context.newPage();
    
    let message=await newpage.locator('.red').textContent();
    console.log(message)
    let texts= message.split('@');
    let email=texts[1].split(" ")[0]
    // console.log(email)

    await page.waitForTimeout(2000);
    await page.locator('#username').fill(email);
    console.log('--->'+ await page.locator('#username').textContent());

    await newPage2.goto('https://www.google.com/');
    // await page.pause();

})


test('practicing the promises', async({browser})=>{

    const context=await browser.newContext();
    const page3=await context.newPage();
    await page3.goto('https://www.google.com/');

    const[test, test1]=await Promise.all([
        context.newPage(),
        context.newPage(),
        ]);
    // const[test1]=await Promise.all([
    //         context.newPage(),
    //     ]);
    await page3.pause();
    await test.goto('https://temp-mail.org/en/');

    await test1.goto('https://demowebshop.tricentis.com/jewelry');
    const allPages= context.pages();
    for(let p of allPages){
        console.log(await p.url())
    }
})


// test.only('pacticing the multiple window and promises',async({browser})=>{
//     const context=await browser.newContext();
//     const page =await context.newPage();

//     await page.goto('https://demoqa.com/browser-windows');

//     const[newPage]=await Promise.all([
//         context.waitForEvent('page'),
//         page.locator('#tabButton').click(),
//     ]);

//     await newPage.waitForLoadState('networkidle');
//     expect(await newPage.locator('#sampleHeading')).toContainText('This is a sample page');
//     let text=await newPage.locator('#sampleHeading').textContent();
//     console.log(text);
//     await newPage.pause();

// })

test('Automation Practice', async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    await page.pause();

    const elementDisplay=await page.locator('#displayed-text');
    await expect(elementDisplay).toBeVisible();
    await page.locator('#hide-textbox').click();

    await expect(elementDisplay).toBeHidden();
})