export function multiply(quantity: number, price: number) {
  if (typeof quantity !== 'number' || typeof price !== 'number') {
    throw new Error('Pass only numbers!');
  }
  return quantity * price;
}
