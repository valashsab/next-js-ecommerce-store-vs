import { expect, test } from '@jest/globals';
import { combineProductData } from '../multiply';

test('combines product data with quantity data', () => {
  const products = [
    { id: 1, type: 'Product A', price: 10 },
    { id: 2, type: 'Product B', price: 20 },
  ];

  const productsInput = [
    { id: 1, quantity: 2 },
    { id: 2, quantity: 3 },
  ];

  const combinedData = combineProductData(products, productsInput);

  // Add your expectations here, e.g., check if product data is combined correctly
  expect(combinedData[0]).toEqual({
    id: 1,
    type: 'Product A',
    price: 10,
    quantity: 2,
  });
  expect(combinedData[1]).toEqual({
    id: 2,
    type: 'Product B',
    price: 20,
    quantity: 3,
  });
});
