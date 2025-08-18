# PLAYWRIGHT_DEMO

## Table of Contents

- [About](#about)
- [Project Structure](#structure)
- [Installation](#getting_started)
- [How to run](#how)

## About <a name = "about"></a>

Automation framework for UI and API testing using Playwright & TypeScript

## Project Structure <a name = "structure"></a>

```bash
├── api/
│   ├── clients/
│   │   └── sampleApi.ts           # Reusable API client
│   └── tests/
│       └── sample.api.spec.ts     # API test specs
├── ui/
│   ├── pages/                     # Page Object Model classes
│   │   └── loginPage.ts
│   └── tests/                     # UI test specs
│       ├── login.test.ts
├── global-setup.ts                # Global setup script
├── playwright.config.ts           # Playwright configuration
├── tsconfig.json                  # TypeScript configuration
├── .env                           # Environment variables (shared UI + API)
└── package.json                   # Project scripts & dependencies
```

## Installation <a name = "getting_started"></a>

1. Clone the repository
```bash
  git clone https://github.com/EgoIV/playwright-orange-demo
```

2. Go inside project
```bash
  cd playwright-orange-demo
```

3. Install project dependencies (from package.json)
```bash
  npm install
```

4. Install Playwright browsers + deps
```bash
  npx playwright install --with-deps
```  

## How to run <a name = "how"></a>
```bash
  npx playwright test
```