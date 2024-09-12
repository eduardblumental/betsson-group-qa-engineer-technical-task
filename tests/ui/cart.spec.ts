import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/loginPage";
import { InventoryPage } from "../../pages/inventoryPage";
import { CartPage } from "../../pages/cartPage";

test.describe("Testing cart functionality", () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;
  let cartPage: CartPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);

    await loginPage.goto();
    await loginPage.login("standard_user", "secret_sauce");
  });

  test("Add backpack to cart and verify", async ({ page }) => {
    await inventoryPage.addBackpackToCart();
    await inventoryPage.goToCart();

    const cartItem = await cartPage.getFirstItemText();
    expect(cartItem).toContain("Sauce Labs Backpack");
  });

  test("Remove backpack from cart and verify", async ({ page }) => {
    await inventoryPage.addBackpackToCart();
    await inventoryPage.goToCart();
    await cartPage.removeBackpackFromCart();

    const cartItemsCount = await cartPage.getInventoryItemsCount();
    expect(cartItemsCount).toBe(0);
  });
});
