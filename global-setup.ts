import { chromium, FullConfig } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config(); // Load .env variables

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(process.env.BASE_URL);
  await page.getByRole('textbox', { name: 'Username' }).fill(process.env.ADMIN_USER);
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.ADMIN_PASS);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForURL(/.*dashboard/);
  await page.context().storageState({ path: 'storageState/adminStorage.json' });
  await browser.close();
}

export default globalSetup;
