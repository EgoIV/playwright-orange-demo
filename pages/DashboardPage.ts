import { Page, Locator, expect } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly dashboardHeading: Locator;
  readonly searchInput: Locator;

  readonly menuArr = ['Admin', 'PIM', 'Leave', 'Time', 'Recruitment', 'My Info',
    'Performance', 'Dashboard', 'Directory', 'Maintenance', 'Claim', 'Buzz'];

  constructor(page: Page) {
    this.page = page;
    this.dashboardHeading = page.getByRole('heading', { name: 'Dashboard' })
    this.searchInput = page.getByRole('textbox', { name: 'Search' })
  }

  async goto() {
    await this.page.goto('/web/index.php/dashboard/index');
  }

  async assertDashboardPageDisplay() {
    await expect(this.dashboardHeading).toBeVisible();
  }

  async search(query: string) {
    await this.searchInput.fill(query);
  }

  async assertMenuDisplayed(menu: string) {
    let visibleMenu = menu.split(',').filter(item => item.trim() !== '');
    for (const menu of visibleMenu) {
      await expect(this.page.getByRole('link', { name: menu })).toBeVisible();
    }

  }

  async assertMenuNotDisplayed(menu: string) {
    let visibleMenu = menu.split(',').filter(item => item.trim() !== '');
    if (visibleMenu.length == 0) return;
    const invisibleMenu = this.menuArr.filter(item => !visibleMenu.includes(item));
    for (const menu of invisibleMenu) {
      await expect(this.page.getByRole('link', { name: menu })).toBeHidden();
    }
  }
}
