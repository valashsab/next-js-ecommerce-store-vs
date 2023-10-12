export function updateExistingQuantity(productId: number, quantity: number) {
  // 1. get & store current cookie
  const productsCookie = getCookie('products');
  // 2. parse the cookie value

  // !productsCookie <=> productsCookie === undefined  // save parsed cookie or save empty []
  const productsInput = !productsCookie
    ? // Case A: cookie is undefined
      // we need to create a new cookie with an empty array
      []
    : parseJson(productsCookie) || [];
  // 3. we update the cookie value
  // We get the the object for the products on cookies or undefined
  const productToUpdate = productsInput.find((product) => {
    return product.id === productId;
  });
  // Case B: cookie is defined and fruit id already exists!
  // if we are in fruit id = 1
  if (productToUpdate) {
    productToUpdate.quantity += quantity;
  }
  return updateExistingQuantity;
}
