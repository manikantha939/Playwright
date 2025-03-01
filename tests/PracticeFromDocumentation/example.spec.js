import { test, expect } from "@playwright/test";

// test("has title", async ({ page }) => {
//   await page.goto("https://playwright.dev/");
//   await expect(page).toHaveTitle(/testing /);
// });

// test("get Started", async ({ page }) => {
//   await page.goto("https://playwright.dev/");
//   await page.getByRole("link", { name: "Get started" }).click();
//   await expect(page.getByRole("heading", { name: "Installation" })).toBeVisible();
// });


test.describe('navigation',()=>{
    test.beforeEach(async({page})=>{
        await page.goto('https://playwright.dev/');
    });

    test('main navigation',async({page})=>{
        await expect(page).toHaveTitle(/Playwright/);
    })
})
