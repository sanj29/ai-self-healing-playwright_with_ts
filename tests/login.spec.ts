import { test, expect } from "@playwright/test";
import { executeWithHealing } from "../core/selfHealingExecutor";

test("Valid user logs in", async ({ page }) => {
  await page.goto("/login");

  await page.fill('input[name="username"]', 'standard_user');
  await page.fill('input[name="password"]', 'secret_sauce');

  await executeWithHealing(
    page,
    async () => {
      await page.click('button[type="submit"]');
    },
    'button[type="submit"]'
  );

  await expect(page).toHaveURL("/dashboard");
});
