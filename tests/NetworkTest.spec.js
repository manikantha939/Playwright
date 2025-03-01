const { test, request, expect } = require("@playwright/test");
const { APIUtils } = require("../Utils/APIUtils");

const createOrderPayload = {
  orders: [
    {
      country: "India",
      productOrderedId: "6581cade9fd99c85e8ee7ff5",
    },
  ],
};
const loginPayload = {
  userEmail: "porago7946@lendfash.com",
  userPassword: "Password@123",
};

const fakePayloadOrders = { data: [], message: "No Orders" };
let response;
test.beforeAll(async ({}) => {
  const apiContext = await request.newContext();
  const apiUtils = new APIUtils(apiContext, loginPayload);
  response = await apiUtils.createOrder(createOrderPayload);
});

test("Place the order", async ({ page }) => {
  page.addInitScript((value) => {
    window.localStorage.setItem("token", value);
  }, response.token);

  await page.goto("https://rahulshettyacademy.com/client/");

  await page.route(
    "https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
    async (route) => {
      //intercepting the API response - API response ->{playwright fakeresponse} ->browser-> render data on front end

      const response = await page.request.fetch(route.request());
      let body = JSON.stringify(fakePayloadOrders);
      route.fulfill({
        response,
        body,
      });
    }
  );
  await page.locator("button[routerlink*='myorders']").click();
  await page.waitForResponse(
    "https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*"
  );
  console.log(await page.locator(".mt-4").textContent());
  // await page.pause();
});
