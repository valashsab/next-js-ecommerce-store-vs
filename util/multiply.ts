export function combineProductData(
  products: Array<{ id: number; type: string; price: number }>,
  productsInput: Array<{ id: number; quantity: number }>,
) {
  return products.map((product) => {
    const matchingWithProductFromCookie = productsInput.find(
      (productObject) => product.id === productObject.id,
    );

    return { ...product, quantity: matchingWithProductFromCookie?.quantity };
  });
}
