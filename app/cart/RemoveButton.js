'use client';
import { removeProduct } from './removeProduct';

export default function RemoveButton({ productId }) {
  const handleRemoveProduct = async () => {
    await removeProduct(productId);
  };
  return (
    <div>
      <button onClick={handleRemoveProduct}>Remove</button>
    </div>
  );
}
