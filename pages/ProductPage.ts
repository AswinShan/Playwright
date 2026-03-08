import { Page , expect} from '@playwright/test';

export class ProductPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async addToCart() {
    const text = this.page.locator('span#productTitle');
    await expect (text).toBeVisible();
    await this.page.locator("(//input[@id='add-to-cart-button'])[2]").click();
  }

  async openCart() {
    await this.page.locator('#nav-cart').click();
  }
}