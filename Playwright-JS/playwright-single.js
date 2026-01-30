require('dotenv').config();
const { chromium } = require('playwright');
const { expect } = require("expect");
const cp = require('child_process');
const playwrightClientVersion = cp.execSync('npx playwright --version').toString().trim().split(' ')[1];

(async () => {
    console.log('Starting Playwright test...');
    console.log('Playwright version:', playwrightClientVersion);

    const capabilities = {
        'browserName': 'Chrome',
        'browserVersion': 'latest',
        'LT:Options': {
            'platform': 'Windows 10',
            'build': 'Playwright JS Build',
            'name': 'Sample Test',
            'user': process.env.LT_USERNAME,
            'accessKey': process.env.LT_ACCESS_KEY,
            'network': true,
            'video': true,
            'console': true,
            'playwrightClientVersion': playwrightClientVersion,
            'goog:chromeOptions': ['--start-maximized']
        }
    }

    const browser = await chromium.connect({
        wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
    })

    const page = await browser.newPage()

    try {
        // 1. Navigation & Login
        console.log('Navigating to E-commerce site...');
        await page.goto('https://ecommerce-playground.lambdatest.io/', { timeout: 30000 });

        console.log('Performing Login...');
        await page.locator('a[role="button"] >> span:has-text("My account")').hover();
        await page.locator('span', { hasText: 'Login' }).click();

        expect(await page.title()).toBe('Account Login');

        await page.locator('#input-email').fill('saranshk@lambdatest.com');
        await page.locator('#input-password').fill('Skum@1009');
        await page.locator('input[value="Login"]').click();

        expect(await page.title()).toBe('My Account');

        // 2. Search for iPhone
        console.log('Searching for iPhone...');
        await page.locator('xpath=(//input[@placeholder="Search For Products"])[1]').fill('iPhone');
        await page.locator('button', { hasText: 'Search' }).click();

        // 3. Filter by in stock items
        console.log('Filtering items...');
        await page.waitForTimeout(3000);
        await page.locator('xpath=(//div[contains(@class, "custom-checkbox")]//label[@class="custom-control-label"][text()="In stock"])[2]').click();

        // 4. Add product to cart
        console.log('Adding product to cart...');
        await page.waitForTimeout(3000);
        await page.locator('h4.title >> a[href*="product_id=78"]').click();
        await page.waitForTimeout(3000);
        await page.locator('xpath=//div[contains(@class,"no-gutters")]//button[@title="Add to Cart"][contains(@class,"cart-78")]').click();

        // 5. Open Cart and remove item
        console.log('Viewing cart and removing item...');
        await page.locator('#notification-box-top >> a:has-text("View Cart")').click();
        await page.waitForTimeout(3000);

        const isVisible = await page.locator('td.text-left >> a:has-text("iPhone")').isVisible();
        expect(isVisible).toBe(true);

        await page.locator('i[class*="fa-times-circle"]').click();

        // 6. Logout
        console.log('Logging out...');
        await page.waitForTimeout(3000);
        await page.locator('a[role="button"] >> span:has-text("My account")').hover();
        await page.locator('span', { hasText: 'Logout' }).click();
        await page.waitForTimeout(2000);

        expect(await page.title()).toBe('Account Logout');

        // If everything passes, set status to LambdaTest
        await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({
            action: 'setTestStatus',
            arguments: { status: 'passed', remark: 'E-commerce flow completed successfully' }
        })}`);

        console.log('Test PASSED!');
        await teardown(page, browser);

    } catch (e) {
        console.log('Test FAILED!');
        console.error('Error:', e.message);

        // Send failure status to LambdaTest
        await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({
            action: 'setTestStatus',
            arguments: { status: 'failed', remark: e.message }
        })}`);

        await teardown(page, browser);
        throw e;
    }

})().catch(err => {
    console.error('Unexpected error occurred:');
    console.error(err);
    process.exit(1);
});

async function teardown(page, browser) {
    console.log('Cleaning up resources...');
    await page.close();
    await browser.close();
    console.log('Test completed!');
}