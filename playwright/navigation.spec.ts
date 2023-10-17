import test, { expect } from '@playwright/test';

// type Product = {
//   id: number;
//   type: string;
//   weight: string;
//   price: number;
//   currency: string;
//   slug: string | null;
// };

// const products = [
//   {
//     id: 1,
//     type: 'izumi',
//     weight: '30g',
//     price: 22,
//     currency: 'Euro',
//     slug: 'Matcha Izumi',
//   },
//   {
//     id: 2,
//     type: 'akashi',
//     weight: '30g',
//     price: 32,
//     currency: 'Euro',
//     slug: 'Matcha Akashi',
//   },

//   {
//     id: 3,
//     type: 'horai',
//     weight: '30g',
//     price: 42,
//     currency: 'Euro',
//     slug: 'Matcha Horai',
//   },
//   {
//     id: 4,
//     type: 'tsuki',
//     weight: '50g',
//     price: 13,
//     currency: 'Euro',
//     slug: 'Matcha Tsuki',
//   },
// ];

test('navigation test', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // navigate to products page
  await page
    .getByRole('navigation')
    .getByRole('link', { name: 'Products' })
    .click();
  await page.waitForURL('http://localhost:3000/products');
  await expect(page).toHaveURL('http://localhost:3000/products');

  // click on random product
  await page.getByTestId('product-1').click();
  await page.waitForURL('http://localhost:3000/products/1');
  await expect(page).toHaveURL('http://localhost:3000/products/1');

  // click on "add to cart" button
  await page.locator('#quantity').fill('1');
  await page.getByTestId('product-add-to-cart').click();
  await expect(page.getByText('Quantity in cart: 1')).toBeVisible();

  // change quantity e.g. add 2, fill in number in input field
  await page.locator('#quantity').fill('2');
  await page.getByTestId('product-add-to-cart').click();
  await expect(page.getByText('Quantity in cart: 3')).toBeVisible();

  // click "continue shopping" to be redirected to products page
  await page.getByRole('button', { name: 'Continue shopping' }).click();
  await page.waitForURL('http://localhost:3000/products');
  await expect(page).toHaveURL('http://localhost:3000/products');

  // click on random product
  await page.getByTestId('product-2').click();
  await page.waitForURL('http://localhost:3000/products/2');
  await expect(page).toHaveURL('http://localhost:3000/products/2');

  // click on "add to cart" button
  await page.locator('#quantity').fill('1');
  await page.getByTestId('product-add-to-cart').click();
  await expect(page.getByText('Quantity in cart: 1')).toBeVisible();

  // click on checkout button
  await page.getByRole('button', { name: 'Go to cart' }).click();
  await page.waitForURL('http://localhost:3000/cart');
  await expect(page).toHaveURL('http://localhost:3000/cart');

  // click on remove button & check removal id product(s)
  // Assuming you have a list of products and want to remove the product with a specific ID
  // alt
  // const productIDToRemove = 1;
  // neu
  const productId = 1;

  // Click the "Remove" button for the product you want to remove
  // alt
  // await page.getByTestId(`cart-product-remove-${productId}`).click();
  // neu
  await page
    .getByTestId('cart-product-1')
    .getByRole('button', { name: 'Remove' })
    .click();

  // Check if the removed product's quantity element is not present
  const quantitySelector = `[data-test-id="cart-product-quantity-${productId}"]`;

  // Wait for the quantity element to be removed from the DOM
  await page.waitForSelector(quantitySelector, { state: 'detached' });

  // Check if the quantity element is not present, indicating the product has been removed
  const quantityElement = await page.$(quantitySelector);

  if (!quantityElement) {
    console.log(
      `Product with ID ${productId} has been removed, and its quantity is now 0`,
    );
  } else {
    console.error(
      `Product with ID ${productId} was not removed, or its quantity is not 0`,
    );
  }

  // Checkout flow, payment page, thank you page
  // click on checkout button
  await page.getByRole('button', { name: 'Checkout' }).click();
  await page.waitForURL('http://localhost:3000/checkout');
  await expect(page).toHaveURL('http://localhost:3000/checkout');

  await page.getByTestId('checkout-first-name').fill('Max');
  await page.getByTestId('checkout-last-name').fill('Mustermann');
  await page.getByTestId('checkout-email').fill('max.m@gmail.com');
  await page.getByTestId('checkout-address').fill('Sturzgasse 1a');
  await page.getByTestId('checkout-city').fill('Vienna');
  await page.getByTestId('checkout-postal-code').fill('1140');
  await page.getByTestId('checkout-country').fill('Austria');
  await page.getByTestId('checkout-credit-card').fill('1234123412341234');
  await page.getByTestId('checkout-expiration-date').fill('1227');
  await page.getByTestId('checkout-security-code').fill('123');

  await page.getByTestId('checkout-confirm-order').click();
  await page.waitForURL('http://localhost:3000/thankyou');
  await expect(page).toHaveURL('http://localhost:3000/thankyou');
});
