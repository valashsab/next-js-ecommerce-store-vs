'use client';
import styles from './RemoveButton.module.scss';
import { removeProduct } from './removeProduct';

export default function RemoveButton({ productId }) {
  const handleRemoveProduct = async () => {
    await removeProduct(productId);
  };
  return (
    <div>
      <button
        className={styles.removeButton}
        data-test-id={`cart-product-remove-${productId}`}
        onClick={handleRemoveProduct}
      >
        Remove
      </button>
    </div>
  );
}
