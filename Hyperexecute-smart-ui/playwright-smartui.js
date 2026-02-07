const { chromium } = require('playwright')
const { expect } = require('@playwright/test');

(async () => {
  const capabilities = {
    'browserName': 'Chrome', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
    'browserVersion': 'latest',
    'LT:Options': {
      'platform': 'Windows 10',
      'build': 'Playwright SmartUI Build',
      'name': 'Playwright SmartUI Test',
      'user': 'namratabtestmuai',
      'accessKey': 'LT_PSoZP3yLuQ6v1kiUv0q0joiAgc8XQgk5qFUFxIorVxd0h05',
      'network': true,
      'video': true,
      'console': true,
      "smartUIProjectName": "ADO-smart",
      'smartUIBaseline': true,
      'goog:chromeOptions': ['--start-maximized']
    }
  }

  const githubURL = process.env.GITHUB_URL
  if(githubURL){
    capabilities['LT:Options']['github'] = {
      url : githubURL
    }
  }

  const browser = await chromium.connect({
    wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
  })

  const page = await browser.newPage()

  await page.goto('https://www.lambdatest.com')

  // Add the following command in order to take screenshot in SmartUI
 await page.evaluate((_) => {}, 
`lambdatest_action: ${JSON.stringify({ 
 action: 'smartui.takeScreenshot',
 arguments: { 
 fullPage: true,
 screenshotName: 'ScreenShot-1'
 } 
})}`)



    console.log("------reached here")
  try {
    expect(title).toEqual('LambdaTest - Search')
    // Mark the test as completed or failed
    await page.evaluate((_) => {}, 
`lambdatest_action: ${JSON.stringify({ 
 action: 'smartui.takeScreenshot',
 arguments: { 
 fullPage: true,
 screenshotName: 'ScreenShot-2'
 } 
})}`)
    console.log("------reached here - 1")
  } catch {
    console.log("------reached here - 2")

    await page.evaluate((_) => {}, 
`lambdatest_action: ${JSON.stringify({ 
 action: 'smartui.takeScreenshot',
 arguments: { 
 fullPage: true,
 screenshotName: 'ScreenShot-3'
 } 
})}`)
  }

  await page.goto("https://www.lambdatest.com")

      console.log("------reached here - 3")

  await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'lambdatest-website' }
    })}`)
    console.log("------reached here - 3")
    await page.evaluate((_) => {}, 
`lambdatest_action: ${JSON.stringify({ 
 action: 'smartui.takeScreenshot',
 arguments: { 
 fullPage: true,
 screenshotName: 'ScreenShot-4'
 } 
})}`)
    console.log("------reached here - 3")

  await page.goto("https://www.lambdatest.com/support/api-doc/")
 await page.evaluate((_) => {}, 
`lambdatest_action: ${JSON.stringify({ 
 action: 'smartui.takeScreenshot',
 arguments: { 
 fullPage: true,
 screenshotName: 'ScreenShot-5'
 } 
})}`)

    await browser.close()
})()
