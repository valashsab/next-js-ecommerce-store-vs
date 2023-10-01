'use server';
import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export async function setOrUpdateQuantity(productId, itemNumber) {
  // 1. get & store current cookie
  const quantityCartCookie = getCookie('quantityCart');
  // 2. parse the cookie value

  // !quantityCartCookie <=> quantityCartCookie === undefined  // save parsed cookie or save empty []
  const quantityCarts = !quantityCartCookie
    ? // Case A: cookie is undefined
      // we need to create a new cookie with an empty array
      []
    : parseJson(quantityCartCookie);

  // 3. we update the cookie value
  // We get the the object for the fruit on cookies or undefined
  const quantityCartsToUpdate = quantityCarts.find((quantity) => {
    return quantity.id === productId;
  });
  // Case B: cookie is defined and fruit id already exists!
  // if we are in fruit id = 1
  if (quantityCartsToUpdate) {
    quantityCartsToUpdate.itemNumber = itemNumber;
  } else {
    // Case C: cookie is defined and fruit id doesn't exist!
    quantityCarts.push({
      id: productId,
      itemNumber: itemNumber,
    });
  }

  // 4. we overwrite the cookie
  await cookies().set('quantityCart', JSON.stringify(quantityCarts));
}
