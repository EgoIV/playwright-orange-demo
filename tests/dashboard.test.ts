
import { test } from '@playwright/test';
// import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

test.describe('Dashboard (Authenticated)', () => {
  test('should show dashboard without logging in again', async ({ page }) => {
    // const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    // await loginPage.goto();
    // await loginPage.login('Admin', 'admin123');
    // await page.waitForURL('**/dashboard/index');
    await dashboardPage.goto();
    await dashboardPage.assertDashboardPageDisplay();
  });
});
