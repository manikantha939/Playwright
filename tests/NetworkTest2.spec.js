const { test, request, expect } = require("@playwright/test");

test("Security testrequest intercept", async ({ page }) => {
  page.route("**/*.css", route=> route.abort());
  page.on("request",request=> console.log(request.url()));
  page.on('response', response=> console.log(response.url(), response.status()))
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  // await page.pause();
});
