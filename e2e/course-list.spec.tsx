import { test, expect } from "@playwright/test";

test("create course delete course", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("button", { name: "Create" })).toBeVisible();
});
