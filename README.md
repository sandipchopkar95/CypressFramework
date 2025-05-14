
# Cypress E2E Testing Framework

This project uses **Cypress** for end-to-end testing, following the **Page Object Model (POM)** design pattern for better maintainability and scalability.

---

## 📁 Project Structure

```
cypress/
├── downloads/                 # For downloaded files during tests
│   └── downloads.htm
├── e2e/tests/                 # Test specifications
│   ├── cardPageTest.js
│   ├── checkoutPageTest.js
│   ├── loginPageTest.js
│   ├── overviewPageTest.js
│   └── productPageTest.js
├── fixtures/                  # Static test data
│   ├── credentials.json
│   └── customerDetails.json
├── pages/                     # Page Object Models
│   ├── cartPage.js
│   ├── checkoutPage.js
│   ├── loginPage.js
│   ├── overviewPage.js
│   └── productPage.js
├── support/                   # Custom commands and global config
│   ├── commands.js
│   └── e2e.js
cypress.config.js              # Cypress configuration file
package.json                   # NPM dependencies and scripts
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

```bash
npm install
```

### Run Tests

```bash
npx cypress open   # Open Cypress Test Runner UI
npx cypress run    # Run tests in headless mode
```

---

## ✅ Writing Tests

Tests are located in the `cypress/e2e/tests/` directory and are written using the POM structure defined in `cypress/pages/`.

Example test flow in `loginPageTest.js`:
```js
import LoginPage from '../pages/loginPage';

const loginPage = new LoginPage();

describe('Login Test', () => {
  it('should log in with valid credentials', () => {
    cy.visit('/');
    loginPage.login('user', 'password');
  });
});
```

---

## 📦 Fixtures

Static test data like credentials and customer details are stored in the `cypress/fixtures/` directory. You can access them in tests using:

```js
cy.fixture('credentials').then((data) => {
  // use data.username, data.password
});
```

---

## 🔧 Custom Commands

Defined in `cypress/support/commands.js`. Add reusable Cypress commands to simplify your tests.

---

