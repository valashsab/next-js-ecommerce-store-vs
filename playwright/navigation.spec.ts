// import test, { expect } from '@playwright/test';

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

// test('navigation test', async ({ page }) => {
//   await page.goto('http://localhost:3000');

//   await page
//     .getByRole('navigation')
//     .getByRole('link', { name: 'Products' })
//     .click();
//   await page.waitForURL('http://localhost:3000/products');
//   await expect(page).toHaveURL('http://localhost:3000/products');

//   for (const product of products) {
//     await expect(page.getByTestId(`animal-type-${product.id}`)).toHaveText(
//       product.type,
//     );
//     await expect(page.getByRole('img', { type: product.type })).toBeVisible();
//     await expect(page.getByRole('link', { type: product.type })).toBeVisible();
//   }

//   await page.getByRole('link', { name: 'Fruits' }).click();
//   await page.waitForURL('http://localhost:3000/fruits');
//   await expect(page).toHaveURL('http://localhost:3000/fruits');

//   await page.getByRole('link', { name: '🍎 Apple' }).click();
//   await page.waitForURL('http://localhost:3000/fruits/1');
//   await expect(page).toHaveURL('http://localhost:3000/fruits/1');

//   await page.getByRole('textbox').fill('This is a comment');
//   await page.getByRole('button', { name: 'Add comment' }).click();
//   await expect(
//     page.locator('div').filter({ hasText: 'This is a comment' }),
//   ).toBeVisible();

//   await page.getByRole('link', { name: 'Fruits' }).click();
//   await page.waitForURL('http://localhost:3000/fruits');
//   await expect(page).toHaveURL('http://localhost:3000/fruits');

//   await expect(
//     page.locator('[data-test-id="fruit-name-Apple"] > div'),
//   ).toHaveText('This is a comment');
// });
