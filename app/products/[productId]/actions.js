'use server';
import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export async function createOrUpdateItemNumber(productId, itemNumber) {
  // 1. get the current cookie
  const productItemNumbersCookie = getCookie('productItemNumbers');
  // 2. parse the cookie value

  // !productItemNumberCookie <=> productItemNumberCookie === undefined
  const productItemNumbers = !productItemNumbersCookie
    ? // Case A: cookie is undefined
      // we need to create a new cookie with an empty array
      []
    : parseJson(productItemNumbersCookie);

  // 3. we edit the cookie value
  // We get the the object for the fruit on cookies or undefined
  const quantityToUpdate = productItemNumbers.find((productItemNumber) => {
    return productItemNumber.id === productId;
  });
  // Case B: cookie is defined and fruit id already exists!
  // if we are in fruit id = 1
  if (quantityToUpdate) {
    quantityToUpdate.itemNumber = itemNumber;
  } else {
    // Case C: cookie is defined and fruit id doesn't exist!
    productItemNumbers.push({
      id: productId,
      itemNumber: itemNumber,
    });
  }

  // 4. we override the cookie
  await cookies().set('productItemNumbers', JSON.stringify(productItemNumbers));
}
