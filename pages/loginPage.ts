import { Locator, Page } from "@playwright/test";
import { byTestId } from "../utils";

export class LoginPage {
  private usernameInput: Locator;
  private passwordInput: Locator;
  private loginButton: Locator;
  private errorMessage: Locator;

  constructor(page: Page) {
    this.usernameInput = byTestId(page, "username");
    this.passwordInput = byTestId(page, "password");
    this.loginButton = byTestId(page, "login-button");
    this.errorMessage = byTestId(page, "error");
  }

  async goto(): Promise<void> {
    await this.usernameInput.page().goto("https://www.saucedemo.com/");
  }

  async login(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async getErrorMessage(): Promise<string> {
    const errorMessage = await this.errorMessage.textContent();
    return errorMessage ? errorMessage : "";
  }
}
