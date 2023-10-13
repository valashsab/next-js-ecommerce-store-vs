import { expect, test } from '@jest/globals';
import { calculateTotalSum } from '../cartSum';

test('calculates the total sum correctly', () => {
  const productsWithQuantity = [
    { quantity: 2, price: 10 },
    { quantity: 3, price: 20 },
    { quantity: 1, price: 5 },
  ];

  const expectedTotalSum = 2 * 10 + 3 * 20 + 1 * 5;

  const result = calculateTotalSum(productsWithQuantity);

  expect(result).toBe(expectedTotalSum);
  // expect(result).toBe(85);
});

// // test('throws an error when arguments are not numbers', () => {
//   // Test that an error is thrown when non-number arguments are provided
//   const invalidData: Array<{ quantity: string ; price: number }> = [
//     // @ts-expect-error testing incorrect arguments
//     { quantity: '1', price: 10 },
//     // @ts-expect-error testing incorrect arguments
//     { quantity: 3, price: '20' },
//     // @ts-expect-error testing incorrect arguments
//     { quantity: 'abc', price: false },
//   ];

//   invalidData.forEach((data) => {
//     // @ts-expect-error testing incorrect arguments
//     expect(() => calculateTotalSum([data])).toThrow('Pass only numbers!');
//   });
// });
