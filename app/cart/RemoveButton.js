'use client';
import { removeProduct } from './actions';

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
