import { test, expect } from '@playwright/test';

test.afterEach(async ({ page }, testInfo) => {
  const status = testInfo.status === 'passed' ? 'passed' : 'failed';
  const remark = testInfo.status === 'passed'
    ? `Test Passed: ${testInfo.title}`
    : `Test Failed: ${testInfo.title}`;

  await page.evaluate(() => {}, 
    `lambdatest_action: ${JSON.stringify({
      action: "setTestStatus",
      arguments: {
        status: status,
        remark: remark
      }
    })}`
  );
});

test('homepage should have correct title', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/', { timeout: 30000 });

  // Login
  await page.locator('a[role="button"] >> span:has-text("My account")').hover();
  await page.locator('span', { hasText: 'Login' }).click();
  await expect(page).toHaveTitle('Account Login');
  await page.locator('#input-email').fill('saranshk@lambdatest.com');
  await page.locator('#input-password').fill('Skum@1009');
  await page.locator('input[value="Login"]').click();
  await expect(page).toHaveTitle('My Account');
  
  // Search for iPhone
  await page.locator('xpath=(//input[@placeholder="Search For Products"])[1]').fill('iPhone');
  await page.locator('button', { hasText: 'Search' }).click();
  
  // Filter by in stock items
  await page.waitForTimeout(3000);
  await page.locator('xpath=(//div[contains(@class, "custom-checkbox")]//label[@class="custom-control-label"][text()="In stock"])[2]').click();
  
  // Add product to cart
  await page.waitForTimeout(3000);
  await page.locator('h4.title >> a[href*="product_id=78"]').click();
  await page.waitForTimeout(3000);
  await page.locator('xpath=//div[contains(@class,"no-gutters")]//button[@title="Add to Cart"][contains(@class,"cart-78")]').click();
  
  // Open Cart and remove item
  await page.locator('#notification-box-top >> a:has-text("View Cart")').click();
  await page.waitForTimeout(3000);
  await expect(page.locator('td.text-left >> a:has-text("iPhone")')).toBeVisible();
  await page.locator('i[class*="fa-times-circle"]').click();
  
  // Logout
  await page.waitForTimeout(3000);
  await page.locator('a[role="button"] >> span:has-text("My account")').hover();
  await page.locator('span', { hasText: 'Logout' }).click();
  await page.waitForTimeout(2000);
  await expect(page).toHaveTitle('Account Logout');

});
