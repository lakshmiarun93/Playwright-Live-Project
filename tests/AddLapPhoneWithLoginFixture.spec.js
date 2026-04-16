import { test, expect } from "../utils/fixture";

import { Addtocart } from "../pages/Addtocart";

test.beforeEach(async ({ page }) => {
  await page.goto("https://demoblaze.com/");
});


test("add to cart phone", async ({ login, page }) => {
  const obj = new Addtocart(page);

  page.on("dialog", async (dialog) => {
    await dialog.accept();
  });

  await obj.clickonphone();
  await obj.addtocart();
  await obj.purchaseproduct();
});

test("add to cart laptop", async ({ login, page }) => {
  const obj2 = new Addtocart(page);

  page.on("dialog", async (dialog) => {
    await dialog.accept();
  });

  await obj2.clickonlaptop();
  await obj2.addtocart();
  await obj2.purchaseproduct();
});