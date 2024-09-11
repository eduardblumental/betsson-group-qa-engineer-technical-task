import { Page, Locator } from "@playwright/test";

export function byTestId(page: Page, testId: string): Locator {
  return page.locator(`[data-test="${testId}"]`);
}
