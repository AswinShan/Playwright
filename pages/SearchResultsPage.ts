import { Page } from '@playwright/test';

export class SearchResultsPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  
    async selectProduct(product: string ) {
        const newPagePromise = this.page.context().waitForEvent('page');
        const productLocator = this.page.locator(`text= ${product}`).first();
        await productLocator.click();
        const productPage = await newPagePromise;
        await productPage.waitForLoadState('domcontentloaded');
        return productPage;
    }
}
