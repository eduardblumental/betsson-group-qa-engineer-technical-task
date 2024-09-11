import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";

test("Valid login", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login("standard_user", "secret_sauce");

  expect(page.url()).toBe("https://www.saucedemo.com/inventory.html");
});

test("Login with empty credentials", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login("", "");

  const errorMessage = await loginPage.getErrorMessage();
  expect(errorMessage).toContain("Username is required");
});

test("Invalid login", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login("invalid_user", "wrong_password");

  const errorMessage = await loginPage.getErrorMessage();
  expect(errorMessage).toContain("Username and password do not match");
});
