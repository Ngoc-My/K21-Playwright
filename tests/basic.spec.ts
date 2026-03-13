
import { test } from '@playwright/test';

// Test case:
// Step 1: Di den trang material
// Step 2: Click vao bai hoc 1

test('Demo test 01', async ({ page }) => {
    await test.step('Step 1: Di den trang material', async () => {
        //  Navigation
        await page.goto("https://material.playwrightvn.com")

    });

    await test.step('Step 2: Click vao bai hoc 1', async () => {
        //  const baiHoc1Locator = page.locator("//a[@href='01-xpath-register-page.html']");
        const baiHoc1Locator = page.getByRole('link', { name: 'Bài học 1: Register Page (có đủ các element)' });
        //  click
        await baiHoc1Locator.click();
        // Check vao o Traveling
        await page.locator("//input[@id='traveling']").check();
        await page.locator("//input[@id='cooking']").check();
        // paste


    });
});
