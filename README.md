
# 🚀 QE Studio – Unified Automation Testbed  
_Playwright · Appium · API · Smart UI · JMeter · HyperExecute · Azure DevOps_

This repository provides a **single unified automation framework** to execute **Web UI, Mobile UI, API, Smart UI, and Performance tests** using **LambdaTest HyperExecute**, fully integrated with **Azure DevOps CI/CD**.

It supports **JavaScript & TypeScript Playwright**, **Appium (Android & iOS)**, **API automation**, **Smart UI visual testing**, and **JMeter-based performance testing**.

---

## 📌 Phase-2 Rollout Goals (Completed)

✔ Successful sample executions  
✔ Unified CI/CD pipeline  
✔ Selective test execution via parameters  
✔ HyperExecute-based scalable execution  
✔ Centralized reporting & artifacts  

---

## 🧱 Technology Stack

| Area | Tool |
|----|----|
| Web UI | Playwright (JS & TS) |
| Mobile | Appium (Android & iOS) |
| API | Rest Assured (via HyperExecute) |
| Visual Testing | Smart UI (HyperExecute) |
| Performance | JMeter |
| CI/CD | Azure DevOps Pipelines |
| Cloud Grid | LambdaTest HyperExecute |

---

## 📂 Repository Structure (High Level)

```

.
├── Playwright-TS/
├── API-RestAssured-hyper/
├── Hyperexecute-smart-ui/
├── hyperexecute-appium-testng+ADO/
│   └── yaml/
│       ├── android/
│       └── ios/
├── Performance-JMeter/
│   └── performance.jmx
├── azure-pipelines.yaml
└── package.json

````

---

## 🛠️ Local Setup

### Prerequisites

- **Node.js** ≥ 18.x
- **Java JDK** (required for JMeter)
- **JMeter** (optional for local execution)
- **LambdaTest credentials**
  - `LT_USERNAME`
  - `LT_ACCESS_KEY`

---

### Install Dependencies

```bash
npm install
npx playwright install --with-deps
````

---

## 🧪 Playwright Test Execution

Scripts available via `package.json`:

| Script        | Command                    | Description                         |
| ------------- | -------------------------- | ----------------------------------- |
| Playwright TS | `npm run test:ts`          | Runs TS tests from `Playwright-TS/` |
| JS Single     | `npm run test:js`          | Runs a single JS test               |
| JS Parallel   | `npm run test:js-parallel` | Runs JS tests in parallel           |
| All UI        | `npm run test:all`         | Runs all Playwright suites          |

---

## 📱 Mobile Automation (Appium)

Executed **only via Azure Pipeline** using **HyperExecute**.

Supported configurations:

* Android Real Device (Single & Multiple)
* Android Emulator (Single & Multiple)
* iOS Real Device (Single & Multiple)
* iOS Simulator (Single)

Each configuration is triggered sequentially using dedicated HyperExecute YAML files.

---

## 🌐 API Automation (HyperExecute)

* REST Assured based API tests
* Executed via HyperExecute CLI
* Controlled using Azure Pipeline parameter `RUN_API`

---

## 🎨 Smart UI (Visual Testing)

* Visual regression testing using **LambdaTest Smart UI**
* Executed via HyperExecute
* Enabled/disabled using pipeline parameter `RUN_SMART_UI`

---

## 📈 Performance Testing (JMeter)

### Local Execution

```powershell
jmeter -n `
  -t Performance-JMeter/performance.jmx `
  -l results.jtl `
  -e -o Performance-JMeter/reports
```

### CI Execution

* Triggered via **LambdaTest HyperExecute API**
* Controlled using pipeline parameter `RUN_JMETER`
* HTML performance dashboard is published as a **build artifact**

---

## ☁️ Azure DevOps Pipeline

### Trigger

```yaml
trigger:
  - main
```

### Selective Execution Parameters

| Parameter        | Purpose             |
| ---------------- | ------------------- |
| `RUN_PLAYWRIGHT` | Web UI execution    |
| `RUN_API`        | API tests           |
| `RUN_SMART_UI`   | Visual testing      |
| `RUN_APPIUM`     | Mobile execution    |
| `RUN_JMETER`     | Performance testing |

Each module runs **only if its parameter is enabled**.

---

## 📊 Reports & Artifacts

✔ JUnit test results published
✔ Playwright & Appium results combined
✔ JMeter HTML dashboard published as build artifact

---

## 🔐 Required Pipeline Variables

Set these securely in Azure DevOps:

```
LT_USERNAME
LT_ACCESS_KEY
```

---

## 🧹 .gitignore Recommendations

```
test-results/
surefire-reports/
reports/
results.jtl
jmeter.log
node_modules/
```

---

## ✅ Current Status

* Pipeline is **production-ready**
* All automation layers integrated
* Phase-2 rollout objectives achieved

---

### 🚦 Next Optional Enhancements

* Parallel HyperExecute job orchestration
* Allure unified reporting
* Test selection via tags/groups
* Environment-based config switching

---

👩‍💻 **Maintained by QE Studio Automation Team**

```

---

If you want, next I can:
- ✅ Add **Allure reporting section**
- ✅ Create **ARCHITECTURE.md**
- ✅ Add **Pipeline screenshots checklist**
- ✅ Optimize pipeline for **parallel execution**

Just tell me 👍
```
