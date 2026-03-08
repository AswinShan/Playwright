import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly searchBox: Locator;
  readonly searchButton: Locator;
  readonly continueShoppingButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchBox = page.locator('#twotabsearchtextbox');
    this.searchButton = page.locator('#nav-search-submit-button');
    this.continueShoppingButton = page.getByRole('button', { name: /continue shopping/});
  }

  async dismissStartupPopupIfPresent() {
    const isVisible = await this.continueShoppingButton.isVisible().catch(() => false);
    if (isVisible) {
      await this.continueShoppingButton.click();
    }
  }

  async verifySearchBox() {
    await this.dismissStartupPopupIfPresent();
    await expect(this.searchBox).toBeVisible();
  }

  async searchProduct(product: string) {
    await this.searchBox.fill(product);
    await this.searchButton.click();
  }
}
