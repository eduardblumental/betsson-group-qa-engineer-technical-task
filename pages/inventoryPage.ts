import { Page, Locator } from "@playwright/test";
import { byTestId } from "../utils";

export class InventoryPage {
  private addBackpackToCartButton: Locator;
  private cartLink: Locator;

  constructor(page: Page) {
    this.addBackpackToCartButton = byTestId(page, "add-to-cart-sauce-labs-backpack");
    this.cartLink = byTestId(page, "shopping-cart-link");
  }

  async addBackpackToCart(): Promise<void> {
    await this.addBackpackToCartButton.click();
  }

  async goToCart(): Promise<void> {
    await this.cartLink.click();
  }
}
