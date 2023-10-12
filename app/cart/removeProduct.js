'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export async function removeProduct(productId) {
  // 1. get & store current cookie
  const productsCookie = getCookie('cart');
  // 2. parse the cookie value

  // !productsCookie <=> productsCookie === undefined  // save parsed cookie or save empty []
  const productsInput = !productsCookie
    ? // Case A: cookie is undefined
      // we need to create a new cookie with an empty array
      []
    : parseJson(productsCookie);

  // 3. Find index of product with the specified productId
  const productIndexToRemove = productsInput.findIndex(
    (product) => product.id === productId,
  );

  if (productIndexToRemove !== -1) {
    // 4. Remove the product from the array
    productsInput.splice(productIndexToRemove, 1);

    // 4. we overwrite the cookie
    await cookies().set('cart', JSON.stringify(productsInput));
  }
}
