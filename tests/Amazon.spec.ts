import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage'; 
import { SearchResultsPage } from '../pages/SearchResultsPage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';

test('Amazon UI test for iPhone 15', async ({ page }) => {
  await page.goto('https://www.amazon.in');

  const homePage = new HomePage(page);
  const searchPage = new SearchResultsPage(page);

  // Verify search box
  await homePage.verifySearchBox();

  // Search product
  await homePage.searchProduct('iPhone');
  const productTab = await searchPage.selectProduct('iPhone 15');

  // Create ProductPage using new tab
  const productPage = new ProductPage(productTab);

  // Add to cart
  await productPage.addToCart();

  // Open cart
  await productPage.openCart();

  // Create CartPage (still using productTab)
  const cartPage = new CartPage(productTab);

  // Verify item present
  await cartPage.verifyItemPresent('iPhone 15');

  // Remove item
  await cartPage.emptyCart();

  // Verify cart is empty
  await cartPage.verifyCartIsEmpty();
  
});

test('Amazon UI test for iPhone 17', async ({ page }) => {
  await page.goto('https://www.amazon.in');

  const homePage = new HomePage(page);
  const searchPage = new SearchResultsPage(page);

  // Verify search box
  await homePage.verifySearchBox();

  // Search product
  await homePage.searchProduct('iPhone');
  const productTab = await searchPage.selectProduct('iPhone 17');

  // Create ProductPage using new tab
  const productPage = new ProductPage(productTab);

  // Add to cart
  await productPage.addToCart();

  // Open cart
  await productPage.openCart();

  // Create CartPage (still using productTab)
  const cartPage = new CartPage(productTab);

  // Verify item present
  await cartPage.verifyItemPresent('iPhone 17');

  // Remove item
  await cartPage.emptyCart();

  // Verify cart is empty
  await cartPage.verifyCartIsEmpty();
  
});
