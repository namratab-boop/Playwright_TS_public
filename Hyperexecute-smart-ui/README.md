# HyperExecute Smart UI (Playwright)

This repository provides an automated **visual regression testing** setup using **Playwright** and **LambdaTest Smart UI**, optimized for **high‑speed execution with HyperExecute**.

---

## Table of Contents

* [Pre-requisites](#pre-requisites)
* [Step 1: Download HyperExecute CLI](#step-1-download-hyperexecute-cli)
* [Step 2: Install Dependencies](#step-2-install-dependencies)
* [Step 3: Set Environment Variables](#step-3-set-environment-variables)
* [Step 4: Run Your Tests](#step-4-run-your-tests)
* [Project Structure](#project-structure)
* [Smart UI Visual Capture](#smart-ui-visual-capture)
* [Viewing Results](#viewing-results)
* [Support](#support)

---

## Pre-requisites

### Step 1: Create a Smart UI Project

Before running tests, create a **Smart UI Project** in LambdaTest. This project groups all your visual builds.

1. Go to the **Projects** page in LambdaTest.
2. Click **New Project**.
3. Select **Web** as the platform (for Playwright execution).
4. Enter:

   * Project name
   * Approvers for visual changes
   * Tags (optional, for filtering)
5. Click **Submit**.

### Step 2: Configure the Project

Use the created **project name** in your capability configuration inside `playwright-smartui.js`.

### System Requirements

Ensure the following are installed:

1. **Node.js** (LTS version recommended)
2. **npm** (bundled with Node.js)
3. **LambdaTest Account** (Username & Access Key)
4. **HyperExecute CLI** for your operating system

> 🔐 LambdaTest credentials are available on your **Profile Page**.

---

## Step 1: Download HyperExecute CLI

Download the HyperExecute CLI for your OS and place it in the **project root directory** (same level as `hyperexecute.yaml`).

| Operating System | Download Link                                                                                                                                    |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Windows**      | [https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe](https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe) |
| **macOS**        | [https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute](https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute)           |
| **Linux**        | [https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute](https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute)             |

### Grant Execute Permission (macOS & Linux)

```bash
chmod +x ./hyperexecute
```

**macOS users:**
If execution is blocked, go to:
**System Settings → Privacy & Security → General** and click **Allow**.

---

## Step 2: Install Dependencies

Install all required dependencies using npm:

```bash
npm install
```

---

## Step 3: Set Environment Variables

For security, set LambdaTest credentials as environment variables.

### Windows (PowerShell)

```powershell
$env:LT_USERNAME="YOUR_USERNAME"
$env:LT_ACCESS_KEY="YOUR_ACCESS_KEY"
```

### macOS / Linux

```bash
export LT_USERNAME="YOUR_USERNAME"
export LT_ACCESS_KEY="YOUR_ACCESS_KEY"
```

---

## Step 4: Run Your Tests

Trigger execution on the HyperExecute grid using the following command.

### Windows (PowerShell)

```powershell
cd .\Hyperexecute-smart-ui\

./hyperexecute.exe --user YOUR_USERNAME --key YOUR_ACCESS_KEY --config hyperexecute.yaml
```

### macOS / Linux

```bash
cd ./Hyperexecute-smart-ui/

./hyperexecute --user YOUR_USERNAME --key YOUR_ACCESS_KEY --config hyperexecute.yaml
```

> 💡 Tip: Use `--verbose` to debug discovery or connection issues.

---

## Project Structure

```text
├── hyperexecute.exe / hyperexecute
├── hyperexecute.yaml
├── playwright-smartui.js
├── lambdatest-setup.js
├── playwright.config.js
├── package.json
└── node_modules/
```

### File Descriptions

* **hyperexecute(.exe)** – CLI to trigger test execution on LambdaTest
* **hyperexecute.yaml** – Orchestration and execution configuration
* **playwright-smartui.js** – Playwright test with Smart UI visual hooks
* **lambdatest-setup.js** – LambdaTest browser and capability configuration
* **playwright.config.js** – Playwright configuration
* **package.json** – Project dependencies and scripts

---

## Smart UI Visual Capture

Visual snapshots are captured using the LambdaTest Smart UI action inside Playwright:

```javascript
await page.evaluate(() => {},
  `lambdatest_action: ${JSON.stringify({
    action: 'smartui.takeScreenshot',
    arguments: {
      fullPage: true,
      screenshotName: 'Your_Screenshot_Name'
    }
  })}`
);
```

These screenshots are compared against **baseline images** in Smart UI for visual regression.

---

## Viewing Results

* **Execution Logs:** Available in the **HyperExecute Dashboard**
* **Visual Reports:** Review, compare, and approve baselines in the **Smart UI Dashboard**

---

## Support

* 📘 Documentation: LambdaTest Smart UI & HyperExecute Docs
* 📧 Email: [support@lambdatest.com](mailto:support@lambdatest.com)

---

✅ You are now ready to run **high‑speed visual regression tests** using **Playwright**, **Smart UI**, and **HyperExecute**.
