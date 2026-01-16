import { Page } from "@playwright/test";

export async function captureDOM(page: Page): Promise<string> {
  return await page.content();
}
