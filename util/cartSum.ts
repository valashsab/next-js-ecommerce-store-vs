export function calculateTotalSum(
  productsWithQuantity: Array<{ quantity: number; price: number }>,
) {
  // Your existing totalSum logic
  const totalSum = productsWithQuantity.reduce(
    (accumulator: number, product: { quantity: number; price: number }) => {
      return accumulator + product.quantity * product.price;
    },
    0,
  );
  return totalSum;
}
