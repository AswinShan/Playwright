import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly cartIcon: Locator;
  readonly cartCount: Locator;
  readonly deleteButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartIcon = page.locator('#nav-cart');
    this.cartCount = page.locator('#nav-cart-count');
    this.deleteButton = page.locator('input[value="Delete"]');
  }

  async openCart() {
    await this.cartIcon.click();
  }

  async verifyItemPresent(productName: string) {
    const text = this.page.locator("(//span[@data-a-updated='true']//span)[2]").getByText(new RegExp(productName, 'i'));
    await expect(text).toBeVisible();
  }

  async emptyCart() {
    await this.deleteButton.click();
  }

  async verifyCartIsEmpty() {
    await expect(this.cartCount).toHaveText('0');
  }
}

