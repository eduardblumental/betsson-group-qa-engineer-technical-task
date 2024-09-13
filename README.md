## Project Description

This repository contains UI tests for [Swag Labs web app](https://www.saucedemo.com) and API tests for [Petstore API](https://petstore.swagger.io). The tests are written using the **Playwright** framework. For UI tests the **Page Object Model (POM)** pattern is used. Test specifications are located in the **tests** directory. Elements and interactions for different pages are defined in the **pages** directory. There is a sample test report `report.html` included in the project. 

## How to run the tests

### Pre-requisites
- **git**: Ensure git is installed `git --version`
- **node.js**: Ensure node.js is installed `node --version`
- **playwright**: Ensure playwright is installed `npx playwright --version`

### Running the project

1. **Clone the repository**: `git clone https://github.com/eduardblumental/betsson-group-qa-engineer-technical-task.git`

2. **Navigate to the project directory**: `cd betsson-group-qa-engineer-technical-task`

3. **Install dependencies**: `npm install`

4. **Install Playwright browsers**: `npx playwright install`

5. **Run the tests**:

   - To run all tests `npx playwright test`
   - To run **API** tests: `npx playwright test tests/api`
   - To run **UI** tests: `npx playwright test tests/ui`

6. **View the test report**: `npx playwright show-report`

## UI Tests Overview
**Application under test**: [https://www.saucedemo.com](https://www.saucedemo.com)

- **Login Functionality**:
  1. Valid login with correct credentials.
  2. Attempt to log in with empty credentials.
  3. Invalid login with incorrect credentials.

- **Cart Functionality**:
  1. Adds an item (backpack) to the cart and verifies it.
  2. Removes the item from the cart and checks the cart is empty.

## API Tests Overview
**API under test**: [https://petstore.swagger.io/v2](https://petstore.swagger.io/v2)

- **POST /pet API Tests**:
  1. Adds a valid pet (status: `200 OK`).
  2. Attempts to add a pet with an invalid ID (expected status: `405`, actual: `500`).
  
- **GET /pet/{petId} API Tests**:
  1. Retrieves a valid pet by ID (status: `200 OK`).
  2. Tries to retrieve a pet with an invalid ID format (expected status: `400`, actual: `404`).
  3. Retrieves a non-existent pet (status: `404 Not Found`).
