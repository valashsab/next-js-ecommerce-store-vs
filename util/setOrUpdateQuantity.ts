type Product = {
  id: number;
  quantity: number;
};

export function updateProductQuantity(
  productsInput: Product[],
  productId: number,
  quantity: number,
): Product[] {
  const productToUpdate = productsInput.find(
    (product) => product.id === productId,
  );
  if (productToUpdate) {
    productToUpdate.quantity += quantity;
  } else {
    productsInput.push({
      id: productId,
      quantity: quantity,
    });
  }
  return productsInput;
}
