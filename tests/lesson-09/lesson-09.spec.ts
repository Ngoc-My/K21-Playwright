import { test, expect } from '@playwright/test';

test.describe('Material page tests', async () => {
    test.beforeEach(async ({ page }) => {
        await test.step("Step 1: Open material page", async () => {
            await page.goto("https://material.playwrightvn.com")
        });
    });

    test('Test 1: Test selector by id', async ({ page }) => {
        await test.step("Step 2: Click user registration", async () => {
            const adsLoc = page.locator("#ads-here");
            await expect(adsLoc).toHaveText(/Tìm hiểu thêm/);
        });
    })
});