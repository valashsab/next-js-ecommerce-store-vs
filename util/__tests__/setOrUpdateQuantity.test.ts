import { describe, expect, test } from '@jest/globals';
import { updateProductQuantity } from '../setOrUpdateQuantity';

describe('updateProductQuantity function', () => {
  test('adds a new product to the list', () => {
    const productsInput: { id: number; quantity: number }[] = [];
    const productId = 1;
    const quantity = 3;

    const updatedProducts = updateProductQuantity(
      productsInput,
      productId,
      quantity,
    );

    expect(updatedProducts).toEqual([{ id: productId, quantity }]);
  });

  test('updates the quantity of an existing product', () => {
    const productsInput = [{ id: 1, quantity: 2 }];
    const productId = 1;
    const quantity = 3;

    const updatedProducts = updateProductQuantity(
      productsInput,
      productId,
      quantity,
    );

    expect(updatedProducts).toEqual([{ id: productId, quantity: 5 }]);
  });
});
