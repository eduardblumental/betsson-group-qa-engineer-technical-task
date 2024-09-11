import { Page, Locator } from "@playwright/test";
import { byTestId } from "../utils";

export class CartPage {
  private inventoryItems: Locator;
  private removeBackpackFromCartButton: Locator;

  constructor(page: Page) {
    this.inventoryItems = byTestId(page, "inventory-item");
    this.removeBackpackFromCartButton = byTestId(page, "remove-sauce-labs-backpack");
  }

  async getFirstItemText(): Promise<string | null> {
    return await this.inventoryItems.first().textContent();
  }

  async removeBackpackFromCart(): Promise<void> {
    await this.removeBackpackFromCartButton.click();
  }

  async getInventoryItemsCount(): Promise<number> {
    return await this.inventoryItems.count();
  }
}
