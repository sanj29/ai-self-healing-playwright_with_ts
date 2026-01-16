import { captureDOM } from "../utils/domSnapshot";
import { healSelector } from "../ai/selectorHealer";

export async function executeWithHealing(
  page,
  action: () => Promise<void>,
  failedSelector: string
) {
  try {
    await action();
  } catch (error: any) {
    const dom = await captureDOM(page);

    const healedSelector = await healSelector(
      failedSelector,
      error.message,
      dom
    );

    if (!healedSelector) {
      throw error;
    }

    const exists = await page.locator(healedSelector).count();
    if (!exists) {
      throw error;
    }

    await page.click(healedSelector);
  }
}
