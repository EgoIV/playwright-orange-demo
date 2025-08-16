import { test } from '@playwright/test';
import { DashboardPage } from '../pages/dashboardPage';

const dashBoardData = [
  { searchText: 'Dashboard', menu: 'Dashboard', desc: 'full menu name' },
  { searchText: 'Dash', menu: 'Dashboard', desc: 'partial menu name' },
  { searchText: 'dashboard', menu: 'Dashboard', desc: 'lowercase text' },
  { searchText: 'DASHBOARD', menu: 'Dashboard', desc: 'uppercase text' },
  { searchText: ' Dashboard ', menu: '', desc: 'leading/trailing spaces' },
  { searchText: 'ABC', menu: '', desc: 'unrelated keyword' },
  { searchText: 'ai', menu: 'Maintenance,Claim', desc: 'multiple matching items' },
  { searchText: '', menu: 'Admin,PIM,Leave,Time,Recruitment,My Info,Performance,Dashboard,Directory,Maintenance,Claim,Buzz', desc: 'empty search' }
];

for (const data of dashBoardData) {
  test(`Search menu is case: ${data.desc}`, async ({ page }) => {
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.goto();
    await dashboardPage.search(data.searchText);
    await dashboardPage.assertMenuDisplayed(data.menu);
    await dashboardPage.assertMenuNotDisplayed(data.menu);
  });
}

test('Dashboard page should be display', async ({ page }) => {
  const dashboardPage = new DashboardPage(page);
  await dashboardPage.goto();
  await dashboardPage.assertDashboardPageDisplay();
});
