import { Page, Locator, expect } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly dashboardHeading: Locator;
  readonly searchInput: Locator;


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

  async assertMenuDisplayed(menuName: string) {
    await expect(this.page.getByRole('link', { name: menuName })).toBeVisible();
  }
}
