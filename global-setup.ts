import { chromium, FullConfig } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import * as dotenv from 'dotenv';

dotenv.config(); // Load .env variables

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const loginPage = new LoginPage(page);
  await page.goto('https://opensource-demo.orangehrmlive.com');
  await loginPage.login(
    process.env.ADMIN_USER || 'Admin',
    process.env.ADMIN_PASS || 'admin123'
  );
  await page.context().storageState({ path: 'storageState/adminStorage.json' });
  await browser.close();
}

export default globalSetup;
