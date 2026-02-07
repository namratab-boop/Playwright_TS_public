# API Testing with RestAssured using LambdaTest HyperExecute

This project demonstrates how to run **API automation tests using RestAssured** on **LambdaTest HyperExecute**. The setup allows you to execute tests faster and in parallel using LambdaTest’s cloud infrastructure.

---

## 📁 Project Structure

```
API-RestAssured-hyper
│
├── .hyperexecute/              # HyperExecute internal configs
├── src/                        # Test source code
│   └── test/java               # RestAssured + TestNG test cases
├── target/                     # Maven build output
├── hyperexecute.yaml           # HyperExecute configuration file
├── hyperexecute.exe            # HyperExecute CLI (Windows)
├── hyperexecute-cli.log        # HyperExecute execution logs
├── pom.xml                     # Maven dependencies & plugins
└── README.md                   # Project documentation
```

---

## 🛠️ Tech Stack Used

* **Java 8+**
* **RestAssured** – API automation
* **TestNG** – Test framework
* **Maven** – Build tool
* **LambdaTest HyperExecute** – Test execution engine

---

## ✅ Prerequisites

Make sure the following are installed on your system:

* Java (JDK 8 or above)
* Maven
* LambdaTest account
* Windows OS (for `hyperexecute.exe`)

Also, export your LambdaTest credentials as environment variables:

```bash
setx LT_USERNAME "<your_username>"
setx LT_ACCESS_KEY "<your_access_key>"
```

Restart the terminal after setting environment variables.

---

## 📦 pom.xml Dependencies

This project uses:

* RestAssured
* TestNG
* Maven Surefire Plugin

(Refer to `pom.xml` for the complete list.)

---

## ⚙️ HyperExecute Configuration

The main configuration file is:

```
hyperexecute.yaml
```

Key configurations include:

* Runtime: Java
* Test framework: TestNG
* Parallel execution support
* Maven command to execute API tests

Example snippet:

```yaml
runtime:
  - language: java
    version: "8"

runson: linux

concurrency: 5

testDiscovery:
  type: raw
  mode: static
  command: mvn test
```

---

## ▶️ How to Run Tests on LambdaTest HyperExecute

### Step 1: Download HyperExecute CLI

Download the HyperExecute CLI for your operating system and place it in the **project root directory** (same level as `hyperexecute.yaml`).

| Operating System | Download Link                                                                                                                                    |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Windows          | [https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe](https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe) |
| macOS            | [https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute](https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute)           |
| Linux            | [https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute](https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute)             |

> **Note:** For macOS/Linux, provide execute permission using:
>
> ```bash
> chmod +x hyperexecute
> ```

---

### Step 2: Open terminal in project root

```
API-RestAssured-hyper
```

### Step 3: Run HyperExecute command

```bash
hyperexecute.exe --config hyperexecute.yaml
```

### Step 1: Open terminal in project root

```
API-RestAssured-hyper
```

### Step 2: Run HyperExecute command

```bash
hyperexecute.exe --config hyperexecute.yaml
```

./hyperexecute --user YOUR_USERNAME --key YOUR_ACCESS_KEY --config hyperexecute.yaml

---

## 📊 View Test Results

* Execution logs are available in `hyperexecute-cli.log`
* Detailed test reports can be viewed on the **LambdaTest Dashboard**
* API execution status, logs, and timings are available per job

---

## 🚀 Features

* Fast API execution using HyperExecute
* Parallel test execution
* Cloud-based reporting
* Scalable and CI/CD friendly

---

## 🧪 Sample Use Cases Covered

* GET / POST API validation
* Status code verification
* Response body assertions
* Header and payload validation

---

## 🔧 Troubleshooting

* Ensure `LT_USERNAME` and `LT_ACCESS_KEY` are correctly set
* Verify Java and Maven versions
* Check `hyperexecute-cli.log` for failures
* Confirm `pom.xml` test configuration

---

## 📌 Notes

* This setup is for **API testing only** (no browser required)
* Can be integrated with CI tools like Jenkins, GitHub Actions, Azure DevOps

---

## 👤 Author

Namrata Bose

---

## 📄 License

This project is for learning and internal testing purposes.
